import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function CTABanner({
  title = 'Ready to Begin a Conversation?',
  subtitle = 'Our team is prepared to discuss your commodity requirements, provide documentation, and initiate the counterparty qualification process.',
  ctaText = 'Submit Inquiry',
  ctaLink = '/contact'
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal border-t border-white/[0.04]">
      {/* Copper line accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/25 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-px bg-copper/60" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-copper/70">Engage</span>
              <div className="w-6 h-px bg-copper/60" />
            </div>
            <h2 className="font-display text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-snug mb-4">
              {title}
            </h2>
            <p className="text-steel text-sm leading-relaxed mb-10 font-light max-w-lg mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-copper text-white text-xs tracking-[0.14em] uppercase font-medium hover:bg-copper-light transition-all duration-300 group"
              >
                {ctaText}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/investor"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/12 text-steel text-xs tracking-[0.14em] uppercase font-medium hover:border-copper/40 hover:text-white transition-all duration-300"
              >
                Corporate Profile
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}