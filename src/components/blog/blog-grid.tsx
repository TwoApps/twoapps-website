import type { BlogPost } from "@/content/types";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { BlogCard } from "./blog-card";

export type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <Section>
        <Container>
          <p className="text-center text-ink/60">No articles yet.</p>
        </Container>
      </Section>
    );
  }

  const featuredIndex = posts.findIndex((post) => post.featured);
  const featured = featuredIndex >= 0 ? posts[featuredIndex] : null;
  const remaining = featured
    ? posts.filter((_, index) => index !== featuredIndex)
    : posts;

  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Blog"
          title="Latest articles"
          subtitle="Insights, playbooks, and behind-the-scenes notes on building automation-first products."
          className="mb-10 md:mb-14"
        />

        <div className="space-y-8 md:space-y-10">
          {featured ? <BlogCard post={featured} featured /> : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BlogGrid;
