import type { SeoMeta } from "@/lib/seo";

export type AudienceTrack = "business" | "agency";

export type FaqItem = {
  question: string;
  answer: string;
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
  seo: SeoMeta;
};

export type CaseStudySummary = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcomes: string[];
  tech: string[];
  disclaimer: string;
};
