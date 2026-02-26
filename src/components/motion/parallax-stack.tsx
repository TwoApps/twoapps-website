"use client";

import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

export function ParallaxStack({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--px", `${x}`);
      node.style.setProperty("--py", `${y}`);
    };

    const onLeave = () => {
      node.style.setProperty("--px", "0");
      node.style.setProperty("--py", "0");
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          ["--px" as string]: 0,
          ["--py" as string]: 0
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
