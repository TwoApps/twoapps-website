Scaffold a new marketing page for the TwoApps website. Ask the user:

1. "What is the URL path for this page? (e.g., /case-studies or /partners)"
2. "What is the page title? (used in <title> tag and headings)"
3. "Write a 1–2 sentence description of this page's purpose and primary audience"
4. "What is the main call to action? (e.g., 'Book a call' or 'Download the guide')"

Then create the page file at `src/app/(site)/[path]/page.tsx` following this exact structure:

```typescript
import { buildMetadata, organizationSchema, makeBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { StickyScene } from "@/components/motion/sticky-scene";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";

export const metadata = buildMetadata({
  title: "...",
  description: "...",
  canonicalPath: "/path",  // REQUIRED — no trailing slash
  keywords: ["relevant", "keywords"],
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
        eyebrow="Eyebrow Text"
        title="Page Heading"
        description="Page description..."
        chips={["Chip 1", "Chip 2", "Chip 3"]}
      />
      <StickyScene frames={[
        { eyebrow: "...", title: "...", body: "..." },
        { eyebrow: "...", title: "...", body: "..." },
        { eyebrow: "...", title: "...", body: "..." }
      ]} />
      <DetailPanelsSection
        heading="..."
        panels={[
          { title: "...", body: "..." },
          // ...
        ]}
      />
      <CtaBand
        title="Ready to get started?"
        copy="..."
        primaryLabel="Book a call"
        primaryHref="/contact"
        secondaryLabel="Learn more"
        secondaryHref="/book"
      />
    </>
  );
}
```

After creating the file:
1. Add the new route to `src/app/sitemap.ts` in the static routes array with priority 0.8 and changeFrequency "monthly"
2. Run `npm run typecheck` to confirm no TypeScript errors
3. Report any issues found

Use design tokens (text-ink, bg-paper, text-accent-1) not hardcoded colours. Use @/ path aliases only.
