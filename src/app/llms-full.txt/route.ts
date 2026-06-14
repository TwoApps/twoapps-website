import {
  blogPosts,
  caseStudies,
  glossaryTerms,
  industries,
  regions,
  services,
  solutions
} from "@/content";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const siteUrl = getSiteUrl();
  const lines: string[] = [];

  lines.push(`# ${BRAND_NAME} — Full Content`);
  lines.push("");
  lines.push(
    `> Full content dump of the ${BRAND_NAME} website, intended for AI citation grounding.`
  );
  lines.push("> Last generated dynamically from the typed content system.");
  lines.push("");
  lines.push(`Primary URL: ${siteUrl}`);
  lines.push("Founder: Zain Hassan");
  lines.push("Location: Dubai, UAE");
  lines.push("Areas served: UAE, GCC, Middle East, Eastern Europe, South America, Australia, New Zealand");
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const service of services) {
    lines.push(`### ${service.title}`);
    lines.push(`URL: ${siteUrl}${service.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Tagline: ${service.tagline}`);
    lines.push("");
    lines.push(`Summary: ${service.summary}`);
    lines.push("");
    lines.push("Benefits:");
    for (const benefit of service.benefits) lines.push(`- ${benefit}`);
    lines.push("");
    lines.push("Deliverables:");
    for (const deliverable of service.deliverables) lines.push(`- ${deliverable}`);
    lines.push("");
    lines.push("Process:");
    service.process.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    lines.push("");
    lines.push("FAQ:");
    for (const faq of service.faq) {
      lines.push(`Q: ${faq.question}`);
      lines.push(`A: ${faq.answer}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Solutions");
  lines.push("");
  for (const solution of solutions) {
    lines.push(`### ${solution.title}`);
    lines.push(`URL: ${siteUrl}${solution.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Definition: ${solution.shortAnswer}`);
    lines.push("");
    lines.push(`Summary: ${solution.summary}`);
    lines.push("");
    lines.push("Benefits:");
    for (const benefit of solution.benefits) lines.push(`- ${benefit}`);
    lines.push("");
    lines.push("FAQ:");
    for (const faq of solution.faq) {
      lines.push(`Q: ${faq.question}`);
      lines.push(`A: ${faq.answer}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Glossary");
  lines.push("");
  for (const term of glossaryTerms) {
    lines.push(`### ${term.term}`);
    lines.push(`URL: ${siteUrl}${term.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Definition: ${term.shortAnswer}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## Industries");
  lines.push("");
  for (const industry of industries) {
    lines.push(`### ${industry.title}`);
    lines.push(`URL: ${siteUrl}${industry.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Summary: ${industry.summary}`);
    lines.push("");
    lines.push("Pain points:");
    for (const pain of industry.painPoints) lines.push(`- ${pain}`);
    lines.push("");
    lines.push("Solutions:");
    for (const solution of industry.solutions) lines.push(`- ${solution}`);
    lines.push("");
    lines.push("Example automations:");
    for (const example of industry.exampleAutomations) lines.push(`- ${example}`);
    lines.push("");
    lines.push("FAQ:");
    for (const faq of industry.faq) {
      lines.push(`Q: ${faq.question}`);
      lines.push(`A: ${faq.answer}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Regions");
  lines.push("");
  for (const region of regions) {
    lines.push(`### ${region.title}`);
    lines.push(`URL: ${siteUrl}${region.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Summary: ${region.summary}`);
    lines.push("");
    lines.push("Market focus:");
    for (const focus of region.marketFocus) lines.push(`- ${focus}`);
    lines.push("");
    lines.push(`Why ${BRAND_NAME}:`);
    for (const why of region.whyTwoApps) lines.push(`- ${why}`);
    lines.push("");
    lines.push("Engagement model:");
    for (const step of region.engagementModel) lines.push(`- ${step}`);
    lines.push("");
    lines.push("FAQ:");
    for (const faq of region.faq) {
      lines.push(`Q: ${faq.question}`);
      lines.push(`A: ${faq.answer}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Representative Case Patterns");
  lines.push("");
  for (const study of caseStudies) {
    lines.push(`### ${study.title}`);
    lines.push(`Context: ${study.context}`);
    lines.push("");
    lines.push(`Problem: ${study.problem}`);
    lines.push("");
    lines.push(`Approach: ${study.approach}`);
    lines.push("");
    lines.push("Outcomes:");
    for (const outcome of study.outcomes) lines.push(`- ${outcome}`);
    lines.push("");
    lines.push(`Tech: ${study.tech.join(", ")}`);
    lines.push("");
    lines.push(`Note: ${study.disclaimer}`);
    lines.push("---");
    lines.push("");
  }

  lines.push("## Blog");
  lines.push("");
  for (const post of blogPosts) {
    lines.push(`### ${post.title}`);
    lines.push(`URL: ${siteUrl}${post.seo.canonicalPath}`);
    lines.push("");
    lines.push(`Summary: ${post.summary}`);
    lines.push("");
    lines.push(`Published: ${post.datePublished}`);
    lines.push("");
    lines.push("Tags:");
    for (const tag of post.tags) lines.push(`- ${tag}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## Contact");
  lines.push("");
  lines.push(`Contact form: ${siteUrl}/contact`);
  lines.push(`Book a call: ${siteUrl}/book`);
  lines.push(`About / founder: ${siteUrl}/about`);
  lines.push(`Founder CV: https://zainhthegreat.github.io/my_cv_zain/`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
    }
  });
}
