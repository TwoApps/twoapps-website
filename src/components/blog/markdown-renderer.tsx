import type { ReactNode } from "react";

import { parseMarkdown, type MarkdownBlock } from "@/lib/markdown";
import { cn } from "@/lib/utils";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

const INLINE_RE = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*)/g;

function safeHref(href: string): string | null {
  const trimmed = href.trim();
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("mailto:")
  ) {
    return trimmed;
  }
  return null;
}

/** Parse a single line of inline Markdown into React nodes (bold, italic, code, links). */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  INLINE_RE.lastIndex = 0;

  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, , bold, code, linkText, linkHref, italic] = match;
    if (bold !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${key++}`} className="font-semibold text-ink">
          {bold}
        </strong>
      );
    } else if (code !== undefined) {
      nodes.push(
        <code
          key={`${keyPrefix}-c-${key++}`}
          className="rounded bg-cream px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
        >
          {code}
        </code>
      );
    } else if (linkText !== undefined && linkHref !== undefined) {
      const href = safeHref(linkHref);
      if (href) {
        const external = href.startsWith("http");
        nodes.push(
          <a
            key={`${keyPrefix}-a-${key++}`}
            href={href}
            className="font-medium text-blue underline decoration-blue/30 underline-offset-2 transition-colors hover:decoration-blue"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {linkText}
          </a>
        );
      } else {
        nodes.push(linkText);
      }
    } else if (italic !== undefined) {
      nodes.push(
        <em key={`${keyPrefix}-i-${key++}`} className="italic">
          {italic}
        </em>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function renderBlock(block: MarkdownBlock, index: number): ReactNode {
  const key = `md-${index}`;
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          key={key}
          id={block.id}
          className="mt-12 scroll-mt-24 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl"
        >
          {renderInline(block.text, key)}
        </h2>
      ) : (
        <h3
          key={key}
          id={block.id}
          className="mt-9 scroll-mt-24 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl"
        >
          {renderInline(block.text, key)}
        </h3>
      );
    case "paragraph":
      return (
        <p key={key} className="text-base leading-relaxed text-ink/80 sm:text-lg">
          {renderInline(block.text, key)}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol key={key} className="ml-5 list-decimal space-y-2 text-base leading-relaxed text-ink/80 sm:text-lg">
          {block.items.map((item, i) => (
            <li key={`${key}-${i}`} className="pl-1">
              {renderInline(item, `${key}-${i}`)}
            </li>
          ))}
        </ol>
      ) : (
        <ul key={key} className="ml-5 list-disc space-y-2 text-base leading-relaxed text-ink/80 sm:text-lg">
          {block.items.map((item, i) => (
            <li key={`${key}-${i}`} className="pl-1">
              {renderInline(item, `${key}-${i}`)}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={key} className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-ink/20">
                {block.headers.map((header, i) => (
                  <th key={`${key}-h-${i}`} className="py-2.5 pr-4 font-display font-semibold text-ink">
                    {renderInline(header, `${key}-h-${i}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={`${key}-r-${r}`} className="border-b border-ink/10">
                  {row.map((cell, c) => (
                    <td key={`${key}-r-${r}-c-${c}`} className="py-2.5 pr-4 align-top text-ink/80">
                      {renderInline(cell, `${key}-r-${r}-c-${c}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={key}
          className="border-l-2 border-blue/55 bg-cream/40 py-3 pl-5 pr-4 text-base italic leading-relaxed text-ink/75 sm:text-lg"
        >
          {renderInline(block.text, key)}
        </blockquote>
      );
    default:
      return null;
  }
}

/** Renders a constrained Markdown subset as React (headings, lists, tables, quotes, inline emphasis/links). */
export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const blocks = parseMarkdown(content);
  return <div className={cn("space-y-5", className)}>{blocks.map(renderBlock)}</div>;
}
