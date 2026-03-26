import type { RegionalConfig } from "./types";

export const nzConfig: RegionalConfig = {
  slug: "nz",
  meta: {
    title: "AI Workflow Automation New Zealand | Supercharge Your Team | TwoApps",
    description:
      "Your team, supercharged. AI workflow automation for New Zealand businesses facing staffing challenges. Free workflow review available.",
    keywords: [
      "AI automation New Zealand",
      "workflow automation NZ",
      "business automation",
      "staffing challenges",
      "Kiwi business automation",
      "team productivity"
    ],
    ogImage: "/og-default.svg",
    canonicalPath: "/nz",
    alternates: [
      { hreflang: "en-nz", href: "https://thetwoapps.com/nz" },
      { hreflang: "en-sg", href: "https://thetwoapps.com/sg" },
      { hreflang: "en-au", href: "https://thetwoapps.com/au" },
      { hreflang: "en-ae", href: "https://thetwoapps.com/ae" },
      { hreflang: "en-eu", href: "https://thetwoapps.com/eu" },
      { hreflang: "x-default", href: "https://thetwoapps.com" }
    ]
  },
  hero: {
    eyebrow: "Kiwi Business, Global Capability",
    headline: "Your Team, Supercharged",
    subheadline:
      "New Zealand businesses don't need to hire in a tight market to grow. We build AI workflows that let your existing team handle more — without the burnout. From Auckland to Christchurch, we deliver automation that understands Kiwi business realities.",
    primaryCta: "See what's possible in a free workflow review",
    secondaryCta: "How it works",
    trustBar: "Supporting Kiwi businesses",
    trustMarks: ["Remote-friendly", "NZ timezone", "Flexible engagement"]
  },
  painPoints: {
    title: "The New Zealand Business Reality",
    items: [
      {
        icon: "users",
        title: "Staffing Challenges",
        description:
          "Finding good people is hard. Keeping them is harder. Every business we talk to is trying to do more with the team they already have.",
        stat: "Do more without hiring"
      },
      {
        icon: "globe",
        title: "Regional Realities",
        description:
          "Distance matters in NZ. Remote teams, regional offices, and supply chains span the country. Automation bridges the gaps.",
        stat: "Connect distributed teams"
      },
      {
        icon: "globe",
        title: "Global Competition",
        description:
          "You're competing with Australian and global players with bigger budgets and more resources. Efficiency levels the field.",
        stat: "Compete globally"
      },
      {
        icon: "trendingUp",
        title: "Legacy Systems",
        description:
          "Many Kiwi businesses run on systems built years ago. Automation works with what you have — no rip-and-replace.",
        stat: "Modernize without disruption"
      }
    ]
  },
  howItWorksTitle: "Simple Process, Real Results",
  howItWorks: [
    {
      title: "Free Workflow Review",
      subtitle: "30-minute call to understand your challenges and identify automation opportunities. No obligation, real insights.",
      duration: "30 min call"
    },
    {
      title: "Design & Build",
      subtitle: "We design and build your workflow remotely — no travel costs, no disruption to your business.",
      duration: "3-5 weeks delivery"
    },
    {
      title: "Deploy Pilot",
      subtitle: "Test with your team. We train, support, and refine until it's working smoothly.",
      duration: "2 weeks test"
    },
    {
      title: "Support & Grow",
      subtitle: "Ongoing partnership — monitor, optimize, and expand to more workflows as you grow.",
      duration: "Ongoing partnership"
    }
  ],
  featuresTitle: "Built for Kiwi Businesses",
  features: {
    title: "Built for Kiwi Businesses",
    items: [
      {
        icon: "globe",
        title: "Remote Delivery",
        description: "No travel costs. Async or live — your call."
      },
      {
        icon: "zap",
        title: "Flexible Engagement",
        description: "Start small, scale as you grow. NZD pricing, flexible terms."
      },
      {
        icon: "code",
        title: "Legacy Friendly",
        description: "Works with your existing systems."
      },
      {
        icon: "users",
        title: "Team Empowerment",
        description: "Your team stays in control. Human checkpoints built in."
      },
      {
        icon: "globe",
        title: "Regional Expertise",
        description: "We understand NZ business realities."
      },
      {
        icon: "rocket",
        title: "Ongoing Partnership",
        description: "Not a one-off project. We're your automation partner."
      }
    ]
  },
  industriesTitle: "Solutions by Industry",
  industries: {
    title: "Solutions by Industry",
    items: [
      {
        icon: "building2",
        title: "Agriculture & Primary Industries",
        description:
          "Automate compliance reporting, supply chain coordination, and seasonal workforce management. Connect on-farm systems with head office."
      },
      {
        icon: "truck",
        title: "Tourism & Hospitality",
        description:
          "Streamline booking workflows, automate guest communications, and optimize staff scheduling. Handle peak seasons without adding permanent headcount."
      },
      {
        icon: "building",
        title: "Manufacturing",
        description:
          "Production scheduling, quality control workflows, and supplier coordination. Integrate with existing ERP and inventory systems."
      }
    ]
  },
  testimonialsTitle: "Kiwi Business Success Stories",
  testimonials: {
    title: "Kiwi Business Success Stories",
    items: [
      {
        quote: "We were drowning in admin during peak season. TwoApps built a booking automation workflow that handles 80% of our inquiries automatically. Our small team can finally focus on guests, not paperwork.",
        name: "Emma Richardson",
        title: "Owner, Bay of Islands Lodge",
        stat: "80% reduction in manual booking tasks"
      },
      {
        quote: "As a regional agribusiness, we struggled with coordination between farms and head office. The automation TwoApps built connects everything — we finally have real-time visibility.",
        name: "John Walker",
        title: "Operations Manager, Canterbury AgriCo",
        stat: "NZD $120K annual savings"
      }
    ]
  },
  pricing: {
    free: {
      title: "Free Workflow Review",
      price: "NZD $0",
      features: [
        "30-minute discovery call",
        "Identify automation opportunities",
        "High-level ROI estimate",
        "No obligation"
      ],
      cta: "Book Your Free Review"
    },
    pilot: {
      title: "Pilot Workflow",
      price: "NZD $25,000 - $100,000",
      features: [
        "Complete workflow review",
        "Custom AI automation build",
        "Remote delivery (no travel costs)",
        "Team training and documentation",
        "30 days post-launch support",
        "Ongoing partnership available"
      ],
      cta: "Get Started",
      popular: true
    },
    note: "All prices in NZD. Flexible terms for Kiwi businesses. Start with a free review — no commitment."
  },
  faq: {
    title: "Common Questions",
    items: [
      {
        question: "We're a small business — is this for us?",
        answer:
          "Yes. We work with 10-person teams who automate their biggest time sinks. You don't need enterprise scale — you need the right workflows."
      },
      {
        question: "How does remote delivery work?",
        answer:
          "We work via video calls, shared docs, and async updates. Most Kiwi clients prefer it — no travel costs, no disruption to your business."
      },
      {
        question: "What if you're not available when we need support?",
        answer:
          "We work NZ timezone hours and have async support channels. Plus, our workflows include monitoring and alerts — most issues are caught before you notice."
      },
      {
        question: "Can you understand our specific industry?",
        answer:
          "We've worked across agriculture, tourism, manufacturing, and services. We start with a review to understand your specific workflows — then build for your reality."
      },
      {
        question: "How is this different from just using ChatGPT?",
        answer:
          "ChatGPT is a tool. We build workflows — repeatable, integrated processes that work across your systems with guardrails and monitoring."
      },
      {
        question: "What if it doesn't work for our team?",
        answer:
          "Start with the free review. Then a small pilot. If it doesn't deliver value, you learn that with minimal investment. But when it works — and it usually does — you have a template for scaling."
      }
    ]
  },
  finalCta: {
    headline: "Ready to Supercharge Your Team?",
    subheadline:
      "Book your free 30-minute workflow review. We'll show you exactly what's possible — no obligation, no pressure, just real insights.",
    cta: "See what's possible in a free workflow review",
    supporting: "NZD pricing. Remote delivery. Kiwi business expertise."
  },
  footer: {
    tagline: "AI workflow automation for New Zealand businesses.",
    contactLabel: "New Zealand"
  },
  schema: {
    name: "TwoApps New Zealand",
    description: "AI workflow automation for New Zealand businesses",
    areaServed: ["New Zealand"],
    priceRange: "NZD $25,000 - $100,000"
  }
};
