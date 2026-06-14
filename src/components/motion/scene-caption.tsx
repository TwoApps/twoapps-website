import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function SceneCaption({
  eyebrow,
  title,
  subline,
  className,
  titleClassName,
  sublineClassName,
  tagClassName,
  center = false
}: {
  eyebrow?: string;
  title: string;
  subline?: string;
  className?: string;
  titleClassName?: string;
  sublineClassName?: string;
  tagClassName?: string;
  center?: boolean;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow ? <Tag className={cn("mb-4", center && "mx-auto", tagClassName)}>{eyebrow}</Tag> : null}
      <h2
        className={cn(
          "text-balance max-w-3xl font-display text-3xl font-semibold leading-[0.95] text-ink sm:text-4xl md:text-5xl lg:text-6xl",
          center && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subline ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base",
            center && "mx-auto",
            sublineClassName
          )}
        >
          {subline}
        </p>
      ) : null}
    </div>
  );
}
