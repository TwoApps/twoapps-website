# Vercel Deploy Runbook

Use this file whenever deploying this project to Vercel.

## One-time setup (already done for this repo)

This repo is already linked to a Vercel project via `.vercel/project.json`.

## Pre-deploy checks

```bash
npm install
npm run build
```

If the build passes locally, deploy.

## Production deploy (recommended command)

Use a local npm cache so `npx` does not fail on `~/.npm` permission issues:

```bash
npm_config_cache=.npm-cache npx vercel@50.23.2 --prod --yes
```

## First-time CLI install prompt

If `npx` asks:

```text
Need to install the following packages:
vercel@50.23.2
Ok to proceed? (y)
```

Type `y`.

## Expected result

Vercel prints:

- `Production:` deployment URL
- `Aliased:` custom domain URL (currently `https://thetwoapps.com`)

## Environment variables (Vercel project)

Set these in Vercel Project Settings before production use:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Optional:

- `NEXT_PUBLIC_BOOKING_URL`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_GSC_VERIFICATION`

## Troubleshooting

### `vercel: command not found`

Use `npx`:

```bash
npx vercel --prod --yes
```

### npm cache permission error (`EACCES` / `~/.npm/_cacache`)

Use the local-cache command:

```bash
npm_config_cache=.npm-cache npx vercel@50.23.2 --prod --yes
```

### Build works locally but fails on Vercel

Check:

- Missing Vercel environment variables
- Node/package install issues in build logs
- Next.js lint/type errors (Vercel runs build checks)

