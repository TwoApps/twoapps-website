/**
 * Email templates for the Guide Download Funnel
 * 5-email nurture sequence: Day 0, 2, 5, 10, 14
 */

import type { LeadEntry } from "@/lib/leads-store";

const BRAND = {
  accent: "#00A99D",
  text: "#020406",
  bg: "#FFFFFF",
  email: "team@twoapps.com",
  website: "https://thetwoapps.com",
  phone: "+971 55 672 7803"
};

function baseStyles() {
  return `
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Avenir Next, Segoe UI, Helvetica Neue, Arial, sans-serif;
        background-color: ${BRAND.bg};
        color: ${BRAND.text};
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
      }
      .logo {
        font-size: 24px;
        font-weight: bold;
        color: ${BRAND.accent};
        margin-bottom: 30px;
      }
      h1 {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 20px 0;
        color: ${BRAND.text};
      }
      h2 {
        font-size: 22px;
        font-weight: 600;
        margin: 30px 0 15px 0;
        color: ${BRAND.text};
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 15px 0;
        color: ${BRAND.text};
      }
      .button {
        display: inline-block;
        padding: 14px 28px;
        background-color: ${BRAND.accent};
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        margin: 10px 0;
      }
      .footer {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid #eee;
        font-size: 14px;
        color: #666;
      }
      .footer a {
        color: ${BRAND.accent};
        text-decoration: none;
      }
      .divider {
        height: 1px;
        background: #eee;
        margin: 30px 0;
      }
      ul {
        padding-left: 20px;
        margin: 15px 0;
      }
      li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
    </style>
  `;
}

/**
 * Day 0: Welcome + PDF Delivery
 */
export function welcomeEmailTemplate(lead: LeadEntry): { subject: string; html: string } {
  const subject = "Here's Your AI Workflows Guide 🚀";
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="logo">TwoApps</div>
        
        <h1>Thanks for downloading our guide, ${lead.name.split(' ')[0]}!</h1>
        
        <p>You made a smart choice. The <strong>"5 AI Workflows That Actually Save Time"</strong> guide is packed with practical automation strategies that companies are using right now to cut hours from their weekly workload.</p>
        
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://thetwoapps.com/downloads/5-ai-workflows-guide.pdf" class="button">
            Download Your PDF Guide
          </a>
        </p>
        
        <h2>What's Inside:</h2>
        <ul>
          <li><strong>Email Triage System</strong> — Auto-sort, prioritize, and draft responses</li>
          <li><strong>Document Processing Pipeline</strong> — Extract data from invoices, contracts, and forms</li>
          <li><strong>Customer Support Automation</strong> — Reduce response time by 70%</li>
          <li><strong>Report Generation</strong> — Turn raw data into executive summaries</li>
          <li><strong>Meeting Prep Workflow</strong> — Auto-aggregates context and pre-read materials</li>
        </ul>
        
        <div class="divider"></div>
        
        <h2>Quick Question</h2>
        <p>While you're reading through the guide, think about this:</p>
        <p style="font-size: 18px; font-style: italic; padding: 20px; background: #f8f8f8; border-left: 4px solid ${BRAND.accent};">
          "What's the ONE process in your business that takes the most manual time right now?"
        </p>
        <p>That's usually the highest-ROI automation opportunity — and exactly what we help companies implement.</p>
        
        <div class="divider"></div>
        
        <p><strong>Over the next two weeks</strong>, I'll share real examples of how companies like yours have applied these workflows, plus how our pilot process works at TwoApps.</p>
        
        <p>Keep an eye on your inbox.</p>
        
        <p>Cheers,<br>
        <strong>Zain</strong><br>
        CEO, TwoApps</p>
        
        <div class="footer">
          <p>
            <a href="${BRAND.website}">TwoApps</a> | ${BRAND.email} | ${BRAND.phone}<br>
            Dubai, UAE — Global Delivery
          </p>
          <p style="font-size: 12px; margin-top: 10px;">
            You're receiving this because you downloaded our AI Workflows Guide. 
            <a href="{{RESEND_UNSUBSCRIBE_URL}}">Unsubscribe</a> anytime.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}

