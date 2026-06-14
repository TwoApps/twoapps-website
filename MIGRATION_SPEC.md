# TwoApps Design Migration Spec

## Source of truth
`TwoApps Home (offline).html` in the repo root contains the new home-page design. It is a self-contained bundled HTML page. This file defines the new visual language that must be applied across the entire Next.js app.

## Design tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--cream` | `#F7F5EF` | Primary page background |
| `--ink` | `#16150F` | Primary text, dark buttons, logo mark |
| `--blue` | `#2742CE` | Primary accent, links, CTA background, emphasis |
| `--orange` | `#FF6A1A` | Secondary accent, highlights, logo mark details |
| `--cream-dark` | `#EFECE2` | Marquee / band backgrounds |
| `--white` | `#FFFFFF` | Cards, alternating section backgrounds |
| Muted text | `rgba(22,21,15,0.58)` | Body / secondary text |
| Subtle borders | `rgba(22,21,15,0.12)` | Dividers, card borders |

### Typography
Load via `next/font/google` or Google Fonts `<link>`:
- **Display / headings:** `Bricolage Grotesque` (variable weight 200-800)
- **Body:** `Instrument Sans` (400, 500, 600)
- **Serif emphasis / italic accents:** `Instrument Serif` (400, 400 italic)
- **Mono labels / eyebrow text:** `JetBrains Mono` (400, 500)

Tailwind font families to map:
- `font-display` → `Bricolage Grotesque`
- `font-body` → `Instrument Sans`
- `font-serif-accent` → `Instrument Serif`
- `font-mono` → `JetBrains Mono`

### Spacing / layout
- Max content width: `1320px`
- Horizontal page padding: `48px` on desktop, `16px-24px` on mobile
- Section vertical padding: `110px-130px` typical
- Cards: `border-radius: 22px`, border `1px solid rgba(22,21,15,0.1)`, subtle shadow
- Buttons: pill-shaped (`border-radius: 999px`)
- Header: fixed, becomes glassmorphic on scroll (`rgba(247,245,239,0.8)` + `backdrop-filter: blur(18px)`)

### Logo
The bundled HTML contains a CSS/SVG logo mark: four vertical bars with orange stripes and a blue dot. Re-create this as a React component or SVG. The wordmark is:
- "two" in `Bricolage Grotesque` bold
- "apps" in `Instrument Serif` italic blue

## Global changes required

1. **Fonts** (`src/app/layout.tsx`)
   - Load `Bricolage Grotesque`, `Instrument Sans`, `Instrument Serif`, `JetBrains Mono`.
   - Apply CSS variables for font families.

2. **Tailwind config** (`tailwind.config.ts`)
   - Replace/extend colors with the new tokens.
   - Add `serif-accent` font family.
   - Add keyframes/animations used by the new design (heroIn, marqueeScroll, pipeDot, softPulse, botBlink).

3. **Global CSS** (`src/app/globals.css`)
   - Replace the dark aurora/glass styles with the new light theme.
   - Set `body { background: #F7F5EF; color: #16150F; }`
   - Update `::selection` to blue/cream.
   - Update utility classes (`.glass-panel`, `.nav-shell`, `.neon-frame`, `.focus-ring`, etc.) to the light aesthetic or remove if no longer used.
   - Keep accessibility media queries for reduced motion / small screens.

4. **Shared UI primitives** (read and adapt)
   - `src/components/ui/button.tsx`
   - `src/components/ui/card.tsx`
   - `src/components/ui/heading.tsx`
   - `src/components/ui/section.tsx`
   - `src/components/ui/tag.tsx`
   Update them to use the new colors/fonts so every page that imports them gets the new look automatically.

5. **Site shell** (`src/components/site/site-shell.tsx`, `src/components/site/floating-nav.tsx`, `src/components/site/footer.tsx`, `src/components/site/background-layer.tsx`)
   - `floating-nav.tsx`: keep the current navigation **links** from `siteNav` (the user explicitly said do not change the links). Change the visual style to the new light theme: transparent background at top, glassmorphic cream on scroll, new logo component, pill-shaped "Book a call" button.
   - `footer.tsx`: restyle to match the new footer in the HTML (3-column grid, muted links, mono labels, logo + tagline).
   - `background-layer.tsx`: remove the dark glow/aurora elements or replace with a very subtle light texture. The new design is mostly flat cream/white.
   - `site-shell.tsx`: keep structure; update any wrapper classes for new background.

## Home page

Rebuild `src/components/home/cinematic-home.tsx` (and update `src/app/(site)/page.tsx` if needed) to match the bundled HTML exactly. Sections, in order:

1. **Hero** (`#top`)
   - Eyebrow row: blue dot pulse, mono label "AI AUTOMATION STUDIO — DUBAI, UAE", divider, mono label "EST. WEEKLY SAVINGS: 20+ HRS"
   - Headline: "Give your team back the *hours* AI should be handling." with "hours" in Instrument Serif italic blue.
   - Subheadline + two CTAs: "Book a call" (dark pill) and "See how we work" (outline pill)
   - Pipeline strip with animated blue dot travelling along a line and four mono labels

2. **Marquee**
   - Cream-dark background (`#EFECE2`)
   - Infinite scrolling mono labels separated by blue sparkles

3. **Stats**
   - 3-column grid
   - "20+", "1st", "0" with supporting copy
   - Optional scroll-triggered reveal animations

4. **Three tracks** (`#tracks`)
   - Eyebrow "( 01 ) — WHAT WE DO"
   - Headline "Three ways we *plug in*"
   - 3 cards: "Automate the repeat work", "Ship an AI-powered v1", "Deliver AI under your brand"
   - Link each card to the correct internal route (`/services`, `/services`, `/agency-partners`)

5. **Process** (`#process`)
   - White background section
   - Eyebrow "( 02 ) — HOW WE WORK"
   - Headline "One workflow, *proven first.* Then the next."
   - Three rows: Audit, Pilot, Stabilize

6. **CTA** (`#contact`)
   - Blue rounded container
   - Eyebrow "( 03 ) — START HERE"
   - Headline in Instrument Serif italic cream: "Tell us the workflow that wastes the most time."
   - Two buttons: "Book a call" (cream pill) and "Contact form" (outline cream)

7. **Footer**
   - As described in global changes.

Optional: the bundled HTML includes a "scroll companion bot" (TARS-style robot that follows scroll and shows speech bubbles). Implementing this is optional but recommended if time allows; it is a signature visual element.

## Other pages

For every other page under `src/app/(site)/`:
- Keep the existing content and structure.
- Apply the new light theme by updating imports/classes to use new tokens.
- Replace dark-themed wrappers/gradients with cream/white backgrounds.
- Update buttons to the new pill style.
- Update cards to the new light card style.
- Ensure text has enough contrast on the new cream/white backgrounds.
- Keep page-specific components working.

Pages to migrate:
- about, academy, services, services/[slug], agency-partners, industries, industries/[slug], work, contact, book, livestream, community, compliance, privacy, terms, regions, regions/[slug], guide, refer, ae, au, eu, nz, sg.

## Verification

After changes, run:
```bash
npm run build
```
Fix any TypeScript, Tailwind, or build errors. Keep existing functionality (forms, links, JSON-LD, analytics) intact.

## Notes
- Do not change the navigation link labels/paths (user explicitly requested this).
- Use Next.js `<Link>` for internal links, keep external links (Calendly) as `<a>`.
- Keep the Plausible script and JSON-LD metadata.
- Prefer Tailwind classes; use inline styles only for one-off values that have no Tailwind equivalent.
