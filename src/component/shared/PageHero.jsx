import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
      {image ? (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-navy" />
      )}

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-14 lg:pb-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-copper opacity-70" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-copper/80">
              Meridian Global Trading
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.08] max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-steel text-sm md:text-base leading-relaxed max-w-xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}