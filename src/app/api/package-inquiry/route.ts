import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "package-inquiries.json");

const packageInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required").max(100),
  packageInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().optional()
});

type PackageInquiry = {
  id: string;
  name: string;
  email: string;
  company: string;
  packageInterest?: string;
  message: string;
  createdAt: string;
  source: "pricing-page";
};

async function ensureDataFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error("Failed to ensure data file:", error);
  }
}

async function appendInquiry(inquiry: PackageInquiry) {
  await ensureDataFile();
  
  try {
    const content = await fs.readFile(filePath, "utf-8");
    const inquiries: PackageInquiry[] = JSON.parse(content);
    inquiries.push(inquiry);
    await fs.writeFile(filePath, JSON.stringify(inquiries, null, 2));
    return true;
  } catch (error) {
    console.error("Failed to append inquiry:", error);
    // If file is corrupted, start fresh
    await fs.writeFile(filePath, JSON.stringify([inquiry], null, 2));
    return true;
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = packageInquirySchema.safeParse(body);

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

  // Honeypot spam check
  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected." }, { status: 400 });
  }

  const inquiry: PackageInquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    packageInterest: parsed.data.packageInterest,
    message: parsed.data.message,
    createdAt: new Date().toISOString(),
    source: "pricing-page"
  };

  try {
    await appendInquiry(inquiry);

    // In development, log the inquiry
    if (process.env.NODE_ENV !== "production") {
      console.info("Package inquiry received:", {
        name: inquiry.name,
        email: inquiry.email,
        company: inquiry.company,
        packageInterest: inquiry.packageInterest,
        message: `${inquiry.message.slice(0, 100)}${inquiry.message.length > 100 ? "..." : ""}`
      });
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
      inquiryId: inquiry.id 
    });
  } catch (error) {
    console.error("Package inquiry save failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit your inquiry right now. Please try again or email us directly at team@twoapps.com."
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple health check
  return NextResponse.json({ 
    ok: true, 
    endpoint: "package-inquiry",
    packages: ["workflow-assessment", "lead-qualification", "customer-support", "finance-reporting"]
  });
}
