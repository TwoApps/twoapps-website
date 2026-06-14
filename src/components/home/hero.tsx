import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

function EyebrowRow() {
  return (
    <div
      className="flex animate-hero-in items-center gap-4"
      style={{ animationDelay: "0.05s" }}
    >
      <span className="h-[7px] w-[7px] shrink-0 animate-soft-pulse rounded-full bg-blue" />
      <span className="whitespace-nowrap font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink/55">
        AI Automation Studio — Dubai, UAE
      </span>
      <span className="hidden h-px flex-1 bg-ink/14 sm:block" />
      <span className="whitespace-nowrap font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink/40">
        Typical first win: 20+ hours back per week
      </span>
    </div>
  );
}

function Headline() {
  return (
    <h1
      className="animate-hero-in font-display text-[clamp(56px,8.2vw,132px)] font-medium leading-[0.98] tracking-[-0.04em] text-ink"
      style={{ animationDelay: "0.16s" }}
    >
      Give your team back the{" "}
      <em className="font-serif-accent italic font-normal text-blue">
        hours
      </em>{" "}
      that grow your business.
    </h1>
  );
}

function PipelineStrip() {
  const steps = ["Lead arrives", "AI drafts", "Human approves", "CRM updated"];

  return (
    <div
      className="animate-hero-in border-t border-ink/14 pb-16 pt-7"
      data-bot-stop="1"
      data-bot-say="This pipeline turns cold leads into booked calls — while you sleep." data-bot-short="Cold leads to booked calls"
      data-bot-fx="0.06"
      style={{ animationDelay: "0.45s" }}
    >
      <div className="relative mx-1 my-2.5 h-px bg-ink/12">
        <span className="absolute top-[-3px] h-[7px] w-[7px] animate-pipe-dot rounded-full bg-blue shadow-[0_0_0_4px_rgba(39,66,206,0.14)]" />
      </div>
      <div className="flex justify-between gap-3">
        {steps.map((step) => (
          <span
            key={step}
            className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/42"
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomeHero({ bookingHref }: { bookingHref: string }) {
  return (
    <section id="top" className="relative pt-10 sm:pt-12 lg:pt-14">
      <Container>
        <EyebrowRow />

        <Headline />

        <div
          className="animate-hero-in grid grid-cols-1 items-end gap-8 pb-14 pt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="max-w-[540px] text-[clamp(17px,1.5vw,21px)] leading-[1.6] text-ink/62">
            TwoApps builds AI workflows that quietly run the repeat work — lead
            routing, reports, onboarding, triage — so your people stay focused on
            customers, decisions, and the work only they can do.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-3.5 lg:justify-end">
            <Button href={bookingHref} size="lg">
              Book a free call
              <span className="text-[17px] leading-none">→</span>
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              See how we work
            </Button>
          </div>
        </div>

        <PipelineStrip />
      </Container>
    </section>
  );
}
