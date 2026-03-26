/**
 * Guide funnel email automation
 * Sends nurture sequence emails via Resend
 */

import { Resend } from "resend";
import { getServerEnv } from "@/lib/env";
import type { LeadEntry } from "@/lib/leads-store";
import {
  welcomeEmailTemplate,
  caseStudyEmailTemplate,
  useCasesEmailTemplate,
  pilotProcessEmailTemplate,
  consultationOfferEmailTemplate
} from "@/lib/email-templates/guide-emails";

const FROM_EMAIL = "TwoApps <team@twoapps.com>";

function getResendClient(): Resend {
  const env = getServerEnv();
  
  if (!env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  
  return new Resend(env.RESEND_API_KEY);
}

type EmailSendResult = {
  success: boolean;
  messageId?: string;
  error?: string;
};

/**
 * Send Day 0: Welcome + PDF Delivery
 */
export async function sendWelcomeEmail(lead: LeadEntry): Promise<EmailSendResult> {
  try {
    const resend = getResendClient();
    const { subject, html } = welcomeEmailTemplate(lead);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject,
      html,
      tags: [
        { name: "category", value: "guide-funnel" },
        { name: "sequence", value: "day0" }
      ]
    });
    
    console.log(`[GUIDE-EMAIL] Day 0 sent to ${lead.email}`, { leadId: lead.id, messageId: result.data?.id });
    
    return {
      success: true,
      messageId: result.data?.id
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[GUIDE-EMAIL] Failed to send Day 0 to ${lead.email}`, { leadId: lead.id, error: errorMessage });
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Send Day 2: Case Study / Social Proof
 */
export async function sendCaseStudyEmail(lead: LeadEntry): Promise<EmailSendResult> {
  try {
    const resend = getResendClient();
    const { subject, html } = caseStudyEmailTemplate(lead);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject,
      html,
      tags: [
        { name: "category", value: "guide-funnel" },
        { name: "sequence", value: "day2" }
      ]
    });
    
    console.log(`[GUIDE-EMAIL] Day 2 sent to ${lead.email}`, { leadId: lead.id, messageId: result.data?.id });
    
    return {
      success: true,
      messageId: result.data?.id
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[GUIDE-EMAIL] Failed to send Day 2 to ${lead.email}`, { leadId: lead.id, error: errorMessage });
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Send Day 5: Common AI Workflow Use Cases
 */
export async function sendUseCasesEmail(lead: LeadEntry): Promise<EmailSendResult> {
  try {
    const resend = getResendClient();
    const { subject, html } = useCasesEmailTemplate(lead);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject,
      html,
      tags: [
        { name: "category", value: "guide-funnel" },
        { name: "sequence", value: "day5" }
      ]
    });
    
    console.log(`[GUIDE-EMAIL] Day 5 sent to ${lead.email}`, { leadId: lead.id, messageId: result.data?.id });
    
    return {
      success: true,
      messageId: result.data?.id
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[GUIDE-EMAIL] Failed to send Day 5 to ${lead.email}`, { leadId: lead.id, error: errorMessage });
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Send Day 10: How Pilots Work at TwoApps
 */
export async function sendPilotProcessEmail(lead: LeadEntry): Promise<EmailSendResult> {
  try {
    const resend = getResendClient();
    const { subject, html } = pilotProcessEmailTemplate(lead);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject,
      html,
      tags: [
        { name: "category", value: "guide-funnel" },
        { name: "sequence", value: "day10" }
      ]
    });
    
    console.log(`[GUIDE-EMAIL] Day 10 sent to ${lead.email}`, { leadId: lead.id, messageId: result.data?.id });
    
    return {
      success: true,
      messageId: result.data?.id
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[GUIDE-EMAIL] Failed to send Day 10 to ${lead.email}`, { leadId: lead.id, error: errorMessage });
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Send Day 14: Free Consultation Offer
 */
export async function sendConsultationOfferEmail(lead: LeadEntry): Promise<EmailSendResult> {
  try {
    const resend = getResendClient();
    const { subject, html } = consultationOfferEmailTemplate(lead);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject,
      html,
      tags: [
        { name: "category", value: "guide-funnel" },
        { name: "sequence", value: "day14" }
      ]
    });
    
    console.log(`[GUIDE-EMAIL] Day 14 sent to ${lead.email}`, { leadId: lead.id, messageId: result.data?.id });
    
    return {
      success: true,
      messageId: result.data?.id
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`[GUIDE-EMAIL] Failed to send Day 14 to ${lead.email}`, { leadId: lead.id, error: errorMessage });
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Send nurture email by day
 */
export async function sendNurtureEmail(
  lead: LeadEntry,
  day: "day0" | "day2" | "day5" | "day10" | "day14"
): Promise<EmailSendResult> {
  switch (day) {
    case "day0":
      return sendWelcomeEmail(lead);
    case "day2":
      return sendCaseStudyEmail(lead);
    case "day5":
      return sendUseCasesEmail(lead);
    case "day10":
      return sendPilotProcessEmail(lead);
    case "day14":
      return sendConsultationOfferEmail(lead);
    default:
      return { success: false, error: `Unknown day: ${day}` };
  }
}
