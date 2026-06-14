import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ComparisonRow = {
  label: string;
  values: ReactNode[];
};

type ComparisonTableProps = {
  columns: string[];
  rows: ComparisonRow[];
  caption?: string;
  className?: string;
};

/**
 * Semantic comparison table. AI systems extract well-structured tables far more
 * reliably than prose, making them a high-leverage AEO format for "X vs Y" and
 * "options for Z" queries.
 */
export function ComparisonTable({ columns, rows, caption, className }: ComparisonTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full border-collapse text-left text-sm sm:text-base">
        {caption ? (
          <caption className="mb-3 text-left font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-ink/20">
            {columns.map((col, i) => (
              <th
                key={i}
                scope="col"
                className={cn(
                  "py-3 pr-4 font-display font-semibold text-ink",
                  i === 0 && "min-w-[8rem]"
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-ink/10 align-top">
              <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">
                {row.label}
              </th>
              {row.values.map((value, c) => (
                <td key={c} className="py-3 pr-4 text-ink/80">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
