import type { SeoMeta } from "@/lib/seo";

export type AudienceTrack = "business" | "agency";

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLinkGroup =
  | "service"
  | "solution"
  | "industry"
  | "region"
  | "blog"
  | "glossary";

/** A contextual internal link used to build topic clusters across the site. */
export type RelatedLink = {
  label: string;
  href: string;
  group?: RelatedLinkGroup;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  audiences: AudienceTrack[];
  tagline: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  faq: FaqItem[];
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};

/**
 * Topic/answer pillar page (e.g. "agentic orchestration", "vibe coding"). Targets
 * informational + comparative search intent; distinct from the sellable Services.
 */
export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** AEO direct answer (~40–60 words) shown near the top. */
  shortAnswer: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  faq: FaqItem[];
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  painPoints: string[];
  solutions: string[];
  exampleAutomations: string[];
  faq: FaqItem[];
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};

export type RegionPage = {
  slug: string;
  title: string;
  summary: string;
  marketFocus: string[];
  whyTwoApps: string[];
  engagementModel: string[];
  faq: FaqItem[];
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};

/** Pure definitional entity, rendered as a DefinedTerm and answer-first page. */
export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Concise, self-contained definition (~40–60 words) for AI extraction. */
  shortAnswer: string;
  /** Longer explanation in the supported Markdown subset. */
  body: string;
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};

/** Pricing package — single source of truth for /pricing and /api/catalog. */
export type Package = {
  id: string;
  name: string;
  description: string;
  priceUsd: number;
  priceCurrency?: string;
  billingPeriod?: "one-time" | "month";
  timeline?: string;
  serviceType?: string;
  features: string[];
};

/** Genuine client testimonial. Powers Review + AggregateRating schema — never fabricated. */
export type Testimonial = {
  authorName: string;
  authorTitle: string;
  authorCompany?: string;
  authorUrl?: string;
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Quantified outcome, e.g. "Cut review time 40%". */
  result?: string;
  datePublished: string;
  relatedServiceSlug?: string;
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudySummary = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcomes: string[];
  /** Quantified results — only genuine numbers. */
  metrics?: CaseStudyMetric[];
  tech: string[];
  disclaimer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  authorName: string;
  authorRole: string;
  datePublished: string; // ISO date, e.g. "2026-06-01"
  dateModified?: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  estimatedReadTime: string; // e.g. "6 min read"
  /** AEO: one-line direct answer / TL;DR shown near the top. */
  tldr?: string;
  /** AEO: scannable summary bullets shown near the top. */
  keyTakeaways?: string[];
  /** AEO: question/answer pairs — rendered + emitted as FAQPage schema. */
  faq?: FaqItem[];
  relatedLinks?: RelatedLink[];
  cluster?: string;
  seo: SeoMeta;
};
