import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/content";
import { buildMetadata, makeBreadcrumbSchema, serviceSchema } from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

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
      <Section className="pb-8 sm:pb-12">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8">
            <Tag className="mb-4">Overview</Tag>
            <p className="text-sm leading-relaxed text-ink/80 sm:text-base">{service.summary}</p>
            <div className="mt-6">
              <h2 className="font-display text-2xl font-semibold">Benefits</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Best Fit</Tag>
            <div className="space-y-4 text-sm text-ink/80">
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
                <p className="mt-1">Audit or pilot on one workflow / delivery stream, then expand after proving value.</p>
              </div>
              <div>
                <p className="font-medium text-ink">Delivery mode</p>
                <p className="mt-1">Remote-first, with structured handoff, review, and production hardening.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <Tag className="mb-4">Deliverables</Tag>
            <h2 className="font-display text-2xl font-semibold">What a typical engagement includes</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {service.deliverables.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Process</Tag>
            <h2 className="font-display text-2xl font-semibold">Delivery stages</h2>
            <ol className="mt-4 space-y-3 text-sm text-ink/80">
              {service.process.map((step, index) => (
                <li key={step} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

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
