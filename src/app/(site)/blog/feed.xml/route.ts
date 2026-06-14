import { blogPosts } from "@/content";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const feedUrl = `${siteUrl}/blog/feed.xml`;

  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const lastBuild = sorted.length
    ? new Date(sorted[0].dateModified ?? sorted[0].datePublished).toUTCString()
    : new Date(0).toUTCString();

  const items = sorted
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escapeXml(post.summary)}</description>`,
        `      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>`,
        `      <dc:creator>${escapeXml(post.authorName)}</dc:creator>`,
        ...post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(BRAND_NAME)} Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Practical AI automation, agentic AI, and delivery insights from ${escapeXml(
      BRAND_NAME
    )}.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
