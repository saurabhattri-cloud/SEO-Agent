import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onBookDemo: () => void;
  spotsRemaining?: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookDemo, spotsRemaining = 14 }) => {
  return (
    <section className="py-24 bg-[#070A0D] relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,133,0.12)_0%,rgba(7,10,13,0)_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
        {/* Cohort Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00FF85]/40 bg-[#00FF85]/10 text-[#00FF85] font-mono text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-ping"></span>
          EARLY ACCESS — {spotsRemaining} SPOTS LEFT IN COHORT
        </div>

        {/* Big CTA Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Claim your spot. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] via-teal-300 to-cyan-400">
            Own the search results.
          </span>
        </h2>

        <p className="text-base text-slate-400 max-w-lg mx-auto">
          Marketing leadership is moving to see the full platform and reserve yours.
        </p>

        {/* Big CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[#00FF85] text-[#070A0D] hover:bg-[#00E577] transition-all shadow-[0_0_35px_rgba(0,255,133,0.45)] hover:shadow-[0_0_45px_rgba(0,255,133,0.6)] cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
