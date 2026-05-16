import { industries, regions, services } from "@/content";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const siteUrl = getSiteUrl();

  const payload = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${BRAND_NAME} services catalog`,
    description:
      `Machine-readable catalog of ${BRAND_NAME} services, industries, regions, and pricing for AI agents.`,
    url: `${siteUrl}/api/catalog`,
    organization: {
      name: BRAND_NAME,
      url: siteUrl,
      location: "Dubai, UAE",
      founder: "Zain Hassan",
      contactUrl: `${siteUrl}/contact`,
      bookingUrl: `${siteUrl}/book`
    },
    services: services.map((service) => ({
      id: service.slug,
      url: `${siteUrl}${service.seo.canonicalPath}`,
      name: service.title,
      tagline: service.tagline,
      summary: service.summary,
      audiences: service.audiences,
      benefits: service.benefits,
      deliverables: service.deliverables,
      process: service.process
    })),
    industries: industries.map((industry) => ({
      id: industry.slug,
      url: `${siteUrl}${industry.seo.canonicalPath}`,
      name: industry.title,
      summary: industry.summary
    })),
    regions: regions.map((region) => ({
      id: region.slug,
      url: `${siteUrl}${region.seo.canonicalPath}`,
      name: region.title,
      summary: region.summary
    })),
    microsites: [
      { id: "ae", url: `${siteUrl}/ae`, name: "UAE", focus: "Vision 2030 / GCC enterprise" },
      { id: "sg", url: `${siteUrl}/sg`, name: "Singapore", focus: "MAS / PDPA compliance" },
      { id: "au", url: `${siteUrl}/au`, name: "Australia", focus: "Mid-market ROI" },
      { id: "nz", url: `${siteUrl}/nz`, name: "New Zealand", focus: "Team capacity" },
      { id: "eu", url: `${siteUrl}/eu`, name: "Europe", focus: "GDPR by design" }
    ],
    pricing: {
      url: `${siteUrl}/pricing`,
      currency: "USD",
      packages: [
        {
          id: "workflow-assessment",
          name: "Workflow Assessment",
          priceUsd: 8000,
          timeline: "2 weeks"
        },
        {
          id: "lead-qualification",
          name: "Lead Qualification Workflow",
          priceUsd: 10000,
          timeline: "1 week"
        },
        {
          id: "customer-support",
          name: "Customer Support Automation",
          priceUsd: 12000,
          timeline: "2 weeks"
        },
        {
          id: "finance-reporting",
          name: "Finance Reporting Automation",
          priceUsd: 15000,
          timeline: "2 weeks"
        },
        {
          id: "ai-governance-audit",
          name: "AI Governance Audit",
          priceUsd: 20000,
          timeline: "3 weeks"
        }
      ],
      retainers: [
        {
          id: "compliance-as-a-service",
          name: "Compliance-as-a-Service",
          priceUsd: 5000,
          billingPeriod: "month",
          minimumTerm: "6 months"
        }
      ]
    },
    learn: {
      guide: `${siteUrl}/guide`,
      academy: `${siteUrl}/academy`,
      livestream: `${siteUrl}/livestream`
    },
    citationFiles: {
      llmsTxt: `${siteUrl}/llms.txt`,
      llmsFullTxt: `${siteUrl}/llms-full.txt`,
      sitemap: `${siteUrl}/sitemap.xml`
    }
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control":
        "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
