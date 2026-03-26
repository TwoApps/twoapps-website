import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export const runtime = "nodejs";

// Path to referrals data file
const DATA_DIR = path.join(process.cwd(), "data");
const REFERRALS_FILE = path.join(DATA_DIR, "referrals.json");

// Referral status type
type ReferralStatus = "pending" | "contacted" | "audit_scheduled" | "audit_completed" | "claimed" | "paid";

// Referral record type
interface ReferralRecord {
  id: string;
  referral_code: string;
  status: ReferralStatus;
  
  // Referrer details
  referrer_name: string;
  referrer_email: string;
  referrer_company?: string;
  
  // Referred person details
  referred_name: string;
  referred_email: string;
  referred_company?: string;
  message?: string;
  
  // Timestamps
  created_at: string;
  contacted_at?: string;
  audit_scheduled_at?: string;
  audit_completed_at?: string;
  claimed_at?: string;
  paid_at?: string;
  
  // Credit tracking
  credit_amount: number;
  credit_currency: string;
}

// Generate a unique referral code
function generateReferralCode(): string {
  const prefix = "TA";
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed confusing chars: I, O, 0, 1
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${code}`;
}

// Generate a unique ID
function generateId(): string {
  return `ref_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Ensure data directory and file exist
async function ensureDataFile(): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  
  if (!existsSync(REFERRALS_FILE)) {
    await writeFile(REFERRALS_FILE, JSON.stringify({ referrals: [] }, null, 2));
  }
}

// Read all referrals
async function readReferrals(): Promise<{ referrals: ReferralRecord[] }> {
  await ensureDataFile();
  const content = await readFile(REFERRALS_FILE, "utf-8");
  return JSON.parse(content);
}

// Write all referrals
async function writeReferrals(data: { referrals: ReferralRecord[] }): Promise<void> {
  await ensureDataFile();
  await writeFile(REFERRALS_FILE, JSON.stringify(data, null, 2));
}

// Input validation schema
interface ReferralInput {
  referrerName: string;
  referrerEmail: string;
  referrerCompany?: string;
  referredName: string;
  referredEmail: string;
  referredCompany?: string;
  message?: string;
  honeypot?: string;
}

