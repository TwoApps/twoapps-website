import Link from "next/link";

import { packages } from "@/content";
import {
  buildGraph,
  buildMetadata,
  makeBreadcrumbSchema,
  makeProductSchema,
} from "@/lib/seo";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent starting prices for TwoApps AI automation packages — from a workflow assessment to support, finance, and governance automation. Most engagements begin with a bounded pilot.",
  canonicalPath: "/pricing",
  keywords: [
    "ai automation pricing",
    "ai workflow automation cost",
    "ai automation packages uae",
    "ai consultancy pricing",
  ],
  ogImage: "/og-default.png",
});

const pricingFaq = [
  {
    question: "Are these fixed prices or starting points?",
    answer:
      "They are starting points for clearly scoped packages. Final pricing depends on your systems, data, and the complexity of the workflow. We confirm a fixed scope and price before any work begins.",
  },
  {
    question: "Why do you start with a pilot instead of a big contract?",
    answer:
      "A bounded pilot proves value and surfaces real constraints before a wider rollout. It lowers your risk and gives both sides real numbers to plan the next phase.",
  },
  {
    question: "Do you work with clients outside the UAE?",
    answer:
      "Yes. We are UAE-based and work with businesses across the GCC and Middle East, plus white-label agency partners in Eastern Europe, South America, Australia, New Zealand, and Europe.",
  },
];

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PricingPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <>
      <JsonLd
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          ...packages.map((pkg) =>
            makeProductSchema({
              id: pkg.id,
              name: pkg.name,
              description: pkg.description,
              priceUsd: pkg.priceUsd,
              priceCurrency: pkg.priceCurrency,
              serviceType: pkg.serviceType,
              timeline: pkg.timeline,
            })
          ),
        ])}
      />
      <ScrollBot />

      <PageHero
        eyebrow="Pricing"
        title="Clear starting prices, scoped before we start."
        description="Every engagement begins with a bounded pilot so you see value before scaling. Prices below are starting points for clearly defined packages."
        chips={["USD", "Pilot-first", "Fixed scope before work"]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <Section>
        <Heading
          eyebrow="Packages"
          title="Pick a starting point"
          subtitle="Each package is a scoped piece of work with a clear deliverable and timeline. Not sure which fits? Tell us your workflow and we'll recommend one."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
                {pkg.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-ink">
                  {formatPrice(pkg.priceUsd)}
                </span>
                <span className="text-sm text-ink/55">
                  {pkg.billingPeriod === "month" ? "/ month" : ""}
                </span>
              </div>
              {pkg.timeline ? (
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink/45">
                  {pkg.timeline}
                </p>
              ) : null}
              <p className="mt-4 text-[15px] leading-[1.6] text-ink/58">
                {pkg.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink/80">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?package=${pkg.id}`}
                className="focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.04] px-4 py-2 text-sm font-semibold text-accent-1 transition-colors hover:bg-accent-1/[0.08]"
              >
                Enquire about this package <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <FaqSection items={pricingFaq} title="Pricing questions" eyebrow="FAQ" />

      <CtaBand
        title="Want a price for your exact workflow?"
        copy="Tell us the process you want to automate. We'll scope a bounded pilot with a fixed price and a clear deliverable."
        primaryHref="/contact"
        primaryLabel="Get a scoped quote"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
