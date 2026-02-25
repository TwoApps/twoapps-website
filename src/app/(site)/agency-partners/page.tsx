import { globalPartnerRegions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

export const metadata = buildMetadata({
  title: "Agency Partners",
  description:
    "White-label AI implementation partner for software houses and agencies: agentic automation, Claude-native workflows, and AI-enabled feature delivery.",
  canonicalPath: "/agency-partners",
  keywords: ["white label ai partner", "agency ai implementation partner", "software house AI delivery partner"],
  ogImage: "/og-default.svg"
});

export default function AgencyPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Agency Partners"
        title="White-label AI delivery for software houses and digital agencies"
        description="Two Apps works as a specialized AI implementation partner so agencies can sell and deliver AI projects faster without building an in-house AI team first."
        chips={["B2B2B model", "White-label friendly", ...globalPartnerRegions]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedReveal>
            <Card className="p-6 sm:p-8">
              <Tag className="mb-4">How it works</Tag>
              <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
                Your agency owns the client relationship. Two Apps helps ship the AI layer.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
                This is a practical B2B2B model. You continue leading your clients while Two Apps adds specialized AI
                automation and Claude-native execution capability behind the scenes or in a co-delivery setup.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "White-label implementation",
                  "Claude / Claude Code workflow setup",
                  "AI feature delivery inside client products",
                  "Internal agency automation and delivery acceleration",
                  "AI pilot support for pre-sales and scope validation",
                  "Retainer-based AI capacity for ongoing work"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-ink/85">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <div className="space-y-5">
              <Card className="p-6">
                <Tag className="mb-4">Ideal Partners</Tag>
                <ul className="space-y-3 text-sm leading-relaxed text-ink/80">
                  <li>Software houses already delivering web/mobile products</li>
                  <li>Agencies with client demand for AI automation and AI features</li>
                  <li>Teams that need a specialist partner before hiring AI engineers</li>
                </ul>
              </Card>
              <Card className="p-6">
                <Tag className="mb-4">Commercial Positioning</Tag>
                <p className="text-sm leading-relaxed text-ink/80">
                  Lead with <span className="text-ink">specialized AI implementation</span> and{" "}
                  <span className="text-ink">cost-efficient senior delivery</span>, not “cheap outsourcing.” This attracts better partners and avoids commodity pricing pressure.
                </p>
              </Card>
              <Card className="p-6">
                <Tag className="mb-4">Regions</Tag>
                <p className="text-sm text-ink/80">
                  Strong target fit: {globalPartnerRegions.join(", ")}.
                </p>
              </Card>
            </div>
          </AnimatedReveal>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Capability Sprint", "1 week setup to define partner model, offerings, and first AI delivery patterns."],
            ["White-Label Pilot", "2-4 week pilot on a real client workflow or AI feature implementation."],
            ["Claude Team Setup", "Claude/Claude Code playbooks and execution workflows for your delivery team."],
            ["Monthly Retainer", "Ongoing AI implementation capacity for backlog and client expansion."]
          ].map(([title, copy], index) => (
            <AnimatedReveal key={title} delay={0.04 * index}>
              <Card className="h-full p-5">
                <h2 className="font-display text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{copy}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Explore a white-label pilot or AI capability sprint"
        copy="If your agency has client demand for AI but no implementation capacity yet, start with one pilot and build from there."
        primaryHref="/contact"
        primaryLabel="Talk partnership"
        secondaryHref="/regions/white-label-ai-partner-software-houses"
        secondaryLabel="View partner region page"
      />
    </>
  );
}
