import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  innerClassName?: string;
};

export function Section({ className, innerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("relative py-12 sm:py-16 md:py-20 lg:py-24", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-12", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
