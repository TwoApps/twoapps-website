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
    "About TwoApps: a UAE-based AI automation and software delivery partner combining practical AI workflows, product engineering, and founder-led execution.",
  canonicalPath: "/about",
  keywords: ["about twoapps uae ai company", "ai automation partner uae"],
  ogImage: "/og-default.svg"
});

const aboutFrames: StickySceneFrame[] = [
  {
    label: "Studio",
    headline: "UAE-based team built for practical delivery",
    subline: "TwoApps is positioned as a company that ships real work. Founder depth helps speed up scoping and reduce delivery risk."
  },
  {
    label: "Execution",
    headline: "AI workflows, internal tools, and delivery support in one path",
    subline: "The model combines AI workflow implementation, product engineering, and white-label support without splitting work across multiple vendors."
  },
  {
    label: "Markets",
    headline: "UAE-based, serving businesses and agencies globally",
    subline: "Local UAE access is available, and the delivery model is built to work well with remote teams worldwide."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TwoApps"
        title="A UAE-based AI delivery partner built to execute"
        description="Start with the overview below, then open the panels for founder proof, delivery capability, and fit details."
        chips={["UAE-based", "Founder-led execution", "AI workflows + product delivery"]}
      />

      <StickyScene
        eyebrow="About"
        frames={aboutFrames}
        heightMultiplier={3}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "What TwoApps builds",
                body: "AI workflows, Claude/Claude Code delivery systems, and internal tools or product interfaces teams need to run them properly.",
                meta: ["AI workflows", "Claude / Claude Code", "Product engineering"]
              },
              {
                title: "Founder execution depth",
                body: "Product engineering, cloud/backend work, AI workflow execution, and compliance-aware operational process experience.",
                meta: ["Flutter + AWS", "Claude Code", "AML/KYC fit"]
              },
              {
                title: "Two customer paths",
                body: "Direct business automation projects and white-label agency/software house delivery partnerships.",
                meta: ["UAE-based", "Agencies", "White-label"]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Details"
        title="Open the company and founder proof details"
        subtitle="This keeps the page easy to scan at first glance while still showing the depth behind the work."
        items={[
          {
            title: "What we do",
            summary: "Implementation-first AI and product delivery support",
            content: (
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "AI workflow design and implementation",
                  "Claude / Claude Code workflow setup",
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
                    "Strong Claude / Claude Code workflow expertise",
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
                  <p className="font-display text-lg font-semibold text-ink">Direct Businesses</p>
                  <p className="mt-2">
                    Founder-led teams, operations-heavy SMEs, and product teams that need practical AI automation and execution support.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-display text-lg font-semibold text-ink">Agencies / Software Houses (Global)</p>
                  <p className="mt-2">
                    Teams that need a white-label AI implementation capability. Common partner markets include Eastern Europe, South America, Australia, and New Zealand.
                  </p>
                </div>
              </div>
            )
          }
        ]}
      />

      <CtaBand
        title="Want to see if TwoApps is a fit for your workflow or delivery model?"
        copy="The first step is usually a short scoping conversation to identify the highest-value workflow, pilot, or client opportunity."
        primaryHref="/contact"
        primaryLabel="Talk to TwoApps"
      />
    </>
  );
}
