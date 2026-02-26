import { notFound } from "next/navigation";

import { getRegionBySlug, regions } from "@/content";
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

  const isGcc = region.slug === "dubai-uae-gcc-ai-automation";

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Regions", path: "/regions" },
    { name: region.title, path: `/regions/${region.slug}` }
  ];

  const frames: StickySceneFrame[] = [
    {
      label: "Region",
      headline: region.title,
      subline: region.summary
    },
    {
      label: "Fit",
      headline: isGcc ? "Direct business delivery for UAE/GCC teams" : "White-label capacity for global software houses",
      subline: region.marketFocus[0] ?? "Regional page focus and target buyer profile."
    },
    {
      label: "Model",
      headline: isGcc ? "Pilot-first direct engagement model" : "Capability sprint + pilot + retainer partnership model",
      subline: region.engagementModel[0] ?? "Start with one bounded engagement and expand."
    }
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
            areaServed: isGcc
              ? ["Dubai", "UAE", "GCC"]
              : ["Eastern Europe", "South America", "Australia", "New Zealand"]
          })
        ]}
      />
      <PageHero
        eyebrow="Region"
        title={region.title}
        description={region.summary}
        chips={isGcc ? ["Dubai", "UAE", "GCC", "Direct delivery"] : ["White-label", "Eastern Europe", "South America", "Australia / New Zealand"]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <StickyScene
        eyebrow="Region Summary"
        frames={frames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "Market focus",
                body: region.marketFocus[0] ?? "Target buyers and teams",
                meta: region.marketFocus.slice(1, 3)
              },
              {
                title: "Why Two Apps",
                body: region.whyTwoApps[0] ?? "Regional execution fit and differentiators",
                meta: region.whyTwoApps.slice(1, 3)
              },
              {
                title: "Engagement model",
                body: region.engagementModel[0] ?? "Pilot-first implementation path",
                meta: region.engagementModel.slice(1, 3)
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Region Detail"
        title="Expand market fit, positioning, and engagement model"
        subtitle="All regional detail stays crawlable and readable, while the page opens with a low-text cinematic summary."
        items={[
          {
            title: "Market focus",
            summary: "Who this region page is designed for",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {region.marketFocus.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            )
          },
          {
            title: "Why Two Apps",
            summary: "Positioning and differentiation",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {region.whyTwoApps.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          },
          {
            title: isGcc ? "Direct delivery model" : "White-label partnership model",
            summary: "How engagements usually start and expand",
            content: (
              <div className="space-y-4 text-sm text-ink/78">
                <div className="grid gap-2 md:grid-cols-2">
                  {region.engagementModel.map((step) => (
                    <div key={step} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      {step}
                    </div>
                  ))}
                </div>
                {!isGcc ? (
                  <p className="leading-relaxed text-ink/70">
                    This partner model is especially relevant for agencies in Eastern Europe, South America, Australia,
                    and New Zealand that need specialized AI implementation capacity without immediately expanding
                    headcount.
                  </p>
                ) : null}
              </div>
            )
          }
        ]}
      />

      <FaqSection items={region.faq} />
      <CtaBand
        title={isGcc ? "Discuss a UAE/GCC automation project" : "Discuss a white-label agency partnership"}
        copy={
          isGcc
            ? "Start with one workflow or internal tool pilot and build a roadmap from measurable operational gains."
            : "Start with one client pilot or a capability sprint to establish a repeatable white-label delivery model."
        }
        primaryHref="/contact"
        primaryLabel="Contact Two Apps"
      />
    </>
  );
}
