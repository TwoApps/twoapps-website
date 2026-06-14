import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
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

  const snapshotCards = [
    {
      title: "What it covers",
      body: service.summary,
      meta: service.audiences.map((audience) => audience.toUpperCase()),
    },
    {
      title: "What you get",
      body: service.deliverables[0] ?? "Workflow discovery and implementation",
      meta: service.deliverables.slice(1, 3),
    },
    {
      title: "How it starts",
      body: "Bounded pilot on one workflow. Expand once it works.",
      meta: [service.process[0] ?? "Audit", service.process[1] ?? "Pilot"],
    },
  ];

  return (
    <>
      <JsonLd
        data={[
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
        data-bot-say="This is the exact service that replaces your most expensive manual workflow."
        data-bot-fx="0.12"
      >
        <PageHero
          eyebrow="Service"
          title={service.title}
          description={service.tagline}
          chips={[
            service.audiences.includes("business")
              ? "For businesses"
              : "For agencies",
            ...(service.audiences.includes("business") &&
            service.audiences.includes("agency")
              ? ["For agencies"]
              : []),
            "UAE-based",
          ]}
        />
      </div>

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <div
        data-bot-stop
        data-bot-say="Built for real work: scope, deliverables, and a pilot path."
        data-bot-fx="0.88"
      >
        <Section>
          <Heading
            eyebrow="Snapshot"
            title="Built for real work, not demos"
            subtitle="What this service covers, what you walk away with, and how a pilot typically starts."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
            {snapshotCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-8 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-10"
              >
                <h3 className="font-display text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                  {card.title}
                </h3>
                <p className="mb-9 mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {card.meta.filter(Boolean).map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/10 bg-ink/[0.03] rounded-full px-2.5 py-1 text-xs text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="Open a section to see benefits, deliverables, and how the project runs."
        data-bot-fx="0.5"
      >
        <DetailPanelsSection
          eyebrow="Detail"
          title="Open the full scope"
          subtitle="Everything below stays crawlable. Open what's relevant."
          items={[
            {
              title: "Overview & benefits",
              summary: "What this fixes first",
              content: (
                <div className="space-y-4 text-sm text-ink/80">
                  <p className="leading-relaxed">{service.summary}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              title: "Deliverables",
              summary: "What you walk away with",
              content: (
                <ul className="space-y-2 text-sm text-ink/80">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-[22px] border border-ink/10 bg-white px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "How a project runs",
              summary: "Pilot first, then scale",
              content: (
                <ol className="space-y-2 text-sm text-ink/80">
                  {service.process.map((step, index) => (
                    <li
                      key={step}
                      className="rounded-[22px] border border-ink/10 bg-white px-4 py-3"
                    >
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink/10 text-xs">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              ),
            },
          ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Most questions are answered here — or we can talk directly."
        data-bot-fx="0.65"
      >
        <FaqSection items={service.faq} />
      </div>
      <div
        data-bot-stop
        data-bot-say="Talk to us and we'll scope the fastest path to a measurable result."
        data-bot-fx="0.35"
      >
        <CtaBand
          title={`Talk to us about ${service.title}`}
          copy="We'll scope a pilot, name the constraints, and map the fastest path to a measurable result."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/book"
          secondaryLabel="Book a call"
        />
      </div>
    </>
  );
}
