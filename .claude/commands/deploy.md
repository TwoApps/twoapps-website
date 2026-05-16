Deploy the TwoApps website to Vercel production. Follow these steps:

1. Run `npm run typecheck && npm run build` — if either fails, stop and report the errors. Do not deploy a broken build.

2. Check git status. If there are uncommitted changes, ask: "You have uncommitted changes. Deploy anyway, or commit first?" Wait for response.

3. If proceeding: run `npx vercel --prod` (or `vercel --prod` if CLI is installed globally).

4. After deployment completes, show:
   - The production deployment URL
   - The deployment ID
   - Confirm the cron path `/api/cron/nurture-emails` is still in `vercel.json`

5. Remind to verify `NEXT_PUBLIC_SITE_URL` matches the production domain in Vercel project settings — canonical URLs and the sitemap depend on it.
