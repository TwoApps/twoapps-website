import Link from "next/link";

import { processSteps } from "@/content";
import { GlowField } from "@/components/motion/glow-field";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

type HomeCinematicExperienceProps = {
  bookingHref: string;
};

const homeServices = [
  {
    eyebrow: "For operators",
    title: "Automate the repeat work",
    description:
      "Lead routing, weekly reports, onboarding checks, ticket triage — handed to AI with human approvals where it matters.",
    href: "/services",
    cta: "See the playbook"
  },
  {
    eyebrow: "For founders",
    title: "Ship an AI-powered v1",
    description:
      "Senior engineers build your working product end to end. Clean code, fast handover, no junior teams.",
    href: "/services",
    cta: "Talk to us"
  },
  {
    eyebrow: "For agencies",
    title: "Deliver AI under your brand",
    description:
      "Your client, your relationship. We build the AI layer in the background and disappear at handover.",
    href: "/agency-partners",
    cta: "See partner playbook"
  }
];

function HomeHero({ bookingHref }: { bookingHref: string }) {
  return (
    <Section className="pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.015] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <GlowField intensity="soft" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Tag>UAE-based AI automation partner</Tag>
          <h1 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Give your team back the hours AI should be handling.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink/75 sm:text-xl">
            We build AI workflows that quietly run the repeat work — so your people focus on the calls, decisions, and customers only humans can handle.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={bookingHref} size="lg">
              Book a call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See the playbook
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function HomeServices() {
  return (
    <Section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Heading
          eyebrow="What we do"
          title="Three ways we plug in"
          subtitle="Trusted by operators across the UAE and GCC. Pick the track that fits today — we start with one workflow, prove it, then expand."
          align="center"
        />
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {homeServices.map((service) => (
          <Card key={service.title} className="flex h-full flex-col p-8 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-1/85">
              {service.eyebrow}
            </p>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              {service.title}
            </h3>
            <p className="mt-5 flex-1 text-base leading-relaxed text-ink/75">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-1 transition-colors hover:text-accent-1/80"
            >
              {service.cta}
              <span aria-hidden>→</span>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HomeProcess() {
  return (
    <Section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Heading
          eyebrow="How we work"
          title="How a project runs"
          subtitle="One workflow, proven first. Then the next. No multi-month discovery loops."
          align="center"
        />
      </div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {processSteps.slice(0, 3).map((step, index) => (
          <Card key={step.title} className="h-full p-7 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-1/20 bg-accent-1/[0.06] font-display text-xl text-accent-1">
              {index + 1}
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {step.copy}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HomeClosingCta({ bookingHref }: { bookingHref: string }) {
  return (
    <Section className="pb-24 pt-12 sm:pb-32 sm:pt-16 lg:pb-40 lg:pt-20">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <GlowField intensity="soft" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Tell us the workflow that wastes most time.
          </h2>
          <p className="mx-auto mt-6 text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
            We&apos;ll show you what the automated version looks like and what it would take to ship. No deck. Useful conversation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={bookingHref} size="lg">
              Book a call
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CinematicHomeExperience({ bookingHref }: HomeCinematicExperienceProps) {
  return (
    <div className="relative">
      <HomeHero bookingHref={bookingHref} />
      <HomeServices />
      <HomeProcess />
      <HomeClosingCta bookingHref={bookingHref} />
    </div>
  );
}
