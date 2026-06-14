import type { Metadata } from "next";

import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { sgConfig } from "@/components/microsites/sg-config";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import type { FaqItem } from "@/content/types";

const pageSeo = buildMetadata({
  title: "AI Workflow Automation Singapore | MAS & PDPA Compliant | TwoApps",
  description:
    "Help Singapore teams automate manual work, stay MAS/PDPA compliant, and scale without adding headcount. Book a 30-minute workflow audit with TwoApps.",
  canonicalPath: "/sg",
  keywords: [
    "AI automation Singapore",
    "workflow automation SG",
    "MAS compliance automation",
    "PDPA compliant AI",
    "Singapore business automation",
    "AI workflow automation Singapore",
  ],
  ogImage: "/og-default.svg",
});

export const metadata: Metadata = {
  ...pageSeo,
  alternates: {
    ...(pageSeo.alternates as { canonical: string }),
    languages: {
      "en-sg": "/sg",
      "en-au": "/au",
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
    { name: "Singapore", path: "/sg" },
  ]),
  serviceSchema({
    name: "TwoApps Singapore",
    description:
      "AI workflow automation for Singapore businesses, designed around MAS and PDPA compliance requirements.",
    path: "/sg",
    serviceType: "AI Workflow Automation",
    areaServed: ["Singapore"],
  }),
];

const opportunityCards = [
  {
    step: "01 / The opportunity",
    title: "Singapore is your APAC springboard",
    body: "A stable regulatory environment, world-class infrastructure, and access to ASEAN, Australia, and the Gulf make it one of the best places to land and expand.",
  },
  {
    step: "02 / The trust factor",
    title: "A high-trust jurisdiction",
    body: "Strong rule of law, IP protection, and clear financial regulations mean customers, partners, and auditors take a Singapore presence seriously.",
  },
  {
    step: "03 / The reality",
    title: "Top talent is already stretched",
    body: "The city attracts great operators, but demand outstrips supply. Smart automation lets you keep the team you have and do more with them.",
  },
];

const pressureCards = [
  {
    label: "Pressure 01",
    title: "Labour costs that eat margin",
    body: "Singapore wages are among the highest in the region. Every hour spent on admin, data entry, or follow-up is an expensive hour that could be automated.",
  },
  {
    label: "Pressure 02",
    title: "Compliance that never sleeps",
    body: "MAS, PDPA, and AML/KYC expectations are high. One missed audit trail or data-handling gap can turn into real financial and reputational risk.",
  },
  {
    label: "Pressure 03",
    title: "Talent you can't hire fast enough",
    body: "The best people are already booked. Automation lets your existing team handle more volume without working longer hours or burning out.",
  },
];

const solutionCards = [
  {
    step: "Step 01",
    title: "Free workflow audit",
    body: "In 30 minutes we map the processes costing you the most — and identify the quickest compliance-safe wins.",
  },
  {
    step: "Step 02",
    title: "Compliance-built pilot",
    body: "We design your pilot with MAS/PDPA-aware data handling, audit trails, and role-based access from day one.",
  },
  {
    step: "Step 03",
    title: "Deploy and tune with your team",
    body: "Go live in 3–5 weeks, train your people, and keep improving the workflow based on real usage and feedback.",
  },
];

const testimonialCards = [
  {
    quote:
      "MAS sign-off was our biggest worry. TwoApps shipped automation with audit trails baked in — our compliance team approved it unchanged.",
    name: "Sarah Tan",
    title: "Operations Director, FinServe Pte Ltd",
    stat: "MAS-ready delivery",
  },
  {
    quote:
      "We couldn't hire fast enough. TwoApps automated onboarding and support. Same team, 3× the volume.",
    name: "Michael Lim",
    title: "CTO, LogiTech Solutions",
    stat: "3× throughput",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Do you support MAS and PDPA requirements?",
    answer:
      "Yes. We design workflows with audit trails, access controls, data minimization, and retention policies that align with Singapore regulatory expectations.",
  },
  {
    question: "How long does a typical pilot take?",
    answer:
      "Most pilots go live in 3–5 weeks, depending on the number of systems involved and the complexity of internal approvals.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. We build automations that handle repetitive work so your team can focus on higher-value tasks like relationships, strategy, and exception handling.",
  },
  {
    question: "What systems do you integrate with?",
    answer:
      "We connect with CRMs, accounting tools, HR platforms, compliance databases, and custom internal systems via APIs and secure middleware.",
  },
  {
    question: "Do you work with agencies or white-label partners?",
    answer:
      "Yes. We partner with agencies and software houses that need a reliable, compliance-aware AI implementation layer behind the scenes.",
  },
];

function NumberBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-cream font-display text-sm font-semibold text-blue">
      {children}
    </span>
  );
}

