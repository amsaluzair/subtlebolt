import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="book" className="py-24 px-6 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-block border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-8">
          Capacity Update: We Only Onboard 5 New Partners Per Month
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight leading-[0.9]">
          Ready to Turn Cold Email Into a <span className="text-brand-yellow">Predictable Channel?</span>
        </h2>

        <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed">
          Book a strategy call. We’ll map your ICP, pressure-test your offer, and show you exactly how we’d book 30+ sales calls for your business.
        </p>

        <a href="#" className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-yellow-400 text-brand-black text-xl font-semibold py-6 px-12 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-yellow/20">
          Book Your Strategy Call Now
          <ArrowRight className="w-6 h-6" />
        </a>

        <p className="mt-6 text-zinc-600 text-lg">
          If we’re not a fit — we’ll tell you.
        </p>
      </div>
    </section>
  );
};