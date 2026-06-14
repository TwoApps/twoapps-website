import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { GuideDownloadForm } from "@/components/guide/guide-download-form";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Free Guide: 5 AI Workflows That Save 10+ Hours/Week",
  description:
    "Download a practical PDF with 5 proven AI workflows that help business owners and operators save 10+ hours every week — with real examples and time-saved breakdowns.",
  canonicalPath: "/guide",
  keywords: [
    "ai workflows guide",
    "automation guide",
    "ai productivity guide",
    "business automation workflows",
    "free ai automation pdf"
  ],
  ogImage: "/og-default.svg"
});

const workflows = [
  {
    title: "Inbox triage that actually works",
    body: "Stop drowning in notifications. Route the important stuff to the right person automatically."
  },
  {
    title: "Reports that build themselves",
    body: "Turn scattered data into a clean update without the Sunday-night copy-paste marathon."
  },
  {
    title: "Follow-up sequences that keep leads warm",
    body: "Stay top-of-mind with prospects while you stay focused on delivery."
  },
  {
    title: "Meeting prep in seconds",
    body: "Show up to every call with context, notes, and next steps — no manual research needed."
  },
  {
    title: "Handoffs that don't get stuck",
    body: "Move work forward with approval routing that reminds the right people at the right time."
  }
];

const audienceCards = [
  {
    title: "Business owners & founders",
    body: "Reclaim time for strategy, sales, and growth instead of repeat admin."
  },
  {
    title: "Operations leads",
    body: "Reduce bottlenecks and make your team look superhuman without adding headcount."
  },
  {
    title: "Agency & software teams",
    body: "Ship AI-assisted workflows for clients or your own delivery process."
  }
];

const stats = [
  { number: "10+", label: "Hours saved per week" },
  { number: "5", label: "Proven workflows" },
  { number: "PDF", label: "Plus email bonus tips" },
  { number: "~20 min", label: "Average first setup" }
];

export default function GuidePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Free Guide", path: "/guide" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.72"
        data-bot-say="This guide is the cheat sheet we wish we had three years ago."
        data-bot-icons="spark,target"
      >
        <PageHero
          eyebrow="Free guide"
          title="5 AI workflows that give you back 10+ hours a week"
          description="A practical, no-fluff PDF with real automations you can build this week — even if you're not technical."
          chips={["PDF download", "5 proven workflows", "Real examples", "Time-saved breakdown"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.18"
        data-bot-say="Real examples, real time saved, zero fluff — these workflows pay for themselves in the first week."
        data-bot-icons="check,chart"
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <div className="mx-auto max-w-4xl">
            <Heading
              align="center"
              eyebrow="What you'll learn"
              title="Five automations, one clear playbook"
              subtitle="Each workflow includes the tools to use, the trigger to set, and the exact hours it saves."
            />

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {workflows.map((item, index) => (
                <Card
                  key={item.title}
                  className="flex flex-col p-5 text-left sm:p-6"
                >
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue/10 text-sm font-semibold text-blue">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.body}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <Section className="pt-6 sm:pt-8 lg:pt-10">
        <div className="mx-auto max-w-4xl">
          <Heading
            align="center"
            eyebrow="Is this for you?"
            title="Built for operators, founders, and lean teams"
            subtitle="If you find yourself doing the same tasks every week, this guide was written for you."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-cream p-5 sm:p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="Pop your email in — your future self will thank you when the PDF lands in your inbox."
        data-bot-icons="inbox,arrowR"
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <div className="mx-auto max-w-3xl">
            <Card className="p-5 sm:p-7 lg:p-8">
              <div className="mb-6 text-center sm:mb-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-blue">
                  Get the guide
                </p>
                <h2 className="font-display text-2xl font-semibold leading-[1.05] text-ink sm:text-3xl md:text-4xl">
                  Send it to my inbox
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base">
                  Enter your details and we&apos;ll email the PDF immediately. Then open it, pick one workflow, and run it this week.
                </p>
              </div>

              <GuideDownloadForm sourcePage="/guide" />

              <div className="mt-6 rounded-2xl border border-ink/10 bg-cream p-4 sm:mt-8 sm:p-5">
                <p className="text-center text-xs font-medium text-ink/80 sm:text-sm">
                  What happens next
                </p>
                <ol className="mt-3 grid gap-2 text-left text-xs text-ink/60 sm:grid-cols-3 sm:gap-4 sm:text-sm">
                  <li className="flex items-start justify-start gap-2">
                    <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-blue" />
                    <span>The PDF hits your inbox in seconds.</span>
                  </li>
                  <li className="flex items-start justify-start gap-2">
                    <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-blue" />
                    <span>Pick the workflow that stings most.</span>
                  </li>
                  <li className="flex items-start justify-start gap-2">
                    <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-blue" />
                    <span>Get hours back every week.</span>
                  </li>
                </ol>
              </div>
            </Card>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 sm:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-ink/10 bg-cream p-4 text-center sm:p-5"
                >
                  <div className="text-2xl font-bold text-blue sm:text-3xl lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs text-ink/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.35"
        data-bot-say="Want help building your first workflow? We'll spot the highest-ROI move in 20 minutes."
        data-bot-icons="calendar,spark"
      >
        <CtaBand
          title="Want help building your first workflow?"
          copy="Book a free 20-minute audit. We'll identify the highest-ROI automation in your business and map the first pilot."
          primaryHref="/book"
          primaryLabel="Book free audit"
          secondaryHref="/services"
          secondaryLabel="See services"
        />
      </div>
    </>
  );
}
