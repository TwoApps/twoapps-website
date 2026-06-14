import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const metadata = (
    <>
      <span className="text-ink/60">{formatDate(post.datePublished)}</span>
      <span className="text-ink/30">·</span>
      <span className="text-ink/60">{post.estimatedReadTime}</span>
    </>
  );

  if (featured) {
    return (
      <article>
        <Card className="group p-0">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              {post.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              ) : null}
              <h3 className="mt-4 font-display text-2xl font-medium leading-[1.05] text-ink sm:text-3xl lg:text-4xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/65 sm:text-lg">
                {post.summary}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-display text-sm font-medium text-ink/80">
                  {post.authorName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{post.authorName}</p>
                  <p className="text-xs text-ink/60">{post.authorRole}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-ink/60">
                {metadata}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition-transform group-hover:translate-x-1">
                Read article
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {post.coverImage ? (
              <div className="relative aspect-[16/10] border-t border-ink/10 bg-cream/50 lg:aspect-auto lg:border-t-0 lg:border-l">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="relative hidden min-h-[280px] border-t border-ink/10 bg-cream/50 lg:block lg:border-t-0 lg:border-l" />
            )}
          </div>
        </Card>
      </article>
    );
  }

  return (
    <article>
      <Card className={cn("group flex h-full flex-col", post.coverImage && "p-0")}>
        {post.coverImage ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink/10 bg-cream/50">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : null}
        <div className={cn("flex flex-1 flex-col", post.coverImage ? "p-5 sm:p-6" : "")}>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          ) : null}
          <h3 className="mt-4 font-display text-lg font-medium leading-tight text-ink sm:text-xl">
            <Link
              href={`/blog/${post.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
            {post.summary}
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-medium text-ink/60">
            {metadata}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream font-display text-xs font-medium text-ink/80">
              {post.authorName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <p className="text-sm font-medium text-ink">{post.authorName}</p>
              <p className="text-xs text-ink/60">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}

export default BlogCard;
