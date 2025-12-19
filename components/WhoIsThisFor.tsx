import React from 'react';
import { CheckCircle, XCircle, Check, X } from 'lucide-react';

export const WhoIsThisFor: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Is For You */}
          <div className="space-y-6 text-center">
            <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-tight flex items-center justify-center gap-3">
              <CheckCircle className="text-brand-yellow w-8 h-8" />
              This Is For You If:
            </h3>
            <ul className="space-y-4 text-left max-w-sm mx-auto">
              <li className="flex gap-4 items-start text-lg text-zinc-400">
                <Check className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                You sell a proven B2B service or product
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-400">
                <Check className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                Your deal size is worth $3k+ per sale
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-400">
                <Check className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                You want predictable pipeline — not referrals and hope
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-400">
                <Check className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                You value systems over hacks
              </li>
            </ul>
          </div>

          {/* Is NOT For You */}
          <div className="space-y-6 text-center">
            <h3 className="font-display text-3xl text-zinc-500 mb-6 uppercase tracking-tight flex items-center justify-center gap-3">
              <XCircle className="text-zinc-600 w-8 h-8" />
              This Is NOT For You If:
            </h3>
            <ul className="space-y-4 text-left max-w-sm mx-auto">
              <li className="flex gap-4 items-start text-lg text-zinc-500">
                <X className="text-zinc-600 w-6 h-6 shrink-0 mt-1" />
                You’re brand new with no offer
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-500">
                <X className="text-zinc-600 w-6 h-6 shrink-0 mt-1" />
                You sell low-ticket products
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-500">
                <X className="text-zinc-600 w-6 h-6 shrink-0 mt-1" />
                You want instant results without setup
              </li>
              <li className="flex gap-4 items-start text-lg text-zinc-500">
                <X className="text-zinc-600 w-6 h-6 shrink-0 mt-1" />
                You’re looking for “email blasts”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};