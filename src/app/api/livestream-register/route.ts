import { NextResponse } from "next/server";

import { livestreamRegistrationSchema } from "@/lib/livestream-schema";
import { addRegistration, getRegistrationCount } from "@/lib/livestream-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = livestreamRegistrationSchema.safeParse(body);

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

  try {
    const registration = addRegistration({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      jobTitle: parsed.data.jobTitle,
      source: parsed.data.source || "landing-page"
    });

    const count = getRegistrationCount();

    // In production, this would trigger a confirmation email via Resend
    // For now, just log in development
    if (process.env.NODE_ENV !== "production") {
      console.info("Livestream registration:", {
        id: registration.id,
        email: registration.email,
        name: registration.name,
        company: registration.company,
        jobTitle: registration.jobTitle,
        totalRegistrations: count
      });
    }

    return NextResponse.json({
      ok: true,
      data: {
        id: registration.id,
        registeredAt: registration.registeredAt,
        totalRegistrations: count
      }
    });
  } catch (error) {
    console.error("Livestream registration failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to register right now. Please try again shortly."
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve registration count (for social proof)
export async function GET() {
  try {
    const count = getRegistrationCount();
    return NextResponse.json({
      ok: true,
      data: {
        count,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to fetch registration count." }, { status: 500 });
  }
}
