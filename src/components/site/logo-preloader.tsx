"use client";

import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const SESSION_KEY = "twoapps_logo_preloader_seen";

export function LogoPreloader() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;

    const isMobile = window.innerWidth < 768;
    if (reduced || isMobile) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    const root = rootRef.current;
    if (!root) return;
    setVisible(true);

    let cancelled = false;

    void (async () => {
      try {
        const [{ gsap }] = await Promise.all([import("gsap")]);
        const logo = root.querySelector("[data-preloader-logo]");
        const ring = root.querySelector("[data-preloader-ring]");
        const text = root.querySelector("[data-preloader-text]");

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            if (cancelled) return;
            window.sessionStorage.setItem(SESSION_KEY, "1");
            setVisible(false);
          }
        });

        tl.set(root, { autoAlpha: 1 })
          .fromTo(
            ring,
            { scale: 0.84, opacity: 0 },
            { scale: 1.18, opacity: 0.65, duration: 0.7 }
          )
          .fromTo(
            logo,
            { scale: 0.9, opacity: 0, filter: "blur(8px)" },
            { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.7 },
            0.05
          )
          .fromTo(text, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0.35)
          .to({}, { duration: 0.35 })
          .to(root, { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" });

        return () => tl.kill();
      } catch {
        window.sessionStorage.setItem(SESSION_KEY, "1");
        setVisible(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [mounted, reduced]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-[80] bg-[#030507]/95 opacity-0",
        visible ? "block" : "hidden"
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,228,212,.22),transparent_62%)]" />
      <div className="absolute inset-0 bg-scanfade opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-1/25">
        <div
          data-preloader-ring
          className="absolute inset-0 rounded-full border border-accent-1/40 shadow-[0_0_40px_rgba(0,228,212,.22)]"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <img
          data-preloader-logo
          src="/twoapps-logo-mark.svg"
          alt=""
          className="h-24 w-auto drop-shadow-[0_0_25px_rgba(0,228,212,.35)] sm:h-28"
        />
        <p data-preloader-text className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent-1/90">
          TwoApps
        </p>
      </div>
    </div>
  );
}
