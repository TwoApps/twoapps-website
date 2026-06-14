import Link from "next/link";

import { services } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI workflow automation, Claude/Claude Code workflow setup, AI-enabled product support, and white-label AI delivery for businesses and software houses.",
  canonicalPath: "/services",
  keywords: [
    "ai workflow automation services",
    "claude code automation consulting",
    "white label ai delivery",
  ],
  ogImage: "/og-default.svg",
});

export default function ServicesPage() {
  return (
    <>
      <ScrollBot />
      <div
        data-bot-stop
        data-bot-say="These are the services that replace your most expensive manual workflows."
        data-bot-fx="0.12"
      >
        <PageHero
          eyebrow="Services"
          title="AI services that pay back in weeks, not quarters."
          description="Three offerings, one delivery model. Open any panel for scope, deliverables, and how a pilot starts."
          chips={["UAE-based", "Businesses + agencies", "Global delivery"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Pick a service. Every one starts with a bounded pilot, not a 6-month contract."
        data-bot-fx="0.88"
      >
        <Section>
          <Heading
            eyebrow="What we do"
            title="Three ways we plug in"
            subtitle="Trusted by operators across the UAE and GCC. We start with one workflow, prove it, then expand."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="focus-ring group flex flex-col rounded-[22px] border border-ink/10 bg-white p-8 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10"
              >
                <h3 className="font-display text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                  {service.title}
                </h3>
                <p className="mb-9 mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                  {service.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {[
                    service.audiences.includes("business") &&
                    service.audiences.includes("agency")
                      ? "Business + Agency"
                      : "Agency",
                    "Production-oriented",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/10 bg-ink/[0.03] rounded-full px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="Open any panel to see deliverables, process, and how a pilot starts."
        data-bot-fx="0.5"
      >
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
                      className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-xs uppercase tracking-[0.16em] text-ink/65"
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
            ),
          }))}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Not sure which fits? Tell us one workflow and we'll point at the right move."
        data-bot-fx="0.35"
      >
        <CtaBand
          title="Not sure which service fits?"
          copy="Tell us the workflow or backlog item. We'll point at the right starting move."
          primaryHref="/contact"
          primaryLabel="Talk to us"
        />
      </div>
    </>
  );
}
