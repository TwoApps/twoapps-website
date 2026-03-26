# Guide Download Funnel - Email Automation

## Overview

This system automates email nurturing for leads who download the "5 AI Workflows That Actually Save Time" guide from the TwoApps website.

## Architecture

### Components

1. **Lead Storage** (`src/lib/leads-store.ts`)
   - Persists lead data to `data/leads.json`
   - Tracks nurture sequence status (Day 0, 2, 5, 10, 14)
   - Manages email engagement stats

2. **Email Templates** (`src/lib/email-templates/guide-emails.ts`)
   - 5 HTML email templates with brand-compliant styling
   - Day 0: Welcome + PDF delivery
   - Day 2: Case study / social proof
   - Day 5: Common AI workflow use cases
   - Day 10: How pilots work at TwoApps
   - Day 14: Free consultation offer

3. **Email Sending** (`src/lib/guide-emails.ts`)
   - Resend integration for email delivery
   - Error handling and logging
   - Email tagging for analytics

4. **API Routes**
   - `/api/guide-download` - Captures leads and sends Day 0 email
   - `/api/cron/nurture-emails` - Sends scheduled nurture emails (Days 2, 5, 10, 14)

5. **Cron Configuration** (`vercel.json`)
   - Runs nurture email processing every hour
   - Managed by Vercel Cron Jobs

## Email Sequence

### Day 0: Welcome + PDF Delivery (Immediate)
**Sent:** Immediately upon form submission
**Content:**
- PDF download link
- Guide overview
- Sets expectations for follow-up sequence
- Asks qualifying question about their biggest pain point

### Day 2: Case Study / Social Proof
**Sent:** 2 days after download
**Content:**
- Real logistics company case study
- 20+ hours/week saved
- Free workflow audit offer
- CTA: Book audit call

### Day 5: Common AI Workflow Use Cases
**Sent:** 5 days after download
**Content:**
- 5 most common automation workflows
- Time savings for each
- Audit offer
- CTA: Book audit or reply to email

### Day 10: How Pilots Work
**Sent:** 10 days after download
**Content:**
- De-risked pilot process explanation
- 4-step approach (Audit → Proposal → Pilot → Scale)
- Emphasizes low commitment
- CTA: Book audit

### Day 14: Free Consultation Offer
**Sent:** 14 days after download
**Content:**
- Summary of value provided
- Strong audit offer
- Alternative CTAs (reply, follow LinkedIn)
- Final push for engagement

## Setup

### 1. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `RESEND_API_KEY` - From [Resend Dashboard](https://resend.com/api-keys)
- `CONTACT_FROM_EMAIL` - Should be `TwoApps <team@twoapps.com>`
- `CONTACT_TO_EMAIL` - Should be `team@twoapps.com`
- `CRON_SECRET` - Generate with: `openssl rand -base64 32`

### 2. Set Vercel Environment Variables

In your Vercel project settings, add:

```
RESEND_API_KEY=re_xxx
CONTACT_FROM_EMAIL=TwoApps <team@twoapps.com>
CONTACT_TO_EMAIL=team@twoapps.com
CRON_SECRET=your-random-secret
```

### 3. Verify Cron Job

After deploying to Vercel, the cron job will automatically be registered:
- **Schedule:** Every hour (0 * * * *)
- **Endpoint:** `/api/cron/nurture-emails`
- **Auth:** Requires `Authorization: Bearer <CRON_SECRET>` header

Check Vercel dashboard → Project → Crons to verify it's active.

### 4. Test Locally

To test the nurture sequence:

```bash
# Test nurture email processing
curl -H "Authorization: Bearer your-cron-secret" \
  http://localhost:3000/api/cron/nurture-emails
```

## Data Storage

### Lead Structure

