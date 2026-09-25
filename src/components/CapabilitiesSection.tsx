import React, { useState } from 'react';
import {
  BarChart3,
  Code2,
  Search,
  TrendingUp,
  ShieldAlert,
  FileEdit,
  Link2,
  MapPin,
  LineChart,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { ModuleInfo } from '../types';

interface CapabilitiesSectionProps {
  onSelectModule: (moduleNumber: number) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectModule }) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const barData = [
    { label: 'Jan', val: 30, clicks: '14.2k' },
    { label: 'Feb', val: 45, clicks: '18.9k' },
    { label: 'Mar', val: 38, clicks: '16.5k' },
    { label: 'Apr', val: 68, clicks: '22.1k' },
    { label: 'May', val: 92, clicks: '28.4k' },
    { label: 'Jun', val: 84, clicks: '26.8k' },
  ];

  return (
    <section className="py-24 bg-[#070A0D] relative border-b border-[#17222B]/40" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase mb-2">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything SEO. One governed engine.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Every critical SEO pillar, built as a module of a single platform — so research, fixes and reporting finally live in one place.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Dashboards & Reporting (#1) */}
          <div
            onClick={() => onSelectModule(1)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <BarChart3 className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #1
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Dashboards &amp; Reporting
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Website health score, organic traffic, CTR and keyword visibility on one explainable dashboard — with scheduled reports and white-label PDF/CSV export for clients and executives.
              </p>
            </div>

            {/* Interactive Mockup bar graph */}
            <div className="mt-6 pt-4 border-t border-[#17222B]/60">
              <div className="flex items-end gap-1.5 h-12 relative">
                {barData.map((b, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredBarIndex(idx)}
                    onMouseLeave={() => setHoveredBarIndex(null)}
                    style={{ height: `${b.val}%` }}
                    className={`flex-1 rounded-t transition-all duration-200 cursor-pointer ${
                      idx >= 4
                        ? 'bg-[#00FF85] shadow-[0_0_8px_rgba(0,255,133,0.4)]'
                        : idx >= 3
                        ? 'bg-emerald-600/80 hover:bg-emerald-500'
                        : idx >= 1
                        ? 'bg-emerald-800/80 hover:bg-emerald-700'
                        : 'bg-emerald-950/80 hover:bg-emerald-900'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1.5">
                <span>Jan</span>
                <span>Jun (+88% YoY)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Technical SEO (#4) */}
          <div
            onClick={() => onSelectModule(4)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <Code2 className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #4
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Technical SEO
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Full rendered crawls surface broken links, redirect loops, canonical conflicts and orphan pages before Google does — plus Core Web Vitals and page-speed monitoring.
              </p>
            </div>

            {/* Indicator tags preview */}
            <div className="mt-6 pt-4 border-t border-[#17222B]/60 grid grid-cols-4 gap-1.5 font-mono text-[9px] text-center">
              <span className="bg-rose-500/20 text-rose-300 py-1 rounded border border-rose-500/30">404 LOOP</span>
              <span className="bg-[#0B0F14] text-slate-400 py-1 rounded border border-[#17222B]">200 OK</span>
              <span className="bg-emerald-500/20 text-emerald-300 py-1 rounded border border-emerald-500/30">CANONICAL</span>
              <span className="bg-amber-500/20 text-amber-300 py-1 rounded border border-amber-500/30">CWV PASS</span>
            </div>
          </div>

          {/* Card 3: Keyword Intelligence (#2) */}
          <div
            onClick={() => onSelectModule(2)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <Search className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #2
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Keyword Intelligence
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Volume, difficulty and intent classification with AI clustering, cannibalization detection and keyword-to-URL mapping.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#17222B] text-slate-300">
                Intent: High-Commercial
              </span>
              <span className="text-[#00FF85] font-bold">3.4k Vol</span>
            </div>
          </div>

          {/* Card 4: Rank Tracking (#3) */}
          <div
            onClick={() => onSelectModule(3)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <TrendingUp className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #3
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Rank Tracking
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Daily position checks, SERP-feature tracking, device and location segmentation, share-of-voice and instant ranking alerts.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60">
              <svg className="w-full h-8 text-[#00FF85]" fill="none" viewBox="0 0 200 40">
                <path
                  d="M0 35 L40 28 L80 30 L120 15 L160 18 L200 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                ></path>
                <circle cx="200" cy="5" r="3" fill="#00FF85" className="animate-ping" />
              </svg>
              <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                <span>Pos #17</span>
                <span className="text-[#00FF85] font-bold">Current: #1</span>
              </div>
            </div>
          </div>

          {/* Card 5: Competitor Intelligence (#7) */}
          <div
            onClick={() => onSelectModule(7)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <ShieldAlert className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #7
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Competitor Intelligence
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Track rivals' keywords, backlinks and traffic — get alerted the moment they gain ground or move into your terms.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-400">Rival domain delta</span>
              <span className="text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                -14 terms lost
              </span>
            </div>
          </div>

          {/* Card 6: Content Intelligence (#6) */}
          <div
            onClick={() => onSelectModule(6)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <FileEdit className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #6
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Content Intelligence
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Content audits, scoring, topic clusters and decay detection. AI drafts briefs, outlines and rewrites — all grounded in your data.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center gap-2 font-mono text-[10px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Cluster: Technical SEO Tools</span>
            </div>
          </div>

          {/* Card 7: Link Building & Outreach (#8) */}
          <div
            onClick={() => onSelectModule(8)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <Link2 className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #8
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Link Building &amp; Outreach
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Prospect discovery and qualification, AI-personalized campaigns with follow-ups, toxic link risk flags — disavow exports always stay human-submitted.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-400">Prospect pipeline</span>
              <span className="text-[#00FF85] font-bold bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20">
                24 Qualified
              </span>
            </div>
          </div>

          {/* Card 8: Local SEO (#9) */}
          <div
            onClick={() => onSelectModule(9)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #9
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Local SEO
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Map-pack tracking, NAP-consistency checks, Google Business Profile sync and review monitoring for every location.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-400">Map Pack Position</span>
              <span className="text-[#00FF85] font-bold bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20">
                #2 Overall
              </span>
            </div>
          </div>

          {/* Card 9: Analytics & GSC (#10) */}
          <div
            onClick={() => onSelectModule(10)}
            className="p-6 rounded-xl bg-[#0E141B]/90 border border-[#17222B] hover:border-[#233240] hover:shadow-[0_0_20px_rgba(0,255,133,0.1)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00FF85] flex items-center justify-center font-bold">
                  <LineChart className="w-4 h-4" />
                </span>
                <span className="text-slate-500 flex items-center gap-1 group-hover:text-[#00FF85] transition-colors">
                  #10
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#00FF85] transition-colors">
                Analytics &amp; GSC
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Search Console and GA4 sync out of the box — query, landing-page and conversion analysis with cross-source correlation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#17222B]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-400">Synced Data Streams</span>
              <span className="text-[#00FF85] font-bold bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20">
                2/2 Connected
              </span>
            </div>
          </div>
        </div>

        {/* Footnote Inside Modules Bar */}
        <div className="mt-8 p-4 rounded-xl bg-[#0B0F14]/70 border border-[#17222B] flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-[#00FF85] font-bold uppercase tracking-wider">ALSO INSIDE:</span>
          <button
            onClick={() => onSelectModule(5)}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            M5 - On-Page Optimization
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => onSelectModule(14)}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            M14 - Workflows &amp; SOPs
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => onSelectModule(15)}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            M15 - Slack / Teams / Email alerts
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => onSelectModule(16)}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            M16 - OAuth Integrations
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => onSelectModule(17)}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            M17 - Role-Based Workspaces
          </button>
        </div>
      </div>
    </section>
  );
};
