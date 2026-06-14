import { buildMetadata, organizationSchema, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { StickyScene } from "@/components/motion/sticky-scene";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

export const metadata = {
  ...buildMetadata({
    title: "AI Workflow Automation New Zealand | Built for Kiwi Business",
    description:
      "Practical AI workflows for New Zealand businesses. Automate follow-ups, reporting, and handoffs so your team can do more without hiring. Free 30-minute workflow review.",
    canonicalPath: "/nz",
    keywords: [
      "AI automation New Zealand",
      "workflow automation NZ",
      "Kiwi business automation",
      "AI workflows New Zealand",
      "business process automation NZ",
      "remote automation New Zealand"
    ],
    ogImage: "/og-default.svg"
  }),
  alternates: {
    canonical: "/nz",
    languages: {
      "en-nz": "/nz",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-ae": "/ae",
      "en-eu": "/eu",
      "x-default": "/"
    }
  }
};

const faqItems = [
  {
    question: "Do you work with New Zealand timezone and tools?",
    answer:
      "Yes. We schedule around NZST/NZDT, and we integrate with the tools Kiwi businesses already use — Xero, HubSpot, Salesforce, Slack, Google Workspace, Microsoft 365, and most industry-specific platforms."
  },
  {
    question: "How long before we see results?",
    answer:
      "Most teams see their first workflow go live within 3–5 weeks. Quick wins like automated follow-ups or lead qualification often start saving hours within days of deployment."
  },
  {
    question: "Is this only for large companies?",
    answer:
      "Not at all. We work with mid-market Kiwi businesses and growing teams who are ready to remove repetitive work. If you have a process that eats up hours every week, it&rsquo;s worth automating."
  },
  {
    question: "What does a workflow automation project cost?",
    answer:
      "It depends on the scope. We start with a free 30-minute review so you understand the ROI before spending anything. Projects are typically scoped as a fixed build with optional ongoing tuning."
  },
  {
    question: "Do we need to replace our existing software?",
    answer:
      "No. We design workflows around your current stack and connect the tools you already have. The goal is to make everything work together, not force a migration."
  }
];

export default function NewZealandPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "New Zealand", path: "/nz" }
          ]),
          serviceSchema({
            name: "TwoApps New Zealand",
            description:
              "AI workflow automation tailored for New Zealand businesses — from lead follow-up and reporting to internal handoffs and customer onboarding.",
            path: "/nz",
            serviceType: "AI Workflow Automation",
            areaServed: ["New Zealand"]
          })
        ]}
      />

      <ScrollBot />

      <PageHero
        eyebrow="Kiwi Business, Global Capability"
        title="AI automation that helps your NZ team punch above its weight"
        description="Hiring is tough, margins are tight, and the admin never stops. We build practical AI workflows that let your existing team do more of the work that actually grows the business — without the burnout."
        chips={["NZ timezone support", "Remote delivery", "No lock-in contracts"]}
      />

      <StickyScene
        eyebrow="Why New Zealand"
        frames={[
          {
            label: "The opportunity",
            headline: "Small market, big ambition",
            subline:
              "New Zealand businesses punch above their weight every day. But a small talent pool and global competition mean you can&rsquo;t simply hire your way out of growth."
          },
          {
            label: "The challenge",
            headline: "The hidden cost of busywork",
            subline:
              "Manual follow-ups, data entry, reporting, and handoffs between regional offices quietly eat the hours your team should spend on customers and strategy."
          },
          {
            label: "The edge",
            headline: "Efficiency is your unfair advantage",
            subline:
              "We design AI workflows around the way Kiwi businesses actually work — practical, cost-effective, and available in your timezone."
          }
        ]}
      />

      <Section>
        <Heading
          eyebrow="What Kiwi businesses face"
          title="Local challenges, global pressure"
          subtitle="You don&rsquo;t need another generic SaaS subscription. You need workflows that fit the reality of running a business in New Zealand."
          align="center"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <Card>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">01</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Hard to hire, harder to keep</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              NZ&rsquo;s talent market is tight. Automation handles repetitive work so your best people stay focused on the
              high-value work that keeps them engaged.
            </p>
          </Card>
          <Card>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">02</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Regional teams, scattered systems</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              From Auckland to Invercargill, disconnected tools create gaps. We connect your stack so information flows
              smoothly between offices.
            </p>
          </Card>
          <Card>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">03</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Competing with bigger budgets</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Overseas competitors can out-spend you. Speed, consistency, and customer responsiveness level the playing
              field.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-cream/30">
        <Heading
          eyebrow="How we work"
          title="Three steps to your first automated workflow"
          subtitle="No jargon, no lengthy procurement. Just a practical plan built around your business."
          align="center"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          <Card className="relative">
            <span className="absolute right-5 top-5 rounded-full border border-ink/10 bg-cream px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue">
              30 min
            </span>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">Step 1</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Free workflow review</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              We map your biggest time sinks and identify quick wins. You leave with a clear plan, whether you work with
              us or not.
            </p>
          </Card>
          <Card className="relative">
            <span className="absolute right-5 top-5 rounded-full border border-ink/10 bg-cream px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue">
              3–5 weeks
            </span>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">Step 2</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Design and build</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              We build your workflows remotely around your existing tools. No travel costs, no disruption, no forced
              migrations.
            </p>
          </Card>
          <Card className="relative">
            <span className="absolute right-5 top-5 rounded-full border border-ink/10 bg-cream px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue">
              2 weeks
            </span>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-blue">Step 3</p>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">Deploy and refine</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Go live with your team, get training, and let us monitor and tune the workflow until it runs like clockwork.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Kiwi success stories"
          title="What happens when busywork disappears"
          align="center"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <Card>
            <blockquote className="mb-6 text-base italic leading-relaxed text-ink/80 sm:text-lg">
              &ldquo;Peak-season admin used to drown us. TwoApps automated 80% of bookings. Our team finally gets to
              focus on guests again.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                E
              </div>
              <div>
                <p className="font-semibold text-ink">Emma Richardson</p>
                <p className="text-sm text-ink/60">Owner, Bay of Islands Lodge</p>
                <p className="mt-1 text-xs text-blue">80% reduction in manual booking tasks</p>
              </div>
            </div>
          </Card>
          <Card>
            <blockquote className="mb-6 text-base italic leading-relaxed text-ink/80 sm:text-lg">
              &ldquo;Coordinating farms and head office was chaos. The automation TwoApps built gives us real-time
              visibility without the daily check-ins.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                J
              </div>
              <div>
                <p className="font-semibold text-ink">John Walker</p>
                <p className="text-sm text-ink/60">Operations Manager, Canterbury AgriCo</p>
                <p className="mt-1 text-xs text-blue">Real-time visibility across the operation</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title="Questions Kiwi businesses ask"
        items={faqItems}
      />

      <CtaBand
        title="Ready to see what&rsquo;s possible?"
        copy="Book a free 30-minute workflow review. We&rsquo;ll map your biggest time sinks and show you exactly where automation can help your team."
        primaryHref="/book"
        primaryLabel="Book a free review"
        secondaryHref="/contact"
        secondaryLabel="Send a message"
      />
    </>
  );
}
