export const BRAND_NAME = "TwoApps";
export const BASE_LOCATION_LABEL = "Dubai, UAE";
export const VISIBLE_REACH_LINE = "UAE-based, serving clients worldwide.";

/** Public-facing contact email used in structured data contactPoint. */
export const CONTACT_EMAIL = "team@thetwoapps.com";

/**
 * Twitter/X handle (e.g. "@twoapps") for twitter:site / twitter:creator and sameAs.
 * Env-overridable; null until a confirmed handle exists (do not invent one).
 */
export const TWITTER_HANDLE =
  process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim() || null;

/**
 * Topical expertise signals reused across Organization + Person structured data.
 * These map to the high-intent search/AI-query topics TwoApps wants to be cited for.
 */
export const KNOWS_ABOUT = [
  "Agentic AI",
  "Agentic AI Orchestration",
  "Agentic Workflows",
  "AI Workflow Automation",
  "AI Automation Agency",
  "AI Software House",
  "AI Consultancy",
  "AI Development",
  "Vibe Coding",
  "Claude",
  "Claude Code",
  "White-label AI Delivery",
  "AML/KYC Compliance Automation",
  "Large Language Models"
] as const;

export const SEO_TARGET_REGIONS = [
  "UAE",
  "GCC",
  "Middle East",
  "Eastern Europe",
  "South America",
  "Australia",
  "New Zealand"
] as const;

export const SEO_PARTNER_FOCUS_REGIONS = [
  "Middle East",
  "Eastern Europe",
  "South America",
  "Australia",
  "New Zealand"
] as const;

