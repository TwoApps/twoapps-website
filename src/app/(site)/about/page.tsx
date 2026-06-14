import { aboutFaq } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "About TwoApps",
  description:
    "TwoApps is a UAE-based AI automation and software delivery partner. We help businesses and agencies turn AI ideas into working workflows — without the roadmap theater.",
  canonicalPath: "/about",
  keywords: [
    "about twoapps uae ai company",
    "ai automation partner uae",
    "founder-led ai delivery",
    "claude code implementation partner"
  ],
  ogImage: "/og-default.png"
});

const storyCards = [
  {
    step: "01 / Who we are",
    title: "A small team with serious shipping muscle",
    body: "TwoApps is based in Dubai and built around founder-led execution. We design AI workflows, set up Claude delivery systems, and build the internal tools that make them stick."
  },
  {
    step: "02 / Why we exist",
    title: "Most AI projects die before they ship",
    body: "We started TwoApps because too many teams were stuck in strategy decks and proof-of-concept theater. Our job is to wire the workflow, prove the hours back, and hand you something that actually runs."
  },
  {
    step: "03 / How we help",
    title: "Two paths, one delivery standard",
    body: "We work directly with UAE/GCC businesses and white-label with agencies worldwide. Same hands-on approach, same obsession with measurable outcomes."
  }
];

const beliefCards = [
  {
    title: "Start with the workflow",
    body: "AI only matters if it changes how work gets done. We begin with the actual process, not the pitch deck."
  },
  {
    title: "Prove it before you scale it",
    body: "Every engagement starts with a small, measurable pilot. If it doesn't save hours or reduce risk, we don't expand it."
  },
  {
    title: "Founder-led, end to end",
    body: "No account managers hiding the builder. The same person who scopes your project runs the implementation."
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About TwoApps", path: "/about" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-say="TwoApps — built in the UAE to actually ship AI, not just pitch it." data-bot-short="Built in the UAE"
        data-bot-fx="0.5"
      >
        <PageHero
          eyebrow="About TwoApps"
          title="We ship AI workflows, not slide decks"
          description="A founder-led UAE team that designs, builds, and runs practical AI automation for businesses and agency partners."
          chips={["UAE-based", "Founder-led execution", "AI workflows", "Agency-ready"]}
          mobileChips={["UAE-based delivery team", "Founder-led project execution", "Builds practical AI workflows", "Ready for agency partners"]}
        />
      </div>

      <div
        data-bot-stop="story"
        data-bot-say="Three beats: who we are, why we exist, and how we actually help." data-bot-short="Who, why, and how"
        data-bot-fx="0.2"
      >
        <Section>
          <Heading
            eyebrow="Our story"
            title="From AI promises to working systems"
            subtitle="Three things to know about us before you decide if we're the right partner."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {storyCards.map((card) => (
              <Card key={card.title} className="h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">
                  {card.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {card.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="beliefs"
        data-bot-say="We don't do roadmap theater. We wire the workflow, then prove the hours back." data-bot-short="No roadmap theater"
        data-bot-fx="0.8"
      >
        <Section className="bg-cream/40">
          <Heading
            eyebrow="What we believe"
            title="No roadmap theater. No black-box demos."
            subtitle="A few principles that guide how we scope, build, and deliver every engagement."
            align="center"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {beliefCards.map((card) => (
              <Card key={card.title} className="h-full">
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {card.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop="details"
        data-bot-say="Founder-led means no handoffs. One brain from scoping to production." data-bot-short="Founder-led, no handoffs"
        data-bot-fx="0.8"
      >
        <DetailPanelsSection
          eyebrow="Details"
          title="The details that matter"
          subtitle="Expand any section for capabilities, founder background, and who we serve best."
          items={[
            {
              title: "What we do",
              summary: "Implementation-first AI and product delivery support",
              content: (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Design and implement AI workflows that run in your business",
                    "Set up Claude and Claude Code delivery systems",
                    "Build AI-enabled internal tools and dashboards",
                    "Support web and mobile product engineering",
                    "Apply compliance-aware automation patterns",
                    "Deliver white-label AI work for agency partners"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-white p-4 text-sm text-ink/78"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              title: "Founder proof",
              summary: "Hands-on experience that strengthens scoping and execution",
              content: (
                <div className="space-y-5 text-sm text-ink/78 sm:text-[15px]">
                  <ul className="space-y-2.5">
                    {[
                      "Deep Claude and Claude Code workflow expertise",
                      "Flutter + AWS product engineering experience",
                      "Figma-aware delivery and design collaboration",
                      "Operational and compliance workflow awareness"
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      href="https://zainhthegreat.github.io/my_cv_zain/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto"
                    >
                      See founder background
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <Card className="h-full">
                    <p className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                      Direct Businesses
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                      Founder-led teams, operations-heavy SMEs, and product teams that need
                      practical AI automation and execution support — especially in the UAE and
                      GCC.
                    </p>
                  </Card>
                  <Card className="h-full">
                    <p className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                      Agencies & Software Houses
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                      Teams that need a white-label AI implementation capability. Common partner
                      markets include Eastern Europe, South America, Australia, and New Zealand.
                    </p>
                  </Card>
                </div>
              )
            }
          ]}
        />
      </div>

      <FaqSection items={aboutFaq} title="About TwoApps — common questions" eyebrow="FAQ" />

      <div
        data-bot-stop="cta"
        data-bot-say="Book the call. I'll even prep the first workflow idea before we talk." data-bot-short="Book the call"
        data-bot-fx="0.5"
      >
        <CtaBand
          title="Let's see if TwoApps fits your workflow"
          copy="Tell us what slows your team down. We'll map the first AI pilot and show you what 'shipped' actually looks like."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/work"
          secondaryLabel="See our work"
        />
      </div>
    </>
  );
}
