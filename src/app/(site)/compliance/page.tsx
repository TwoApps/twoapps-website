import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { Button } from "@/components/ui/button";
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
  { name: "GDPR", region: "European Union", focus: "Data protection, consent, AI transparency" },
  { name: "MAS TRM", region: "Singapore", focus: "Technology risk management" },
  { name: "PDPA", region: "Singapore", focus: "Personal data protection" },
  { name: "MAS FEAT", region: "Singapore", focus: "AI fairness, ethics, accountability" },
  { name: "DIFC Data Protection", region: "UAE (Dubai)", focus: "Financial services data handling" },
  { name: "ADGM Data Protection", region: "UAE (Abu Dhabi)", focus: "Financial services data handling" }
];

const COMPARISON_DATA = [
  { feature: "Full AI System Audit", audit: true, caas: true, both: true },
  { feature: "Regulatory Gap Analysis", audit: true, caas: true, both: true },
  { feature: "Risk Matrix & Prioritization", audit: true, caas: true, both: true },
  { feature: "Remediation Roadmap", audit: true, caas: false, both: true },
  { feature: "Monthly Compliance Scorecard", audit: false, caas: true, both: true },
  { feature: "Quarterly Regulatory Briefings", audit: false, caas: true, both: true },
  { feature: "Ad-hoc Policy Support", audit: false, caas: true, both: true },
  { feature: "Incident Response Guidance", audit: false, caas: true, both: true },
  { feature: "Regulator Liaison Support", audit: false, caas: true, both: true },
  { feature: "Annual Certification Prep", audit: false, caas: true, both: true },
  { feature: "Dedicated Compliance Partner", audit: false, caas: true, both: true }
];

const PAIN_POINTS = [
  {
    title: "Regulators want answers fast",
    body: "Auditors don't accept 'we'll get to it'. You need a paper trail today."
  },
  {
    title: "AI moves faster than policy",
    body: "Models change weekly. Your governance has to keep up without blocking the team."
  },
  {
    title: "One slip costs client trust",
    body: "A single data incident undoes a year of credibility. Get ahead of it."
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
      <p className="text-sm text-ink/75">{description}</p>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-blue">
          What&apos;s Included
        </p>
        <ul className="space-y-2.5">
          {deliverables.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink/75">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue/70" />
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
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <p className="mb-3 text-xs text-ink/50 sm:hidden">Swipe to compare options</p>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="pb-4 pr-4 font-medium text-ink/80">Feature</th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              AI Governance Audit
              <div className="mt-1 text-xs text-ink/50">One-time engagement</div>
            </th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              Compliance-as-a-Service
              <div className="mt-1 text-xs text-ink/50">Ongoing partnership</div>
            </th>
            <th className="pb-4 text-center font-medium text-blue">
              Full Partnership
              <div className="mt-1 text-xs text-blue/70">Audit + ongoing</div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/5">
          {COMPARISON_DATA.map((row, i) => (
            <tr key={i}>
              <td className="py-4 pr-4 text-ink/70">{row.feature}</td>
              <td className="py-4 pr-4 text-center">
                {row.audit ? <span className="text-blue">✓</span> : <span className="text-ink/30">—</span>}
              </td>
              <td className="py-4 pr-4 text-center">
                {row.caas ? <span className="text-blue">✓</span> : <span className="text-ink/30">—</span>}
              </td>
              <td className="py-4 text-center">
                {row.both ? <span className="text-blue">✓</span> : <span className="text-ink/30">—</span>}
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
        <div
          key={fw.name}
          className="rounded-xl border border-ink/10 bg-white p-4 transition-all hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h4 className="font-semibold text-ink">{fw.name}</h4>
              <p className="text-sm text-ink/50">{fw.region}</p>
            </div>
            <span className="shrink-0 rounded-full bg-blue/10 px-2 py-1 text-xs text-blue">
              Covered
            </span>
          </div>
          <p className="mt-2 text-sm text-ink/60">{fw.focus}</p>
        </div>
      ))}
    </div>
  );
}

function ComplianceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Compliance Services",
    description: "AI Governance Audit and Compliance-as-a-Service for regulated industries",
    provider: {
      "@type": "Organization",
      name: "TwoApps",
      url: "https://thetwoapps.com"
    }
  };
}

