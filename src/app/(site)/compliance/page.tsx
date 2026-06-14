import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { ScrollBot } from "@/components/shared/scroll-bot";

export const metadata = buildMetadata({
  title: "AI Compliance Services — Governance Audit & Compliance-as-a-Service",
  description:
    "Stay ahead of AI regulations with TwoApps compliance services. AI Governance Audit and Compliance-as-a-Service for GDPR, MAS TRM, PDPA, DIFC, and ADGM compliance.",
  canonicalPath: "/compliance",
  keywords: [
    "ai compliance",
    "ai governance audit",
    "gdpr compliance",
    "mas trm compliance",
    "pdpa compliance",
    "ai regulation",
    "compliance as a service",
    "fintech compliance"
  ],
  ogImage: "/og-default.svg"
});

const FRAMEWORKS = [
  { name: "GDPR", region: "European Union", focus: "Data protection, consent, and AI transparency" },
  { name: "MAS TRM", region: "Singapore", focus: "Technology risk management for financial services" },
  { name: "PDPA", region: "Singapore", focus: "Personal data protection and responsible use" },
  { name: "MAS FEAT", region: "Singapore", focus: "Fairness, ethics, accountability, and transparency" },
  { name: "DIFC Data Protection", region: "UAE (Dubai)", focus: "Financial services data handling" },
  { name: "ADGM Data Protection", region: "UAE (Abu Dhabi)", focus: "Financial services data handling" }
];

const COMPARISON_DATA = [
  { feature: "Full AI system audit", audit: true, caas: true, both: true },
  { feature: "Regulatory gap analysis", audit: true, caas: true, both: true },
  { feature: "Risk matrix and prioritization", audit: true, caas: true, both: true },
  { feature: "Remediation roadmap", audit: true, caas: false, both: true },
  { feature: "Monthly compliance scorecard", audit: false, caas: true, both: true },
  { feature: "Quarterly regulatory briefings", audit: false, caas: true, both: true },
  { feature: "Ad-hoc policy support", audit: false, caas: true, both: true },
  { feature: "Incident response guidance", audit: false, caas: true, both: true },
  { feature: "Regulator liaison support", audit: false, caas: true, both: true },
  { feature: "Annual certification prep", audit: false, caas: true, both: true },
  { feature: "Dedicated compliance partner", audit: false, caas: true, both: true }
];

const PAIN_POINTS = [
  {
    title: "Regulators want answers yesterday",
    body:
      "Auditors don't accept 'we'll get to it'. We help you build the paper trail before they ask."
  },
  {
    title: "Your AI roadmap moves faster than policy",
    body:
      "Models ship weekly. We keep your governance up to date without slowing the team down."
  },
  {
    title: "One slip can undo a year of trust",
    body:
      "A single data incident is expensive in more ways than fines. We help you get ahead of it."
  }
];

const FAQ_ITEMS = [
  {
    question: "Do we need to be a fintech company to use this?",
    answer:
      "Not at all. We work with any team that uses AI in a regulated or customer-facing context — fintech, SaaS, healthtech, marketplaces, and agency-built products. If you handle personal data or make decisions with AI, compliance matters."
  },
  {
    question: "How long does an AI Governance Audit take?",
    answer:
      "Most audits run three weeks from kickoff to board-ready deliverables. We keep it tight: stakeholder interviews, system review, regulatory mapping, risk scoring, and a prioritized remediation roadmap."
  },
  {
    question: "What if we are not sure which frameworks apply to us?",
    answer:
      "That is exactly what the Discovery phase is for. We map your data flows, customer base, and AI use cases to the relevant frameworks — so you do not over-engineer compliance or miss a critical gap."
  },
  {
    question: "Can you work with our existing legal or compliance team?",
    answer:
      "Yes. We are not here to replace your counsel or compliance officer. We plug in as the AI-specialist layer, translating technical systems into audit-ready evidence and actionable recommendations."
  },
  {
    question: "What happens after the audit is done?",
    answer:
      "You get a clear roadmap and can run with it internally, or transition into Compliance-as-a-Service for ongoing coverage. Many clients choose the Full Partnership so nothing falls through the cracks."
  }
];

