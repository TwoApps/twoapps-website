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
