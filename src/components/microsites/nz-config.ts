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
    headline: "Your team, supercharged.",
    subheadline:
      "Hiring in NZ is hard. We build AI workflows so your existing team handles more — without the burnout.",
    primaryCta: "Book a call",
    secondaryCta: "How it works",
    trustBar: "Supporting Kiwi teams",
    trustMarks: ["Remote-friendly", "NZ timezone", "Flexible engagement"]
  },
  painPoints: {
    title: "The NZ business reality",
    items: [
      {
        icon: "users",
        title: "Staffing crunch",
        description:
          "Finding people is hard. Keeping them is harder. Automation lifts the load.",
        stat: "Do more without hiring"
      },
      {
        icon: "globe",
        title: "Distance matters",
        description:
          "Remote teams and regional offices span the country. Automation closes the gap.",
        stat: "Connect distributed teams"
      },
      {
        icon: "globe",
        title: "Global competition",
        description:
          "You're up against bigger budgets. Efficiency is your edge.",
        stat: "Compete globally"
      }
    ]
  },
  howItWorksTitle: "How we work",
  howItWorks: [
    {
      title: "Free review",
      subtitle: "30-minute call. We map your biggest time sinks.",
      duration: "30 min"
    },
    {
      title: "Design and build",
      subtitle: "Built remotely. No travel costs, no disruption.",
      duration: "3–5 weeks"
    },
    {
      title: "Deploy and refine",
      subtitle: "Live with your team. We train, monitor, tune.",
      duration: "2 weeks"
    }
  ],
  testimonialsTitle: "Kiwi Business Success Stories",
  testimonials: {
    title: "Kiwi Business Success Stories",
    items: [
      {
        quote: "Peak-season admin used to drown us. TwoApps automated 80% of bookings. Our team focuses on guests now.",
        name: "Emma Richardson",
        title: "Owner, Bay of Islands Lodge",
        stat: "80% reduction in manual booking tasks"
      },
      {
        quote: "Coordinating farms and head office was chaos. The automation TwoApps built gives us real-time visibility.",
        name: "John Walker",
        title: "Operations Manager, Canterbury AgriCo",
        stat: "Real-time visibility across the operation"
      }
    ]
  },
  finalCta: {
    headline: "Supercharge your team.",
    subheadline:
      "Book a 30-minute call. We'll show you what's possible.",
    cta: "Book a call",
    supporting: "Remote delivery · NZ timezone · Kiwi expertise"
  },
  footer: {
    tagline: "AI workflow automation for New Zealand businesses.",
    contactLabel: "New Zealand"
  },
  schema: {
    name: "TwoApps New Zealand",
    description: "AI workflow automation for New Zealand businesses",
    areaServed: ["New Zealand"]
  }
};
