# TwoApps Website — CLAUDE.md

## Project Purpose
Marketing website for TwoApps, a UAE-based B2B AI automation company. Two customer tracks:
1. **Direct businesses** (UAE/GCC) — AI workflow automation, internal tools, compliance automation (Fintech/AML/KYC)
2. **White-label partners** (global) — Agency/software house partnerships (Singapore, Europe, Australia, NZ, South America)

Primary conversion goals: guide downloads → 5-email nurture, contact form, Calendly booking.
Production: **thetwoapps.com**

## Commands
```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (run before deploying to catch errors)
npm run lint       # ESLint with auto-fix
npm run typecheck  # tsc --noEmit — run after any TypeScript changes
```

Always run `npm run typecheck` after TypeScript changes. The CI equivalent is `npm run build`.

## Stack
- **Next.js 15** App Router, **React 19**, **TypeScript** strict (`"strict": true`, `"allowJs": false`)
- **Tailwind CSS** with CSS variable design tokens
- **GSAP** + **Motion** (`motion` package) for animations
- **Resend** for all transactional email
- **Zod** for all form/API validation
- **Vercel** deployment with cron job (daily 09:00 UTC)

## Directory Structure

```
src/
├── app/
│   ├── (site)/              # All marketing pages — wrapped by SiteShell layout
│   │   ├── layout.tsx       # Renders <SiteShell> — do not add nav/footer elsewhere
│   │   ├── page.tsx         # Homepage
│   │   ├── services/        # /services (list) + /services/[slug] (detail)
│   │   ├── industries/      # /industries (list) + /industries/[slug] (detail)
│   │   ├── regions/         # /regions (list) + /regions/[slug] (detail)
│   │   ├── sg/ ae/ au/ nz/ eu/  # Flat microsite routes — NOT under /regions/
│   │   ├── academy/         # Academy landing + enrollment
│   │   ├── pricing/         # Pricing page
│   │   ├── contact/         # Contact form
│   │   └── ...
│   ├── api/                 # 9 API routes — all POST, nodejs runtime
│   │   ├── contact/         # Contact form submissions
│   │   ├── guide-download/  # Guide download + starts nurture sequence
│   │   ├── academy-enroll/
│   │   ├── livestream-register/
│   │   ├── community-request/
│   │   ├── package-inquiry/
│   │   ├── referral/
│   │   ├── nurture/
│   │   └── cron/nurture-emails/  # GET — called by Vercel cron daily
│   ├── layout.tsx           # Root layout — sets baseMetadata, renders PlausibleScript
│   ├── sitemap.ts           # Auto-generates XML sitemap from content arrays
│   └── robots.ts
├── components/
│   ├── site/                # SiteShell, FloatingNav, Footer, BackgroundLayer, LogoPreloader
│   ├── ui/                  # Button, Card, Section, Container, Heading, Tag, SplitPanel
│   ├── common/              # PageHero, CtaBand, FaqSection, Breadcrumbs, ExpandableDetailPanel
│   ├── motion/              # GSAP/Motion wrappers — StickyScene, SceneViewport, GlowField
│   ├── scenes/              # Page section compositions — DetailPanelsSection, StackedVisualCards
│   ├── microsites/          # RegionalPage renderer + per-region *-config.ts files
│   └── json-ld.tsx          # <JsonLd data={...}> — injects schema.org JSON-LD scripts
├── content/
│   ├── index.ts             # ALL site content (services, industries, regions, case studies, nav)
│   └── types.ts             # TypeScript types for all content (Service, Industry, RegionPage, etc.)
├── lib/
│   ├── seo.ts               # buildMetadata(), organizationSchema(), serviceSchema(), makeBreadcrumbSchema()
│   ├── site-config.ts       # getSiteUrl(), getBookingUrl(), getCalendlyEmbedUrl()
│   ├── brand.ts             # BRAND_NAME, SEO_TARGET_REGIONS, SEO_PARTNER_FOCUS_REGIONS
│   ├── env.ts               # Zod-validated server env (getServerEnv()) — add new vars here
│   ├── email.ts             # sendContactEmail() — contact form only
│   ├── guide-emails.ts      # sendNurtureEmail(lead, "day0"|"day2"|...) — nurture orchestrator
│   ├── email-templates/     # HTML email template functions (guide-emails.ts)
│   ├── leads-store.ts       # Read/write data/leads.json
│   ├── academy-store.ts     # Read/write data/academy-enrollments.json
│   ├── nurture-store.ts     # Read/write data/nurture-sequences.json
│   ├── livestream-store.ts
│   ├── contact-schema.ts    # contactSchema (Zod) + ContactPayload type
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
data/
├── leads.json                    # Guide download leads + nurture state — REAL DATA
├── nurture-sequences.json
├── academy-enrollments.json
├── livestream-registrations.json
└── referrals.json
```

