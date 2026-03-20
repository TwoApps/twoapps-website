import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { GuideDownloadForm } from "@/components/guide/guide-download-form";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Free Guide: 5 AI Workflows That Save 10+ Hours/Week",
  description:
    "Download our free guide featuring 5 practical AI workflows that are already saving real businesses 10+ hours per week. No fluff, just proven automation.",
  canonicalPath: "/guide",
  keywords: ["ai workflows guide", "automation guide", "ai productivity guide", "business automation workflows"],
  ogImage: "/og-default.svg"
});

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Download"
        title="Free Guide: 5 AI Workflows That Save 10+ Hours/Week"
        description="A practical guide for business owners. No futuristic hype — just proven workflows that are saving real businesses time today."
        chips={["PDF Download", "5 Proven Workflows", "Real Examples", "ROI Breakdown"]}
      />

      <Section className="pt-6">
        <div className="mx-auto max-w-3xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Get the guide delivered to your inbox
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                Enter your details below and we&apos;ll send you the PDF immediately.
              </p>
            </div>
            <GuideDownloadForm sourcePage="/guide" />
          </Card>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { number: "10+", label: "Hours saved per week" },
              { number: "5", label: "Proven workflows" },
              { number: "$3K-$10K", label: "Setup cost range" }
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
