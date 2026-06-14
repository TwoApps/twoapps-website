import { blogPosts } from "@/content";
import {
  buildMetadata,
  collectionPageSchema,
  makeBreadcrumbSchema,
  organizationSchema,
} from "@/lib/seo";

import { BlogGrid } from "@/components/blog/blog-grid";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";

export const metadata = buildMetadata({
  title: "Blog | TwoApps",
  description:
    "Read practical insights from TwoApps on AI automation, agentic workflows, Claude Code delivery, and building production-ready AI systems for businesses and agencies.",
  canonicalPath: "/blog",
  keywords: [
    "ai automation blog",
    "agentic ai insights",
    "claude code delivery",
    "ai workflow implementation",
    "ai strategy uae",
  ],
  ogImage: "/og-default.png",
});

const jsonLdData = [
  organizationSchema(),
  makeBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
  collectionPageSchema({
    name: "TwoApps Blog",
    description:
      "Practical insights on AI automation, agentic workflows, Claude Code delivery, and production-ready AI systems for businesses and agencies.",
    path: "/blog",
    items: blogPosts.map((post) => ({
      name: post.title,
      path: `/blog/${post.slug}`,
      description: post.summary,
    })),
  }),
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-say="This is the TwoApps blog. It covers practical AI automation, agentic workflows, and Claude Code delivery." data-bot-short="The TwoApps blog"
        data-bot-fx="0.12"
      >
        <PageHero
          eyebrow="Blog"
          title="Insights on AI, automation, and delivery"
          description="Practical notes on building production-ready AI workflows, running Claude / Claude Code at scale, and making automation actually stick inside real teams."
          chips={["AI strategy", "Agentic AI", "Claude Code", "Compliance"]}
          mobileChips={[
            "AI strategy and execution",
            "Agentic AI workflows",
            "Claude Code delivery",
            "Compliance-aware automation",
          ]}
        />
      </div>

      <div
        data-bot-stop
        data-bot-say="Browse the latest articles. The featured post is a good place to start." data-bot-short="Browse the latest articles"
        data-bot-fx="0.5"
      >
        <BlogGrid posts={blogPosts} />
      </div>

      <div
        data-bot-stop
        data-bot-say="Want to talk about what you read? Book a call or explore our services." data-bot-short="Book a call"
        data-bot-fx="0.35"
      >
        <CtaBand
          title="Want to apply these ideas to your workflow?"
          copy="Tell us what you are trying to automate. We will map a bounded pilot and show you the fastest path to a working AI system."
          primaryLabel="Book a call"
          primaryHref="/book"
          secondaryLabel="See services"
          secondaryHref="/services"
        />
      </div>
    </>
  );
}
