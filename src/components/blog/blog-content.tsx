import { Container } from "@/components/ui/container";

export type BlogContentProps = {
  content: string;
};

export function BlogContent({ content }: BlogContentProps) {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <Container className="max-w-3xl">
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-ink/80 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default BlogContent;