/**
 * Day 2: Case Study / Social Proof
 */
export function caseStudyEmailTemplate(lead: LeadEntry): { subject: string; html: string } {
  const subject = "How a 50-person company saved 20+ hours/week";
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="logo">TwoApps</div>
        
        <h1>A real example from last month</h1>
        
        <p>Hi ${lead.name.split(' ')[0]},</p>
        
        <p>One of the workflows from the guide — <strong>Document Processing</strong> — just saved a logistics company over <strong>20 hours per week</strong>.</p>
        
        <div style="background: #f8f8f8; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <h2 style="margin-top: 0; font-size: 18px;">The Problem</h2>
          <p style="margin-bottom: 20px;">Their team was manually entering data from 50+ shipping documents per day. Tedious, error-prone, and slowing down operations.</p>
          
          <h2 style="font-size: 18px;">The Solution</h2>
          <p style="margin-bottom: 20px;">We built an AI-powered document pipeline that:</p>
          <ul style="margin-bottom: 20px;">
            <li>Extracts key data from PDFs and emails automatically</li>
            <li>Validates information against their database</li>
            <li>Flags exceptions for human review</li>
            <li>Updates their CRM in real-time</li>
          </ul>
          
          <h2 style="font-size: 18px;">The Result</h2>
          <ul style="margin-bottom: 0;">
            <li><strong>20+ hours/week saved</strong> on manual data entry</li>
            <li><strong>92% reduction</strong> in data entry errors</li>
            <li><strong>Same-day processing</strong> instead of 2-3 day backlog</li>
          </ul>
        </div>
        
        <h2>What could this look like for you?</h2>
        <p>The companies that get the most value from AI automation start by identifying their <strong>highest-friction process</strong> — the one that's slow, repetitive, and error-prone.</p>
        
        <p>That's exactly what we do in our <strong>free workflow audit</strong>:</p>
        
        <ul>
          <li>45-minute call to understand your operations</li>
          <li>We identify your top 3 automation opportunities</li>
          <li>You get a clear ROI estimate and implementation roadmap</li>
          <li>No commitment, no pressure</li>
        </ul>
        
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://thetwoapps.com/book" class="button">
            Book Your Free Audit
          </a>
        </p>
        
        <p>Even if you're just curious, it's worth 45 minutes to see what's possible.</p>
        
        <p>Talk soon,<br>
        <strong>Zain</strong></p>
        
        <div class="footer">
          <p>
            <a href="${BRAND.website}">TwoApps</a> | ${BRAND.email} | ${BRAND.phone}<br>
            Dubai, UAE — Global Delivery
          </p>
          <p style="font-size: 12px; margin-top: 10px;">
            <a href="{{RESEND_UNSUBSCRIBE_URL}}">Unsubscribe</a> anytime.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}

/**
 * Day 5: Common AI Workflow Use Cases
 */
