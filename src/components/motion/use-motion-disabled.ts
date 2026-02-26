"use client";

import { useEffect, useState } from "react";

function subscribe(media: MediaQueryList, onChange: () => void) {
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }

  media.addListener(onChange);
  return () => media.removeListener(onChange);
}

export function useMotionDisabled() {
  const [disabled, setDisabled] = useState(() => {
    if (typeof window === "undefined") return false;

    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 639px)").matches
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const phoneViewport = window.matchMedia("(max-width: 639px)");
    const update = () => setDisabled(reducedMotion.matches || phoneViewport.matches);

    update();

    const unsubReduced = subscribe(reducedMotion, update);
    const unsubPhone = subscribe(phoneViewport, update);

    return () => {
      unsubReduced();
      unsubPhone();
    };
  }, []);

  return disabled;
}
