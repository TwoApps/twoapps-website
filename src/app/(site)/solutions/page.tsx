import Link from "next/link";

import { solutions } from "@/content";
import {
  buildGraph,
  buildMetadata,
  collectionPageSchema,
  makeBreadcrumbSchema,
} from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "AI Solutions",
  description:
    "Agentic AI orchestration, vibe coding, AI consultancy, AI software house, and AI development — explained, with how TwoApps delivers each for businesses and agencies.",
  canonicalPath: "/solutions",
  keywords: [
    "agentic ai orchestration",
    "vibe coding",
    "ai consultancy",
    "ai software house",
    "ai development services",
  ],
  ogImage: "/og-default.png",
});

export default function SolutionsPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ];

  return (
    <>
      <JsonLd
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          collectionPageSchema({
            name: "AI Solutions",
            description:
              "Agentic AI orchestration, vibe coding, AI consultancy, AI software house, and AI development for businesses and agencies.",
            path: "/solutions",
            items: solutions.map((solution) => ({
              name: solution.title,
              path: `/solutions/${solution.slug}`,
              description: solution.summary,
            })),
          }),
        ])}
      />
      <ScrollBot />

      <PageHero
        eyebrow="Solutions"
        title="Agentic AI, done in a way you can actually run."
        description="From agentic orchestration to vibe coding to AI consultancy, these are the approaches we use to turn AI from a demo into a dependable system."
        chips={["Agentic AI", "AI development", "White-label ready"]}
      />

      <Section>
        <Heading
          eyebrow="What we work on"
          title="Solutions for teams that want AI that ships"
          subtitle="Each page explains the concept plainly, then shows how TwoApps delivers it with guardrails, monitoring, and human checks."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="focus-ring group flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-7 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-10"
            >
              <h3 className="font-display text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[27px]">
                {solution.title}
              </h3>
              <p className="mt-3.5 text-[15px] leading-[1.6] text-ink/58">
                {solution.summary}
              </p>
              <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-accent-1">
                Explore this solution
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure which approach fits?"
        copy="Tell us the outcome you're after. We'll point you at the right starting move and a bounded pilot — no pitch deck required."
        primaryHref="/contact"
        primaryLabel="Talk to us"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
