import { globalPartnerRegions } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Agency Partners",
  description:
    "White-label AI implementation partner for software houses and agencies. TwoApps helps you deliver AI workflows, AI features, and internal tools under your brand — without hiring a full AI team.",
  canonicalPath: "/agency-partners",
  keywords: [
    "white label ai partner",
    "agency ai implementation partner",
    "software house AI delivery partner"
  ],
  ogImage: "/og-default.svg"
});

const whyPartnerCards = [
  {
    label: "Ownership",
    title: "Keep the client. Keep the credit. Keep the margin.",
    body:
      "Your brand stays front and center. We work behind the scenes — or as a named extension of your team — so you keep the relationship and the P&L.",
    meta: ["White-label", "NDA-friendly", "Co-branded option"]
  },
  {
    label: "Capacity",
    title: "Add senior AI delivery overnight",
    body:
      "Skip the six-month hiring cycle. Get Claude, Claude Code, AI workflows, and product features shipped by a team that already does this every day.",
    meta: ["Claude / Claude Code", "AI workflows", "AI features"]
  },
  {
    label: "Growth",
    title: "Turn AI requests into a repeatable revenue line",
    body:
      "Start with one pilot. Prove the model with a real client workflow, then package it into a service you can sell again and again.",
    meta: ["Pilot first", "Retainer scale", "New revenue"]
  }
];

const whoItsForCards = [
  {
    label: "Software houses",
    title: "Product teams under AI feature pressure",
    body:
      "You're shipping web and mobile products, and clients now expect AI inside them. We build the AI layer while your team owns the roadmap.",
    meta: ["Web / mobile products", "AI feature delivery", "Internal tooling"]
  },
  {
    label: "Digital agencies",
    title: "Agencies with clients asking for AI",
    body:
      "Marketing, ops, and service agencies that want to offer automation, AI assistants, and workflow acceleration without learning it all from scratch.",
    meta: ["Automation", "AI assistants", "Workflow acceleration"]
  },
  {
    label: "Teams scaling carefully",
    title: "Not ready to hire AI engineers full-time?",
    body:
      "Hire the capability before you hire the headcount. We act as your specialist AI bench until the volume justifies an in-house team.",
    meta: ["Specialist bench", "Flexible capacity", "Lower risk"]
  }
];

const howItWorksSteps = [
  {
    step: "01",
    label: "Sprint",
    title: "AI Capability Sprint",
    body:
      "In one focused week we define your partner model, package your first offer, and set up the delivery patterns your team will reuse.",
    meta: ["1 week", "Enablement", "Packaging"]
  },
  {
    step: "02",
    label: "Pilot",
    title: "White-Label Pilot",
    body:
      "We deliver one real client workflow or AI feature under your brand. You see the quality, the process, and the client reaction before committing.",
    meta: ["2-4 weeks", "Real client work", "Proof of model"]
  },
  {
    step: "03",
    label: "Scale",
    title: "Monthly Delivery Capacity",
    body:
      "Move to a retainer for ongoing AI backlog, escalation support, and new client work — without adding permanent headcount.",
    meta: ["Ongoing capacity", "Backlog support", "Client expansion"]
  }
];

