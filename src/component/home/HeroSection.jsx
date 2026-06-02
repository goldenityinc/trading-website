import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n.jsx';

const HERO_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/f9f5c92c3_generated_8e27970f.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Global commodity operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/97 via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      {/* Vertical rule */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/15 to-transparent hidden lg:block" style={{ left: 'calc(50% - 280px)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-[600px]">

          {/* Identity marker */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-copper opacity-60" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-copper/70">
              Meridian Global Trading
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.06]"
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left mt-7 mb-7 w-12 h-px bg-copper opacity-50"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-steel text-base leading-[1.8] max-w-[460px] font-light"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-copper text-white text-xs tracking-[0.16em] uppercase font-medium hover:bg-copper-light transition-all duration-300 group"
            >
              {t('hero.cta_inquiry')}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/investor"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/15 text-white/80 text-xs tracking-[0.16em] uppercase font-medium hover:border-white/30 hover:text-white transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              {t('hero.cta_profile')}
            </Link>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-14 flex items-center gap-3"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel/40">Offices</span>
            <div className="w-4 h-px bg-white/10" />
            <span className="font-mono text-[10px] tracking-wider text-steel/50">
              Geneva · Dubai · Singapore · Jakarta · Houston
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-copper/40 to-transparent" />
      </motion.div>
    </section>
  );
}