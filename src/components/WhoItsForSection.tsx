import React, { useState } from 'react';
import { Monitor, Check, Users, Building2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export const WhoItsForSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inhouse' | 'agencies'>('inhouse');

  return (
    <section className="py-24 bg-[#070A0D] border-b border-[#17222B]/40" id="who-its-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase mb-2">
            WHO IT'S FOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for the teams doing the work.
          </h2>

          {/* Role Toggle Buttons */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-[#0B0F14] border border-[#17222B]">
            <button
              onClick={() => setActiveTab('inhouse')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'inhouse'
                  ? 'bg-[#00FF85] text-[#070A0D] shadow-[0_0_15px_rgba(0,255,133,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              In-House Teams
            </button>
            <button
              onClick={() => setActiveTab('agencies')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'agencies'
                  ? 'bg-[#00FF85] text-[#070A0D] shadow-[0_0_15px_rgba(0,255,133,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agencies
            </button>
          </div>
        </div>

        {/* Content Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0E141B]/50 border border-[#17222B]/80 rounded-2xl p-6 sm:p-10">
          {/* Visual preview / Laptop card */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#17222B] group">
            <div className="aspect-video bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/40 relative flex items-center justify-center p-6">
              {/* Grid overlay visual */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-[#00FF85]/40 flex items-center justify-center text-[#00FF85] shadow-[0_0_20px_rgba(0,255,133,0.3)] mb-4">
                  {activeTab === 'inhouse' ? (
                    <Monitor className="w-8 h-8 stroke-[1.8]" />
                  ) : (
                    <Building2 className="w-8 h-8 stroke-[1.8]" />
                  )}
                </div>
                <div className="font-mono text-sm font-semibold text-white">
                  {activeTab === 'inhouse'
                    ? 'One platform. Your whole SEO operation.'
                    : 'Multi-client power. Enterprise governance.'}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {activeTab === 'inhouse'
                    ? 'Autonomous workflows + enterprise controls'
                    : 'White-label portals + client sign-off gates'}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Bullets */}
          <div className="lg:col-span-6 space-y-4">
            {activeTab === 'inhouse' ? (
              <>
                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Kill manual audits</strong> — technical crawls run on schedule and issues heal through governed self-healing.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Scale content output without headcount</strong> — briefs, outlines, decay detection and AI drafts included.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Report ROI the board understands</strong> — scheduled dashboards straight from Search Console and GA4.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Stay brand-safe</strong> — nothing reaches the live site without an approval gate, and every change rolls back.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Manage 50+ client domains under one roof</strong> — isolated workspaces with custom branded client portals.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Scale deliverables 5x</strong> — automate routine audits, keyword clustering, and link vetting without adding headcount.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Automated white-label reporting</strong> — client-ready scheduled PDFs with your agency logo and custom domain.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#0B0F14]/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white font-semibold">Client approval gates</strong> — let clients review and sign-off high-impact changes with full audit trails.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
