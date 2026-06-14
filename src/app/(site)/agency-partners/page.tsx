import { Fragment } from "react";

import { globalPartnerRegions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Agency Partners",
  description:
    "UAE-based white-label AI implementation partner for software houses and agencies. TwoApps helps teams deliver AI workflows, AI features, and internal tools without hiring a full AI team first.",
  canonicalPath: "/agency-partners",
  keywords: ["white label ai partner", "agency ai implementation partner", "software house AI delivery partner"],
  ogImage: "/og-default.svg"
});

const partnerPairs = [
  {
    frame: {
      label: "Model",
      headline: "Your agency owns the client. TwoApps ships the AI layer.",
      subline:
        "White-label or co-delivery support for AI workflows, AI features, and delivery systems your team can reuse."
    },
    visual: {
      title: "White-label implementation",
      body: "TwoApps executes the AI automation and AI feature layer while your team keeps client ownership and account continuity.",
      meta: ["White-label", "Co-delivery", "NDA-friendly"]
    }
  },
  {
    frame: {
      label: "Fit",
      headline: "Best for agencies already shipping product work",
      subline: "Add AI implementation capacity before hiring a full in-house AI team."
    },
    visual: {
      title: "Claude / Claude Code workflow support",
      body: "Claude and Claude Code workflow setup, playbooks, and repeatable delivery patterns for your team.",
      meta: ["Claude Code", "Playbooks", "Acceleration"]
    }
  },
  {
    frame: {
      label: "Commercial",
      headline: "Lead with specialized execution, not cheap outsourcing",
      subline: "Position the partnership as cost-efficient senior AI delivery and faster time-to-value."
    },
    visual: {
      title: "AI capability expansion",
      body: "Use pilots and retainers to add AI services without immediate hiring pressure or risky overpromising.",
      meta: ["Pilot first", "Retainer model", "Client growth"]
    }
  }
];

const offerPairs = [
  {
    frame: {
      label: "Sprint",
      headline: "AI Capability Sprint",
      subline: "Define your partner model, offers, and first delivery patterns in one focused week."
    },
    visual: {
      title: "Capability Sprint",
      body: "One week setup to define partner model, offers, and first AI delivery patterns.",
      meta: ["1 week", "Enablement", "Packaging"]
    }
  },
  {
    frame: {
      label: "Pilot",
      headline: "White-Label Pilot",
      subline: "Deliver one real client workflow or feature to prove the model."
    },
    visual: {
      title: "White-Label Pilot",
      body: "2-4 week pilot on a real client workflow or AI feature implementation.",
      meta: ["2-4 weeks", "Proof", "Repeatability"]
    }
  },
  {
    frame: {
      label: "Retainer",
      headline: "Monthly AI Delivery Capacity",
      subline: "Ongoing implementation bandwidth for AI-heavy backlogs and client expansion."
    },
    visual: {
      title: "Monthly Retainer",
      body: "Ongoing AI implementation capacity for backlog, escalation support, and new client work.",
      meta: ["Capacity", "Backlog", "Expansion"]
    }
  }
];

function FrameCard({
  label,
  headline,
  subline
}: {
  label: string;
  headline: string;
  subline: string;
}) {
  return (
    <div className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">{label}</p>
      <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
        {headline}
      </h3>
      {subline ? <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{subline}</p> : null}
    </div>
  );
}

function VisualCard({
  title,
  body,
  meta = []
}: {
  title: string;
  body: string;
  meta?: string[];
}) {
  return (
    <div className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-6">
      <p className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">{title}</p>
      <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-ink/70">{body}</p>
      {meta.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-xs text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function AgencyPartnersPage() {
  return (
    <Fragment>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Partner with us and your clients get an AI sales rep that never calls in sick."
      >
        <PageHero
          eyebrow="Agency Partners"
          title="White-label AI your agency can ship"
          description="You own the client. We ship the AI layer. Resell with confidence."
          chips={["White-label", "Co-delivery", "UAE-based / global"]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.25"
        data-bot-say="White-label AI means your margins stay yours—and your clients think you're the genius."
      >
        <Section>
          <Heading
            eyebrow="Partner Model"
            title="Your agency owns the client. TwoApps ships the AI layer."
            subtitle="White-label or co-delivery support for AI workflows, AI features, and delivery systems your team can reuse."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {partnerPairs.map((pair) => (
              <div key={pair.frame.label} className="flex flex-col gap-4">
                <FrameCard {...pair.frame} />
                <VisualCard {...pair.visual} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.75"
        data-bot-say="Start with a sprint, prove it with a pilot, then scale revenue without scaling headcount."
      >
        <Section>
          <Heading
            eyebrow="Productized Offers"
            title="Three ways to engage"
            subtitle="Start with a focused sprint, prove the model with a pilot, then scale with ongoing capacity."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {offerPairs.map((pair) => (
              <div key={pair.frame.label} className="flex flex-col gap-4">
                <FrameCard {...pair.frame} />
                <VisualCard {...pair.visual} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.6"
        data-bot-say="We handle the delivery complexity so your account team can focus on bigger retainers."
      >
        <DetailPanelsSection
          eyebrow="Partner Details"
          title="Partnership details"
          items={[
            {
              title: "What you can resell",
              summary: "Core white-label AI delivery capabilities",
              content: (
                <ul className="space-y-2 text-sm text-ink/78">
                  {[
                    "White-label implementation",
                    "Claude / Claude Code workflow setup",
                    "AI feature delivery inside client products",
                    "Internal agency automation and delivery acceleration",
                    "AI pilot support for pre-sales and scope validation",
                    "Retainer-based AI capacity for ongoing work"
                  ].map((item) => (
                    <li key={item} className="rounded-xl border border-ink/10 bg-cream px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "Ideal partners",
              summary: "Who gets the most value from this model",
              content: (
                <ul className="space-y-2 text-sm text-ink/78">
                  {[
                    "Software houses already delivering web/mobile products",
                    "Agencies with client demand for AI automation and AI features",
                    "Teams that need a specialist partner before hiring AI engineers"
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "How to position the partnership",
              summary: "How to position the partnership",
              content: (
                <p className="text-sm leading-relaxed text-ink/78">
                  Lead with <span className="text-ink">specialized AI implementation</span> and{" "}
                  <span className="text-ink">cost-efficient senior delivery</span>, not “cheap outsourcing.” This
                  protects pricing power and positions your agency as the client-facing operator with credible AI
                  execution capacity.
                </p>
              )
            },
            {
              title: "Where this works best",
              summary: "Strong fit for this operating model",
              content: (
                <div className="flex flex-wrap gap-2">
                  {globalPartnerRegions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1.5 text-sm text-ink/72"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="One pilot. One repeatable model. One new revenue line by next quarter."
      >
        <CtaBand
          title="Start with one pilot"
          copy="Bring us a real client workflow. We'll deliver it white-label and you'll have a repeatable model after one engagement."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/regions/white-label-ai-partner-software-houses"
          secondaryLabel="See partner region"
        />
      </div>
    </Fragment>
  );
}
