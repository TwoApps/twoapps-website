import Link from "next/link";

import { cn } from "@/lib/utils";

type DefinitionBlockProps = {
  term: string;
  definition: string;
  /** Optional link to the canonical glossary entry for this term. */
  href?: string;
  className?: string;
};

/**
 * A labelled term + definition. Pairs with DefinedTerm JSON-LD emitted by the
 * glossary pages; here it provides the human-readable, AI-extractable definition
 * inline within longer content.
 */
export function DefinitionBlock({ term, definition, href, className }: DefinitionBlockProps) {
  return (
    <dl
      className={cn(
        "rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6",
        className
      )}
    >
      <dt className="font-display text-lg font-semibold text-ink">
        {href ? (
          <Link href={href} className="text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue">
            {term}
          </Link>
        ) : (
          term
        )}
      </dt>
      <dd className="mt-2 text-base leading-relaxed text-ink/80">{definition}</dd>
    </dl>
  );
}
