import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";
import { hasContactEmailConfig } from "@/lib/env";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

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
    if (!hasContactEmailConfig()) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { ok: false, error: "Contact email is not configured yet. Please try again later." },
          { status: 500 }
        );
      }

      console.info("Contact form submitted (email not configured, dev fallback):", {
        ...parsed.data,
        message: `${parsed.data.message.slice(0, 160)}${parsed.data.message.length > 160 ? "..." : ""}`
      });
      return NextResponse.json({ ok: true });
    }

    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send your inquiry right now. Please try again shortly."
      },
      { status: 500 }
    );
  }
}
