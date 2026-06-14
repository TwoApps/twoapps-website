"use client";

import Script from "next/script";
import { useEffect } from "react";

import { detectAiReferrer } from "@/lib/ai-referrers";
import { getGa4MeasurementId } from "@/lib/site-config";

/**
 * GA4 (loaded only when NEXT_PUBLIC_GA4_MEASUREMENT_ID is set) + once-per-session
 * AI-referral tagging fired to BOTH GA4 and Plausible. Analytics must never throw
 * into the render path, so detection is wrapped defensively.
 */
export function Analytics() {
  const ga4Id = getGa4MeasurementId();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.sessionStorage.getItem("ai_referral_logged")) return;
      const params = new URLSearchParams(window.location.search);
      const hit = detectAiReferrer(document.referrer, params);
      if (!hit) return;

      window.sessionStorage.setItem("ai_referral_logged", "1");
      const payload = {
        ai_source: hit.engine,
        landing_page: window.location.pathname
      };
      window.gtag?.("event", "ai_referral", payload);
      window.plausible?.("AI Referral", { props: payload });
    } catch {
      // Swallow — analytics should never break the page.
    }
  }, []);

  // Only load GA4 on production builds so local dev / preview don't pollute data.
  if (!ga4Id || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/*
        Define the lightweight gtag() queue early so events (incl. the AI-referral
        event fired from the effect above) are buffered, but defer the heavy ~156 KiB
        remote gtag bundle to lazyOnload so it stays off the LCP/FCP critical path.
        gtag replays queued dataLayer pushes once the remote script arrives.
      */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}');`}
      </Script>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="lazyOnload"
      />
    </>
  );
}
