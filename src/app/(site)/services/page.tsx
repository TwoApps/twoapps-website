import Link from "next/link";

import { services } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI workflow automation, Claude/Claude Code workflow setup, AI-enabled product support, and white-label AI delivery for businesses and software houses.",
  canonicalPath: "/services",
  keywords: ["ai workflow automation services", "claude code automation consulting", "white label ai delivery"],
  ogImage: "/og-default.svg"
});

const serviceFrames: StickySceneFrame[] = services.map((service) => ({
  label: service.title.split(" ").slice(0, 2).join(" "),
  headline: service.title,
  subline: service.tagline
}));

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI services that pay back in weeks, not quarters."
        description="Three offerings, one delivery model. Open any panel for scope, deliverables, and how a pilot starts."
        chips={["UAE-based", "Businesses + agencies", "Global delivery"]}
      />

      <StickyScene
        eyebrow="What we do"
        frames={serviceFrames}
        heightMultiplier={3.2}
        visual={
          <StackedVisualCards
            items={services.map((service) => ({
              title: service.title,
              body: service.summary,
              meta: [
                service.audiences.includes("business") && service.audiences.includes("agency")
                  ? "Business + Agency"
                  : "Agency",
                "Production-oriented"
              ]
            }))}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Services"
        title="Open a service for full scope"
        subtitle="Each panel opens into deliverables, process, and the typical starting point."
        items={services.map((service) => ({
          title: service.title,
          summary: service.tagline,
          content: (
            <div className="space-y-6 text-sm text-ink/78">
              <div>
                <p className="font-medium text-ink">Summary</p>
                <p className="mt-2 leading-relaxed">{service.summary}</p>
              </div>
              <div>
                <p className="font-medium text-ink">Key benefits</p>
                <ul className="mt-2 space-y-2">
                  {service.benefits.slice(0, 4).map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-ink/65"
                  >
                    {audience}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-3 py-1.5 text-sm text-accent-1 hover:bg-accent-1/[0.08]"
              >
                See full service <span aria-hidden>↗</span>
              </Link>
            </div>
          )
        }))}
      />

      <CtaBand
        title="Not sure which service fits?"
        copy="Tell us the workflow or backlog item. We'll point at the right starting move."
        primaryHref="/contact"
        primaryLabel="Talk to us"
      />
    </>
  );
}
