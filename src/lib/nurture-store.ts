/**
 * Nurture Store - Types and in-memory storage for nurture sequences
 * 
 * In production, replace the in-memory store with a database (PostgreSQL, MongoDB, etc.)
 */

// Types

export type LeadStage = 'lead' | 'consultation' | 'proposal' | 'delivery' | 'completed';
export type EmailStatus = 'pending' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'unsubscribed';

export type Region = 'singapore' | 'australia' | 'new-zealand' | 'gcc-uae' | 'europe' | 'global';

export interface StageHistoryEntry {
  stage: LeadStage;
  timestamp: string;
  reason?: string;
}

export interface EmailRecord {
  sequence: number;
  emailIndex: number;
  status: EmailStatus;
  sentAt: string;
  updatedAt: string;
  openedAt?: string;
  clickedAt?: string;
  metadata: Record<string, unknown>;
}

export interface NurtureLead {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  region: Region;
  source: string;
  
  // Nurture tracking
  currentSequence: number;
  currentEmailIndex: number;
  stage: LeadStage;
  stageHistory: StageHistoryEntry[];
  emailsSent: EmailRecord[];
  
  // Metadata
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface NurtureSequence {
  id: number;
  name: string;
  description: string;
  triggerStage: LeadStage;
  exitStage: LeadStage;
  emails: NurtureEmail[];
}

export interface NurtureEmail {
  index: number;
  dayOffset: number;
  subject: string;
  purpose: string;
  templateId: string;
}

// Sequence Definitions

export const SEQUENCES: NurtureSequence[] = [
  {
    id: 1,
    name: 'Lead → Consultation',
    description: 'Convert cold/warm leads into booked consultation calls',
    triggerStage: 'lead',
    exitStage: 'consultation',
    emails: [
      {
        index: 0,
        dayOffset: 0,
        subject: 'Thanks for your interest — here\'s what we do differently',
        purpose: 'Acknowledge, set expectations, establish differentiation',
        templateId: 'seq1-email1',
      },
      {
        index: 1,
        dayOffset: 2,
        subject: '[Case Study] How [Company] saved 40 hours/week',
        purpose: 'Social proof, industry relevance',
        templateId: 'seq1-email2',
      },
      {
        index: 2,
        dayOffset: 5,
        subject: 'See what automation could save you',
        purpose: 'ROI value proposition, interactive element',
        templateId: 'seq1-email3',
      },
      {
        index: 3,
        dayOffset: 9,
        subject: 'Common concerns about AI automation (and why they\'re worth addressing)',
        purpose: 'Objection handling preemptively',
        templateId: 'seq1-email4',
      },
      {
        index: 4,
        dayOffset: 14,
        subject: 'Let\'s talk — book a free 30-min consultation',
        purpose: 'Final push, clear CTA',
        templateId: 'seq1-email5',
      },
    ],
  },
  {
    id: 2,
    name: 'Consultation → Proposal',
    description: 'Convert consultation calls into proposals and closed deals',
    triggerStage: 'consultation',
    exitStage: 'proposal',
    emails: [
      {
        index: 0,
        dayOffset: 0,
        subject: 'Great meeting — here\'s what we discussed',
        purpose: 'Recap, next steps, maintain momentum',
        templateId: 'seq2-email1',
      },
      {
        index: 1,
        dayOffset: 3,
        subject: '[Case Study] How we solved [similar problem] for [Company]',
        purpose: 'Reinforce with relevant social proof',
        templateId: 'seq2-email2',
      },
      {
        index: 2,
        dayOffset: 7,
        subject: 'Our recommended approach for [Company]',
        purpose: 'Mini proposal teaser, create urgency',
        templateId: 'seq2-email3',
      },
      {
        index: 3,
        dayOffset: 10,
        subject: 'Following up — any questions?',
        purpose: 'Final check-in, clear CTA',
        templateId: 'seq2-email4',
      },
    ],
  },
  {
    id: 3,
    name: 'Post-Delivery',
    description: 'Ensure client success, gather testimonials, drive referrals and upsells',
    triggerStage: 'delivery',
    exitStage: 'completed',
    emails: [
      {
        index: 0,
        dayOffset: 0,
        subject: 'Your automation is live — next steps',
        purpose: 'Set expectations, provide resources',
        templateId: 'seq3-email1',
      },
      {
        index: 1,
        dayOffset: 7,
        subject: 'How\'s it going?',
        purpose: 'Check-in, offer support',
        templateId: 'seq3-email2',
      },
      {
        index: 2,
        dayOffset: 14,
        subject: 'Know someone who needs this?',
        purpose: 'Referral request',
        templateId: 'seq3-email3',
      },
      {
        index: 3,
        dayOffset: 21,
        subject: 'Ready to automate another workflow?',
        purpose: 'Upsell opportunity',
        templateId: 'seq3-email4',
      },
      {
        index: 4,
        dayOffset: 30,
        subject: 'Quick favor — and a thank you',
        purpose: 'Testimonial request + case study invitation',
        templateId: 'seq3-email5',
      },
      {
        index: 5,
        dayOffset: 60,
        subject: 'Quarterly business review invitation',
        purpose: 'Strategic partnership, expansion planning',
        templateId: 'seq3-email6',
      },
    ],
  },
];

// In-Memory Store (replace with database in production)

class NurtureStoreImpl {
  private leads: Map<string, NurtureLead> = new Map();
  private idCounter = 1;

