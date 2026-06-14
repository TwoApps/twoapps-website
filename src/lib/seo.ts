import type { Metadata } from "next";

import {
  BRAND_NAME,
  CONTACT_EMAIL,
  KNOWS_ABOUT,
  SEO_TARGET_REGIONS,
  TWITTER_HANDLE
} from "@/lib/brand";
import {
  getFounderImageUrl,
  getGscVerification,
  getLinkedInCompanyUrl,
  getLinkedInFounderUrl,
  getOrgLogoUrl,
  getSiteUrl
} from "@/lib/site-config";

const SCHEMA_CONTEXT = "https://schema.org";

export type SeoMeta = {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogImage?: string;
  /** Open Graph object type. Defaults to "website"; use "article" for blog posts. */
  ogType?: "website" | "article";
  /** Article metadata — only used when ogType === "article". */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authorName?: string;
    tags?: string[];
  };
  /** Per-page indexing overrides. Defaults to index+follow when omitted. */
  robots?: { index?: boolean; follow?: boolean };
  /** hreflang map, e.g. { "en-AE": "https://.../ae", "x-default": "https://..." }. */
  languages?: Record<string, string>;
};

export type FaqEntry = { question: string; answer: string };

export type ProductPackage = {
  id: string;
  name: string;
  description: string;
  priceUsd: number;
  priceCurrency?: string;
  serviceType?: string;
  timeline?: string;
  url?: string;
};

export type ReviewEntry = {
  authorName: string;
  authorJobTitle?: string;
  authorCompany?: string;
  authorUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
  datePublished: string;
  productSlug?: string;
};

export type ArticleInput = {
  title: string;
  description: string;
  path: string;
  authorName?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  articleType?: "Article" | "TechArticle" | "NewsArticle" | "BlogPosting" | "Course";
};

const siteName = BRAND_NAME;
const defaultDescription =
  "TwoApps is a UAE-based AI automation and software delivery partner that helps businesses and agencies reduce manual work, ship faster, and launch practical AI workflows.";

/**
 * Stable @id anchors for the entity graph. Cross-referenced across nodes so
 * search engines and AI answer engines resolve one coherent knowledge graph.
 */
export function schemaIds(siteUrl = getSiteUrl()) {
  return {
    org: `${siteUrl}/#organization`,
    website: `${siteUrl}/#website`,
    person: `${siteUrl}/#zain`,
    logo: `${siteUrl}/#logo`
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteName} | Agentic AI Software House`,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/blog/feed.xml", title: `${siteName} Blog` }]
    }
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }]
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/",
    title: `${siteName} | Agentic AI Software House`,
    description: defaultDescription,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Agentic AI Software House`,
    description: defaultDescription,
    images: ["/og-default.png"],
    ...(TWITTER_HANDLE ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } : {})
  },
  verification: getGscVerification()
    ? {
        google: getGscVerification() ?? undefined
      }
    : undefined
};

export function buildMetadata(seo: SeoMeta): Metadata {
  const ogImage = seo.ogImage || "/og-default.png";
  const ogImages = [{ url: ogImage, width: 1200, height: 630, alt: seo.title }];

  const openGraph: Metadata["openGraph"] =
    seo.ogType === "article" && seo.article
      ? {
          type: "article",
          title: seo.title,
          description: seo.description,
          url: seo.canonicalPath,
          images: ogImages,
          publishedTime: seo.article.publishedTime,
          modifiedTime: seo.article.modifiedTime ?? seo.article.publishedTime,
          authors: seo.article.authorName ? [seo.article.authorName] : undefined,
          tags: seo.article.tags
        }
      : {
          type: "website",
          title: seo.title,
          description: seo.description,
          url: seo.canonicalPath,
          images: ogImages
        };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalPath,
      ...(seo.languages ? { languages: seo.languages } : {})
    },
    ...(seo.robots
      ? { robots: { index: seo.robots.index ?? true, follow: seo.robots.follow ?? true } }
      : {}),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
      ...(TWITTER_HANDLE ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } : {})
    }
  };
}

/**
 * Assemble JSON-LD nodes into a single @graph. Strips per-node @context (added
 * once at the top), drops falsy nodes, and dedupes by @id so repeated entities
 * (e.g. Organization) collapse to one. Returns null when there is nothing to emit.
 */
export function buildGraph(
  nodes: Array<Record<string, unknown> | null | undefined | false>
) {
  const seen = new Set<string>();
  const graph: Array<Record<string, unknown>> = [];

  for (const node of nodes) {
    if (!node || typeof node !== "object") continue;
    const rest: Record<string, unknown> = { ...(node as Record<string, unknown>) };
    delete rest["@context"];
    const id = typeof rest["@id"] === "string" ? (rest["@id"] as string) : null;
    if (id) {
      if (seen.has(id)) continue;
      seen.add(id);
    }
    graph.push(rest);
  }

  if (!graph.length) return null;
  return { "@context": SCHEMA_CONTEXT, "@graph": graph };
}

/**
 * The site-wide entity graph (Organization + WebSite + founder Person). Rendered
 * globally in the root layout so every page carries the entity graph; page-level
 * graphs reference these nodes by @id.
 */
export function siteGraph(siteUrl = getSiteUrl()) {
  return buildGraph([
    organizationSchema(siteUrl),
    websiteSchema(siteUrl),
    personSchema(siteUrl)
  ]);
}

