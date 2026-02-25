const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

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

export function getGscVerification() {
  return process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim() || null;
}
