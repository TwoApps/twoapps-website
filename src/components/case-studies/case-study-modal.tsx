'use client';

import React, { useState } from 'react';
import { CaseStudy } from './case-study-card';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  theme?: 'dark' | 'light';
}

export function CaseStudyModal({
  caseStudy,
  isOpen,
  onClose,
  theme = 'light',
}: CaseStudyModalProps) {
  if (!isOpen || !caseStudy) return null;

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#020406' : '#FFFFFF';
  const textColor = isDark ? '#E8FFFC' : '#020406';
  const accentColor = isDark ? '#00E4D4' : '#00A99D';
  const mutedColor = isDark ? '#87AFAC' : '#5A6B6A';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ backgroundColor: bgColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div
          className="p-8 pb-6"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(0, 228, 212, 0.1) 0%, transparent 50%)'
              : 'linear-gradient(135deg, rgba(0, 169, 157, 0.05) 0%, transparent 50%)',
          }}
        >
          {/* Industry & Location */}
          <div className="flex items-center gap-4 mb-4">
            <span
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{
                backgroundColor: isDark ? 'rgba(0, 228, 212, 0.15)' : 'rgba(0, 169, 157, 0.1)',
                color: accentColor,
              }}
            >
              {caseStudy.industry}
            </span>
            <span style={{ color: mutedColor }}>📍 {caseStudy.location}</span>
            <span style={{ color: mutedColor }}>{caseStudy.employeeCount} employees</span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: textColor, fontFamily: "'Avenir Next', 'Helvetica Neue', sans-serif" }}
          >
            {caseStudy.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg" style={{ color: mutedColor }}>
            {caseStudy.subheadline}
          </p>
        </div>

        {/* Metrics */}
        <div className="p-8 pt-0">
          <div className="grid grid-cols-3 gap-4 -mt-4">
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl"
                style={{
                  backgroundColor: isDark ? 'rgba(0, 228, 212, 0.05)' : 'rgba(0, 169, 157, 0.05)',
                  borderLeft: `4px solid ${accentColor}`,
                }}
              >
                <div className="text-sm mb-2" style={{ color: mutedColor }}>
                  {result.label}
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {result.before && (
                    <>
                      <span className="text-lg line-through opacity-50" style={{ color: mutedColor }}>
                        {result.before}
                      </span>
                      <span style={{ color: mutedColor }}>→</span>
                    </>
                  )}
                  <span className="text-2xl font-bold" style={{ color: accentColor }}>
                    {result.after}
                  </span>
                </div>
                <div className="text-sm font-semibold" style={{ color: textColor }}>
                  {result.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-0 space-y-8">
          {/* Challenge */}
          <section>
            <h2
              className="text-xl font-semibold mb-4 pb-2"
              style={{ color: textColor, borderBottom: `2px solid ${accentColor}` }}
            >
              The Challenge
            </h2>
            <p style={{ color: mutedColor }}>{caseStudy.challenge}</p>
          </section>

          {/* Solution */}
          <section>
            <h2
              className="text-xl font-semibold mb-4 pb-2"
              style={{ color: textColor, borderBottom: `2px solid ${accentColor}` }}
            >
              The Solution
            </h2>
            <p style={{ color: mutedColor }}>{caseStudy.solution}</p>
          </section>

          {/* Testimonial */}
          <section
            className="p-6 rounded-xl"
            style={{
              backgroundColor: isDark ? 'rgba(0, 228, 212, 0.03)' : 'rgba(0, 169, 157, 0.03)',
              borderLeft: `4px solid ${accentColor}`,
            }}
          >
            <div className="text-5xl mb-4" style={{ color: accentColor, opacity: 0.3 }}>
              &ldquo;
            </div>
            <blockquote
              className="text-lg italic mb-4"
              style={{ color: textColor }}
            >
              {caseStudy.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold" style={{ color: textColor }}>
                — {caseStudy.testimonial.author}
              </div>
              <div style={{ color: mutedColor }}>
                {caseStudy.testimonial.title}, {caseStudy.testimonial.company}
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div
          className="p-8 text-center"
          style={{
            backgroundColor: isDark ? 'rgba(0, 228, 212, 0.05)' : 'rgba(0, 169, 157, 0.05)',
          }}
        >
          <p className="mb-4" style={{ color: mutedColor }}>
            Want similar results for your business?
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: accentColor,
              color: '#FFFFFF',
            }}
          >
            Book a Free Workflow Audit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
