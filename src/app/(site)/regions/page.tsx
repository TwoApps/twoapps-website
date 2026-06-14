import { globalPartnerRegions, regions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/common/cta-band";
import { Heading } from "@/components/ui/heading";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/ui/section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";

export const metadata = buildMetadata({
  title: "Regions",
  description:
    "Regional pages for TwoApps covering UAE/GCC direct automation delivery and global white-label AI partnerships for software houses and agencies, including Middle East target-market coverage for SEO.",
  canonicalPath: "/regions",
  keywords: ["dubai ai automation partner", "white label ai partner global agencies"],
  ogImage: "/og-default.svg"
});

const regionCards = [
  {
    title: "UAE / GCC Direct Delivery",
    body: "Automation audits, pilots, and internal AI tooling for businesses with operational bottlenecks and execution pressure.",
    meta: ["Dubai", "UAE", "GCC"]
  },
  {
    title: "Global Agency Partnerships",
    body: "White-label implementation support for software houses adding AI workflows, AI features, and internal tools for clients.",
    meta: [...globalPartnerRegions]
  }
];

export default function RegionsPage() {
  return (
    <>
      <ScrollBot />

      <div data-bot-stop data-bot-fx="0.12" data-bot-say="Find your region and the right delivery track." data-bot-icons="target,spark">
        <PageHero
          eyebrow="Regions"
          title="Two regional tracks, one delivery model"
          description="Direct delivery in UAE and the GCC, white-label AI partnership for agencies worldwide."
          chips={["Dubai / UAE / GCC", "White-label global", "Two tracks"]}
        />
      </div>

      <div data-bot-stop data-bot-fx="0.88" data-bot-say="Direct delivery in the GCC. White-label capacity everywhere else." data-bot-icons="box,target">
        <Section>
          <Heading
            eyebrow="Coverage"
            title="Regional delivery tracks"
            subtitle="A simple split: direct implementation where we operate locally, white-label capacity everywhere else."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {regionCards.map((card) => (
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

      <div data-bot-stop data-bot-fx="0.25" data-bot-say="Click a panel to see market fit and engagement." data-bot-icons="eye,arrowR">
        <DetailPanelsSection
          eyebrow="Region Pages"
          title="Pick your delivery track"
          subtitle="Open a panel to see how we work in each region."
          items={regions.map((region) => ({
            title: region.title,
            summary: region.summary,
            content: (
              <div className="space-y-4 text-sm sm:text-base text-ink/80">
                <ul className="space-y-2 sm:space-y-2.5">
                  {region.marketFocus.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/regions/${region.slug}`}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Open region page <span aria-hidden>↗</span>
                </Button>
              </div>
            )
          }))}
        />
      </div>

      <div data-bot-stop data-bot-fx="0.5" data-bot-say="Book a call to confirm which track fits you." data-bot-icons="calendar,chat">
        <CtaBand
          title="Direct project or white-label partnership?"
          copy="One delivery model for both tracks: pilot, stabilize, scale."
          primaryHref="/contact"
          primaryLabel="Book a call"
        />
      </div>
    </>
  );
}
