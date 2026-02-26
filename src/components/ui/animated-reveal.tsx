"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { useMotionDisabled } from "@/components/motion/use-motion-disabled";

type AnimatedRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

export function AnimatedReveal({
  children,
  delay = 0,
  className,
  y = 16
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const motionDisabled = useMotionDisabled();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (motionDisabled) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [motionDisabled]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={visible ? "shown" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        shown: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
