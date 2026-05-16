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
      headline: "Built for real work, not demos",
      subline: service.benefits[0] ?? service.summary
    },
    {
      label: "Process",
      headline: "Pilot first, then scale",
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
          service.audiences.includes("business") ? "For businesses" : "For agencies",
          ...(service.audiences.includes("business") && service.audiences.includes("agency") ? ["For agencies"] : []),
          "UAE-based"
        ]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <StickyScene
        eyebrow="Snapshot"
        frames={serviceFrames}
        heightMultiplier={2.8}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "What it covers",
                body: service.summary,
                meta: service.audiences.map((audience) => audience.toUpperCase())
              },
              {
                title: "What you get",
                body: service.deliverables[0] ?? "Workflow discovery and implementation",
                meta: service.deliverables.slice(1, 3)
              },
              {
                title: "How it starts",
                body: "Bounded pilot on one workflow. Expand once it works.",
                meta: [service.process[0] ?? "Audit", service.process[1] ?? "Pilot"]
              }
            ]}
          />
        }
      />

      <DetailPanelsSection
        eyebrow="Detail"
        title="Open the full scope"
        subtitle="Everything below stays crawlable. Open what's relevant."
        items={[
          {
            title: "Overview & benefits",
            summary: "What this fixes first",
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
            summary: "What you walk away with",
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
            title: "How a project runs",
            summary: "Pilot first, then scale",
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
          }
        ]}
      />

      <FaqSection items={service.faq} />
      <CtaBand
        title={`Talk to us about ${service.title}`}
        copy="We'll scope a pilot, name the constraints, and map the fastest path to a measurable result."
        primaryHref="/contact"
        primaryLabel="Talk to us"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
