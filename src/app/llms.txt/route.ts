import { industries, regions, services } from "@/content";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const siteUrl = getSiteUrl();

  const lines: string[] = [
    `# ${BRAND_NAME}`,
    "",
    "> UAE-based AI workflow automation partner. We automate marketing, analytics,",
    "> operations, and compliance work for businesses across UAE/GCC and globally —",
    "> and deliver AI projects behind the brand for agencies and software houses.",
    "",
    `${BRAND_NAME} is based in Dubai, UAE. We serve clients worldwide with practical AI`,
    "workflow automation, custom AI agents, AI-enabled internal tools, MVP development,",
    "and white-label AI delivery for software houses. Founder: Zain Hassan.",
    `Primary URL: ${siteUrl}.`,
    "",
    "## Services",
    "",
    ...services.map(
      (service) =>
        `- [${service.title}](${siteUrl}${service.seo.canonicalPath}): ${service.tagline}`
    ),
    "",
    "## Industries",
    "",
    ...industries.map(
      (industry) => `- [${industry.title}](${siteUrl}${industry.seo.canonicalPath})`
    ),
    "",
    "## Regions",
    "",
    ...regions.map(
      (region) => `- [${region.title}](${siteUrl}${region.seo.canonicalPath})`
    ),
    `- [Singapore microsite](${siteUrl}/sg) — MAS / PDPA aligned`,
    `- [UAE microsite](${siteUrl}/ae) — Vision 2030 aligned`,
    `- [Australia microsite](${siteUrl}/au)`,
    `- [New Zealand microsite](${siteUrl}/nz)`,
    `- [Europe microsite](${siteUrl}/eu) — GDPR by design`,
    "",
    "## Learn",
    "",
    `- [Free Guide: 5 AI Workflows That Save 10+ Hours/Week](${siteUrl}/guide)`,
    `- [TwoApps Academy — free courses](${siteUrl}/academy)`,
    `- [Live AI Workflow Demo](${siteUrl}/livestream)`,
    "",
    "## About",
    "",
    `- [About TwoApps](${siteUrl}/about)`,
    `- [Founder CV — Zain Hassan](https://zainhthegreat.github.io/my_cv_zain/)`,
    `- [Work — representative case patterns](${siteUrl}/work)`,
    "",
    "## Optional",
    "",
    `- [Contact](${siteUrl}/contact)`,
    `- [Book a discovery call](${siteUrl}/book)`,
    `- [Privacy policy](${siteUrl}/privacy)`,
    `- [Terms](${siteUrl}/terms)`,
    `- [Full content (for citation)](${siteUrl}/llms-full.txt)`,
    `- [Machine-readable catalog (JSON)](${siteUrl}/api/catalog)`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
    }
  });
}
