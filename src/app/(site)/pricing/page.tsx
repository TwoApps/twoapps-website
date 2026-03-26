import { buildMetadata } from "@/lib/seo";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import {
  CurrencyProvider,
  CurrencySelector,
  Price
} from "@/components/pricing/currency-selector";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Pricing — Productized AI Automation Packages",
  description:
    "Simple, transparent pricing for AI workflow automation. Start with a Workflow Assessment at $8K, or choose from our productized service packages for lead qualification, customer support, or finance reporting automation.",
  canonicalPath: "/pricing",
  keywords: [
    "ai automation pricing",
    "workflow automation packages",
    "productized ai services",
    "lead qualification automation cost",
    "customer support automation pricing"
  ],
  ogImage: "/og-default.svg"
});

type Package = {
  id: string;
  name: string;
  tagline: string;
  usdPrice: number;
  timeline: string;
  bestFor: string;
  deliverables: string[];
  featured?: boolean;
};

const PACKAGES: Package[] = [
  {
    id: "workflow-assessment",
    name: "Workflow Assessment",
    tagline: "2-week diagnostic of one workflow",
    usdPrice: 8000,
    timeline: "2 weeks",
    bestFor: "First-time automation buyers",
    deliverables: [
      "In-depth process mapping and analysis",
      "Bottleneck identification report",
      "ROI estimate with cost savings projections",
      "Automation roadmap with prioritized recommendations",
      "Technical feasibility assessment",
      "Implementation timeline proposal"
    ]
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification Workflow",
    tagline: "Standardized lead scoring + routing automation",
    usdPrice: 10000,
    timeline: "1 week",
    bestFor: "Sales teams drowning in unqualified leads",
    deliverables: [
      "Custom lead scoring model based on your criteria",
      "Automated lead capture and enrichment",
      "Intelligent routing to the right sales reps",
      "CRM integration (Salesforce, HubSpot, or custom)",
      "Real-time scoring dashboard",
      "Automated follow-up sequences for cold leads",
      "30-day support and optimization"
    ]
  },
  {
    id: "customer-support",
    name: "Customer Support Automation",
    tagline: "Template-based support workflow automation",
    usdPrice: 12000,
    timeline: "2 weeks",
    bestFor: "Support teams handling 100+ tickets/week",
    deliverables: [
      "Auto-categorization of incoming tickets",
      "Intelligent routing to appropriate teams",
      "Response template library (20+ templates)",
      "Priority scoring based on customer value",
      "Knowledge base integration",
      "Escalation workflows for complex issues",
      "Performance analytics dashboard",
      "30-day support and documentation"
    ],
    featured: true
  },
  {
    id: "finance-reporting",
    name: "Finance Reporting Automation",
    tagline: "Pre-configured dashboard + data pipeline",
    usdPrice: 15000,
    timeline: "2 weeks",
    bestFor: "Finance teams spending 10+ hrs/week on reports",
    deliverables: [
      "Automated report generation (daily/weekly/monthly)",
      "Data connectors for major platforms (QuickBooks, Xero, SAP)",
      "Executive dashboard with key metrics",
      "Variance analysis and anomaly detection",
      "Automated distribution to stakeholders",
      "Audit trail and compliance logging",
      "Custom KPI tracking",
      "30-day support and documentation"
    ]
  }
];

function PricingCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
        pkg.featured
          ? "border-accent-1/30 bg-gradient-to-b from-accent-1/[0.06] to-transparent"
          : "border-white/10 bg-white/[0.02] hover:border-accent-1/15 hover:bg-accent-1/[0.02]"
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent-1 px-4 py-1 text-xs font-medium uppercase tracking-wider text-[#020406]">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-ink sm:text-2xl">{pkg.name}</h3>
        <p className="mt-2 text-sm text-ink/65">{pkg.tagline}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <Price usdAmount={pkg.usdPrice} className="text-3xl font-bold text-ink sm:text-4xl" />
          <span className="text-sm text-ink/50">USD</span>
        </div>
        <p className="mt-1 text-sm text-ink/50">
          Delivery: {pkg.timeline}
        </p>
      </div>

      <div className="mb-6 flex-1">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent-1">
          Best for {pkg.bestFor}
        </p>
        <ul className="space-y-2.5">
          {pkg.deliverables.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink/75">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        href={`/contact?package=${pkg.id}`}
        variant={pkg.featured ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
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
            {PACKAGES.map((pkg) => (
              <th key={pkg.id} className="pb-4 pr-4 font-medium text-ink/80">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          <tr>
            <td className="py-4 pr-4 text-ink/70">Starting Price</td>
            {PACKAGES.map((pkg) => (
              <td key={pkg.id} className="py-4 pr-4 font-medium text-ink">
                <Price usdAmount={pkg.usdPrice} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">Timeline</td>
            {PACKAGES.map((pkg) => (
              <td key={pkg.id} className="py-4 pr-4 text-ink/80">
                {pkg.timeline}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">Process Analysis</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">CRM Integration</td>
            <td className="py-4 pr-4 text-ink/40">—</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">Custom Dashboard</td>
            <td className="py-4 pr-4 text-ink/40">—</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">30-Day Support</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
          </tr>
          <tr>
            <td className="py-4 pr-4 text-ink/70">Documentation</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
            <td className="py-4 pr-4 text-accent-1">✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PricingSchema() {
  const offers = PACKAGES.map((pkg) => ({
    "@type": "Offer",
    name: pkg.name,
    description: pkg.tagline,
    price: pkg.usdPrice,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TwoApps Productized Service Packages",
    description: "AI automation service packages with transparent pricing",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: offer
    }))
  };
}

function PricingContent() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple Pricing. Real Results."
        description="Choose a productized package for fast deployment with clear deliverables, or contact us for a custom pilot tailored to your specific needs."
        chips={["Transparent pricing", "30-day support included", "Global delivery"]}
      />

      {/* Currency Selector */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <p className="text-sm text-ink/60">All prices shown in your selected currency</p>
          <CurrencySelector />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12">
          <h3 className="text-xl font-semibold text-ink sm:text-2xl">All Packages Include</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-ink/70">
            <div className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
              <span>30-day support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
              <span>Full documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
              <span>Team training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-1" />
              <span>Monitoring setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Compare Packages</h2>
          <p className="mt-3 text-ink/60">See which package is right for your team</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ / Notes */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">Need something different?</h3>
            <p className="mt-3 text-sm text-ink/65">
              These productized packages are designed for fast deployment with proven patterns.
              If you need a custom workflow or have complex requirements, we offer tailored
              pilot projects starting from $8K USD. Contact us to discuss your specific needs.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Request custom pilot
            </Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">Agency partner?</h3>
            <p className="mt-3 text-sm text-ink/65">
              If you&apos;re an agency looking to white-label AI delivery for your clients,
              we have special partner pricing and a dedicated program. Get in touch to learn
              about margins, support, and co-branded deliverables.
            </p>
            <Button href="/agency-partners" variant="secondary" className="mt-6">
              Learn about partnerships
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to automate?"
        copy="Pick a package or contact us to discuss which workflow will give you the fastest ROI."
        primaryHref="/contact"
        primaryLabel="Get started"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[PricingSchema()]} />
      <CurrencyProvider>
        <PricingContent />
      </CurrencyProvider>
    </>
  );
}
