import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
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
    { name: service.title, path: `/services/${service.slug}` }
  ];

  const serviceFrames: StickySceneFrame[] = [
    {
      label: "Overview",
      headline: service.title,
      subline: service.tagline
    },
    {
      label: "Outcomes",
      headline: "Built for production workflows, not demos",
      subline: service.benefits[0] ?? service.summary
    },
    {
      label: "Process",
      headline: "Pilot first, then harden and expand",
      subline: service.process[0] ?? "Start with a bounded pilot and scale after measurable results."
    }
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
            serviceType: service.title
          })
        ]}
      />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.tagline}
        chips={[
          service.audiences.includes("business") ? "Business" : "Agency",
          service.audiences.includes("agency") && service.audiences.includes("business") ? "Agency" : "Specialized",
          "Production-oriented implementation"
        ]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <StickyScene
        eyebrow="Service Summary"
        frames={serviceFrames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "What this service covers",
                body: service.summary,
                meta: service.audiences.map((audience) => audience.toUpperCase())
              },
              {
                title: "Typical deliverables",
                body: service.deliverables[0] ?? "Workflow discovery and implementation",
                meta: service.deliverables.slice(1, 3)
              },
              {
                title: "How engagements start",
                body: "Audit or pilot on one workflow / delivery stream, then expand after proving value.",
                meta: [service.process[0] ?? "Audit", service.process[1] ?? "Pilot"]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Service Details"
        title="Expand the implementation detail"
        subtitle="All long-form service detail stays crawlable and server-rendered while the top of the page stays focused."
        items={[
          {
            title: "Overview and benefits",
            summary: "What this service improves first",
            content: (
              <div className="space-y-4 text-sm text-ink/78">
                <p className="leading-relaxed">{service.summary}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          },
          {
            title: "Deliverables",
            summary: "What a typical engagement includes",
            content: (
              <ul className="space-y-2 text-sm text-ink/78">
                {service.deliverables.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            )
          },
          {
            title: "Delivery process",
            summary: "Pilot-first engagement sequence",
            content: (
              <ol className="space-y-2 text-sm text-ink/78">
                {service.process.map((step, index) => (
                  <li key={step} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            )
          },
          {
            title: "Best fit and delivery mode",
            summary: "Audience, starting point, and execution style",
            content: (
              <div className="space-y-4 text-sm text-ink/78">
                <div>
                  <p className="font-medium text-ink">Audience</p>
                  <p className="mt-1">
                    {service.audiences.includes("business") && service.audiences.includes("agency")
                      ? "Direct businesses and agency/software house partners"
                      : "Agency/software house partners"}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">Typical starting point</p>
                  <p className="mt-1">
                    Audit or pilot on one workflow / delivery stream, then expand after proving value.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">Delivery mode</p>
                  <p className="mt-1">
                    Remote-first, with structured handoff, review, and production hardening.
                  </p>
                </div>
              </div>
            )
          }
        ]}
      />

      <FaqSection items={service.faq} />
      <CtaBand
        title={`Discuss ${service.title}`}
        copy="We can scope a pilot, define constraints, and map the fastest path to a measurable result."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
