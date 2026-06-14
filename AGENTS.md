# TwoApps Website — Agent Guide

This file is a single source of truth for AI coding agents working on the TwoApps marketing website. Read this first before making any changes.

## Project Overview

This is the marketing website for **TwoApps**, a Dubai-based B2B AI automation and software delivery company. The site targets two customer tracks:

1. **Direct businesses** (UAE/GCC and global) — AI workflow automation, internal tools, compliance automation, and Claude/Claude Code delivery.
2. **White-label partners** (global agencies and software houses) — AI project delivery behind their brand.

Primary conversion goals: guide downloads (with a 5-email nurture sequence), contact form submissions, and Calendly bookings.

Production domain: **thetwoapps.com**

## Technology Stack

- **Framework:** Next.js 15 with App Router
- **Runtime:** React 19, TypeScript 5.7 (strict mode enabled)
- **Styling:** Tailwind CSS 3.4 with custom design tokens via CSS variables
- **Animations:** `motion` + GSAP
- **Validation:** Zod
- **Email:** Resend
- **Analytics:** Plausible (optional, via `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- **Deployment:** Vercel
- **Package Manager:** npm

Key config files:

- `package.json` — dependencies and scripts
- `next.config.ts` — Next.js config, security headers, image formats, redirects
- `tsconfig.json` — strict TypeScript, path alias `@/*` → `./src/*`
- `tailwind.config.ts` — design tokens (colors, fonts, keyframes, animations)
- `postcss.config.js` — Tailwind + autoprefixer
- `.eslintrc.json` — extends `next/core-web-vitals` and `next/typescript`
- `vercel.json` — Vercel cron job for nurture emails

## Project Structure

```
├── data/                        # File-based JSON data stores (versioned, real lead data)
│   ├── leads.json
│   ├── nurture-sequences.json
│   ├── academy-enrollments.json
│   ├── livestream-registrations.json
│   └── referrals.json
├── docs/
│   └── GUIDE_FUNNEL_AUTOMATION.md   # Detailed funnel/email automation docs
├── public/                      # Static assets, favicons, OG images, downloads
├── src/
│   ├── app/
│   │   ├── (site)/              # All marketing pages under shared SiteShell layout
│   │   │   ├── layout.tsx       # Renders <SiteShell> — nav + footer live here only
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── about/
│   │   │   ├── academy/
│   │   │   ├── agency-partners/
│   │   │   ├── blog/
│   │   │   ├── book/
│   │   │   ├── community/
│   │   │   ├── compliance/
│   │   │   ├── contact/
│   │   │   ├── guide/
│   │   │   ├── industries/      # List + [slug] detail pages
│   │   │   ├── livestream/
│   │   │   ├── pricing/
│   │   │   ├── privacy/
│   │   │   ├── refer/
│   │   │   ├── regions/         # List + [slug] detail pages
│   │   │   ├── services/        # List + [slug] detail pages
│   │   │   ├── terms/
│   │   │   ├── work/
│   │   │   └── sg/ ae/ au/ nz/ eu/  # Flat regional microsites (NOT under /regions/)
│   │   ├── api/                 # API routes, all Node.js runtime
│   │   │   ├── academy-enroll/route.ts
│   │   │   ├── catalog/route.ts
│   │   │   ├── community-request/route.ts
│   │   │   ├── contact/route.ts
│   │   │   ├── cron/nurture-emails/route.ts
│   │   │   ├── guide-download/route.ts
│   │   │   ├── livestream-register/route.ts
│   │   │   ├── nurture/route.ts
│   │   │   └── referral/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx           # Root layout — fonts, Plausible, JSON-LD website schema
│   │   ├── llms.txt/route.ts
│   │   ├── llms-full.txt/route.ts
│   │   ├── manifest.ts
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── academy/
│   │   ├── blog/
│   │   ├── book/
│   │   ├── case-studies/
│   │   ├── common/              # PageHero, CtaBand, FaqSection, Breadcrumbs, ExpandableDetailPanel
│   │   ├── contact/
│   │   ├── guide/
│   │   ├── home/                # Homepage sections and cinematic hero
│   │   ├── json-ld.tsx          # <JsonLd data={...}>
│   │   ├── livestream/
│   │   ├── map/
│   │   ├── microsites/          # RegionalPage renderer + per-region config files
│   │   ├── motion/              # GSAP/Motion wrappers and hooks
│   │   ├── plausible-script.tsx
│   │   ├── refer/
│   │   ├── scenes/              # Page section compositions
│   │   ├── shared/
│   │   ├── site/                # SiteShell, FloatingNav, Footer, BackgroundLayer, Logo
│   │   └── ui/                  # Button, Card, Container, Heading, Section, SplitPanel, Tag
│   ├── content/
│   │   ├── articles/.gitkeep    # Reserved for future MDX expansion
│   │   ├── index.ts             # ALL typed site content
│   │   └── types.ts             # TypeScript types for Service, Industry, RegionPage, BlogPost, etc.
│   ├── lib/
│   │   ├── academy-store.ts
│   │   ├── brand.ts             # BRAND_NAME, SEO_TARGET_REGIONS, SEO_PARTNER_FOCUS_REGIONS
│   │   ├── contact-schema.ts
│   │   ├── email.ts             # sendContactEmail()
│   │   ├── email-templates/     # guide-emails.ts
│   │   ├── env.ts               # Zod-validated server env
│   │   ├── guide-emails.ts      # Nurture orchestrator
│   │   ├── leads-store.ts
│   │   ├── livestream-schema.ts
│   │   ├── livestream-store.ts
│   │   ├── nurture-store.ts
│   │   ├── seo.ts               # buildMetadata(), schema.org helpers
│   │   ├── site-config.ts       # getSiteUrl(), getBookingUrl(), getCalendlyEmbedUrl()
│   │   └── utils.ts             # cn() helper + small utilities
│   └── types/
│       └── plausible.d.ts
```

## Build, Test, and Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build — also the CI gate
npm run start      # Start production server
npm run lint       # ESLint with auto-fix (via Next.js)
npm run typecheck  # tsc --noEmit — run after TypeScript changes
```

Always run `npm run build` before deploying. Run `npm run typecheck` after any TypeScript changes. The project has no automated test suite currently; correctness is verified via TypeScript and `next build`.

## Code Style and Conventions

### TypeScript

- Strict mode is enabled. `allowJs` is `false`.
- Path alias `@/*` maps to `./src/*`. Use it for all imports — **do not use relative paths**.
- Next.js 15 dynamic route `params` is a `Promise`; always `await params` before destructuring.

### Components

- **Named exports only.** Never use `export default` for components.
- Props are typed inline as `type MyComponentProps = {...}` directly above the component.
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes.
- Add `"use client"` only when the component uses `useState`, `useEffect`, `useRef`, event handlers, or browser APIs. Server components are the default.

Example:

```tsx
type MyComponentProps = {
  title: string;
  className?: string;
};

export function MyComponent({ title, className }: MyComponentProps) {
  return <div className={cn("base-classes", className)}>{title}</div>;
}
```

### Styling

- Use the design tokens; do **not** hardcode hex colors in Tailwind classes.
- Primary colors: `cream`, `cream-dark`, `ink`, `blue`, `orange`, `paper`.
- Font families: `font-display`, `font-body`, `font-serif-accent`, `font-mono`.
- Common opacity patterns: `text-ink/78`, `bg-paper`, `border-white/10`, `text-accent-1`, `bg-accent-1`.

### Content

- All marketing content lives in `src/content/index.ts` as typed TypeScript arrays.
- Never create separate JSON or YAML content files.
- Import from `@/content` (barrel export), not `@/content/index`.
- Adding a new service, industry, region, or blog post automatically surfaces it in the sitemap and relevant routes.

## SEO, Metadata, and JSON-LD

Every marketing page must export metadata and include JSON-LD schema.

### Static metadata

```tsx
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Title",
  description: "...",
  canonicalPath: "/path", // No trailing slash. Required.
  keywords: ["kw1", "kw2"],
  ogImage: "/og-default.svg"
});
```

### Dynamic metadata (slug pages)

```tsx
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // await required in Next.js 15
  const item = getItemBySlug(slug);
  if (!item) return {};
  return buildMetadata(item.seo);
}
```

### JSON-LD

```tsx
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, makeBreadcrumbSchema } from "@/lib/seo";

<JsonLd data={[organizationSchema(), makeBreadcrumbSchema(breadcrumbs)]} />
```

Available helpers in `src/lib/seo.ts`: `organizationSchema`, `localBusinessSchema`, `serviceSchema`, `makeBreadcrumbSchema`, `makeFaqPageSchema`, `personSchema`, `websiteSchema`, `collectionPageSchema`, `makeArticleSchema`, `makeHowToSchema`, `makeProductSchema`, `makeReviewSchema`, `aggregateRatingSchema`, `definedTermSchema`.

## Standard Page Structure

Marketing pages generally follow this section order:

1. `<JsonLd>` schema markup
2. `<PageHero eyebrow="..." title="..." description="..." chips={[...]} />`
3. `<StickyScene>` with three frames (key value propositions)
4. `<DetailPanelsSection>` — expandable, crawlable content panels
5. `<CtaBand title="..." primaryHref="/contact" secondaryHref="/book" />`

## API Route Patterns

All API routes are in `src/app/api/**/route.ts` and use `runtime = "nodejs"` because they read/write files in `data/`.

Standard POST route shape:

```ts
export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: false, error: "Spam detected." }, { status: 400 });
  }

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

