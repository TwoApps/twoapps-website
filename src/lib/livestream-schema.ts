import { z } from "zod";

export const livestreamRegistrationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  jobTitle: z.string().trim().max(160).optional().default(""),
  source: z.string().trim().max(200).optional().default(""),
  honeypot: z.string().max(0).optional().default("")
});

export type LivestreamRegistrationPayload = z.infer<typeof livestreamRegistrationSchema>;
