import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "neon-frame gradient-stroke relative overflow-hidden rounded-3xl p-6 sm:p-7",
        className
      )}
      {...props}
    />
  );
}
