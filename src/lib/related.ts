import {
  blogPosts,
  glossaryTerms,
  industries,
  regions,
  services,
  solutions,
} from "@/content";
import type { RelatedLink, RelatedLinkGroup } from "@/content/types";

type RegistryEntry = {
  title: string;
  href: string;
  group: RelatedLinkGroup;
  cluster: string;
};

/**
 * Topic clusters. Maps each content slug to a pillar topic so detail pages
 * cross-link within their cluster (services ↔ solutions ↔ glossary ↔ blog ↔
 * industries ↔ regions). Anything unmapped falls back to its content group,
 * so no page is ever an orphan.
 */
const CLUSTER_BY_SLUG: Record<string, string> = {
  // Agentic AI / automation core
  "agentic-ai-automation": "agentic",
  "agentic-orchestration": "agentic",
  "agentic-ai": "agentic",
  "agentic-workflows": "agentic",
  "ai-agent": "agentic",
  "ai-workflow-automation": "agentic",
  "human-in-the-loop": "agentic",
  "large-language-model": "agentic",
  "retrieval-augmented-generation": "agentic",
  "what-agentic-ai-actually-means-for-operations-teams": "agentic",
  "from-chatgpt-prompts-to-production-why-most-ai-pilots-stall": "agentic",
  // Engineering / building with AI
  "claude-code-automation": "engineering",
  "vibe-coding": "engineering",
  "ai-development": "engineering",
  "how-we-use-claude-code-to-ship-faster-at-twoapps": "engineering",
  // Agency / white-label
  "white-label-ai-delivery": "agency",
  "ai-software-house": "agency",
  "ai-consultancy": "agency",
  "white-label-ai-partner-software-houses": "agency",
  "white-label-ai-delivery-term": "agency",
  // Compliance / regulated
  "fintech-aml-kyc-automation": "compliance",
  "the-real-roi-of-ai-automation-in-regulated-industries": "compliance",
  "dubai-uae-gcc-ai-automation": "compliance",
  // Industries
  "real-estate-operations-automation": "industries",
  "logistics-supply-chain-automation": "industries",
  "recruitment-staffing-automation": "industries",
  "ecommerce-operations-automation": "industries",
  "customer-support-automation": "industries",
  // Discovery / measurement
  "answer-engine-optimization": "discovery",
};

function clusterFor(slug: string, group: RelatedLinkGroup): string {
  return CLUSTER_BY_SLUG[slug] ?? group;
}

function buildRegistry(): RegistryEntry[] {
  const entries: RegistryEntry[] = [];

  for (const s of services) {
    entries.push({
      title: s.title,
      href: s.seo.canonicalPath,
      group: "service",
      cluster: clusterFor(s.slug, "service"),
    });
  }
  for (const s of solutions) {
    entries.push({
      title: s.title,
      href: s.seo.canonicalPath,
      group: "solution",
      cluster: clusterFor(s.slug, "solution"),
    });
  }
  for (const i of industries) {
    entries.push({
      title: i.title,
      href: i.seo.canonicalPath,
      group: "industry",
      cluster: clusterFor(i.slug, "industry"),
    });
  }
  for (const r of regions) {
    entries.push({
      title: r.title,
      href: r.seo.canonicalPath,
      group: "region",
      cluster: clusterFor(r.slug, "region"),
    });
  }
  for (const g of glossaryTerms) {
    entries.push({
      title: g.term,
      href: g.seo.canonicalPath,
      group: "glossary",
      cluster: clusterFor(g.slug, "glossary"),
    });
  }
  for (const b of blogPosts) {
    entries.push({
      title: b.title,
      href: b.seo.canonicalPath,
      group: "blog",
      cluster: clusterFor(b.slug, "blog"),
    });
  }

  return entries;
}

const HUB_LINKS: RelatedLink[] = [
  { label: "AI Solutions", href: "/solutions", group: "solution" },
  { label: "AI Services", href: "/services", group: "service" },
  { label: "AI Glossary", href: "/glossary", group: "glossary" },
  { label: "Industries", href: "/industries", group: "industry" },
];

/**
 * Derive contextual related links for a page by topic cluster, then content
 * group, topping up with hub links so every detail page has a healthy set of
 * internal links (and no orphans).
 */
export function relatedFor(currentHref: string, limit = 6): RelatedLink[] {
  const registry = buildRegistry();
  const current = registry.find((e) => e.href === currentHref);
  const currentCluster = current?.cluster;

  const scored = registry
    .filter((e) => e.href !== currentHref)
    .map((e) => {
      let score = 0;
      if (currentCluster && e.cluster === currentCluster) score += 3;
      if (current && e.group !== current.group) score += 1; // prefer cross-type links
      return { entry: e, score };
    })
    .sort((a, b) => b.score - a.score);

  const picked: RelatedLink[] = [];
  const seen = new Set<string>([currentHref]);

  for (const { entry, score } of scored) {
    if (picked.length >= limit) break;
    if (score <= 0) continue;
    if (seen.has(entry.href)) continue;
    seen.add(entry.href);
    picked.push({ label: entry.title, href: entry.href, group: entry.group });
  }

  for (const hub of HUB_LINKS) {
    if (picked.length >= limit) break;
    if (seen.has(hub.href)) continue;
    seen.add(hub.href);
    picked.push(hub);
  }

  return picked;
}
