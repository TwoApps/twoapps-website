'use client';

import type { CaseStudySummary } from '@/content/types';
import { cn } from '@/lib/utils';

export type CaseStudy = CaseStudySummary;

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'featured';
  onClick?: () => void;
  className?: string;
}

export function CaseStudyCard({
  caseStudy,
  variant = 'default',
  onClick,
  className,
}: CaseStudyCardProps) {
  if (variant === 'featured') {
    return (
      <article
        onClick={onClick}
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-[22px] border border-ink/10 bg-white transition-all duration-300 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)]',
          className
        )}
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70">
              {caseStudy.context}
            </span>
            <h3 className="mt-4 font-display text-2xl font-medium leading-[1.05] text-ink sm:text-3xl">
              {caseStudy.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/65">
              {caseStudy.approach}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs text-ink/70"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition-transform group-hover:translate-x-1">
              Read the full story
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="relative border-t border-ink/10 bg-cream/50 p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <div className="relative">
              <p className="mb-4 font-display text-lg italic leading-relaxed text-ink/85">
                “{caseStudy.outcomes[0]}”
              </p>
              <ul className="space-y-2">
                {caseStudy.outcomes.slice(1).map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={onClick}
      className={cn(
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] transition-all duration-300 hover:border-blue/55 hover:shadow-[0_18px_44px_rgba(22,21,15,0.10)] sm:p-6',
        className
      )}
    >
      <span className="w-fit rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70">
        {caseStudy.context}
      </span>
      <h3 className="mt-4 font-display text-lg font-medium leading-tight text-ink sm:text-xl">
        {caseStudy.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
        {caseStudy.approach}
      </p>

      {caseStudy.outcomes.length ? (
        <ul className="mt-5 space-y-2">
          {caseStudy.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="flex items-start gap-2 text-sm text-ink/75">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {caseStudy.tech.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {caseStudy.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/10 bg-cream px-2.5 py-1 text-xs text-ink/70"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue transition-transform group-hover:translate-x-1">
        Explore the case study
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}

export default CaseStudyCard;
