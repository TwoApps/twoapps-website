/**
 * Leads storage and management
 * Persists lead data to data/leads.json with nurture sequence tracking
 */

import fs from "fs";
import path from "path";

export type LeadEntry = {
  id: string;
  name: string;
  email: string;
  company: string;
  sourcePage: string;
  downloadedAt: string;
  
  // Nurture sequence tracking
  nurtureSequence: {
    day0Sent: boolean;
    day0SentAt?: string;
    day2Sent: boolean;
    day2SentAt?: string;
    day5Sent: boolean;
    day5SentAt?: string;
    day10Sent: boolean;
    day10SentAt?: string;
    day14Sent: boolean;
    day14SentAt?: string;
  };
  
  // Email engagement tracking
  emailStats: {
    emailsSent: number;
    lastEmailSentAt?: string;
    unsubscribed: boolean;
    bounced: boolean;
  };
};

type LeadsData = {
  leads: LeadEntry[];
  lastUpdated: string;
};

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function readLeadsFile(): LeadsData {
  try {
    const data = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is invalid, return empty structure
    return {
      leads: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

function writeLeadsFile(data: LeadsData): void {
  data.lastUpdated = new Date().toISOString();
  
  // Ensure data directory exists
  const dataDir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(LEADS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Add a new lead to the store
 */
export function addLead(leadData: {
  name: string;
  email: string;
  company: string;
  sourcePage: string;
}): LeadEntry {
  const leadsData = readLeadsFile();
  
  // Check if lead already exists
  const existingLead = leadsData.leads.find(l => l.email === leadData.email);
  if (existingLead) {
    // Update download timestamp but keep nurture sequence status
    existingLead.downloadedAt = new Date().toISOString();
    existingLead.sourcePage = leadData.sourcePage;
    writeLeadsFile(leadsData);
    return existingLead;
  }
  
  // Create new lead
  const newLead: LeadEntry = {
    id: generateLeadId(),
    name: leadData.name,
    email: leadData.email,
    company: leadData.company,
    sourcePage: leadData.sourcePage,
    downloadedAt: new Date().toISOString(),
    nurtureSequence: {
      day0Sent: false,
      day2Sent: false,
      day5Sent: false,
      day10Sent: false,
      day14Sent: false
    },
    emailStats: {
      emailsSent: 0,
      unsubscribed: false,
      bounced: false
    }
  };
  
  leadsData.leads.push(newLead);
  writeLeadsFile(leadsData);
  
  return newLead;
}

/**
 * Update a lead's nurture sequence status
 */
export function updateLeadNurtureStatus(
  leadId: string,
  update: Partial<LeadEntry["nurtureSequence"]>
): LeadEntry | null {
  const leadsData = readLeadsFile();
  
  const lead = leadsData.leads.find(l => l.id === leadId);
  if (!lead) {
    return null;
  }
  
  lead.nurtureSequence = {
    ...lead.nurtureSequence,
    ...update
  };
  
  writeLeadsFile(leadsData);
  return lead;
}

/**
 * Update a lead's email stats
 */
export function updateLeadEmailStats(
  leadId: string,
  update: Partial<LeadEntry["emailStats"]>
): LeadEntry | null {
  const leadsData = readLeadsFile();
  
  const lead = leadsData.leads.find(l => l.id === leadId);
  if (!lead) {
    return null;
  }
  
  lead.emailStats = {
    ...lead.emailStats,
    ...update,
    lastEmailSentAt: new Date().toISOString()
  };
  
  if (update.emailsSent !== undefined) {
    lead.emailStats.emailsSent = lead.emailStats.emailsSent + 1;
  }
  
  writeLeadsFile(leadsData);
  return lead;
}

/**
 * Get all leads that need a specific nurture email
 */
export function getLeadsForNurtureEmail(emailDay: "day0" | "day2" | "day5" | "day10" | "day14"): LeadEntry[] {
  const leadsData = readLeadsFile();
  const now = new Date();
  
  const fieldMap = {
    day0: "day0Sent",
    day2: "day2Sent",
    day5: "day5Sent",
    day10: "day10Sent",
    day14: "day14Sent"
  } as const;
  
  const daysMap = {
    day0: 0,
    day2: 2,
    day5: 5,
    day10: 10,
    day14: 14
  } as const;
  
  const fieldName = fieldMap[emailDay];
  const daysThreshold = daysMap[emailDay];
  
  return leadsData.leads.filter(lead => {
    // Skip if already sent
    if (lead.nurtureSequence[fieldName]) {
      return false;
    }
    
    // Skip if unsubscribed or bounced
    if (lead.emailStats.unsubscribed || lead.emailStats.bounced) {
      return false;
    }
    
    // Check if enough days have passed since download
    const downloadDate = new Date(lead.downloadedAt);
    const daysSinceDownload = Math.floor((now.getTime() - downloadDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return daysSinceDownload >= daysThreshold;
  });
}

/**
 * Get all leads
 */
export function getAllLeads(): LeadEntry[] {
  const leadsData = readLeadsFile();
  return leadsData.leads;
}

/**
 * Get lead by ID
 */
export function getLeadById(leadId: string): LeadEntry | null {
  const leadsData = readLeadsFile();
  return leadsData.leads.find(l => l.id === leadId) || null;
}

/**
 * Get lead by email
 */
export function getLeadByEmail(email: string): LeadEntry | null {
  const leadsData = readLeadsFile();
  return leadsData.leads.find(l => l.email === email) || null;
}
