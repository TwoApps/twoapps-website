import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-6 md:p-7",
        className
      )}
      {...props}
    />
  );
}
