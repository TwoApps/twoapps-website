'use client';

import { useState } from 'react';

import type { CaseStudySummary } from '@/content/types';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';

import { CaseStudyCard } from './case-study-card';
import { CaseStudyModal } from './case-study-modal';

interface CaseStudyGridProps {
  caseStudies: CaseStudySummary[];
  showFeatured?: boolean;
  className?: string;
}

export function CaseStudyGrid({
  caseStudies,
  showFeatured = false,
  className,
}: CaseStudyGridProps) {
  const [active, setActive] = useState<CaseStudySummary | null>(null);

  if (!caseStudies.length) return null;

  const [featured, ...rest] = caseStudies;
  const gridItems = showFeatured && featured ? rest : caseStudies;

  return (
    <>
      <Section className={className}>
        <Heading
          eyebrow="Client proof"
          title="Real workflows. Real outcomes."
          subtitle="Every case below is built around a delivery pattern we use again and again — so you can see what the work actually looks like before we talk."
        />

        {showFeatured && featured ? (
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <CaseStudyCard
              caseStudy={featured}
              variant="featured"
              onClick={() => setActive(featured)}
            />
          </div>
        ) : null}

        <div
          className={cn(
            'grid gap-4 sm:gap-5 lg:gap-6',
            showFeatured && featured
              ? 'mt-6 grid-cols-1 sm:mt-8 md:grid-cols-2'
              : 'mt-8 grid-cols-1 sm:mt-10 md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {gridItems.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              onClick={() => setActive(caseStudy)}
            />
          ))}
        </div>
      </Section>

      <CaseStudyModal
        caseStudy={active}
        isOpen={!!active}
        onClose={() => setActive(null)}
      />
    </>
  );
}

export default CaseStudyGrid;
