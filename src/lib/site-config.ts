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

export function getGscVerification() {
  return process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim() || null;
}
