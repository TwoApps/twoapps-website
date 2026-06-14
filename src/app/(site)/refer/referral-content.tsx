"use client";

import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { ReferralForm } from "@/components/refer/referral-form";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

// Referral benefits data
const benefits = [
  {
    title: "For you",
    value: "$500",
    description: "Project credit toward your next AI automation or internal tool build",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  },
  {
    title: "For them",
    value: "Free audit",
    description: "A focused workflow audit that spots their highest-ROI automation opportunities",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    )
  },
  {
    title: "No limits",
    value: "∞",
    description: "Refer as many businesses as you want. Credits stack and stay valid for 12 months.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    )
  }
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Send us their name",
    description: "Fill in the referral form with your details and the business you're recommending."
  },
  {
    number: "02",
    title: "They book a free audit",
    description: "We reach out, introduce ourselves, and schedule a no-pressure workflow audit."
  },
  {
    number: "03",
    title: "Your credit activates",
    description: "Once they complete their audit, you get $500 in project credit — and they walk away with real insights."
  }
];

// Who can refer
const referrers = [
  {
    title: "Business clients",
    description: "You've worked with us and know another team that could use AI automation."
  },
  {
    title: "Agency & software partners",
    description: "You partner with us on delivery and want to introduce a shared opportunity."
  },
  {
    title: "Consultants & operators",
    description: "You advise businesses on operations, tech, or growth and spot automation gaps."
  }
];

// FAQ items
const faqItems = [
  {
    question: "When do I get my credit?",
    answer:
      "Once your referral completes their free workflow audit, your $500 project credit is activated immediately."
  },
  {
    question: "Can I stack credits?",
    answer:
      "Yes. Refer multiple businesses and combine credits toward a larger project. There is no cap on how many you can earn."
  },
  {
    question: "How long are credits valid?",
    answer: "Credits are valid for 12 months from the date they are earned."
  },
  {
    question: "What if they're already a client?",
    answer:
      "Referrals must be new to TwoApps. Existing clients don't qualify, but we appreciate the thought."
  }
];

export function ReferralContent() {
  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.2"
        data-bot-say="Know a team that needs automation? Refer them, earn credit, look like a hero." data-bot-short="Refer, earn credit"
      >
        <PageHero
          eyebrow="Refer & earn"
          title="Know a team that needs AI automation?"
          description="Introduce us to a business that's drowning in manual work. They get a free workflow audit. You get $500 in project credit. No cap, no catch."
          chips={["$500 credit for you", "Free audit for them", "No cap on referrals"]}
          mobileChips={["$500 credit for referrers", "Free audit for referrals", "Unlimited referral opportunities"]}
        />
      </div>

      {/* Benefits Section */}
      <div
        data-bot-stop
        data-bot-fx="0.75"
        data-bot-say="They get a free audit. You get project credit. Win-win isn't just a phrase here." data-bot-short="Free audit, project credit"
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <Heading
            align="center"
            eyebrow="What's in it for everyone"
            title="A reward for you, real value for them"
            subtitle="No gimmicks. Just a straightforward trade: you make a warm intro, we both help a business work smarter."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-5 text-center sm:p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue/10 text-blue sm:h-16 sm:w-16">
                  {benefit.icon}
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-ink/60">
                  {benefit.title}
                </p>
                <p className="mb-2 text-2xl font-semibold text-ink sm:text-3xl">{benefit.value}</p>
                <p className="text-sm leading-relaxed text-ink/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      {/* Who Can Refer */}
      <div
        data-bot-stop
        data-bot-fx="0.45"
        data-bot-say="Clients, partners, consultants — if you know a business with a workflow problem, you can refer." data-bot-short="Anyone can refer"
      >
        <Section className="bg-cream/30 pt-6 sm:pt-8 lg:pt-10">
          <Heading
            align="center"
            eyebrow="Who can refer"
            title="If you know a fit, you're already qualified"
            subtitle="You don't need to be a past client. You just need to know a business or agency that could use smarter workflows."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:mt-12">
            {referrers.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* How It Works */}
      <div
        data-bot-stop
        data-bot-fx="0.35"
        data-bot-say="Share a name. They book. Your credit activates. Three steps, zero catches." data-bot-short="Share a name, earn credit"
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <Heading
            align="center"
            eyebrow="How it works"
            title="Send a referral in under a minute"
            subtitle="We handle the outreach, the scheduling, and the audit. You just make the intro."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/20 bg-blue/10 sm:h-16 sm:w-16">
                    <span className="text-xl font-bold text-blue">{step.number}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Referral Form */}
      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Fill it in. We'll handle the outreach. You just wait for the credit." data-bot-short="Fill in, earn credit"
      >
        <Section className="pt-6 pb-12 sm:pb-16 lg:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <Card className="p-5 sm:p-6 md:p-8">
              <div className="mb-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-blue">
                  Send a referral
                </p>
                <h2 className="font-display text-2xl font-semibold leading-[1.05] text-ink sm:text-3xl">
                  Take 60 seconds to make the intro
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">
                  Know a business that could benefit from AI automation? Share their details and
                  we&apos;ll take it from there.
                </p>
              </div>
              <ReferralForm />
            </Card>

            {/* Sidebar — FAQ + what happens next */}
            <div className="space-y-4 lg:space-y-5">
              <Card className="p-5 sm:p-6">
                <h3 className="mb-4 font-display text-lg font-semibold text-ink sm:text-xl">
                  What happens next
                </h3>
                <ol className="space-y-4">
                  {[
                    "We email your contact within one business day.",
                    "They book a free 30-minute workflow audit.",
                    "After the audit, your $500 credit is activated."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              <Card className="p-5 sm:p-6">
                <h3 className="mb-4 font-display text-lg font-semibold text-ink sm:text-xl">FAQ</h3>
                <div className="space-y-4 text-sm text-ink/75">
                  {faqItems.map((item, idx) => (
                    <div key={idx}>
                      <p className="mb-1 font-medium text-ink">{item.question}</p>
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="Questions about credits, eligibility, or timing? Just ask." data-bot-short="Questions? Just ask"
      >
        <CtaBand
          title="Questions about the program?"
          copy="We're happy to explain how credits work, who qualifies, and what happens after you refer."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/book"
          secondaryLabel="Book a call"
        />
      </div>
    </>
  );
}
