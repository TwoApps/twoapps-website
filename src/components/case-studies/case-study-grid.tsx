'use client';

import React from 'react';
import CaseStudyCard, { CaseStudy } from './case-study-card';

// Sample case studies data (templates)
export const sampleCaseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'singapore-fintech-kyc',
    clientName: 'PayFlow Singapore',
    industry: 'Fintech',
    location: 'Singapore',
    employeeCount: '50',
    headline: 'PayFlow Singapore Cuts KYC Review Time by 90%',
    subheadline: 'How a 50-person fintech reduced manual compliance work from 40 hours/week to 4 hours/week while processing 4x more applications',
    challenge: 'Manual KYC reviews taking 40 hours/week with 12% error rate and 3-5 day onboarding times',
    solution: 'AI-powered document extraction, validation rules, and human checkpoint workflow',
    results: [
      {
        label: 'Time Saved',
        before: '40 hrs/week',
        after: '4 hrs/week',
        improvement: '90%',
        icon: 'time',
      },
      {
        label: 'Accuracy',
        before: '88%',
        after: '97%',
        improvement: '+9 pts',
        icon: 'accuracy',
      },
      {
        label: 'ROI',
        before: '',
        after: 'SGD 135K',
        improvement: '3.1 mo',
        icon: 'roi',
      },
    ],
    testimonial: {
      quote: 'TwoApps transformed our KYC process. What used to take our compliance team 40 hours a week now takes 4 hours.',
      author: 'Sarah Chen',
      title: 'Chief Compliance Officer',
      company: 'PayFlow Singapore',
    },
    tags: ['KYC', 'Compliance', 'Document Processing'],
    completionDate: '2026-03',
  },
  {
    id: '2',
    slug: 'uae-logistics-invoice',
    clientName: 'TransGulf Logistics',
    industry: 'Logistics',
    location: 'Dubai, UAE',
    employeeCount: '180',
    headline: 'TransGulf Achieves 95% Invoice Matching Accuracy',
    subheadline: 'How a 180-person logistics company in Dubai reduced reconciliation time by 90% and cut dispute resolution from 20 days to 3 days',
    challenge: 'Manual invoice reconciliation of 2,500+ invoices monthly with 8% undetected discrepancies',
    solution: 'Intelligent invoice matching with AI extraction, 3-way validation, and automated approval routing',
    results: [
      {
        label: 'Time Saved',
        before: '120 hrs/mo',
        after: '12 hrs/mo',
        improvement: '90%',
        icon: 'time',
      },
      {
        label: 'Matching',
        before: '60%',
        after: '95%',
        improvement: '+35 pts',
        icon: 'accuracy',
      },
      {
        label: 'ROI',
        before: '',
        after: 'AED 288K',
        improvement: '3.5 mo',
        icon: 'roi',
      },
    ],
    testimonial: {
      quote: 'The system paid for itself in the first quarter by catching just two billing errors from a major carrier.',
      author: 'Ahmed Al-Rashid',
      title: 'Chief Financial Officer',
      company: 'TransGulf Logistics',
    },
    tags: ['Invoice Processing', 'AP Automation', 'Multi-currency'],
    completionDate: '2026-03',
  },
  {
    id: '3',
    slug: 'australia-professional-services',
    clientName: 'Mitchell & Partners',
    industry: 'Professional Services',
    location: 'Melbourne, Australia',
    employeeCount: '75',
    headline: 'Mitchell & Partners Cuts Onboarding from 2 Weeks to 3 Days',
    subheadline: 'How a 75-person accounting firm reduced onboarding time by 80% and increased client satisfaction from 6.2 to 9.1 out of 10',
    challenge: 'Fragmented onboarding with 7 systems, 2-3 week delays, and inconsistent client experience',
    solution: 'Unified onboarding workflow with client portal, compliance automation, and system provisioning',
    results: [
      {
        label: 'Onboarding',
        before: '2-3 weeks',
        after: '3-5 days',
        improvement: '80%',
        icon: 'time',
      },
      {
        label: 'Satisfaction',
        before: '6.2/10',
        after: '9.1/10',
        improvement: '+2.9 pts',
        icon: 'accuracy',
      },
      {
        label: 'ROI',
        before: '',
        after: 'AUD 144K',
        improvement: '3.8 mo',
        icon: 'roi',
      },
    ],
    testimonial: {
      quote: 'We\'ve had multiple new clients specifically mention how smooth the onboarding was compared to their previous firm.',
      author: 'Jennifer Mitchell',
      title: 'Managing Partner',
      company: 'Mitchell & Partners',
    },
    tags: ['Client Onboarding', 'AML/CTF', 'Client Portal'],
    completionDate: '2026-03',
  },
];

interface CaseStudyGridProps {
  caseStudies?: CaseStudy[];
  variant?: 'default' | 'featured' | 'compact';
  theme?: 'dark' | 'light';
  columns?: 2 | 3;
  showFeatured?: boolean;
  onCaseStudyClick?: (caseStudy: CaseStudy) => void;
  className?: string;
}

export function CaseStudyGrid({
  caseStudies = sampleCaseStudies,
  variant = 'default',
  theme = 'light',
  columns = 3,
  showFeatured = false,
  onCaseStudyClick,
  className = '',
}: CaseStudyGridProps) {
  const isDark = theme === 'dark';
  const [featured, ...rest] = caseStudies;

  return (
    <div className={className}>
      {/* Featured Case Study */}
      {showFeatured && featured && (
        <div className="mb-12">
          <CaseStudyCard
            caseStudy={featured}
            variant="featured"
            theme={theme}
            onClick={() => onCaseStudyClick?.(featured)}
          />
        </div>
      )}

      {/* Grid Title */}
      {variant !== 'compact' && (
        <div className="mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{
              color: isDark ? '#E8FFFC' : '#020406',
              fontFamily: "'Avenir Next', 'Helvetica Neue', sans-serif",
            }}
          >
            Client Success Stories
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: isDark ? '#87AFAC' : '#5A6B6A' }}
          >
            See how businesses across industries and regions are automating with TwoApps
          </p>
        </div>
      )}

      {/* Case Studies Grid */}
      <div
        className={`grid gap-6 ${
          columns === 2
            ? 'md:grid-cols-2'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {(showFeatured ? rest : caseStudies).map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            variant={variant}
            theme={theme}
            onClick={() => onCaseStudyClick?.(caseStudy)}
          />
        ))}
      </div>

      {/* View All CTA */}
      {variant !== 'compact' && (
        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: isDark ? '#00E4D4' : '#00A99D',
              color: '#FFFFFF',
            }}
          >
            View All Case Studies
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default CaseStudyGrid;
