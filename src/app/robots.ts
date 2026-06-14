import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/downloads/"]
      },
      // Classic search crawlers (explicit allow for clarity)
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google / Apple / Meta / Amazon / Cohere AI training + answer crawlers
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Google-CloudVertexBot", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Diffbot", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
