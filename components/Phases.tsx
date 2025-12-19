import React from 'react';
import { Check } from 'lucide-react';
import { Phase } from '../types';

const phasesData: Phase[] = [
  {
    id: 1,
    week: "Week 1",
    title: "Phase 1 — Discovery & Research",
    description: "Before sending a single email, we obsess over your market. Most agencies skip this. We spend an entire week on it because targeting is everything.",
    items: [
      "Define ICP down to titles/pains",
      "Analyze messaging gaps",
      "Calculate addressable market",
      "Identify real intent signals"
    ]
  },
  {
    id: 2,
    week: "Week 1–2",
    title: "Phase 2 — Infrastructure Setup",
    description: "Emails don’t convert if they don’t land. We build the foundation most outbound fails to build.",
    items: [
      "Multiple sending domains",
      "SPF, DKIM, DMARC Config",
      "Strategic inbox warm-up",
      "Bounce rate under 2%"
    ]
  },
  {
    id: 3,
    week: "Week 2–3",
    title: "Phase 3 — Lead Intelligence & Scoring",
    description: "We don’t chase random leads. Every lead is scored before outreach begins. If they’re not a buyer — they don’t get emailed.",
    items: [
      "Firmographic fit",
      "Hiring/Funding signals",
      "Decision-maker validation"
    ]
  },
  {
    id: 4,
    week: "Week 3–4",
    title: "Phase 4 — Campaign Creation & Launch",
    description: "We write multiple campaign angles. No hype. No gimmicks. Just clean, effective outbound.",
    items: [
      "Pain-driven messaging",
      "Short, conversational sequences",
      "LinkedIn touchpoints",
      "A/B testing copy & CTAs"
    ]
  },
  {
    id: 5,
    week: "Week 4–12",
    title: "Phase 5 — Optimization & Scale",
    description: "By day 90, you have a predictable outbound engine.",
    items: [
      "Scale winning campaigns",
      "Kill underperforming angles",
      "Refine targeting",
      "Optimize for booked calls"
    ]
  }
];

export const Phases: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-16 uppercase tracking-tight text-center">
          The 5-Phase System Behind<br /><span className="text-brand-yellow">Your 30 Guaranteed Calls</span>
        </h2>

        <div id="phases-container" className="relative border-l border-white/10 ml-4 md:ml-10 space-y-16">
          {phasesData.map((phase, index) => {
            return (
              <div 
                key={phase.id}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Dot */}
                <div 
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-yellow z-10"
                ></div>
                
                {/* Week */}
                <span 
                  className="font-mono text-sm uppercase tracking-wider mb-2 block text-brand-yellow"
                >
                  {phase.week}
                </span>
                
                {/* Title */}
                <h3 
                  className="text-2xl md:text-3xl font-semibold mb-4 text-white"
                >
                  {phase.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-lg mb-6 text-zinc-400"
                >
                  {phase.description}
                </p>
                
                {/* List */}
                <ul className="grid md:grid-cols-2 gap-3 text-lg">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check 
                        className="w-4 h-4 text-brand-yellow" 
                      /> 
                      <span 
                        className="text-zinc-400"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};