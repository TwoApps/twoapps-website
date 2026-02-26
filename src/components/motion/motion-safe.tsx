"use client";

import { useMotionDisabled } from "@/components/motion/use-motion-disabled";

export function MotionSafe({
  children,
  fallback = null
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const motionDisabled = useMotionDisabled();
  return <>{motionDisabled ? fallback : children}</>;
}
