import { caseStudies } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Case-style summaries based on founder expertise and delivery experience across Claude automation workflows, compliance operations, and AI-enabled product engineering.",
  canonicalPath: "/work",
  keywords: ["ai automation case studies", "claude code workflow implementation examples", "aml kyc automation examples"],
  ogImage: "/og-default.svg"
});

const workFrames: StickySceneFrame[] = caseStudies.map((item) => ({
  label: item.context.split(" ").slice(0, 2).join(" "),
  headline: item.title,
  subline: item.outcomes[0] ?? item.context
}));

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Proof first, details on demand"
        description="Start with the representative case patterns in the scene below. Expand each case to review the problem, approach, outcomes, and tech."
        chips={["Founder-backed", "Implementation-focused", "Representative summaries"]}
      />

      <StickyScene
        eyebrow="Case Patterns"
        frames={workFrames}
        heightMultiplier={3}
        visual={
          <StackedVisualCards
            items={caseStudies.map((item) => ({
              title: item.title,
              body: item.approach,
              meta: item.tech.slice(0, 3)
            }))}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Case Details"
        title="Expand a case summary"
        subtitle="These are representative, honest case-style summaries designed to show implementation thinking before formal client case studies are published."
        items={caseStudies.map((item) => ({
          title: item.title,
          summary: item.context,
          content: (
            <div className="space-y-4 text-sm text-ink/78">
              <p>
                <span className="font-medium text-ink">Problem:</span> {item.problem}
              </p>
              <p>
                <span className="font-medium text-ink">Approach:</span> {item.approach}
              </p>
              <div>
                <p className="font-medium text-ink">Outcomes</p>
                <ul className="mt-2 space-y-2">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink/70">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ink/55">{item.disclaimer}</p>
            </div>
          )
        }))}
      />

      <CtaBand
        title="Want to turn one of your workflows into a measured pilot?"
        copy="We can start with a discovery call and define the smallest implementation that proves value quickly."
        primaryHref="/contact"
        primaryLabel="Start a pilot discussion"
      />
    </>
  );
}