Existing routes:

- `POST /api/contact` — contact form, sends email via Resend
- `POST /api/guide-download` — captures guide leads and fires Day 0 welcome email
- `GET /api/cron/nurture-emails` — Vercel cron, sends Day 2/5/10/14 nurture emails (requires `Authorization: Bearer <CRON_SECRET>`)
- `POST /api/academy-enroll` — academy enrollment
- `POST /api/livestream-register` — livestream registration
- `POST /api/community-request` — community join request
- `POST /api/referral` — referral submission
- `POST /api/nurture` — manual nurture trigger/status
- `GET /api/catalog` — machine-readable service catalog (JSON)

## Email and Nurture Sequence

Guide download triggers a 5-email nurture sequence:

- **Day 0:** Immediate welcome + PDF delivery (`/api/guide-download`)
- **Day 2, 5, 10, 14:** Sent by `/api/cron/nurture-emails`

Schedule in `vercel.json`: daily at 09:00 UTC.

Key files:

- `src/lib/leads-store.ts` — read/write `data/leads.json`, tracks nurture status
- `src/lib/guide-emails.ts` — orchestrator, Resend integration
- `src/lib/email-templates/guide-emails.ts` — HTML email templates
- `src/lib/email.ts` — contact form email only

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URLs, sitemap, OG metadata |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Calendly URL; falls back to `/book` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional | Displayed on contact page + WhatsApp link |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible analytics domain |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Optional | Google Search Console verification meta |
| `RESEND_API_KEY` | Production | Email sending |
| `CONTACT_TO_EMAIL` | Production | Contact form recipient |
| `CONTACT_FROM_EMAIL` | Production | Contact form sender identity |
| `CRON_SECRET` | Production | Bearer token for cron auth |

