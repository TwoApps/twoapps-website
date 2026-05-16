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
    eyebrow: "For business teams",
    title: "AI Workflow Automation",
    description:
      "We automate the repetitive parts of your marketing, analytics, and operations work — lead routing, weekly reports, onboarding checks, ticket triage. Your team stops doing the boring half and gets time back for real work.",
    href: "/services",
    cta: "See what we automate"
  },
  {
    eyebrow: "For founders",
    title: "Fast MVP Development",
    description:
      "Need a working product before your next pitch? We build clean, AI-powered v1s in 4 to 6 weeks. Fixed price, fixed timeline, built by senior engineers — not handed off to a junior team.",
    href: "/services",
    cta: "Scope your MVP"
  },
  {
    eyebrow: "For agencies & software houses",
    title: "AI Delivery, Behind Your Brand",
    description:
      "Your client. Our build. We deliver AI projects under your agency's name so you can sell AI work without hiring a full AI team. You keep the relationship, we handle the implementation.",
    href: "/agency-partners",
    cta: "See partnership terms"
  }
];

function HomeHero({ bookingHref }: { bookingHref: string }) {
  return (
    <Section className="pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.015] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <GlowField intensity="soft" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Tag>UAE-based · serving teams worldwide</Tag>
          <h1 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Automate the work your team shouldn&apos;t be doing.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink/75 sm:text-xl">
            We use AI to take the repetitive work off your team&apos;s plate —
            from marketing and analytics to operations and back-office tasks —
            so the people you hired can focus on the work only humans can do.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={bookingHref} size="lg">
              Book a 25-min call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See what we automate
            </Button>
          </div>
          <p className="mt-8 text-sm text-ink/55">
            Pilots start at $8,000 · Live in 2 to 4 weeks · No long contracts
          </p>
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
          title="Three ways we help teams move faster"
          subtitle="Pick the one that matches where you are. Each starts with a small, focused pilot so you can see the work before you commit."
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
          title="A simple way to start"
          subtitle="Four steps, four to six weeks. We focus on one real workflow first, prove it works, then expand from there."
          align="center"
        />
      </div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step, index) => (
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
            Tell us the workflow you hate most.
          </h2>
          <p className="mx-auto mt-6 text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
            We&apos;ll show you what an automated version looks like, what it
            would cost, and how long it would take. No pitch deck. Just a
            useful conversation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={bookingHref} size="lg">
              Book a 25-min call
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Send us a message
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
