import Link from "next/link";

import { Container } from "@/components/ui/container";

const tracks = [
  {
    eyebrow: "For operators",
    title: "Automate the repeat work",
    copy: "Lead routing, weekly reports, onboarding checks, ticket triage — handed to AI, with human approvals where it matters.",
    href: "/services",
    cta: "See the playbook",
    bot: {
      say: "Repeat work goes to me; your people keep the decisions that matter.",
      icons: "inbox,arrowR,check",
      fx: "0.15"
    }
  },
  {
    eyebrow: "For founders",
    title: "Ship an AI-powered v1",
    copy: "Senior engineers build your working product end to end. Clean code, fast handover, no junior teams.",
    href: "/services",
    cta: "Talk to us",
    bot: {
      say: "From idea to working v1 — no junior team, no six-month deck.",
      icons: "code,arrowR,box",
      fx: "0.5"
    }
  },
  {
    eyebrow: "For agencies",
    title: "Deliver AI under your brand",
    copy: "Your client, your relationship. We build the AI layer in the background and disappear at handover.",
    href: "/agency-partners",
    cta: "Partner playbook",
    bot: {
      say: "Your brand, your client, my backend — invisible partner mode.",
      icons: "box,arrowR,eyeoff",
      fx: "0.85"
    }
  }
];

export function HomeTracks() {
  return (
    <section id="tracks" className="pb-28 pt-12 sm:pb-32 lg:pb-36">
      <Container>
        <div
          data-reveal="0"
          className="mb-12 flex flex-wrap items-baseline justify-between gap-6 lg:mb-16"
        >
          <div>
            <div className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.18em] text-blue">
              ( 01 ) — What we do
            </div>
            <h2 className="font-display text-[clamp(38px,4.4vw,68px)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
              Three ways we{" "}
              <em className="font-serif-accent italic font-normal not-italic text-blue">
                plug in
              </em>
            </h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.6] text-ink/58">
            Trusted by operators across the UAE and GCC. We start with one
            workflow, prove it, then expand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <Link
              key={track.title}
              href={track.href}
              data-reveal={index * 120}
              data-bot-stop="1"
              data-bot-say={track.bot.say}
              data-bot-icons={track.bot.icons}
              data-bot-fx={track.bot.fx}
              className="focus-ring group flex flex-col rounded-[22px] border border-ink/10 bg-white p-8 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
                {track.eyebrow}
              </span>
              <h3 className="mt-20 font-display text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:mt-24">
                {track.title}
              </h3>
              <p className="mb-9 mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                {track.copy}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue">
                {track.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
