import React from 'react';

export default function SectionLabel({ children, centered = false }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
      <div className="w-6 h-px bg-copper opacity-70" />
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-copper/80 font-medium">
        {children}
      </span>
    </div>
  );
}