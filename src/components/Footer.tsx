import React from 'react';

interface FooterProps {
  onSelectModule: (moduleNumber: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectModule }) => {
  const modulesList = [
    { num: 1, label: 'M1 - Dashboards & Reporting' },
    { num: 2, label: 'M2 - Keyword Intelligence' },
    { num: 3, label: 'M3 - Rank Tracking' },
    { num: 4, label: 'M4 - Technical SEO' },
    { num: 5, label: 'M5 - On-Page SEO' },
    { num: 6, label: 'M6 - Content Intelligence' },
    { num: 7, label: 'M7 - Competitor Intelligence' },
    { num: 8, label: 'M8 - Link Building & Outreach' },
    { num: 9, label: 'M9 - Local SEO' },
    { num: 10, label: 'M10 - Analytics & GSC' },
    { num: 12, label: 'M12 - Self-Healing' },
    { num: 13, label: 'M13 - AI Assistant' },
    { num: 14, label: 'M14 - Workflows & SOPs' },
    { num: 15, label: 'M15 - Alerts & Monitoring' },
    { num: 16, label: 'M16 - Integrations' },
    { num: 17, label: 'M17 - Org & Settings' },
    { num: 18, label: 'M18 - Audit & Governance' },
  ];

  return (
    <footer className="bg-[#050709] border-t border-[#17222B]/80 pt-16 pb-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#17222B]/60">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-emerald-500/10 border border-[#00FF85]/40 flex items-center justify-center text-[#00FF85]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="font-bold text-base text-white tracking-tight">SEO Agent.</span>
            </div>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Autonomous AI SEO, governed by your team. Built for digital marketing teams and agencies that want to automate without losing control.
            </p>
          </div>

          {/* 18-Module Platform Index */}
          <div className="md:col-span-8">
            <div className="text-slate-300 font-bold uppercase tracking-wider mb-4">
              THE 18-MODULE PLATFORM
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 text-[11px] text-slate-500">
              {modulesList.map((m) => (
                <button
                  key={m.num}
                  onClick={() => onSelectModule(m.num)}
                  className="text-left hover:text-[#00FF85] transition-colors cursor-pointer truncate"
                  title={`View details for ${m.label}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2026 SEO Agent. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-[10px] tracking-widest uppercase">
            <span className="text-slate-400">HUMAN APPROVAL BY DEFAULT</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">1-CLICK ROLLBACK</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">IMMUTABLE AUDIT LOG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
