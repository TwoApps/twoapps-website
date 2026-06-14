import Link from "next/link";

import { glossaryTerms } from "@/content";
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
  title: "AI Glossary",
  description:
    "Plain-English definitions of agentic AI, agentic orchestration, agentic workflows, vibe coding, AI software house, AI workflow automation, and more.",
  canonicalPath: "/glossary",
  keywords: [
    "agentic ai definition",
    "what is agentic ai",
    "vibe coding meaning",
    "ai workflow automation glossary",
    "ai agent definition",
  ],
  ogImage: "/og-default.png",
});

export default function GlossaryPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
  ];

  return (
    <>
      <JsonLd
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          collectionPageSchema({
            name: "AI Glossary",
            description:
              "Plain-English definitions of the AI automation concepts TwoApps works with.",
            path: "/glossary",
            items: glossaryTerms.map((term) => ({
              name: term.term,
              path: `/glossary/${term.slug}`,
              description: term.shortAnswer,
            })),
          }),
        ])}
      />
      <ScrollBot />

      <PageHero
        eyebrow="Glossary"
        title="AI terms, explained without the hype."
        description="Clear, accurate definitions of the concepts behind agentic AI and AI automation — written so a non-technical leader can follow them."
        chips={["Agentic AI", "Vibe coding", "Plain English"]}
      />

      <Section>
        <Heading
          eyebrow="Definitions"
          title="Browse the glossary"
          subtitle="Each entry answers the question directly, then explains how it relates to building real systems."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossaryTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="focus-ring group flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/55 hover:shadow-[0_14px_34px_rgba(22,21,15,0.08)]"
            >
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {term.term}
              </h3>
              <p className="mt-2.5 line-clamp-4 text-sm leading-relaxed text-ink/58">
                {term.shortAnswer}
              </p>
              <span className="mt-auto pt-5 text-sm font-semibold text-accent-1">
                Read definition →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want to put these ideas to work?"
        copy="Tell us the workflow you want to automate. We'll map a bounded pilot and show you the fastest path to a working AI system."
        primaryHref="/contact"
        primaryLabel="Talk to us"
        secondaryHref="/solutions"
        secondaryLabel="See solutions"
      />
    </>
  );
}
