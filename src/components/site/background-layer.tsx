export function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="noise-overlay" />
      <div className="hero-orb absolute left-[6%] top-16 h-44 w-44 bg-accent-1/30 blur-2xl animate-drift" />
      <div className="hero-orb absolute right-[8%] top-10 h-52 w-52 bg-accent-2/25 blur-2xl animate-drift-slow" />
      <div className="hero-orb absolute bottom-24 left-1/2 h-60 w-60 -translate-x-1/2 bg-accent-3/20 blur-2xl animate-drift" />
    </div>
  );
}
