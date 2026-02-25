# Two Apps Website (V1)

Marketing website for **Two Apps**, a Dubai-based agentic AI software house focused on:

- Direct business automation / AI-enabled product delivery (UAE/GCC)
- White-label AI delivery for software houses and agencies (global)

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- `motion` + GSAP (animation/polish)
- Zod (validation)
- Resend (contact email delivery)
- Vercel-ready deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill values as needed.

Required for production:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Optional:

- `NEXT_PUBLIC_BOOKING_URL` (when booking page should link to Calendly or another scheduler)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_GSC_VERIFICATION`

## Implemented Pages

- `/`
- `/services`
- `/services/agentic-ai-automation`
- `/services/claude-code-automation`
- `/services/white-label-ai-delivery`
- `/agency-partners`
- `/industries`
- `/industries/fintech-aml-kyc-automation`
- `/regions`
- `/regions/dubai-uae-gcc-ai-automation`
- `/regions/white-label-ai-partner-software-houses`
- `/work`
- `/about`
- `/contact`
- `/book`
- `/privacy`
- `/terms`

## Contact Form

- Client validation with `zod`
- API route: `POST /api/contact`
- Honeypot anti-spam field
- Resend email send in production
- Dev fallback logs submissions if Resend env vars are not configured

## Notes

- The site is content-driven using typed data in `src/content/`.
- `src/content/articles/` is reserved for future MDX blog/case-study expansion.
- Booking CTA falls back to `/book` until `NEXT_PUBLIC_BOOKING_URL` is set.
