import { Button } from "@/components/ui/button";
import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";
import { SceneCaption } from "@/components/motion/scene-caption";
import { SceneViewport } from "@/components/motion/scene-viewport";

export function CtaBand({
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref = "/contact",
  secondaryLabel = "Contact us"
}: {
  title: string;
  copy: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <SceneViewport pad="spacious" className="pt-8">
      <div className="neon-frame gradient-stroke relative overflow-hidden rounded-[1.9rem] p-7 sm:p-10 lg:p-12">
        <GlowField intensity="default" />
        <LightBeams count={8} className="opacity-35" />
        <div className="noise-overlay" />
        <div className="relative flex min-h-[280px] flex-col justify-between gap-8 lg:min-h-[340px]">
          <div className="max-w-3xl">
            <SceneCaption eyebrow="Next Step" title={title} subline={copy} />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </SceneViewport>
  );
}
