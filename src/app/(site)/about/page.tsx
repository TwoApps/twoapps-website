import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Two Apps: a Dubai-based agentic AI software house combining AI automation, Claude-native workflows, and product engineering with founder-led execution credibility.",
  canonicalPath: "/about",
  keywords: ["about two apps dubai ai company", "claude code automation expert dubai"],
  ogImage: "/og-default.svg"
});

const aboutFrames: StickySceneFrame[] = [
  {
    label: "Studio",
    headline: "Company-first positioning, founder proof as depth",
    subline: "Two Apps is presented as a software house that executes. Founder expertise supports scoping speed and implementation quality."
  },
  {
    label: "Execution",
    headline: "Automation systems + product surfaces + workflow operations",
    subline: "The model combines agentic automation, Claude-native execution, and product engineering in one delivery path."
  },
  {
    label: "Markets",
    headline: "Built for UAE/GCC businesses and global agency partners",
    subline: "Direct delivery locally plus white-label AI implementation for software houses internationally."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Two Apps"
        title="A Dubai-based AI software house built to execute"
        description="The scene below introduces the company positioning. Open the panels afterward for the founder proof, delivery capability, and market fit details."
        chips={["Company-first", "Founder proof", "Agentic AI + product engineering"]}
      />

      <StickyScene
        eyebrow="About"
        frames={aboutFrames}
        heightMultiplier={3}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "What Two Apps builds",
                body: "Agentic workflows, Claude/Claude Code delivery systems, and internal tools or product interfaces teams need to operate them.",
                meta: ["Automation", "Claude-native", "Product engineering"]
              },
              {
                title: "Founder execution depth",
                body: "Product engineering, cloud/backend work, AI workflow execution, and compliance-aware operational process experience.",
                meta: ["Flutter + AWS", "Claude Code", "AML/KYC fit"]
              },
              {
                title: "Two customer paths",
                body: "Direct business automation projects and white-label agency/software house delivery partnerships.",
                meta: ["UAE/GCC", "Agencies", "White-label"]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Details"
        title="Open the company and founder proof details"
        subtitle="This keeps the page readable at first glance while preserving credibility and service coverage."
        items={[
          {
            title: "What we do",
            summary: "Implementation-first AI software house scope",
            content: (
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Agentic workflow design and orchestration",
                  "Claude / Claude Code automation setup",
                  "AI-enabled internal tools and dashboards",
                  "Web/mobile product engineering support",
                  "Compliance-aware automation patterns",
                  "White-label agency delivery"
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink/78">
                    {item}
                  </div>
                ))}
              </div>
            )
          },
          {
            title: "Founder proof",
            summary: "Hands-on experience that strengthens scoping and execution",
            content: (
              <div className="space-y-4 text-sm text-ink/78">
                <ul className="space-y-2">
                  {[
                    "Strong Claude / Claude Code automation expertise",
                    "Flutter + AWS product engineering experience",
                    "Figma/design-aware delivery capability",
                    "Operational and compliance workflow awareness"
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button href="https://zainhthegreat.github.io/my_cv_zain/" target="_blank" rel="noreferrer">
                    View founder CV
                  </Button>
                  <Button href="/work" variant="secondary">
                    View work summaries
                  </Button>
                </div>
              </div>
            )
          },
          {
            title: "Who we serve",
            summary: "Direct businesses + agency partners",
            content: (
              <div className="grid gap-4 lg:grid-cols-2 text-sm text-ink/78">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-display text-lg font-semibold text-ink">Direct Businesses (UAE/GCC)</p>
                  <p className="mt-2">
                    Founder-led teams, operations-heavy SMEs, and product teams that need practical AI automation and execution support.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-display text-lg font-semibold text-ink">Agencies / Software Houses (Global)</p>
                  <p className="mt-2">
                    Partners in Eastern Europe, South America, Australia, and New Zealand who need a white-label AI implementation capability.
                  </p>
                </div>
              </div>
            )
          }
        ]}
      />

      <CtaBand
        title="Want to see if Two Apps fits your workflow or delivery model?"
        copy="The first step is usually a short scoping conversation to identify the highest-value workflow, pilot, or client opportunity."
        primaryHref="/contact"
        primaryLabel="Contact Two Apps"
      />
    </>
  );
}
