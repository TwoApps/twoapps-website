import { notFound } from "next/navigation";

import { getIndustryBySlug, industries } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

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

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: `/industries/${industry.slug}` }
  ];

  const summaryItems = [
    {
      label: "Pain",
      title: "Common pain points",
      body: industry.painPoints[0] ?? "Manual queue pressure and repetitive process handling.",
      meta: industry.painPoints.slice(1, 3)
    },
    {
      label: "Approach",
      title: "Typical solution pattern",
      body: industry.solutions[0] ?? "AI-assisted workflow routing and operator support.",
      meta: industry.solutions.slice(1, 3)
    },
    {
      label: "Pilot",
      title: "Pilot ideas",
      body: industry.exampleAutomations[0] ?? "Start with one bounded automation opportunity.",
      meta: industry.exampleAutomations.slice(1, 3)
    }
  ];

  return (
    <>
      <JsonLd
        data={[
          makeBreadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: industry.title,
            description: industry.summary,
            path: `/industries/${industry.slug}`,
            serviceType: "Industry-specific AI automation consulting"
          })
        ]}
      />
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.15"
        data-bot-say="Every industry has its own funnel quirks — here's how we solve yours."
      >
        <PageHero
          eyebrow="Industry Focus"
          title={industry.title}
          description={industry.summary}
          chips={["AML / KYC", "Workflow automation", "Human-in-the-loop"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="Drill into the pain points, solutions, and pilots we typically run in this space."
      >
        <Section className="pb-0 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.3"
        data-bot-say="Pain, approach, pilot — the pattern we use to keep scope tight and humans in control."
      >
        <Section>
          <Heading
            eyebrow="Industry Summary"
            title={`How we approach ${industry.title}`}
            subtitle="A practical AI automation pattern: identify the pain, keep humans in control, and prove value with one bounded pilot."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {summaryItems.map((item) => (
              <Card key={item.label} className="h-full rounded-[22px] p-5 sm:p-6">
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
        data-bot-fx="0.65"
        data-bot-say="Pain points, solutions, pilots. Open a panel to see what a first workflow could look like."
      >
        <DetailPanelsSection
          eyebrow="Industry Detail"
          title="Pain points, solutions, pilots"
          subtitle="Tap a panel to see how we approach operations in this space."
          items={[
            {
              title: "Pain points",
              summary: "Where teams lose time and consistency",
              content: (
                <ul className="space-y-2 text-sm text-ink/80">
                  {industry.painPoints.map((item) => (
                    <li key={item} className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "What we usually implement",
              summary: "Workflow and tooling patterns for this industry",
              content: (
                <ul className="space-y-2 text-sm text-ink/80">
                  {industry.solutions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "Example automations",
              summary: "Pilot candidates and workflow launch ideas",
              content: (
                <div className="grid grid-cols-1 gap-4 text-sm text-ink/80 sm:grid-cols-2 sm:gap-5">
                  {industry.exampleAutomations.map((item) => (
                    <div key={item} className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                      {item}
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
        data-bot-fx="0.25"
        data-bot-say="Still unsure? These are the questions we hear most — answered straight."
      >
        <FaqSection items={industry.faq} />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Ready to fix the bottleneck? Book a call and we'll map your workflow."
      >
        <CtaBand
          title="Ready to fix your AML or KYC bottleneck?"
          copy="We map the workflow, then build the pilot. Humans stay in control throughout."
          primaryHref="/contact"
          primaryLabel="Book a call"
        />
      </div>
    </>
  );
}
