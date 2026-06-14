"use client";

import { cn } from "@/lib/utils";

type CalendlyEmbedProps = {
  embedUrl: string;
  className?: string;
};

/** Inline Calendly scheduler iframe. Use when NEXT_PUBLIC_BOOKING_URL is a Calendly link. */
export function CalendlyEmbed({ embedUrl, className }: CalendlyEmbedProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:rounded-2xl",
        className
      )}
    >
      <iframe
        title="Schedule a discovery call"
        src={embedUrl}
        width="100%"
        height="700"
        className="block min-h-[560px] w-full border-0 sm:min-h-[630px] md:min-h-[680px] lg:min-h-[700px]"
      />
    </div>
  );
}
