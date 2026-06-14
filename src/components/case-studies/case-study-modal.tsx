'use client';

import type { CaseStudySummary } from '@/content/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CaseStudyModalProps {
  caseStudy: CaseStudySummary | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen || !caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

      <div
        className={cn(
          'relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-cream shadow-glow'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-ink/10 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink/70 transition-colors hover:bg-ink/[0.04] hover:text-ink sm:right-6 sm:top-6"
            aria-label="Close case study"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <span className="inline-flex rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70">
            {caseStudy.context}
          </span>
          <h2
            id="case-study-title"
            className="mt-4 pr-8 font-display text-2xl font-medium leading-[1.05] text-ink sm:text-3xl"
          >
            {caseStudy.title}
          </h2>
        </div>

        {/* Scrollable body */}
        <div className="scrollbar-thin overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <div className="space-y-6 sm:space-y-8">
            <section>
              <h3 className="mb-2 font-display text-lg font-medium text-ink">The problem</h3>
              <p className="leading-relaxed text-ink/70">{caseStudy.problem}</p>
            </section>

            <section>
              <h3 className="mb-2 font-display text-lg font-medium text-ink">What we did</h3>
              <p className="leading-relaxed text-ink/70">{caseStudy.approach}</p>
            </section>

            <section>
              <h3 className="mb-3 font-display text-lg font-medium text-ink">Outcomes</h3>
              <ul className="space-y-2.5">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-ink/75">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {caseStudy.tech.length ? (
              <section>
                <h3 className="mb-3 font-display text-lg font-medium text-ink">Stack & methods</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            {caseStudy.disclaimer ? (
              <p className="text-xs italic text-ink/50">{caseStudy.disclaimer}</p>
            ) : null}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-ink/10 bg-white px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink/65">Want a similar result in your operation?</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button href="/contact" size="sm">
                Book a call
              </Button>
              <Button href="/services" variant="secondary" size="sm">
                See services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