## Key Patterns

### SEO / Metadata — every page must follow this exactly

```typescript
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Title",       // Used as `%s | TwoApps` via template
  description: "...",
  canonicalPath: "/path",    // No trailing slash. REQUIRED.
  keywords: ["kw1", "kw2"],
  ogImage: "/og-default.svg" // Use /og-default.svg unless a custom OG exists
});
```

For dynamic routes (slug pages) use `generateMetadata` — note `params` is a Promise in Next.js 15:

```typescript
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // await required in Next.js 15
  const item = getItemBySlug(slug);
  if (!item) return {};
  return buildMetadata(item.seo);
}
```

### JSON-LD — every page needs at minimum org schema

```typescript
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, makeBreadcrumbSchema } from "@/lib/seo";

// In the page component JSX:
<JsonLd data={[organizationSchema(), makeBreadcrumbSchema(breadcrumbs)]} />
```

Available schema helpers: `organizationSchema()`, `localBusinessSchema()`, `serviceSchema()`, `makeBreadcrumbSchema()`.

### API route pattern — all 9 routes follow this structure

```typescript
export const runtime = "nodejs"; // Required — file system access for data/*.json

export async function POST(request: Request) {
  // 1. Parse body
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 }); }

  // 2. Zod validate
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 3. Honeypot check
  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected." }, { status: 400 });
  }

  // 4. Store + email (wrapped in try/catch)
  try {
    storeToJsonFile(parsed.data);
    sendEmail(parsed.data).then(() => {}).catch(console.error); // fire-and-forget
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[ROUTE-NAME] Failed", error);
    return NextResponse.json({ ok: false, error: "Unable to process your request." }, { status: 500 });
  }
}
```

### Content system — never create JSON/YAML content files

All content lives in `src/content/index.ts` as typed TypeScript arrays:
- Add a new service → append to `services` array, match `Service` type from `src/content/types.ts`
- Add a new industry → append to `industries` array
- Add a new region page → append to `regions` array

Content auto-appears in the sitemap and has a route at `/services/[slug]` etc.
Import as `@/content` (barrel export), not `@/content/index`.

### Component pattern

```typescript
// src/components/category/my-component.tsx
type MyComponentProps = {
  title: string;
  description: string;
  className?: string;
};

export function MyComponent({ title, description, className }: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* content */}
    </div>
  );
}
```

- **Named exports only** — never `export default` for components
- Props typed inline as `type XProps = {...}` above the function
- `cn()` from `@/lib/utils` for conditional Tailwind classes
- Design tokens: `text-ink`, `text-ink/78`, `bg-paper`, `border-white/10`, `text-accent-1`, `bg-accent-1`
- `"use client"` only when using `useState`, `useEffect`, `useRef`, event handlers, or browser APIs
- Server components are the default — do not add `"use client"` unless required

### Microsite pattern — adding a new regional microsite

1. Create `src/components/microsites/[cc]-config.ts` — export `ccConfig: RegionalConfig`
2. `RegionalConfig` type is in `src/components/microsites/types.ts`
3. Create `src/app/(site)/[cc]/page.tsx` — import config, export metadata, render `<RegionalPage config={ccConfig} />`
4. Add hreflang alternates to the config's `meta.alternates`
5. Add route to `src/app/sitemap.ts` static routes section

Note: `/sg`, `/ae`, `/au`, `/nz`, `/eu` are **flat microsite routes**, not under `/regions/`. The `/regions/[slug]` pages are separate SEO landing pages targeting different search intent.

### Standard page structure

