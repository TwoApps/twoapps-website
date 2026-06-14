import type { ReactNode } from "react";

export function ParallaxStack({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  // Mouse-driven parallax has been removed; the component now just renders its children.
  return <div className={className}>{children}</div>;
}
