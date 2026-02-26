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
    "Agentic AI automation, Claude/Claude Code workflow implementation, AI-enabled product engineering, and white-label AI delivery for software houses.",
  canonicalPath: "/services",
  keywords: ["agentic ai services", "claude code automation consulting", "white label ai delivery"],
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
        title="One capability at a time, built to ship"
        description="Scroll the service stack for the headline view. Open detail panels below when you want the full scope."
        chips={["Dubai-based", "Business + Agency", "Claude-native execution"]}
      />

      <StickyScene
        eyebrow="Service Stack"
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
        eyebrow="All Services"
        title="Expand a service for benefits, deliverables, and starting points"
        subtitle="Each panel stays concise at first view and opens into the implementation detail."
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
                Open service page <span aria-hidden>↗</span>
              </Link>
            </div>
          )
        }))}
      />

      <DetailPanelsSection
        eyebrow="Offers"
        title="Productized ways to start"
        subtitle="Start with a bounded pilot or setup rather than a long discovery-heavy engagement."
        className="pt-0"
        items={[
          {
            title: "Starting offers",
            summary: "Fast entry points for direct businesses and agency partners",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {[
                  "AI Automation Audit (1-2 weeks)",
                  "30-Day Agentic Pilot (one workflow end-to-end)",
                  "Claude Code Team Acceleration Setup",
                  "White-Label AI Capability Sprint for agencies"
                ].map((offer) => (
                  <li key={offer} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    {offer}
                  </li>
                ))}
              </ul>
            )
          },
          {
            title: "Outcomes we optimize for",
            summary: "What successful projects typically improve first",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {[
                  "Reduced manual ops time",
                  "Faster turnaround and response times",
                  "Lower execution inconsistency across recurring work",
                  "Faster AI project delivery without in-house AI hiring delays"
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            )
          }
        ]}
      />

      <CtaBand
        title="Need help picking the right starting service?"
        copy="Start with the highest-friction workflow or the next AI project your team is expected to deliver. We can scope the right pilot."
        primaryHref="/contact"
        primaryLabel="Discuss scope"
      />
    </>
  );
}
