import { notFound } from "next/navigation";

import { getSolutionBySlug, solutions } from "@/content";
import {
  buildGraph,
  buildMetadata,
  makeBreadcrumbSchema,
  serviceSchema,
} from "@/lib/seo";

import { relatedFor } from "@/lib/related";

import { AnswerBlock } from "@/components/aeo/answer-block";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { PageHero } from "@/components/common/page-hero";
import { RelatedLinks } from "@/components/common/related-links";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return buildMetadata(solution.seo);
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm text-ink/80 sm:text-base">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[22px] border border-ink/10 bg-paper px-4 py-3"
        >
          <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-blue" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.title, path: `/solutions/${solution.slug}` },
  ];

  const detailItems = [
    {
      title: "Why it matters",
      summary: "The outcomes this unlocks",
      content: <BulletList items={solution.benefits} />,
    },
    {
      title: "What you get",
      summary: "Deliverables and handover",
      content: <BulletList items={solution.deliverables} />,
    },
    {
      title: "How we work",
      summary: "Pilot first, then scale",
      content: (
        <ol className="space-y-3 text-sm text-ink/80 sm:text-base">
          {solution.process.map((step, index) => (
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
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: solution.title,
            description: solution.summary,
            path: `/solutions/${solution.slug}`,
            serviceType: solution.title,
          }),
        ])}
      />
      <ScrollBot />

      <PageHero
        eyebrow="Solution"
        title={solution.title}
        description={solution.tagline}
        chips={["UAE-based", "Pilot-first", "Human-in-the-loop"]}
      />

      <Section className="pb-0 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Section>

      <Section className="pt-8">
        <Container className="max-w-3xl">
          <AnswerBlock question={`What is ${solution.title.toLowerCase()}?`}>
            {solution.shortAnswer}
          </AnswerBlock>
        </Container>
      </Section>

      <DetailPanelsSection
        eyebrow="Details"
        title="See the full picture"
        subtitle="Everything below is crawlable and expandable. Open the sections that matter to you."
        items={detailItems}
      />

      <FaqSection items={solution.faq} title="Questions we hear a lot" eyebrow="FAQ" />

      <Section className="py-8">
        <Container className="max-w-3xl">
          <RelatedLinks
            items={solution.relatedLinks ?? relatedFor(`/solutions/${solution.slug}`)}
            title="Related"
          />
        </Container>
      </Section>

      <CtaBand
        title={`Want to apply ${solution.title} to your team?`}
        copy="Tell us the workflow or delivery challenge you're facing. We'll map a bounded pilot and show you the fastest path to a working system."
        primaryHref="/contact"
        primaryLabel="Start the conversation"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
