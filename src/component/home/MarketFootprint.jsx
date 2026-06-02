import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import SectionLabel from '../shared/SectionLabel';

const regions = [
  { name: 'Middle East', role: 'Primary Supply Origin', markets: 'UAE · Saudi Arabia · Oman · Qatar · Kuwait · Iraq' },
  { name: 'Southeast Asia', role: 'Key Destination & Hub', markets: 'Indonesia · Singapore · Malaysia · Thailand · Vietnam' },
  { name: 'East Asia', role: 'Major Demand Center', markets: 'China · South Korea · Japan · Taiwan' },
  { name: 'Africa', role: 'Emerging Supply Corridor', markets: 'Nigeria · South Africa · Ghana · Mozambique' },
  { name: 'North America', role: 'Specialty Supply Hub', markets: 'United States · Canada · Mexico' },
  { name: 'Europe', role: 'Financial & Trading Hub', markets: 'Switzerland · Netherlands · United Kingdom · Turkey' },
];

export default function MarketFootprint() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal>
          <SectionLabel>Global Presence</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight max-w-lg leading-tight">
              Market Footprint
            </h2>
            <Link
              to="/markets"
              className="inline-flex items-center gap-2 text-copper/80 text-xs tracking-[0.16em] uppercase font-medium hover:text-copper transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              Explore Markets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="space-y-0">
          {regions.map((region, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 py-7 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500 items-baseline">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-copper/50 rounded-full group-hover:bg-copper transition-colors" />
                    <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/40 group-hover:text-copper/60 transition-colors">
                      {region.role}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                    {region.name}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-5">
                  <p className="font-mono text-[11px] tracking-wider text-steel/50 leading-loose group-hover:text-steel/70 transition-colors">
                    {region.markets}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>
      </div>
    </section>
  );
}