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
  const stepLabels = useMemo(() => frames.map((frame) => frame.label), [frames]);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const pin = pinRef.current;
    if (!root || !pin || frames.length <= 1) return;

    let trigger: { kill: () => void } | null = null;

    void (async () => {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      trigger = ScrollTrigger.create({
        trigger: root,
        start: "top top+=64",
        end: `+=${Math.round(window.innerHeight * heightMultiplier)}`,
        pin,
        scrub: 0.65,
        onUpdate: (self) => {
          const progress = self.progress;
          const nextIndex = Math.min(frames.length - 1, Math.floor(progress * frames.length));
          setActiveIndex(nextIndex);

          const cards = Array.from(pin.querySelectorAll<HTMLElement>("[data-scene-visual-card]"));
          cards.forEach((card, index) => {
            const delta = index - nextIndex;
            gsap.to(card, {
              y: delta * 28,
              x: delta * 8,
              opacity: index === nextIndex ? 1 : index < nextIndex ? 0.28 : 0.58,
              scale: index === nextIndex ? 1 : 0.96,
              rotation: delta * -1.5,
              duration: 0.25,
              overwrite: true
            });
          });
        }
      });
    })();

    return () => {
      trigger?.kill();
    };
  }, [frames, heightMultiplier, reduced]);

  if (reduced) {
    return (
      <section className={cn("relative py-10 sm:py-14", className)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <SceneCaption
                eyebrow={eyebrow}
                title={frames[0]?.headline ?? ""}
                subline={frames[0]?.subline}
              />
            </div>
            <div>{visual}</div>
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
