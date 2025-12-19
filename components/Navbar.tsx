import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 group cursor-pointer">
          <span className="font-display text-3xl tracking-wide text-white uppercase mt-1">Subtle</span>
          <Zap className="w-8 h-8 text-brand-yellow fill-brand-yellow -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          <span className="font-display text-3xl tracking-wide text-white uppercase mt-1">Bolt</span>
        </div>

        <a 
          href="#book" 
          className="hidden md:flex items-center gap-2 text-lg font-medium text-white hover:text-brand-yellow transition-colors"
        >
          Strategy Call
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};