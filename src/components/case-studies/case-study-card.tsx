'use client';

import React from 'react';
import Image from 'next/image';

// Brand colors from thetwoapps.com
const colors = {
  darkBg: '#020406',
  darkText: '#E8FFFC',
  darkAccent: '#00E4D4',
  darkMuted: '#87AFAC',
  lightBg: '#FFFFFF',
  lightText: '#020406',
  lightAccent: '#00A99D',
  lightMuted: '#5A6B6A',
};

export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  location: string;
  employeeCount: string;
  headline: string;
  subheadline: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  tags: string[];
  imageUrl?: string;
  logoUrl?: string;
  completionDate: string;
}

export interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
  improvement: string;
  icon?: 'time' | 'accuracy' | 'roi' | 'custom';
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'featured' | 'compact';
  theme?: 'dark' | 'light';
  onClick?: () => void;
  className?: string;
}

// Icon components
const TimeIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AccuracyIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="3" fill={color} />
  </svg>
);

const RoiIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const getResultIcon = (iconType: string, color: string) => {
  switch (iconType) {
    case 'time':
      return <TimeIcon color={color} />;
    case 'accuracy':
      return <AccuracyIcon color={color} />;
    case 'roi':
      return <RoiIcon color={color} />;
    default:
      return null;
  }
};

