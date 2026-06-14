# TwoApps — SEO / AEO / GEO: what was shipped + what you do next

This build made the site eligible to rank in Google **and** be cited by AI answer
engines (ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews). On-page work
makes you *eligible*; the off-page work below is what actually earns citations.

## 1. Set these so the schema is complete (env vars in Vercel)

All optional — the code degrades gracefully without them, but each one strengthens
how Google/AI recognise TwoApps as a real entity.

| Env var | What it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Set this in production** (`https://thetwoapps.com`) — drives canonical URLs, sitemap, and every JSON-LD `@id`. |
| `NEXT_PUBLIC_LINKEDIN_COMPANY_URL` | Adds the company LinkedIn to Organization `sameAs`. |
| `NEXT_PUBLIC_LINKEDIN_FOUNDER_URL` | Adds Zain's LinkedIn to Person `sameAs`. |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Turns on GA4 + the AI-referral event (ChatGPT/Perplexity/Gemini/Claude). |
| `NEXT_PUBLIC_TWITTER_HANDLE` | `@handle` for `twitter:site`/`creator` + `sameAs` (only if you have one). |
| `NEXT_PUBLIC_ORG_LOGO` | Path to a square raster logo (e.g. `/logo-512.png`) for Organization `logo`. Defaults to `/og-default.png`. |
| `NEXT_PUBLIC_FOUNDER_IMAGE` | Path to Zain's headshot (e.g. `/zain-hassan.jpg`) for Person `image`. |

Optional assets to drop in `public/`: a square `logo-512.png` / `logo-192.png`
(better PWA + logo schema) and `zain-hassan.jpg` (founder headshot).

## 2. Add genuine testimonials (do not skip — this is high-leverage)

`src/content/index.ts` has an empty `testimonials: Testimonial[] = []`. Fill it with
**real, approved** named quotes (and optional ratings/results). When populated, the
site can render Review + AggregateRating schema. Never invent these — fake reviews
violate Google policy and risk a manual action.

> Note: the existing `/au`, `/sg`, `/nz`, `/eu` microsite configs contain placeholder
> testimonials with invented names/stats (pre-existing). Replace them with real ones
> or remove them — the two new microsites (`/ee`, `/latam`) ship with none on purpose.

## 3. Off-page GEO — where 82–85% of AI citations actually come from

AI engines are consensus engines: they cite what's corroborated across the web, not
just your own site. Priorities, in order:

1. **G2 / Capterra / Trustpilot / Crunchbase** — complete, verified profiles; aim for 20+ genuine reviews. AI surfaces third-party review sites ~3× more than your own.
2. **Reddit + LinkedIn** — answer real questions in relevant communities with disclosure; share posts only when they genuinely answer. Reddit is the single most-cited source for Perplexity.
3. **Guest posts / earned media** — bylines in industry publications (legacy outlets are heavily cited by Claude/Perplexity).
4. **Wikipedia** — if/when notable enough, contribute accurately to relevant category pages.
5. **Consistent NAP + entity** — same company name, Dubai location, and links everywhere; keep the LinkedIn/Crunchbase/site `sameAs` set identical.

## 4. Measure it

- **GA4** (once the ID is set): Reports → Acquisition → Traffic acquisition. GA4 now auto-classifies an "AI Assistant" channel (ChatGPT/Gemini/Claude). Perplexity lands in Referral. Our custom `ai_referral` event also fires once per session to GA4 + Plausible.
- **Google Search Console**: watch impressions/clicks for the new keyword pages (`/solutions/*`, `/glossary/*`) and AI-Overview impressions.
- **Spot-check AI engines**: ask ChatGPT/Perplexity/Gemini "best AI automation agency in UAE", "what is agentic orchestration", "white-label AI delivery partner" and see whether TwoApps surfaces over time.

## 5. Keep feeding the machine

- Publish blog posts targeting the cluster topics; each new post auto-links via `relatedFor()` and appears in the sitemap + RSS.
- Add real metrics to `caseStudies` (the `metrics` field) as clients approve them.
- New keyword pages go in `src/content/index.ts` as `solutions`/`glossaryTerms` — routes, sitemap, llms.txt, and internal links pick them up automatically.

## What shipped (reference)

- Unified JSON-LD `@graph` (Organization + WebSite + SearchAction + Person, `@id`-cross-linked) site-wide; Service/Product/FAQPage/Article/DefinedTerm/BreadcrumbList/CollectionPage on the right pages.
- New pages: `/solutions` (agentic orchestration, vibe coding, AI consultancy, AI software house, AI development), `/glossary` (12 terms), `/pricing`, `/search`, 5 new industry pages, `/ee` + `/latam` microsites.
- AEO formatting: answer-first blocks, key-takeaways, definition blocks, comparison tables, question-style headings; rich Markdown rendering for blog/glossary; FAQs on home/about/work/pricing/blog.
- Crawl: updated robots (current AI bots), real `lastmod` in sitemap, `/blog/feed.xml` RSS, `/llms.txt` + `/llms-full.txt` + `/api/catalog` include solutions/glossary/pricing.
- Internal linking: topic-cluster engine (`src/lib/related.ts`) renders Related links on every detail page — no orphans.
- Measurement: GA4 + AI-referral tagging (`src/components/analytics.tsx`, `src/lib/ai-referrers.ts`).