Every marketing page uses this section order:
1. `<JsonLd>` — schema markup (before visible content)
2. `<PageHero eyebrow="..." title="..." description="..." chips={[...]} />`
3. `<StickyScene>` with 3 frames (key value propositions)
4. `<DetailPanelsSection>` — expandable panels for long content (crawlable)
5. `<CtaBand title="..." primaryHref="/contact" secondaryHref="/book" />`

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URLs, sitemap, OG metadata |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Calendly URL. Falls back to `/book` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional | Displayed on contact page + WhatsApp link |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Analytics tracking domain |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Optional | Google Search Console meta tag |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Optional | GA4 id (`G-XXXX`). GA4 + AI-referral events load only when set |
| `NEXT_PUBLIC_LINKEDIN_COMPANY_URL` | Optional | Company LinkedIn — wired into Organization `sameAs` |
| `NEXT_PUBLIC_LINKEDIN_FOUNDER_URL` | Optional | Founder LinkedIn — wired into Person `sameAs` |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Optional | `@handle` for `twitter:site`/`creator` + `sameAs` |
| `NEXT_PUBLIC_ORG_LOGO` | Optional | Path to square raster logo for Organization `logo` (defaults to `/og-default.png`) |
| `NEXT_PUBLIC_FOUNDER_IMAGE` | Optional | Path to founder headshot for Person `image` |
| `RESEND_API_KEY` | Production | All email sending |
| `CONTACT_TO_EMAIL` | Production | Where contact form submissions are sent |
| `CONTACT_FROM_EMAIL` | Production | Sender identity |
| `CRON_SECRET` | Production | Bearer token for Vercel cron job auth |

Add new server-side env vars to the Zod schema in `src/lib/env.ts` via `getServerEnv()`. Client-exposed (`NEXT_PUBLIC_*`) vars are read via getters in `src/lib/site-config.ts` and validated non-fatally in `getClientEnvIssues()`.

### Structured data (`@graph`) and AEO
- All page JSON-LD flows through `buildGraph([...])` in `src/lib/seo.ts`, producing one `@graph` with `@id`-cross-linked nodes. The site-wide Organization + WebSite + Person graph is rendered once in `src/app/layout.tsx` via `siteGraph()`; page graphs reference those nodes by `@id`.
- AEO components live in `src/components/aeo/` (`AnswerBlock`, `KeyTakeaways`, `DefinitionBlock`, `ComparisonTable`). Blog/glossary/solution prose renders through the in-repo Markdown parser (`src/lib/markdown.ts` → `MarkdownRenderer`) — no markdown libs, no `dangerouslySetInnerHTML`.
- Internal linking is derived centrally in `src/lib/related.ts` (`relatedFor(href)`), grouped by topic cluster — detail pages render `<RelatedLinks>` from it, so new content auto-links and stays orphan-free.
- New content lives in `src/content/index.ts`: `solutions` (`/solutions`), `glossaryTerms` (`/glossary`), `packages` (single source for `/pricing` AND `/api/catalog`), and `testimonials` (genuine only — powers Review/AggregateRating). RSS feed: `/blog/feed.xml`.

## Email / Nurture Sequence

Guide download funnel runs a 5-email sequence:
- **Day 0**: Immediate on download (`/api/guide-download` fires `sendWelcomeEmail()`)
- **Day 2, 5, 10, 14**: Sent by Vercel cron at 09:00 UTC daily (`/api/cron/nurture-emails`)

Cron config in `vercel.json`. Template functions: `src/lib/email-templates/guide-emails.ts`. Orchestrator: `src/lib/guide-emails.ts`. Lead state in `data/leads.json` via `src/lib/leads-store.ts`.

`src/lib/email.ts` handles **contact form emails only** — it is not the nurture system.

## Data Storage

All form submissions persist to `data/*.json` as append-only stores. This directory is intentionally versioned (small-volume B2B lead data). `runtime = "nodejs"` is required on all API routes that touch these files. Do not truncate or overwrite `data/*.json` without explicit confirmation — it contains real lead data.

## Deployment

- Push to `origin main` → Vercel auto-deploys (watch for TypeScript errors in build output)
- `getSiteUrl()` in `src/lib/site-config.ts` reads `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → `NEXT_PUBLIC_SITE_URL` — always set `NEXT_PUBLIC_SITE_URL` in Vercel for correct canonical URLs
- Cron runs daily at `0 9 * * *` UTC

## What NOT To Do

- Do NOT use `export default` for components — named exports only
- Do NOT add a CMS — content lives in `src/content/index.ts` as typed TS
- Do NOT create `.json` or `.yaml` content files
- Do NOT hardcode hex colors in Tailwind classes — use design tokens
- Do NOT use `runtime = "edge"` on API routes that read/write `data/*.json`
- Do NOT `await` email sends in the response path on lead-capture routes — fire-and-forget
- Do NOT omit `honeypot` from new form schemas
- Do NOT import components with relative paths — always use `@/` aliases
- Do NOT skip `canonicalPath` in `buildMetadata()` calls
- Do NOT use `params.slug` directly in Next.js 15 dynamic routes — always `await params` first
- Do NOT add `generateStaticParams` to non-dynamic routes
- Do NOT manually edit `data/*.json` files — API routes and the cron job manage state
