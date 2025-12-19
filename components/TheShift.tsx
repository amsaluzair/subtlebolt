import React from 'react';
import { ArrowRight, Trash2, EyeOff, Ban, CheckCircle2 } from 'lucide-react';

export const TheShift: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">The Cold Truth About Cold Email in 2025</h2>
            <p className="text-xl text-zinc-400 mb-8">The old playbook is dead. The companies winning today aren't sending <em className="text-white not-italic">more</em> emails. They're sending <em className="text-white not-italic">smarter</em> emails.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-lg text-zinc-400">
                <ArrowRight className="text-brand-yellow w-5 h-5" /> To the right people
              </li>
              <li className="flex items-center gap-3 text-lg text-zinc-400">
                 <ArrowRight className="text-brand-yellow w-5 h-5" /> At the right time
              </li>
              <li className="flex items-center gap-3 text-lg text-zinc-400">
                 <ArrowRight className="text-brand-yellow w-5 h-5" /> With the right message
              </li>
            </ul>

            <p className="text-lg text-white font-medium border-l-4 border-brand-yellow pl-4">
              They treat outbound like a system, not a slot machine. And that’s exactly what we build for you.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative">
            {/* Comparison Table */}
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-zinc-500 font-medium">Mass email blasts</span>
                <span className="text-red-400 flex items-center gap-2"><Trash2 className="w-4 h-4" /> Spam folder</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-zinc-500 font-medium">Generic templates</span>
                <span className="text-red-400 flex items-center gap-2"><EyeOff className="w-4 h-4" /> Ignored</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-zinc-500 font-medium">Buying static lists</span>
                <span className="text-red-400 flex items-center gap-2"><Ban className="w-4 h-4" /> Blacklisted</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white text-lg font-semibold">AI Intent Signals</span>
                <span className="text-brand-yellow flex items-center gap-2 font-semibold"><CheckCircle2 className="w-5 h-5" /> 30+ Calls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};