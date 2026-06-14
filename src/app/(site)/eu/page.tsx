import type { Metadata } from "next";

import { euConfig } from "@/components/microsites/eu-config";
import type {
  RegionalConfig,
  RegionalProcessStep,
} from "@/components/microsites/types";

import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
} from "@/lib/seo";
import { getContactPhone, getSiteUrl } from "@/lib/site-config";

const baseMetadata = buildMetadata({
  title: euConfig.meta.title,
  description: euConfig.meta.description,
  canonicalPath: euConfig.meta.canonicalPath || "/eu",
  keywords: euConfig.meta.keywords,
  ogImage: euConfig.meta.ogImage,
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: euConfig.meta.title },
  alternates: {
    ...baseMetadata.alternates,
    languages: {
      "en-eu": "/eu",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-nz": "/nz",
      "en-ae": "/ae",
      "x-default": "/",
    },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  shieldCheck: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 4 4-4" />
    </svg>
  ),
  shield: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  globe: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  rocket: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c-2.72.97-5.61 1.65-8.05 3.05A12.88 12.88 0 0 0 9 12l3 3z" />
      <path d="M9 12H4s.55 3.03 2 4c1.62 1.08 5 2 5 2" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 2-5 2-5" />
    </svg>
  ),
  building: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
  building2: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  ),
};

function getIcon(name: string): React.ReactNode {
  return iconMap[name] || null;
}

