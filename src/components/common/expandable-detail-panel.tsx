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
        "group relative overflow-hidden rounded-[22px] border border-ink/10 bg-white shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:border-ink/15 hover:shadow-[0_18px_44px_rgba(22,21,15,0.06)]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">{title}</p>
          {summary ? <p className="mt-1 text-sm text-ink/60">{summary}</p> : null}
        </div>
        <span
          aria-hidden
          className={cn(
            "self-start mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.04] text-ink/70 transition-transform",
            open && "rotate-45"
          )}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M8 2v12M2 8h12" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-ink/10 px-4 py-4 sm:px-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
