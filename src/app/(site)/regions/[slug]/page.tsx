import { notFound } from "next/navigation";

import { getRegionBySlug, regions } from "@/content";
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
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};
  return buildMetadata(region.seo);
}

export default async function RegionDetailPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Regions", path: "/regions" },
    { name: region.title, path: `/regions/${region.slug}` }
  ];

  return (
    <>
      <JsonLd
        data={[
          makeBreadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: region.title,
            description: region.summary,
            path: `/regions/${region.slug}`,
            serviceType: "Regional AI automation and implementation partner",
            areaServed: region.slug === "dubai-uae-gcc-ai-automation" ? ["Dubai", "UAE", "GCC"] : ["Eastern Europe", "South America", "Australia", "New Zealand"]
          })
        ]}
      />
      <PageHero
        eyebrow="Region"
        title={region.title}
        description={region.summary}
        chips={region.slug === "dubai-uae-gcc-ai-automation" ? ["Dubai", "UAE", "GCC", "Direct delivery"] : ["White-label", "Eastern Europe", "South America", "Australia / New Zealand"]}
      />
      <Section className="pb-8 sm:pb-12">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <Tag className="mb-4">Market Focus</Tag>
            <h2 className="font-display text-2xl font-semibold">Who this page is designed for</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {region.marketFocus.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Why Two Apps</Tag>
            <h2 className="font-display text-2xl font-semibold">Positioning and differentiation</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {region.whyTwoApps.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pt-0">
        <Card className="p-6 sm:p-8">
          <Tag className="mb-4">Engagement Model</Tag>
          <h2 className="font-display text-3xl font-semibold">
            {region.slug === "dubai-uae-gcc-ai-automation"
              ? "Direct project delivery model for UAE/GCC businesses"
              : "White-label partnership model for global software houses"}
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {region.engagementModel.map((step) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-ink/80">
                {step}
              </div>
            ))}
          </div>
          {region.slug !== "dubai-uae-gcc-ai-automation" ? (
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              This partner model is especially relevant for agencies in Eastern Europe, South America, Australia, and New Zealand that need specialized AI implementation capacity without immediately expanding headcount.
            </p>
          ) : null}
        </Card>
      </Section>

      <FaqSection items={region.faq} />
      <CtaBand
        title={region.slug === "dubai-uae-gcc-ai-automation" ? "Discuss a UAE/GCC automation project" : "Discuss a white-label agency partnership"}
        copy={
          region.slug === "dubai-uae-gcc-ai-automation"
            ? "Start with one workflow or internal tool pilot and build a roadmap from measurable operational gains."
            : "Start with one client pilot or a capability sprint to establish a repeatable white-label delivery model."
        }
        primaryHref="/contact"
        primaryLabel="Contact Two Apps"
      />
    </>
  );
}
