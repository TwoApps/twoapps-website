import { notFound } from "next/navigation";

import { getIndustryBySlug, industries, processSteps } from "@/content";
import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";

import type { Industry } from "@/content/types";

import { ScrollBot } from "@/components/shared/scroll-bot";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata(industry.seo);
}

function getIndustryShortName(title: string): string {
  return title.replace(/\s*\/\s*Automation\s*$/i, "").replace(/\s+Automation\s*$/i, "");
}

function getIndustryChips(industry: Industry): {
  chips: string[];
  mobileChips: string[];
} {
  const bySlug: Record<
    string,
    { chips: string[]; mobileChips: string[] }
  > = {
    "fintech-aml-kyc-automation": {
      chips: ["AML / KYC", "Workflow automation", "Human-in-the-loop"],
      mobileChips: ["AML and KYC ready", "Automated workflow routing", "Humans review every output"],
    },
  };
  return (
    bySlug[industry.slug] ?? {
      chips: ["Workflow automation", "Human-in-the-loop", "UAE-based delivery"],
      mobileChips: ["Workflow automation built in", "Humans review every output", "UAE-based delivery team"],
    }
  );
}

function getSnapshotTags(
  industry: Industry,
  category: "pain" | "solution" | "pilot",
): string[] {
  const bySlug: Record<string, Record<string, string[]>> = {
    "fintech-aml-kyc-automation": {
      pain: ["Queue pressure", "Document checks", "Handoff gaps"],
      solution: ["AI routing", "Human checkpoints", "Ops dashboards"],
      pilot: ["KYC triage", "Alert enrichment", "SLA monitoring"],
    },
  };
  return bySlug[industry.slug]?.[category] ?? [getIndustryShortName(industry.title)];
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: `/industries/${industry.slug}` },
  ];

  const shortName = getIndustryShortName(industry.title).toLowerCase();
  const firstPain = industry.painPoints[0] ?? "manual, repetitive work";
  const painCount = industry.painPoints.length;
  const firstSolution = industry.solutions[0] ?? "AI-assisted workflow routing";
  const firstExample =
    industry.exampleAutomations[0] ?? "one bounded automation opportunity";

  const { chips, mobileChips } = getIndustryChips(industry);

  const snapshotCards = [
    {
      title: "The friction",
      body: `Teams get slowed down by repeat work. The clearest signal is usually ${firstPain.toLowerCase()}${
        painCount > 1
          ? ` — and ${painCount - 1} more friction point${painCount > 2 ? "s" : ""} that stack on top of it`
          : ""
      }.`,
      tags: getSnapshotTags(industry, "pain"),
    },
    {
      title: "The fix",
      body: `We design AI-assisted workflows that handle the repeat steps while keeping humans in charge of judgment calls. That starts with ${firstSolution.toLowerCase()}.`,
      tags: getSnapshotTags(industry, "solution"),
    },
    {
      title: "The first win",
      body: `Start with one bounded workflow that already has measurable pain. A strong first pilot here is ${firstExample.toLowerCase()} — something you can measure in weeks.`,
      tags: getSnapshotTags(industry, "pilot"),
    },
  ];

  const detailItems = [
    {
      title: "What this industry faces",
      summary: "The repeat work that drains speed and consistency",
      content: (
        <ul className="space-y-3 text-sm text-ink/80 sm:text-base">
          {industry.painPoints.map((item) => (
            <li
              key={item}
              className="rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              <span className="font-medium text-ink/90">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "How TwoApps solves it",
      summary: "AI-assisted workflows with human control points",
      content: (
        <ul className="space-y-3 text-sm text-ink/80 sm:text-base">
          {industry.solutions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Real use cases to pilot",
      summary: "Bounded automations that prove value fast",
      content: (
        <div className="grid grid-cols-1 gap-3 text-sm text-ink/80 sm:grid-cols-2 sm:gap-4 sm:text-base">
          {industry.exampleAutomations.map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "What happens next",
      summary: "From first audit to scaled workflow",
      content: (
        <ol className="space-y-3 text-sm text-ink/80 sm:text-base">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/10 text-xs font-medium text-ink/80">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-ink">{step.title}</p>
                <p className="mt-0.5 text-ink/70">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: industry.title,
            description: industry.summary,
            path: `/industries/${industry.slug}`,
            serviceType: "Industry-specific AI automation consulting",
          }),
        ]}
      />
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.15"
        data-bot-say="Every industry has its own funnel quirks — here's how we solve yours." data-bot-short="Every funnel, solved"
      >
        <PageHero
          eyebrow="Industry Focus"
          title={industry.title}
          description={`${industry.summary} We build AI-assisted workflows that cut turnaround time, reduce errors, and keep your team in control.`}
          chips={chips}
          mobileChips={mobileChips}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="Drill into the pain points, solutions, and pilots we typically run in this space." data-bot-short="Pain points and pilots"
      >
        <Section className="pb-0 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.3"
        data-bot-say="Friction, fix, first win — the pattern we use to keep scope tight and humans in control." data-bot-short="Friction, fix, first win"
      >
        <Section>
          <Heading
            eyebrow="At a glance"
            title={`Built for the pressure ${shortName} teams face`}
            subtitle="See where time gets lost, how we tighten the workflow, and what a first pilot looks like — all before scaling further."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
            {snapshotCards.map((card) => (
              <Card
                key={card.title}
                className="flex h-full flex-col p-6 sm:p-7 md:p-8"
              >
                <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mb-7 mt-3 text-[15px] leading-[1.6] text-ink/58 sm:mb-8">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.65"
        data-bot-say="Pain points, solutions, pilots. Open a panel to see what a first workflow could look like." data-bot-short="Pain points and pilots"
      >
        <DetailPanelsSection
          eyebrow="Industry Detail"
          title="The full picture, one section at a time"
          subtitle="Open any panel to see what this industry faces, how we solve it, what a pilot looks like, and what happens next."
          items={detailItems}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.25"
        data-bot-say="Still unsure? These are the questions we hear most — answered straight." data-bot-short="Questions we hear most"
      >
        <FaqSection
          items={industry.faq}
          title="Questions we hear a lot"
          eyebrow="FAQ"
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Ready to fix the bottleneck? Book a call and we'll map your workflow." data-bot-short="Fix the bottleneck"
      >
        <CtaBand
          title={`Ready to fix your ${shortName} workflow?`}
          copy="Tell us which workflow is hurting most. We'll map a bounded pilot, name the constraints, and show you the fastest path to a measurable result."
          primaryHref="/contact"
          primaryLabel="Start the conversation"
          secondaryHref="/book"
          secondaryLabel="Book a call"
        />
      </div>
    </>
  );
}