export function CaseStudyCard({
  caseStudy,
  variant = 'default',
  theme = 'light',
  onClick,
  className = '',
}: CaseStudyCardProps) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? colors.darkBg : colors.lightBg;
  const textColor = isDark ? colors.darkText : colors.lightText;
  const accentColor = isDark ? colors.darkAccent : colors.lightAccent;
  const mutedColor = isDark ? colors.darkMuted : colors.lightMuted;

  if (variant === 'compact') {
    return (
      <div
        onClick={onClick}
        className={`
          group cursor-pointer rounded-xl p-6 transition-all duration-300
          ${isDark ? 'bg-[#0A1012] hover:bg-[#0F1618]' : 'bg-gray-50 hover:bg-white'}
          ${isDark ? 'border border-[#1A2528]' : 'border border-gray-200'}
          hover:shadow-lg
          ${className}
        `}
        style={{ backgroundColor: isDark ? '#0A1012' : undefined }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              {caseStudy.industry}
            </span>
            <h3
              className="text-lg font-semibold mt-1 group-hover:underline"
              style={{ color: textColor, fontFamily: "'Avenir Next', 'Helvetica Neue', sans-serif" }}
            >
              {caseStudy.clientName}
            </h3>
          </div>
          {caseStudy.logoUrl && (
            <div className="w-12 h-12 relative grayscale opacity-60">
              <Image src={caseStudy.logoUrl} alt={caseStudy.clientName} fill className="object-contain" />
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="flex gap-4 mb-4">
          {caseStudy.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="flex-1">
              <div className="text-xs" style={{ color: mutedColor }}>{result.label}</div>
              <div className="text-sm font-semibold" style={{ color: accentColor }}>
                {result.improvement}
              </div>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="text-sm" style={{ color: mutedColor }}>
          📍 {caseStudy.location}
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div
        onClick={onClick}
        className={`
          group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300
          ${isDark ? 'bg-gradient-to-br from-[#0A1012] to-[#020406]' : 'bg-white'}
          shadow-xl hover:shadow-2xl
          ${className}
        `}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Content */}
          <div className="p-8 md:p-12">
            {/* Industry Badge */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{
                backgroundColor: isDark ? 'rgba(0, 228, 212, 0.1)' : 'rgba(0, 169, 157, 0.1)',
                color: accentColor,
              }}
            >
              {caseStudy.industry} • {caseStudy.location}
            </span>

            {/* Headline */}
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
              style={{ color: textColor, fontFamily: "'Avenir Next', 'Helvetica Neue', sans-serif" }}
            >
              {caseStudy.headline}
            </h2>

            {/* Subheadline */}
            <p
              className="text-base mb-6"
              style={{ color: mutedColor }}
            >
              {caseStudy.subheadline}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {caseStudy.results.map((result, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl"
                  style={{
                    backgroundColor: isDark ? 'rgba(0, 228, 212, 0.05)' : 'rgba(0, 169, 157, 0.05)',
                    borderLeft: `3px solid ${accentColor}`,
                  }}
                >
                  <div className="flex justify-center mb-2">
                    {getResultIcon(result.icon || 'custom', accentColor)}
                  </div>
                  <div
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: accentColor }}
                  >
                    {result.after}
                  </div>
                  <div className="text-xs mt-1" style={{ color: mutedColor }}>
                    {result.label}
                  </div>
                  <div className="text-sm font-semibold mt-1" style={{ color: textColor }}>
                    {result.improvement}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="inline-flex items-center gap-2 font-semibold transition-transform group-hover:translate-x-1"
              style={{ color: accentColor }}
            >
              Read Full Case Study
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: Quote */}
          <div
            className="p-8 md:p-12 flex flex-col justify-center"
            style={{
              backgroundColor: isDark ? 'rgba(0, 228, 212, 0.03)' : 'rgba(0, 169, 157, 0.03)',
            }}
          >
            <div className="text-6xl mb-4" style={{ color: accentColor, opacity: 0.3 }}>
              "
            </div>
            <blockquote
              className="text-lg md:text-xl italic mb-6 leading-relaxed"
              style={{ color: textColor }}
            >
              {caseStudy.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold" style={{ color: textColor }}>
                {caseStudy.testimonial.author}
              </div>
              <div className="text-sm" style={{ color: mutedColor }}>
                {caseStudy.testimonial.title}, {caseStudy.testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <article
      onClick={onClick}
      className={`
        group cursor-pointer rounded-xl overflow-hidden transition-all duration-300
        ${isDark ? 'bg-[#0A1012]' : 'bg-white'}
        ${isDark ? 'border border-[#1A2528]' : 'border border-gray-100'}
        hover:shadow-xl
        ${className}
      `}
    >
      {/* Header with gradient */}
      <div
        className="p-6 pb-4"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(0, 228, 212, 0.08) 0%, transparent 50%)'
            : 'linear-gradient(135deg, rgba(0, 169, 157, 0.05) 0%, transparent 50%)',
        }}
      >
        {/* Industry & Location */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            {caseStudy.industry}
          </span>
          <span className="text-sm" style={{ color: mutedColor }}>
            📍 {caseStudy.location}
          </span>
        </div>

        {/* Client Name */}
        <h3
          className="text-xl font-bold mb-2 group-hover:underline underline-offset-4"
          style={{ color: textColor, fontFamily: "'Avenir Next', 'Helvetica Neue', sans-serif" }}
        >
          {caseStudy.clientName}
        </h3>

        {/* Headline */}
        <p className="text-sm mb-4" style={{ color: mutedColor }}>
          {caseStudy.headline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                color: mutedColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="p-6 pt-2">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {caseStudy.results.slice(0, 3).map((result, idx) => (
            <div
              key={idx}
              className="text-center p-3 rounded-lg"
              style={{
                backgroundColor: isDark ? 'rgba(0, 228, 212, 0.03)' : 'rgba(0, 169, 157, 0.03)',
              }}
            >
              <div className="text-lg font-bold" style={{ color: accentColor }}>
                {result.improvement}
              </div>
              <div className="text-xs" style={{ color: mutedColor }}>
                {result.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Preview */}
        <div
          className="p-4 rounded-lg border-l-2 italic text-sm"
          style={{
            borderColor: accentColor,
            backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
            color: mutedColor,
          }}
        >
          "{caseStudy.testimonial.quote.slice(0, 120)}..."
        </div>

        {/* Read More */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs" style={{ color: mutedColor }}>
            {caseStudy.employeeCount} employees
          </span>
          <span
            className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: accentColor }}
          >
            Read More →
          </span>
        </div>
      </div>
    </article>
  );
}

export default CaseStudyCard;
