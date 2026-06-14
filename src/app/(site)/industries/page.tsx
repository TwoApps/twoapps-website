import Link from "next/link";

import { featuredIndustries, industries } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { ScrollBot } from "@/components/shared/scroll-bot";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industries where TwoApps is a strong fit first: operations-heavy teams and compliance-aware businesses that need practical AI workflows and internal tools.",
  canonicalPath: "/industries",
  keywords: ["ai automation industries", "operations automation consulting", "fintech aml kyc automation"],
  ogImage: "/og-default.svg"
});

const industrySummaryItems = [
  {
    label: "Focus",
    title: "Compliance & Ops-heavy workflows",
    body: "The strongest first pages target processes with repetitive steps, review queues, and measurable turnaround pressure.",
    meta: ["Queue pressure", "Approvals", "Auditability"]
  },
  {
    label: "Launch",
    title: "AML / KYC launch wedge",
    body: "Compliance-heavy workflows create a strong positioning wedge because speed and consistency matter and human-in-the-loop design is expected.",
    meta: ["Fintech", "AML/KYC", "Human in loop"]
  },
  {
    label: "Expand",
    title: "Expand with proof",
    body: "Add more industry pages as case summaries and pilot examples grow, so each page stays credible.",
    meta: ["SEO depth", "Proof-driven", "Scalable"]
  }
];

export default function IndustriesPage() {
  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.12"
        data-bot-say="AI automation lands hardest where ops teams are already drowning in queues."
      >
        <PageHero
          eyebrow="Industries"
          title="AI automation built for ops-heavy industries"
          description="We focus on industries where queues, approvals, and repetitive work are slowing your team down."
          chips={["Ops-heavy teams", "Compliance-aware", "Human-in-the-loop"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.75"
        data-bot-say="Start where the queue pressure is real — that's where ROI shows up first."
      >
        <Section>
          <Heading
            eyebrow="Industry Fit"
            title="Start where queues create friction"
            subtitle="AI automation works best where queue pressure, repeatable tasks, and cross-tool coordination create real friction."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {industrySummaryItems.map((item) => (
              <Card key={item.title} className="h-full rounded-[22px] p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{item.label}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{item.body}</p>
                {item.meta.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.meta.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-xs text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.35"
        data-bot-say="Every vertical has its own friction. Open a panel to see how we think about yours."
      >
        <DetailPanelsSection
          eyebrow="Industry Pages"
          title="Industries we serve"
          subtitle="Open a panel to see pain points and pilot ideas for each vertical."
          items={[
            ...industries.map((industry) => ({
              title: industry.title,
              summary: industry.summary,
              content: (
                <div className="space-y-4 text-sm text-ink/78 sm:text-base">
                  <p className="leading-relaxed">{industry.summary}</p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="focus-ring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-4 py-2 text-sm text-accent-1 hover:bg-accent-1/[0.08] sm:px-5"
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {featuredIndustries.slice(0, 4).map((industry) => (
                    <div
                      key={industry}
                      className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/78 sm:text-base"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.6"
        data-bot-say="Got a workflow that should be automated? Let's map it and build the pilot."
      >
        <CtaBand
          title="Got a workflow that should be automated?"
          copy="We map the workflow, then build the pilot that proves value fastest."
          primaryHref="/contact"
          primaryLabel="Book a call"
        />
      </div>
    </>
  );
}
