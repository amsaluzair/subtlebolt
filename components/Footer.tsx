import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center">
      <div className="flex items-center justify-center gap-1 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300 group cursor-pointer">
        <span className="font-display text-xl tracking-wide text-white uppercase mt-1">Subtle</span>
        <Zap className="w-5 h-5 text-brand-yellow fill-brand-yellow group-hover:fill-brand-yellow" />
        <span className="font-display text-xl tracking-wide text-white uppercase mt-1">Bolt</span>
      </div>
      <p className="text-zinc-600 text-sm">© 2025 SubtleBolt. All rights reserved.</p>
    </footer>
  );
};