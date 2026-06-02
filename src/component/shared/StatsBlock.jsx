import React from 'react';
import SectionReveal from './SectionReveal';

const stats = [
  { value: '12+', label: 'Years Active', sub: 'Established 2012' },
  { value: '40+', label: 'Markets Served', sub: 'Five continents' },
  { value: '100%', label: 'Documentation', sub: 'End-to-end discipline' },
  { value: '24/7', label: 'Coverage', sub: 'Global operations' },
];

export default function StatsBlock() {
  return (
    <section className="border-y border-white/[0.04] bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="text-center lg:px-10">
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-steel text-xs font-mono tracking-wider">{stat.sub}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}