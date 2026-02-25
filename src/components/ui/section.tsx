import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  innerClassName?: string;
};

export function Section({
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative py-16 sm:py-20 lg:py-28", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
