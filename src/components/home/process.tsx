import { Container } from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "Audit",
    copy: "We map the workflow — where it slows down, where it breaks, and where AI actually helps — then pick the highest-leverage starting point.",
    bot: {
      say: "First I map every leak — politely, but thoroughly.",
      icons: "eye,arrowR,target",
      fx: "0.1"
    }
  },
  {
    number: "02",
    title: "Pilot",
    copy: "We build one real workflow with a clear goal, so you can measure the value in weeks instead of quarters.",
    bot: {
      say: "Then we ship one measurable win before anyone asks for a roadmap.",
      icons: "target,chart,check",
      fx: "0.5"
    }
  },
  {
    number: "03",
    title: "Stabilize",
    copy: "Monitoring, guardrails, and fallback behavior — so the workflow keeps running reliably long after we step back.",
    bot: {
      say: "Then I run it 24/7 so your team can finally sleep in.",
      icons: "pulse,shield,clock",
      fx: "0.9"
    }
  }
];

export function HomeProcess() {
  return (
    <section id="process" className="border-t border-ink/12 bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div data-reveal="0" className="mb-16 lg:mb-20">
          <div className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.18em] text-blue">
            ( 02 ) — How we work
          </div>
          <h2 className="font-display text-[clamp(38px,4.4vw,68px)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
            One workflow,{" "}
            <em className="font-serif-accent italic font-normal text-blue">
              proven first.
            </em>
            <br />
            Then the next.
          </h2>
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-reveal={index * 80}
              data-bot-stop="1"
              data-bot-say={step.bot.say}
              data-bot-icons={step.bot.icons}
              data-bot-fx={step.bot.fx}
              className="grid grid-cols-1 items-baseline gap-6 border-t border-ink/12 py-11 transition-colors duration-300 hover:bg-blue/[0.025] sm:grid-cols-[120px_1fr] md:grid-cols-[180px_1fr_1.4fr] md:gap-10"
            >
              <span className="font-display text-6xl font-extralight leading-none tracking-[-0.02em] text-ink/25 sm:text-7xl">
                {step.number}
              </span>
              <h3 className="font-display text-[30px] font-semibold leading-none tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="max-w-[520px] text-base leading-[1.65] text-ink/58">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
