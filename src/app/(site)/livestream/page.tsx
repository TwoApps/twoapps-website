import { buildMetadata } from "@/lib/seo";

import { LivestreamRegistrationForm } from "@/components/livestream/registration-form";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FaqSection } from "@/components/common/faq-section";
import { ScrollBot } from "@/components/shared/scroll-bot";

export const metadata = buildMetadata({
  title: "Live AI Workflow Demo",
  description:
    "Watch TwoApps build a production-ready AI workflow in 30 minutes. Learn real automation patterns, integration techniques, and see results live.",
  canonicalPath: "/livestream",
  keywords: ["ai workflow demo", "live automation", "n8n demo", "ai automation webinar", "twoapps live"],
  ogImage: "/og-livestream.svg"
});

const whatToExpectItems = [
  {
    title: "A real workflow, built live",
    description: "Watch a production-ready AI workflow take shape from blank canvas to working system in 30 minutes."
  },
  {
    title: "Customer support automation",
    description: "We'll build a ticket triage system with AI categorization, smart routing, and response suggestions."
  },
  {
    title: "Integration patterns",
    description: "See how to connect AI, databases, and communication tools without the usual complexity."
  },
  {
    title: "Live Q&A",
    description: "Get your questions answered during and after the build. No slides, no theory—just practical answers."
  }
];

export default function LivestreamPage() {
  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Join live — I'll demo pipelines in real time and answer the awkward questions."
        data-bot-icons="spark,person"
      >
        <PageHero
          eyebrow="Live Demo"
          title="Watch us build an AI workflow live"
          description="No slides. No theory. Thirty minutes of real building, end-to-end."
          chips={["30 minutes", "Live Q&A", "Free resources"]}
        />
      </div>

      <Section className="pt-4 sm:pt-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* What to expect */}
          <div
            className="space-y-5 sm:space-y-6"
            data-bot-stop
            data-bot-fx="0.2"
            data-bot-say="Thirty minutes, no slides. Just a workflow built from scratch while you watch."
            data-bot-icons="pulse,chat"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">What you&apos;ll see</h2>
              <p className="mt-2 text-sm sm:text-base text-ink/70">
                We build a customer-support ticket triage system — the exact pattern we ship to fintech, SaaS, and e-commerce teams.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {whatToExpectItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 rounded-2xl border border-ink/10 bg-cream p-4 sm:p-5 transition-colors hover:bg-cream-dark/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue/10 text-sm font-medium text-blue">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof placeholder */}
            <Card className="border-ink/10 bg-cream p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10">
                  <svg className="h-5 w-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-medium text-ink">Based on real client work</p>
                  <p className="mt-1 text-sm text-ink/60">
                    Same patterns we used to cut a fintech client&apos;s support response time by 60%.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Registration form */}
          <div
            id="register"
            className="lg:sticky lg:top-8 lg:self-start"
            data-bot-stop
            data-bot-fx="0.1"
            data-bot-say="Save your spot and I'll send you the recording plus the exact workflow file."
            data-bot-icons="calendar,check"
          >
            <Card className="p-5 sm:p-6 md:p-8">
              <div className="mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-ink">Reserve your spot</h2>
                <p className="mt-1 text-sm text-ink/60">
                  Date and time to be announced. Register now to get priority notification.
                </p>
              </div>
              <LivestreamRegistrationForm sourcePage="/livestream" />

              {/* Trust signals */}
              <div className="mt-5 sm:mt-6 border-t border-ink/10 pt-4 sm:pt-5">
                <div className="flex items-center gap-2 text-xs text-ink/50">
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Your info stays private. No spam, ever.</span>
                </div>
                <p className="mt-3 text-xs text-ink/50 break-words">
                  Questions? Contact us at{" "}
                  <a href="mailto:team@twoapps.com" className="text-blue hover:underline">
                    team@twoapps.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Got a question that feels too basic? Bring it. Q&A is the best part."
        data-bot-icons="chat,check"
      >
        <FaqSection
          title="Questions"
          items={[
            {
              question: "Do I need technical knowledge?",
              answer: "No. We explain each step in plain language."
            },
            {
              question: "Will there be a recording?",
              answer: "Yes — everyone registered gets the recording plus the resources."
            },
            {
              question: "What tools will you use?",
              answer: "n8n for orchestration, Slack/email integrations, and standard LLM providers."
            },
            {
              question: "Is this a sales pitch?",
              answer: "No. Thirty minutes of building. We'll mention how to engage TwoApps at the end if useful."
            }
          ]}
        />
      </div>
    </>
  );
}
