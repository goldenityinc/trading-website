import React from 'react';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import StatsBlock from '../components/shared/StatsBlock';
import CTABanner from '../components/shared/CTABanner';

const BOARDROOM_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/855312d31_generated_0063a943.png';

const values = [
  { code: '01', title: 'Discipline', desc: 'Every transaction follows a structured, documented, and repeatable process that ensures consistency and accountability across all parties.' },
  { code: '02', title: 'Transparency', desc: 'Clear communication with counterparties at every stage — from initial engagement through documentation handover and final settlement.' },
  { code: '03', title: 'Integrity', desc: 'Our commercial relationships are built on trust, ethical conduct, and long-term institutional credibility. We do not compromise on governance standards.' },
  { code: '04', title: 'Execution', desc: 'Reliable delivery is our primary obligation. We coordinate logistics, documentation, and settlement to meet contractual requirements on schedule.' },
  { code: '05', title: 'Partnership', desc: 'We seek enduring commercial relationships with counterparties who share our standards of governance, professionalism, and operational discipline.' },
  { code: '06', title: 'Global Perspective', desc: 'Operating across jurisdictions and cultures, we bring informed international awareness to every transaction and commercial relationship.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About Meridian"
        subtitle="A disciplined commodity trading platform built on institutional governance, compliance frameworks, and operational rigor."
        image={BOARDROOM_IMAGE}
      />

      {/* Overview */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
            <SectionReveal>
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-7 leading-tight">
                Built for Institutional-Grade Transactions
              </h2>
              <div className="space-y-5 text-steel text-sm leading-[1.9] font-light">
                <p>
                  Meridian Global Trading is a cross-border commodity trading and strategic supply platform operating at the intersection of global energy markets, industrial supply chains, and institutional transaction infrastructure.
                </p>
                <p>
                  We coordinate sourcing, documentation, logistics, and execution of commodity transactions across energy, oil, minerals, and industrial inputs — serving buyers, suppliers, and institutional stakeholders who require a disciplined, compliance-oriented counterparty.
                </p>
                <p>
                  Established in 2012, Meridian has built a reputation for documentation discipline and governance-first commercial practice. We pursue well-structured transactions with qualified counterparties, not volume for its own sake.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <SectionLabel>Operating Philosophy</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-7 leading-tight">
                Why Counterparties Work With Us
              </h2>
              <div className="space-y-5 text-steel text-sm leading-[1.9] font-light">
                <p>
                  Institutional buyers, sellers, and partners engage Meridian because we reduce commercial friction. Our structured processes — from counterparty onboarding to final documentation — create predictability in complex cross-border transactions.
                </p>
                <p>
                  We maintain clear governance standards and communicate them upfront. Our team coordinates across time zones, regulatory environments, and logistics corridors to ensure every transaction meets the documentary and operational requirements of all parties.
                </p>
                <p>
                  Rigorous qualification. Transparent terms. Disciplined execution. Complete documentation. This is the standard our counterparties expect — and the standard we deliver.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <StatsBlock />

      {/* Values */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel centered>Operating Principles</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight text-center mb-16">
              Institutional Values
            </h2>
          </SectionReveal>

          <div className="space-y-0 max-w-4xl mx-auto">
            {values.map((val, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="group flex gap-7 py-7 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500">
                  <span className="font-mono text-[10px] tracking-widest text-steel/25 pt-0.5 min-w-[2rem] group-hover:text-copper/40 transition-colors">
                    {val.code}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 flex-1">
                    <h3 className="font-display text-base font-semibold text-white/90 min-w-[120px] mb-2 sm:mb-0 group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-steel text-sm leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <div className="border-t border-white/[0.05]" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Explore Our Capabilities"
        subtitle="Learn how Meridian coordinates sourcing, documentation, logistics, and execution for institutional commodity transactions."
        ctaText="View Capabilities"
        ctaLink="/capabilities"
      />
    </div>
  );
}