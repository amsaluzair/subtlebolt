import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/5 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center border border-brand-yellow/30 bg-brand-black p-10 md:p-16 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-64 h-64 text-brand-yellow" />
        </div>
        
        <div className="relative z-10">
          <span className="text-brand-yellow font-display uppercase tracking-widest text-lg mb-4 block">Our Guarantee</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-8 uppercase tracking-tight">30 Calls or You Don’t Pay</h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            If we don’t book 30 qualified sales calls with your ICP within 90 days… <span className="text-white font-semibold underline decoration-brand-yellow decoration-2 underline-offset-4">You don’t pay us a dime.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-zinc-500 font-medium">
            <span>No excuses.</span>
            <span className="hidden md:inline">•</span>
            <span>No fine print.</span>
            <span className="hidden md:inline">•</span>
            <span>No “traffic quality” loopholes.</span>
          </div>
        </div>
      </div>
    </section>
  );
};