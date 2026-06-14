import { caseStudies } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Representative summaries showing how we scope and deliver AI workflows and internal tooling.",
  canonicalPath: "/work",
  keywords: ["ai automation case studies", "claude code workflow implementation examples", "aml kyc automation examples"],
  ogImage: "/og-default.svg"
});

export default function WorkPage() {
  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Proof first. Theory later. Scroll and I'll show you the receipts."
        data-bot-icons="target,check"
      >
        <PageHero
          eyebrow="Work"
          title="Proof first, details on demand"
          description="Start with the patterns below. Expand any summary for problem, approach, and outcomes."
          chips={["Founder-backed", "Implementation-focused", "Representative summaries"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.2"
        data-bot-say="These aren't vanity metrics — they're pipelines we actually built."
        data-bot-icons="chart,arrowR,check"
      >
        <Section>
          <Heading
            eyebrow="Case Patterns"
            title="Representative delivery patterns"
            subtitle="Start with a short summary. Expand any case for problem, approach, outcomes, and tech stack."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {caseStudies.map((item) => (
              <Card key={item.slug} className="h-full p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{item.context}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.approach}</p>
                {item.tech.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-xs text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="Every problem, approach, and outcome — no case-study theatre."
        data-bot-icons="eye,arrowR,box"
      >
        <DetailPanelsSection
          eyebrow="Case Details"
          title="Expand a case summary"
          subtitle="Honest, representative summaries — full client case studies coming soon."
          items={caseStudies.map((item) => ({
            title: item.title,
            summary: item.context,
            content: (
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] leading-relaxed text-ink/78">
                <p>
                  <span className="font-medium text-ink">Problem:</span> {item.problem}
                </p>
                <p>
                  <span className="font-medium text-ink">Approach:</span> {item.approach}
                </p>
                <div>
                  <p className="font-medium text-ink">Outcomes</p>
                  <ul className="mt-2 space-y-2 sm:space-y-2.5">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                        <span className="flex-1">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                  {item.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1.5 text-xs text-ink/70">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-ink/55">{item.disclaimer}</p>
              </div>
            )
          }))}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Like what you see? Let's build your next result before the quarter closes."
        data-bot-icons="chat,calendar,spark"
      >
        <CtaBand
          title="Turn a workflow into a measured pilot."
          copy="Start with a short discovery call. Define the smallest pilot that proves value."
          primaryHref="/contact"
          primaryLabel="Book a pilot call"
        />
      </div>
    </>
  );
}
