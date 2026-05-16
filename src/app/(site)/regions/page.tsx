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
    "Regional pages for TwoApps covering UAE/GCC direct automation delivery and global white-label AI partnerships for software houses and agencies, including Middle East target-market coverage for SEO.",
  canonicalPath: "/regions",
  keywords: ["dubai ai automation partner", "white label ai partner global agencies"],
  ogImage: "/og-default.svg"
});

const regionFrames: StickySceneFrame[] = [
  {
    label: "Direct",
    headline: "Direct delivery in UAE and GCC",
    subline: "A strong fit for teams that need practical implementation and measurable workflow improvements, not just AI demos."
  },
  {
    label: "Partner",
    headline: "Global white-label delivery for software houses",
    subline: "A strong fit for agencies in the Middle East, Eastern Europe, South America, Australia, and New Zealand."
  }
];

export default function RegionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Regions"
        title="Two regional tracks, one delivery model"
        description="Direct delivery in UAE and the GCC, white-label AI partnership for agencies worldwide."
        chips={["Dubai / UAE / GCC", "White-label global", "Two tracks"]}
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
                body: "White-label implementation support for software houses adding AI workflows, AI features, and internal tools for clients.",
                meta: [...globalPartnerRegions]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Region Pages"
        title="Pick your delivery track"
        subtitle="Open a panel to see how we work in each region."
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
        title="Direct project or white-label partnership?"
        copy="One delivery model for both tracks: pilot, stabilize, scale."
        primaryHref="/contact"
        primaryLabel="Book a call"
      />
    </>
  );
}
