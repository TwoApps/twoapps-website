import { Tag } from "@/components/ui/tag";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  chips?: string[];
};

export function PageHero({ eyebrow, title, description, chips = [] }: PageHeroProps) {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-stroke glass-panel relative overflow-hidden rounded-3xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="noise-overlay" />
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-8 -translate-y-8 rounded-full bg-accent-1/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-accent-2/15 blur-3xl" />
          <div className="relative">
            {eyebrow ? <Tag className="mb-5">{eyebrow}</Tag> : null}
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">{description}</p>
            {chips.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink/75"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
