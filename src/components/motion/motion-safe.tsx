"use client";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

export function MotionSafe({
  children,
  fallback = null
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  return <>{reduced ? fallback : children}</>;
}
