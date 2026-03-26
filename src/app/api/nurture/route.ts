import { NextRequest, NextResponse } from 'next/server';
import { 
  NurtureStore, 
  NurtureLead, 
  NurtureSequence, 
  EmailStatus,
  LeadStage 
} from '@/lib/nurture-store';

// Initialize store (in production, this would be a database)
const store = new NurtureStore();

/**
 * GET /api/nurture
 * Retrieve nurture tracking data
 * Query params:
 * - leadId: string (optional) - Get specific lead
 * - sequence: string (optional) - Filter by sequence (1, 2, or 3)
 * - stage: string (optional) - Filter by stage
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get('leadId');
    const sequence = searchParams.get('sequence');
    const stage = searchParams.get('stage');

    if (leadId) {
      const lead = store.getLead(leadId);
      if (!lead) {
        return NextResponse.json(
          { error: 'Lead not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ lead });
    }

    // Get all leads with optional filters
    let leads = store.getAllLeads();
    
    if (sequence) {
      leads = leads.filter(l => l.currentSequence === parseInt(sequence));
    }
    
    if (stage) {
      leads = leads.filter(l => l.stage === stage);
    }

    // Calculate summary stats
    const stats = {
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
      conversionRates: {
        leadToConsultation: calculateConversionRate(leads, 'lead', 'consultation'),
        consultationToProposal: calculateConversionRate(leads, 'consultation', 'proposal'),
        proposalToDelivery: calculateConversionRate(leads, 'proposal', 'delivery'),
      },
      emailsSent: leads.reduce((sum, l) => sum + l.emailsSent.length, 0),
      emailsOpened: leads.reduce((sum, l) => 
        sum + l.emailsSent.filter(e => e.status === 'opened').length, 0),
      emailsClicked: leads.reduce((sum, l) => 
        sum + l.emailsSent.filter(e => e.status === 'clicked').length, 0),
    };

    return NextResponse.json({ leads, stats });
  } catch (error) {
    console.error('Error fetching nurture data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch nurture data' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/nurture
 * Create a new lead or add to nurture sequence
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'addLead':
        return handleAddLead(data);
      
      case 'trackEmail':
        return handleTrackEmail(data);
      
      case 'updateStage':
        return handleUpdateStage(data);
      
      case 'triggerNextEmail':
        return handleTriggerNextEmail(data);
      
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error processing nurture request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/nurture
 * Update lead information
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, updates } = body;

    const lead = store.updateLead(leadId, updates);
    
    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/nurture
 * Remove a lead from nurture sequences
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get('leadId');

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID required' },
        { status: 400 }
      );
    }

    const success = store.removeLead(leadId);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}

// Helper functions

function calculateConversionRate(
  leads: NurtureLead[], 
  fromStage: LeadStage, 
  toStage: LeadStage
): number {
  const fromLeads = leads.filter(l => 
    l.stageHistory.some(h => h.stage === fromStage)
  );
  
  if (fromLeads.length === 0) return 0;
  
  const convertedLeads = fromLeads.filter(l => 
    l.stageHistory.some(h => h.stage === toStage)
  );
  
  return Math.round((convertedLeads.length / fromLeads.length) * 100);
}

async function handleAddLead(data: Partial<NurtureLead>) {
  // Validate required fields
  if (!data.email || !data.firstName || !data.company) {
    return NextResponse.json(
      { error: 'Missing required fields: email, firstName, company' },
      { status: 400 }
    );
  }

  // Check for existing lead
  const existingLead = store.findByEmail(data.email);
  if (existingLead) {
    return NextResponse.json(
      { error: 'Lead already exists', lead: existingLead },
      { status: 409 }
    );
  }

  // Create new lead
  const lead = store.createLead({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName || '',
    company: data.company,
    region: data.region || 'global',
    source: data.source || 'website',
    currentSequence: 1, // Start with Lead → Consultation sequence
    currentEmailIndex: 0,
    stage: 'lead',
    emailsSent: [],
    metadata: data.metadata || {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stageHistory: [{
      stage: 'lead',
      timestamp: new Date().toISOString(),
    }],
  });

  // Trigger first email (Day 0)
  await triggerEmail(lead.id, 1, 0);

  return NextResponse.json({ lead }, { status: 201 });
}

async function handleTrackEmail(data: {
  leadId: string;
  emailIndex: number;
  sequence: number;
  status: EmailStatus;
  metadata?: Record<string, unknown>;
}) {
  const { leadId, emailIndex, sequence, status, metadata } = data;

  const lead = store.getLead(leadId);
  if (!lead) {
    return NextResponse.json(
      { error: 'Lead not found' },
      { status: 404 }
    );
  }

  // Update email status
  const emailRecord = lead.emailsSent.find(
    e => e.sequence === sequence && e.emailIndex === emailIndex
  );

  if (emailRecord) {
    emailRecord.status = status;
    emailRecord.updatedAt = new Date().toISOString();
    if (metadata) {
      emailRecord.metadata = { ...emailRecord.metadata, ...metadata };
    }
  }

  store.updateLead(leadId, { 
    emailsSent: lead.emailsSent,
    updatedAt: new Date().toISOString(),
  });

  // If email was clicked, it's a positive signal - update lead score
  if (status === 'clicked') {
    const currentScore = lead.metadata?.leadScore || 0;
    store.updateLead(leadId, {
      metadata: {
        ...lead.metadata,
        leadScore: currentScore + 5,
      },
    });
  }

  return NextResponse.json({ lead: store.getLead(leadId) });
}

async function handleUpdateStage(data: {
  leadId: string;
  newStage: LeadStage;
  reason?: string;
}) {
  const { leadId, newStage, reason } = data;

  const lead = store.getLead(leadId);
  if (!lead) {
    return NextResponse.json(
      { error: 'Lead not found' },
      { status: 404 }
    );
  }

  // Determine new sequence based on stage
  let newSequence = lead.currentSequence;
  let newEmailIndex = 0;

  switch (newStage) {
    case 'consultation':
      newSequence = 2; // Consultation → Proposal sequence
      break;
    case 'proposal':
      newSequence = 2;
      break;
    case 'delivery':
      newSequence = 3; // Post-Delivery sequence
      break;
    case 'completed':
      newSequence = 3;
      break;
  }

  const updatedLead = store.updateLead(leadId, {
    stage: newStage,
    currentSequence: newSequence,
    currentEmailIndex: newEmailIndex,
    stageHistory: [
      ...lead.stageHistory,
      {
        stage: newStage,
        timestamp: new Date().toISOString(),
        reason,
      },
    ],
  });

  // Trigger first email of new sequence if applicable
  if (newSequence !== lead.currentSequence) {
    await triggerEmail(leadId, newSequence, 0);
  }

  return NextResponse.json({ lead: updatedLead });
}

async function handleTriggerNextEmail(data: { leadId: string }) {
  const { leadId } = data;

  const lead = store.getLead(leadId);
  if (!lead) {
    return NextResponse.json(
      { error: 'Lead not found' },
      { status: 404 }
    );
  }

  const nextEmailIndex = lead.currentEmailIndex + 1;
  
  // Check if there's a next email in the sequence
  const maxEmails = getMaxEmailsForSequence(lead.currentSequence);
  
  if (nextEmailIndex >= maxEmails) {
    // Sequence complete - check for progression or exit
    return NextResponse.json({
      message: 'Sequence complete',
      lead,
    });
  }

  await triggerEmail(leadId, lead.currentSequence, nextEmailIndex);

  return NextResponse.json({ lead: store.getLead(leadId) });
}

async function triggerEmail(
  leadId: string, 
  sequence: number, 
  emailIndex: number
): Promise<void> {
  const lead = store.getLead(leadId);
  if (!lead) return;

  // In production, this would integrate with email service (SendGrid, etc.)
  // For now, we just record the email being sent
  
  const emailRecord = {
    sequence,
    emailIndex,
    status: 'sent' as EmailStatus,
    sentAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: {},
  };

  lead.emailsSent.push(emailRecord);
  lead.currentEmailIndex = emailIndex;

  store.updateLead(leadId, {
    emailsSent: lead.emailsSent,
    currentEmailIndex: emailIndex,
    updatedAt: new Date().toISOString(),
  });

  // Log for debugging
  console.log(`[Nurture] Email triggered: Lead ${leadId}, Sequence ${sequence}, Email ${emailIndex}`);

  // In production, you would:
  // 1. Fetch email template from database
  // 2. Personalize with lead data
  // 3. Send via email service
  // 4. Set up webhook for open/click tracking
}

function getMaxEmailsForSequence(sequence: number): number {
  const maxEmails: Record<number, number> = {
    1: 5, // Lead → Consultation: 5 emails
    2: 4, // Consultation → Proposal: 4 emails
    3: 6, // Post-Delivery: 6 emails
  };
  return maxEmails[sequence] || 5;
}
