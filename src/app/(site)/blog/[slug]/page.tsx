import { notFound } from "next/navigation";

import { blogPosts, getBlogPostBySlug } from "@/content";
import {
  buildGraph,
  buildMetadata,
  makeArticleSchema,
  makeBreadcrumbSchema,
} from "@/lib/seo";
import { relatedFor } from "@/lib/related";

import { AnswerBlock } from "@/components/aeo/answer-block";
import { KeyTakeaways } from "@/components/aeo/key-takeaways";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogContent } from "@/components/blog/blog-content";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { RelatedLinks } from "@/components/common/related-links";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    ...post.seo,
    ogType: "article",
    article: {
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authorName: post.authorName,
      tags: post.tags,
    },
  });
}

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function AuthorAvatar({ name }: { name: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-display text-sm font-medium text-ink/80 sm:h-11 sm:w-11">
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)}
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={buildGraph([
          makeBreadcrumbSchema(breadcrumbItems),
          makeArticleSchema({
            title: post.title,
            description: post.seo.description,
            path: `/blog/${post.slug}`,
            authorName: post.authorName,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            image: post.coverImage,
            keywords: post.seo.keywords,
            articleType: "BlogPosting",
          }),
        ])}
      />

      <ScrollBot />

      <Section className="pb-0 pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </Section>

      <div
        data-bot-stop
        data-bot-say={`You are reading ${post.title}. It takes about ${post.estimatedReadTime}.`}
        data-bot-fx="0.12"
      >
        <Section className="pt-6 sm:pt-8">
          <Container className="max-w-3xl">
            {post.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            ) : null}

            <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-[0.95] text-ink sm:mt-6 sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              {post.summary}
            </p>

            <div className="mt-6 flex flex-col gap-4 border-y border-ink/10 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <AuthorAvatar name={post.authorName} />
                <div>
                  <p className="text-sm font-medium text-ink">{post.authorName}</p>
                  <p className="text-xs text-ink/60">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink/60">
                <span>{formatDate(post.datePublished)}</span>
                <span aria-hidden className="text-ink/30">
                  ·
                </span>
                <span>{post.estimatedReadTime}</span>
              </div>
            </div>

            {post.tldr ? (
              <AnswerBlock className="mt-8" question="In short">
                {post.tldr}
              </AnswerBlock>
            ) : null}

            {post.keyTakeaways && post.keyTakeaways.length > 0 ? (
              <KeyTakeaways className="mt-8" items={post.keyTakeaways} />
            ) : null}
          </Container>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-say="Here is the article content." data-bot-short="The article"
        data-bot-fx="0.5"
      >
        <BlogContent content={post.content} />
      </div>

      <div
        data-bot-stop
        data-bot-say={`This article was written by ${post.authorName}, ${post.authorRole}.`}
        data-bot-fx="0.5"
      >
        <Section className="bg-cream/30 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <div className="flex flex-col gap-4 rounded-[22px] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:flex-row sm:items-center sm:gap-5 sm:p-8">
              <AuthorAvatar name={post.authorName} />
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  About {post.authorName}
                </p>
                <p className="text-sm text-ink/60">{post.authorRole}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {post.authorName} builds practical AI workflows, Claude / Claude Code delivery
                  systems, and automation-first products for businesses and agencies at TwoApps.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {post.faq && post.faq.length > 0 ? (
        <Container className="max-w-3xl">
          <FaqSection items={post.faq} subtitle="Quick answers to the questions readers ask most about this topic." />
        </Container>
      ) : null}

      <Section className="py-8">
        <Container className="max-w-3xl">
          <RelatedLinks
            items={post.relatedLinks ?? relatedFor(`/blog/${post.slug}`)}
            title="Keep exploring"
          />
        </Container>
      </Section>

      {relatedPosts.length > 0 ? (
        <div
          data-bot-stop
          data-bot-say="Here are a couple of related articles you might like." data-bot-short="Related articles"
          data-bot-fx="0.5"
        >
          <Section>
            <Container className="max-w-3xl">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Related articles
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </Container>
          </Section>
        </div>
      ) : null}

      <div
        data-bot-stop
        data-bot-say="Want to talk about what you read? Book a call or explore our services." data-bot-short="Book a call"
        data-bot-fx="0.35"
      >
        <CtaBand
          title="Want to put these ideas into practice?"
          copy="Tell us the workflow or delivery challenge behind what you just read. We will map a bounded pilot and show you the fastest path to a working AI system."
          primaryLabel="Book a call"
          primaryHref="/book"
          secondaryLabel="See services"
          secondaryHref="/services"
        />
      </div>
    </>
  );
}
