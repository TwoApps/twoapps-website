import Link from "next/link";

import { featuredIndustries, industries } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industries where Two Apps delivers the most value first: operations-heavy businesses and compliance-aware teams needing AI workflow automation and internal tools.",
  canonicalPath: "/industries",
  keywords: ["ai automation industries", "operations automation consulting", "fintech aml kyc automation"],
  ogImage: "/og-default.svg"
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Best-fit industries for AI automation and AI-enabled operations"
        description="Two Apps focuses on operationally heavy environments where repetitive workflows, queue pressure, and cross-tool coordination create real business friction."
        chips={["UAE/GCC direct clients", "Ops-heavy teams", "Compliance-aware workflows"]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold">Launch SEO industry page</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
              Start with a strong compliance-focused industry page based on your AML/KYC experience, then expand into
              additional industries as you publish case studies and workflow examples.
            </p>
            <div className="mt-5">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="focus-ring block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <p className="font-display text-xl font-semibold">{industry.title}</p>
                  <p className="mt-1 text-sm text-ink/70">{industry.summary}</p>
                </Link>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="font-display text-2xl font-semibold">Expansion targets</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              High-fit verticals for future landing pages and outreach campaigns.
            </p>
            <ul className="mt-4 space-y-2">
              {featuredIndustries.map((industry) => (
                <li key={industry} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink/80">
                  {industry}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
      <CtaBand
        title="Have an operations-heavy industry with repetitive workflows?"
        copy="We can map the workflow first and identify where agentic automation, AI copilots, or internal tools create the fastest impact."
        primaryHref="/contact"
        primaryLabel="Discuss an industry workflow"
      />
    </>
  );
}