function EuHero({ hero }: { hero: RegionalConfig["hero"] }) {
  return (
    <section className="relative pt-8 sm:pt-10 lg:pt-12">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] border border-ink/10 bg-white px-4 py-8 shadow-[0_18px_70px_rgba(22,21,15,0.08)] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <div className="relative max-w-4xl">
            <Tag className="mb-5">{hero.eyebrow}</Tag>
            <h1 className="text-balance font-display text-3xl font-semibold leading-[0.95] text-ink sm:text-4xl md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg md:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/book" size="lg" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <Button
                href="#how-it-works"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">
              {hero.trustBar}
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.trustMarks?.map((mark, i) => (
                <span
                  key={i}
                  className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1.5 text-xs text-ink/70"
                >
                  {mark}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: RegionalProcessStep;
  index: number;
}) {
  return (
    <Card className="h-full text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-cream text-lg font-bold text-blue">
        {index + 1}
      </div>
      <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        {step.subtitle}
      </p>
      <p className="mt-4 text-xs font-medium text-blue">{step.duration}</p>
    </Card>
  );
}

const valueCards = [
  {
    icon: "shieldCheck",
    title: "Compliance is a competitive advantage",
    body: "In Europe, trust is currency. Buyers, partners, and regulators all reward teams that can prove privacy-by-design from the start.",
  },
  {
    icon: "globe",
    title: "Data residency builds trust",
    body: "Keeping data inside the EU isn&apos;t just legal hygiene — it&apos;s a signal to customers that you take sovereignty seriously.",
  },
  {
    icon: "rocket",
    title: "Speed without shortcuts",
    body: "We ship fast, but we don&apos;t skip the documentation, deletion flows, and audit trails that make automation enterprise-ready.",
  },
];

const howWeHelpItems = [
  {
    title: "Privacy by design, not by patch",
    summary: "GDPR is treated as a product requirement from the first wireframe.",
    content: (
      <div className="space-y-3 text-sm text-ink/78 sm:text-[15px]">
        <p>
          We map lawful basis, data minimization, retention, and deletion before
          we write the first automation rule. The result is a workflow your legal
          team can defend without rewrites.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "Lawful basis and consent tracking",
            "Right-to-deletion built in",
            "Audit trails by default",
            "DPIA and ROPA support on request",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "EU-resident architecture",
    summary: "Data stays where your regulators and customers expect it.",
    content: (
      <div className="space-y-3 text-sm text-ink/78 sm:text-[15px]">
        <p>
          EU cloud regions are our default. We can also deploy on-premise or inside
          your existing tenant, with clear data-processing agreements that give you
          control.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "EU-hosted infrastructure by default",
            "On-premise deployment options",
            "Clear data processing agreements",
            "Cross-border transfer safeguards",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Legacy-friendly integration",
    summary: "We connect to what you already run.",
    content: (
      <div className="space-y-3 text-sm text-ink/78 sm:text-[15px]">
        <p>
          APIs, RPA, middleware, and custom connectors — we integrate with your ERP,
          CRM, and databases so your team doesn&apos;t have to learn a new stack.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "API and webhook integrations",
            "RPA for systems without APIs",
            "Middleware and ETL pipelines",
            "No rip-and-replace required",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "DPO-ready handover",
    summary: "Documentation that satisfies auditors, not just engineers.",
    content: (
      <div className="space-y-3 text-sm text-ink/78 sm:text-[15px]">
        <p>
          When we ship, you get runbooks, architecture diagrams, processing records,
          and monitoring dashboards. Your DPO sees a complete picture, not a README.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "Runbooks and architecture docs",
            "Processing activity records",
            "Monitoring and alerting",
            "Team training and escalation path",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function EuropePage() {
  const siteUrl = getSiteUrl();

  const jsonLdData = [
    organizationSchema(),
    makeBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "TwoApps Europe", path: "/eu" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: euConfig.schema.name,
      description: euConfig.schema.description,
      url: `${siteUrl}/eu`,
      telephone: getContactPhone() || "+971-55-672-7803",
      email: "team@twoapps.com",
      areaServed: euConfig.schema.areaServed,
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-say="Same AI sales rep, dialed in for the European market."
        data-bot-icons="shield,globe"
        data-bot-fx="0.12"
      >
        <EuHero hero={euConfig.hero} />
      </div>

      <div
        data-bot-stop
        data-bot-say="Europe rewards teams that treat compliance as a feature, not a blocker."
        data-bot-icons="shield,check"
        data-bot-fx="0.5"
      >
        <Section>
          <Heading
            eyebrow="Why Europe matters"
            title="One market, many rules — and zero patience for sloppy data handling"
            subtitle="European buyers expect privacy-by-design. We built this page for teams who need automation that passes legal review without slowing down delivery."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {valueCards.map((card) => (
              <Card key={card.title} className="h-full">
                <div className="mb-4 text-blue">{getIcon(card.icon)}</div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {card.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="GDPR, data residency, and legacy systems are the three headaches we solve first."
        data-bot-icons="shield,building"
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/40">
          <Heading
            eyebrow="The challenge"
            title={euConfig.painPoints?.title || "The European challenge"}
            subtitle="These are the real constraints European teams face — and the ones we design around from the first call."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {euConfig.painPoints?.items.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="mb-4 text-blue">{getIcon(item.icon)}</div>
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
        data-bot-stop
        data-bot-say="Four principles guide every workflow we build for Europe."
        data-bot-icons="shield,globe,check"
        data-bot-fx="0.5"
      >
        <DetailPanelsSection
          eyebrow="How we help"
          title="Automation built around European rules"
          subtitle="Expand each panel to see how we turn compliance from a blocker into a shipping advantage."
          items={howWeHelpItems}
        />
      </div>

      <div
        id="how-it-works"
        data-bot-stop
        data-bot-say="Audit, build, deploy — with DPO-ready docs at every step."
        data-bot-icons="calendar,chat,check"
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/40">
          <Heading
            eyebrow="The process"
            title={euConfig.howItWorksTitle || "How we work"}
            subtitle="A simple, compliance-first path from first conversation to production AI workflows."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {euConfig.howItWorks?.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="European teams are already shipping compliant automation with TwoApps."
        data-bot-icons="chart,check"
        data-bot-fx="0.5"
      >
        <Section>
          <Heading
            eyebrow="Proof"
            title={euConfig.testimonialsTitle || "What European teams say"}
            subtitle="Real outcomes from teams who needed compliance and speed at the same time."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
            {euConfig.testimonials?.items.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <blockquote className="mb-6 text-base leading-relaxed text-ink/80 sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-ink/60">{testimonial.title}</p>
                    <p className="mt-1 text-xs text-blue">{testimonial.stat}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="No hidden fees. No offshore handoffs. Just clear answers."
        data-bot-icons="shield,check"
        data-bot-fx="0.5"
      >
        {euConfig.faq && (
          <FaqSection
            eyebrow="FAQ"
            title={euConfig.faq.title}
            items={euConfig.faq.items}
          />
        )}
      </div>

      <div
        data-bot-stop
        data-bot-say="Ready to see it work inside your compliance rules?"
        data-bot-icons="person,arrowR"
        data-bot-fx="0.35"
      >
        <CtaBand
          title={euConfig.finalCta.headline}
          copy={euConfig.finalCta.subheadline}
          primaryHref="/book"
          primaryLabel={euConfig.finalCta.cta}
          secondaryHref="/contact"
          secondaryLabel="Contact us"
        />
      </div>
    </>
  );
}
