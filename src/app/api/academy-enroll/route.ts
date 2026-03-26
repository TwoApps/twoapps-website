import { NextResponse } from "next/server";
import { z } from "zod";
import { addEnrollment } from "@/lib/academy-store";

const academyEnrollSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  courseId: z.string().trim().min(1, "Course ID is required."),
  courseName: z.string().trim().min(1, "Course name is required."),
  honeypot: z.string().max(0).optional().default("")
});

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = academyEnrollSchema.safeParse(body);

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
    const enrollment = addEnrollment({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      courseId: parsed.data.courseId,
      courseName: parsed.data.courseName
    });

    console.log("[ACADEMY-ENROLL] New enrollment captured", {
      enrollmentId: enrollment.id,
      email: enrollment.email,
      name: enrollment.name,
      company: enrollment.company,
      courseId: enrollment.courseId,
      courseName: enrollment.courseName
    });

    return NextResponse.json({ 
      ok: true, 
      enrollmentId: enrollment.id,
      courseId: enrollment.courseId 
    });
  } catch (error) {
    console.error("[ACADEMY-ENROLL] Failed to process request", {
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
