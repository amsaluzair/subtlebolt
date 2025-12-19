import React from 'react';
import { BackgroundBeams } from './BackgroundBeams';
import { Sparkles, Play, CalendarCheck2, X } from 'lucide-react';


export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Top Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-yellow/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

        {/* Volumetric Rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Ray */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[100%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_25%,transparent_45%,rgba(250,204,21,0.06)_50%,transparent_55%)] blur-[80px]"></div>
          {/* Secondary Ray Left */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[100%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_20%,transparent_40%,rgba(255,255,255,0.02)_45%,transparent_50%)] blur-[60px] rotate-[-15deg]"></div>
          {/* Secondary Ray Right */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[100%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_20%,transparent_50%,rgba(255,255,255,0.02)_55%,transparent_60%)] blur-[60px] rotate-[15deg]"></div>
        </div>

        {/* Grid Pattern */}
        {/* Grid Pattern and Beams */}
        <BackgroundBeams />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-sm font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Cold Email System</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.9] mb-6 drop-shadow-2xl">
          We’ll Book <span className="text-brand-yellow">30+ Qualified</span> <br className="hidden md:block" /> Sales Calls In 90 Days
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Using AI-Powered Cold Email… Or You Don’t Pay A Dime.
        </p>

        {/* VSL Placeholder (Video) */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-brand-yellow/5 mb-12 group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <p className="text-white font-semibold text-lg">How We Automate Your Outbound Revenue</p>
          </div>
          {/* Mock scanlines overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10"></div>
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        </div>

        {/* Bullet Points */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-medium text-zinc-300 mb-10">
          <div className="flex items-center gap-2">
            <X className="text-red-500 w-5 h-5" /> No templates
          </div>
          <div className="flex items-center gap-2">
            <X className="text-red-500 w-5 h-5" /> No guesswork
          </div>
          <div className="flex items-center gap-2">
            <X className="text-red-500 w-5 h-5" /> No “spray and pray”
          </div>
        </div>

        <p className="text-xl text-white max-w-2xl mx-auto mb-10">
          Just a done-for-you outbound system that fills your pipeline with decision-makers who actually want to talk.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <a href="#book" className="bg-brand-yellow hover:bg-yellow-400 text-brand-black text-xl font-semibold py-5 px-10 rounded-lg w-full md:w-auto transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/20 flex items-center justify-center gap-3">
            <CalendarCheck2 className="w-6 h-6" />
            Book Your Strategy Call
          </a>
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-2 animate-pulse"></span>
            Limited to 5 new clients per month
          </p>
        </div>
      </div>
    </section>
  );
};