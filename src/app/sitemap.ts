import type { MetadataRoute } from "next";

import { blogPosts, glossaryTerms, industries, regions, services, solutions } from "@/content";
import { getSiteUrl } from "@/lib/site-config";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();

  const staticRoutes: StaticRoute[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
    { path: "/agency-partners", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.8, changeFrequency: "weekly" },
    { path: "/regions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/book", priority: 0.7, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/compliance", priority: 0.85, changeFrequency: "monthly" },
    { path: "/guide", priority: 0.8, changeFrequency: "monthly" },
    { path: "/academy", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/livestream", priority: 0.6, changeFrequency: "weekly" },
    { path: "/community", priority: 0.5, changeFrequency: "monthly" },
    { path: "/refer", priority: 0.5, changeFrequency: "monthly" },
    { path: "/sg", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ae", priority: 0.9, changeFrequency: "monthly" },
    { path: "/au", priority: 0.85, changeFrequency: "monthly" },
    { path: "/nz", priority: 0.8, changeFrequency: "monthly" },
    { path: "/eu", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ee", priority: 0.8, changeFrequency: "monthly" },
    { path: "/latam", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" }
  ];

  const contentRoutes: StaticRoute[] = [
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.85,
      changeFrequency: "monthly" as const
    })),
    ...solutions.map((solution) => ({
      path: `/solutions/${solution.slug}`,
      priority: 0.85,
      changeFrequency: "monthly" as const
    })),
    ...glossaryTerms.map((term) => ({
      path: `/glossary/${term.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const
    })),
    ...industries.map((industry) => ({
      path: `/industries/${industry.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const
    })),
    ...regions.map((region) => ({
      path: `/regions/${region.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(post.dateModified ?? post.datePublished)
    }))
  ];

  return [...staticRoutes, ...contentRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified ?? now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
