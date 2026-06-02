import React from 'react';
import SectionReveal from '../shared/SectionReveal';
import SectionLabel from '../shared/SectionLabel';

const steps = [
  { num: '01', title: 'Initial Engagement', desc: 'Counterparty qualification, requirement analysis, and preliminary term discussion.' },
  { num: '02', title: 'Sourcing & Matching', desc: 'Supplier identification, product specification alignment, and origin confirmation.' },
  { num: '03', title: 'Documentation & Terms', desc: 'Contract preparation, letter of credit arrangement, and compliance documentation.' },
  { num: '04', title: 'Logistics Coordination', desc: 'Vessel charter, port coordination, inspection scheduling, and shipment tracking.' },
  { num: '05', title: 'Execution & Settlement', desc: 'Final delivery confirmation, documentation handover, and transaction settlement.' },
];

export default function ProcessOverview() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <SectionLabel centered>Transaction Process</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight">
              How We Execute
            </h2>
            <p className="text-steel text-sm mt-4 max-w-md mx-auto font-light leading-relaxed">
              A documentation-driven approach from initial engagement through final settlement.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="group flex gap-8 py-8 border-t border-white/[0.05] last:border-b hover:border-copper/15 transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-[0.2em] text-copper/50 pt-0.5 min-w-[2rem] group-hover:text-copper/70 transition-colors">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white/90 mb-1.5 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}