import type { Metadata } from "next";

import { BRAND_NAME, SEO_TARGET_REGIONS } from "@/lib/brand";
import { getGscVerification, getSiteUrl } from "@/lib/site-config";

export type SeoMeta = {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogImage?: string;
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
  articleType?: "Article" | "TechArticle" | "NewsArticle" | "BlogPosting" | "Course";
};

const siteName = BRAND_NAME;
const defaultDescription =
  "TwoApps is a UAE-based AI automation and software delivery partner that helps businesses and agencies reduce manual work, ship faster, and launch practical AI workflows.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteName} | Agentic AI Software House`,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/icon-384x384.png', sizes: '384x384', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/",
    title: `${siteName} | Agentic AI Software House`,
    description: defaultDescription,
    images: [
      {
        url: "/og-default.svg",
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
    images: ["/og-default.svg"]
  },
  verification: getGscVerification()
    ? {
        google: getGscVerification() ?? undefined
      }
    : undefined
};

export function buildMetadata(seo: SeoMeta): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalPath
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalPath,
      type: "website",
      images: [
        {
          url: seo.ogImage || "/og-default.svg",
          width: 1200,
          height: 630,
          alt: seo.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || "/og-default.svg"]
    }
  };
}

export function makeBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  siteUrl = getSiteUrl()
) {
  return {
    "@context": "https://schema.org",
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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    areaServed: [...SEO_TARGET_REGIONS],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    sameAs: ["https://zainhthegreat.github.io/my_cv_zain/"]
  };
}

export function localBusinessSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    areaServed: input.areaServed || [...SEO_TARGET_REGIONS],
    serviceType: input.serviceType
  };
}

export function makeFaqPageSchema(items: FaqEntry[] | null | undefined) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
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
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zain Hassan",
    url: `${siteUrl}/about`,
    image: `${siteUrl}/zain-hassan.jpg`,
    jobTitle: "Founder & AI Implementation Engineer",
    description:
      "Founder of TwoApps. Builds practical AI workflows, Claude / Claude Code delivery systems, and AI-enabled internal tools for businesses and software houses.",
    worksFor: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    knowsAbout: [
      "AI Workflow Automation",
      "Agentic AI",
      "Claude",
      "Claude Code",
      "AML/KYC Compliance Automation",
      "Marketing Automation",
      "Analytics & Reporting Automation",
      "Product Engineering",
      "Flutter",
      "AWS"
    ],
    sameAs: ["https://zainhthegreat.github.io/my_cv_zain/"]
  };
}

export function websiteSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    inLanguage: "en"
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
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
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
  return {
    "@context": "https://schema.org",
    "@type": input.articleType ?? "Article",
    headline: input.title,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    image: input.image ? `${siteUrl}${input.image}` : `${siteUrl}/og-default.svg`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName ?? "Zain Hassan",
      url: `${siteUrl}/about`
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/twoapps-logo-mark-2k.png`
      }
    }
  };
}

export function makeHowToSchema(input: {
  name: string;
  description: string;
  steps: string[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
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
  const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/pricing#${pkg.id}`,
    name: pkg.name,
    description: pkg.description,
    brand: {
      "@type": "Brand",
      name: siteName
    },
    category: pkg.serviceType ?? "AI Workflow Automation",
    offers: {
      "@type": "Offer",
      url: pkg.url ?? `${siteUrl}/contact?package=${pkg.id}`,
      priceCurrency: pkg.priceCurrency ?? "USD",
      price: pkg.priceUsd.toString(),
      priceValidUntil: oneYearFromNow,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteName,
        url: siteUrl
      }
    }
  };
}

export function makeReviewSchema(
  review: ReviewEntry,
  productName: string,
  siteUrl = getSiteUrl()
) {
  return {
    "@context": "https://schema.org",
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
      provider: { "@type": "Organization", name: siteName, url: siteUrl }
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
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    inDefinedTermSet:
      input.inDefinedTermSet ?? `${siteUrl}/glossary`
  };
}
