import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/content";
import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata(service.seo);
}

const audienceLabel: Record<string, string> = {
  business: "Business teams",
  agency: "Agencies & software houses",
};

const mobileAudienceLabel: Record<string, string> = {
  business: "Built for UAE business teams",
  agency: "Built for UAE agency teams",
};

const audienceDescription: Record<string, string> = {
  business:
    "Operations, support, finance, and delivery teams that are tired of repeatable manual work eating up their week.",
  agency:
    "Software houses and digital agencies that want to ship AI projects without waiting months to hire a specialist team.",
};

function humanizeAudienceList(audiences: string[]) {
  const labels = audiences
    .map((key) => audienceLabel[key] ?? key)
    .filter(Boolean);
  if (labels.length <= 1) return labels[0] ?? "";
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
}

function benefitToPainPoint(benefit: string): string {
  const map: Record<string, string> = {
    "Reduce manual work and turnaround time on repeat tasks":
      "Your team is still doing the same tasks by hand every day",
    "Keep output quality more consistent across the team":
      "Quality varies depending on who picks up the task",
    "Add approval steps and exception handling where people need to stay involved":
      "You want AI help, but not without human oversight",
    "Connect workflows to your CRM, ERP, email, or internal tools":
      "Your tools don't talk to each other, so work gets duplicated",
    "Speed up engineering and delivery work with repeatable AI-assisted steps":
      "Engineering work is slowing down on tasks that should be repeatable",
    "Reduce inconsistent outputs across people and projects":
      "Different team members get very different results from the same AI prompt",
    "Turn repeat tasks into playbooks your team can actually follow":
      "AI use is ad hoc — nobody shares what actually works",
    "Improve quality with review checkpoints and clear rules":
      "AI-generated work needs extra review because the rules aren't clear",
    "Start selling AI projects faster without delaying on hiring":
      "You want to offer AI services but can't hire fast enough",
    "Win more scopes with credible implementation support":
      "Clients ask for AI, but you aren't sure you can deliver it confidently",
    "Keep the client relationship while we deliver the AI layer":
      "You don't want to hand the client relationship to an outside vendor",
    "Add flexible delivery capacity for pilots and backlogs":
      "Your team is at capacity and AI work keeps getting pushed back",
  };
  return (
    map[benefit] ??
    benefit.replace(/^(Reduce|Speed up|Improve|Add|Turn|Start|Keep|Connect)/, "")
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const audienceList = humanizeAudienceList(service.audiences);

  const snapshotCards = [
    {
      title: "What this is",
      body: service.summary,
      tags: ["Practical AI workflows", "UAE-based delivery"],
    },
    {
      title: "Who it's for",
      body: audienceList
        ? `Built for ${audienceList.toLowerCase()}. ${service.audiences
            .map((key) => audienceDescription[key])
            .join(" ")}`
        : service.summary,
      tags: service.audiences.map((key) => audienceLabel[key] ?? key),
    },
    {
      title: "How it starts",
      body: `We begin with ${(
        service.process[0] ?? "a quick audit"
      ).toLowerCase()} and run a bounded pilot on one real workflow — so you see measurable value before scaling further.`,
      tags: service.process.slice(0, 2),
    },
  ];

  const detailItems = [
    {
      title: "What this service includes",
      summary: "The full scope at a glance",
      content: (
        <div className="space-y-5 text-sm leading-relaxed text-ink/80 sm:text-base">
          <p>{service.summary}</p>
          <p>
            It is designed for{" "}
            <span className="font-medium text-ink">{audienceList}</span> and
            built around your existing tools, so the workflow fits how your team
            already works.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.benefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "The pain it solves",
      summary: "What stops working when work is manual",
      content: (
        <ul className="space-y-3 text-sm text-ink/80 sm:text-base">
          {service.benefits.map((benefit) => {
            const pain = benefitToPainPoint(benefit);
            return (
              <li
                key={benefit}
                className="flex flex-col gap-1 rounded-[22px] border border-ink/10 bg-paper px-4 py-3 sm:flex-row sm:items-start sm:gap-3"
              >
                <span className="font-medium text-ink/70">{pain}</span>
                <span className="hidden text-ink/30 sm:inline">→</span>
                <span className="text-ink">{benefit}</span>
              </li>
            );
          })}
        </ul>
      ),
    },
    {
      title: "What you walk away with",
      summary: "Deliverables and handover",
      content: (
        <ul className="space-y-3 text-sm text-ink/80 sm:text-base">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "How a project runs",
      summary: "Pilot first, then scale",
      content: (
        <ol className="space-y-3 text-sm text-ink/80 sm:text-base">
          {service.process.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
            >
              <span className="mr-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/10 text-xs font-medium text-ink/80">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: service.title,
            description: service.summary,
            path: `/services/${service.slug}`,
            serviceType: service.title,
          }),
        ]}
      />
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-say={`This is the service that turns ${service.title.toLowerCase()} from an idea into a working pilot.`}
        data-bot-fx="0.12"
      >
        <PageHero
          eyebrow="Service"
          title={service.title}
          description={service.tagline}
          chips={[
            ...service.audiences.map((key) => audienceLabel[key] ?? key),
            "UAE-based",
          ]}
          mobileChips={[
            ...service.audiences.map((key) => mobileAudienceLabel[key] ?? key),
            "Based in the UAE",
          ]}
        />
      </div>

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <div
        data-bot-stop
        data-bot-say="Here is the short version: what it is, who it is for, and how we start." data-bot-short="The short version"
        data-bot-fx="0.88"
      >
        <Section>
          <Heading
            eyebrow="At a glance"
            title="Built for real work, not slide decks"
            subtitle="A practical service that replaces your most expensive manual workflow with a measurable, monitored AI pilot."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {snapshotCards.map((card) => (
              <Card
                key={card.title}
                className="flex flex-col p-6 sm:p-7 md:p-8"
              >
                <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mb-7 mt-3 text-[15px] leading-[1.6] text-ink/58 sm:mb-8">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {card.tags.filter(Boolean).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="Open any section to see the pain points, deliverables, and how the project runs." data-bot-short="Pain points and deliverables"
        data-bot-fx="0.5"
      >
        <DetailPanelsSection
          eyebrow="Details"
          title="See the full picture"
          subtitle="Everything below is crawlable and expandable. Open the sections that matter to you."
          items={detailItems}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Most questions are answered here — or we can talk directly." data-bot-short="Most questions answered here"
        data-bot-fx="0.65"
      >
        <FaqSection
          items={service.faq}
          title="Questions we hear a lot"
          eyebrow="FAQ"
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Book a call and we will scope the fastest path to a measurable result." data-bot-short="Book your scoping call"
        data-bot-fx="0.35"
      >
        <CtaBand
          title={`Ready to explore ${service.title}?`}
          copy="Tell us which workflow is hurting most. We'll map a bounded pilot, name the constraints, and show you the fastest path to a measurable result."
          primaryHref="/contact"
          primaryLabel="Start the conversation"
          secondaryHref="/book"
          secondaryLabel="Book a call"
        />
      </div>
    </>
  );
}
