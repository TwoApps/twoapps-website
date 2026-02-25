import Link from "next/link";

import { regions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Regions",
  description:
    "Regional focus pages for Two Apps: Dubai/UAE/GCC direct automation delivery and global white-label AI partnerships for software houses and agencies.",
  canonicalPath: "/regions",
  keywords: ["dubai ai automation partner", "white label ai partner global agencies"],
  ogImage: "/og-default.svg"
});

export default function RegionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Regions"
        title="Regional focus for direct clients and agency partnerships"
        description="Two Apps serves direct businesses in Dubai/UAE/GCC and partners with software houses globally through a white-label AI delivery model."
        chips={["Dubai, UAE, GCC", "Eastern Europe", "South America", "Australia / New Zealand"]}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {regions.map((region) => (
            <Card key={region.slug} className="p-6">
              <h2 className="text-balance font-display text-2xl font-semibold">{region.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{region.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {region.marketFocus.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/regions/${region.slug}`}
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-accent-1 hover:bg-white/5"
              >
                View region page <span aria-hidden>↗</span>
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Need direct delivery in UAE/GCC or a white-label AI partner for your agency?"
        copy="Two Apps supports both paths with one delivery model: practical pilots, production hardening, and ongoing iteration."
        primaryHref="/contact"
        primaryLabel="Discuss your case"
      />
    </>
  );
}