export function makeBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  siteUrl = getSiteUrl()
) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}

export function organizationSchema(siteUrl = getSiteUrl()) {
  const ids = schemaIds(siteUrl);
  const sameAs = [getLinkedInCompanyUrl()].filter((url): url is string => Boolean(url));

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Organization",
    "@id": ids.org,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    slogan: "Agentic AI software house — practical AI workflows, shipped.",
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: getOrgLogoUrl(siteUrl)
    },
    image: getOrgLogoUrl(siteUrl),
    founder: { "@id": ids.person },
    knowsAbout: [...KNOWS_ABOUT],
    areaServed: [...SEO_TARGET_REGIONS],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      areaServed: [...SEO_TARGET_REGIONS],
      availableLanguage: ["en"]
    },
    sameAs
  };
}

export function localBusinessSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    areaServed: [...SEO_TARGET_REGIONS]
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
}) {
  const siteUrl = getSiteUrl();
  const ids = schemaIds(siteUrl);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Service",
    "@id": `${siteUrl}${input.path}#service`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: { "@id": ids.org },
    areaServed: input.areaServed || [...SEO_TARGET_REGIONS],
    serviceType: input.serviceType
  };
}

export function makeFaqPageSchema(items: FaqEntry[] | null | undefined) {
  if (!items || items.length === 0) return null;
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function personSchema(siteUrl = getSiteUrl()) {
  const ids = schemaIds(siteUrl);
  const image = getFounderImageUrl(siteUrl);
  const sameAs = [
    getLinkedInFounderUrl(),
    "https://zainhthegreat.github.io/my_cv_zain/"
  ].filter((url): url is string => Boolean(url));

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Person",
    "@id": ids.person,
    name: "Zain Hassan",
    url: `${siteUrl}/about`,
    ...(image ? { image } : {}),
    jobTitle: "Founder & AI Implementation Engineer",
    description:
      "Founder of TwoApps. Builds practical AI workflows, Claude / Claude Code delivery systems, and AI-enabled internal tools for businesses and software houses.",
    worksFor: { "@id": ids.org },
    knowsAbout: [...KNOWS_ABOUT],
    sameAs
  };
}

export function websiteSchema(siteUrl = getSiteUrl()) {
  const ids = schemaIds(siteUrl);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    "@id": ids.website,
    name: siteName,
    url: siteUrl,
    publisher: { "@id": ids.org },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "CollectionPage",
    "@id": `${siteUrl}${input.path}#collection`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    isPartOf: { "@id": schemaIds(siteUrl).website },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${item.path}`,
        name: item.name,
        description: item.description
      }))
    }
  };
}

export function makeArticleSchema(input: ArticleInput, siteUrl = getSiteUrl()) {
  const ids = schemaIds(siteUrl);
  const isFounderAuthor = !input.authorName || input.authorName === "Zain Hassan";
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": input.articleType ?? "Article",
    "@id": `${siteUrl}${input.path}#article`,
    headline: input.title,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    mainEntityOfPage: `${siteUrl}${input.path}`,
    inLanguage: "en",
    image: input.image ? `${siteUrl}${input.image}` : `${siteUrl}/og-default.png`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    ...(input.keywords && input.keywords.length ? { keywords: input.keywords } : {}),
    author: isFounderAuthor
      ? { "@id": ids.person }
      : { "@type": "Person", name: input.authorName, url: `${siteUrl}/about` },
    publisher: { "@id": ids.org }
  };
}

export function makeHowToSchema(input: {
  name: string;
  description: string;
  steps: string[];
  totalTime?: string;
}) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    totalTime: input.totalTime,
    step: input.steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text
    }))
  };
}

export function makeProductSchema(pkg: ProductPackage, siteUrl = getSiteUrl()) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Product",
    "@id": `${siteUrl}/pricing#${pkg.id}`,
    name: pkg.name,
    description: pkg.description,
    brand: { "@id": schemaIds(siteUrl).org },
    category: pkg.serviceType ?? "AI Workflow Automation",
    offers: {
      "@type": "Offer",
      url: pkg.url ?? `${siteUrl}/contact?package=${pkg.id}`,
      priceCurrency: pkg.priceCurrency ?? "USD",
      price: pkg.priceUsd.toString(),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": schemaIds(siteUrl).org }
    }
  };
}

export function makeReviewSchema(
  review: ReviewEntry,
  productName: string,
  siteUrl = getSiteUrl()
) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5
    },
    author: {
      "@type": "Person",
      name: review.authorName,
      ...(review.authorJobTitle && { jobTitle: review.authorJobTitle }),
      ...(review.authorCompany && {
        worksFor: { "@type": "Organization", name: review.authorCompany }
      }),
      ...(review.authorUrl && { url: review.authorUrl })
    },
    reviewBody: review.body,
    datePublished: review.datePublished,
    itemReviewed: {
      "@type": "Service",
      name: productName,
      provider: { "@id": schemaIds(siteUrl).org }
    }
  };
}

export function aggregateRatingSchema(reviews: ReviewEntry[]) {
  if (!reviews.length) return null;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    "@type": "AggregateRating",
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5
  };
}

export function definedTermSchema(input: {
  name: string;
  description: string;
  path: string;
  inDefinedTermSet?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "DefinedTerm",
    "@id": `${siteUrl}${input.path}#term`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    inDefinedTermSet: input.inDefinedTermSet ?? `${siteUrl}/glossary`
  };
}
