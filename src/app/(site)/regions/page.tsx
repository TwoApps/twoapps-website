import Link from "next/link";

import { globalPartnerRegions, regions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";

export const metadata = buildMetadata({
  title: "Regions",
  description:
    "Regional focus pages for Two Apps: Dubai/UAE/GCC direct automation delivery and global white-label AI partnerships for software houses and agencies.",
  canonicalPath: "/regions",
  keywords: ["dubai ai automation partner", "white label ai partner global agencies"],
  ogImage: "/og-default.svg"
});

const regionFrames: StickySceneFrame[] = [
  {
    label: "Direct",
    headline: "Dubai / UAE / GCC for direct automation projects",
    subline: "Founder-led teams and ops-heavy businesses that need practical AI implementation, not demos."
  },
  {
    label: "Partner",
    headline: "Global white-label delivery for software houses",
    subline: "A strong fit for agencies in Eastern Europe, South America, Australia, and New Zealand."
  }
];

export default function RegionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Regions"
        title="Two regional tracks, one delivery model"
        description="Direct business automation in UAE/GCC and white-label AI delivery for agencies globally."
        chips={["Dubai, UAE, GCC", ...globalPartnerRegions]}
      />

      <StickyScene
        eyebrow="Coverage"
        frames={regionFrames}
        heightMultiplier={2.4}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "UAE / GCC Direct Delivery",
                body: "Automation audits, pilots, and internal AI tooling for businesses with operational bottlenecks and execution pressure.",
                meta: ["Dubai", "UAE", "GCC"]
              },
              {
                title: "Global Agency Partnerships",
                body: "White-label implementation support for software houses adding AI automation and AI-enabled product work.",
                meta: [...globalPartnerRegions]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Region Pages"
        title="Open a region page by delivery track"
        subtitle="Each region page keeps the cinematic intro and moves the deeper positioning into expandable sections."
        items={regions.map((region) => ({
          title: region.title,
          summary: region.summary,
          content: (
            <div className="space-y-4 text-sm text-ink/78">
              <ul className="space-y-2">
                {region.marketFocus.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/regions/${region.slug}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-3 py-1.5 text-sm text-accent-1 hover:bg-accent-1/[0.08]"
              >
                Open region page <span aria-hidden>↗</span>
              </Link>
            </div>
          )
        }))}
      />

      <CtaBand
        title="Need direct delivery in UAE/GCC or a white-label AI partner for your agency?"
        copy="Two Apps supports both paths with one delivery model: practical pilots, production hardening, and ongoing iteration."
        primaryHref="/contact"
        primaryLabel="Discuss your case"
      />
    </>
  );
}
