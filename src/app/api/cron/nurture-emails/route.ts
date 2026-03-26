import { NextResponse } from "next/server";
import { getLeadsForNurtureEmail, updateLeadNurtureStatus, updateLeadEmailStats } from "@/lib/leads-store";
import { sendNurtureEmail } from "@/lib/guide-emails";

/**
 * Cron endpoint to send scheduled nurture emails
 * Called by Vercel Cron Jobs every hour
 * 
 * Days 2, 5, 10, 14 emails are sent based on download date
 * Day 0 is sent immediately upon download (handled in guide-download route)
 */

export const runtime = "nodejs";

// Simple auth check using CRON_SECRET
function isAuthorized(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  
  // Allow in development without secret
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  
  if (!cronSecret) {
    console.error("[NURTURE-CRON] CRON_SECRET not configured");
    return false;
  }
  
  return authHeader === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  // Verify authorization
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const results = {
    day2: { sent: 0, failed: 0 },
    day5: { sent: 0, failed: 0 },
    day10: { sent: 0, failed: 0 },
    day14: { sent: 0, failed: 0 }
  };

  try {
    console.log("[NURTURE-CRON] Starting nurture email processing", {
      timestamp: new Date().toISOString()
    });

    // Process Day 2 emails
    const day2Leads = getLeadsForNurtureEmail("day2");
    for (const lead of day2Leads) {
      const result = await sendNurtureEmail(lead, "day2");
      if (result.success) {
        updateLeadNurtureStatus(lead.id, {
          day2Sent: true,
          day2SentAt: new Date().toISOString()
        });
        updateLeadEmailStats(lead.id, { emailsSent: lead.emailStats.emailsSent + 1 });
        results.day2.sent++;
      } else {
        results.day2.failed++;
        console.error("[NURTURE-CRON] Failed to send Day 2 email", {
          leadId: lead.id,
          email: lead.email,
          error: result.error
        });
      }
    }

    // Process Day 5 emails
    const day5Leads = getLeadsForNurtureEmail("day5");
    for (const lead of day5Leads) {
      const result = await sendNurtureEmail(lead, "day5");
      if (result.success) {
        updateLeadNurtureStatus(lead.id, {
          day5Sent: true,
          day5SentAt: new Date().toISOString()
        });
        updateLeadEmailStats(lead.id, { emailsSent: lead.emailStats.emailsSent + 1 });
        results.day5.sent++;
      } else {
        results.day5.failed++;
        console.error("[NURTURE-CRON] Failed to send Day 5 email", {
          leadId: lead.id,
          email: lead.email,
          error: result.error
        });
      }
    }

    // Process Day 10 emails
    const day10Leads = getLeadsForNurtureEmail("day10");
    for (const lead of day10Leads) {
      const result = await sendNurtureEmail(lead, "day10");
      if (result.success) {
        updateLeadNurtureStatus(lead.id, {
          day10Sent: true,
          day10SentAt: new Date().toISOString()
        });
        updateLeadEmailStats(lead.id, { emailsSent: lead.emailStats.emailsSent + 1 });
        results.day10.sent++;
      } else {
        results.day10.failed++;
        console.error("[NURTURE-CRON] Failed to send Day 10 email", {
          leadId: lead.id,
          email: lead.email,
          error: result.error
        });
      }
    }

    // Process Day 14 emails
    const day14Leads = getLeadsForNurtureEmail("day14");
    for (const lead of day14Leads) {
      const result = await sendNurtureEmail(lead, "day14");
      if (result.success) {
        updateLeadNurtureStatus(lead.id, {
          day14Sent: true,
          day14SentAt: new Date().toISOString()
        });
        updateLeadEmailStats(lead.id, { emailsSent: lead.emailStats.emailsSent + 1 });
        results.day14.sent++;
      } else {
        results.day14.failed++;
        console.error("[NURTURE-CRON] Failed to send Day 14 email", {
          leadId: lead.id,
          email: lead.email,
          error: result.error
        });
      }
    }

    const summary = {
      totalSent: results.day2.sent + results.day5.sent + results.day10.sent + results.day14.sent,
      totalFailed: results.day2.failed + results.day5.failed + results.day10.failed + results.day14.failed,
      details: results
    };

    console.log("[NURTURE-CRON] Completed", summary);

    return NextResponse.json({
      ok: true,
      timestamp: new Date().toISOString(),
      ...summary
    });
  } catch (error) {
    console.error("[NURTURE-CRON] Unexpected error", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to process nurture emails",
        timestamp: new Date().toISOString(),
        results
      },
      { status: 500 }
    );
  }
}
