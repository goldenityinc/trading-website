import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import SectionLabel from '../shared/SectionLabel';

const capabilities = [
  { num: '01', title: 'Sourcing Network', desc: 'Global supplier identification and qualification across strategic commodity corridors.' },
  { num: '02', title: 'Counterparty Onboarding', desc: 'Structured KYC/KYB processes for institutional buyer and seller qualification.' },
  { num: '03', title: 'Logistics Coordination', desc: 'Shipment planning, vessel coordination, and port operations management.' },
  { num: '04', title: 'Trade Documentation', desc: 'End-to-end documentation including L/C, bills of lading, certificates, and assay reports.' },
  { num: '05', title: 'Compliance Framework', desc: 'Transaction screening, regulatory awareness, and governance-first execution.' },
  { num: '06', title: 'Transaction Structuring', desc: 'Deal architecture, contract support, and commercial term optimization.' },
];

export default function CapabilitiesPreview() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal>
          <SectionLabel>Platform Capabilities</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight max-w-lg leading-tight">
              Full-Cycle Transaction Platform
            </h2>
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 text-copper/80 text-xs tracking-[0.16em] uppercase font-medium hover:text-copper transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              All Capabilities <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="group flex items-start gap-6 lg:gap-10 py-7 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest text-steel/30 pt-0.5 min-w-[2rem] group-hover:text-copper/50 transition-colors">
                  {cap.num}
                </span>
                <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-10">
                  <h3 className="font-display text-base font-semibold text-white/90 min-w-[180px] group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed font-light">
                    {cap.desc}
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