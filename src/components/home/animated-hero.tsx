"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

type AnimatedHeroProps = {
  bookingHref: string;
};

export function AnimatedHero({ bookingHref }: AnimatedHeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};

    void (async () => {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        q("[data-hero-chip]"),
        { y: 18, opacity: 0, stagger: 0.07 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 },
        0
      )
        .fromTo(
          q("[data-hero-title-line]"),
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
          0.12
        )
        .fromTo(
          q("[data-hero-copy]"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          0.3
        )
        .fromTo(
          q("[data-hero-cta]"),
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 },
          0.45
        )
        .fromTo(
          q("[data-hero-panel]"),
          { y: 22, opacity: 0, rotateX: 6 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8 },
          0.25
        );

      const deco = q("[data-hero-deco]");
      gsap.to(deco, {
        yPercent: -18,
        xPercent: 6,
        scale: 1.05,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.8
        }
      });

      cleanup = () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <div ref={rootRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-8 lg:p-10">
          <div className="noise-overlay" />
          <div data-hero-deco className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-accent-1/15 blur-3xl" />
          <div data-hero-deco className="absolute right-2 top-2 h-36 w-36 rounded-full bg-accent-2/15 blur-3xl" />
          <div data-hero-deco className="absolute bottom-2 left-1/3 h-36 w-36 rounded-full bg-accent-3/12 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {["Dubai, UAE", "Business + Agency Delivery"].map((chip) => (
                  <span
                    key={chip}
                    data-hero-chip
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[0.94] sm:text-5xl lg:text-7xl">
                <span className="block" data-hero-title-line>
                  Two Apps builds
                </span>
                <span className="block bg-gradient-to-r from-accent-1 via-white to-accent-2 bg-clip-text text-transparent" data-hero-title-line>
                  agentic AI systems
                </span>
                <span className="block text-ink/92" data-hero-title-line>
                  and white-label AI delivery
                </span>
              </h1>
              <p data-hero-copy className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
                Dubai-based AI software house for operational automation and white-label AI delivery. We help
                businesses automate workflows and help agencies ship AI projects faster with Claude-native execution.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div data-hero-cta>
                  <Button href={bookingHref} size="lg">
                    Book discovery call
                  </Button>
                </div>
                <div data-hero-cta>
                  <Button href="/contact" variant="secondary" size="lg">
                    Start a conversation
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-ink/65 sm:text-sm">
                <span className="font-mono uppercase tracking-[0.18em] text-ink/55">Core focus</span>
                <Link
                  href="/services"
                  className="focus-ring rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5"
                >
                  View services
                </Link>
                <Link
                  href="/agency-partners"
                  className="focus-ring rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5"
                >
                  Agency partnerships
                </Link>
              </div>
            </div>

            <div data-hero-panel className="relative">
              <div className="glass-panel gradient-stroke relative overflow-hidden rounded-3xl p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-1/70 to-transparent" />
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-1">Pick your path</p>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/60">
                    Launch-ready
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
                        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent-1/70" />
                        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent-1/30 animate-pulseRing" />
                      </span>
                      <h2 className="font-display text-xl font-semibold">For Businesses</h2>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">
                      Operational automation, AI-enabled internal tools, and production-ready workflows.
                    </p>
                    <Link
                      href="/services"
                      className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-accent-1 hover:bg-white/5"
                    >
                      Explore services <span aria-hidden>↗</span>
                    </Link>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
                        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent-2/70" />
                        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent-2/25 animate-pulseRing" />
                      </span>
                      <h2 className="font-display text-xl font-semibold">For Agencies</h2>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">
                      White-label AI implementation support for software houses and digital agencies.
                    </p>
                    <Link
                      href="/agency-partners"
                      className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-accent-2 hover:bg-white/5"
                    >
                      Partner model <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">Fastest starting point</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    Start with one workflow or one client AI pilot, then scale after measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
