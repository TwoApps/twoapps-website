import { notFound } from "next/navigation";

import { getRegionBySlug, regions } from "@/content";
import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";
import { SEO_PARTNER_FOCUS_REGIONS } from "@/lib/brand";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { Heading } from "@/components/ui/heading";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui/section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";

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

function regionHeroCopy(slug: string) {
  if (slug === "dubai-uae-gcc-ai-automation") {
    return {
      description:
        "Cut manual work and ship real AI workflows with a UAE-based team that can deliver on the ground in Dubai and across the GCC.",
      chips: ["Dubai on-site", "UAE/GCC delivery", "Direct implementation"],
      mobileChips: ["Dubai-based on-site delivery", "UAE and GCC delivery", "Direct implementation support"],
    };
  }
  return {
    description:
      "Add AI delivery capacity behind your agency brand — without the hiring delay — across the Middle East, Eastern Europe, LATAM, Australia, and New Zealand.",
    chips: ["White-label", "Global agencies", "Fast AI capacity"],
    mobileChips: ["White-label partner delivery", "Works with global agencies", "Fast AI capacity boost"],
  };
}

function regionSummaryCopy(slug: string) {
  if (slug === "dubai-uae-gcc-ai-automation") {
    return {
      eyebrow: "At a glance",
      title: "Local execution for UAE and GCC teams",
      subtitle:
        "We work where you operate: remote-first, with on-site availability in Dubai when workshops, discovery, or stakeholder alignment need a face in the room.",
    };
  }
  return {
    eyebrow: "At a glance",
    title: "White-label AI capacity for software houses",
    subtitle:
      "Sell AI projects with confidence. We deliver the implementation layer while you keep the client relationship and the brand.",
  };
}

export default async function RegionDetailPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    notFound();
  }

  const isGcc = region.slug === "dubai-uae-gcc-ai-automation";
  const hero = regionHeroCopy(region.slug);
  const summary = regionSummaryCopy(region.slug);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Regions", path: "/regions" },
    { name: region.title, path: `/regions/${region.slug}` },
  ];

  const summaryCards = [
    {
      label: "Who it's for",
      title: isGcc ? "GCC teams with real operational load" : "Agencies ready to offer AI",
      body: region.marketFocus[0] ?? "Target buyers and teams",
      tags: region.marketFocus.slice(1, 3),
    },
    {
      label: "Why TwoApps",
      title: isGcc ? "UAE-based, globally experienced" : "Senior delivery, partner-friendly",
      body: region.whyTwoApps[0] ?? "Regional execution fit and differentiators",
      tags: region.whyTwoApps.slice(1, 3),
    },
    {
      label: "How it starts",
      title: isGcc ? "Pilot one workflow, then scale" : "One pilot, then ongoing capacity",
      body: region.engagementModel[0] ?? "Pilot-first implementation path",
      tags: region.engagementModel.slice(1, 3),
    },
  ];

  const detailItems = [
    {
      title: "The teams we help here",
      summary: isGcc
        ? "GCC operators, founders, and process owners"
        : "Software houses and digital agencies adding AI services",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-ink/80 sm:text-base">
          <p>
            {isGcc
              ? "This region page is built for teams in Dubai, the UAE, and the wider GCC that are tired of repeatable work slowing everything down."
              : "This region page is built for agencies and software houses that want to sell AI work now — without waiting months to recruit specialists."}
          </p>
          <ul className="space-y-3">
            {region.marketFocus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Why we're a fit",
      summary: isGcc
        ? "Local presence plus full-stack delivery capability"
        : "White-label execution that protects your client relationship",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-ink/80 sm:text-base">
          <p>
            {isGcc
              ? "We combine UAE-based accountability with hands-on AI workflow, product, and internal-tool delivery — so you get one team that can actually ship."
              : "We act as your behind-the-scenes AI delivery team: senior execution, clear handoffs, and a collaboration model that keeps your brand in front."}
          </p>
          <ul className="space-y-3">
            {region.whyTwoApps.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
              >
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "How we work together",
      summary: isGcc
        ? "Audit, pilot, rollout — with on-site options in Dubai"
        : "Sprint, pilot, then flexible delivery capacity",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-ink/80 sm:text-base">
          <p>
            {isGcc
              ? "Every engagement starts with a bounded pilot so you can measure value before scaling. We keep humans in control and build around your existing tools."
              : "We agree the white-label rules up front, run one real client pilot, then move into a repeatable delivery cadence that matches your backlog."}
          </p>
          <ol className="space-y-3">
            {region.engagementModel.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
              >
                <span className="mr-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/10 text-xs font-medium text-ink/80">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
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
            name: region.title,
            description: region.summary,
            path: `/regions/${region.slug}`,
            serviceType: "Regional AI automation and implementation partner",
            areaServed: isGcc
              ? ["Dubai", "UAE", "GCC", "Middle East"]
              : [...SEO_PARTNER_FOCUS_REGIONS],
          }),
        ]}
      />
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.12"
        data-bot-say="Local compliance, global execution — here's what we do in your market." data-bot-short="Local compliance, global execution"
      >
        <PageHero
          eyebrow="Region"
          title={region.title}
          description={hero.description}
          chips={hero.chips}
          mobileChips={hero.mobileChips}
        />
      </div>

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <div
        data-bot-stop
        data-bot-fx="0.88"
        data-bot-say="Market focus, positioning, and how we engage." data-bot-short="Focus, positioning, engagement"
      >
        <Section>
          <Heading
            eyebrow={summary.eyebrow}
            title={summary.title}
            subtitle={summary.subtitle}
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <Card
                key={card.title}
                className="flex h-full flex-col p-6 sm:p-7 md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  {card.label}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-xl lg:text-2xl">
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
        data-bot-fx="0.3"
        data-bot-say="Open a panel for the full regional playbook." data-bot-short="Open the regional playbook"
      >
        <DetailPanelsSection
          eyebrow="Region Detail"
          title="A clear path from first call to live workflow"
          subtitle="Open a panel to see who we help, why we're a fit, and how engagements run in this region."
          items={detailItems}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.65"
        data-bot-say="Common questions about delivery in this region." data-bot-short="Regional delivery questions"
      >
        <FaqSection
          items={region.faq}
          eyebrow="FAQ"
          title="Questions about delivery in this region"
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Book a call to discuss delivery in your region." data-bot-short="Book a regional call"
      >
        <CtaBand
          title={
            isGcc
              ? "Ready to fix a workflow in Dubai or the GCC?"
              : "Want a white-label AI partner behind your agency?"
          }
          copy={
            isGcc
              ? "Tell us which process is slowing you down. We'll map a bounded pilot and show you the fastest path to a measurable result."
              : "Tell us about the AI scope your team is quoting. We'll help you scope, price, and deliver it — while your client sees only your brand."
          }
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/book"
          secondaryLabel="Pick a time"
        />
      </div>
    </>
  );
}
