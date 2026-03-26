import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { Button } from "@/components/ui/button";
import {
  CurrencyProvider,
  CurrencySelector,
  Price
} from "@/components/pricing/currency-selector";

export const metadata = buildMetadata({
  title: "AI Compliance Services — Governance Audit & Compliance-as-a-Service",
  description:
    "Stay ahead of AI regulations with TwoApps compliance services. AI Governance Audit ($20K) and Compliance-as-a-Service ($5K/month) for GDPR, MAS TRM, PDPA, DIFC, and ADGM compliance.",
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

function ServiceCard({
  title,
  price,
  priceNote,
  description,
  timeline,
  deliverables,
  featured,
  ctaText,
  ctaHref
}: {
  title: string;
  price: number;
  priceNote: string;
  description: string;
  timeline: string;
  deliverables: string[];
  featured?: boolean;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
        featured
          ? "border-accent-1/30 bg-gradient-to-b from-accent-1/[0.06] to-transparent"
          : "border-white/10 bg-white/[0.02] hover:border-accent-1/15 hover:bg-accent-1/[0.02]"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent-1 px-4 py-1 text-xs font-medium uppercase tracking-wider text-[#020406]">
            Recommended
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-ink/65">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <Price usdAmount={price} className="text-3xl font-bold text-ink sm:text-4xl" />
          <span className="text-sm text-ink/50">{priceNote}</span>
        </div>
        <p className="mt-1 text-sm text-ink/50">
          Timeline: {timeline}
        </p>
      </div>

      <div className="mb-6 flex-1">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent-1">
          What's Included
        </p>
        <ul className="space-y-2.5">
          {deliverables.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink/75">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button href={ctaHref} variant={featured ? "primary" : "secondary"} className="w-full">
        {ctaText}
      </Button>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="pb-4 pr-4 font-medium text-ink/80">Feature</th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              AI Governance Audit
              <div className="mt-1 text-xs text-ink/50">$20K one-time</div>
            </th>
            <th className="pb-4 pr-4 text-center font-medium text-ink/80">
              Compliance-as-a-Service
              <div className="mt-1 text-xs text-ink/50">$5K/month</div>
            </th>
            <th className="pb-4 text-center font-medium text-accent-1">
              Full Partnership
              <div className="mt-1 text-xs text-accent-1/70">$20K + $5K/mo</div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {COMPARISON_DATA.map((row, i) => (
            <tr key={i}>
              <td className="py-4 pr-4 text-ink/70">{row.feature}</td>
              <td className="py-4 pr-4 text-center">
                {row.audit ? <span className="text-accent-1">✓</span> : <span className="text-ink/30">—</span>}
              </td>
              <td className="py-4 pr-4 text-center">
                {row.caas ? <span className="text-accent-1">✓</span> : <span className="text-ink/30">—</span>}
              </td>
              <td className="py-4 text-center">
                {row.both ? <span className="text-accent-1">✓</span> : <span className="text-ink/30">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-white/10">
            <td className="py-4 pr-4 font-medium text-ink">Total Investment</td>
            <td className="py-4 pr-4 text-center font-medium text-ink">$20,000</td>
            <td className="py-4 pr-4 text-center font-medium text-ink">$60,000/year</td>
            <td className="py-4 text-center font-medium text-accent-1">$80K Y1 / $60K Y2+</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function FrameworkGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FRAMEWORKS.map((fw) => (
        <div
          key={fw.name}
          className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-accent-1/20"
        >
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-ink">{fw.name}</h4>
              <p className="text-sm text-ink/50">{fw.region}</p>
            </div>
            <span className="rounded-full bg-accent-1/10 px-2 py-1 text-xs text-accent-1">
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
    },
    offers: [
      {
        "@type": "Offer",
        name: "AI Governance Audit",
        price: "20000",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        name: "Compliance-as-a-Service",
        price: "5000",
        priceCurrency: "USD",
        billingDuration: "P1M"
      }
    ]
  };
}

export default function CompliancePage() {
  return (
    <>
      <JsonLd data={[ComplianceSchema()]} />
      <CurrencyProvider>
        <main>
          <PageHero
            eyebrow="Compliance Services"
            title="AI Governance Built for Regulated Industries"
            description="Stay ahead of AI regulations with compliance services designed for fintech and regulated companies. Full audit in 3 weeks, or ongoing partnership for continuous coverage."
            chips={["GDPR", "MAS TRM", "PDPA", "DIFC", "ADGM"]}
          />

          {/* Currency Selector */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end py-6">
              <CurrencySelector />
            </div>
          </section>

          {/* Service Cards */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <ServiceCard
                title="AI Governance Audit"
                price={20000}
                priceNote="USD one-time"
                description="Comprehensive review of your AI systems for regulatory compliance"
                timeline="3 weeks"
                deliverables={[
                  "Full AI system review across all frameworks",
                  "Executive summary for board reporting",
                  "Risk matrix (severity × likelihood)",
                  "Regulation-by-regulation gap analysis",
                  "Prioritized remediation roadmap",
                  "Certification recommendations (ISO, SOC 2)"
                ]}
                ctaText="Request Audit"
                ctaHref="/contact?service=compliance-audit"
              />
              <ServiceCard
                title="Compliance-as-a-Service"
                price={5000}
                priceNote="USD/month"
                description="Ongoing compliance partner for continuous coverage"
                timeline="6-month minimum"
                deliverables={[
                  "Monthly system audit + compliance scorecard",
                  "Quarterly full review + regulatory briefing",
                  "Ad-hoc policy review and guidance",
                  "Incident response support",
                  "Regulator liaison assistance",
                  "Annual certification preparation"
                ]}
                featured
                ctaText="Start Partnership"
                ctaHref="/contact?service=compliance-retainer"
              />
              <ServiceCard
                title="Full Partnership"
                price={20000}
                priceNote="USD + $5K/mo"
                description="Start with audit, then ongoing coverage"
                timeline="Immediate start"
                deliverables={[
                  "Everything in AI Governance Audit",
                  "Everything in Compliance-as-a-Service",
                  "Seamless audit → ongoing transition",
                  "Dedicated compliance partner",
                  "Priority response (24 hours)",
                  "Custom quarterly strategy sessions"
                ]}
                ctaText="Get Full Coverage"
                ctaHref="/contact?service=compliance-full"
              />
            </div>
          </section>

          {/* Frameworks Covered */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Regulatory Frameworks We Cover</h2>
              <p className="mt-3 text-ink/60">Multi-jurisdiction expertise for global operations</p>
            </div>
            <FrameworkGrid />
          </section>

          {/* Comparison Table */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Compare Service Options</h2>
              <p className="mt-3 text-ink/60">Choose the right level of coverage for your needs</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <ComparisonTable />
            </div>
          </section>

          {/* What's Included */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">All Services Include</h3>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-ink/70">
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Senior compliance consultant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>AI/ML expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Full documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Audit-ready deliverables</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">The Cost of Non-Compliance</h3>
                <div className="mt-4 space-y-3 text-sm text-ink/65">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>GDPR fines</span>
                    <span className="text-ink/80">Up to €20M or 4% revenue</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>PDPA fines</span>
                    <span className="text-ink/80">Up to SGD 1M per breach</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Average data breach cost</span>
                    <span className="text-ink/80">$4.45M (IBM 2023)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal + remediation</span>
                    <span className="text-ink/80">$200K - $2M+</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-accent-1">
                  One incident = 10-100x the cost of compliance
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">TwoApps ROI</h3>
                <div className="mt-4 space-y-3 text-sm text-ink/65">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>AI Governance Audit</span>
                    <span className="text-ink/80">$20,000</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Compliance-as-a-Service (annual)</span>
                    <span className="text-ink/80">$60,000</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>vs. in-house team</span>
                    <span className="text-accent-1">Save $400K+/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>vs. Big 4 audit</span>
                    <span className="text-accent-1">5-8x cost advantage</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-accent-1">
                  ROI: 7x-10x in risk avoidance alone
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Our Process</h2>
              <p className="mt-3 text-ink/60">From engagement to audit-ready in 3 weeks</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/10 text-xl font-bold text-accent-1">
                  1
                </div>
                <h4 className="font-semibold text-ink">Week 1: Discovery</h4>
                <p className="mt-2 text-sm text-ink/60">
                  Stakeholder interviews, system architecture review, document collection, AI model inventory
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/10 text-xl font-bold text-accent-1">
                  2
                </div>
                <h4 className="font-semibold text-ink">Week 2: Analysis</h4>
                <p className="mt-2 text-sm text-ink/60">
                  Regulatory mapping, data flow analysis, AI governance assessment, risk scoring
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/10 text-xl font-bold text-accent-1">
                  3
                </div>
                <h4 className="font-semibold text-ink">Week 3: Deliverables</h4>
                <p className="mt-2 text-sm text-ink/60">
                  Executive summary, risk matrix, gap analysis, remediation roadmap, presentation
                </p>
              </div>
            </div>
          </section>

          {/* CTA Band */}
          <CtaBand
            title="Ready for compliance clarity?"
            copy="Start with an AI Governance Audit or discuss ongoing compliance partnership."
            primaryHref="/contact?service=compliance"
            primaryLabel="Get started"
            secondaryHref="/book"
            secondaryLabel="Book a call"
          />
        </main>
      </CurrencyProvider>
    </>
  );
}
