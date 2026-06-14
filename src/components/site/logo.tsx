import { cn } from "@/lib/utils";

const MARK_SIZE = 30;

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-lg bg-ink",
        className
      )}
      aria-hidden="true"
      style={{ width: MARK_SIZE, height: MARK_SIZE }}
    >
      <span className="flex items-end gap-[1.6px]">
        {/* bar 1 */}
        <span
          className="relative overflow-hidden rounded-[1.5px] bg-cream"
          style={{ width: 4, height: 13 }}
        >
          <span
            className="absolute inset-x-0 bg-orange"
            style={{ top: 2.6, height: 1.8 }}
          />
        </span>
        {/* bar 2 */}
        <span
          className="relative overflow-hidden rounded-[1.5px] bg-cream"
          style={{ width: 4, height: 16 }}
        >
          <span
            className="absolute left-1/2 top-[2.8px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-blue"
            style={{ boxShadow: "0 0 2.5px rgba(39,66,206,0.9)" }}
          />
        </span>
        {/* bar 3 */}
        <span
          className="relative overflow-hidden rounded-[1.5px] bg-cream"
          style={{ width: 4, height: 16 }}
        >
          <span
            className="absolute inset-x-0 bg-orange"
            style={{ top: 3.4, height: 1.8 }}
          />
        </span>
        {/* bar 4 */}
        <span
          className="relative overflow-hidden rounded-[1.5px] bg-cream"
          style={{ width: 4, height: 13 }}
        >
          <span
            className="absolute inset-x-0 bg-orange"
            style={{ top: 2.6, height: 1.8 }}
          />
        </span>
      </span>
    </span>
  );
}

type LogoProps = {
  showMark?: boolean;
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ showMark = true, showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showMark ? <LogoMark /> : null}
      {showWordmark ? (
        <span className="flex items-baseline gap-0.5">
          <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">two</span>
          <span className="font-serif-accent text-[21px] italic text-blue">apps</span>
        </span>
      ) : null}
    </span>
  );
}
