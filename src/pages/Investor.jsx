import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import { FileText, ArrowRight, BarChart3, Globe, Building2 } from 'lucide-react';

const BOARDROOM_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/855312d31_generated_0063a943.png';

const snapshot = [
  { label: 'Founded', value: '2012' },
  { label: 'Headquarters', value: 'Geneva, Switzerland' },
  { label: 'Operating Presence', value: 'Middle East · Asia · Africa · Europe' },
  { label: 'Core Sectors', value: 'Energy · Oil · Minerals · Industrial Inputs' },
  { label: 'Transaction Model', value: 'Cross-Border Commodity Trading' },
  { label: 'Governance', value: 'Compliance-First · Documentation-Driven' },
];

const sectors = [
  { icon: BarChart3, title: 'Energy & Oil', desc: 'Crude oil, refined products, and petrochemical feedstocks across major supply and demand corridors.' },
  { icon: Globe, title: 'Minerals & Metals', desc: 'Iron ore, manganese, chrome, copper, and specialty minerals from established mining jurisdictions.' },
  { icon: Building2, title: 'Industrial Inputs', desc: 'Sulfur, petroleum coke, carbon black feedstock, and chemical intermediates for industrial consumption.' },
];

export default function Investor() {
  return (
    <div>
      <PageHero
        title="Corporate Profile"
        subtitle="An institutional overview of Meridian Global Trading — our structure, strategic positioning, and corporate governance framework."
        image={BOARDROOM_IMAGE}
      />

      {/* Snapshot + Business Model */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
            <SectionReveal>
              <SectionLabel>Company Snapshot</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-10 leading-tight">
                At a Glance
              </h2>
              <div className="space-y-0">
                {snapshot.map((item, i) => (
                  <div key={i} className="flex items-start py-4 border-t border-white/[0.05]">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel/40 min-w-[140px] pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-white/80 text-sm font-medium tracking-wide">{item.value}</span>
                  </div>
                ))}
                <div className="border-t border-white/[0.05]" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <SectionLabel>Strategic Position</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-7 leading-tight">
                Business Model
              </h2>
              <div className="space-y-5 text-steel text-sm leading-[1.9] font-light">
                <p>
                  Meridian operates as a principal-agency hybrid commodity trading platform. We engage directly with producers, refineries, mining operators, and institutional buyers to facilitate cross-border commodity transactions.
                </p>
                <p>
                  Our revenue model is transaction-based, with value derived from sourcing margin, logistics coordination, documentation management, and market access facilitation. We do not speculate on commodity prices; our focus is on well-structured commercial transactions with qualified counterparties.
                </p>
                <p>
                  The company maintains a lean operating structure with strategic presence in key trading hubs, allowing for efficient coordination across time zones and regulatory environments.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Sector Focus */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel>Sector Focus</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight mb-14 leading-tight">
              Core Operating Sectors
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
            {sectors.map((sector, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-charcoal p-10 hover:bg-navy/40 transition-all duration-500 group">
                  <sector.icon className="w-6 h-6 text-copper/60 mb-6 group-hover:text-copper transition-colors" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">{sector.title}</h3>
                  <p className="text-steel text-sm leading-relaxed font-light">{sector.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Document Request */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="border border-white/[0.06] p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-4 h-4 text-copper/60" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper/60">
                    Corporate Document
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  Request Corporate Profile
                </h3>
                <p className="text-steel text-sm max-w-lg font-light leading-relaxed">
                  Request our comprehensive corporate profile including company overview, governance framework, sector capabilities, and transaction references.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-copper text-white text-xs tracking-[0.16em] uppercase font-medium hover:bg-copper-light transition-all duration-300 whitespace-nowrap group"
              >
                Request Profile
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        title="Corporate & Institutional Inquiries"
        subtitle="For institutional inquiries, partnership discussions, or corporate profile requests, contact our corporate affairs team."
        ctaText="Contact Corporate Team"
      />
    </div>
  );
}