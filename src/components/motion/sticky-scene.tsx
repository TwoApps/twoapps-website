"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { SceneProgressRail } from "@/components/motion/scene-progress-rail";
import { SceneCaption } from "@/components/motion/scene-caption";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StickySceneFrame = {
  label: string;
  headline: string;
  subline: string;
};

export function StickyScene({
  eyebrow,
  frames,
  visual,
  className,
  heightMultiplier = 3
}: {
  eyebrow?: string;
  frames: StickySceneFrame[];
  visual?: React.ReactNode;
  className?: string;
  heightMultiplier?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const stepLabels = useMemo(() => frames.map((frame) => frame.label), [frames]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(media.matches);
    onChange();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const pin = pinRef.current;
    if (!root || !pin) return;

    if (reduced || !isDesktop || frames.length <= 1) {
      setActiveIndex(0);
      const cards = Array.from(pin.querySelectorAll<HTMLElement>("[data-scene-visual-card]"));
      cards.forEach((card) => {
        card.style.removeProperty("transform");
        card.style.removeProperty("opacity");
      });
      return;
    }

    let trigger: { kill: () => void } | null = null;
    let cancelled = false;

    void (async () => {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const updateVisualCards = (nextIndex: number) => {
        const cards = Array.from(pin.querySelectorAll<HTMLElement>("[data-scene-visual-card]"));
        cards.forEach((card, index) => {
          const delta = index - nextIndex;
          gsap.to(card, {
            y: delta * 28,
            x: delta * 8,
            opacity: index === nextIndex ? 1 : index < nextIndex ? 0.28 : 0.58,
            scale: index === nextIndex ? 1 : 0.96,
            rotation: delta * -1.5,
            duration: 0.22,
            overwrite: true
          });
        });
      };

      updateVisualCards(0);

      trigger = ScrollTrigger.create({
        trigger: root,
        start: "top top+=64",
        end: "bottom top+=64",
        scrub: 0.12,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const progress = Math.min(1, Math.max(0, self.progress * 1.2));
          const segmentCount = Math.max(frames.length - 1, 1);
          const nextIndex = Math.min(frames.length - 1, Math.round(progress * segmentCount));
          setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
          updateVisualCards(nextIndex);
        }
      });
    })();

    return () => {
      cancelled = true;
      trigger?.kill();

      const cards = Array.from(pin.querySelectorAll<HTMLElement>("[data-scene-visual-card]"));
      cards.forEach((card) => {
        card.style.removeProperty("transform");
        card.style.removeProperty("opacity");
      });
    };
  }, [frames, isDesktop, reduced]);

  if (reduced || !isDesktop) {
    return (
      <section className={cn("relative py-10 sm:py-14", className)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-3">
              {eyebrow ? (
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-1/80">
                  {eyebrow}
                </p>
              ) : null}
              {frames.map((frame) => (
                <Card key={`${frame.label}-${frame.headline}`} className="p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{frame.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                    {frame.headline}
                  </h3>
                  {frame.subline ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{frame.subline}</p>
                  ) : null}
                </Card>
              ))}
            </div>
            {visual ? (
              <div
                className={cn(
                  "relative",
                  "[&_[data-scene-visual-card]]:static",
                  "[&_[data-scene-visual-card]]:mb-3"
                )}
              >
                {visual}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className={cn("relative", className)} style={{ minHeight: `calc(100svh * ${heightMultiplier})` }}>
      <div ref={pinRef} className="sticky top-16 h-[calc(100svh-4.5rem)]">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="flex h-full min-h-[420px] flex-col justify-between p-6 sm:p-8">
              <div>
                <SceneCaption
                  eyebrow={eyebrow}
                  title={frames[activeIndex]?.headline ?? ""}
                  subline={frames[activeIndex]?.subline ?? ""}
                  titleClassName="text-4xl sm:text-5xl lg:text-6xl"
                />
              </div>
              <SceneProgressRail steps={stepLabels} activeIndex={activeIndex} />
            </Card>
            <div className="relative min-h-[420px]">{visual}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