export default function CompliancePage() {
  return (
    <>
      <JsonLd data={[ComplianceSchema()]} />
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
            title="AI compliance, handled."
            description="For fintech and regulated teams who need defensible AI governance without slowing the roadmap."
            chips={["GDPR", "MAS TRM", "PDPA", "DIFC", "ADGM"]}
          />
        </div>

        {/* Three pain points */}
        <section
          data-bot-stop
          data-bot-fx="0.2"
          data-bot-say="We turn regulatory fire drills into a 20-minute board update."
          data-bot-icons="pulse,shield"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {PAIN_POINTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65 sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          data-bot-stop
          data-bot-fx="0.8"
          data-bot-say="Audit-ready in three weeks. Not three quarters."
          data-bot-icons="clock,arrowR"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
        >
          <div className="mb-8 text-center sm:mb-10 lg:mb-12">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl md:text-4xl lg:text-5xl">How it works</h2>
            <p className="mt-3 text-sm text-ink/60 sm:text-base">Three weeks to audit-ready.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:gap-6">
            <div className="rounded-2xl border border-ink/10 bg-white p-5 text-center sm:p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-xl font-bold text-blue">
                1
              </div>
              <h4 className="text-lg font-semibold text-ink sm:text-xl">Week 1: Discovery</h4>
              <p className="mt-2 text-sm text-ink/60 sm:text-base">
                Stakeholder interviews, system architecture review, document collection, AI model inventory
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-5 text-center sm:p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-xl font-bold text-blue">
                2
              </div>
              <h4 className="text-lg font-semibold text-ink sm:text-xl">Week 2: Analysis</h4>
              <p className="mt-2 text-sm text-ink/60 sm:text-base">
                Regulatory mapping, data flow analysis, AI governance assessment, risk scoring
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-5 text-center sm:col-span-2 sm:p-6 md:col-span-1">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-xl font-bold text-blue">
                3
              </div>
              <h4 className="text-lg font-semibold text-ink sm:text-xl">Week 3: Deliverables</h4>
              <p className="mt-2 text-sm text-ink/60 sm:text-base">
                Executive summary, risk matrix, gap analysis, remediation roadmap, presentation
              </p>
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <div
          data-bot-stop
          data-bot-fx="0.35"
          data-bot-say="You get a roadmap, not a PDF that sits in a drawer."
          data-bot-icons="box,target"
        >
          <DetailPanelsSection
            eyebrow="Deliverables"
            title="What we deliver"
            items={[
            {
              title: "AI Governance Audit",
              summary: "Comprehensive review of your AI systems",
              content: (
                <ServiceBody
                  description="Comprehensive review of your AI systems for regulatory compliance."
                  deliverables={[
                    "Full AI system review across all frameworks",
                    "Executive summary for board reporting",
                    "Risk matrix (severity × likelihood)",
                    "Regulation-by-regulation gap analysis",
                    "Prioritized remediation roadmap",
                    "Certification recommendations (ISO, SOC 2)"
                  ]}
                  ctaText="Book a call"
                  ctaHref="/contact?service=compliance-audit"
                />
              )
            },
            {
              title: "Compliance-as-a-Service",
              summary: "Recommended — ongoing compliance partner",
              content: (
                <ServiceBody
                  description="Ongoing compliance partner for continuous coverage."
                  deliverables={[
                    "Monthly system audit + compliance scorecard",
                    "Quarterly full review + regulatory briefing",
                    "Ad-hoc policy review and guidance",
                    "Incident response support",
                    "Regulator liaison assistance",
                    "Annual certification preparation"
                  ]}
                  ctaText="Book a call"
                  ctaHref="/contact?service=compliance-retainer"
                />
              )
            },
            {
              title: "Full Partnership",
              summary: "Audit plus ongoing coverage",
              content: (
                <ServiceBody
                  description="Start with audit, then ongoing coverage."
                  deliverables={[
                    "Everything in AI Governance Audit",
                    "Everything in Compliance-as-a-Service",
                    "Seamless audit → ongoing transition",
                    "Dedicated compliance partner",
                    "Priority response (24 hours)",
                    "Custom quarterly strategy sessions"
                  ]}
                  ctaText="Book a call"
                  ctaHref="/contact?service=compliance-full"
                />
              )
            },
            {
              title: "Frameworks we cover",
              summary: "GDPR, MAS, PDPA, DIFC, ADGM",
              content: <FrameworkGrid />
            },
            {
              title: "Compare options",
              summary: "Feature-by-feature comparison of the three options",
              content: <ComparisonTable />
            }
            ]}
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
            title="Get compliance clarity"
            copy="Tell us about your AI stack. We'll come back with a defensible path forward."
            primaryHref="/contact?service=compliance"
            primaryLabel="Book a call"
            secondaryHref="/book"
            secondaryLabel="Talk to us"
          />
        </div>
      </main>
    </>
  );
}
