"use client";

import { useEffect, useRef } from "react";

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
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
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
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[22px] border border-ink/10 bg-white px-4 py-8 shadow-[0_18px_70px_rgba(22,21,15,0.08)] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16"
        >
          <div className="relative">
            <div data-hero-rise>{eyebrow ? <Tag className="mb-5">{eyebrow}</Tag> : null}</div>
            <div data-hero-rise>
              <SceneCaption title={title} subline={description} />
            </div>
            {chips.length ? (
              <div data-hero-rise className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                {chips.slice(0, 5).map((chip) => (
                  <span
                    key={chip}
                    className="max-w-full break-words rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs text-ink/70"
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
