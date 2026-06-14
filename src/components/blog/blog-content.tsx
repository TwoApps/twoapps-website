import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { Container } from "@/components/ui/container";

export type BlogContentProps = {
  content: string;
};

export function BlogContent({ content }: BlogContentProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <Container className="max-w-3xl">
        <MarkdownRenderer content={content} />
      </Container>
    </section>
  );
}

export default BlogContent;
