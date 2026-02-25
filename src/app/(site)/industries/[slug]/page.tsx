import { notFound } from "next/navigation";

import { getIndustryBySlug, industries } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

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
        chips={["Compliance-aware", "Workflow automation", "Human-in-the-loop design"]}
      />
      <Section className="pb-8 sm:pb-12">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-6">
            <Tag className="mb-4">Pain Points</Tag>
            <h2 className="font-display text-2xl font-semibold">Where teams lose time and consistency</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {industry.painPoints.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Approach</Tag>
            <h2 className="font-display text-2xl font-semibold">What we usually implement</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {industry.solutions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pt-0">
        <Card className="p-6 sm:p-8">
          <Tag className="mb-4">Example Automations</Tag>
          <h2 className="font-display text-3xl font-semibold">Launch ideas for a compliance workflow pilot</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {industry.exampleAutomations.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-ink/80">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">
            The right pilot should be operationally real but bounded enough to implement safely with clear ownership and approval checkpoints.
          </p>
        </Card>
      </Section>

      <FaqSection items={industry.faq} />
      <CtaBand
        title="Discuss an AML/KYC or compliance workflow pilot"
        copy="We can map the workflow and identify where AI assistance and automation can improve speed while keeping humans in control."
        primaryHref="/contact"
        primaryLabel="Discuss compliance workflow"
      />
    </>
  );
}
