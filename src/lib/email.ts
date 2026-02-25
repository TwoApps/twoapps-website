import { Resend } from "resend";

import type { ContactPayload } from "@/lib/contact-schema";
import { getServerEnv } from "@/lib/env";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(payload: ContactPayload) {
  const env = getServerEnv();

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    throw new Error("Contact email is not configured.");
  }

  const resend = new Resend(env.RESEND_API_KEY);

  const rows: Array<[string, string]> = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "—"],
    ["Audience", payload.audience],
    ["Region", payload.region || "—"],
    ["Service interest", payload.serviceInterest || "—"],
    ["Source page", payload.sourcePage || "—"]
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
      <h1 style="font-size: 20px; margin-bottom: 12px;">New Two Apps Website Inquiry</h1>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; border-color: #ddd; width: 100%; margin-bottom: 16px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) =>
                `<tr><th align="left" style="background: #f8f8f8; width: 180px;">${escapeHtml(label)}</th><td>${escapeHtml(
                  value
                )}</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin-bottom: 8px;">Message</h2>
      <pre style="white-space: pre-wrap; background: #f8f8f8; padding: 12px; border: 1px solid #eee; border-radius: 8px;">${escapeHtml(
        payload.message
      )}</pre>
    </div>
  `;

  await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    subject: `New inquiry (${payload.audience}) from ${payload.name}`,
    replyTo: payload.email,
    html
  });
}