Add new server-side env vars to the Zod schema in `src/lib/env.ts`.

## Data Storage and Security

- Form submissions persist to `data/*.json` as append-only file stores.
- These files are intentionally versioned and contain real lead data. **Do not edit them manually.**
- API routes that touch these files **must** declare `runtime = "nodejs"`.
- Forms include a honeypot field for basic spam protection.
- All user input is validated with Zod before storage or email.
- Security headers are configured in `next.config.ts`.

## Deployment

- The repo is linked to a Vercel project via `.vercel/project.json`.
- Pushes to `origin main` auto-deploy to Vercel.
- Use `npm_config_cache=.npm-cache npx vercel@50.23.2 --prod --yes` for production deploys from the CLI (avoids npm cache permission issues).
- Always run `npm run build` locally first.
- `getSiteUrl()` reads `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → `NEXT_PUBLIC_SITE_URL`. Set `NEXT_PUBLIC_SITE_URL` in Vercel for correct canonical URLs.

## What Not To Do

- Do NOT use `export default` for components.
- Do NOT add a CMS — content lives in `src/content/index.ts`.
- Do NOT create JSON or YAML content files.
- Do NOT hardcode hex colors in Tailwind classes.
- Do NOT use `runtime = "edge"` on API routes that read/write `data/*.json`.
- Do NOT `await` email sends in the response path on lead-capture routes — fire-and-forget.
- Do NOT omit a `honeypot` field from new form schemas.
- Do NOT import components with relative paths.
- Do NOT skip `canonicalPath` in `buildMetadata()` calls.
- Do NOT use `params.slug` directly in dynamic routes — always `await params` first.
- Do NOT add `generateStaticParams` to non-dynamic routes.
- Do NOT manually edit `data/*.json` files.

## Useful Reference Docs

- `CLAUDE.md` — detailed internal patterns and directory map
- `MIGRATION_SPEC.md` — design tokens and visual migration notes
- `docs/GUIDE_FUNNEL_AUTOMATION.md` — email funnel architecture
- `VERCEL_DEPLOY.md` — Vercel deployment runbook
- `README.md` — quick start and page list
