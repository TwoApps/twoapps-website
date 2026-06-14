import type { RegionalConfig } from "./types";

export const auConfig: RegionalConfig = {
  slug: "au",
  meta: {
    title: "AI Workflow Automation Australia | Built for Aussie Teams",
    description:
      "Practical AI automation for Australian businesses. Cut admin hours, stay compliant, and scale without the big-enterprise price tag. Book a free workflow audit.",
    keywords: [
      "AI automation Australia",
      "workflow automation AU",
      "Australian business automation",
      "AI workflows Sydney Melbourne",
      "compliance automation Australia",
      "mid-market automation Australia"
    ],
    ogImage: "/og-default.png",
    canonicalPath: "/au",
    alternates: [
      { hreflang: "en-au", href: "https://thetwoapps.com/au" },
      { hreflang: "en-sg", href: "https://thetwoapps.com/sg" },
      { hreflang: "en-nz", href: "https://thetwoapps.com/nz" },
      { hreflang: "en-ae", href: "https://thetwoapps.com/ae" },
      { hreflang: "en-eu", href: "https://thetwoapps.com/eu" },
      { hreflang: "x-default", href: "https://thetwoapps.com" }
    ]
  },
  hero: {
    eyebrow: "AI automation for Australian businesses",
    headline: "Built for Aussie teams who want results, not roadmap theatre",
    subheadline:
      "Australia's mid-market doesn't have the budget for a six-month consulting project. We design, build, and run AI workflows that cut admin hours, keep you compliant, and free your team to focus on growth.",
    primaryCta: "Book a free audit",
    secondaryCta: "See how it works",
    trustBar: "Trusted by Australian businesses",
    trustMarks: ["AUD pricing", "Local timezone", "Compliance-aware", "Pilot-first"],
    mobileTrustMarks: ["Pricing in Australian dollars", "Works in your timezone", "Compliance-aware delivery", "Pilot-first engagement model"]
  },
  painPoints: {
    title: "The pressure Australian teams are under",
    items: [
      {
        icon: "trendingUp",
        title: "Rising wage costs",
        description:
          "Wages keep climbing, but the work doesn't slow down. Manual processes quietly eat into margins that are already tight.",
        stat: "Reclaim margin"
      },
      {
        icon: "fileCheck",
        title: "Compliance load",
        description:
          "From BAS to industry regulators, Australian businesses carry a heavy compliance burden. Automation has to be audit-ready from day one.",
        stat: "Built-in compliance"
      },
      {
        icon: "globe",
        title: "Global competition",
        description:
          "You're competing with bigger budgets offshore. Speed and efficiency are the only moats that don't require hiring dozens of people.",
        stat: "Compete smarter"
      },
      {
        icon: "users",
        title: "Skills pressure",
        description:
          "Your best people end up doing repetitive work instead of the high-value work you hired them for. That's a slow leak of talent and momentum.",
        stat: "Free your team"
      }
    ]
  },
  howItWorksTitle: "How we help you automate",
  howItWorks: [
    {
      title: "Free workflow audit",
      subtitle:
        "In 45 minutes we map the tasks costing you the most hours and pick the one with the clearest ROI.",
      duration: "45 min"
    },
    {
      title: "Pilot build",
      subtitle:
        "We build a production-grade workflow with monitoring, compliance checks, and your real data — not a toy demo.",
      duration: "4–6 weeks"
    },
    {
      title: "Deploy and scale",
      subtitle:
        "Go live with your team. We train, tune, and hand over a system that keeps improving as your business grows.",
      duration: "2 weeks"
    }
  ],
  featuresTitle: "What you get",
  features: {
    title: "Designed for how Australian businesses actually work",
    items: [
      {
        icon: "code",
        title: "Works in your stack",
        description:
          "Integrates with Xero, HubSpot, Salesforce, and the tools your team already uses every day. No rip-and-replace."
      },
      {
        icon: "shieldCheck",
        title: "Compliance-aware",
        description:
          "Built with Australian reporting, audit, and data-handling requirements in mind. Not an afterthought."
      },
      {
        icon: "target",
        title: "Real ROI tracking",
        description:
          "We measure hours saved, errors reduced, and speed gained before we scale. Your board sees numbers, not promises."
      },
      {
        icon: "building",
        title: "Local timezone delivery",
        description:
          "Sydney and Melbourne timezone calls. Slack answers during your business hours. No 2am standups."
      },
      {
        icon: "dollarSign",
        title: "AUD pricing",
        description:
          "Transparent quotes in Australian dollars. No surprise FX swings, no offshore invoicing headaches."
      },
      {
        icon: "rocket",
        title: "Founder-led delivery",
        description:
          "The same engineer who scopes your workflow builds it. No account managers, no handoff gaps."
      }
    ]
  },
  testimonialsTitle: "What Australian teams say",
  testimonials: {
    title: "What Australian teams say",
    items: [
      {
        quote:
          "We were sceptical after a bad RPA experience. TwoApps built a workflow that actually stuck — and it paid for itself in under 60 days.",
        name: "David Chen",
        title: "Operations Manager, ResourceTech Australia",
        stat: "40% efficiency gain"
      },
      {
        quote:
          "Finally, a delivery team that understands Australian compliance and doesn't talk in circles. Five workflows automated and counting.",
        name: "Jennifer Walsh",
        title: "CFO, HealthFirst Medical Group",
        stat: "5 workflows automated"
      }
    ]
  },
  faq: {
    title: "Questions Australian businesses ask",
    items: [
      {
        question: "Do you work with Australian compliance requirements?",
        answer:
          "Yes. We design workflows with Australian reporting, audit, and data-handling needs in mind. We can integrate with your existing compliance tools and documentation processes."
      },
      {
        question: "How do you price projects in Australia?",
        answer:
          "We quote in Australian dollars. Most engagements start with a fixed-scope pilot so you know the cost before committing to a larger build."
      },
      {
        question: "What tools can you integrate with?",
        answer:
          "Common ones include Xero, HubSpot, Salesforce, Microsoft 365, Google Workspace, Slack, and most major CRMs. If you have a custom system, we can usually connect via API."
      },
      {
        question: "How long before we see ROI?",
        answer:
          "Most pilots go live in 4–6 weeks and show measurable savings within 60 days. We define the success metric together before we start building."
      },
      {
        question: "Do we need to hire specialists to maintain this?",
        answer:
          "No. We hand over documented, maintainable workflows and can provide ongoing support. Your existing team manages day-to-day operations."
      }
    ]
  },
  finalCta: {
    headline: "Ready to reclaim your team's week?",
    subheadline:
      "Book a free 45-minute workflow audit. We'll show you exactly where AI pays off first — no pitch deck required.",
    cta: "Book a free audit",
    supporting: "AUD pricing · Local timezone · Compliance-aware · Pilot-first"
  },
  footer: {
    tagline: "Practical AI workflow automation for Australian businesses.",
    contactLabel: "Australia"
  },
  schema: {
    name: "TwoApps Australia",
    description: "Practical AI workflow automation for Australian businesses",
    areaServed: ["Australia"]
  }
};
