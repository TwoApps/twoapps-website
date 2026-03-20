import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

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

export const runtime = "nodejs";

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
    const dataDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");

    // Ensure data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing leads
    let leads: LeadEntry[] = [];
    try {
      const existingData = await fs.readFile(leadsFile, "utf-8");
      leads = JSON.parse(existingData) as LeadEntry[];
    } catch {
      // File doesn't exist or is invalid, start with empty array
      leads = [];
    }

    // Add new lead
    const newLead: LeadEntry = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      sourcePage: parsed.data.sourcePage,
      downloadedAt: new Date().toISOString()
    };

    leads.push(newLead);

    // Write back to file
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));

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
