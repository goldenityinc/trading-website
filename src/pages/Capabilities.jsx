import React from 'react';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';

const CARGO_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/f9f5c92c3_generated_8e27970f.png';

const phases = [
  {
    code: '01',
    phase: 'Origination',
    summary: 'Supplier identification, qualification, and relationship management across commodity corridors.',
    capabilities: [
      { title: 'Sourcing Network', desc: 'Global supplier identification and qualification across strategic commodity corridors. Established relationships with producers, refineries, and mining operators across multiple jurisdictions.' },
      { title: 'Supplier Coordination', desc: 'Ongoing supplier management including production scheduling, quality monitoring, and shipment readiness verification. Bridging the operational gap between supply and demand.' },
    ],
  },
  {
    code: '02',
    phase: 'Counterparty Management',
    summary: 'Structured onboarding, qualification, and ongoing management of all commercial relationships.',
    capabilities: [
      { title: 'Buyer Qualification', desc: 'Structured buyer onboarding including KYC documentation, credit assessment coordination, and commercial capability verification. Ensuring counterparty alignment before commitment.' },
      { title: 'Counterparty Onboarding', desc: 'Comprehensive onboarding for all commercial relationships — including documentation collection, compliance screening, and terms agreement.' },
    ],
  },
  {
    code: '03',
    phase: 'Execution',
    summary: 'End-to-end logistics, documentation, and delivery management from origin to destination.',
    capabilities: [
      { title: 'Logistics & Shipment Coordination', desc: 'Vessel chartering, port coordination, loading supervision, and in-transit monitoring. We manage the physical flow of commodities from origin to destination.' },
      { title: 'Trade Documentation', desc: 'Preparation, verification, and management of all transaction documents — including contracts, letters of credit, bills of lading, inspection certificates, and settlement records.' },
      { title: 'Assay & Inspection Coordination', desc: 'Coordination with international inspection agencies for quality verification, quantity surveys, and compliance certification at loading and discharge ports.' },
    ],
  },
  {
    code: '04',
    phase: 'Structuring',
    summary: 'Commercial architecture, contract support, and market access facilitation for complex transactions.',
    capabilities: [
      { title: 'Contract Execution Support', desc: 'Support for contract negotiation, term structuring, and execution — ensuring alignment between commercial intent and documentary requirements.' },
      { title: 'Transaction Structuring', desc: 'Deal architecture including pricing mechanisms, delivery terms, payment instruments, and risk allocation frameworks for complex cross-border transactions.' },
      { title: 'Strategic Market Access', desc: 'Entry support for new markets, including regulatory guidance, counterparty introductions, and corridor development for expanding trade volumes.' },
    ],
  },
];

export default function Capabilities() {
  return (
    <div>
      <PageHero
        title="Capabilities"
        subtitle="A full-cycle commercial platform coordinating every phase of the commodity transaction lifecycle — from sourcing through settlement."
        image={CARGO_IMAGE}
      />

      {phases.map((p, phaseIdx) => (
        <section
          key={p.phase}
          className={phaseIdx % 2 === 0 ? 'bg-navy py-20 lg:py-24' : 'bg-charcoal py-20 lg:py-24'}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[10px] tracking-widest text-copper/50">{p.code}</span>
                <div className="w-4 h-px bg-copper/40" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">{p.phase}</h2>
              </div>
              <p className="text-steel text-sm font-light mb-12 pl-10 max-w-xl">{p.summary}</p>
            </SectionReveal>

            <div className="space-y-0 pl-0 lg:pl-10">
              {p.capabilities.map((cap, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="group flex gap-6 lg:gap-10 py-7 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500">
                    <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-10">
                      <h3 className="font-display text-sm font-semibold text-white/90 min-w-[200px] group-hover:text-white transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-steel text-sm leading-[1.85] font-light">{cap.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
              <div className="border-t border-white/[0.05]" />
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Engage Our Platform"
        subtitle="Whether you are sourcing, selling, or structuring — our team is ready to discuss how we can support your transaction requirements."
      />
    </div>
  );
}