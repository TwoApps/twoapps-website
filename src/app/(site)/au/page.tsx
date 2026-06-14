import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { auConfig } from "@/components/microsites/au-config";
import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";

import { RegionalIcon } from "./_components/icons";

export const metadata = {
  ...buildMetadata({
    title: auConfig.meta.title,
    description: auConfig.meta.description,
    canonicalPath: "/au",
    keywords: auConfig.meta.keywords,
    ogImage: auConfig.meta.ogImage,
  }),
  alternates: {
    canonical: "/au",
    languages: {
      "en-au": "/au",
      "en-sg": "/sg",
      "en-nz": "/nz",
      "en-ae": "/ae",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

const jsonLdData = [
  organizationSchema(),
  makeBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Australia", path: "/au" },
  ]),
  serviceSchema({
    name: auConfig.schema.name,
    description: auConfig.schema.description,
    path: "/au",
    serviceType: "AI Workflow Automation",
    areaServed: auConfig.schema.areaServed,
  }),
];

const painPoints = auConfig.painPoints ?? { title: "", items: [] };
const howItWorks = auConfig.howItWorks ?? [];
const features = auConfig.features ?? { title: "", items: [] };
const testimonials = auConfig.testimonials ?? { title: "", items: [] };
const faq = auConfig.faq ?? { title: "", items: [] };

function ProcessCard({
  step,
  index,
}: {
  step: (typeof howItWorks)[number];
  index: number;
}) {
  return (
    <Card className="relative h-full">
      <span className="font-display text-4xl font-semibold leading-none text-ink/10 sm:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-ink sm:text-[22px]">
        {step.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/58">{step.subtitle}</p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">
        {step.duration}
      </p>
    </Card>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials.items)[number];
}) {
  return (
    <Card className="h-full">
      <blockquote className="mb-6 text-base leading-relaxed text-ink/80 sm:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-ink">{testimonial.name}</p>
          <p className="text-sm text-ink/60">{testimonial.title}</p>
          <p className="mt-1 text-xs text-blue">{testimonial.stat}</p>
        </div>
      </div>
    </Card>
  );
}

export default function AustraliaPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-say="Same AI sales rep, dialed in for the Australian market." data-bot-short="Tuned for Australia"
        data-bot-fx="0.15"
      >
        <PageHero
          eyebrow={auConfig.hero.eyebrow}
          title={auConfig.hero.headline}
          description={auConfig.hero.subheadline}
          chips={auConfig.hero.trustMarks}
          mobileChips={auConfig.hero.mobileTrustMarks}
        />
      </div>

      <div
        data-bot-stop="context"
        data-bot-say="Australian teams face rising wages, compliance load, global competition, and skills pressure." data-bot-short="Costs and compliance, rising"
        data-bot-fx="0.85"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="The Australian context"
            title="Why automation matters here"
            subtitle="Australian mid-market businesses face a unique mix of rising costs, compliance pressure, and global competition. AI automation is how you keep up without blowing the budget."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {painPoints.items.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="mb-4 text-blue">
                  <RegionalIcon name={item.icon} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {item.description}
                </p>
                <p className="mt-4 text-xs font-medium text-blue">→ {item.stat}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="process"
        data-bot-say="Audit, pilot, deploy. We prove one workflow first, then scale what works." data-bot-short="Audit, pilot, deploy"
        data-bot-fx="0.5"
      >
        <Section>
          <Heading
            eyebrow="How we work"
            title="From audit to live workflow in weeks"
            subtitle="No six-month roadmap. We prove value with a bounded pilot, then scale what works."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {howItWorks.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="features"
        data-bot-say="Works in your stack, stays compliant, tracks real ROI, and ships in your timezone." data-bot-short="Your stack, compliant, on time"
        data-bot-fx="0.3"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="What you get"
            title={features.title}
            subtitle="Every workflow is built around your tools, your compliance needs, and your business hours — not ours."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {features.items.map((feature) => (
              <Card key={feature.title} className="h-full">
                <div className="mb-4 text-blue">
                  <RegionalIcon name={feature.icon} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="testimonials"
        data-bot-say="Local teams are already hitting quota by Thursday." data-bot-short="Quota by Thursday"
        data-bot-fx="0.25"
      >
        <Section>
          <Heading
            eyebrow="Proof"
            title={testimonials.title}
            subtitle="Australian teams that have already moved from manual work to measurable outcomes."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
            {testimonials.items.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="details"
        data-bot-say="Expand for details on compliance, tools, pricing, and delivery." data-bot-short="Expand for details"
        data-bot-fx="0.6"
      >
        <DetailPanelsSection
          eyebrow="Details"
          title="How we think about Australian automation"
          subtitle="Expand any section for specifics on compliance, tools, pricing, and delivery."
          items={[
            {
              title: "Compliance and audit readiness",
              summary: "Built for Australian reporting requirements from day one",
              content: (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Audit trails and change logs built into every workflow",
                    "Data handling designed for Australian privacy expectations",
                    "Integration with your existing compliance tooling",
                    "Documentation your accountants and auditors can follow",
                    "Reversible, version-controlled automation logic",
                    "Clear escalation paths for exceptions and edge cases"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-white p-4 text-sm text-ink/78"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Tools and integrations",
              summary: "Connects to the software your team already uses",
              content: (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Accounting: Xero, MYOB, QuickBooks",
                    "CRM: HubSpot, Salesforce, Pipedrive",
                    "Productivity: Microsoft 365, Google Workspace, Slack",
                    "Custom systems via REST API or webhook",
                    "Databases, data warehouses, and reporting layers",
                    "No rip-and-replace — we fit your stack"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-white p-4 text-sm text-ink/78"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Pricing and delivery",
              summary: "AUD quotes, local timezone calls, founder-led builds",
              content: (
                <div className="space-y-5 text-sm text-ink/78 sm:text-[15px]">
                  <ul className="space-y-2.5">
                    {[
                      "Quotes in Australian dollars with fixed-scope pilots",
                      "Delivery calls in Sydney/Melbourne business hours",
                      "Typical pilot: 4–6 weeks from kickoff to live workflow",
                      "Founder-led execution from scoping to handover",
                      "Ongoing support options after go-live"
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href="/book" className="w-full sm:w-auto">
                      Book a free audit
                    </Button>
                    <Button href="/pricing" variant="secondary" className="w-full sm:w-auto">
                      See pricing
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div
        data-bot-stop="faq"
        data-bot-say="No hidden fees. No offshore handoffs. Just results." data-bot-short="No fees, just results"
        data-bot-fx="0.6"
      >
        <FaqSection title={faq.title} items={faq.items} eyebrow="FAQ" />
      </div>

      <div
        data-bot-stop="cta"
        data-bot-say="Ready to see it sell in your market?" data-bot-short="See it sell"
        data-bot-fx="0.8"
      >
        <CtaBand
          title={auConfig.finalCta.headline}
          copy={auConfig.finalCta.subheadline}
          primaryHref="/book"
          primaryLabel={auConfig.finalCta.cta}
          secondaryHref="/contact"
          secondaryLabel="Contact us"
        />
      </div>
    </>
  );
}