function ServiceBody({
  description,
  deliverables,
  ctaText,
  ctaHref
}: {
  description: string;
  deliverables: string[];
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm leading-relaxed text-ink/70 sm:text-[15px]">{description}</p>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-1">
          What&apos;s included
        </p>
        <ul className="space-y-2.5">
          {deliverables.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink/75">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button href={ctaHref} className="w-full sm:w-auto">
        {ctaText}
      </Button>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 scrollbar-thin sm:mx-0 sm:px-0">
      <p className="mb-3 text-xs text-ink/50 sm:hidden">Swipe to compare options</p>
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="pb-4 pr-4 font-medium text-ink/80">Feature</th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              AI Governance Audit
              <span className="mt-1 block text-xs font-normal text-ink/50">One-time</span>
            </th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              Compliance-as-a-Service
              <span className="mt-1 block text-xs font-normal text-ink/50">Ongoing</span>
            </th>
            <th className="pb-4 text-center font-medium text-accent-1">
              Full Partnership
              <span className="mt-1 block text-xs font-normal text-accent-1/70">Audit + ongoing</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/5">
          {COMPARISON_DATA.map((row, i) => (
            <tr key={i}>
              <td className="py-4 pr-4 text-ink/70">{row.feature}</td>
              <td className="py-4 pr-4 text-center">
                {row.audit ? (
                  <span className="text-accent-1">✓</span>
                ) : (
                  <span className="text-ink/30">—</span>
                )}
              </td>
              <td className="py-4 pr-4 text-center">
                {row.caas ? (
                  <span className="text-accent-1">✓</span>
                ) : (
                  <span className="text-ink/30">—</span>
                )}
              </td>
              <td className="py-4 text-center">
                {row.both ? (
                  <span className="text-accent-1">✓</span>
                ) : (
                  <span className="text-ink/30">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FrameworkGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {FRAMEWORKS.map((fw) => (
        <Card
          key={fw.name}
          className="h-full p-4 transition-all sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h4 className="font-display text-lg font-semibold text-ink">{fw.name}</h4>
              <p className="text-sm text-ink/50">{fw.region}</p>
            </div>
            <span className="shrink-0 rounded-full bg-accent-1/10 px-2 py-1 text-xs font-medium text-accent-1">
              Covered
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{fw.focus}</p>
        </Card>
      ))}
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      body:
        "We map your AI systems, data flows, and existing controls in week one — so nothing gets judged out of context."
    },
    {
      number: "2",
      title: "Analysis",
      body:
        "We score risks against the frameworks that matter to you and your regulators, with clear severity and likelihood ratings."
    },
    {
      number: "3",
      title: "Action plan",
      body:
        "You get a remediation roadmap, executive summary, and board-ready presentation — useful, not just thorough."
    }
  ];

  return (
    <Section>
      <div className="text-center">
        <Heading
          eyebrow="How it works"
          title="From stress to scorecard in three weeks"
          subtitle="A tight, founder-led process that gives you something useful — not a PDF that sits in a drawer."
          align="center"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="h-full text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/10 text-xl font-bold text-accent-1">
              {step.number}
            </div>
            <h4 className="font-display text-lg font-semibold text-ink sm:text-xl">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-base">{step.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default function CompliancePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compliance", path: "/compliance" }
          ]),
          serviceSchema({
            name: "AI Compliance Services",
            description:
              "AI Governance Audit and Compliance-as-a-Service for regulated industries using AI.",
            path: "/compliance",
            serviceType: "AI Compliance Consulting"
          })
        ]}
      />

      <main>
        <ScrollBot />

        <div
          data-bot-stop
          data-bot-fx="0.5"
          data-bot-say="Compliance isn't sexy — but fines are worse. We handle both."
          data-bot-icons="shield,check"
        >
          <PageHero
            eyebrow="Compliance Services"
            title="Sleep better. Stay audit-ready."
            description="We turn AI governance from a boardroom worry into a checked box — with practical audits and ongoing compliance support that keeps pace with your product."
            chips={["GDPR", "MAS TRM", "PDPA", "DIFC", "ADGM"]}
          />
        </div>

        {/* Pain points */}
        <div
          data-bot-stop
          data-bot-fx="0.2"
          data-bot-say="We turn regulatory fire drills into a 20-minute board update."
          data-bot-icons="pulse,shield"
        >
          <Section>
            <Heading
              eyebrow="Compliance headaches we solve"
              title="The stuff that keeps compliance teams up at night"
              subtitle="You do not need another alarm. You need a partner who makes the noise quieter."
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {PAIN_POINTS.map((item) => (
                <Card key={item.title} className="h-full">
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                    {item.body}
                  </p>
                </Card>
              ))}
            </div>
          </Section>
        </div>

        {/* How it works */}
        <div
          data-bot-stop
          data-bot-fx="0.8"
          data-bot-say="Audit-ready in three weeks. Not three quarters."
          data-bot-icons="clock,arrowR"
        >
          <HowItWorksSection />
        </div>

        {/* Services */}
        <div
          data-bot-stop
          data-bot-fx="0.35"
          data-bot-say="You get a roadmap, not a PDF that sits in a drawer."
          data-bot-icons="box,target"
        >
          <DetailPanelsSection
            eyebrow="What you get"
            title="Three ways to work with us"
            subtitle="Pick the level of support that matches where you are today."
            items={[
              {
                title: "AI Governance Audit",
                summary: "A one-time deep dive into your AI systems and controls",
                content: (
                  <ServiceBody
                    description="Get a clear picture of where you stand. We review your AI stack, map it to the frameworks you operate under, and hand you a prioritized plan to close the gaps."
                    deliverables={[
                      "Full AI system review across all relevant frameworks",
                      "Executive summary written for board reporting",
                      "Risk matrix with severity and likelihood scoring",
                      "Regulation-by-regulation gap analysis",
                      "Prioritized remediation roadmap",
                      "Certification recommendations (ISO, SOC 2)"
                    ]}
                    ctaText="Book a compliance audit"
                    ctaHref="/contact?service=compliance-audit"
                  />
                )
              },
              {
                title: "Compliance-as-a-Service",
                summary: "Ongoing compliance partnership for busy teams",
                content: (
                  <ServiceBody
                    description="Compliance isn't a one-and-done task. We stay on retainer so your controls keep up as your models, products, and regulations evolve."
                    deliverables={[
                      "Monthly system audit and compliance scorecard",
                      "Quarterly full review and regulatory briefing",
                      "Ad-hoc policy review and guidance",
                      "Incident response support when things go sideways",
                      "Regulator liaison assistance",
                      "Annual certification preparation"
                    ]}
                    ctaText="Start a retainer"
                    ctaHref="/contact?service=compliance-retainer"
                  />
                )
              },
              {
                title: "Full Partnership",
                summary: "Audit first, then ongoing coverage",
                content: (
                  <ServiceBody
                    description="Start with a full audit, then transition seamlessly into ongoing support. One partner, one brain, no handoffs."
                    deliverables={[
                      "Everything in the AI Governance Audit",
                      "Everything in Compliance-as-a-Service",
                      "Seamless audit-to-ongoing transition",
                      "A dedicated compliance partner who knows your stack",
                      "Priority response within 24 hours",
                      "Custom quarterly strategy sessions"
                    ]}
                    ctaText="Talk about a partnership"
                    ctaHref="/contact?service=compliance-full"
                  />
                )
              }
            ]}
          />
        </div>

        {/* Frameworks */}
        <div
          data-bot-stop
          data-bot-fx="0.55"
          data-bot-say="GDPR, MAS, PDPA, DIFC, ADGM — we speak the languages your regulators use."
          data-bot-icons="shield,check"
        >
          <Section>
            <Heading
              eyebrow="Coverage"
              title="Frameworks and regions we cover"
              subtitle="Focused on the regulations that matter most to fintech, SaaS, and AI-enabled teams in our key markets."
            />
            <div className="mt-8 sm:mt-10">
              <FrameworkGrid />
            </div>
          </Section>
        </div>

        {/* Comparison */}
        <div
          data-bot-stop
          data-bot-fx="0.45"
          data-bot-say="Open the comparison to see exactly what each option includes."
          data-bot-icons="chart,check"
        >
          <Section>
            <Heading
              eyebrow="Compare"
              title="Choose the right level of support"
              subtitle="A side-by-side look at what's included in each engagement."
            />
            <div className="mt-8 rounded-[22px] border border-ink/10 bg-white p-4 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:mt-10 sm:p-6 md:p-8">
              <ComparisonTable />
            </div>
          </Section>
        </div>

        {/* FAQ */}
        <div
          data-bot-stop
          data-bot-fx="0.3"
          data-bot-say="Still have questions? These usually cover it."
          data-bot-icons="chat,person"
        >
          <FaqSection
            eyebrow="FAQ"
            title="Questions compliance teams usually ask"
            items={FAQ_ITEMS}
          />
        </div>

        {/* CTA Band */}
        <div
          data-bot-stop
          data-bot-fx="0.65"
          data-bot-say="Let's make your next compliance conversation boring."
          data-bot-icons="chat,person"
        >
          <CtaBand
            title="Let's make compliance the easy part"
            copy="Tell us about your AI stack and the frameworks you're working under. We'll come back with a clear path forward."
            primaryHref="/contact?service=compliance"
            primaryLabel="Book a call"
            secondaryHref="/services"
            secondaryLabel="See all services"
          />
        </div>
      </main>
    </>
  );
}
