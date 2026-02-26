"use client";

import { useEffect, useRef } from "react";

import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";
import { SceneCaption } from "@/components/motion/scene-caption";
import { useMotionDisabled } from "@/components/motion/use-motion-disabled";
import { Tag } from "@/components/ui/tag";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  chips?: string[];
};

export function PageHero({ eyebrow, title, description, chips = [] }: PageHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionDisabled = useMotionDisabled();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (motionDisabled) return;

    let ctx: { revert?: () => void } | null = null;
    void (async () => {
      const [{ gsap }] = await Promise.all([import("gsap")]);
      ctx = gsap.context(() => {
        gsap.fromTo(
          root.querySelectorAll("[data-hero-rise]"),
          { y: 18, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out"
          }
        );
      }, root);
    })();
    return () => ctx?.revert?.();
  }, [motionDisabled]);

  return (
    <section className="relative pt-8 sm:pt-10 lg:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="neon-frame gradient-stroke relative overflow-hidden rounded-[1.75rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12"
        >
          <GlowField intensity="strong" />
          <LightBeams count={10} className="opacity-45" />
          <div className="noise-overlay" />
          <div className="absolute -right-8 top-0 h-52 w-52 rounded-full bg-accent-1/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-accent-3/12 blur-3xl" />
          <div className="relative">
            <div data-hero-rise>
              {eyebrow ? <Tag className="mb-5">{eyebrow}</Tag> : null}
            </div>
            <div data-hero-rise>
              <SceneCaption title={title} subline={description} />
            </div>
            {chips.length ? (
              <div data-hero-rise className="mt-7 flex flex-wrap gap-2.5">
                {chips.slice(0, 5).map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-accent-1/12 bg-white/[0.02] px-3 py-1 text-xs text-ink/68"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
