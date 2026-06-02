import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import SectionLabel from '../shared/SectionLabel';

const BOARDROOM_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/855312d31_generated_0063a943.png';

const pillars = [
  { code: 'KYC/KYB', label: 'Counterparty Verification', desc: 'Structured onboarding and documentation protocols for all commercial relationships.' },
  { code: 'Screen.', label: 'Transaction Screening', desc: 'Systematic review against applicable sanctions regimes and compliance standards.' },
  { code: 'Doc.', label: 'Documentation Discipline', desc: 'Institutional-grade records maintained across every phase of the transaction lifecycle.' },
  { code: 'Conf.', label: 'Confidentiality Standards', desc: 'Strict data handling protocols protecting all counterparty and commercial information.' },
];

export default function CompliancePreview() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Text */}
          <SectionReveal>
            <SectionLabel>Governance &amp; Compliance</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight leading-tight mb-5">
              Compliance-First Posture
            </h2>
            <p className="text-steel text-sm leading-[1.85] font-light mb-10 max-w-md">
              Our governance framework is not supplementary — it is foundational. Every transaction, counterparty relationship, and market engagement operates under structured compliance oversight.
            </p>

            <div className="space-y-0">
              {pillars.map((p, i) => (
                <SectionReveal key={i} delay={i * 0.07}>
                  <div className="group flex gap-5 py-5 border-t border-white/[0.05] hover:border-copper/15 transition-colors">
                    <span className="font-mono text-[9px] tracking-widest text-copper/40 pt-0.5 min-w-[3rem] group-hover:text-copper/60 transition-colors">
                      {p.code}
                    </span>
                    <div>
                      <h4 className="text-white/90 text-sm font-semibold mb-0.5">{p.label}</h4>
                      <p className="text-steel text-xs leading-relaxed font-light">{p.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
              <div className="border-t border-white/[0.05] pt-7">
                <Link
                  to="/compliance"
                  className="inline-flex items-center gap-2 text-copper/70 text-xs tracking-[0.16em] uppercase font-medium hover:text-copper transition-colors"
                >
                  View Compliance Framework <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </SectionReveal>

          {/* Image */}
          <SectionReveal delay={0.18}>
            <div className="relative overflow-hidden">
              <img
                src={BOARDROOM_IMAGE}
                alt="Executive meeting"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/[0.06]">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel/50">
                  Institutional Governance Standards
                </p>
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}