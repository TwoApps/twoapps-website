import { z } from "zod";

export const contactAudienceEnum = z.enum(["business", "agency"]);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  audience: contactAudienceEnum,
  region: z.string().trim().max(160).optional().default(""),
  serviceInterest: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(20, "Please share a little more detail.").max(4000),
  sourcePage: z.string().trim().max(200).optional().default(""),
  honeypot: z.string().max(0).optional().default("")
});

export type ContactPayload = z.infer<typeof contactSchema>;
