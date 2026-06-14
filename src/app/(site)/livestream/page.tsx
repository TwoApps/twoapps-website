import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { JsonLd } from "@/components/json-ld";
import { LivestreamRegistrationForm } from "@/components/livestream/registration-form";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
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

const valueProps = [
  {
    title: "Build, not pitch",
    body: "We assemble a working automation in real time — no deck, no fluff, no sales theater."
  },
  {
    title: "Ask anything",
    body: "Stuck on integrations, prompts, or compliance? Bring the awkward questions and we'll work through them live."
  },
  {
    title: "Take it home",
    body: "Registered attendees get the recording, the workflow file, and a build checklist they can use immediately."
  }
];

const audienceItems = [
  {
    title: "Operations leaders",
    body: "You're drowning in repetitive handoffs and want to see what's actually automatable before you buy anything."
  },
  {
    title: "Founders and product teams",
    body: "You need to ship faster, reduce errors, or free up your team without hiring another round of contractors."
  },
  {
    title: "Agency and tech partners",
    body: "You want proven AI delivery patterns you can white-label or adapt for your own clients."
  }
];

const whatToExpectItems = [
  {
    title: "A real workflow, built live",
    description:
      "Watch a production-ready AI workflow take shape from blank canvas to working system in about 30 minutes."
  },
  {
    title: "Customer support automation",
    description:
      "We'll build a ticket triage system with AI categorization, smart routing, and suggested responses."
  },
  {
    title: "Integration patterns",
    description:
      "See how to connect LLMs, databases, and communication tools without the usual integration headaches."
  },
  {
    title: "Live Q&A",
    description:
      "Ask questions during the build. No question is too basic — we explain each decision as we go."
  }
];

const afterRegisterSteps = [
  {
    step: "01",
    title: "Instant confirmation",
    body: "You'll get an email with your registration details and a calendar hold so the slot stays free."
  },
  {
    step: "02",
    title: "Priority access",
    body: "We email you first when the date is locked in, with a private join link and a quick prep note."
  },
  {
    step: "03",
    title: "The replay kit",
    body: "After the live session you get the recording, the exported workflow file, and a build checklist."
  }
];

export default function LivestreamPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Livestream", path: "/livestream" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Join live — I'll demo pipelines in real time and answer the awkward questions."
        data-bot-icons="spark,person"
      >
        <PageHero
          eyebrow="Live Demo"
          title="See a real AI workflow built in 30 minutes — live"
          description="No slides. No theory. Just a production-ready workflow built from scratch while you watch, with live Q&A all the way through."
          chips={["30 minutes", "Live Q&A", "Recording + files"]}
        />
      </div>

      {/* Value proposition strip */}
      <Section className="pt-8 sm:pt-10 pb-6 sm:pb-8 lg:pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {valueProps.map((item) => (
            <Card key={item.title} className="flex h-full flex-col p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-[15px]">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who should attend */}
      <div
        data-bot-stop
        data-bot-fx="0.3"
        data-bot-say="If repetitive work is slowing you down, this is for you."
        data-bot-icons="person,chat"
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <Heading
            eyebrow="Who it's for"
            title="Built for operators, founders, and delivery partners"
            subtitle="If you're tired of hearing what AI could do and want to see what it actually does, pull up a chair."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {audienceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-ink/10 bg-cream p-5 sm:p-6"
              >
                <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-[15px]">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* What you'll learn + registration form */}
      <Section className="pt-6 sm:pt-8 lg:pt-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* What to expect */}
          <div
            className="space-y-6 sm:space-y-8"
            data-bot-stop
            data-bot-fx="0.2"
            data-bot-say="Thirty minutes, no slides. Just a workflow built from scratch while you watch."
            data-bot-icons="pulse,chat"
          >
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-blue">What you&apos;ll learn</p>
              <h2 className="text-balance font-display text-2xl font-medium leading-[1.05] text-ink sm:text-3xl md:text-4xl lg:text-5xl">
                A customer-support triage system, built end-to-end
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/58 sm:text-lg">
                This is the exact pattern we ship to fintech, SaaS, and e-commerce teams — and you&apos;ll see every wire get connected.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {whatToExpectItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 rounded-[22px] border border-ink/10 bg-cream p-4 sm:p-5 transition-colors hover:bg-cream-dark/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue/10 text-sm font-medium text-blue">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold leading-tight text-ink sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <Card className="border-ink/10 bg-cream p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10">
                  <svg className="h-5 w-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink sm:text-base">Based on real client work</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
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
                <h2 className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
                  Save your seat
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Date and time to be announced. Register now and you&apos;ll be first to know — plus you&apos;ll get the recording and resources.
                </p>
              </div>
              <LivestreamRegistrationForm sourcePage="/livestream" />

              {/* Trust signals */}
              <div className="mt-5 border-t border-ink/10 pt-4 sm:mt-6 sm:pt-5">
                <div className="flex items-center gap-2 text-xs text-ink/50">
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
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

      {/* What happens after registering */}
      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Register once. Get the link, the recording, and the workflow file."
        data-bot-icons="check,inbox"
      >
        <Section>
          <Heading
            eyebrow="What happens next"
            title="After you register, here's exactly what to expect"
            subtitle="No guesswork. We keep you informed before, during, and after the live session."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {afterRegisterSteps.map((item) => (
              <Card key={item.step} className="flex h-full flex-col p-5 sm:p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-[15px]">{item.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

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
              answer: "No. We explain each step in plain language and welcome questions at any level."
            },
            {
              question: "Will there be a recording?",
              answer:
                "Yes — every registered attendee gets the recording plus the workflow file and resource checklist."
            },
            {
              question: "What tools will you use?",
              answer: "n8n for orchestration, Slack/email integrations, and standard LLM providers."
            },
            {
              question: "Is this a sales pitch?",
              answer:
                "No. Thirty minutes of live building. We'll mention how to work with TwoApps at the end if it feels useful."
            }
          ]}
        />
      </div>
    </>
  );
}
