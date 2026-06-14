import Link from "next/link";

import { cn } from "@/lib/utils";

export type RelatedLinkItem = {
  label: string;
  href: string;
  group?: string;
};

type RelatedLinksProps = {
  items: RelatedLinkItem[];
  title?: string;
  className?: string;
};

/**
 * Contextual internal links rendered before the CTA on detail pages. Builds the
 * hub-and-spoke topic clusters that distribute authority and keep AI crawlers
 * traversing related entities (services ↔ solutions ↔ industries ↔ glossary ↔ blog).
 */
export function RelatedLinks({ items, title = "Related", className }: RelatedLinksProps) {
  if (!items.length) return null;
  return (
    <nav aria-label={title} className={cn("border-t border-ink/10 pt-8", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">{title}</p>
      <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <li key={`${item.group ?? ""}-${item.href}-${item.label}`}>
              <Link
                href={item.href}
                className="group inline-flex items-baseline gap-2 text-base text-ink/80 transition-colors hover:text-blue"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="underline decoration-ink/20 underline-offset-2 group-hover:decoration-blue">
                  {item.label}
                </span>
                {item.group ? (
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/40">
                    {item.group}
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
