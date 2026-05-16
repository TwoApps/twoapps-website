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
    headline: "Start where queues create friction",
    subline: "AI automation works best where queue pressure, repeatable tasks, and cross-tool coordination create real friction."
  },
  {
    label: "Launch",
    headline: "Begin with compliance — AML and KYC",
    subline: "Fintech compliance is our wedge: high stakes, repeatable steps, clear ROI."
  },
  {
    label: "Expand",
    headline: "Expand into adjacent ops workflows",
    subline: "From compliance we move into ops-heavy verticals with the same playbook."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI automation built for ops-heavy industries"
        description="We focus on industries where queues, approvals, and repetitive work are slowing your team down."
        chips={["Ops-heavy teams", "Compliance-aware", "Human-in-the-loop"]}
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
        title="Industries we serve"
        subtitle="Open a panel to see pain points and pilot ideas for each vertical."
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
            title: "Other industries we fit",
            summary: "Adjacent verticals where the same playbook applies",
            content: (
              <div className="grid gap-2 sm:grid-cols-2">
                {featuredIndustries.slice(0, 4).map((industry) => (
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
        title="Got a workflow that should be automated?"
        copy="We map the workflow, then build the pilot that proves value fastest."
        primaryHref="/contact"
        primaryLabel="Book a call"
      />
    </>
  );
}
