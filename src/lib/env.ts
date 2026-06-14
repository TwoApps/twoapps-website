import { z } from "zod";

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.string().email().optional(),
  CONTACT_FROM_EMAIL: z.string().min(1).optional()
});

export function getServerEnv() {
  return serverEnvSchema.parse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL
  });
}

export function hasContactEmailConfig() {
  const env = getServerEnv();
  return Boolean(env.RESEND_API_KEY && env.CONTACT_TO_EMAIL && env.CONTACT_FROM_EMAIL);
}

/**
 * Client-exposed (NEXT_PUBLIC_*) configuration. All optional — read via the
 * getters in site-config.ts. Validated non-fatally so a malformed value never
 * breaks the build (these are inlined at build time).
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_GA4_MEASUREMENT_ID: z
    .string()
    .regex(/^G-[A-Z0-9]+$/i, "GA4 id should look like G-XXXXXXX")
    .optional(),
  NEXT_PUBLIC_LINKEDIN_COMPANY_URL: z.string().url().optional(),
  NEXT_PUBLIC_LINKEDIN_FOUNDER_URL: z.string().url().optional(),
  NEXT_PUBLIC_ORG_LOGO: z.string().optional(),
  NEXT_PUBLIC_FOUNDER_IMAGE: z.string().optional(),
  NEXT_PUBLIC_TWITTER_HANDLE: z.string().optional()
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export function getClientEnvIssues(): string[] {
  const result = clientEnvSchema.safeParse({
    NEXT_PUBLIC_GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    NEXT_PUBLIC_LINKEDIN_COMPANY_URL: process.env.NEXT_PUBLIC_LINKEDIN_COMPANY_URL,
    NEXT_PUBLIC_LINKEDIN_FOUNDER_URL: process.env.NEXT_PUBLIC_LINKEDIN_FOUNDER_URL,
    NEXT_PUBLIC_ORG_LOGO: process.env.NEXT_PUBLIC_ORG_LOGO,
    NEXT_PUBLIC_FOUNDER_IMAGE: process.env.NEXT_PUBLIC_FOUNDER_IMAGE,
    NEXT_PUBLIC_TWITTER_HANDLE: process.env.NEXT_PUBLIC_TWITTER_HANDLE
  });
  return result.success ? [] : result.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
}
