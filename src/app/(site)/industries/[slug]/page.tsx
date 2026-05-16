import { notFound } from "next/navigation";

import { getIndustryBySlug, industries } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
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

  const frames: StickySceneFrame[] = [
    {
      label: "Pain",
      headline: industry.title,
      subline: industry.summary
    },
    {
      label: "Approach",
      headline: "Humans stay in control",
      subline: industry.solutions[0] ?? "AI-assisted workflow design with approval gates."
    },
    {
      label: "Pilot",
      headline: "Start with one bounded pilot",
      subline: "One real workflow, clear ownership, approval gates baked in."
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
      <PageHero
        eyebrow="Industry Focus"
        title={industry.title}
        description={industry.summary}
        chips={["AML / KYC", "Workflow automation", "Human-in-the-loop"]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <StickyScene
        eyebrow="Industry Summary"
        frames={frames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "Common pain points",
                body: industry.painPoints[0] ?? "Manual queue pressure and repetitive process handling.",
                meta: industry.painPoints.slice(1, 3)
              },
              {
                title: "Typical solution pattern",
                body: industry.solutions[0] ?? "AI-assisted workflow routing and operator support.",
                meta: industry.solutions.slice(1, 3)
              },
              {
                title: "Pilot ideas",
                body: industry.exampleAutomations[0] ?? "Start with one bounded automation opportunity.",
                meta: industry.exampleAutomations.slice(1, 3)
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Industry Detail"
        title="Pain points, solutions, pilots"
        subtitle="Tap a panel to see how we approach AML and KYC operations."
        items={[
          {
            title: "Pain points",
            summary: "Where teams lose time and consistency",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {industry.painPoints.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
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
              <ul className="space-y-2 text-sm text-ink/78">
                {industry.solutions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
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
              <div className="grid gap-2 md:grid-cols-2 text-sm text-ink/78">
                {industry.exampleAutomations.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            )
          }
        ]}
      />

      <FaqSection items={industry.faq} />
      <CtaBand
        title="Ready to fix your AML or KYC bottleneck?"
        copy="We map the workflow, then build the pilot. Humans stay in control throughout."
        primaryHref="/contact"
        primaryLabel="Book a call"
      />
    </>
  );
}
