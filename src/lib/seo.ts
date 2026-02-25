import type { Metadata } from "next";

import { getGscVerification, getSiteUrl } from "@/lib/site-config";

export type SeoMeta = {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogImage?: string;
};

const siteName = "Two Apps";
const defaultDescription =
  "Dubai-based agentic AI software house building AI automations, Claude-powered workflows, and white-label AI delivery systems for businesses and software agencies.";

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
        alt: "Two Apps"
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
    name: "Two Apps",
    url: siteUrl,
    description: defaultDescription,
    areaServed: ["United Arab Emirates", "GCC", "Europe", "South America", "Australia", "New Zealand"],
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
    name: "Two Apps",
    url: siteUrl,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    areaServed: ["UAE", "GCC", "Eastern Europe", "South America", "Australia", "New Zealand"]
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
      name: "Two Apps",
      url: siteUrl
    },
    areaServed:
      input.areaServed || ["UAE", "GCC", "Eastern Europe", "South America", "Australia", "New Zealand"],
    serviceType: input.serviceType
  };
}
