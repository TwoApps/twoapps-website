import Link from "next/link";

import { globalPartnerRegions, regions } from "@/content";
import type { RegionPage } from "@/content/types";
import {
  buildMetadata,
  collectionPageSchema,
  makeBreadcrumbSchema,
  organizationSchema
} from "@/lib/seo";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/common/cta-band";
import { Heading } from "@/components/ui/heading";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/ui/section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";

export const metadata = buildMetadata({
  title: "Where We Deliver AI Automation",
  description:
    "TwoApps operates from the UAE with direct delivery across the GCC and white-label AI partnerships for software houses in Europe, LATAM, Australia, New Zealand, and beyond.",
  canonicalPath: "/regions",
  keywords: [
    "dubai ai automation partner",
    "uae ai automation company",
    "white label ai partner global agencies",
    "gcc ai workflow automation"
  ],
  ogImage: "/og-default.svg"
});

const jsonLdData = [
  organizationSchema(),
  makeBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Regions", path: "/regions" }
  ]),
  collectionPageSchema({
    name: "Regions Served by TwoApps",
    description:
      "Explore TwoApps regional delivery tracks: direct AI automation delivery in Dubai, UAE, and the GCC, plus white-label AI partnerships for software houses globally.",
    path: "/regions",
    items: regions.map((region) => ({
      name: region.title,
      path: `/regions/${region.slug}`,
      description: region.summary
    }))
  })
];

const deliveryTracks = [
  {
    slug: "dubai-uae-gcc-ai-automation",
    title: "UAE / GCC — Direct Delivery",
    body:
      "Hands-on automation audits, pilots, and internal AI tools for businesses operating in Dubai and across the GCC. We work locally, understand the market context, and ship fast.",
    meta: ["Dubai", "UAE", "GCC"]
  },
  {
    slug: "white-label-ai-partner-software-houses",
    title: "Global — White-Label Partnerships",
    body:
      "Behind-the-scenes AI implementation for software houses and agencies that want to offer AI workflows, features, and internal tools without building a full AI practice first.",
    meta: [...globalPartnerRegions]
  }
];

const localContextCards = [
  {
    title: "Time zones that actually overlap",
    body:
      "Being UAE-based means real-time collaboration with GCC teams and useful overlap with Europe, parts of South America, and Australia/New Zealand.",
    meta: ["GCC same-day", "Global overlap"]
  },
  {
    title: "Market context, not just code",
    body:
      "Regulatory norms, business culture, and operational cadence vary by region. We shape the workflow around how your team already works instead of forcing a generic playbook.",
    meta: ["Compliance-aware", "Local workflows"]
  },
  {
    title: "One delivery model, two entry points",
    body:
      "Whether you need a direct partner on the ground or white-label capacity behind your agency, the same pilot-first process applies: audit, build, stabilize, scale.",
    meta: ["Pilot-first", "Scalable"]
  }
];

function RegionDetailPanel({ region }: { region: RegionPage }) {
  return (
    <div className="space-y-6 text-sm text-ink/78 sm:text-[15px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
            Who this is for
          </p>
          <ul className="mt-3 space-y-2">
            {region.marketFocus.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
            How we engage
          </p>
          <ul className="mt-3 space-y-2">
            {region.engagementModel.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          Why teams choose TwoApps here
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {region.whyTwoApps.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        href={`/regions/${region.slug}`}
        variant="secondary"
        className="w-full sm:w-auto"
      >
        See the full {region.title} page <span aria-hidden>↗</span>
      </Button>
    </div>
  );
}

export default function RegionsPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.12"
        data-bot-say="Find your region and the delivery track that fits you." data-bot-short="Find your region"
      >
        <PageHero
          eyebrow="Regions"
          title="AI automation built for where you operate"
          description="We deliver directly across the UAE and GCC, and partner white-label with software houses around the world. Same team, same process, shaped to your region."
          chips={["Dubai / UAE / GCC", "White-label global", "Pilot-first"]}
          mobileChips={["Covers Dubai, UAE, GCC", "White-label delivery worldwide", "Pilot-first rollout model"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.88"
        data-bot-say="Two tracks: direct delivery where we are local, white-label capacity everywhere else." data-bot-short="Two delivery tracks"
      >
        <Section>
          <Heading
            eyebrow="Delivery tracks"
            title="Where we work, and how we show up"
            subtitle="Pick the track that matches your location and model. Both start with a focused pilot and scale from there."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:mt-16 lg:grid-cols-2">
            {deliveryTracks.map((track) => (
              <Link
                key={track.slug}
                href={`/regions/${track.slug}`}
                className="focus-ring group flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10"
              >
                <h3 className="font-display text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[27px]">
                  {track.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                  {track.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {track.meta.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-1">
                  Explore this track
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Local context shapes better AI workflows." data-bot-short="Local context, better workflows"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="Why location matters"
            title="Local context makes AI workflows actually stick"
            subtitle="AI that ignores how a team works fails in practice. We design around your region's pace, compliance expectations, and communication habits."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">
            {localContextCards.map((card) => (
              <Card key={card.title} className="h-full">
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
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
        data-bot-fx="0.25"
        data-bot-say="Open a panel to see market fit, engagement model, and what a pilot looks like in your region." data-bot-short="Market fit and pilots"
      >
        <DetailPanelsSection
          eyebrow="Region details"
          title="What each region gets"
          subtitle="Open a panel to see who each track is built for, how we engage, and why teams in that region choose TwoApps."
          items={regions.map((region) => ({
            title: region.title,
            summary: region.summary,
            content: <RegionDetailPanel region={region} />
          }))}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Not sure which track fits? Tell us where you are and what you're shipping." data-bot-short="Not sure? Tell us"
      >
        <CtaBand
          title="Not sure which track fits your team?"
          copy="Tell us where you operate and what you're trying to ship. We'll point you to the right delivery model — direct or white-label — and map the first pilot."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/services"
          secondaryLabel="See our services"
        />
      </div>
    </>
  );
}