function validateReferralInput(data: unknown): { valid: boolean; errors: string[]; data?: ReferralInput } {
  const errors: string[] = [];
  
  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }
  
  const input = data as Record<string, unknown>;
  
  // Required fields
  if (!input.referrerName || typeof input.referrerName !== "string" || !input.referrerName.trim()) {
    errors.push("Your name is required");
  }
  
  if (!input.referrerEmail || typeof input.referrerEmail !== "string" || !input.referrerEmail.trim()) {
    errors.push("Your email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.referrerEmail)) {
    errors.push("Your email is invalid");
  }
  
  if (!input.referredName || typeof input.referredName !== "string" || !input.referredName.trim()) {
    errors.push("Contact name is required");
  }
  
  if (!input.referredEmail || typeof input.referredEmail !== "string" || !input.referredEmail.trim()) {
    errors.push("Contact email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.referredEmail)) {
    errors.push("Contact email is invalid");
  }
  
  // Spam check
  if (input.honeypot && typeof input.honeypot === "string" && input.honeypot.trim()) {
    return { valid: false, errors: ["Spam detected"] };
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  return {
    valid: true,
    errors: [],
    data: {
      referrerName: (input.referrerName as string).trim(),
      referrerEmail: (input.referrerEmail as string).trim().toLowerCase(),
      referrerCompany: typeof input.referrerCompany === "string" ? input.referrerCompany.trim() : undefined,
      referredName: (input.referredName as string).trim(),
      referredEmail: (input.referredEmail as string).trim().toLowerCase(),
      referredCompany: typeof input.referredCompany === "string" ? input.referredCompany.trim() : undefined,
      message: typeof input.message === "string" ? input.message.trim() : undefined
    }
  };
}

export async function POST(request: Request) {
  let body: unknown;
  
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
  
  // Validate input
  const validation = validateReferralInput(body);
  if (!validation.valid) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 400 }
    );
  }
  
  const input = validation.data!;
  
  try {
    // Read existing referrals
    const data = await readReferrals();
    
    // Check for duplicate (same referrer + referred email combo)
    const duplicate = data.referrals.find(
      r => r.referrer_email === input.referrerEmail && r.referred_email === input.referredEmail
    );
    
    if (duplicate) {
      return NextResponse.json(
        { ok: false, error: "You've already referred this contact" },
        { status: 400 }
      );
    }
    
    // Generate referral code (ensure uniqueness)
    let referralCode = generateReferralCode();
    while (data.referrals.some(r => r.referral_code === referralCode)) {
      referralCode = generateReferralCode();
    }
    
    // Create new referral record
    const newReferral: ReferralRecord = {
      id: generateId(),
      referral_code: referralCode,
      status: "pending",
      
      referrer_name: input.referrerName,
      referrer_email: input.referrerEmail,
      referrer_company: input.referrerCompany,
      
      referred_name: input.referredName,
      referred_email: input.referredEmail,
      referred_company: input.referredCompany,
      message: input.message,
      
      created_at: new Date().toISOString(),
      credit_amount: 500,
      credit_currency: "USD"
    };
    
    // Add to referrals list
    data.referrals.push(newReferral);
    
    // Save to file
    await writeReferrals(data);
    
    // Log for development
    if (process.env.NODE_ENV !== "production") {
      console.log("New referral created:", {
        code: referralCode,
        referrer: input.referrerEmail,
        referred: input.referredEmail
      });
    }
    
    // In production, you would:
    // 1. Send email to the referred person
    // 2. Send confirmation to the referrer
    // 3. Notify the team
    
    return NextResponse.json({
      ok: true,
      referralCode,
      message: "Referral submitted successfully"
    });
    
  } catch (error) {
    console.error("Referral submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to submit referral. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve referrals (for admin/internal use)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const email = searchParams.get("email");
  
  try {
    const data = await readReferrals();
    
    let referrals = data.referrals;
    
    // Filter by status if provided
    if (status) {
      referrals = referrals.filter(r => r.status === status);
    }
    
    // Filter by referrer email if provided
    if (email) {
      referrals = referrals.filter(r => 
        r.referrer_email === email.toLowerCase() || 
        r.referred_email === email.toLowerCase()
      );
    }
    
    // Sort by created_at descending
    referrals.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    
    return NextResponse.json({
      ok: true,
      count: referrals.length,
      referrals
    });
    
  } catch (error) {
    console.error("Failed to retrieve referrals:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to retrieve referrals" },
      { status: 500 }
    );
  }
}

// PATCH endpoint to update referral status
export async function PATCH(request: Request) {
  let body: unknown;
  
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
  
  const { id, status } = body as { id?: string; status?: ReferralStatus };
  
  if (!id || !status) {
    return NextResponse.json(
      { ok: false, error: "Missing id or status" },
      { status: 400 }
    );
  }
  
  const validStatuses: ReferralStatus[] = [
    "pending", "contacted", "audit_scheduled", "audit_completed", "claimed", "paid"
  ];
  
  if (!validStatuses.includes(status)) {
    return NextResponse.json(
      { ok: false, error: "Invalid status" },
      { status: 400 }
    );
  }
  
  try {
    const data = await readReferrals();
    const referralIndex = data.referrals.findIndex(r => r.id === id);
    
    if (referralIndex === -1) {
      return NextResponse.json(
        { ok: false, error: "Referral not found" },
        { status: 404 }
      );
    }
    
    // Update status and timestamp
    const referral = data.referrals[referralIndex];
    referral.status = status;
    
    const now = new Date().toISOString();
    switch (status) {
      case "contacted":
        referral.contacted_at = now;
        break;
      case "audit_scheduled":
        referral.audit_scheduled_at = now;
        break;
      case "audit_completed":
        referral.audit_completed_at = now;
        break;
      case "claimed":
        referral.claimed_at = now;
        break;
      case "paid":
        referral.paid_at = now;
        break;
    }
    
    data.referrals[referralIndex] = referral;
    await writeReferrals(data);
    
    return NextResponse.json({
      ok: true,
      referral
    });
    
  } catch (error) {
    console.error("Failed to update referral:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to update referral" },
      { status: 500 }
    );
  }
}
