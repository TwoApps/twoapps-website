import { NextResponse } from "next/server";
import { z } from "zod";

const guideDownloadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  sourcePage: z.string().trim().max(200).optional().default(""),
  honeypot: z.string().max(0).optional().default("")
});

type LeadEntry = {
  name: string;
  email: string;
  company: string;
  sourcePage: string;
  downloadedAt: string;
};

export const runtime = "edge";

// In-memory store for edge runtime (resets on cold start, use external DB for persistence)
const leadsStore: LeadEntry[] = [];

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
    // Add new lead to in-memory store
    const newLead: LeadEntry = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      sourcePage: parsed.data.sourcePage,
      downloadedAt: new Date().toISOString()
    };

    leadsStore.push(newLead);

    // Also log to console for visibility (can be captured by logging service)
    console.log("New guide download:", JSON.stringify(newLead));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Guide download save failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process your request right now. Please try again shortly."
      },
      { status: 500 }
    );
  }
}
