import { NextResponse } from "next/server";
import { z } from "zod";
import { addLead, updateLeadNurtureStatus, updateLeadEmailStats } from "@/lib/leads-store";
import { sendWelcomeEmail } from "@/lib/guide-emails";

const guideDownloadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  sourcePage: z.string().trim().max(200).optional().default(""),
  honeypot: z.string().max(0).optional().default("")
});

export const runtime = "nodejs"; // Changed from edge to nodejs for file system access

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = guideDownloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected." }, { status: 400 });
  }

  try {
    // Store lead in leads.json
    const lead = addLead({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      sourcePage: parsed.data.sourcePage
    });

    console.log("[GUIDE-DOWNLOAD] New lead captured", {
      leadId: lead.id,
      email: lead.email,
      name: lead.name,
      company: lead.company
    });

    // Send Day 0 welcome email (async, don't block response)
    sendWelcomeEmail(lead)
      .then(result => {
        if (result.success) {
          // Update nurture sequence status
          updateLeadNurtureStatus(lead.id, {
            day0Sent: true,
            day0SentAt: new Date().toISOString()
          });
          updateLeadEmailStats(lead.id, { emailsSent: 1 });
        } else {
          console.error("[GUIDE-DOWNLOAD] Failed to send welcome email", {
            leadId: lead.id,
            error: result.error
          });
        }
      })
      .catch(error => {
        console.error("[GUIDE-DOWNLOAD] Unexpected error sending welcome email", {
          leadId: lead.id,
          error: error instanceof Error ? error.message : "Unknown error"
        });
      });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[GUIDE-DOWNLOAD] Failed to process request", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process your request right now. Please try again shortly."
      },
      { status: 500 }
    );
  }
}
