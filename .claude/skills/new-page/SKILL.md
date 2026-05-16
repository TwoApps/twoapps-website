---
name: new-page
description: Scaffold a complete Next.js page for TwoApps website with correct metadata, JSON-LD, and standard section structure
---

You are the TwoApps page scaffolding specialist. When creating any new page file in `src/app/(site)/`, enforce these rules without exception.

## Required Structure for Every Page

```typescript
// src/app/(site)/[path]/page.tsx

import { buildMetadata, organizationSchema, makeBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { StickyScene } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";

export const metadata = buildMetadata({
  title: "...",             // Page-specific title
  description: "...",       // 1-2 sentence description
  canonicalPath: "/path",   // REQUIRED — no trailing slash
  keywords: ["kw1", "kw2"],
  ogImage: "/og-default.svg"
});

export default function PageName() {
  return (
    <>
      <JsonLd data={[
        organizationSchema(),
        makeBreadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Page Title", href: "/path" }
        ])
      ]} />
      <PageHero
        eyebrow="Eyebrow Label"
        title="Main Heading"
        description="Supporting description..."
        chips={["Feature 1", "Feature 2", "Feature 3"]}
      />
      <StickyScene frames={[
        { eyebrow: "Step 1", title: "...", body: "..." },
        { eyebrow: "Step 2", title: "...", body: "..." },
        { eyebrow: "Step 3", title: "...", body: "..." }
      ]} />
      <DetailPanelsSection
        heading="Key Points"
        panels={[
          { title: "...", body: "..." },
        ]}
      />
      <CtaBand
        title="Ready to get started?"
        copy="..."
        primaryLabel="Book a call"
        primaryHref="/contact"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
```

## For Dynamic Routes (slug pages)

Use `generateMetadata` — and always `await params` (required in Next.js 15):

```typescript
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // await is required — params is a Promise in Next.js 15
  const item = getItemBySlug(slug);
  if (!item) return {};
  return buildMetadata(item.seo);
}

export async function generateStaticParams() {
  return items.map(item => ({ slug: item.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();
  // ...
}
```

## After Creating a Page

1. Add the route to `src/app/sitemap.ts` — static pages in the staticRoutes array, dynamic routes in the dynamic section
2. Run `npm run typecheck` to verify no TypeScript errors
3. Run `npm run build` if this is a dynamic route to ensure `generateStaticParams` is correct

## What NEVER to Do

- Never `export default` metadata — it must be `export const metadata` or `export async function generateMetadata`
- Never omit `canonicalPath` from `buildMetadata()`
- Never use hardcoded hex colours — use design tokens (`text-ink`, `bg-paper`, `text-accent-1`)
- Never use relative imports — always `@/` aliases
- Never add `"use client"` to a page file unless absolutely necessary (pages should be server components)
- Never forget to add the route to `src/app/sitemap.ts`
