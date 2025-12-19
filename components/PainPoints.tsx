import React from 'react';
import { AlertOctagon, Flame, Users, Quote } from 'lucide-react';
import { PainPoint } from '../types';

const points: PainPoint[] = [
  {
    title: "You’re stuck playing the volume game",
    description: "Your team is sending thousands of emails, hoping something lands — instead of running a system that consistently creates real conversations.",
    icon: AlertOctagon
  },
  {
    title: 'You tried the “gurus” and recycled templates',
    description: "Open rates dropped. Replies slowed to a trickle. And your domain reputation took the hit for it.",
    icon: Flame
  },
  {
    title: "Your SDRs are booking the wrong meetings",
    description: "They promised pipeline — but delivered calls with people who were never a fit and were never going to buy.",
    icon: Users
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 bg-brand-gray/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-16 uppercase tracking-tight text-center">Let’s Be Honest…</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col gap-6 p-8 rounded-2xl border border-white/5 bg-brand-black hover:border-white/10 transition-colors group">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-105 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-lg text-zinc-400 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Redesigned Subtle Quote */}
        <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="w-12 h-12 text-zinc-700 mx-auto mb-6 opacity-50" />
            <p className="font-display text-2xl md:text-4xl text-zinc-400 uppercase tracking-wide leading-tight">
              "Every day you don’t have a working outbound system is <span className="text-white border-b border-brand-yellow/40 pb-1">money left on the table</span>."
            </p>
        </div>
      </div>
    </section>
  );
};