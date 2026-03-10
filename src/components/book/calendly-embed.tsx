"use client";

type CalendlyEmbedProps = {
  embedUrl: string;
  className?: string;
};

/** Inline Calendly scheduler iframe. Use when NEXT_PUBLIC_BOOKING_URL is a Calendly link. */
export function CalendlyEmbed({ embedUrl, className = "" }: CalendlyEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${className}`}>
      <iframe
        title="Schedule a discovery call"
        src={embedUrl}
        width="100%"
        height="700"
        className="min-h-[630px] w-full border-0"
      />
    </div>
  );
}
