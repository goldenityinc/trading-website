import React from 'react';

export default function CopperDivider() {
  return (
    <div className="flex items-center gap-3 my-8 lg:my-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      <div className="w-1.5 h-1.5 bg-copper rounded-full" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
    </div>
  );
}