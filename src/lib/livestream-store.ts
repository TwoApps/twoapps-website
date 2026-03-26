/**
 * Livestream registration storage and management
 * Persists registration data to data/livestream-registrations.json
 */

import fs from "fs";
import path from "path";

export type LivestreamRegistration = {
  id: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  source: string;
  registeredAt: string;
  
  // Email sequence tracking
  emailSequence: {
    confirmationSent: boolean;
    confirmationSentAt?: string;
    reminder24hSent: boolean;
    reminder24hSentAt?: string;
    reminder1hSent: boolean;
    reminder1hSentAt?: string;
    recordingSent: boolean;
    recordingSentAt?: string;
    followUpDay0Sent: boolean;
    followUpDay0SentAt?: string;
    followUpDay3Sent: boolean;
    followUpDay3SentAt?: string;
    followUpDay7Sent: boolean;
    followUpDay7SentAt?: string;
  };
  
  // Email engagement tracking
  emailStats: {
    emailsSent: number;
    lastEmailSentAt?: string;
    unsubscribed: boolean;
    bounced: boolean;
  };
  
  // Demo attendance
  attended: boolean;
  attendedAt?: string;
};

type LivestreamData = {
  registrations: LivestreamRegistration[];
  eventDate?: string;
  eventTitle?: string;
  lastUpdated: string;
};

const LIVESTREAM_FILE = path.join(process.cwd(), "data", "livestream-registrations.json");

function generateRegistrationId(): string {
  return `ls_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function readLivestreamFile(): LivestreamData {
  try {
    const data = fs.readFileSync(LIVESTREAM_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      registrations: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

function writeLivestreamFile(data: LivestreamData): void {
  data.lastUpdated = new Date().toISOString();
  
  const dataDir = path.dirname(LIVESTREAM_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(LIVESTREAM_FILE, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Add a new registration to the store
 */
export function addRegistration(registrationData: {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  source: string;
}): LivestreamRegistration {
  const livestreamData = readLivestreamFile();
  
  // Check if registration already exists
  const existingRegistration = livestreamData.registrations.find(r => r.email === registrationData.email);
  if (existingRegistration) {
    // Update timestamp but keep sequence status
    existingRegistration.registeredAt = new Date().toISOString();
    existingRegistration.source = registrationData.source;
    writeLivestreamFile(livestreamData);
    return existingRegistration;
  }
  
  // Create new registration
  const newRegistration: LivestreamRegistration = {
    id: generateRegistrationId(),
    name: registrationData.name,
    email: registrationData.email,
    company: registrationData.company,
    jobTitle: registrationData.jobTitle,
    source: registrationData.source,
    registeredAt: new Date().toISOString(),
    emailSequence: {
      confirmationSent: false,
      reminder24hSent: false,
      reminder1hSent: false,
      recordingSent: false,
      followUpDay0Sent: false,
      followUpDay3Sent: false,
      followUpDay7Sent: false
    },
    emailStats: {
      emailsSent: 0,
      unsubscribed: false,
      bounced: false
    },
    attended: false
  };
  
  livestreamData.registrations.push(newRegistration);
  writeLivestreamFile(livestreamData);
  
  return newRegistration;
}

/**
 * Get all registrations
 */
export function getAllRegistrations(): LivestreamRegistration[] {
  const livestreamData = readLivestreamFile();
  return livestreamData.registrations;
}

/**
 * Get registration by email
 */
export function getRegistrationByEmail(email: string): LivestreamRegistration | null {
  const livestreamData = readLivestreamFile();
  return livestreamData.registrations.find(r => r.email === email) || null;
}

/**
 * Get registration count
 */
export function getRegistrationCount(): number {
  const livestreamData = readLivestreamFile();
  return livestreamData.registrations.length;
}

/**
 * Update registration email sequence status
 */
export function updateRegistrationEmailStatus(
  registrationId: string,
  update: Partial<LivestreamRegistration["emailSequence"]>
): LivestreamRegistration | null {
  const livestreamData = readLivestreamFile();
  
  const registration = livestreamData.registrations.find(r => r.id === registrationId);
  if (!registration) {
    return null;
  }
  
  registration.emailSequence = {
    ...registration.emailSequence,
    ...update
  };
  
  writeLivestreamFile(livestreamData);
  return registration;
}

/**
 * Mark registration as attended
 */
export function markAttended(email: string): LivestreamRegistration | null {
  const livestreamData = readLivestreamFile();
  
  const registration = livestreamData.registrations.find(r => r.email === email);
  if (!registration) {
    return null;
  }
  
  registration.attended = true;
  registration.attendedAt = new Date().toISOString();
  
  writeLivestreamFile(livestreamData);
  return registration;
}

/**
 * Get registrations for a specific email type
 */
export function getRegistrationsForEmail(
  emailType: "confirmation" | "reminder24h" | "reminder1h" | "recording" | "followUpDay0" | "followUpDay3" | "followUpDay7"
): LivestreamRegistration[] {
  const livestreamData = readLivestreamFile();
  
  const fieldMap = {
    confirmation: "confirmationSent",
    reminder24h: "reminder24hSent",
    reminder1h: "reminder1hSent",
    recording: "recordingSent",
    followUpDay0: "followUpDay0Sent",
    followUpDay3: "followUpDay3Sent",
    followUpDay7: "followUpDay7Sent"
  } as const;
  
  const fieldName = fieldMap[emailType];
  
  return livestreamData.registrations.filter(r => {
    if (r.emailStats.unsubscribed || r.emailStats.bounced) {
      return false;
    }
    return !r.emailSequence[fieldName];
  });
}
