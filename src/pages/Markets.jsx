import React from 'react';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';

const CARGO_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/f9f5c92c3_generated_8e27970f.png';

const corridors = [
  { region: 'Middle East', role: 'Primary Supply Origin', description: 'The core of our supply network for crude oil, refined products, sulfur, and petrochemical feedstocks. Established relationships with producers and terminal operators across the Arabian Gulf.', markets: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Iraq'], commodities: ['Crude Oil', 'Sulfur', 'Refined Products', 'LPG'] },
  { region: 'Southeast Asia', role: 'Key Destination & Hub', description: 'A major destination market for energy and industrial commodities, and a critical transshipment and refining hub connecting East-West trade flows.', markets: ['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam'], commodities: ['Crude Oil', 'Refined Products', 'Sulfur', 'Minerals'] },
  { region: 'East Asia', role: 'Major Demand Center', description: 'The world\'s largest industrial consumption zone. We serve end-users and trading intermediaries across the region\'s sophisticated commodity import infrastructure.', markets: ['China', 'South Korea', 'Japan', 'Taiwan'], commodities: ['Crude Oil', 'Metals', 'Minerals', 'Industrial Feedstocks'] },
  { region: 'Africa', role: 'Emerging Supply Corridor', description: 'An increasingly important corridor for mineral supply and energy product demand. Active relationships across established and developing commodity markets.', markets: ['Nigeria', 'South Africa', 'Ghana', 'Tanzania', 'Mozambique'], commodities: ['Minerals', 'Metals', 'Refined Products'] },
  { region: 'North America', role: 'Specialty Supply Hub', description: 'A source for refined products, specialty chemicals, and a base for structured commodity transactions with access to deep financial markets.', markets: ['United States', 'Canada', 'Mexico'], commodities: ['Refined Products', 'Industrial Feedstocks', 'Metals'] },
  { region: 'Europe & Mediterranean', role: 'Financial & Trading Hub', description: 'Key financial and logistical center for commodity trading, documentation, and structured transactions. Our European presence facilitates global coordination.', markets: ['Switzerland', 'Netherlands', 'United Kingdom', 'Turkey'], commodities: ['Crude Oil', 'Refined Products', 'Metals'] },
];

const hubs = [
  { name: 'Geneva', type: 'Financial Hub' },
  { name: 'Dubai', type: 'Operations Hub' },
  { name: 'Singapore', type: 'Trading Hub' },
  { name: 'Jakarta', type: 'Regional Office' },
  { name: 'Houston', type: 'Americas Desk' },
];

const routes = [
  { from: 'Arabian Gulf', to: 'East Asia', commodity: 'Crude Oil' },
  { from: 'Middle East', to: 'Southeast Asia', commodity: 'Sulfur' },
  { from: 'West Africa', to: 'China', commodity: 'Minerals' },
  { from: 'Middle East', to: 'India', commodity: 'Refined Products' },
  { from: 'South America', to: 'Asia Pacific', commodity: 'Metals' },
  { from: 'North America', to: 'Europe', commodity: 'Feedstocks' },
];

export default function Markets() {
  return (
    <div>
      <PageHero
        title="Markets & Global Presence"
        subtitle="Operating across strategic commodity corridors that connect supply origins with demand destinations worldwide."
        image={CARGO_IMAGE}
      />

      {/* Office Nodes */}
      <section className="bg-charcoal border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {hubs.map((hub, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-1.5 h-1.5 bg-copper/60 rounded-full mx-auto mb-2.5" />
                  <div className="text-white text-xs font-semibold tracking-wide mb-0.5">{hub.name}</div>
                  <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/40">{hub.type}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel>Trade Corridors</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight mb-14 leading-tight">
              Regional Coverage
            </h2>
          </SectionReveal>

          <div className="space-y-0">
            {corridors.map((corridor, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="group py-10 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-copper/50 rounded-full group-hover:bg-copper transition-colors" />
                        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/40 group-hover:text-copper/60 transition-colors">
                          {corridor.role}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                        {corridor.region}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-steel text-sm leading-[1.85] font-light">{corridor.description}</p>
                    </div>
                    <div className="lg:col-span-3 lg:col-start-10 space-y-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/30 block mb-1">Markets</span>
                        <p className="text-white/60 text-xs leading-loose">{corridor.markets.join(' · ')}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/30 block mb-1">Commodities</span>
                        <p className="text-copper/60 text-xs">{corridor.commodities.join(' · ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <div className="border-t border-white/[0.05]" />
          </div>
        </div>
      </section>

      {/* Primary Routes */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel centered>Key Corridors</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight text-center mb-12">
              Primary Trade Routes
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {routes.map((route, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="bg-charcoal p-8 hover:bg-navy/30 transition-all duration-400 group">
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-copper/50 block mb-4">
                    {route.commodity}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-white/80 text-sm font-semibold">{route.from}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-copper/20 to-copper/20 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-copper/50 rounded-full" />
                    </div>
                    <span className="text-white/80 text-sm font-semibold">{route.to}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Explore Market Access"
        subtitle="Discuss how Meridian can support your market entry, sourcing, or distribution requirements across global commodity corridors."
      />
    </div>
  );
}