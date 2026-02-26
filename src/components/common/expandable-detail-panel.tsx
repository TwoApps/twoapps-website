"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type ExpandableDetailPanelProps = {
  title: string;
  summary?: string;
  defaultOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ExpandableDetailPanel({
  title,
  summary,
  defaultOpen = false,
  className,
  children
}: ExpandableDetailPanelProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,.03)]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5"
        aria-expanded={open}
      >
        <div>
          <p className="font-display text-xl font-semibold leading-tight text-ink">{title}</p>
          {summary ? <p className="mt-1 text-sm text-ink/65">{summary}</p> : null}
        </div>
        <span
          aria-hidden
          className={cn(
            "mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink/70 transition-transform",
            open && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-95"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-4 py-4 sm:px-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
