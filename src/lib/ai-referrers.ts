/**
 * Pure detection of AI answer-engine referrals (ChatGPT, Perplexity, Gemini,
 * Claude, Copilot). DOM-free so it is unit-testable; consumed by the Analytics
 * component to tag AI-sourced sessions in GA4 + Plausible.
 */

export type AiEngine =
  | "ChatGPT"
  | "Perplexity"
  | "Gemini"
  | "Claude"
  | "Copilot";

type HostRule = { match: string; engine: AiEngine };

const HOST_RULES: HostRule[] = [
  { match: "chatgpt.com", engine: "ChatGPT" },
  { match: "chat.openai.com", engine: "ChatGPT" },
  { match: "oai.azure.com", engine: "ChatGPT" },
  { match: "perplexity.ai", engine: "Perplexity" },
  { match: "gemini.google.com", engine: "Gemini" },
  { match: "bard.google.com", engine: "Gemini" },
  { match: "claude.ai", engine: "Claude" },
  { match: "copilot.microsoft.com", engine: "Copilot" },
  { match: "edgeservices.bing.com", engine: "Copilot" }
];

export function detectAiReferrer(
  referrer: string | null | undefined,
  params?: URLSearchParams | null
): { engine: AiEngine } | null {
  // Explicit campaign tags take priority (e.g. ?utm_source=chatgpt.com).
  const tagged =
    params?.get("utm_source") || params?.get("ref") || params?.get("source");
  if (tagged) {
    const t = tagged.toLowerCase();
    const tagHit = HOST_RULES.find((rule) => t.includes(rule.match.split(".")[0]));
    if (tagHit) return { engine: tagHit.engine };
  }

  if (!referrer) return null;
  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    host = referrer.toLowerCase();
  }

  const hit = HOST_RULES.find((rule) => host.includes(rule.match));
  return hit ? { engine: hit.engine } : null;
}
