const labels = [
  "Lead routing",
  "Weekly reports",
  "Onboarding checks",
  "Ticket triage",
  "Invoice chasing",
  "CRM hygiene",
  "Data entry",
  "Follow-up reminders"
];

function MarqueeItems() {
  return (
    <>
      {labels.map((label) => (
        <span key={label} className="contents">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
            {label}
          </span>
          <span className="text-[10px] text-blue">✦</span>
        </span>
      ))}
    </>
  );
}

export function HomeMarquee() {
  return (
    <section
      data-bot-stop="1"
      data-bot-say="These are the repeat jobs I was built to eliminate — nicely."
      data-bot-icons="inbox,spark,check"
      data-bot-fx="0.85"
      className="overflow-hidden border-y border-ink/12 bg-cream-dark py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-12">
        <div className="flex items-center gap-12 pr-12">
          <MarqueeItems />
        </div>
        <div className="flex items-center gap-12 pr-12">
          <MarqueeItems />
        </div>
      </div>
    </section>
  );
}
