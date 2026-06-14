import { Container } from "@/components/ui/container";

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
        Est. weekly savings: 20+ hrs
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
      <em className="font-serif-accent italic font-normal not-italic text-blue">
        hours
      </em>{" "}
      AI should be handling.
    </h1>
  );
}

function PipelineStrip() {
  const steps = ["Lead arrives", "AI drafts", "Human approves", "CRM updated"];

  return (
    <div
      className="animate-hero-in border-t border-ink/14 pb-16 pt-7"
      data-bot-stop="1"
      data-bot-say="This pipeline turns cold leads into booked calls — while you sleep."
      data-bot-icons="inbox,spark,check"
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
    <section id="top" className="relative pt-[88px] sm:pt-[72px]">
      <Container>
        <EyebrowRow />

        <Headline />

        <div
          className="animate-hero-in grid grid-cols-1 items-end gap-8 pb-14 pt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="max-w-[540px] text-[clamp(17px,1.5vw,21px)] leading-[1.6] text-ink/62">
            We build AI workflows that quietly run the repeat work — so your
            people focus on the calls, decisions, and customers only humans can
            handle.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-3.5 lg:justify-end">
            <a
              href={bookingHref}
              className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-[0_12px_35px_rgba(39,66,206,0.22)]"
            >
              Book a call
              <span className="text-[17px] leading-none">→</span>
            </a>
            <a
              href="#process"
              className="focus-ring inline-flex items-center rounded-full border border-ink/25 px-7 py-[15px] text-[15px] font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink/[0.04]"
            >
              See how we work
            </a>
          </div>
        </div>

        <PipelineStrip />
      </Container>
    </section>
  );
}
