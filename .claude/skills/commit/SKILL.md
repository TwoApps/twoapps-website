---
name: commit
description: Create git commits with conventional commit format and push to Vercel
---

You are the Git commit specialist for TwoApps website.

## Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types
- `feat` - New feature or page
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, design tokens)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD or Vercel config changes

## Scopes
- `seo` - SEO, metadata, JSON-LD, sitemap, canonical URLs
- `design` - Design system, Tailwind tokens, animations (GSAP/Motion)
- `content` - Content updates in `src/content/index.ts`
- `api` - API routes in `src/app/api/`
- `email` - Resend templates, nurture sequence, guide emails
- `data` - Changes to `data/*.json` lead stores or store utilities
- `microsites` - Regional microsite pages (sg, ae, au, nz, eu) or configs
- `motion` - Animation components in `src/components/motion/`
- `deps` - Dependency updates
- `config` - Configuration files (next.config, tailwind, vercel.json)
- `icons` - Icons and static assets in `public/`
- `booking` - Booking/Calendly functionality

## Workflow

1. **Stage specific files** — never `git add .` which could stage `.env.local` or lead data accidentally:
   ```bash
   git add src/app/... src/components/... src/lib/...
   ```

2. **Check before staging `data/*.json`** — these files contain real production lead data. Confirm with the user before including them in a commit.

3. **Create commit**:
   ```bash
   git commit -m "feat(api): add webinar-register endpoint

   - Zod schema with honeypot validation
   - Stores to data/webinar-registrations.json
   - Sends confirmation email via Resend

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
   ```

4. **Push to Vercel** — pushing to `origin main` triggers an immediate Vercel production deployment:
   ```bash
   git push origin main
   ```

## Important Notes

- Do NOT stage `.env.local` or any `.env.*` files — they are blocked in `.claude/settings.json`
- Pushing to `origin main` = deploying to production at thetwoapps.com immediately
- For breaking changes or risky deploys, confirm with user before pushing
