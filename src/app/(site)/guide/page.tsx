import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { GuideDownloadForm } from "@/components/guide/guide-download-form";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Free Guide: 5 AI Workflows That Save 10+ Hours/Week",
  description:
    "Download 5 practical AI workflows that save businesses 10+ hours per week.",
  canonicalPath: "/guide",
  keywords: ["ai workflows guide", "automation guide", "ai productivity guide", "business automation workflows"],
  ogImage: "/og-default.svg"
});

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Download"
        title="5 AI workflows that save 10+ hours weekly"
        description="A practical guide for business owners. Proven workflows saving real businesses time today."
        chips={["PDF download", "5 proven workflows", "Real examples", "Time-saved breakdown"]}
      />

      <Section className="pt-6">
        <div className="mx-auto max-w-3xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Get the guide by email
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                Enter your details. We&apos;ll send the PDF immediately.
              </p>
            </div>
            <GuideDownloadForm sourcePage="/guide" />
          </Card>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { number: "10+", label: "Hours saved per week" },
              { number: "5", label: "Proven workflows" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
              >
                <div className="text-2xl font-bold text-accent-1 sm:text-3xl">{stat.number}</div>
                <div className="mt-1 text-xs text-ink/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
