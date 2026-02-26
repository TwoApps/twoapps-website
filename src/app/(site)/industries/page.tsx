import Link from "next/link";

import { featuredIndustries, industries } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industries where TwoApps is a strong fit first: operations-heavy teams and compliance-aware businesses that need practical AI workflows and internal tools.",
  canonicalPath: "/industries",
  keywords: ["ai automation industries", "operations automation consulting", "fintech aml kyc automation"],
  ogImage: "/og-default.svg"
});

const industryFrames: StickySceneFrame[] = [
  {
    label: "Focus",
    headline: "Operations-heavy environments are the best starting point",
    subline: "AI automation works best where queue pressure, repeatable tasks, and cross-tool coordination create real friction."
  },
  {
    label: "Launch",
    headline: "Lead with one high-signal industry page",
    subline: "Start with fintech / AML / KYC and expand into adjacent operational verticals as proof grows."
  },
  {
    label: "Expand",
    headline: "Build vertical pages from workflow patterns, not generic AI copy",
    subline: "Each industry page should map pain points, pilot automations, and operational constraints."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry pages should show fit, not just keywords"
        description="Use the scenes for the top-level positioning and open the detail panels to see the current launch focus and expansion targets."
        chips={["UAE-based, global", "Ops-heavy teams", "Compliance-aware workflows"]}
      />

      <StickyScene
        eyebrow="Industry Fit"
        frames={industryFrames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "Compliance & Ops-heavy workflows",
                body: "The strongest first pages target processes with repetitive steps, review queues, and measurable turnaround pressure.",
                meta: ["Queue pressure", "Approvals", "Auditability"]
              },
              {
                title: "AML / KYC launch wedge",
                body: "Compliance-heavy workflows create a strong positioning wedge because speed and consistency matter and human-in-the-loop design is expected.",
                meta: ["Fintech", "AML/KYC", "Human in loop"]
              },
              {
                title: "Expand with proof",
                body: "Add more industry pages as case summaries and pilot examples grow, so each page stays credible.",
                meta: ["SEO depth", "Proof-driven", "Scalable"]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Industry Pages"
        title="Current and planned industry positioning"
        subtitle="The top of the page stays cinematic; the operational detail remains server-rendered and crawlable here."
        items={[
          ...industries.map((industry) => ({
            title: industry.title,
            summary: industry.summary,
            content: (
              <div className="space-y-4 text-sm text-ink/78">
                <p className="leading-relaxed">{industry.summary}</p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-3 py-1.5 text-sm text-accent-1 hover:bg-accent-1/[0.08]"
                >
                  Open industry page <span aria-hidden>↗</span>
                </Link>
              </div>
            )
          })),
          {
            title: "Expansion targets",
            summary: "High-fit verticals for future landing pages and outreach",
            content: (
              <div className="grid gap-2 sm:grid-cols-2">
                {featuredIndustries.map((industry) => (
                  <div key={industry} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink/78">
                    {industry}
                  </div>
                ))}
              </div>
            )
          }
        ]}
      />

      <CtaBand
        title="Have an operations-heavy industry with repetitive workflows?"
        copy="We can map the workflow first and identify where AI workflows, AI copilots, or internal tools will create the fastest impact."
        primaryHref="/contact"
        primaryLabel="Discuss an industry workflow"
      />
    </>
  );
}
