import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";

export function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(0,228,212,.18),transparent_55%)]" />
      <LightBeams count={9} className="opacity-60" />
      <div className="grid-backdrop absolute inset-0 opacity-20" />
      <GlowField className="opacity-75" />
      <div className="noise-overlay opacity-25" />
      <div className="hero-orb absolute left-[4%] top-24 h-56 w-56 bg-accent-1/24 blur-3xl animate-drift" />
      <div className="hero-orb absolute right-[6%] top-20 h-64 w-64 bg-accent-2/18 blur-3xl animate-drift-slow" />
      <div className="hero-orb absolute bottom-10 left-[46%] h-72 w-72 -translate-x-1/2 bg-accent-3/15 blur-3xl animate-drift" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />
    </div>
  );
}
