import React from 'react';

export const Ticker: React.FC = () => {
  const items = [
    { label: 'CONTENT DECAY DETECTION', color: 'bg-[#00FF85]' },
    { label: 'COMPETITOR GAP ANALYSIS', color: 'bg-cyan-400' },
    { label: 'AI OUTREACH PERSONALIZATION', color: 'bg-[#00FF85]' },
    { label: 'LOCAL MAP-PACK TRACKING', color: 'bg-[#00FF85]' },
    { label: 'TIERED SELF-HEALING', color: 'bg-cyan-400' },
    { label: 'CANONICAL ANOMALY CRAWL', color: 'bg-[#00FF85]' },
    { label: 'ZERO-HALLUCINATION PROOF', color: 'bg-cyan-400' },
    { label: '1-CLICK INSTANT ROLLBACK', color: 'bg-[#00FF85]' },
  ];

  return (
    <div className="w-full bg-[#080C0F] border-b border-[#17222B]/60 py-3.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-xs font-mono tracking-wider text-slate-400 flex items-center gap-8">
        {/* First set */}
        {items.map((item, index) => (
          <React.Fragment key={`ticker-1-${index}`}>
            <span className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color}`}></span>
              {item.label}
            </span>
            <span className="text-slate-600">•</span>
          </React.Fragment>
        ))}

        {/* Duplicate for infinite seamless marquee loop */}
        {items.map((item, index) => (
          <React.Fragment key={`ticker-2-${index}`}>
            <span className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color}`}></span>
              {item.label}
            </span>
            <span className="text-slate-600">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
