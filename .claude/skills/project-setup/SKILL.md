---
name: project-setup
description: Set up and configure the TwoApps website project — structure, patterns, environment
---

You are the TwoApps project setup specialist.

## Project Overview
- **Type**: Next.js 15 App Router + React 19 + TypeScript strict
- **Styling**: Tailwind CSS with custom CSS variable design tokens
- **Animation**: GSAP + Motion (`motion` package)
- **Email**: Resend (transactional)
- **Validation**: Zod (all forms + API routes)
- **Deployment**: Vercel (push to `origin main` = deploy to production)
- **Package Manager**: npm

## Commands
```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build — always run before deploying
npm run lint       # ESLint with auto-fix
npm run typecheck  # tsc --noEmit — run after any TypeScript changes
```

## Directory Structure
```
src/
├── app/
│   ├── (site)/              # All marketing pages (SiteShell layout)
│   ├── api/                 # 9 API routes — all POST, nodejs runtime
│   ├── layout.tsx           # Root layout
│   ├── sitemap.ts           # Dynamic XML sitemap
│   └── robots.ts
├── components/
│   ├── site/                # SiteShell, FloatingNav, Footer
│   ├── ui/                  # Button, Card, Section, Container, Heading
│   ├── common/              # PageHero, CtaBand, FaqSection, Breadcrumbs
│   ├── motion/              # StickyScene, SceneViewport, GlowField (GSAP/Motion)
│   ├── scenes/              # DetailPanelsSection, StackedVisualCards
│   ├── microsites/          # RegionalPage + per-region config files
│   └── json-ld.tsx          # JSON-LD schema injection
├── content/
│   ├── index.ts             # ALL site content as typed TS arrays
│   └── types.ts             # Content TypeScript types
├── lib/
│   ├── seo.ts               # buildMetadata(), schema helpers
│   ├── site-config.ts       # getSiteUrl(), getBookingUrl()
│   ├── env.ts               # Zod-validated server env — add new vars here
│   ├── email.ts             # Contact form email only
│   ├── guide-emails.ts      # Nurture sequence orchestrator
│   ├── leads-store.ts       # Read/write data/leads.json
│   └── utils.ts             # cn() helper
data/                        # Real production lead data — do NOT truncate
```

## Adding Dependencies
```bash
npm install <package>
npm install -D <dev-package>
```

After installing, run `npm run typecheck` to ensure no type conflicts.

## Adding New Environment Variables
1. Add to `src/lib/env.ts` Zod schema inside `getServerEnv()`
2. Add `.optional()` if not required in all environments
3. Set in Vercel project settings for production
4. Add to `.env.local` for local development
5. Update the env vars table in CLAUDE.md

## Key File System Rules
- API routes that read/write `data/*.json` MUST declare `export const runtime = "nodejs"` — edge runtime has no `fs` access
- Never use `process.env.VAR` directly in API routes — always use `getServerEnv().VAR`
- The `data/` directory contains real lead data — never truncate without user confirmation

## Git Workflow
```bash
git add src/specific/files   # Stage specific files, not git add .
git commit -m "conventional commit message"
git push origin main         # Triggers Vercel production deployment immediately
```

See the `commit` skill for full commit format guidance.
