const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  const inferredVercelUrl = vercelUrl ? `https://${vercelUrl.replace(/^https?:\/\//, "")}` : null;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || inferredVercelUrl || DEFAULT_SITE_URL;

  try {
    return new URL(raw).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getBookingUrl() {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!url) {
    return null;
  }

  try {
    return new URL(url).toString();
  } catch {
    return null;
  }
}

/** Calendly embed URL for inline iframe (adds embed params). Returns null if booking URL is not Calendly. */
export function getCalendlyEmbedUrl(): string | null {
  const booking = getBookingUrl();
  if (!booking) return null;
  try {
    const u = new URL(booking);
    if (!u.hostname.endsWith("calendly.com")) return null;
    u.searchParams.set("embed_domain", getSiteUrl().replace(/^https?:\/\//, ""));
    u.searchParams.set("embed_type", "Inline");
    return u.toString();
  } catch {
    return null;
  }
}

export function getContactPhone() {
  return process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || null;
}

export function getGscVerification() {
  return process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim() || null;
}

/** TwoApps company LinkedIn URL — wired into Organization `sameAs` + footer. */
export function getLinkedInCompanyUrl() {
  return (
    process.env.NEXT_PUBLIC_LINKEDIN_COMPANY_URL?.trim() ||
    "https://www.linkedin.com/company/two-apps/"
  );
}

/** Founder (Zain Hassan) LinkedIn URL — wired into Person `sameAs`. Set via env when available. */
export function getLinkedInFounderUrl() {
  return process.env.NEXT_PUBLIC_LINKEDIN_FOUNDER_URL?.trim() || null;
}

/** GA4 measurement id. Defaults to the live TwoApps property; override per-env if needed. */
export function getGa4MeasurementId() {
  return process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "G-91ETCND1B6";
}

/**
 * Absolute URL of the Organization logo (raster preferred). Defaults to the
 * existing branded OG image so the node never references a missing asset; set
 * NEXT_PUBLIC_ORG_LOGO to a square logo (e.g. "/logo-512.png") when available.
 */
export function getOrgLogoUrl(siteUrl = getSiteUrl()) {
  const path = process.env.NEXT_PUBLIC_ORG_LOGO?.trim() || "/og-default.png";
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Absolute URL of the founder headshot for Person schema, or null if not set
 * (avoids a broken image reference). Set NEXT_PUBLIC_FOUNDER_IMAGE to enable.
 */
export function getFounderImageUrl(siteUrl = getSiteUrl()) {
  const path = process.env.NEXT_PUBLIC_FOUNDER_IMAGE?.trim();
  if (!path) return null;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
