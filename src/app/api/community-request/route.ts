import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export const runtime = "nodejs";

// Path to community requests data file
const DATA_DIR = path.join(process.cwd(), "data");
const REQUESTS_FILE = path.join(DATA_DIR, "community-requests.json");

// Request status type
type RequestStatus = "pending" | "approved" | "rejected" | "invited" | "joined";

// Community request record type
interface CommunityRequestRecord {
  id: string;
  status: RequestStatus;
  
  // Applicant details
  name: string;
  email: string;
  company: string;
  role: string;
  goals?: string;
  
  // Timestamps
  created_at: string;
  reviewed_at?: string;
  invited_at?: string;
  joined_at?: string;
  
  // Review notes (internal)
  review_notes?: string;
}

// Generate a unique ID
function generateId(): string {
  return `cr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Ensure data directory and file exist
async function ensureDataFile(): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  
  if (!existsSync(REQUESTS_FILE)) {
    await writeFile(REQUESTS_FILE, JSON.stringify({ requests: [] }, null, 2));
  }
}

// Read all requests
async function readRequests(): Promise<{ requests: CommunityRequestRecord[] }> {
  await ensureDataFile();
  const content = await readFile(REQUESTS_FILE, "utf-8");
  return JSON.parse(content);
}

// Write all requests
async function writeRequests(data: { requests: CommunityRequestRecord[] }): Promise<void> {
  await ensureDataFile();
  await writeFile(REQUESTS_FILE, JSON.stringify(data, null, 2));
}

// Input validation schema
interface CommunityRequestInput {
  name: string;
  email: string;
  company: string;
  role: string;
  goals?: string;
  honeypot?: string;
}

function validateInput(data: unknown): { valid: boolean; errors: string[]; data?: CommunityRequestInput } {
  const errors: string[] = [];
  
  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }
  
  const input = data as Record<string, unknown>;
  
  // Required fields
  if (!input.name || typeof input.name !== "string" || !input.name.trim()) {
    errors.push("Name is required");
  }
  
  if (!input.email || typeof input.email !== "string" || !input.email.trim()) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.push("Email is invalid");
  }
  
  if (!input.company || typeof input.company !== "string" || !input.company.trim()) {
    errors.push("Company is required");
  }
  
  if (!input.role || typeof input.role !== "string" || !input.role.trim()) {
    errors.push("Role is required");
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
      name: (input.name as string).trim(),
      email: (input.email as string).trim().toLowerCase(),
      company: (input.company as string).trim(),
      role: (input.role as string).trim(),
      goals: typeof input.goals === "string" ? input.goals.trim() : undefined
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
  const validation = validateInput(body);
  if (!validation.valid) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 400 }
    );
  }
  
  const input = validation.data!;
  
  try {
    // Read existing requests
    const data = await readRequests();
    
    // Check for duplicate email
    const duplicate = data.requests.find(r => r.email === input.email);
    
    if (duplicate) {
      // If already approved/invited, return success without duplicate entry
      if (duplicate.status === "approved" || duplicate.status === "invited" || duplicate.status === "joined") {
        return NextResponse.json({
          ok: true,
          message: "You've already been approved! Check your email for the Slack invite."
        });
      }
      
      // If pending, let them know
      if (duplicate.status === "pending") {
        return NextResponse.json({
          ok: true,
          message: "Your request is already being reviewed. We'll be in touch within 24-48 hours."
        });
      }
      
      // If rejected, they can reapply (create new entry)
    }
    
    // Create new request record
    const newRequest: CommunityRequestRecord = {
      id: generateId(),
      status: "pending",
      
      name: input.name,
      email: input.email,
      company: input.company,
      role: input.role,
      goals: input.goals,
      
      created_at: new Date().toISOString()
    };
    
    // Add to requests list
    data.requests.push(newRequest);
    
    // Save to file
    await writeRequests(data);
    
    // Log for development
    if (process.env.NODE_ENV !== "production") {
      console.log("New community request:", {
        id: newRequest.id,
        email: input.email,
        company: input.company,
        role: input.role
      });
    }
    
    // In production, you would:
    // 1. Send confirmation email to applicant
    // 2. Notify team for review
    // 3. Optionally trigger automation to add to CRM
    
    return NextResponse.json({
      ok: true,
      message: "Request submitted successfully. We'll review and send your Slack invite within 24-48 hours."
    });
    
  } catch (error) {
    console.error("Community request submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to submit request. Please try again or contact us at team@twoapps.com" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve requests (for admin/internal use)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const email = searchParams.get("email");
  
  try {
    const data = await readRequests();
    
    let requests = data.requests;
    
    // Filter by status if provided
    if (status) {
      requests = requests.filter(r => r.status === status);
    }
    
    // Filter by email if provided
    if (email) {
      requests = requests.filter(r => r.email === email.toLowerCase());
    }
    
    // Sort by created_at descending
    requests.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    
    return NextResponse.json({
      ok: true,
      count: requests.length,
      requests
    });
    
  } catch (error) {
    console.error("Failed to retrieve community requests:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to retrieve requests" },
      { status: 500 }
    );
  }
}

// PATCH endpoint to update request status (for admin use)
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
  
  const { id, status, review_notes } = body as { 
    id?: string; 
    status?: RequestStatus;
    review_notes?: string;
  };
  
  if (!id || !status) {
    return NextResponse.json(
      { ok: false, error: "Missing id or status" },
      { status: 400 }
    );
  }
  
  const validStatuses: RequestStatus[] = [
    "pending", "approved", "rejected", "invited", "joined"
  ];
  
  if (!validStatuses.includes(status)) {
    return NextResponse.json(
      { ok: false, error: "Invalid status" },
      { status: 400 }
    );
  }
  
  try {
    const data = await readRequests();
    const requestIndex = data.requests.findIndex(r => r.id === id);
    
    if (requestIndex === -1) {
      return NextResponse.json(
        { ok: false, error: "Request not found" },
        { status: 404 }
      );
    }
    
    // Update status and timestamp
    const record = data.requests[requestIndex];
    record.status = status;
    
    if (review_notes) {
      record.review_notes = review_notes;
    }
    
    const now = new Date().toISOString();
    switch (status) {
      case "approved":
      case "rejected":
        record.reviewed_at = now;
        break;
      case "invited":
        record.invited_at = now;
        break;
      case "joined":
        record.joined_at = now;
        break;
    }
    
    data.requests[requestIndex] = record;
    await writeRequests(data);
    
    return NextResponse.json({
      ok: true,
      request: record
    });
    
  } catch (error) {
    console.error("Failed to update community request:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to update request" },
      { status: 500 }
    );
  }
}
