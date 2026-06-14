import { notFound } from "next/navigation";

import { getRegionBySlug, regions } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { Heading } from "@/components/ui/heading";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui/section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";

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

  const summaryCards = [
    {
      title: "Market focus",
      body: region.marketFocus[0] ?? "Target buyers and teams",
      meta: region.marketFocus.slice(1, 3)
    },
    {
      title: "Why TwoApps",
      body: region.whyTwoApps[0] ?? "Regional execution fit and differentiators",
      meta: region.whyTwoApps.slice(1, 3)
    },
    {
      title: "Engagement model",
      body: region.engagementModel[0] ?? "Pilot-first implementation path",
      meta: region.engagementModel.slice(1, 3)
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
              ? ["Dubai", "UAE", "GCC", "Middle East"]
              : ["Middle East", "Eastern Europe", "South America", "Australia", "New Zealand"]
          })
        ]}
      />
      <ScrollBot />

      <div data-bot-stop data-bot-fx="0.12" data-bot-say="Local compliance, global execution — here's what we do in your market." data-bot-icons="target,shield">
        <PageHero
          eyebrow="Region"
          title={region.title}
          description={region.summary}
          chips={
            isGcc
              ? ["Dubai", "GCC", "Direct delivery"]
              : ["White-label", "Global agencies", "AI implementation"]
          }
        />
      </div>

      <div data-bot-stop data-bot-fx="0.85" data-bot-say="Market focus, positioning, and how we engage." data-bot-icons="chart,person">
        <Section className="pb-0 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </Section>

        <Section>
          <Heading
            eyebrow="Region Summary"
            title={isGcc ? "Direct delivery for UAE/GCC teams" : "White-label delivery capacity for software houses"}
            subtitle={region.summary}
          />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-8 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-10"
              >
                <h3 className="font-display text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {card.meta.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/10 bg-ink/[0.03] rounded-full px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div data-bot-stop data-bot-fx="0.3" data-bot-say="Open a panel for the full regional playbook." data-bot-icons="eye,arrowR">
        <DetailPanelsSection
          eyebrow="Region Detail"
          title="Market fit, positioning, engagement"
          subtitle="Open a panel for market focus, positioning, and how we engage."
          items={[
            {
              title: "Market focus",
              summary: "Who this region page is designed for",
              content: (
                <ul className="space-y-2 text-sm sm:text-base text-ink/80">
                  {region.marketFocus.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-ink/10 bg-cream px-3 py-3 sm:px-4 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "Why TwoApps",
              summary: "Positioning and differentiation",
              content: (
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-ink/80">
                  {region.whyTwoApps.map((item) => (
                    <li key={item} className="flex gap-2 sm:gap-3 leading-relaxed">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
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
                <div className="space-y-4 text-sm sm:text-base text-ink/80">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                    {region.engagementModel.map((step) => (
                      <div
                        key={step}
                        className="rounded-xl border border-ink/10 bg-cream px-3 py-3 sm:px-4 leading-relaxed"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                  {!isGcc ? (
                    <p className="leading-relaxed text-ink/70">
                      A fit for agencies in the Middle East, Eastern Europe, LATAM, Australia, and New Zealand that need
                      AI capacity without new hires.
                    </p>
                  ) : null}
                </div>
              )
            }
          ]}
        />
      </div>

      <div data-bot-stop data-bot-fx="0.65" data-bot-say="Common questions about delivery in this region." data-bot-icons="chat,check">
        <FaqSection items={region.faq} />
      </div>

      <div data-bot-stop data-bot-fx="0.5" data-bot-say="Book a call to discuss delivery in your region." data-bot-icons="calendar,chat">
        <CtaBand
          title={isGcc ? "Ready to fix a workflow in Dubai or the GCC?" : "Want a white-label AI partner?"}
          copy={
            isGcc
              ? "Start with one pilot. Measure the gain. Then scale."
              : "Start with one client pilot or a capability sprint. Build from there."
          }
          primaryHref="/contact"
          primaryLabel="Book a call"
        />
      </div>
    </>
  );
}
