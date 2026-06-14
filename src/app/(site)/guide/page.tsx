import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { ScrollBot } from "@/components/shared/scroll-bot";
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
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.72"
        data-bot-say="This guide is the cheat sheet we wish we had three years ago."
        data-bot-icons="spark,target"
      >
        <PageHero
          eyebrow="Free Download"
          title="5 AI workflows that save 10+ hours weekly"
          description="A practical guide for business owners. Proven workflows saving real businesses time today."
          chips={["PDF download", "5 proven workflows", "Real examples", "Time-saved breakdown"]}
        />
      </div>

      <Section className="pt-6">
        <div className="mx-auto max-w-3xl">
          <Card
            className="p-5 sm:p-8 lg:p-10"
            data-bot-stop
            data-bot-fx="0.18"
            data-bot-say="Real examples, real time saved, zero fluff — these workflows pay for themselves in the first week."
            data-bot-icons="check,chart"
          >
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl md:text-4xl lg:text-5xl">
                Get the guide by email
              </h2>
              <p className="mt-3 text-sm text-ink/65 sm:text-base">
                Enter your details. We&apos;ll send the PDF immediately.
              </p>
            </div>

            <div
              data-bot-stop
              data-bot-fx="0.85"
              data-bot-say="Pop your email in — your future self will thank you when the PDF lands in your inbox."
              data-bot-icons="inbox,arrowR"
            >
              <GuideDownloadForm sourcePage="/guide" />
            </div>
          </Card>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {[
              { number: "10+", label: "Hours saved per week" },
              { number: "5", label: "Proven workflows" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/10 bg-cream p-5 text-center sm:p-6"
              >
                <div className="text-3xl font-bold text-blue lg:text-4xl">{stat.number}</div>
                <div className="mt-1 text-xs text-ink/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
