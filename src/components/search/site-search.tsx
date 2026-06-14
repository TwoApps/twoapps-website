"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: string;
};

type SiteSearchProps = {
  index: SearchItem[];
};

export function SiteSearch({ index }: SiteSearchProps) {
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index;
    return index.filter((item) =>
      `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(q)
    );
  }, [query, index]);

  return (
    <div>
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search services, solutions, glossary, articles…"
        className="focus-ring w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-base text-ink shadow-[0_1px_2px_rgba(22,21,15,0.04)] placeholder:text-ink/40"
      />

      <p className="mt-4 text-sm text-ink/55">
        {results.length} {results.length === 1 ? "result" : "results"}
        {query.trim() ? ` for “${query.trim()}”` : ""}
      </p>

      <ul className="mt-4 divide-y divide-ink/10">
        {results.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="focus-ring group block py-4 transition-colors hover:bg-cream/40"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-lg font-semibold text-ink group-hover:text-blue">
                  {item.title}
                </span>
                <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/40">
                  {item.type}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      {results.length === 0 ? (
        <p className="mt-8 text-ink/60">
          No matches. Try a broader term, or{" "}
          <Link href="/contact" className="text-blue underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
