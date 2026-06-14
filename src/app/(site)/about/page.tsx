import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "About",
  description:
    "UAE-based AI automation and software delivery partner. Practical AI workflows, product engineering, founder-led execution.",
  canonicalPath: "/about",
  keywords: ["about twoapps uae ai company", "ai automation partner uae"],
  ogImage: "/og-default.svg"
});

const aboutCards = [
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
];

export default function AboutPage() {
  return (
    <div className="relative">
      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-say="TwoApps — built in the UAE to actually ship AI, not just pitch it."
        data-bot-icons="spark,target,shield"
        data-bot-fx="0.5"
      >
        <PageHero
          eyebrow="About TwoApps"
          title="UAE-based AI delivery partner built to execute"
          description="Overview below. Open panels for founder proof, delivery capability, and fit."
          chips={["UAE-based", "Founder-led execution", "AI workflows + product delivery"]}
        />
      </div>

      <div
        data-bot-stop="capabilities"
        data-bot-say="We don't do roadmap theater. We wire the workflow, then prove the hours back."
        data-bot-icons="code,box,check"
        data-bot-fx="0.2"
      >
        <Section>
          <Heading
            eyebrow="About"
            title="UAE-based team built for practical delivery"
            subtitle="We ship real work. Founder depth shortens scoping and reduces delivery risk."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-8 sm:p-10"
              >
                <h3 className="font-display text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {card.meta.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/10 bg-ink/[0.03] rounded-full px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="details"
        data-bot-say="Founder-led means no handoffs. One brain from scoping to production."
        data-bot-icons="person,code,chart"
        data-bot-fx="0.8"
      >
        <DetailPanelsSection
          eyebrow="Details"
          title="Open the company and founder proof details"
          subtitle="Scan first. Expand for depth."
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
                    <div key={item} className="rounded-[22px] border border-ink/10 bg-white px-4 py-3 text-sm text-ink/58">
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
                <div className="space-y-4 text-sm text-ink/58">
                  <ul className="space-y-2">
                    {[
                      "Strong Claude / Claude Code workflow expertise",
                      "Flutter + AWS product engineering experience",
                      "Figma/design-aware delivery capability",
                      "Operational and compliance workflow awareness"
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      href="https://zainhthegreat.github.io/my_cv_zain/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto"
                    >
                      View founder CV
                    </Button>
                    <Button href="/work" variant="secondary" className="w-full sm:w-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 text-sm text-ink">
                  <div className="rounded-[22px] border border-ink/10 bg-white p-4">
                    <p className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-ink">Direct Businesses</p>
                    <p className="mt-2 text-ink/58">
                      Founder-led teams, operations-heavy SMEs, and product teams that need practical AI automation and execution support.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-ink/10 bg-white p-4">
                    <p className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-ink">Agencies / Software Houses (Global)</p>
                    <p className="mt-2 text-ink/58">
                      Teams that need a white-label AI implementation capability. Common partner markets include Eastern Europe, South America, Australia, and New Zealand.
                    </p>
                  </div>
                </div>
              )
            }
          ]}
        />
      </div>

      <div
        data-bot-stop="cta"
        data-bot-say="Book the call. I'll even prep the first workflow idea before we talk."
        data-bot-icons="chat,calendar,arrowR"
        data-bot-fx="0.5"
      >
        <CtaBand
          title="See if TwoApps fits your workflow."
          copy="Start with a short scoping call to pick the highest-value workflow or pilot."
          primaryHref="/contact"
          primaryLabel="Book a call"
        />
      </div>
    </div>
  );
}