  generateId(): string {
    return `lead_${Date.now()}_${this.idCounter++}`;
  }

  createLead(data: Omit<NurtureLead, 'id'>): NurtureLead {
    const id = this.generateId();
    const lead: NurtureLead = {
      id,
      ...data,
    };
    this.leads.set(id, lead);
    return lead;
  }

  getLead(id: string): NurtureLead | undefined {
    return this.leads.get(id);
  }

  findByEmail(email: string): NurtureLead | undefined {
    return Array.from(this.leads.values()).find(l => l.email === email);
  }

  getAllLeads(): NurtureLead[] {
    return Array.from(this.leads.values());
  }

  updateLead(id: string, updates: Partial<NurtureLead>): NurtureLead | undefined {
    const lead = this.leads.get(id);
    if (!lead) return undefined;

    const updatedLead = {
      ...lead,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.leads.set(id, updatedLead);
    return updatedLead;
  }

  removeLead(id: string): boolean {
    return this.leads.delete(id);
  }

  // Query helpers

  getLeadsBySequence(sequence: number): NurtureLead[] {
    return this.getAllLeads().filter(l => l.currentSequence === sequence);
  }

  getLeadsByStage(stage: LeadStage): NurtureLead[] {
    return this.getAllLeads().filter(l => l.stage === stage);
  }

  getLeadsNeedingEmail(): NurtureLead[] {
    const now = new Date();
    
    return this.getAllLeads().filter(lead => {
      const sequence = SEQUENCES.find(s => s.id === lead.currentSequence);
      if (!sequence) return false;

      const nextEmail = sequence.emails[lead.currentEmailIndex + 1];
      if (!nextEmail) return false;

      const lastEmail = lead.emailsSent[lead.emailsSent.length - 1];
      if (!lastEmail) return false;

      const lastEmailDate = new Date(lastEmail.sentAt);
      const nextEmailDate = new Date(lastEmailDate);
      nextEmailDate.setDate(nextEmailDate.getDate() + nextEmail.dayOffset);

      return now >= nextEmailDate;
    });
  }

  // Statistics

  getStats(): NurtureStats {
    const leads = this.getAllLeads();
    
    return {
      totalLeads: leads.length,
      bySequence: {
        1: leads.filter(l => l.currentSequence === 1).length,
        2: leads.filter(l => l.currentSequence === 2).length,
        3: leads.filter(l => l.currentSequence === 3).length,
      },
      byStage: {
        lead: leads.filter(l => l.stage === 'lead').length,
        consultation: leads.filter(l => l.stage === 'consultation').length,
        proposal: leads.filter(l => l.stage === 'proposal').length,
        delivery: leads.filter(l => l.stage === 'delivery').length,
        completed: leads.filter(l => l.stage === 'completed').length,
      },
      totalEmailsSent: leads.reduce((sum, l) => sum + l.emailsSent.length, 0),
      averageEmailsPerLead: leads.length > 0 
        ? leads.reduce((sum, l) => sum + l.emailsSent.length, 0) / leads.length 
        : 0,
    };
  }
}

export interface NurtureStats {
  totalLeads: number;
  bySequence: Record<number, number>;
  byStage: Record<string, number>;
  totalEmailsSent: number;
  averageEmailsPerLead: number;
}

// Export singleton instance
export class NurtureStore extends NurtureStoreImpl {
  private static instance: NurtureStore;

  public static getInstance(): NurtureStore {
    if (!NurtureStore.instance) {
      NurtureStore.instance = new NurtureStore();
    }
    return NurtureStore.instance;
  }
}

// Re-export for convenience
export { SEQUENCES as NURTURE_SEQUENCES };
