import Link from "next/link";

import { processSteps, services } from "@/content";
import type { AudienceTrack, Service } from "@/content/types";
import {
  buildMetadata,
  collectionPageSchema,
  makeBreadcrumbSchema,
  organizationSchema,
} from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore TwoApps AI services: agentic workflow automation, Claude / Claude Code delivery, and white-label AI implementation for businesses and agencies in the UAE, GCC, and globally.",
  canonicalPath: "/services",
  keywords: [
    "ai workflow automation services",
    "claude code automation consulting",
    "white label ai delivery",
  ],
  ogImage: "/og-default.png",
});

const jsonLdData = [
  organizationSchema(),
  makeBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  collectionPageSchema({
    name: "Services",
    description:
      "Explore TwoApps AI services: agentic workflow automation, Claude / Claude Code delivery, and white-label AI implementation for businesses and agencies in the UAE, GCC, and globally.",
    path: "/services",
    items: services.map((service) => ({
      name: service.title,
      path: `/services/${service.slug}`,
      description: service.summary,
    })),
  }),
];

function audienceTag(audiences: AudienceTrack[]) {
  const hasBusiness = audiences.includes("business");
  const hasAgency = audiences.includes("agency");

  if (hasBusiness && hasAgency) return "Business & Agency";
  if (hasBusiness) return "Business";
  return "Agency";
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10"
    >
      <h3 className="font-display text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[27px]">
        {service.title}
      </h3>
      <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">
        {service.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
        <span className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55">
          {audienceTag(service.audiences)}
        </span>
        <span className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55">
          Pilot first
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-1">
        Explore this service
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </Link>
  );
}

function ProcessCard({
  title,
  copy,
  index,
}: {
  title: string;
  copy: string;
  index: number;
}) {
  return (
    <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.06)] sm:p-8">
      <span className="font-display text-4xl font-semibold leading-none text-ink/10 sm:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-ink sm:text-[22px]">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/58">{copy}</p>
    </div>
  );
}

function ServiceDetailPanel({ service }: { service: Service }) {
  return (
    <div className="space-y-7 text-sm text-ink/78">
      <div>
        <p className="font-medium text-ink">What’s included</p>
        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {service.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span className="leading-relaxed">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-medium text-ink">How it runs</p>
        <ol className="mt-2.5 space-y-2">
          {service.process.map((step) => (
            <li key={step} className="flex gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="font-medium text-ink">Best for</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {service.audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-xs uppercase tracking-[0.16em] text-ink/65"
            >
              {audience === "business" ? "Business" : "Agency"}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-3 py-1.5 text-sm text-accent-1 hover:bg-accent-1/[0.08]"
      >
        See full service <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-say="These are the services that replace your most expensive manual workflows." data-bot-short="Replace manual workflows"
        data-bot-fx="0.12"
      >
        <PageHero
          eyebrow="Services"
          title="AI services that replace your most expensive manual workflows."
          description="From agentic automation to Claude Code playbooks to white-label delivery, we help teams in the UAE and GCC ship AI that actually saves time."
          chips={["UAE-based", "Pilot-first", "Businesses + agencies"]}
          mobileChips={["UAE-based delivery team", "Pilot-first engagement model", "For businesses and agencies"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Pick a service. Every one starts with a bounded pilot, not a six-month contract." data-bot-short="Pick a service"
        data-bot-fx="0.88"
      >
        <Section>
          <Heading
            eyebrow="What we do"
            title="Three ways we make AI practical for your team"
            subtitle="Each service is designed around a real outcome: less manual work, faster delivery, or a new AI revenue line. And every engagement starts with a focused pilot."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="We don't start with a long roadmap. We prove one workflow first, then build from there." data-bot-short="One workflow first"
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="How we work"
            title="Audit. Pilot. Stabilize. Scale."
            subtitle="A simple, repeatable path from first conversation to production AI workflows."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <ProcessCard
                key={item.title}
                title={item.title}
                copy={item.copy}
                index={index}
              />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="Open any panel to see deliverables, process, and how a pilot starts." data-bot-short="Deliverables and process"
        data-bot-fx="0.5"
      >
        <DetailPanelsSection
          eyebrow="Service details"
          title="See exactly what you get"
          subtitle="Each panel breaks down deliverables, process, and who the service is built for."
          items={services.map((service) => ({
            title: service.title,
            summary: service.tagline,
            content: <ServiceDetailPanel service={service} />,
          }))}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Not sure which fits? Tell us one workflow and we'll point you at the right move." data-bot-short="Tell us one workflow"
        data-bot-fx="0.35"
      >
        <CtaBand
          title="Not sure which service fits?"
          copy="Tell us the workflow or backlog item that's slowing you down. We'll recommend the right starting move — no pitch deck required."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/book"
          secondaryLabel="Book a call"
        />
      </div>
    </>
  );
}