export function useCasesEmailTemplate(lead: LeadEntry): { subject: string; html: string } {
  const subject = "5 ways companies are using AI right now";
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="logo">TwoApps</div>
        
        <h1>Beyond the hype: practical AI workflows</h1>
        
        <p>Hi ${lead.name.split(' ')[0]},</p>
        
        <p>AI automation gets a lot of buzz. But what are companies <em>actually</em> implementing right now?</p>
        
        <p>Here are the <strong>5 most common workflows</strong> we've built for clients in the last 6 months:</p>
        
        <div style="margin: 25px 0;">
          <h2 style="font-size: 18px; color: ${BRAND.accent};">1. Email Triage & Response Drafting</h2>
          <p>Automatically categorize incoming emails, prioritize by urgency, and draft responses using your company's tone and knowledge base.</p>
          <p><strong>Time saved:</strong> 5-10 hours/week</p>
          
          <h2 style="font-size: 18px; color: ${BRAND.accent};">2. Invoice & Receipt Processing</h2>
          <p>Extract line items, validate against POs, route for approval, and sync to accounting software — all automatically.</p>
          <p><strong>Time saved:</strong> 8-15 hours/week</p>
          
          <h2 style="font-size: 18px; color: ${BRAND.accent};">3. Customer Support Automation</h2>
          <p>AI-powered ticket classification, instant responses for common queries, and smart escalation rules.</p>
          <p><strong>Result:</strong> 70% faster response time, 40% fewer escalations</p>
          
          <h2 style="font-size: 18px; color: ${BRAND.accent};">4. Report Generation</h2>
          <p>Pull data from multiple systems, analyze trends, and generate executive-ready reports with visualizations.</p>
          <p><strong>Time saved:</strong> 10-20 hours/week (depending on report complexity)</p>
          
          <h2 style="font-size: 18px; color: ${BRAND.accent};">5. Lead Qualification & Enrichment</h2>
          <p>Auto-score inbound leads, enrich with company data, and route to the right sales rep with context.</p>
          <p><strong>Result:</strong> 3x faster lead response, better conversion rates</p>
        </div>
        
        <div class="divider"></div>
        
        <h2>Which one resonates with you?</h2>
        <p>Most companies have at least <strong>one</strong> of these workflows that's costing them significant time right now.</p>
        
        <p>Our workflow audit identifies your highest-ROI opportunity and gives you a clear path to implementation.</p>
        
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://thetwoapps.com/book" class="button">
            Book Your Free Audit
          </a>
        </p>
        
        <p>Or just reply to this email and tell me what process is slowing you down. I'll point you in the right direction.</p>
        
        <p>Best,<br>
        <strong>Zain</strong></p>
        
        <div class="footer">
          <p>
            <a href="${BRAND.website}">TwoApps</a> | ${BRAND.email} | ${BRAND.phone}<br>
            Dubai, UAE — Global Delivery
          </p>
          <p style="font-size: 12px; margin-top: 10px;">
            <a href="{{RESEND_UNSUBSCRIBE_URL}}">Unsubscribe</a> anytime.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}

/**
 * Day 10: How Pilots Work at TwoApps
 */
export function pilotProcessEmailTemplate(lead: LeadEntry): { subject: string; html: string } {
  const subject = "How our pilot process works (de-risked automation)";
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="logo">TwoApps</div>
        
        <h1>Automation without the risk</h1>
        
        <p>Hi ${lead.name.split(' ')[0]},</p>
        
        <p>One of the biggest concerns we hear: <em>"What if we invest in automation and it doesn't work for us?"</em></p>
        
        <p>That's why we built our <strong>pilot-first approach</strong>.</p>
        
        <h2>Here's how it works:</h2>
        
        <div style="background: #f8f8f8; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <p style="margin-bottom: 20px;"><strong>Step 1: Free Workflow Audit (45 min)</strong></p>
          <ul style="margin-bottom: 25px;">
            <li>We analyze your current operations</li>
            <li>Identify your top 3 automation opportunities</li>
            <li>You get ROI estimates and implementation timeline</li>
          </ul>
          
          <p style="margin-bottom: 20px;"><strong>Step 2: Pilot Proposal</strong></p>
          <ul style="margin-bottom: 25px;">
            <li>Scope: ONE high-impact workflow</li>
            <li>Timeline: 2-4 weeks</li>
            <li>Fixed price: You know exactly what you're investing</li>
          </ul>
          
          <p style="margin-bottom: 20px;"><strong>Step 3: Pilot Delivery</strong></p>
          <ul style="margin-bottom: 25px;">
            <li>Weekly status updates</li>
            <li>Collaborative refinement</li>
            <li>Success metrics tracked from day 1</li>
          </ul>
          
          <p style="margin-bottom: 0;"><strong>Step 4: Scale (if it works)</strong></p>
          <ul style="margin-bottom: 0;">
            <li>Pilot proves value → expand to more workflows</li>
            <li>Doesn't meet expectations → no hard feelings</li>
          </ul>
        </div>
        
        <h2>Why this works</h2>
        <ul>
          <li><strong>Low commitment:</strong> Start with one workflow, not a full transformation</li>
          <li><strong>Clear ROI:</strong> You'll see measurable results within weeks</li>
          <li><strong>Reduced risk:</strong> Small investment, proven outcomes</li>
          <li><strong>Build trust:</strong> We earn the right to do more work together</li>
        </ul>
        
        <div class="divider"></div>
        
        <p>Most of our long-term clients started with a single pilot. Now they're running 5+ automated workflows and saving 50+ hours per week.</p>
        
        <p><strong>Ready to see what a pilot could look like for your business?</strong></p>
        
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://thetwoapps.com/book" class="button">
            Book Your Free Audit
          </a>
        </p>
        
        <p>No commitment. Just clarity on what's possible.</p>
        
        <p>Cheers,<br>
        <strong>Zain</strong></p>
        
        <div class="footer">
          <p>
            <a href="${BRAND.website}">TwoApps</a> | ${BRAND.email} | ${BRAND.phone}<br>
            Dubai, UAE — Global Delivery
          </p>
          <p style="font-size: 12px; margin-top: 10px;">
            <a href="{{RESEND_UNSUBSCRIBE_URL}}">Unsubscribe</a> anytime.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}

