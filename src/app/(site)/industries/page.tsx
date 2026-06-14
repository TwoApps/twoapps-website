import Link from "next/link";

import { featuredIndustries, industries, processSteps } from "@/content";
import {
  buildMetadata,
  collectionPageSchema,
  makeBreadcrumbSchema,
  organizationSchema
} from "@/lib/seo";
import type { Industry } from "@/content/types";

import { ScrollBot } from "@/components/shared/scroll-bot";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "See how TwoApps helps fintech, compliance, and operations-heavy teams turn slow manual workflows into fast, reliable AI systems.",
  canonicalPath: "/industries",
  keywords: [
    "ai automation industries",
    "operations automation consulting",
    "fintech aml kyc automation",
    "compliance automation industries"
  ],
  ogImage: "/og-default.svg"
});

const otherIndustries = featuredIndustries.filter(
  (name) =>
    !industries.some(
      (industry) =>
        industry.title.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(industry.title.toLowerCase())
    )
);

const fitCards = [
  {
    label: "Queue pressure",
    title: "Work piles up in queues",
    body: "Approval queues, document checks, and routing eat hours every week. We automate the repetitive parts so your team handles exceptions, not every ticket.",
    meta: ["AML/KYC", "Support tickets", "Onboarding"]
  },
  {
    label: "Compliance stakes",
    title: "Mistakes are expensive",
    body: "In regulated workflows, consistency matters. We keep human checkpoints where risk lives and build an audit trail around everything else.",
    meta: ["Audit trails", "Human-in-the-loop", "Risk controls"]
  },
  {
    label: "Pilot-friendly",
    title: "Prove value in weeks",
    body: "We start with one workflow, measure the outcome, and expand. No six-month roadmap required.",
    meta: ["Pilot-first", "Measurable ROI", "Scalable"]
  }
];

function IndustryPanel({ industry }: { industry: Industry }) {
  return (
    <div className="space-y-6 text-sm text-ink/78 sm:text-[15px]">
      <p className="leading-relaxed text-ink/70">
        Here is how we think about this vertical — what slows teams down, where we focus first, and what a pilot usually looks like.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
            Common pain points
          </p>
          <ul className="mt-3 space-y-2">
            {industry.painPoints.map((point) => (
              <li key={point} className="flex gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
            How TwoApps helps
          </p>
          <ul className="mt-3 space-y-2">
            {industry.solutions.map((solution) => (
              <li key={solution} className="flex gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {industry.exampleAutomations.length ? (
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
            Typical automations
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {industry.exampleAutomations.map((example) => (
              <span
                key={example}
                className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-xs text-ink/65"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <Link
        href={`/industries/${industry.slug}`}
        className="focus-ring inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-4 py-2 text-sm text-accent-1 hover:bg-accent-1/[0.08] sm:px-5"
      >
        Read the full industry page <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" }
          ]),
          collectionPageSchema({
            name: "Industries Served by TwoApps",
            description:
              "Explore the industries TwoApps specializes in for AI workflow automation, including fintech, AML/KYC, and compliance-heavy operations.",
            path: "/industries",
            items: industries.map((industry) => ({
              name: industry.title,
              path: `/industries/${industry.slug}`,
              description: industry.summary
            }))
          })
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.12"
        data-bot-say="AI automation lands hardest where ops teams are already drowning in queues." data-bot-short="Start where queues hurt"
      >
        <PageHero
          eyebrow="Industries"
          title="Built for the industries that run on queues, approvals, and repeat work"
          description="We help fintech, compliance, and operations-heavy teams turn slow manual workflows into fast, reliable AI systems — without ripping out the tools they already use."
          chips={["UAE-based", "Compliance-aware", "Pilot-first"]}
          mobileChips={[
            "Based in the UAE",
            "Built for compliance workflows",
            "Pilot-first, then scale",
          ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.75"
        data-bot-say="Start where the queue pressure is real — that's where ROI shows up first." data-bot-short="Start where ROI shows"
      >
        <Section>
          <Heading
            eyebrow="Why these industries first"
            title="The common thread: high-stakes, repeatable work"
            subtitle="We focus on workflows where speed, consistency, and auditability matter — because that's where AI automation delivers the clearest return."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">
            {fitCards.map((card) => (
              <Card key={card.title} className="h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  {card.label}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {card.body}
                </p>
                {card.meta.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.meta.map((tag) => (
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
        data-bot-say="Every vertical has its own friction. Open a panel to see the pain points and how we design the fix." data-bot-short="Friction, fixed per vertical"
      >
        <DetailPanelsSection
          eyebrow="Industries we serve"
          title="See your workflow. See the fix."
          subtitle="Each panel shows the friction we see most often and how we shape a pilot around it."
          items={[
            ...industries.map((industry) => ({
              title: industry.title,
              summary: industry.summary,
              content: <IndustryPanel industry={industry} />
            })),
            {
              title: "Other industries we fit",
              summary: "Adjacent verticals where the same playbook applies",
              content: (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {otherIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-white px-4 py-4 text-sm text-ink/78 sm:text-base"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{industry}</span>
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
        data-bot-fx="0.55"
        data-bot-say="Four steps: audit, pilot, stabilize, scale. No roadmap theater." data-bot-short="Audit, pilot, stabilize, scale"
      >
        <Section className="bg-cyan-field">
          <Heading
            eyebrow="How we work"
            title="From messy workflow to scaled AI pilot"
            subtitle="A simple, repeatable process that keeps risk low and learning high."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden">
                <span className="absolute right-4 top-4 font-display text-5xl font-semibold text-ink/[0.06]">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.copy}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.6"
        data-bot-say="Got a workflow that should be automated? Let's map it and build the pilot." data-bot-short="Let's map your workflow"
      >
        <CtaBand
          title="Have a workflow that slows your team down?"
          copy="Tell us the process. We'll map the first AI pilot and show you what 'shipped' actually looks like."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/services"
          secondaryLabel="See our services"
        />
      </div>
    </>
  );
}
