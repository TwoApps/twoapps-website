import { Container } from "@/components/ui/container";

export function HomeCta({ bookingHref }: { bookingHref: string }) {
  return (
    <section id="contact" className="bg-cream py-10 sm:py-12 lg:py-14">
      <Container>
        <div
          data-reveal="0"
          data-bot-stop="1"
          data-bot-say="Book a call — I'll route it to the right human before you finish your coffee." data-bot-short="Book a call"
          data-bot-fx="0.5"
          className="relative overflow-hidden rounded-[28px] bg-blue px-6 py-[clamp(72px,9vw,130px)] text-center sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-white/10" />
          <div className="relative mx-auto flex max-w-[860px] flex-col items-center">
            <div className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.18em] text-cream/65">
              ( 03 ) — What happens next
            </div>
            <h2 className="mb-7 font-serif-accent text-[clamp(42px,5.6vw,82px)] font-normal italic leading-[1.06] tracking-[-0.015em] text-cream">
              Tell us the workflow that wastes the most time.
            </h2>
            <p className="mb-11 max-w-[520px] text-[17px] leading-[1.6] text-cream/[0.72]">
              We&apos;ll show you what the automated version looks like and what
              it takes to ship. No deck — just a useful conversation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={bookingHref}
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-cream px-9 py-4 text-[15px] font-semibold text-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,16,60,0.35)]"
              >
                Book a free call
                <span className="text-[17px] leading-none">→</span>
              </a>
              <a
                href="/contact"
                className="focus-ring inline-flex items-center rounded-full border border-cream/40 px-8 py-4 text-[15px] font-medium text-cream transition-all duration-300 hover:border-cream hover:bg-cream/[0.08]"
              >
                Contact form
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