/**
 * Day 14: Free Consultation Offer
 */
export function consultationOfferEmailTemplate(lead: LeadEntry): { subject: string; html: string } {
  const subject = "Let's talk about your automation roadmap";
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles()}
    </head>
    <body>
      <div class="container">
        <div class="logo">TwoApps</div>
        
        <h1>One last thing, ${lead.name.split(' ')[0]}</h1>
        
        <p>Over the past two weeks, you've seen:</p>
        <ul>
          <li>Practical AI workflows that are working right now</li>
          <li>Real case studies with measurable results</li>
          <li>How our de-risked pilot process works</li>
        </ul>
        
        <p>Now I want to make you an offer.</p>
        
        <div style="background: linear-gradient(135deg, #f0fffe 0%, #e6fff9 100%); padding: 30px; border-radius: 12px; margin: 30px 0; border-left: 5px solid ${BRAND.accent};">
          <h2 style="margin-top: 0; color: ${BRAND.accent};">Free Workflow Audit</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">A 45-minute call where we:</p>
          <ul style="margin-bottom: 20px;">
            <li>Dive deep into your operations</li>
            <li>Identify your highest-ROI automation opportunities</li>
            <li>Give you a clear implementation roadmap</li>
            <li>Provide ROI estimates and timeline</li>
          </ul>
          <p style="font-size: 16px; margin-bottom: 0;"><strong>No commitment. No pressure. Just clarity.</strong></p>
        </div>
        
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://thetwoapps.com/book" class="button" style="font-size: 18px; padding: 16px 32px;">
            Book Your Free Audit Now
          </a>
        </p>
        
        <div class="divider"></div>
        
        <h2>What happens next?</h2>
        <p>If you're not ready for a call yet, that's completely fine. Here's what you can do:</p>
        
        <ul>
          <li><strong>Keep reading the guide</strong> — The 5 workflows in there are a great starting point</li>
          <li><strong>Reply to this email</strong> — Tell me what process is slowing you down, and I'll give you my honest take</li>
          <li><strong>Follow us on LinkedIn</strong> — We share automation tips and case studies weekly</li>
        </ul>
        
        <p>But if you're serious about saving time and reducing manual work, <strong>book the audit</strong>. It's the fastest way to understand what's possible for your specific situation.</p>
        
        <p>Even if we don't end up working together, you'll walk away with actionable insights.</p>
        
        <div class="divider"></div>
        
        <p>Looking forward to hearing from you.</p>
        
        <p>Best,<br>
        <strong>Zain</strong><br>
        CEO, TwoApps</p>
        
        <p style="margin-top: 20px; font-size: 14px;">
          <a href="mailto:${BRAND.email}">${BRAND.email}</a><br>
          ${BRAND.phone}
        </p>
        
        <div class="footer">
          <p>
            <a href="${BRAND.website}">TwoApps</a> | Dubai, UAE — Global Delivery
          </p>
          <p style="font-size: 12px; margin-top: 10px;">
            You're receiving this because you downloaded our AI Workflows Guide. 
            <a href="{{RESEND_UNSUBSCRIBE_URL}}">Unsubscribe</a> anytime.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}
