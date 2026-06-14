import type {
  BlogPost,
  CaseStudySummary,
  FaqItem,
  GlossaryTerm,
  Industry,
  Package,
  RegionPage,
  Service,
  Solution,
  Testimonial
} from "@/content/types";

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/agency-partners", label: "Agency Partners" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const audienceTracks = {
  business: {
    key: "business" as const,
    title: "For Businesses",
    description:
      "Cut manual work, speed up operations, and launch useful AI workflows without hiring a full AI team first.",
    href: "/services",
    bullets: ["Save time", "Reduce manual tasks", "Internal tools", "Clear approvals"]
  },
  agency: {
    key: "agency" as const,
    title: "For Agencies / Software Houses",
    description:
      "Offer AI projects with confidence using TwoApps as your white-label implementation partner, while you keep the client relationship.",
    href: "/agency-partners",
    bullets: ["White-label delivery", "AI project support", "Claude Code setup", "Extra delivery capacity"]
  }
};

export const services: Service[] = [
  {
    slug: "agentic-ai-automation",
    title: "Agentic AI Automation",
    tagline: "Turn repeat work into AI workflows with human checks where they matter.",
    summary:
      "We build AI workflows for support, ops, finance, onboarding, and reporting so your team stops doing the work software should be doing.",
    audiences: ["business", "agency"],
    benefits: [
      "Reduce manual work and turnaround time on repeat tasks",
      "Keep output quality more consistent across the team",
      "Add approval steps and exception handling where people need to stay involved",
      "Connect workflows to your CRM, ERP, email, or internal tools"
    ],
    deliverables: [
      "Workflow discovery and priority map",
      "AI workflow design with guardrails and decision points",
      "Integrations with your tools, APIs, and data sources",
      "Monitoring and failure-handling setup",
      "Handover notes and next-step improvement backlog"
    ],
    process: [
      "Review the current process and identify bottlenecks",
      "Build one pilot workflow with a measurable goal",
      "Stabilize the workflow with monitoring and fallback paths",
      "Expand into the next high-value process"
    ],
    faq: [
      {
        question: "What kinds of workflows are a good fit for AI automation?",
        answer:
          "The best fit is repeatable work with clear inputs and outputs. Examples include ticket triage, onboarding checks, report prep, routing, and internal follow-up workflows."
      },
      {
        question: "Does this replace my team?",
        answer:
          "Usually no. The goal is to remove repetitive work, reduce delays, and free people to focus on exceptions, decisions, and customer-facing tasks."
      },
      {
        question: "Can this work with our current tools?",
        answer:
          "Yes. We usually build around your current systems first so the workflow fits how your team already works."
      }
    ],
    seo: {
      title: "AI Workflow Automation Services | TwoApps",
      description:
        "TwoApps is a UAE-based AI automation partner serving UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand. We build practical AI workflows for business teams and agencies.",
      keywords: [
        "ai workflow automation uae",
        "agentic ai automation middle east",
        "operations automation ai gcc",
        "ai workflow implementation partner"
      ],
      canonicalPath: "/services/agentic-ai-automation",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "claude-code-automation",
    title: "Claude / Claude Code Automation",
    tagline: "Make Claude a team workflow, not a personal trick.",
    summary:
      "We turn Claude and Claude Code into structured workflows for coding, QA, and delivery so your output is faster and consistent across the team.",
    audiences: ["business", "agency"],
    benefits: [
      "Speed up engineering and delivery work with repeatable AI-assisted steps",
      "Reduce inconsistent outputs across people and projects",
      "Turn repeat tasks into playbooks your team can actually follow",
      "Improve quality with review checkpoints and clear rules"
    ],
    deliverables: [
      "Claude / Claude Code workflow setup",
      "Team playbooks and prompting standards",
      "Automation scripts around common coding and QA tasks",
      "Review and risk-control checkpoints",
      "Training and onboarding for the team"
    ],
    process: [
      "Assess how your team currently uses AI tools",
      "Run a pilot on one delivery stream",
      "Document playbooks and rollout rules",
      "Improve the workflow using feedback and metrics"
    ],
    faq: [
      {
        question: "Is this only for software teams?",
        answer:
          "No. We can also use Claude-based workflows for operations, support, analysts, and internal teams with repeatable knowledge work."
      },
      {
        question: "Do we need to change our engineering standards?",
        answer:
          "No. We fit the workflow into your review process, testing standards, and compliance requirements."
      },
      {
        question: "What if my team is new to Claude Code?",
        answer:
          "That is normal. We start small with a pilot, then document the workflow so your team can use it safely and consistently."
      }
    ],
    seo: {
      title: "Claude Code Automation Partner | TwoApps",
      description:
        "TwoApps helps businesses and software teams build repeatable Claude and Claude Code workflows for faster delivery, better consistency, and safer AI-assisted execution.",
      keywords: [
        "claude code automation",
        "claude code consulting",
        "claude workflow implementation",
        "ai coding workflow setup"
      ],
      canonicalPath: "/services/claude-code-automation",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "white-label-ai-delivery",
    title: "White-Label AI Delivery for Software Houses",
    tagline: "Sell AI projects today. Skip the AI hiring delay.",
    summary:
      "We work behind your brand as the AI implementation team — so you ship AI workflows, features, and internal tools without standing up an AI practice first.",
    audiences: ["agency"],
    benefits: [
      "Start selling AI projects faster without delaying on hiring",
      "Win more scopes with credible implementation support",
      "Keep the client relationship while we deliver the AI layer",
      "Add flexible delivery capacity for pilots and backlogs"
    ],
    deliverables: [
      "Support for discovery and solution framing",
      "White-label implementation of AI workflows and features",
      "Delivery documentation for handoff to your team",
      "Optional ongoing support and optimization",
      "Internal enablement for your agency team"
    ],
    process: [
      "Align on communication model and white-label rules",
      "Run one pilot on a real client project",
      "Set a repeatable delivery cadence",
      "Move into a retainer or capacity model if needed"
    ],
    faq: [
      {
        question: "Will you speak directly with our client?",
        answer:
          "We can work fully white-label behind your team or in a co-delivery setup. We agree the communication model before work starts."
      },
      {
        question: "Which agencies are the best fit?",
        answer:
          "Software houses, product studios, and digital agencies that already deliver web or mobile work and need a reliable partner for AI scopes."
      },
      {
        question: "Do you support agencies outside the UAE?",
        answer:
          "Yes. We are UAE-based and work with partners across the Middle East, Eastern Europe, South America, Australia, and New Zealand, plus other regions where there is a fit."
      }
    ],
    seo: {
      title: "White-Label AI Delivery Partner | TwoApps",
      description:
        "UAE-based white-label AI delivery partner for software houses and agencies. TwoApps supports teams in UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand.",
      keywords: [
        "white label ai partner agency",
        "ai delivery partner software house",
        "white label ai implementation middle east",
        "agency ai implementation partner"
      ],
      canonicalPath: "/services/white-label-ai-delivery",
      ogImage: "/og-default.png"
    }
  }
];

export const industries: Industry[] = [
  {
    slug: "fintech-aml-kyc-automation",
    title: "Fintech / AML / KYC Automation",
    summary:
      "Faster AML and KYC reviews with fewer errors and a clean audit trail.",
    painPoints: [
      "Manual review queues that slow down onboarding and case handling",
      "Repetitive document checks that consume analyst time",
      "Inconsistent triage and routing between team members",
      "Poor visibility across tools, queues, and handoffs"
    ],
    solutions: [
      "AI-assisted document sorting and workflow routing",
      "Rules plus AI support with human approval checkpoints",
      "Analyst copilots for summaries and investigation prep",
      "Internal dashboards for queue visibility and escalations"
    ],
    exampleAutomations: [
      "KYC intake triage and document completeness checks",
      "AML alert enrichment and case summary drafts",
      "Compliance ops reporting automation",
      "Escalation routing and SLA monitoring"
    ],
    faq: [
      {
        question: "Can AI be used safely in compliance workflows?",
        answer:
          "Yes, with clear boundaries. We design workflows with human review checkpoints, audit trails, and explicit ownership so AI supports the team instead of making hidden decisions."
      },
      {
        question: "Do we need to replace our current compliance systems?",
        answer:
          "Usually no. We normally improve the workflow around your current tools, which reduces rollout risk and gets results faster."
      },
      {
        question: "Is this only for large fintech companies?",
        answer:
          "No. Smaller fintechs and regulated startups often get strong results because automation removes pressure from lean teams."
      }
    ],
    seo: {
      title: "Fintech AML KYC Workflow Automation Services",
      description:
        "TwoApps helps fintech teams improve AML/KYC and compliance operations with AI-assisted workflows, human review checkpoints, and better operational visibility.",
      keywords: [
        "aml workflow automation",
        "kyc automation ai",
        "fintech compliance automation",
        "aml kyc process automation"
      ],
      canonicalPath: "/industries/fintech-aml-kyc-automation",
      ogImage: "/og-default.png"
    }
  },
  {
    "slug": "real-estate-operations-automation",
    "title": "Real Estate Operations",
    "summary": "Faster listing, lead, and transaction workflows with fewer manual handoffs and a clean record at every step.",
    "painPoints": [
      "Slow lead response and inconsistent follow-up across agents",
      "Manual listing creation and data entry across multiple portals",
      "Repetitive document preparation for contracts, tenancy, and KYC",
      "Poor visibility across pipelines, viewings, and deal stages"
    ],
    "solutions": [
      "AI-assisted lead qualification and routing with a human handoff to the right agent",
      "Listing content drafts and portal data prep with agent review before publish",
      "Document drafting and completeness checks with sign-off checkpoints",
      "Internal dashboards for pipeline, viewing, and deal-stage visibility"
    ],
    "exampleAutomations": [
      "Inbound lead capture, qualification, and agent routing",
      "Listing draft generation and multi-portal data preparation",
      "Tenancy and sale agreement drafting with review checkpoints",
      "Viewing scheduling reminders and follow-up sequences"
    ],
    "faq": [
      {
        "question": "Can you connect to our CRM and property portals?",
        "answer": "Usually yes. We normally build the workflow around your existing CRM and portal accounts rather than replacing them, which keeps rollout risk low and gets results faster."
      },
      {
        "question": "Will AI respond to leads without a human checking?",
        "answer": "Only where you decide it should. We design clear boundaries so AI can draft replies and qualify leads, while your agents keep approval over anything that commits the business."
      },
      {
        "question": "Is this useful for a small brokerage?",
        "answer": "Yes. Smaller teams often see strong results because automation removes follow-up pressure and admin work from lean staff so agents can focus on clients and deals."
      },
      {
        "question": "How do you handle KYC and document accuracy?",
        "answer": "We add completeness checks and human review checkpoints before anything is filed or sent. The goal is a clean, auditable record, not hidden automated decisions."
      }
    ],
    "seo": {
      "title": "Real Estate Operations AI Automation Services",
      "description": "TwoApps helps real estate teams speed up lead, listing, and transaction workflows with AI-assisted automation and human review checkpoints that keep records clean.",
      "keywords": [
        "real estate ai automation",
        "real estate workflow automation",
        "property management automation ai",
        "real estate lead automation",
        "brokerage operations automation"
      ],
      "canonicalPath": "/industries/real-estate-operations-automation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "logistics-supply-chain-automation",
    "title": "Logistics & Supply Chain",
    "summary": "Cleaner order, shipment, and exception handling with fewer manual touches and better visibility end to end.",
    "painPoints": [
      "Manual order and shipment data entry across systems and emails",
      "Slow handling of exceptions, delays, and customs documentation",
      "Inconsistent status updates to customers and internal teams",
      "Poor visibility across carriers, warehouses, and order stages"
    ],
    "solutions": [
      "AI-assisted document extraction and order entry with human verification",
      "Exception detection and triage with operator approval before action",
      "Status update drafts and proactive notifications with review controls",
      "Internal dashboards for shipment tracking, SLAs, and escalations"
    ],
    "exampleAutomations": [
      "Order and invoice data extraction with completeness checks",
      "Shipment exception detection, triage, and escalation routing",
      "Customs and freight document preparation with review checkpoints",
      "Customer status update notifications and SLA monitoring"
    ],
    "faq": [
      {
        "question": "Can this work with our existing TMS or ERP?",
        "answer": "Usually yes. We normally improve the workflow around your current TMS, ERP, and carrier portals, which reduces rollout risk and gets results faster than a full system replacement."
      },
      {
        "question": "How does AI handle documents in different formats?",
        "answer": "AI can read and extract data from varied formats, then a person verifies anything that affects shipping, billing, or compliance. We keep human checkpoints where errors are costly."
      },
      {
        "question": "Will automation flag delays automatically?",
        "answer": "Yes. We can build exception detection that surfaces delays and anomalies early, route them to the right operator, and keep an audit trail of how each case was handled."
      },
      {
        "question": "Is this only for large 3PLs and freight forwarders?",
        "answer": "No. Smaller logistics and distribution teams often benefit most, because automation removes repetitive data entry and chasing from lean operations staff."
      }
    ],
    "seo": {
      "title": "Logistics & Supply Chain AI Automation Services",
      "description": "TwoApps helps logistics and supply chain teams automate order, shipment, and exception workflows with AI-assisted processing and human review checkpoints.",
      "keywords": [
        "logistics ai automation",
        "supply chain automation ai",
        "logistics workflow automation",
        "freight document automation",
        "shipment exception automation"
      ],
      "canonicalPath": "/industries/logistics-supply-chain-automation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "recruitment-staffing-automation",
    "title": "Recruitment / Staffing",
    "summary": "Faster sourcing, screening, and candidate communication with consistent quality and a recruiter in control of decisions.",
    "painPoints": [
      "High volume of applications that overwhelm screening capacity",
      "Slow, inconsistent candidate communication and follow-up",
      "Repetitive CV parsing and data entry into the ATS",
      "Poor visibility across pipelines, roles, and candidate stages"
    ],
    "solutions": [
      "AI-assisted CV parsing and shortlisting with recruiter review before progression",
      "Screening summaries and interview prep drafts with human sign-off",
      "Candidate and client communication drafts with approval checkpoints",
      "Internal dashboards for pipeline, role, and stage visibility"
    ],
    "exampleAutomations": [
      "CV parsing, structuring, and ATS data entry",
      "Candidate shortlisting and screening summary drafts",
      "Interview scheduling, reminders, and follow-up sequences",
      "Pipeline reporting and stage-aging alerts for recruiters"
    ],
    "faq": [
      {
        "question": "Will AI reject candidates automatically?",
        "answer": "No. We design workflows so AI helps with parsing, summarising, and shortlisting, while recruiters keep the decision on who progresses. Human judgment stays in control of selection."
      },
      {
        "question": "How do you reduce bias in screening?",
        "answer": "We keep humans in the decision loop, document criteria, and use AI for structured summaries rather than hidden scoring. The recruiter reviews and owns each shortlisting decision."
      },
      {
        "question": "Can you integrate with our ATS?",
        "answer": "Usually yes. We normally build the workflow around your existing ATS rather than replacing it, which lowers rollout risk and gets your team productive faster."
      },
      {
        "question": "Is this useful for a small staffing agency?",
        "answer": "Yes. Lean agencies often gain the most, because automation removes parsing, scheduling, and follow-up admin so consultants can spend more time with candidates and clients."
      }
    ],
    "seo": {
      "title": "Recruitment & Staffing AI Automation Services",
      "description": "TwoApps helps recruitment and staffing teams automate CV screening, scheduling, and candidate communication with AI-assisted workflows and recruiter sign-off.",
      "keywords": [
        "recruitment ai automation",
        "staffing automation ai",
        "recruiting workflow automation",
        "cv screening automation",
        "ats automation recruitment"
      ],
      "canonicalPath": "/industries/recruitment-staffing-automation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ecommerce-operations-automation",
    "title": "E-commerce Operations",
    "summary": "Smoother order, catalogue, and post-purchase operations with fewer manual touches and consistent customer communication.",
    "painPoints": [
      "Manual order processing and reconciliation across channels",
      "Repetitive product catalogue and listing data entry",
      "High volume of returns, refunds, and customer queries",
      "Poor visibility across inventory, orders, and fulfilment status"
    ],
    "solutions": [
      "AI-assisted order processing and reconciliation with human verification",
      "Product description and catalogue data drafts with review before publish",
      "Returns and refund triage with operator approval checkpoints",
      "Internal dashboards for inventory, order, and fulfilment visibility"
    ],
    "exampleAutomations": [
      "Multi-channel order intake, processing, and reconciliation",
      "Product listing and catalogue content generation with review",
      "Returns and refund request triage and routing",
      "Inventory threshold alerts and fulfilment status monitoring"
    ],
    "faq": [
      {
        "question": "Can you connect to Shopify or our marketplace channels?",
        "answer": "Usually yes. We normally build the workflow around your existing store and marketplace accounts rather than replacing them, which keeps rollout risk low and results quick."
      },
      {
        "question": "Will AI issue refunds on its own?",
        "answer": "Only within limits you set. We design clear boundaries so AI can triage and draft responses, while staff keep approval over refunds and anything that affects revenue."
      },
      {
        "question": "How do you keep product content accurate?",
        "answer": "We add review checkpoints before catalogue content goes live. AI drafts descriptions and structures data, and a person checks accuracy and tone before publishing."
      },
      {
        "question": "Is this useful for a smaller online store?",
        "answer": "Yes. Smaller merchants often benefit most, because automation removes order admin, listing work, and query handling from a lean team during busy periods."
      }
    ],
    "seo": {
      "title": "E-commerce Operations AI Automation Services",
      "description": "TwoApps helps e-commerce teams automate order, catalogue, and post-purchase operations with AI-assisted workflows and human review checkpoints that keep quality high.",
      "keywords": [
        "ecommerce ai automation",
        "ecommerce operations automation",
        "ecommerce workflow automation ai",
        "order processing automation",
        "shopify automation ai"
      ],
      "canonicalPath": "/industries/ecommerce-operations-automation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "customer-support-automation",
    "title": "Support-heavy Service Businesses",
    "summary": "Faster, more consistent customer support with AI assisting agents and humans owning the decisions that matter.",
    "painPoints": [
      "High ticket volume and repetitive questions that slow response times",
      "Inconsistent answers and quality across agents and channels",
      "Slow triage, tagging, and routing of incoming requests",
      "Poor visibility across queues, SLAs, and escalations"
    ],
    "solutions": [
      "AI-assisted reply drafts grounded in your knowledge base, with agent review",
      "Automated triage, tagging, and routing with human oversight on edge cases",
      "Agent copilots for summaries, history, and suggested next steps",
      "Internal dashboards for queue, SLA, and escalation visibility"
    ],
    "exampleAutomations": [
      "Ticket triage, tagging, and routing to the right team",
      "Knowledge-base-grounded reply drafts for agent review",
      "Conversation summaries and handoff notes for escalations",
      "SLA monitoring and backlog alerting for support leads"
    ],
    "faq": [
      {
        "question": "Can AI reply to customers without an agent checking?",
        "answer": "Only where you allow it. We design clear boundaries so AI can draft and even send routine replies, while agents keep control of sensitive, complex, or high-risk cases."
      },
      {
        "question": "How do you stop AI giving wrong answers?",
        "answer": "We ground replies in your approved knowledge base and add review checkpoints. Where confidence is low or the question is sensitive, the workflow hands off to a human."
      },
      {
        "question": "Do we need to replace our helpdesk?",
        "answer": "Usually no. We normally improve the workflow around your existing helpdesk, which reduces rollout risk and lets your team keep tools they already know."
      },
      {
        "question": "Is this only for large support teams?",
        "answer": "No. Smaller support and service teams often get strong results because automation absorbs repetitive volume and frees agents for the conversations that need real judgment."
      }
    ],
    "seo": {
      "title": "Customer Support AI Automation Services",
      "description": "TwoApps helps support-heavy service businesses automate ticket triage and reply drafting with AI copilots and human checkpoints that keep answers accurate.",
      "keywords": [
        "customer support ai automation",
        "support workflow automation",
        "ai customer service automation",
        "ticket triage automation",
        "helpdesk automation ai"
      ],
      "canonicalPath": "/industries/customer-support-automation",
      "ogImage": "/og-default.png"
    }
  }
];

export const regions: RegionPage[] = [
  {
    slug: "dubai-uae-gcc-ai-automation",
    title: "AI Automation Partner in Dubai, UAE & GCC",
    summary:
      "A UAE-based AI partner helping Dubai and GCC teams cut manual work and launch real systems.",
    marketFocus: [
      "UAE/GCC businesses with slow, manual operational workflows",
      "Founders and operators who need a real pilot, not an AI demo",
      "Teams that need internal tools and workflow automation built together"
    ],
    whyTwoApps: [
      "UAE-based execution with global delivery experience",
      "Strong AI workflow delivery plus product engineering capability",
      "Practical implementation across web, mobile, backend, and internal tools",
      "A good fit for operations-heavy and compliance-aware work"
    ],
    engagementModel: [
      "Automation audit and priority sprint",
      "Pilot one workflow or internal tool",
      "Production rollout and ongoing optimization support"
    ],
    faq: [
      {
        question: "Do you work on-site in Dubai?",
        answer:
          "Yes, when needed. We can work remotely or support on-site sessions in Dubai for workshops, discovery, and stakeholder alignment."
      },
      {
        question: "Can you build the automation and the interface?",
        answer:
          "Yes. We can build both the workflow engine and the internal dashboard or admin interface your team needs to use it."
      },
      {
        question: "What size companies do you support?",
        answer:
          "We support startups, SMEs, and mid-market teams. The best fit is a team with recurring operational work and a clear process owner."
      }
    ],
    seo: {
      title: "Dubai UAE GCC AI Automation Partner | TwoApps",
      description:
        "TwoApps is a UAE-based AI automation partner for Dubai, UAE, and GCC teams. We build practical AI workflows, internal tools, and automation systems that reduce manual work.",
      keywords: [
        "dubai ai automation agency",
        "uae ai automation company",
        "gcc ai workflow automation",
        "middle east ai automation partner"
      ],
      canonicalPath: "/regions/dubai-uae-gcc-ai-automation",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "white-label-ai-partner-software-houses",
    title: "White-Label AI Partner for Software Houses (Global)",
    summary:
      "White-label AI implementation for agencies — Middle East, Eastern Europe, LATAM, Australia, New Zealand.",
    marketFocus: [
      "Software houses adding AI services to existing web/mobile delivery",
      "Agencies that need implementation support for AI workflows and AI features",
      "Teams that want to start selling AI work before hiring in-house specialists"
    ],
    whyTwoApps: [
      "Practical AI delivery focused on real client outcomes",
      "Senior execution from a UAE base without commodity outsourcing positioning",
      "Flexible white-label or co-delivery collaboration",
      "Can build the AI workflow and the product/UI around it"
    ],
    engagementModel: [
      "Capability sprint for your agency team",
      "White-label pilot on one client project",
      "Ongoing delivery capacity for AI work",
      "Escalation support for AI-heavy backlog items"
    ],
    faq: [
      {
        question: "Can you support agencies across time zones?",
        answer:
          "Yes. Being UAE-based gives us useful overlap time with the Middle East, Eastern Europe, parts of South America, and Australia/New Zealand."
      },
      {
        question: "Do you sign NDAs and work white-label?",
        answer:
          "Yes. NDAs, confidentiality, and white-label delivery are core parts of this service model."
      },
      {
        question: "What projects do agencies usually bring to you?",
        answer:
          "Common projects include AI automation pilots, AI features inside existing apps, internal tools for client teams, and Claude/agentic workflows the agency does not have time to build."
      }
    ],
    seo: {
      title: "White-Label AI Partner for Software Houses | TwoApps",
      description:
        "TwoApps is a UAE-based white-label AI implementation partner for software houses and agencies in UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand.",
      keywords: [
        "white label ai partner software houses",
        "agency ai implementation partner",
        "white label ai delivery eastern europe agency",
        "ai partner software house middle east australia"
      ],
      canonicalPath: "/regions/white-label-ai-partner-software-houses",
      ogImage: "/og-default.png"
    }
  }
];

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "claude-automation-ops-acceleration",
    title: "Claude Workflows That Help Teams Deliver Faster",
    context: "AI-assisted engineering and operations delivery",
    problem:
      "Teams were using AI in an ad hoc way, which caused inconsistent outputs, duplicated effort, and extra review work.",
    approach:
      "Built repeatable Claude and Claude Code workflows with clear task structure, review steps, and handoff rules so the team could use AI in a consistent way.",
    outcomes: [
      "Faster delivery on repeat implementation tasks",
      "More consistent output quality and review expectations",
      "Clearer handoffs for scaling AI-assisted work"
    ],
    tech: ["Claude", "Claude Code", "Automation playbooks", "Workflow design"],
    disclaimer: "Representative summary based on founder expertise and delivery experience."
  },
  {
    slug: "aml-kyc-workflow-automation-patterns",
    title: "Compliance Workflow Automation Patterns (AML/KYC)",
    context: "Fintech and compliance operations process design",
    problem:
      "Compliance teams were dealing with queue pressure, repetitive checks, and slow handoffs across tools and people.",
    approach:
      "Mapped the process, introduced automation opportunities, and added AI-assisted steps with human approval gates for safer execution.",
    outcomes: [
      "Less repetitive handling in compliance operations",
      "Better visibility across queues and escalations",
      "Safer AI usage with human control points"
    ],
    tech: ["Workflow automation", "Internal tools", "AI-assisted processing", "Ops dashboards"],
    disclaimer: "Representative summary based on domain and implementation experience."
  },
  {
    slug: "ai-enabled-product-and-dashboard-delivery",
    title: "AI Workflow + Dashboard Delivery in One Build",
    context: "Custom product engineering and internal tooling",
    problem:
      "The team needed both the automation backend and a usable interface, but vendors often delivered only one side.",
    approach:
      "Delivered the workflow logic and the operator-facing product interface together so teams could run, approve, and monitor AI-assisted processes in one system.",
    outcomes: [
      "End-to-end delivery from workflow logic to operator UI",
      "Faster time-to-value for internal AI systems",
      "Less coordination between multiple vendors"
    ],
    tech: ["Flutter", "AWS", "Web apps", "Dashboards", "API integrations"],
    disclaimer: "Representative summary synthesized from founder CV and project experience."
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "from-chatgpt-prompts-to-production-why-most-ai-pilots-stall",
    title: "From ChatGPT Prompts to Production: Why Most AI Pilots Stall",
    summary:
      "Most AI pilots never reach production. The gap is not the model. It is the workflow, the guardrails, and the handoff plan that turns a prompt into a reliable system.",
    content:
      "Every week we speak with teams that have built impressive ChatGPT demos. They can generate emails, summarize documents, draft code, or answer support questions. The demo feels magical. Then they try to put it in front of real users, and the magic fades. Outputs become inconsistent, edge cases multiply, and someone has to manually check every result. The pilot stalls not because the model is bad, but because a prompt is not a product.\n\n" +
      "The first trap is treating the prompt as the whole system. A prompt works beautifully in a notebook when the inputs are clean and the user is patient. In production, inputs are messy. A customer ticket arrives with missing context. A PDF is scanned upside down. A spreadsheet column is named differently this month. A prompt that assumes perfect inputs will fail silently or produce confident nonsense. Production AI needs input validation, fallback logic, and a way to surface uncertainty instead of hiding it.\n\n" +
      "The second trap is skipping the human checkpoint. Teams either keep humans entirely out of the loop, which creates risk, or they keep humans in every step, which defeats the purpose. The right design is selective involvement. Let the AI handle the routine cases with clear confidence thresholds, and route exceptions to a person who can decide. That routing logic is where most pilots fall short. It requires understanding the real cost of being wrong in each scenario.\n\n" +
      "The third trap is measuring the wrong thing. Pilot teams often optimize for how smart the output looks instead of how much time or money it saves. They celebrate a beautiful summary while ignoring that the person still has to copy it between three tools. Real value comes from end-to-end workflow improvement: fewer clicks, shorter queues, less rework, and faster handoffs.\n\n" +
      "A fourth trap is underestimating integration and maintenance. A model that works today may drift as data formats, user behavior, or business rules change. Production systems need logging, versioning, and a clear owner who watches for degradation. Without that, the pilot becomes a fragile demo that breaks the first time something real changes.\n\n" +
      "There is also a people challenge. Teams sometimes resist AI workflows because they fear replacement or because the tool does not match how they actually work. Successful rollout includes the people who use the output from day one. Their feedback shapes the checkpoints, the escalation rules, and the user interface. If the workflow makes their job harder, they will work around it.\n\n" +
      "Finally, be realistic about timelines. A useful pilot can often be built in weeks, but turning it into a production system that runs reliably for months takes longer. The goal of the pilot is to prove value and learn constraints, not to eliminate all future work. Teams that promise overnight transformation usually disappoint. Teams that plan for iteration usually win.\n\n" +
      "The good news is that once the first workflow is in production, the next one is easier. You have the patterns, the tooling, and the trust. The real transformation is not a single AI feature. It is the organizational muscle to keep building useful workflows over time.\n\n" +
      "At TwoApps, we approach production differently. We start with one repeatable process, not a broad AI strategy. We map the inputs, the decisions, the errors, and the approvals. We build the workflow so the AI handles what it should and humans stay where they matter. Then we add monitoring, so the team can see when drift happens and fix it before it becomes a problem.\n\n" +
      "If your pilot is stalling, the fix is usually not a better prompt. It is a better workflow around the prompt. That is the difference between a demo and a system that actually runs your business.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-01",
    tags: ["AI automation", "Agentic AI", "AI strategy"],
    tldr: "Most AI pilots stall because teams ship a prompt, not a system. The fix is workflow design around the model: input handling, human checkpoints, monitoring, and a clear owner.",
    keyTakeaways: [
      "A prompt that assumes clean inputs fails in production, where inputs are messy.",
      "Add human review where being wrong is costly; automate the routine cases.",
      "Measure time and money saved end to end, not how smart the output looks.",
      "Plan for monitoring, versioning, and a named owner so the system survives change.",
    ],
    faq: [
      {
        question: "Why do most AI pilots fail to reach production?",
        answer: "Because a prompt is not a product. Pilots stall when there is no workflow around the model — input validation, fallback logic, human checkpoints, monitoring, and a clear owner. The model is rarely the blocker."
      },
      {
        question: "How do you decide where humans stay in the loop?",
        answer: "By the cost of being wrong. Let AI handle routine cases above a confidence threshold and route exceptions to a person. That routing logic is where most pilots fall short."
      },
      {
        question: "How long does it take to move from pilot to production?",
        answer: "A useful pilot can be built in weeks, but a reliable production system takes longer. The pilot's job is to prove value and learn constraints, then you iterate from there."
      },
    ],
    featured: true,
    estimatedReadTime: "6 min read",
    seo: {
      title: "From ChatGPT Prompts to Production: Why Most AI Pilots Stall | TwoApps",
      description:
        "Most AI pilots stall because teams confuse prompts with production systems. Learn why workflow design, guardrails, and human checkpoints matter more than the model.",
      keywords: [
        "chatgpt pilot production",
        "ai pilot stall",
        "ai workflow production",
        "ai automation implementation"
      ],
      canonicalPath: "/blog/from-chatgpt-prompts-to-production-why-most-ai-pilots-stall",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "what-agentic-ai-actually-means-for-operations-teams",
    title: "What Agentic AI Actually Means for Operations Teams",
    summary:
      "Agentic AI is not about replacing people. It is about giving operations teams small, autonomous agents that handle routine steps and ask for help when the situation changes.",
    content:
      "The term agentic AI is everywhere right now, and like most buzzwords, it means different things to different people. For some it conjures images of fully autonomous digital workers. For others it sounds like chatbots with extra branding. For operations teams, the reality is more practical and more useful than either extreme.\n\n" +
      "Agentic AI, at its core, is software that can take a goal, plan a sequence of actions, use tools, observe results, and adjust. It is not one giant brain that runs your company. It is a set of focused agents that handle specific workflows: checking a queue, drafting a response, gathering data, routing an exception, or updating a record. Each agent has a narrow scope, clear boundaries, and a defined way to escalate.\n\n" +
      "This matters for operations because most operational work is not one task. It is a chain of tasks. A refund request might require verifying the order, checking policy, fetching transaction data, drafting a response, and routing for approval. Traditionally, a person does every step. With agentic AI, an agent can do the verification, data gathering, and draft, then hand the decision to a person at the approval step. The person still controls the outcome, but the boring parts disappear.\n\n" +
      "The design challenge is deciding where autonomy ends and human judgment begins. This is not a technical decision alone. It is a business decision about risk, compliance, and customer trust. A good agentic workflow makes those boundaries explicit. It logs what the agent did, why it did it, and what it was unsure about. That transparency is what makes the system acceptable in regulated or customer-facing environments.\n\n" +
      "Another common misconception is that agentic AI requires replacing your current tools. In practice, the best agents usually work through the APIs and interfaces you already have. They read from your CRM, write to your ERP, send emails through your existing provider, and update the same dashboards your team uses. The value is in orchestration, not replacement.\n\n" +
      "The tooling landscape is also maturing quickly. There are now frameworks for building agents, observing their behavior, and managing their memory and state. But tooling alone does not guarantee success. The hard part is still the design: defining the goal, choosing the right tools, setting the confidence thresholds, and planning for failure. A poorly designed agent will cause more work than it saves.\n\n" +
      "Common starting points include ticket triage, invoice processing, refund routing, lead enrichment, and compliance checks. These workflows share three traits: they happen often, they follow a pattern, and the cost of a mistake is manageable with the right checkpoints. They are also unglamorous, which is exactly why people stop doing them manually once they see a better way.\n\n" +
      "Measuring agent performance is different from measuring traditional software. You need to track accuracy, escalation rate, human override rate, and latency. You also need a feedback loop so the agent improves as it sees more examples. Without measurement, you cannot tell whether the agent is helping or just adding complexity.\n\n" +
      "In the end, agentic AI is best understood as a way to extend your operations team. It handles the predictable work, escalates the uncertain work, and keeps a record of everything it tried. That combination is what makes it practical for real businesses today.\n\n" +
      "For operations leaders, the right question is not whether to adopt agentic AI. It is which workflows are repeatable enough to delegate and important enough to improve. Start with one workflow that is well understood, has measurable pain, and has a clear owner. Build a small agent around it, measure the results, and expand from there. That is how agentic AI becomes real operations leverage instead of another slide in a strategy deck.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-05",
    tags: ["Agentic AI", "AI automation", "Operations"],
    tldr: "Agentic AI gives operations teams focused agents that plan, use tools, and act on routine steps — escalating to a human when judgment or risk is involved.",
    keyTakeaways: [
      "An agent takes a goal, plans steps, uses tools, checks results, and adjusts.",
      "Most ops work is a chain of tasks; agents handle the routine links and hand off decisions.",
      "Make autonomy boundaries explicit and logged so the system is acceptable in regulated settings.",
      "Start with one repeatable, well-understood workflow that has a clear owner.",
    ],
    faq: [
      {
        question: "What is agentic AI in simple terms?",
        answer: "Software that takes a goal, plans a sequence of actions, uses tools, observes results, and adjusts within defined boundaries. It is a set of focused agents handling specific workflows, not one giant autonomous brain."
      },
      {
        question: "Does agentic AI replace operations staff?",
        answer: "No. It removes repetitive steps and escalates exceptions to people, so staff spend more time on judgment, decisions, and customer-facing work."
      },
      {
        question: "Where should a team start with agentic AI?",
        answer: "With a workflow that happens often, follows a pattern, and has a manageable cost of error — for example ticket triage, invoice processing, or compliance checks."
      },
    ],
    featured: false,
    estimatedReadTime: "6 min read",
    seo: {
      title: "What Agentic AI Actually Means for Operations Teams | TwoApps",
      description:
        "Agentic AI gives operations teams focused autonomous agents for routine workflow steps. Learn how to design boundaries, escalation rules, and real ROI.",
      keywords: [
        "agentic ai operations",
        "ai agents operations teams",
        "autonomous workflow agents",
        "agentic ai implementation"
      ],
      canonicalPath: "/blog/what-agentic-ai-actually-means-for-operations-teams",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "how-we-use-claude-code-to-ship-faster-at-twoapps",
    title: "How We Use Claude Code to Ship Faster at TwoApps",
    summary:
      "Claude Code is not a replacement for engineering judgment. It is a multiplier when paired with clear tasks, review rules, and a workflow that keeps humans in control.",
    content:
      "We build a lot of software at TwoApps. Internal tools, client workflows, dashboards, integrations, and AI features all move through the same delivery pipeline. Over the last year, Claude Code has become a core part of how we ship faster without lowering our standards. The key has been treating it as a workflow tool, not a magic button.\n\n" +
      "The first thing we learned is that context matters more than the prompt. Claude Code works best when it understands the codebase, the conventions, and the goal. We keep our project structure consistent, document our patterns, and break tasks into small, well-defined pieces. A task like refactor the auth helper to use the new error format and add tests is a good fit. A task like improve the app is not.\n\n" +
      "The second thing we learned is that review is non-negotiable. Claude Code can write code quickly, but it is still our responsibility to verify it. We run the same checks we would for human-written code: tests, type checks, lint, and a manual review of the diff. The difference is that the starting point is much further along. Instead of staring at a blank file, we are editing a solid first draft.\n\n" +
      "We also built a set of reusable patterns around common tasks. For example, when we add a new API endpoint, we have a standard file structure, naming convention, and test pattern. Claude Code can generate that boilerplate in seconds, which lets us focus on the business logic that is different this time. Those patterns are written down and kept current, so the tool does not drift from how we actually work.\n\n" +
      "Another important practice is keeping risky changes small. We prefer ten small, reviewable changes over one large diff. This reduces the chance of subtle errors slipping through and makes rollbacks easier. Claude Code helps here because generating small changes is fast. The bottleneck becomes our review process, which is exactly where we want human attention.\n\n" +
      "Finally, we measure outcomes, not activity. We track cycle time, defect rate, and rework. The goal is not to produce more code. It is to produce the right code faster and with fewer bugs. In our experience, Claude Code delivers the biggest gains when the team has clear standards, a good review habit, and a culture of asking whether the generated code is correct, not just whether it runs.\n\n" +
      "We also use Claude Code as an onboarding and knowledge-sharing tool. New team members can ask questions about the codebase in natural language and get pointed to the right files, conventions, and examples. It does not replace mentorship, but it shortens the time it takes for someone to become productive in an unfamiliar project. That is especially valuable for agencies and software houses that move people between client codebases.\n\n" +
      "It is also important to know what Claude Code is not good for. It does not replace architecture decisions, security reviews, or deep debugging of complex concurrency issues. It can suggest, draft, and accelerate, but the final responsibility stays with the engineer. Teams that pretend otherwise usually pay for it later in subtle bugs and architectural drift.\n\n" +
      "Security and context management matter too. We are careful about what code and data we feed into any AI tool, especially for client projects. We keep sensitive credentials, customer data, and proprietary algorithms out of prompts. We also organize context so the tool understands the relevant files without being overwhelmed by irrelevant ones. Good context hygiene is what separates useful assistance from expensive guessing.\n\n" +
      "For teams considering Claude Code, my advice is simple. Start with one repeatable task. Document your conventions. Require review. Measure what improves. Done right, it is a genuine force multiplier. Done carelessly, it is a fast way to accumulate technical debt.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-10",
    tags: ["Claude Code", "AI automation", "Engineering"],
    tldr: "Claude Code is a force multiplier when paired with clear tasks, documented conventions, mandatory review, and outcome metrics — not a replacement for engineering judgment.",
    keyTakeaways: [
      "Context beats clever prompts: consistent structure and documented patterns matter most.",
      "Review is non-negotiable; AI gives you a strong first draft, not a finished product.",
      "Prefer many small, reviewable changes over one large diff.",
      "Measure cycle time, defect rate, and rework — not lines of code.",
    ],
    faq: [
      {
        question: "Does Claude Code replace developers?",
        answer: "No. It removes typing and boilerplate, not responsibility. Architecture, security review, deep debugging, and final ownership stay with the engineer."
      },
      {
        question: "How do you keep AI-generated code maintainable?",
        answer: "With documented conventions, small reviewable changes, and the same checks as human code — tests, type checks, lint, and a manual diff review."
      },
      {
        question: "Is it safe to use on client code?",
        answer: "With good context hygiene, yes. Keep credentials, customer data, and proprietary logic out of prompts, and scope the context to the relevant files."
      },
    ],
    featured: false,
    estimatedReadTime: "6 min read",
    seo: {
      title: "How We Use Claude Code to Ship Faster at TwoApps",
      description:
        "A practical look at how TwoApps uses Claude Code for faster delivery, including task design, review rules, patterns, and measuring real engineering outcomes.",
      keywords: [
        "claude code workflow",
        "claude code engineering",
        "ai coding assistant implementation",
        "ship faster with claude code"
      ],
      canonicalPath: "/blog/how-we-use-claude-code-to-ship-faster-at-twoapps",
      ogImage: "/og-default.png"
    }
  },
  {
    slug: "the-real-roi-of-ai-automation-in-regulated-industries",
    title: "The Real ROI of AI Automation in Regulated Industries",
    summary:
      "Regulated industries measure ROI differently. The payoff comes from fewer errors, cleaner audits, faster onboarding, and a team that can finally focus on judgment work.",
    content:
      "When we talk to fintech, healthcare, and compliance teams about AI automation, the first question is often about return on investment. Leaders want a number: how much will this save? The honest answer is that the biggest returns in regulated industries are usually risk reduction and throughput, not headcount reduction.\n\n" +
      "In a regulated environment, the cost of an error is not just the time to fix it. It is the audit finding, the regulatory notice, the customer complaint, and the reputational damage. A workflow that reduces manual transcription, standardizes triage, and logs every decision creates value that is hard to capture in a simple hourly savings calculation. The ROI shows up as fewer incidents, faster audits, and calmer operations teams.\n\n" +
      "Take AML and KYC operations as an example. Analysts spend huge portions of their day on repetitive checks: is the document complete, does the name match, is the address valid, has this case been seen before. These are perfect tasks for AI-assisted automation, but only if the system is designed with checkpoints. A well-built workflow can handle the routine cases, prepare summaries for the analyst, and route exceptions for human review. The analyst handles more cases per day and spends more time on the ones that actually need judgment.\n\n" +
      "The same pattern applies to onboarding, claims processing, contract review, and supplier checks. The value is not replacing the expert. It is removing the friction that keeps experts from doing expert work. When a compliance officer can focus on real risks instead of formatting reports, the whole program improves.\n\n" +
      "There is also a less obvious ROI: retention. Operational teams in regulated industries often burn out on repetitive work. Automation that removes the worst parts of the job makes the work more interesting and reduces turnover. That saves recruiting and training costs, but more importantly, it preserves institutional knowledge.\n\n" +
      "To measure ROI well, track a mix of operational and risk metrics. Time per case, error rate, rework rate, audit findings, queue length, and employee satisfaction all matter. The best automation projects improve several of these at once. The worst ones optimize one metric while quietly making others worse.\n\n" +
      "Implementation approach also affects ROI. The safest path is to start with a narrow, well-documented workflow, run it in parallel with the existing process, and compare results. This builds confidence, surfaces edge cases early, and gives you real numbers before a wider rollout. Big-bang deployments in regulated environments are risky because they combine process change, technology change, and compliance exposure all at once.\n\n" +
      "Stakeholder alignment is another factor that is often overlooked. Finance, compliance, operations, and IT each care about different parts of the outcome. A strong business case speaks to all of them in their own language: cost savings for finance, control and auditability for compliance, throughput and experience for operations, and maintainability and security for IT. When everyone sees the value, the project survives the inevitable bumps.\n\n" +
      "Choosing the right partner also affects ROI. Look for a team that asks about your process before proposing technology, that designs checkpoints into the workflow, and that can explain what happens when something goes wrong. The best partners make the pilot safer and the production system easier to own. The worst ones deliver a demo and leave you to figure out the rest.\n\n" +
      "When done well, AI automation in regulated industries does not feel like a gamble. It feels like finally having the bandwidth to do the work that always deserved more attention. That is the return that matters most.\n\n" +
      "If you are evaluating AI automation in a regulated industry, look for a partner who understands compliance as part of the design, not an afterthought. The goal is a system that is faster and safer, not faster at the expense of safety. That is the ROI that holds up under scrutiny.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-13",
    tags: ["AI automation", "Compliance", "Fintech"],
    tldr: "In regulated industries, AI automation ROI shows up as risk reduction, audit readiness, and throughput — not headcount cuts.",
    keyTakeaways: [
      "The cost of an error includes audit findings and reputational damage, not just rework time.",
      "AI-assisted AML/KYC handles routine checks and prepares cases; analysts focus on judgment.",
      "Run new workflows in parallel with the existing process before a wider rollout.",
      "Track time per case, error rate, rework, audit findings, and retention together.",
    ],
    faq: [
      {
        question: "How is AI automation ROI measured in regulated industries?",
        answer: "Through a mix of operational and risk metrics: time per case, error and rework rates, audit findings, queue length, and employee retention — not headcount reduction alone."
      },
      {
        question: "Is AI safe to use in compliance workflows?",
        answer: "Yes, when designed with human checkpoints, audit trails, and clear ownership so AI supports the team rather than making hidden decisions."
      },
      {
        question: "What is the safest way to roll out AI in a regulated process?",
        answer: "Start with a narrow, well-documented workflow, run it in parallel with the existing process, compare results, then expand once you have real numbers."
      },
    ],
    featured: false,
    estimatedReadTime: "7 min read",
    seo: {
      title: "The Real ROI of AI Automation in Regulated Industries | TwoApps",
      description:
        "AI automation ROI in regulated industries comes from risk reduction, audit readiness, and throughput. Learn how to measure value beyond headcount savings.",
      keywords: [
        "ai automation regulated industries",
        "compliance automation roi",
        "fintech ai automation value",
        "aml kyc automation roi"
      ],
      canonicalPath: "/blog/the-real-roi-of-ai-automation-in-regulated-industries",
      ogImage: "/og-default.png"
    }
  }
];

export const processSteps = [
  {
    title: "Audit",
    copy: "Understand the workflow, bottlenecks, approvals, and systems involved. Choose the best starting point first."
  },
  {
    title: "Pilot",
    copy: "Build one real workflow with a clear goal so you can measure value quickly."
  },
  {
    title: "Stabilize",
    copy: "Add monitoring, guardrails, and fallback behavior so the workflow runs reliably."
  },
  {
    title: "Scale",
    copy: "Expand into the next workflow or client use case without starting from scratch."
  }
] as const;

export const featuredIndustries = [
  "Fintech / AML / KYC",
  "Real Estate Operations",
  "Logistics and Supply Chain",
  "Recruitment / Staffing",
  "E-commerce Operations",
  "Support-heavy Service Businesses"
] as const;

export const globalPartnerRegions = [
  "Eastern Europe",
  "South America",
  "Australia",
  "New Zealand"
] as const;

export const packages: Package[] = [
  {
    id: "workflow-assessment",
    name: "Workflow Assessment",
    description:
      "A focused audit of your most painful repeat process. We map inputs, decisions, approvals, and failure points, then recommend the highest-value workflow to automate first.",
    priceUsd: 8000,
    billingPeriod: "one-time",
    timeline: "2 weeks",
    serviceType: "AI Workflow Automation",
    features: [
      "Process and bottleneck mapping",
      "Automation opportunity scoring",
      "Recommended pilot scope and success metrics",
      "Tooling and integration assessment"
    ]
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification Workflow",
    description:
      "An AI-assisted workflow that enriches, scores, and routes inbound leads so your team only spends time on the ones worth a conversation.",
    priceUsd: 10000,
    billingPeriod: "one-time",
    timeline: "1 week",
    serviceType: "AI Workflow Automation",
    features: [
      "Lead enrichment and deduplication",
      "Scoring and routing rules with human override",
      "CRM integration",
      "Monitoring and handover notes"
    ]
  },
  {
    id: "customer-support",
    name: "Customer Support Automation",
    description:
      "Triage, draft, and route support requests with AI while keeping a person on the decisions that matter. Built around your existing helpdesk.",
    priceUsd: 12000,
    billingPeriod: "one-time",
    timeline: "2 weeks",
    serviceType: "AI Workflow Automation",
    features: [
      "Ticket triage and intent detection",
      "Draft responses with confidence thresholds",
      "Escalation routing to humans",
      "Helpdesk integration and reporting"
    ]
  },
  {
    id: "finance-reporting",
    name: "Finance Reporting Automation",
    description:
      "Automate the repetitive parts of finance and operations reporting — data pulls, reconciliation prep, and report drafting — with a clean audit trail.",
    priceUsd: 15000,
    billingPeriod: "one-time",
    timeline: "2 weeks",
    serviceType: "AI Workflow Automation",
    features: [
      "Automated data collection and validation",
      "Reconciliation and exception flagging",
      "Report draft generation",
      "Audit logging and approvals"
    ]
  },
  {
    id: "ai-governance-audit",
    name: "AI Governance Audit",
    description:
      "A structured review of how AI is used across your business — risk, compliance, data handling, and human-in-the-loop controls — with a prioritized remediation plan.",
    priceUsd: 20000,
    billingPeriod: "one-time",
    timeline: "3 weeks",
    serviceType: "AI Governance & Compliance",
    features: [
      "AI usage and risk inventory",
      "Data handling and compliance review",
      "Human-in-the-loop control assessment",
      "Prioritized governance roadmap"
    ]
  },
  {
    id: "compliance-as-a-service",
    name: "Compliance-as-a-Service",
    description:
      "Ongoing support to keep AI-assisted workflows compliant and well-governed as your processes and regulations change.",
    priceUsd: 5000,
    priceCurrency: "USD",
    billingPeriod: "month",
    timeline: "6-month minimum",
    serviceType: "AI Governance & Compliance",
    features: [
      "Continuous workflow monitoring",
      "Control updates as rules change",
      "Quarterly governance review",
      "Priority remediation support"
    ]
  }
];

/**
 * Genuine, named client testimonials. Populated only with real, approved quotes
 * (powers Review + AggregateRating schema). Empty until verified ones are supplied
 * — never fabricate testimonials or ratings.
 */
export const testimonials: Testimonial[] = [];

export const homeFaq: FaqItem[] = [
  {
    question: "What does TwoApps do?",
    answer:
      "TwoApps is a UAE-based AI automation and software delivery partner. We build practical AI workflows, agentic systems, and internal tools that cut manual work for business teams, and we deliver AI projects white-label for agencies and software houses."
  },
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI is software that takes a goal, plans a sequence of steps, uses tools, checks the result, and adjusts — with human approval where it matters. Instead of one giant model, it is a set of focused agents that each handle a specific workflow."
  },
  {
    question: "Who do you work with?",
    answer:
      "Two groups: direct businesses in the UAE, GCC, and Middle East that want to automate operations; and agencies or software houses worldwide (Eastern Europe, South America, Australia, New Zealand, Europe) that need a white-label AI delivery partner."
  },
  {
    question: "Do I have to replace my current tools or team?",
    answer:
      "Usually not. We build around the systems you already use and design workflows so AI handles the repetitive work while your team stays in control of decisions, exceptions, and customer-facing tasks."
  },
  {
    question: "How do engagements start?",
    answer:
      "We start small: an audit to find the highest-value workflow, then a bounded pilot with a measurable goal. Once it is stable and monitored, we scale into the next workflow. You see value before committing to a large rollout."
  }
];

export const aboutFaq: FaqItem[] = [
  {
    question: "Who is behind TwoApps?",
    answer:
      "TwoApps was founded by Zain Hassan, an AI implementation engineer based in Dubai. The focus is practical AI workflows, Claude / Claude Code delivery systems, and AI-enabled internal tools for businesses and software houses."
  },
  {
    question: "Where is TwoApps based and who do you serve?",
    answer:
      "We are based in Dubai, UAE, and serve clients in the UAE, GCC, and Middle East directly, plus white-label agency partners across Eastern Europe, South America, Australia, New Zealand, and Europe."
  },
  {
    question: "What makes TwoApps different from a generic AI agency?",
    answer:
      "We design for production, not demos: human checkpoints, guardrails, monitoring, and a clear owner for every workflow. We can also build the product or interface around the automation, not just the model layer."
  }
];

export const workFaq: FaqItem[] = [
  {
    question: "Can you share client names or detailed metrics?",
    answer:
      "Much of our work is under NDA, so several examples are described as representative patterns rather than named case studies. Where clients approve named references and figures, we share them directly."
  },
  {
    question: "What kinds of projects do you take on?",
    answer:
      "AI workflow automation, agentic systems, Claude / Claude Code delivery, internal tools and dashboards, and white-label AI features inside agency client projects."
  },
  {
    question: "How quickly can you show results?",
    answer:
      "A bounded pilot can usually be built in a few weeks. The goal of the pilot is to prove value and learn constraints before a wider production rollout."
  }
];

export const solutions: Solution[] = [
  {
    "slug": "agentic-orchestration",
    "title": "Agentic AI Orchestration",
    "tagline": "Coordinate AI agents into reliable workflows with human checks.",
    "summary": "Agentic orchestration is how you turn one-off AI prompts into coordinated, multi-step workflows. We design and run agent systems that hand work between steps, call your tools, and pause for human approval where it matters.",
    "shortAnswer": "Agentic AI orchestration is the practice of coordinating multiple AI agents and tools into a reliable multi-step workflow, where each agent handles a task and passes work onward under defined rules. TwoApps designs these systems with explicit guardrails, monitoring, and human approval points, so automation stays controllable rather than unpredictable.",
    "benefits": [
      "Move beyond single prompts to workflows that complete real multi-step tasks end to end",
      "Keep control with human approval steps, guardrails, and clear handoffs between agents",
      "Connect agents to your existing CRM, ERP, email, and internal tools instead of working in isolation",
      "Catch and recover from failures with monitoring, retries, and fallback paths",
      "Make AI behaviour repeatable across your team rather than dependent on one person's prompts"
    ],
    "deliverables": [
      "A mapped agent workflow showing each step, decision point, and handoff",
      "Orchestration setup with tool calls, routing rules, and shared state between agents",
      "Guardrails and human approval checkpoints at the steps that carry risk",
      "Monitoring, logging, and failure-handling so you can see what each agent did and why",
      "Handover documentation and an improvement backlog for the next workflow"
    ],
    "process": [
      "Audit the process you want to automate and identify where agents add value versus where humans must stay involved",
      "Build one orchestrated pilot workflow with a clear, measurable goal and tight scope",
      "Stabilize it with monitoring, logging, retries, and approval steps before widening use",
      "Scale to the next workflow once the pilot runs reliably in production"
    ],
    "faq": [
      {
        "question": "What is the difference between a single AI agent and agentic orchestration?",
        "answer": "A single agent handles one task in response to a prompt. Orchestration coordinates several agents and tools into a workflow, passing work between steps, applying rules, and pausing for human review. Orchestration is what makes multi-step automation reliable rather than a one-off."
      },
      {
        "question": "Do orchestrated agents run without any human involvement?",
        "answer": "Not by default, and we usually do not recommend it. We place human approval steps at the points that carry real cost or risk. Lower-risk steps can run automatically, but the workflow is designed so a person can review, override, or stop it."
      },
      {
        "question": "What happens when an agent fails or gives a wrong answer?",
        "answer": "We design for that. Workflows include monitoring, retries, validation checks, and fallback paths, so a failed or low-confidence step is caught and routed to a human or an alternative path rather than passing bad output downstream."
      },
      {
        "question": "Which frameworks or models do you use for orchestration?",
        "answer": "We choose tools to fit your stack rather than forcing a single platform. That can mean orchestration frameworks, workflow engines, or custom code, and the underlying model is selected per step. The priority is reliability and fit with your existing systems."
      },
      {
        "question": "How do you start an orchestration project?",
        "answer": "We start with one workflow, not your whole operation. We audit a single process, scope a pilot with a measurable goal, prove it works with monitoring and human checks, and only then expand to the next process."
      }
    ],
    "seo": {
      "title": "Agentic AI Orchestration | TwoApps",
      "description": "Agentic AI orchestration coordinates multiple agents and tools into reliable multi-step workflows. TwoApps builds them with guardrails, monitoring, and human checks.",
      "keywords": [
        "agentic orchestration",
        "agentic ai orchestration",
        "orchestrating ai agents",
        "multi-agent workflows",
        "ai agent orchestration uae"
      ],
      "canonicalPath": "/solutions/agentic-orchestration",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "vibe-coding",
    "title": "Vibe Coding",
    "tagline": "Build software by directing AI, with review where it counts.",
    "summary": "Vibe coding means building software by describing what you want in plain language and letting AI write the code. We help teams do it responsibly, with review, testing, and guardrails so speed does not cost you quality or security.",
    "shortAnswer": "Vibe coding is building software by directing an AI in natural language, describing the outcome you want and letting the AI generate the code, then iterating on the result. It speeds delivery but needs human review, testing, and guardrails to stay safe. TwoApps helps teams adopt vibe coding without sacrificing quality, security, or maintainability.",
    "benefits": [
      "Ship prototypes and internal tools faster by directing AI instead of writing every line by hand",
      "Free your developers to focus on architecture, review, and the hard problems",
      "Adopt AI-assisted coding with standards, so output stays consistent across people and projects",
      "Reduce the risk of insecure or unmaintainable AI-generated code through review and testing",
      "Make AI coding a repeatable team practice, not a personal shortcut one developer relies on"
    ],
    "deliverables": [
      "A vibe coding workflow with prompting standards and a clear review checklist",
      "Guardrails for security, secrets handling, and code quality on AI-generated code",
      "Testing and review checkpoints built into the delivery process",
      "Team playbooks and onboarding so the practice is shared, not siloed",
      "A pilot project delivered with AI assistance to prove the workflow in practice"
    ],
    "process": [
      "Audit how your team uses AI coding tools today and where output quality or security slips",
      "Run a vibe coding pilot on one project with review and testing built in from the start",
      "Stabilize with documented standards, guardrails, and checkpoints before wider rollout",
      "Scale the practice across teams once the workflow proves reliable"
    ],
    "faq": [
      {
        "question": "What does vibe coding actually mean?",
        "answer": "Vibe coding is building software by describing what you want in plain language and letting an AI generate the code, then iterating on the result. You direct the outcome rather than writing every line yourself. The term was coined in early 2025 and has since become common shorthand for AI-assisted development."
      },
      {
        "question": "Is vibe coding safe to use in production?",
        "answer": "It can be, with discipline. AI can produce code that looks right but contains bugs, security gaps, or hidden complexity. The difference between a risky and a safe practice is human review, testing, and guardrails. We treat AI-generated code as a draft that must be reviewed, not a finished product."
      },
      {
        "question": "Does vibe coding replace developers?",
        "answer": "No. It changes what developers spend time on. Direction, review, architecture, and judgement become more important, not less. Someone still has to understand the code, test it, and own it in production. Vibe coding removes typing, not responsibility."
      },
      {
        "question": "How do you stop AI-generated code from becoming unmaintainable?",
        "answer": "With standards and review. We define how prompts are structured, what gets tested, and what a reviewer checks before code merges. Treating AI output as a draft that must meet your normal quality bar keeps the codebase maintainable as it grows."
      },
      {
        "question": "Can you help our team adopt vibe coding responsibly?",
        "answer": "Yes. We set up the workflow, define guardrails and review checkpoints, write team playbooks, and run a pilot project so the practice is proven before you depend on it. The goal is speed you can trust, not speed that creates risk later."
      }
    ],
    "seo": {
      "title": "Vibe Coding for Teams | TwoApps",
      "description": "Vibe coding means building software by directing AI in plain language. TwoApps helps teams do it responsibly with review, testing, and guardrails.",
      "keywords": [
        "vibe coding",
        "ai-assisted coding",
        "vibe coding for teams",
        "building software with ai",
        "responsible vibe coding"
      ],
      "canonicalPath": "/solutions/vibe-coding",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-consultancy",
    "title": "AI Consultancy",
    "tagline": "Practical AI strategy that ends in working systems, not slides.",
    "summary": "AI consultancy is help deciding where AI fits, what to build, and how to do it safely. We give practical advice grounded in delivery, so you get a clear plan and the option to have us build it with you.",
    "shortAnswer": "AI consultancy is expert guidance on where AI fits your business, what to build, and how to adopt it safely. It covers strategy, use-case selection, feasibility, and governance. TwoApps approaches it as a delivery partner, not just an advisor, so recommendations are practical and can move straight into a working pilot.",
    "benefits": [
      "Get a clear view of which AI use cases are worth pursuing and which are not",
      "Avoid costly dead ends with honest feasibility checks before you commit budget",
      "Receive advice grounded in real delivery, not generic strategy decks",
      "Plan for guardrails, governance, and human oversight from the start",
      "Move from recommendation to a working pilot without changing partners"
    ],
    "deliverables": [
      "An AI opportunity assessment ranking use cases by value and feasibility",
      "A prioritised roadmap with clear next steps and rough effort estimates",
      "A recommended approach for tools, data, and integration with your systems",
      "A governance and risk view covering guardrails, oversight, and compliance considerations",
      "An optional pilot scope so you can move straight into building"
    ],
    "process": [
      "Audit your processes, tools, and data to find where AI can realistically help",
      "Identify and prioritise use cases, then scope a pilot worth proving first",
      "Define guardrails, governance, and success measures so adoption stays controlled",
      "Plan the path to scale, with the option for us to build and stabilize alongside you"
    ],
    "faq": [
      {
        "question": "What does an AI consultancy actually deliver?",
        "answer": "A clear answer to where AI fits your business and what to do about it. That usually means an opportunity assessment, a prioritised roadmap, a recommended technical approach, and a view on governance and risk. We aim for a plan you can act on, not a report that sits on a shelf."
      },
      {
        "question": "How is TwoApps different from a traditional consultancy?",
        "answer": "We build what we recommend. Our advice is grounded in delivery, so we will not propose something we cannot implement. If you want, the same team that scopes the strategy can build and run the pilot, which avoids the gap between strategy and execution."
      },
      {
        "question": "Do we have to build anything with you after the consultancy?",
        "answer": "No. You own the plan and can take it anywhere. We design the engagement so the strategy stands on its own. Many clients choose to continue with us into a pilot, but that is your decision, not a condition."
      },
      {
        "question": "How do you handle AI risk and governance?",
        "answer": "We treat it as part of strategy, not an afterthought. We look at where human oversight is needed, what guardrails reduce risk, how data is handled, and which compliance considerations apply, including AML and KYC contexts for regulated sectors in the UAE and GCC."
      },
      {
        "question": "How long does an AI consultancy engagement take?",
        "answer": "It depends on scope, but a focused opportunity assessment and roadmap is typically a matter of weeks, not months. We keep it tight and outcome-focused so you reach a decision quickly rather than paying for a long discovery phase."
      }
    ],
    "seo": {
      "title": "AI Consultancy & Strategy | TwoApps",
      "description": "AI consultancy from TwoApps gives practical strategy, use-case selection, and governance, grounded in real delivery so plans turn into working systems.",
      "keywords": [
        "ai consultancy",
        "ai consulting services",
        "ai consultant",
        "ai strategy consulting",
        "ai consultant uae"
      ],
      "canonicalPath": "/solutions/ai-consultancy",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-software-house",
    "title": "AI Software House",
    "tagline": "An AI-native team that builds and ships real software.",
    "summary": "An AI software house builds custom software with AI at the centre of both the product and the delivery process. We design, build, and ship working systems for businesses and white-label partners, using AI to move faster without dropping quality.",
    "shortAnswer": "An AI software house is a software development company that builds AI-native products and uses AI tools throughout its own delivery process. It combines engineering with AI capability rather than treating AI as an add-on. TwoApps operates as an AI software house for UAE and GCC businesses and as a white-label delivery partner for agencies worldwide.",
    "benefits": [
      "Get custom software built by a team that designs with AI from the start, not as a bolt-on",
      "Move faster through AI-assisted delivery, with review and testing keeping quality intact",
      "Work with one partner across strategy, build, and ongoing support",
      "White-label delivery for agencies, so you keep the client relationship and we do the build",
      "Avoid hiring and managing a full in-house AI engineering team to get started"
    ],
    "deliverables": [
      "Custom software and AI features designed, built, and shipped to production",
      "Integrations with your existing systems, APIs, and data sources",
      "A delivery process that uses AI tooling with review and quality checkpoints",
      "Monitoring, documentation, and handover so the system is yours to run",
      "Ongoing support or an improvement backlog for the next phase"
    ],
    "process": [
      "Audit the problem and scope what to build, with honest feasibility up front",
      "Build a pilot or first release with a tight, measurable goal",
      "Stabilize with testing, monitoring, and documentation before scaling usage",
      "Scale features and capacity as the product proves itself in production"
    ],
    "faq": [
      {
        "question": "What is an AI software house?",
        "answer": "A software development company that builds AI-native products and uses AI tools across its own delivery. The difference from a traditional software house is that AI is part of how the product works and how the team builds it, rather than a feature added at the end."
      },
      {
        "question": "Do you only build AI products, or normal software too?",
        "answer": "Both. We build standard custom software, internal tools, and full products, and we add AI where it genuinely helps. We do not force AI into a project that does not need it. The goal is software that works, with AI applied where it adds value."
      },
      {
        "question": "Can you work as a white-label partner for our agency?",
        "answer": "Yes. White-label delivery is a core part of what we do. You keep the client relationship and we handle the build behind the scenes, giving your agency extra capacity and AI delivery capability without hiring. We work with partners across Europe, South America, Australia, and New Zealand."
      },
      {
        "question": "How do you keep quality high when using AI to build faster?",
        "answer": "AI speeds up delivery, but every project goes through review, testing, and quality checkpoints. We treat AI-generated work as a draft that must meet our normal engineering standards. Speed comes from the workflow, not from skipping the steps that protect quality."
      },
      {
        "question": "Where is TwoApps based and who do you serve?",
        "answer": "We are based in Dubai, UAE. We serve businesses directly across the UAE and GCC, and we act as a white-label software delivery partner for agencies and software houses globally."
      }
    ],
    "seo": {
      "title": "AI Software House & Development Company | TwoApps",
      "description": "TwoApps is a UAE-based AI software house building AI-native custom software for businesses and white-label delivery for agencies worldwide.",
      "keywords": [
        "ai software house",
        "ai software development company",
        "ai-native software house",
        "ai software house uae",
        "white-label ai development"
      ],
      "canonicalPath": "/solutions/ai-software-house",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-development",
    "title": "AI Development",
    "tagline": "Custom AI built into working software you can rely on.",
    "summary": "AI development is the work of building AI features and applications, from data and models to the software around them. We build custom AI into real products and workflows, with the integration, testing, and guardrails needed to run it in production.",
    "shortAnswer": "AI development is building AI capabilities into software, covering use-case design, data preparation, model selection or integration, the application around the model, and the testing and guardrails to run it safely. TwoApps delivers custom AI development for businesses and partners, starting with a pilot and scaling once it proves reliable in production.",
    "benefits": [
      "Get AI built into real, usable software, not a demo that never reaches production",
      "Custom development around your data, tools, and workflows rather than a generic product",
      "Integration with your existing systems so AI fits how your team already works",
      "Testing, monitoring, and guardrails so the AI behaves predictably in production",
      "Start small with a pilot and scale only once it proves its value"
    ],
    "deliverables": [
      "Custom AI features or applications built and integrated into your systems",
      "Data preparation, model selection or integration, and the application logic around it",
      "Guardrails, validation, and human checkpoints for the steps that carry risk",
      "Testing, monitoring, and logging so behaviour is visible and measurable",
      "Documentation, handover, and a backlog for the next phase of development"
    ],
    "process": [
      "Audit the use case, data, and systems to confirm AI development is the right fit",
      "Build a pilot with a tight scope and a clear, measurable goal",
      "Stabilize with testing, monitoring, and guardrails before widening usage",
      "Scale into more features or processes once the pilot runs reliably"
    ],
    "faq": [
      {
        "question": "What does AI development involve?",
        "answer": "It covers more than the model. AI development includes choosing the right use case, preparing data, selecting or integrating a model, building the application around it, and adding the testing and guardrails to run it safely. The model is only one part of a system that has to work end to end."
      },
      {
        "question": "Do you build custom AI or use off-the-shelf models?",
        "answer": "Usually we integrate strong existing models and build custom software, data, and guardrails around them. That is faster and more reliable for most business cases than training a model from scratch. We choose the approach that fits the problem and your budget."
      },
      {
        "question": "How do you make sure the AI behaves reliably?",
        "answer": "With testing, monitoring, validation, and human checkpoints at the steps that matter. We design for failure as well as success, so low-confidence or wrong outputs are caught and handled rather than passed downstream. Reliability comes from the system around the model, not the model alone."
      },
      {
        "question": "Can the AI you build connect to our existing tools?",
        "answer": "Yes. We build around your current systems first, integrating with your CRM, ERP, email, databases, and internal tools so the AI fits your existing workflows instead of forcing your team to change how they work."
      },
      {
        "question": "How do AI development projects usually start?",
        "answer": "With a pilot, not a full rollout. We scope one use case with a measurable goal, build it, prove it works in production with monitoring and guardrails, and then expand. This keeps risk and cost low while you confirm the value before committing further."
      }
    ],
    "seo": {
      "title": "AI Development Services | TwoApps",
      "description": "Custom AI development from TwoApps builds AI features and applications into real software, with integration, testing, and guardrails for production.",
      "keywords": [
        "ai development",
        "ai development services",
        "custom ai development",
        "ai application development",
        "ai development company uae"
      ],
      "canonicalPath": "/solutions/ai-development",
      "ogImage": "/og-default.png"
    }
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    "slug": "agentic-ai",
    "term": "Agentic AI",
    "shortAnswer": "Agentic AI is AI that can pursue a goal across multiple steps on its own — deciding what to do next, calling tools or APIs, and adapting based on results — rather than producing a single response to a single prompt. It plans, acts, observes, and repeats until the task is done.",
    "body": "Agentic AI describes systems built around large language models that take actions, not just generate text. Instead of answering one prompt, an agentic system breaks a goal into steps, chooses tools to use (search, databases, internal APIs), runs them, reads the results, and decides what to do next. This loop of plan, act, observe, and adjust is what makes it \"agentic\".\n\nThe trade-off is control. More autonomy means more places where the system can go wrong, so production agentic AI needs guardrails, logging, and clear stopping conditions. The useful version is rarely fully autonomous. It is an agent doing the repetitive parts with a person reviewing the decisions that carry real risk.\n\n## How TwoApps applies this\n\n- We scope agentic AI to specific workflows — support triage, ops handoffs, finance checks — not open-ended autonomy.\n- We add human checkpoints where mistakes are expensive, and monitoring so you can see what the agent did and why.",
    "seo": {
      "title": "What is Agentic AI? Definition | TwoApps",
      "description": "Agentic AI is AI that pursues a goal across multiple steps — planning, calling tools, and adapting — instead of just answering a prompt. Clear definition and how it works.",
      "keywords": [
        "agentic ai",
        "what is agentic ai",
        "ai agents",
        "autonomous ai",
        "agentic automation"
      ],
      "canonicalPath": "/glossary/agentic-ai",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-agent",
    "term": "AI Agent",
    "shortAnswer": "An AI agent is a software component, usually built on a large language model, that takes a goal and works toward it by reasoning, calling tools, and acting in a loop. Unlike a chatbot that just replies, an agent can fetch data, update systems, and decide its own next step.",
    "body": "An AI agent combines a model that can reason with a set of tools it is allowed to use — for example a search function, a database query, an email send, or an internal API call. Given a goal, the agent decides which tool to use, runs it, reads the output, and continues until it reaches a result or hits a stopping point.\n\nAgents differ from plain chatbots in one key way: they act. A chatbot answers a question. An agent can look something up, take an action in another system, check the outcome, and try again. That capability is powerful, which is also why agents need clear permissions, audit trails, and limits on what they can touch.\n\n## Why it matters\n\n- A single agent automates a defined task; multiple agents can be coordinated for larger workflows.\n- The reliability of an agent depends less on the model and more on tight tool definitions, good guardrails, and review on high-stakes steps.",
    "seo": {
      "title": "What is an AI Agent? Definition | TwoApps",
      "description": "An AI agent is software, built on a large language model, that pursues a goal by reasoning and calling tools in a loop — not just replying. Definition and how it differs from a chatbot.",
      "keywords": [
        "ai agent",
        "what is an ai agent",
        "ai agent vs chatbot",
        "llm agent",
        "agentic ai"
      ],
      "canonicalPath": "/glossary/ai-agent",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "agentic-workflows",
    "term": "Agentic Workflows",
    "shortAnswer": "Agentic workflows are business processes where one or more AI agents carry out multi-step work — reading inputs, making decisions, calling tools, and handing off to people — instead of a fixed, hard-coded sequence. They combine model reasoning with system actions to complete real tasks end to end.",
    "body": "An agentic workflow takes a real process — onboarding a customer, reconciling invoices, triaging support tickets — and lets AI agents do the repetitive steps while keeping people in control of the decisions that matter. Unlike a traditional script that follows the same path every time, an agentic workflow can adapt to the input in front of it.\n\nThe structure usually mixes deterministic steps (rules, validations, integrations) with agent steps (interpreting messy input, drafting a response, deciding a route). Human checkpoints are placed where errors are costly or where judgement is required, so the workflow stays accountable.\n\n## How TwoApps applies this\n\n- We follow Audit, Pilot, Stabilize, Scale — proving a workflow on a narrow slice before widening it.\n- We fit workflows to your existing tools rather than asking you to replace them, and we add monitoring so failures surface early.",
    "seo": {
      "title": "What are Agentic Workflows? Definition | TwoApps",
      "description": "Agentic workflows are processes where AI agents do multi-step work — reading inputs, deciding, calling tools, handing off to people. Definition and how they differ from rigid automation.",
      "keywords": [
        "agentic workflows",
        "what are agentic workflows",
        "ai workflows",
        "agentic process automation",
        "ai workflow automation"
      ],
      "canonicalPath": "/glossary/agentic-workflows",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "agentic-orchestration",
    "term": "Agentic Orchestration",
    "shortAnswer": "Agentic orchestration is the coordination of multiple AI agents and tools so they work together on a larger task — routing work between agents, managing shared context and state, sequencing steps, handling errors, and inserting human checkpoints. It is the control layer that makes multi-agent systems reliable in production.",
    "body": "When a process is too big for a single agent, you split it across several agents — one to classify, one to draft, one to validate — plus the tools and systems they each use. Agentic orchestration is the layer that decides which agent runs when, passes context between them, tracks state, retries failed steps, and knows when to stop or escalate to a person.\n\nWithout orchestration, multi-agent systems become unpredictable: agents loop, duplicate work, or lose track of what has been done. Good orchestration adds structure — clear handoffs, shared memory, timeouts, error handling, and logging — so the whole system behaves consistently and can be debugged.\n\n## Why it matters\n\n- Orchestration, not raw model quality, is usually what separates a demo from a system you can run every day.\n- It is where guardrails, monitoring, and human-in-the-loop checkpoints actually live.",
    "seo": {
      "title": "What is Agentic Orchestration? Definition | TwoApps",
      "description": "Agentic orchestration coordinates multiple AI agents and tools — routing work, managing state, handling errors, adding human checkpoints. The control layer behind reliable multi-agent systems.",
      "keywords": [
        "agentic orchestration",
        "multi-agent orchestration",
        "ai agent orchestration",
        "what is agentic orchestration",
        "agent coordination"
      ],
      "canonicalPath": "/glossary/agentic-orchestration",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-workflow-automation",
    "term": "AI Workflow Automation",
    "shortAnswer": "AI workflow automation uses AI — often large language models and agents — to carry out repetitive, multi-step business processes such as support, operations, finance, onboarding, and reporting. It handles messy, language-heavy work that rigid rule-based automation cannot, while keeping human checks on important decisions.",
    "body": "Traditional automation works well when steps are fixed and inputs are clean. It struggles with the messy, language-heavy work that fills most teams' days: reading an email, understanding a request, summarising a document, drafting a reply, routing a case. AI workflow automation adds a model that can interpret that input and act on it.\n\nThe goal is not to remove people. It is to stop your team from doing the work software should be doing, and to free them for the judgement calls that need a human. The strongest implementations combine AI steps with conventional logic and integrations, plus checkpoints where accuracy matters.\n\n## How TwoApps applies this\n\n- We build AI workflows for support, ops, finance, onboarding, and reporting that fit your current tools.\n- We add human checks where they matter, with guardrails and monitoring so the workflow stays trustworthy as it scales.",
    "seo": {
      "title": "What is AI Workflow Automation? Definition | TwoApps",
      "description": "AI workflow automation uses LLMs and agents to run repetitive, language-heavy processes — support, ops, finance, onboarding — that rigid rules cannot, with human checks where they matter.",
      "keywords": [
        "ai workflow automation",
        "what is ai workflow automation",
        "ai process automation",
        "intelligent automation",
        "business process automation ai"
      ],
      "canonicalPath": "/glossary/ai-workflow-automation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "human-in-the-loop",
    "term": "Human-in-the-Loop (HITL)",
    "shortAnswer": "Human-in-the-loop is a design approach where a person reviews, approves, or corrects an AI system's output at defined points before it takes effect. It keeps accountability and judgement with people on high-stakes steps, while the AI handles volume — improving reliability and giving teams control over outcomes.",
    "body": "Human-in-the-loop (HITL) means an AI system does not act unchecked on the decisions that carry real risk. Instead, the workflow pauses at chosen points so a person can review, approve, edit, or reject what the AI produced. The AI still handles the volume; people stay in control of the consequences.\n\nThe skill is choosing where the checkpoints go. Put a human in front of everything and you lose the time savings. Remove them entirely and you inherit the model's mistakes. Effective design places checks where errors are expensive — payments, compliance, customer commitments — and lets routine, low-risk steps run automatically.\n\n## How TwoApps applies this\n\n- Human checkpoints are a default in our workflows, not an afterthought.\n- We tune where checks sit as a workflow proves itself, so review effort drops without giving up control.",
    "seo": {
      "title": "What is Human-in-the-Loop (HITL)? Definition | TwoApps",
      "description": "Human-in-the-loop is a design where a person reviews or approves an AI system's output at set points before it takes effect — keeping judgement on high-stakes steps. Clear definition.",
      "keywords": [
        "human in the loop",
        "what is human in the loop",
        "hitl ai",
        "human oversight ai",
        "ai guardrails"
      ],
      "canonicalPath": "/glossary/human-in-the-loop",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "large-language-model",
    "term": "Large Language Model (LLM)",
    "shortAnswer": "A large language model is an AI model trained on very large amounts of text to predict and generate language. It can read, summarise, classify, translate, and draft text, and can power chatbots and AI agents. LLMs are flexible but can make confident mistakes, so outputs need verification.",
    "body": "A large language model (LLM) learns patterns in language by training on large text datasets, then uses those patterns to generate the next words in a response. Examples include the GPT, Claude, and Gemini families. Because language underpins so much business work, one LLM can handle many tasks — summarising, classifying, extracting data, drafting, and answering questions.\n\nLLMs are powerful but not infallible. They can produce fluent answers that are wrong, a behaviour often called hallucination, and they only know what was in their training data unless you give them more. That is why production systems pair LLMs with grounding techniques like retrieval-augmented generation, validation, and human review.\n\n## Why it matters\n\n- An LLM is the reasoning engine inside most AI agents and AI workflows.\n- Reliability comes from how you use the model — grounding, guardrails, and checks — not the model alone.",
    "seo": {
      "title": "What is a Large Language Model (LLM)? Definition | TwoApps",
      "description": "A large language model is an AI trained on large text data to generate and understand language — powering chatbots and agents. Definition, capabilities, and limits like hallucination.",
      "keywords": [
        "large language model",
        "what is an llm",
        "llm definition",
        "gpt claude gemini",
        "ai language model"
      ],
      "canonicalPath": "/glossary/large-language-model",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "retrieval-augmented-generation",
    "term": "Retrieval-Augmented Generation (RAG)",
    "shortAnswer": "Retrieval-augmented generation is a technique that grounds a large language model in your own data. Before answering, the system retrieves relevant documents from a knowledge base and gives them to the model as context, so responses reflect your specific, current information instead of only the model's training data.",
    "body": "Retrieval-augmented generation (RAG) connects a large language model to a searchable store of your content — policies, product docs, past tickets, contracts. When a question comes in, the system first retrieves the most relevant passages, then asks the model to answer using that retrieved material as context.\n\nRAG addresses two real limits of LLMs on their own: they do not know your private or recent information, and they can invent answers. By grounding responses in retrieved source text, RAG keeps answers tied to your data and makes them easier to cite and verify. Quality depends heavily on how the content is prepared, chunked, and searched.\n\n## How TwoApps applies this\n\n- We use RAG to ground assistants and agents in a client's own knowledge so answers stay accurate and on-policy.\n- We keep the source visible where it matters, so a person can check what an answer was based on.",
    "seo": {
      "title": "What is Retrieval-Augmented Generation (RAG)? Definition | TwoApps",
      "description": "RAG grounds an LLM in your own data — retrieving relevant documents and giving them to the model as context, so answers reflect your specific information, not just training data.",
      "keywords": [
        "retrieval augmented generation",
        "what is rag",
        "rag ai",
        "rag llm",
        "grounding llm with data"
      ],
      "canonicalPath": "/glossary/retrieval-augmented-generation",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "vibe-coding",
    "term": "Vibe Coding",
    "shortAnswer": "Vibe coding is building software by describing what you want in natural language and letting an AI tool generate the code, rather than writing it line by line. It speeds up prototyping and lets non-specialists create working software, but production use still needs review, testing, and engineering rigour.",
    "body": "Vibe coding is a way of working where you steer an AI coding tool with plain-language prompts — \"add a login page\", \"make this form save to the database\" — and the AI writes and edits the code. The term captures a shift in how software gets made: you describe intent and review results, instead of hand-writing every line.\n\nIt is excellent for prototypes, internal tools, and exploring ideas quickly. The risk is treating generated code as finished. AI can produce code that looks right but hides bugs, security gaps, or scaling problems. For anything that real users or money depend on, vibe-coded output still needs the usual discipline: review, tests, security checks, and someone who understands what was built.\n\n## How TwoApps applies this\n\n- We use AI-assisted development to move fast on pilots and internal tools.\n- We apply real engineering review before anything reaches production, so speed does not cost you reliability.",
    "seo": {
      "title": "What is Vibe Coding? Definition | TwoApps",
      "description": "Vibe coding is building software by describing what you want in plain language and letting an AI tool generate the code. Definition, where it works well, and the production risks.",
      "keywords": [
        "vibe coding",
        "what is vibe coding",
        "ai coding",
        "ai assisted development",
        "ai code generation"
      ],
      "canonicalPath": "/glossary/vibe-coding",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "ai-software-house",
    "term": "AI Software House",
    "shortAnswer": "An AI software house is a software delivery company that designs, builds, and runs AI-powered systems — agents, workflow automation, and custom tools — as well as conventional software. It combines product and engineering skills with applied AI, taking projects from scoping through to a maintained system in production.",
    "body": "A software house is a company that delivers software for clients end to end — discovery, design, build, and support. An AI software house adds applied AI to that capability: large language models, agents, RAG, and workflow automation, built and run with the same engineering discipline as any other production system.\n\nThe distinction matters because AI features fail differently from ordinary software. They need grounding, guardrails, evaluation, monitoring, and clear human checkpoints. An AI software house knows how to combine these with normal engineering — integrations, testing, security, deployment — so an AI idea becomes something a business can actually rely on.\n\n## How TwoApps applies this\n\n- We deliver both AI workflows and the surrounding software needed to run them, fitting your existing tools.\n- We work direct with UAE and GCC businesses and as a white-label partner for agencies and software houses worldwide.",
    "seo": {
      "title": "What is an AI Software House? Definition | TwoApps",
      "description": "An AI software house designs, builds, and runs AI-powered systems — agents, automation, custom tools — with full engineering discipline. Definition and how it differs from a normal software house.",
      "keywords": [
        "ai software house",
        "what is an ai software house",
        "ai development company",
        "ai software delivery",
        "ai engineering partner"
      ],
      "canonicalPath": "/glossary/ai-software-house",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "white-label-ai-delivery",
    "term": "White-Label AI Delivery",
    "shortAnswer": "White-label AI delivery is when a specialist partner builds AI solutions — agents, automation, custom tools — that another company sells and delivers under its own brand. The agency keeps the client relationship; the partner provides the AI engineering capacity behind the scenes, letting firms offer AI services without building an in-house team.",
    "body": "White-label AI delivery lets an agency or software house offer AI solutions to its clients without hiring and managing a specialist AI team. A delivery partner does the engineering — scoping, building, and often running AI agents, workflows, and tools — while the work ships under the agency's brand. The end client sees the agency; the agency keeps ownership of the relationship.\n\nThis model suits firms that have demand for AI work but not the in-house depth to deliver it reliably. It depends on trust: clear scope, predictable quality, confidentiality, and a partner who stays behind the scenes. Done well, it lets an agency expand its offering quickly while keeping margins and client control.\n\n## How TwoApps applies this\n\n- We act as a behind-the-scenes AI delivery partner for agencies and software houses across Eastern Europe, South America, Australia, New Zealand, and Europe.\n- We follow your branding and process, and keep our role invisible to your clients.",
    "seo": {
      "title": "What is White-Label AI Delivery? Definition | TwoApps",
      "description": "White-label AI delivery is when a specialist partner builds AI solutions another company sells under its own brand. Definition, how the model works, and who it suits.",
      "keywords": [
        "white label ai delivery",
        "white label ai development",
        "what is white label ai",
        "ai delivery partner",
        "white label ai agency"
      ],
      "canonicalPath": "/glossary/white-label-ai-delivery",
      "ogImage": "/og-default.png"
    }
  },
  {
    "slug": "answer-engine-optimization",
    "term": "Answer Engine Optimization (AEO)",
    "shortAnswer": "Answer engine optimization is the practice of structuring content so AI answer engines — like ChatGPT, Perplexity, and Google's AI overviews — can find, understand, and cite it. It focuses on clear, accurate, self-contained answers and structured data, so your information is surfaced when AI responds to a question.",
    "body": "Answer engine optimization (AEO) adapts content for a world where many people get answers from AI systems instead of clicking through a list of links. Where classic SEO competes for ranking positions, AEO aims to be the source an answer engine quotes — which means writing content an AI can extract cleanly and trust.\n\nIn practice that means leading with a direct, self-contained answer to a real question, being factually precise, structuring pages clearly, and adding machine-readable signals like schema markup. Accuracy matters more than ever, because AI engines surface and repeat what they find — including mistakes.\n\n## How TwoApps applies this\n\n- We write definitions and answers that stand on their own, so AI engines can cite them correctly.\n- We pair clear answer-first content with structured data and clean page structure across the site.",
    "seo": {
      "title": "What is Answer Engine Optimization (AEO)? Definition | TwoApps",
      "description": "Answer engine optimization structures content so AI answer engines like ChatGPT and Perplexity can find, understand, and cite it. Definition and how it differs from classic SEO.",
      "keywords": [
        "answer engine optimization",
        "what is aeo",
        "aeo vs seo",
        "generative engine optimization",
        "ai search optimization"
      ],
      "canonicalPath": "/glossary/answer-engine-optimization",
      "ogImage": "/og-default.png"
    }
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug) ?? null;
}

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug) ?? null;
}

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug) ?? null;
}

export function getPackageById(id: string) {
  return packages.find((pkg) => pkg.id === id) ?? null;
}

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug) ?? null;
}

export function getRegionBySlug(slug: string) {
  return regions.find((region) => region.slug === slug) ?? null;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
