import React from 'react';
import { Server, Bot, PenTool, Linkedin, PhoneCall, Calendar, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray/20 border-y border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">Your Done-For-You <br /><span className="text-brand-yellow">AI Cold Email Machine</span></h2>
          <p className="text-xl text-zinc-400">We don’t just “send emails.” We engineer a complete outbound revenue system from scratch.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-brand-black border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-colors group">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
              <Server className="w-6 h-6 text-white group-hover:text-brand-yellow transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Bulletproof Infrastructure</h3>
            <p className="text-lg text-zinc-400">A fully built email setup that lands in primary inboxes — not spam.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-brand-black border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-colors group">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
              <Bot className="w-6 h-6 text-white group-hover:text-brand-yellow transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Research</h3>
            <p className="text-lg text-zinc-400">We identify prospects actively looking for what you sell using real buying signals.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-brand-black border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-colors group">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
              <PenTool className="w-6 h-6 text-white group-hover:text-brand-yellow transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Human-Sounding Copy</h3>
            <p className="text-lg text-zinc-400">Emails that feel personal, relevant, and worth replying to.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-brand-black border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-colors group">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
              <Linkedin className="w-6 h-6 text-white group-hover:text-brand-yellow transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Multi-Channel Warm-Up</h3>
            <p className="text-lg text-zinc-400">LinkedIn touches that warm prospects before the first email ever lands.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-brand-black border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-colors group">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
                <PhoneCall className="w-6 h-6 text-white group-hover:text-brand-yellow transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">30+ Qualified Sales Calls</h3>
            <p className="text-lg text-zinc-400">Booked directly on your calendar with real decision-makers. Predictable revenue.</p>
          </div>

          {/* Feature 6 (New CTA Card) */}
          <a href="#book" className="bg-brand-yellow/10 border border-brand-yellow/30 p-8 rounded-xl hover:bg-brand-yellow/20 transition-all group flex flex-col cursor-pointer relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-6 border border-brand-yellow/50 shadow-lg shadow-brand-yellow/20">
                    <Calendar className="w-6 h-6 text-brand-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Book Strategy Call</h3>
                <p className="text-lg text-zinc-400 mb-6">Ready to fill your pipeline? Schedule a time to chat with our team.</p>
                
                <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-wide text-sm mt-auto group-hover:gap-3 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </a>

        </div>
      </div>
    </section>
  );
};