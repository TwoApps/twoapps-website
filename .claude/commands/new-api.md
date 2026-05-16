Scaffold a new API route for the TwoApps website. Ask the user:

1. "What is the endpoint name? (e.g., 'webinar-register' or 'partnership-inquiry')"
2. "What fields does the form collect? List them with types (e.g., name: string, email: string, company: optional string)"
3. "Should this store to a data/*.json file? If yes, what filename?"
4. "Should this send a Resend email? If yes, who receives it — team notification, user confirmation, or both?"

Then create the route at `src/app/api/[endpoint-name]/route.ts` following this exact pattern:

```typescript
import { NextResponse } from "next/server";
import { z } from "zod";
// Add: import { getServerEnv } from "@/lib/env"; if sending email
// Add: import { Resend } from "resend"; if sending email
// Add: import { readFileSync, writeFileSync } from "fs"; import { join } from "path"; if storing to JSON

export const runtime = "nodejs"; // Required for file system access

const [name]Schema = z.object({
  // User fields here — match exactly what the frontend sends
  honeypot: z.string().max(0).optional().default("") // ALWAYS include
});

type [Name]Payload = z.infer<typeof [name]Schema>;

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); }
  catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = [name]Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields and try again.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected." }, { status: 400 });
  }

  try {
    // Storage logic (if needed) — follow pattern in src/lib/leads-store.ts
    // Email logic (if needed) — follow pattern in src/lib/email.ts using getServerEnv()
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[[ENDPOINT-NAME]] Failed", error);
    return NextResponse.json({ ok: false, error: "Unable to process your request right now." }, { status: 500 });
  }
}
```

If storing to JSON, follow the read-parse-push-write pattern from `src/lib/leads-store.ts`.
If sending email, use `getServerEnv()` from `src/lib/env.ts` for API keys — never `process.env` directly.
Email sends must be fire-and-forget: `.then(() => {}).catch(console.error)` — do not await in the response path.

After creating the file, run `npm run typecheck` to confirm no errors.
