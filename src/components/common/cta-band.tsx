import { Button } from "@/components/ui/button";
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
      <div className="relative overflow-hidden rounded-[22px] bg-blue p-5 sm:p-7 md:p-10 lg:p-12">
        <div className="relative flex min-h-[220px] flex-col justify-between gap-6 sm:min-h-[260px] sm:gap-8 lg:min-h-[340px]">
          <div className="max-w-3xl">
            <SceneCaption
              eyebrow="Next Step"
              title={title}
              subline={copy}
              titleClassName="text-cream"
              sublineClassName="text-cream/80"
              tagClassName="border-cream/30 bg-cream/10 text-cream/90"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={primaryHref} className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              className="w-full border-cream/30 bg-transparent text-cream hover:border-cream hover:bg-cream/10 sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </SceneViewport>
  );
}