export default function SingaporePage() {
  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-say="Same AI sales rep, dialed in for your local market." data-bot-short="Tuned for your market"
        data-bot-fx="0.15"
      >
        <PageHero
          eyebrow="Singapore & APAC"
          title="Run a leaner Singapore operation — without sacrificing compliance or speed"
          description="Singapore is the gateway to Asia, but rising wages, strict MAS/PDPA rules, and a tight talent market make scaling expensive. We build AI workflows that automate the repetitive work, keep auditors happy, and free your local team to focus on growth."
          chips={sgConfig.hero.trustMarks}
          mobileChips={sgConfig.hero.mobileTrustMarks}
        />
      </div>

      <div
        data-bot-stop="opportunity"
        data-bot-say="Three reasons Singapore is worth the effort — and why operating costs can make or break the move." data-bot-short="Why Singapore is worth it"
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="Why Singapore matters"
            title="The best launchpad in Asia — if you can keep costs under control"
            subtitle="A clear regulatory environment and world-class infrastructure attract ambitious teams. The challenge is scaling without letting headcount costs spiral."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {opportunityCards.map((card) => (
              <Card key={card.title} className="h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">
                  {card.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
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
        data-bot-stop="pressures"
        data-bot-say="Tired of leads slipping through timezone cracks?" data-bot-short="No more timezone leaks"
        data-bot-fx="0.85"
      >
        <Section>
          <Heading
            eyebrow="Local challenges"
            title="The three pressures every Singapore team feels"
            subtitle="Growth here isn't limited by ambition. It's limited by cost, compliance, and capacity."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {pressureCards.map((card, index) => (
              <Card key={card.title} className="h-full">
                <div className="flex items-center gap-3">
                  <NumberBadge>{index + 1}</NumberBadge>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                    {card.label}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
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
        data-bot-stop="solution"
        data-bot-say="Books, qualifies, and follows up — before your coffee gets cold." data-bot-short="Books and qualifies leads"
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="How TwoApps helps"
            title="A compliance-first path from manual work to working AI"
            subtitle="We don't drop a black-box demo on your desk. We scope, build, and ship workflows your compliance team can actually sign off on."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <Card key={card.title} className="h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">
                  {card.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {card.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            <Button href="/book">Book a free workflow audit</Button>
            <Button href="#details" variant="secondary">
              See how it works
            </Button>
          </div>
        </Section>
      </div>

      <div
        id="details"
        data-bot-stop="details"
        data-bot-say="Works in your language, your currency, your CRM." data-bot-short="Your language, currency, CRM"
        data-bot-fx="0.3"
      >
        <DetailPanelsSection
          eyebrow="The details"
          title="What you get when you work with TwoApps in Singapore"
          subtitle="Expand any section for compliance approach, common automations, and how we deliver."
          items={[
            {
              title: "Compliance & data handling",
              summary: "Built with MAS and PDPA in mind from day one",
              content: (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Full workflow audit trails",
                    "Data minimization by design",
                    "Encrypted storage and transmission",
                    "Role-based access controls",
                    "Clear retention and deletion policies",
                    "No hidden offshore handoffs",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-white p-4 text-sm text-ink/78"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Common Singapore automations",
              summary: "Workflows we regularly build for local teams",
              content: (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Customer onboarding",
                    "KYC / AML checks",
                    "Invoice processing",
                    "Bank reconciliation",
                    "Lead qualification",
                    "Internal reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[22px] border border-ink/10 bg-white px-4 py-3 text-sm text-ink/78"
                    >
                      <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Delivery model",
              summary: "How we scope, build, and hand over",
              content: (
                <div className="space-y-5 text-sm text-ink/78 sm:text-[15px]">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Free 30-minute workflow audit",
                      "Fixed-scope pilot with clear success metrics",
                      "Weekly demos and open Slack access",
                      "Documentation and team training",
                      "30-day post-launch support",
                      "Optional ongoing tuning and expansion",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href="/book" className="w-full sm:w-auto">
                      Book a call
                    </Button>
                    <Button
                      href="/services"
                      variant="secondary"
                      className="w-full sm:w-auto"
                    >
                      Explore services
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div
        data-bot-stop="social"
        data-bot-say="Local teams are already hitting quota by Thursday." data-bot-short="Quota by Thursday"
        data-bot-fx="0.25"
      >
        <Section>
          <Heading
            eyebrow="Proof points"
            title="What Singapore teams say"
            subtitle="Real outcomes from businesses facing the same compliance, cost, and talent pressures you are."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
            {testimonialCards.map((t) => (
              <Card key={t.name} className="h-full">
                <blockquote className="text-base leading-relaxed text-ink/80 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink/60">{t.title}</p>
                    <div className="mt-2">
                      <Tag className="text-[10px]">{t.stat}</Tag>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="faq"
        data-bot-say="No hidden fees. No offshore handoffs. Just results." data-bot-short="No fees, just results"
        data-bot-fx="0.6"
      >
        <FaqSection
          eyebrow="FAQ"
          title="Questions Singapore teams ask"
          items={faqItems}
        />
      </div>

      <div
        data-bot-stop="cta"
        data-bot-say="Ready to see it sell in your market?" data-bot-short="See it sell"
        data-bot-fx="0.8"
      >
        <CtaBand
          title="Ready to see where automation pays off first?"
          copy="Book a 30-minute workflow audit. We'll map your highest-cost manual processes and show you a compliance-first pilot plan."
          primaryHref="/book"
          primaryLabel="Book a call"
          secondaryHref="/contact"
          secondaryLabel="Contact us"
        />
      </div>
    </>
  );
}