```typescript
type LeadEntry = {
  id: string;
  name: string;
  email: string;
  company: string;
  sourcePage: string;
  downloadedAt: string;
  
  nurtureSequence: {
    day0Sent: boolean;
    day0SentAt?: string;
    day2Sent: boolean;
    day2SentAt?: string;
    day5Sent: boolean;
    day5SentAt?: string;
    day10Sent: boolean;
    day10SentAt?: string;
    day14Sent: boolean;
    day14SentAt?: string;
  };
  
  emailStats: {
    emailsSent: number;
    lastEmailSentAt?: string;
    unsubscribed: boolean;
    bounced: boolean;
  };
}
```

### Storage Location

Leads are stored in `data/leads.json` at the project root.

**Note:** This is file-based storage suitable for moderate traffic. For production scale, consider migrating to:
- Vercel KV (Redis)
- Supabase
- PlanetScale

## Monitoring

### Logs

All events are logged with prefixes:
- `[GUIDE-DOWNLOAD]` - Lead capture and Day 0 sending
- `[GUIDE-EMAIL]` - Individual email sending
- `[NURTURE-CRON]` - Cron job execution

View logs in Vercel dashboard → Project → Functions → Logs.

### Metrics to Track

1. **Lead Capture Rate**
   - Form submissions per day/week
   - Conversion rate by source page

2. **Email Deliverability**
   - Bounce rate (check Resend dashboard)
   - Unsubscribe rate

3. **Nurture Sequence Completion**
   - Percentage receiving all 5 emails
   - Engagement at each stage

4. **Conversion**
   - Audit bookings from nurture sequence
   - Reply rate to emails

## Customization

### Edit Email Templates

Templates are in `src/lib/email-templates/guide-emails.ts`.

Each template function returns:
```typescript
{
  subject: string;
  html: string;
}
```

### Modify Timing

Edit `getLeadsForNurtureEmail()` in `src/lib/leads-store.ts`:

```typescript
const daysMap = {
  day0: 0,
  day2: 2,
  day5: 5,
  day10: 10,
  day14: 14
};
```

### Change Cron Schedule

Edit `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/nurture-emails",
      "schedule": "0 */2 * * *"  // Every 2 hours
    }
  ]
}
```

Cron syntax: `minute hour day month weekday`

## Troubleshooting

### Emails Not Sending

1. Check `RESEND_API_KEY` is set in Vercel
2. Verify email in Resend dashboard (logs section)
3. Check function logs in Vercel for errors
4. Ensure leads are being captured (check `data/leads.json`)

### Cron Not Running

1. Verify `vercel.json` is committed and pushed
2. Check Vercel dashboard → Crons
3. Ensure `CRON_SECRET` is set in environment
4. Test manually: `curl -H "Authorization: Bearer $CRON_SECRET" https://thetwoapps.com/api/cron/nurture-emails`

### Lead Data Not Persisting

1. Check file permissions on `data/` directory
2. Verify runtime is `nodejs` (not `edge`)
3. Check function logs for write errors

## Security

### Spam Protection

- Honeypot field in form (hidden field)
- Email validation with Zod
- Rate limiting via Vercel

### Authorization

- Cron endpoint requires `Authorization: Bearer <CRON_SECRET>`
- 401 response if unauthorized

### Data Privacy

- Leads stored locally (not sent to third parties)
- Unsubscribe link in every email (Resend handles)
- GDPR/PDPA compliant (no data sold or shared)

## Future Improvements

1. **Database Migration**
   - Move from file-based to Vercel KV or Supabase
   - Better query capabilities
   - Atomic operations

2. **Email Analytics**
   - Track opens, clicks
   - A/B test subject lines
   - Segment by region/company size

3. **Dynamic Content**
   - Personalize based on company size
   - Regional case studies
   - Behavior-triggered emails

4. **Lead Scoring**
   - Score based on engagement
   - Priority routing for hot leads
   - Integration with CRM (HubSpot)

5. **Webhook Integration**
   - Resend webhooks for delivery tracking
   - Update lead stats on bounce/unsubscribe

## Support

For questions or issues:
- **Internal:** Check Vercel logs first
- **Resend:** [Resend Documentation](https://resend.com/docs)
- **Vercel Cron:** [Vercel Cron Jobs Docs](https://vercel.com/docs/cron-jobs)
