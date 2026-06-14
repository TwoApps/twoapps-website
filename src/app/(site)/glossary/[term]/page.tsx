import { notFound } from "next/navigation";

import { getGlossaryTermBySlug, glossaryTerms } from "@/content";
import {
  buildGraph,
  buildMetadata,
  definedTermSchema,
  makeBreadcrumbSchema,
} from "@/lib/seo";

import { relatedFor } from "@/lib/related";

import { AnswerBlock } from "@/components/aeo/answer-block";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { RelatedLinks } from "@/components/common/related-links";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Props = {
  params: Promise<{ term: string }>;
};

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { term: slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};
  return buildMetadata(term.seo);
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.term, path: `/glossary/${term.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          definedTermSchema({
            name: term.term,
            description: term.shortAnswer,
            path: `/glossary/${term.slug}`,
          }),
        ])}
      />
      <ScrollBot />

      <Section className="pb-0 pt-8 sm:pt-10">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            {term.term}
          </h1>
          <AnswerBlock className="mt-6">{term.shortAnswer}</AnswerBlock>
        </Container>
      </Section>

      <Section className="pt-8">
        <Container className="max-w-3xl">
          <MarkdownRenderer content={term.body} />
        </Container>
      </Section>

      <Section className="py-8">
        <Container className="max-w-3xl">
          <RelatedLinks
            items={term.relatedLinks ?? relatedFor(`/glossary/${term.slug}`)}
            title="Related"
          />
        </Container>
      </Section>

      <CtaBand
        title="Turn the concept into a working system"
        copy="Tell us the workflow you want to automate. We'll map a bounded pilot and show you the fastest path to production."
        primaryHref="/contact"
        primaryLabel="Talk to us"
        secondaryHref="/solutions"
        secondaryLabel="See solutions"
      />
    </>
  );
}
