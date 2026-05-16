import { globalPartnerRegions } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";

export const metadata = buildMetadata({
  title: "Agency Partners",
  description:
    "UAE-based white-label AI implementation partner for software houses and agencies. TwoApps helps teams deliver AI workflows, AI features, and internal tools without hiring a full AI team first.",
  canonicalPath: "/agency-partners",
  keywords: ["white label ai partner", "agency ai implementation partner", "software house AI delivery partner"],
  ogImage: "/og-default.svg"
});

const partnerFrames: StickySceneFrame[] = [
  {
    label: "Model",
    headline: "Your agency owns the client. TwoApps ships the AI layer.",
    subline: "White-label or co-delivery support for AI workflows, AI features, and delivery systems your team can reuse."
  },
  {
    label: "Fit",
    headline: "Best for agencies already shipping product work",
    subline: "Add AI implementation capacity before hiring a full in-house AI team."
  },
  {
    label: "Commercial",
    headline: "Lead with specialized execution, not cheap outsourcing",
    subline: "Position the partnership as cost-efficient senior AI delivery and faster time-to-value."
  }
];

const offerFrames: StickySceneFrame[] = [
  {
    label: "Sprint",
    headline: "AI Capability Sprint",
    subline: "Define your partner model, offers, and first delivery patterns in one focused week."
  },
  {
    label: "Pilot",
    headline: "White-Label Pilot",
    subline: "Deliver one real client workflow or feature to prove the model."
  },
  {
    label: "Retainer",
    headline: "Monthly AI Delivery Capacity",
    subline: "Ongoing implementation bandwidth for AI-heavy backlogs and client expansion."
  }
];

export default function AgencyPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Agency Partners"
        title="White-label AI your agency can ship"
        description="You own the client. We ship the AI layer. Resell with confidence."
        chips={["White-label", "Co-delivery", "UAE-based / global"]}
      />

      <StickyScene
        eyebrow="Partner Model"
        frames={partnerFrames}
        heightMultiplier={3}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "White-label implementation",
                body: "TwoApps executes the AI automation and AI feature layer while your team keeps client ownership and account continuity.",
                meta: ["White-label", "Co-delivery", "NDA-friendly"]
              },
              {
                title: "Claude / Claude Code workflow support",
                body: "Claude and Claude Code workflow setup, playbooks, and repeatable delivery patterns for your team.",
                meta: ["Claude Code", "Playbooks", "Acceleration"]
              },
              {
                title: "AI capability expansion",
                body: "Use pilots and retainers to add AI services without immediate hiring pressure or risky overpromising.",
                meta: ["Pilot first", "Retainer model", "Client growth"]
              }
            ]}
          />
        }
      />

      <StickyScene
        eyebrow="Productized Offers"
        frames={offerFrames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "Capability Sprint",
                body: "One week setup to define partner model, offers, and first AI delivery patterns.",
                meta: ["1 week", "Enablement", "Packaging"]
              },
              {
                title: "White-Label Pilot",
                body: "2-4 week pilot on a real client workflow or AI feature implementation.",
                meta: ["2-4 weeks", "Proof", "Repeatability"]
              },
              {
                title: "Monthly Retainer",
                body: "Ongoing AI implementation capacity for backlog, escalation support, and new client work.",
                meta: ["Capacity", "Backlog", "Expansion"]
              }
            ]}
          />
        }
      />

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
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
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
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-ink/72"
                  >
                    {region}
                  </span>
                ))}
              </div>
            )
          }
        ]}
      />

      <CtaBand
        title="Start with one pilot"
        copy="Bring us a real client workflow. We'll deliver it white-label and you'll have a repeatable model after one engagement."
        primaryHref="/contact"
        primaryLabel="Book a call"
        secondaryHref="/regions/white-label-ai-partner-software-houses"
        secondaryLabel="See partner region"
      />
    </>
  );
}
