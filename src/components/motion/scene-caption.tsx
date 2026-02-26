import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function SceneCaption({
  eyebrow,
  title,
  subline,
  className,
  titleClassName,
  center = false
}: {
  eyebrow?: string;
  title: string;
  subline?: string;
  className?: string;
  titleClassName?: string;
  center?: boolean;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow ? <Tag className={cn("mb-4", center && "mx-auto")}>{eyebrow}</Tag> : null}
      <h2
        className={cn(
          "text-balance max-w-3xl font-display text-3xl font-semibold leading-[0.95] sm:text-4xl lg:text-6xl",
          center && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subline ? (
        <p className={cn("mt-4 max-w-xl text-sm leading-relaxed text-ink/72 sm:text-base", center && "mx-auto")}>
          {subline}
        </p>
      ) : null}
    </div>
  );
}
