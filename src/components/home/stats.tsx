import { Container } from "@/components/ui/container";

const stats = [
  {
    value: (
      <>
        20<span className="text-blue">+</span>
      </>
    ),
    copy: "hours saved per team each week — usually from a single workflow.",
    bot: {
      say: "Reclaim a full day every week — your team will think it's a typo.",
      icons: "clock,arrowR,person",
      fx: "0.15"
    }
  },
  {
    value: (
      <>
        1
        <span className="ml-2 font-serif-accent text-[0.55em] italic text-blue">
          st
        </span>
      </>
    ),
    copy: "workflow is proven with real numbers before we ever expand.",
    bot: {
      say: "One workflow proven first. Then we scale without the theater.",
      icons: "target,chart,check",
      fx: "0.5"
    }
  },
  {
    value: "0",
    copy: "handoffs to junior teams. You work directly with the builders.",
    bot: {
      say: "Zero layers between you and the person shipping your workflow.",
      icons: "shield,person,code",
      fx: "0.85"
    }
  }
];

export function HomeStats() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.copy}
              data-reveal={index * 120}
              {...(stat.bot
                ? {
                    "data-bot-stop": "1",
                    "data-bot-say": stat.bot.say,
                    "data-bot-icons": stat.bot.icons,
                    "data-bot-fx": stat.bot.fx
                  }
                : {})}
              className="border-t border-ink/18 pt-7"
            >
              <div className="font-display text-[clamp(56px,5.4vw,88px)] font-extralight leading-none tracking-[-0.03em] text-ink">
                {stat.value}
              </div>
              <p className="mt-4 max-w-[280px] text-[15px] leading-[1.55] text-ink/58">
                {stat.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
