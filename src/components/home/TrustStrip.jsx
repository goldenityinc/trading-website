import React from 'react';
import SectionReveal from '../shared/SectionReveal';

const signals = [
  { value: 'Est. 2012', label: 'Over a decade of operational continuity' },
  { value: '40+ Markets', label: 'Across five continents' },
  { value: 'KYC / KYB', label: 'Structured counterparty qualification' },
  { value: 'Full Documentation', label: 'End-to-end transaction records' },
];

export default function TrustStrip() {
  return (
    <section className="bg-charcoal border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.05]">
          {signals.map((signal, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="text-white text-sm font-semibold tracking-wide mb-1">{signal.value}</div>
                <div className="text-steel text-xs font-light leading-relaxed">{signal.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}