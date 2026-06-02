import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import SectionLabel from '../shared/SectionLabel';

const commodities = [
  { name: 'Crude Oil', sub: 'Energy', tag: 'Supply · Logistics · Documentation' },
  { name: 'Refined Products', sub: 'Energy', tag: 'Gasoline · Diesel · Jet Fuel · Naphtha' },
  { name: 'Sulfur', sub: 'Industrial', tag: 'Granular · Prilled · Bulk' },
  { name: 'Industrial Feedstocks', sub: 'Industrial', tag: 'Petcoke · Carbon Black · Chemical Intermediates' },
  { name: 'Minerals', sub: 'Resources', tag: 'Iron Ore · Manganese · Chrome · Bauxite' },
  { name: 'Metals', sub: 'Resources', tag: 'Copper · Zinc · Nickel · Ferroalloys' },
];

export default function CommodityOverview() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal>
          <SectionLabel>Commodity Portfolio</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight max-w-xl leading-tight">
              Energy, Minerals &amp; Industrial Inputs
            </h2>
            <Link
              to="/commodities"
              className="inline-flex items-center gap-2 text-copper/80 text-xs tracking-[0.16em] uppercase font-medium hover:text-copper transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {commodities.map((item, i) => (
            <SectionReveal key={item.name} delay={i * 0.06}>
              <Link
                to="/commodities"
                className="group block bg-navy p-8 lg:p-10 hover:bg-charcoal/70 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/0 to-transparent group-hover:via-copper/20 transition-all duration-500" />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-steel/50 group-hover:text-copper/60 transition-colors">
                  {item.sub}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 mt-2 mb-3 group-hover:text-white transition-colors duration-300 tracking-tight">
                  {item.name}
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-steel/40 leading-relaxed group-hover:text-steel/60 transition-colors">
                  {item.tag}
                </p>
                <ArrowUpRight className="absolute top-8 right-8 w-4 h-4 text-steel/20 group-hover:text-copper/60 transition-all duration-300" />
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}