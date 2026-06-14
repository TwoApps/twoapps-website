import { Suspense } from "react";

import {
  blogPosts,
  glossaryTerms,
  industries,
  regions,
  services,
  solutions,
} from "@/content";
import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { SiteSearch, type SearchItem } from "@/components/search/site-search";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Search",
  description: "Search TwoApps services, solutions, industries, glossary, and articles.",
  canonicalPath: "/search",
  robots: { index: false, follow: true },
  ogImage: "/og-default.png",
});

const searchIndex: SearchItem[] = [
  ...services.map((s) => ({
    title: s.title,
    description: s.summary,
    href: `/services/${s.slug}`,
    type: "Service",
  })),
  ...solutions.map((s) => ({
    title: s.title,
    description: s.summary,
    href: `/solutions/${s.slug}`,
    type: "Solution",
  })),
  ...industries.map((i) => ({
    title: i.title,
    description: i.summary,
    href: `/industries/${i.slug}`,
    type: "Industry",
  })),
  ...regions.map((r) => ({
    title: r.title,
    description: r.summary,
    href: `/regions/${r.slug}`,
    type: "Region",
  })),
  ...glossaryTerms.map((t) => ({
    title: t.term,
    description: t.shortAnswer,
    href: `/glossary/${t.slug}`,
    type: "Glossary",
  })),
  ...blogPosts.map((p) => ({
    title: p.title,
    description: p.summary,
    href: `/blog/${p.slug}`,
    type: "Article",
  })),
];

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you need"
        description="Search across services, solutions, industries, the glossary, and the blog."
      />
      <Section>
        <Container className="max-w-3xl">
          <Suspense fallback={<p className="text-ink/55">Loading search…</p>}>
            <SiteSearch index={searchIndex} />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
