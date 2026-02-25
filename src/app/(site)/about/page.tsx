import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Two Apps: a Dubai-based agentic AI software house combining AI automation, Claude-native workflows, and product engineering with founder-led execution credibility.",
  canonicalPath: "/about",
  keywords: ["about two apps dubai ai company", "claude code automation expert dubai"],
  ogImage: "/og-default.svg"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Two Apps"
        title="A Dubai-based AI software house built for practical execution"
        description="Two Apps helps businesses automate operations and helps software houses deliver AI projects through white-label implementation. The company is presented first, with founder expertise as credibility and execution depth."
        chips={["Company-first brand", "Founder proof", "Agentic AI + product engineering"]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-6 sm:p-8">
            <Tag className="mb-4">What we do</Tag>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Automation systems + product interfaces + delivery workflows</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              Two Apps is not positioned as generic “AI consulting.” The focus is implementation: agentic AI workflows,
              Claude/Claude Code-based delivery systems, and the internal tools or product surfaces teams need to run them.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Agentic workflow design and orchestration",
                "Claude / Claude Code automation setup",
                "AI-enabled internal tools and dashboards",
                "Web/mobile product engineering support",
                "Compliance-aware automation patterns",
                "White-label agency delivery"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink/80">
                  {item}
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Founder Proof</Tag>
            <h2 className="font-display text-2xl font-semibold">Hands-on depth that strengthens the studio brand</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Founder background includes product engineering, automation, cloud/backend work, AI workflow execution, and
              domain fit for AML/KYC and operational process automation. This supports faster scoping and better implementation decisions.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Strong Claude / Claude Code automation expertise",
                "Flutter + AWS product engineering experience",
                "Figma/design-aware delivery capability",
                "Operational and compliance workflow awareness"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink/80">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="https://zainhthegreat.github.io/my_cv_zain/" target="_blank" rel="noreferrer">
                View founder CV
              </Button>
              <Button href="/work" variant="secondary">
                View work summaries
              </Button>
            </div>
          </Card>
        </div>
      </Section>
      <Section className="pt-0">
        <Card className="p-6 sm:p-8">
          <Tag className="mb-4">Who we serve</Tag>
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold">Direct Businesses (UAE/GCC)</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Founder-led teams, operations-heavy SMEs, and product teams that need practical AI automation and execution support.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Agencies / Software Houses (Global)</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Partners in Eastern Europe, South America, Australia, and New Zealand who need a white-label AI implementation capability.
              </p>
            </div>
          </div>
        </Card>
      </Section>
      <CtaBand
        title="Want to see if Two Apps fits your workflow or delivery model?"
        copy="The first step is usually a short scoping conversation to identify the highest-value workflow, pilot, or client opportunity."
        primaryHref="/contact"
        primaryLabel="Contact Two Apps"
      />
    </>
  );
}