function ValueCard({
  label,
  title,
  body,
  meta = []
}: {
  label?: string;
  title: string;
  body: string;
  meta?: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10">
      {label ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue">{label}</p>
      ) : null}
      <h3 className="font-display text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[27px]">
        {title}
      </h3>
      <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">{body}</p>
      {meta.length ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {meta.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function StepCard({
  step,
  label,
  title,
  body,
  meta
}: {
  step: string;
  label: string;
  title: string;
  body: string;
  meta: string[];
}) {
  return (
    <div className="relative flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue">{label}</p>
        <span className="font-display text-3xl font-semibold leading-none text-ink/10 sm:text-4xl">
          {step}
        </span>
      </div>
      <h3 className="mt-4 font-display text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[27px]">
        {title}
      </h3>
      <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">{body}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {meta.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AgencyPartnersPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Agency Partners", path: "/agency-partners" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Partner with us and your clients get an AI delivery arm that shows up ready to ship." data-bot-short="Your AI delivery arm"
      >
        <PageHero
          eyebrow="Agency Partners"
          title="Add an AI delivery arm to your agency — without hiring a team"
          description="White-label AI implementation for software houses and digital agencies. You keep the client relationship; we ship the AI workflows, features, and internal tools behind the scenes."
          chips={["White-label", "Co-delivery", "UAE-based / global"]}
          mobileChips={[
              "White-label delivery available",
              "Co-delivery with partners",
              "UAE-based and global delivery"
            ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.25"
        data-bot-say="Keep the client, keep the credit, and keep the margin. We just make you look like the AI expert." data-bot-short="Keep client, credit, margin"
      >
        <Section>
          <Heading
            eyebrow="Why partner"
            title="Ship AI work faster, protect your margins, keep the credit"
            subtitle="Most agencies are being asked for AI but don't have the bench to deliver. We act as your invisible AI team — so you can say yes to more client work."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {whyPartnerCards.map((card) => (
              <ValueCard key={card.title} {...card} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.75"
        data-bot-say="If clients are asking for AI and your team is stretched, you're exactly who this is for." data-bot-short="Built for stretched agencies"
      >
        <Section className="bg-cream/30">
          <Heading
            eyebrow="Who it's for"
            title="Built for agencies already shipping product work"
            subtitle="You don't need an AI department. You need a reliable partner that can slot into your delivery process."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {whoItsForCards.map((card) => (
              <ValueCard key={card.title} {...card} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.6"
        data-bot-say="Sprint, pilot, scale. One proven path from first conversation to recurring AI revenue." data-bot-short="Sprint, pilot, scale"
      >
        <Section>
          <Heading
            eyebrow="How it works"
            title="Sprint. Pilot. Scale."
            subtitle="A simple three-step path from first conversation to recurring AI delivery capacity."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Open any panel to see what you can resell, who it's for, and how the commercial model works." data-bot-short="What you can resell"
      >
        <DetailPanelsSection
          eyebrow="Details"
          title="What you can resell and how we work together"
          subtitle="The practical stuff: capabilities, ideal fit, commercial terms, and where we operate."
          items={[
            {
              title: "What you can resell",
              summary: "Core white-label AI delivery capabilities",
              content: (
                <ul className="space-y-2 text-sm text-ink/78">
                  {[
                    "White-label AI implementation under your brand",
                    "Claude / Claude Code workflow setup and playbooks",
                    "AI feature delivery inside client products",
                    "Internal agency automation and delivery acceleration",
                    "AI pilot support for pre-sales and scope validation",
                    "Retainer-based AI capacity for ongoing client work"
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
                    "Software houses delivering web/mobile products",
                    "Agencies with active client demand for AI automation and features",
                    "Teams that need specialist AI delivery before hiring full-time"
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
              title: "Commercial model",
              summary: "Pilot first, then scale with a retainer",
              content: (
                <p className="text-sm leading-relaxed text-ink/78">
                  Every partnership starts with a paid pilot so both sides can validate fit, quality,
                  and process. After a successful pilot, most partners move to a monthly retainer that
                  gives predictable AI delivery capacity. You set the client price; we charge a
                  transparent delivery fee. Your margin stays yours.
                </p>
              )
            },
            {
              title: "Where this works best",
              summary: "Regions we currently support for white-label delivery",
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
        data-bot-fx="0.5"
        data-bot-say="One pilot. One repeatable model. One new revenue line by next quarter." data-bot-short="One pilot, new revenue"
      >
        <CtaBand
          title="Ready to add an AI delivery arm?"
          copy="Book a 20-minute call. We'll map your first pilot and show you exactly how to position it with your clients."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/regions"
          secondaryLabel="See our regions"
        />
      </div>
    </>
  );
}
