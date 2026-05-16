Perform a full SEO audit of the TwoApps website. Systematically check every page file in `src/app/(site)/` and report findings.

For each page file, check:

**1. Metadata pattern**
- Does it use `buildMetadata()` from `@/lib/seo`? (correct)
- Does the `buildMetadata()` call include `canonicalPath`? (required)
- Does it include `keywords`? (recommended)
- Does it include `ogImage`? (required)

**2. JSON-LD structured data**
- Does the page import and render `<JsonLd>`?
- Which schema types does it include? (organizationSchema, serviceSchema, breadcrumb, etc.)
- Does it have at minimum `organizationSchema()` on every page, and `makeBreadcrumbSchema()` on non-home pages?

**3. Dynamic slug pages** (`/services/[slug]`, `/industries/[slug]`, `/regions/[slug]`)
- Do they use `generateMetadata` (not static `export const metadata`)?
- Do they call `notFound()` for invalid slugs?
- Do they export `generateStaticParams()`?

**4. Sitemap coverage** (`src/app/sitemap.ts`)
- Are all static pages listed with appropriate priority and changeFrequency?
- Are dynamic routes generated from the content arrays?

**5. Microsite pages** (`sg`, `ae`, `au`, `nz`, `eu`)
- Do they include `alternates.languages` with hreflang entries for all 5 regions plus `x-default`?

Output a markdown table with columns: Page | buildMetadata | canonicalPath | JSON-LD | keywords | ogImage | Issues

At the end, list the top 3 most important SEO issues to fix, ranked by impact (missing canonical > missing JSON-LD > missing keywords).
