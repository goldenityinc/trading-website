import React from 'react';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import { Shield, Eye, FileCheck, Lock, UserCheck, Scale, AlertTriangle, Database } from 'lucide-react';

const BOARDROOM_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/855312d31_generated_0063a943.png';

const kyc_steps = [
  { num: '01', title: 'Initial Application', desc: 'Counterparty submits company information, corporate documentation, and designated contact details.' },
  { num: '02', title: 'Documentation Review', desc: 'Verification of corporate registration, beneficial ownership, financial references, and operating history.' },
  { num: '03', title: 'Compliance Screening', desc: 'Sanctions screening, adverse media checks, and regulatory compliance assessment.' },
  { num: '04', title: 'Risk Assessment', desc: 'Evaluation of counterparty risk profile, jurisdiction analysis, and transaction type review.' },
  { num: '05', title: 'Internal Approval', desc: 'Review and approval by compliance committee based on completed due diligence package.' },
  { num: '06', title: 'Terms Agreement', desc: 'Execution of commercial terms, compliance acknowledgments, and confidentiality agreements.' },
  { num: '07', title: 'Active Monitoring', desc: 'Ongoing monitoring of counterparty status, periodic reviews, and compliance update requirements.' },
  { num: '08', title: 'Transaction Authorization', desc: 'Per-transaction review and authorization process for new commercial engagements.' },
];

const principles = [
  { icon: Shield, title: 'Sanctions Compliance', desc: 'We maintain awareness of applicable international sanctions regimes and screen counterparties accordingly, identifying and avoiding prohibited transactions.' },
  { icon: Eye, title: 'Anti-Corruption', desc: 'Zero-tolerance approach to bribery and corruption. Commercial practices are designed to ensure transparency and accountability in all counterparty interactions.' },
  { icon: Scale, title: 'Regulatory Awareness', desc: 'We operate with current awareness of regulatory environments across our markets, including trade regulations, export controls, and compliance requirements.' },
  { icon: Lock, title: 'Confidentiality Standards', desc: 'Counterparty information is treated with strict confidentiality. Robust data handling protocols protect sensitive commercial and personal information.' },
  { icon: UserCheck, title: 'Ethical Trading', desc: 'Commercial relationships based on fair dealing, transparent communication, and respect for contractual obligations across all jurisdictions.' },
  { icon: Database, title: 'Record Keeping', desc: 'Comprehensive records of all transactions, communications, and compliance activities. Proper documentation is a core component of our governance framework.' },
];

export default function Compliance() {
  return (
    <div>
      <PageHero
        title="Compliance & Governance"
        subtitle="Institutional standards, documentation discipline, and counterparty qualification processes that underpin every transaction."
        image={BOARDROOM_IMAGE}
      />

      {/* Intro */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
            <SectionReveal>
              <SectionLabel>Our Commitment</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-7 leading-tight">
                Governance-First Approach
              </h2>
              <div className="space-y-5 text-steel text-sm leading-[1.9] font-light">
                <p>
                  At Meridian, compliance is foundational to our commercial operations — not supplementary. Every transaction, counterparty relationship, and market engagement is subject to our governance framework.
                </p>
                <p>
                  We maintain structured processes for counterparty qualification, transaction review, and ongoing compliance monitoring, designed to protect our counterparties, our organization, and the integrity of every transaction we facilitate.
                </p>
                <p className="text-steel/40 text-xs italic pt-2">
                  The information presented describes our general compliance approach and operational principles. It does not constitute legal advice or guarantee any specific compliance standard.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-charcoal border border-white/[0.06] p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-4 h-4 text-copper/60" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-semibold text-white tracking-tight">Compliance Notice</h3>
                </div>
                <div className="space-y-4 text-steel text-sm leading-[1.85] font-light">
                  <p>All counterparties are required to complete our KYC/KYB onboarding process before any commercial engagement.</p>
                  <p>Transaction initiation is contingent upon satisfactory completion of compliance review, documentation verification, and internal approval.</p>
                  <p>We reserve the right to decline any transaction or counterparty relationship that does not meet our governance standards.</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* KYC Process */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel centered>KYC / KYB Process</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight text-center mb-4">
              Counterparty Onboarding
            </h2>
            <p className="text-steel text-sm text-center mb-16 font-light max-w-lg mx-auto">
              An eight-step qualification process ensuring all counterparties meet institutional standards before any commercial commitment.
            </p>
          </SectionReveal>

          <div className="max-w-3xl mx-auto space-y-0">
            {kyc_steps.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="group flex gap-7 py-7 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500">
                  <span className="font-mono text-[10px] tracking-widest text-copper/40 pt-0.5 min-w-[2rem] group-hover:text-copper/60 transition-colors">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-white/90 mb-1.5 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-steel text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <div className="border-t border-white/[0.05]" />
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel>Governance Framework</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight mb-14 leading-tight">
              Governance Principles
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {principles.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="bg-navy p-8 lg:p-10 hover:bg-charcoal/60 transition-all duration-500 group">
                  <p.icon className="w-5 h-5 text-copper/50 mb-5 group-hover:text-copper transition-colors" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-bold text-white mb-2.5 tracking-tight">{p.title}</h3>
                  <p className="text-steel text-sm leading-[1.8] font-light">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Begin the Qualification Process"
        subtitle="Initiate a conversation with our compliance team to begin the counterparty onboarding process."
      />
    </div>
  );
}