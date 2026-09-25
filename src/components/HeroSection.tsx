import React, { useState } from 'react';
import { ArrowRight, Check, Undo2, Play, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onBookDemo: () => void;
  onExploreCapabilities: () => void;
  onApproveHeroFix: () => void;
  heroFixApproved: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookDemo,
  onExploreCapabilities,
  onApproveHeroFix,
  heroFixApproved,
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(100);
  const [crawledUrls, setCrawledUrls] = useState(1240);

  const handleRunCrawl = () => {
    if (isScanning) return;
    setIsScanning(true);
    setCrawlProgress(15);
    
    const interval = setInterval(() => {
      setCrawlProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setCrawlProgress(100);
            setCrawledUrls((c) => c + 14);
          }, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  const handleApprove = () => {
    if (heroFixApproved) return;
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.4, x: 0.75 },
      colors: ['#00FF85', '#00F0FF', '#ffffff'],
    });
    onApproveHeroFix();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 glow-bg overflow-hidden border-b border-[#17222B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00FF85]/30 bg-[#00FF85]/5 text-[#00FF85] font-mono text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse"></span>
              AI SEO Automation Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Autonomous AI SEO. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] via-[#2feaa0] to-teal-200">
                Governed by your team.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              SEO Agent runs 18 integrated modules around the clock — keyword intelligence, technical crawls, content, outreach — and executes fixes through tiered self-healing with a human approval gate on anything that touches your live site.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#00FF85] text-[#070A0D] hover:bg-[#00E577] transition-all shadow-[0_0_25px_rgba(0,255,133,0.35)] hover:shadow-[0_0_35px_rgba(0,255,133,0.5)] cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreCapabilities}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-[#0E141B] hover:bg-[#0B0F14] border border-[#17222B] hover:border-slate-600 transition-all cursor-pointer"
              >
                <span>Explore capabilities</span>
              </button>
            </div>

            {/* Proof Chips */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 bg-[#0B0F14] px-3 py-1.5 rounded-md border border-[#17222B]/80">
                <span className="text-[#00FF85] font-bold">18</span> integrated modules
              </div>
              <div className="flex items-center gap-2 bg-[#0B0F14] px-3 py-1.5 rounded-md border border-[#17222B]/80">
                <Check className="w-3.5 h-3.5 text-[#00FF85] stroke-[2.5]" />
                Human approval by default
              </div>
              <div className="flex items-center gap-2 bg-[#0B0F14] px-3 py-1.5 rounded-md border border-[#17222B]/80">
                <Undo2 className="w-3.5 h-3.5 text-[#00FF85] stroke-[2.5]" />
                1-click rollback
              </div>
            </div>
          </div>

          {/* Hero Terminal / Dashboard Graphic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#0E141B] border border-[#17222B]/90 shadow-2xl overflow-hidden glow-subtle">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0F14] border-b border-[#17222B]/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400 tracking-wider">SEO COMMAND CENTER</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunCrawl}
                    disabled={isScanning}
                    className="flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/40 hover:bg-slate-800 transition-colors"
                    title="Simulate quick crawl"
                  >
                    <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin text-[#00FF85]' : ''}`} />
                    <span>{isScanning ? 'Crawling...' : 'Trigger Crawl'}</span>
                  </button>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#00FF85] bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-ping"></span>
                    LIVE
                  </div>
                </div>
              </div>

              {/* Crawl progress bar if scanning */}
              {isScanning && (
                <div className="w-full bg-slate-900 h-1">
                  <div
                    className="bg-[#00FF85] h-1 transition-all duration-300"
                    style={{ width: `${crawlProgress}%` }}
                  ></div>
                </div>
              )}

              {/* Dashboard Body Preview */}
              <div className="p-5 space-y-5 font-mono text-xs">
                {/* Score Metric Card */}
                <div className="bg-[#0B0F14]/90 border border-[#17222B] p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full border-2 border-[#00FF85] flex items-center justify-center text-xl font-bold text-white shadow-[0_0_15px_rgba(0,255,133,0.3)] bg-[#00FF85]/5">
                      94
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">ORGANIC CLICKS - 30 DAYS</div>
                      <div className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
                        +18.2%
                        <span className="text-[10px] text-[#00FF85]">▲ 24.3k</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">GSC + GA4 synced</div>
                    </div>
                  </div>
                  {/* Mini sparkline mockup */}
                  <div className="w-20 h-8 flex items-end gap-1">
                    <span className="w-2 bg-[#00FF85]/20 h-3 rounded-t-sm"></span>
                    <span className="w-2 bg-[#00FF85]/30 h-4 rounded-t-sm"></span>
                    <span className="w-2 bg-[#00FF85]/40 h-5 rounded-t-sm"></span>
                    <span className="w-2 bg-[#00FF85]/60 h-6 rounded-t-sm"></span>
                    <span className="w-2 bg-[#00FF85] h-8 rounded-t-sm shadow-[0_0_8px_rgba(0,255,133,0.4)]"></span>
                  </div>
                </div>

                {/* Automation Feed */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                    <span>AUTOMATION FEED</span>
                    <span className="text-slate-500 font-normal">Real-time webhook</span>
                  </div>
                  <div className="space-y-2">
                    {/* Feed Item 1 */}
                    <div className="p-2.5 bg-[#0B0F14]/60 rounded border border-[#17222B]/60 flex items-start gap-2.5 transition-colors hover:border-[#17222B]">
                      <div className="w-2 h-2 rounded-full bg-[#00FF85] mt-1 shrink-0"></div>
                      <div className="text-[11px] text-slate-300">
                        <span className="text-slate-400">Rendered crawl complete —</span> {crawledUrls.toLocaleString()} URLs scanned{' '}
                        <span className="text-slate-500">(M4)</span>
                      </div>
                    </div>

                    {/* Feed Item 2 */}
                    <div className="p-2.5 bg-[#0B0F14]/60 rounded border border-[#17222B]/60 flex items-start gap-2.5 transition-colors hover:border-[#17222B]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 shrink-0"></div>
                      <div className="text-[11px] text-slate-300">
                        <span className="text-cyan-400">Auto-applied:</span> meta description on /pricing{' '}
                        <span className="text-slate-500">(Safe-tier)</span>
                      </div>
                    </div>

                    {/* Feed Item 3 */}
                    <div className="p-2.5 bg-[#0B0F14]/60 rounded border border-[#17222B]/60 flex items-start gap-2.5 transition-colors hover:border-[#17222B]">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></div>
                      <div className="text-[11px] text-slate-300">
                        "local seo tool" moved <span className="text-amber-300">#17 -&gt; #4</span>{' '}
                        <span className="text-slate-500">(M3 rank tracking)</span>
                      </div>
                    </div>

                    {/* Feed Item 4 - Approval requested */}
                    <div
                      className={`p-3 rounded border transition-all ${
                        heroFixApproved
                          ? 'bg-[#00FF85]/10 border-[#00FF85]/40'
                          : 'bg-[#0B0F14]/90 border-amber-500/30'
                      } flex items-center justify-between gap-2`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                            heroFixApproved ? 'bg-[#00FF85]' : 'bg-amber-500 animate-pulse'
                          }`}
                        ></div>
                        <div className="text-[11px] text-slate-200">
                          {heroFixApproved ? (
                            <span className="text-[#00FF85]">
                              Content rewrite on / — <strong>Approved by you</strong> (Validated 200 OK)
                            </span>
                          ) : (
                            <>
                              Content rewrite on / — <span className="text-amber-400">needs your sign-off</span>{' '}
                              <span className="text-slate-500">(High risk)</span>
                            </>
                          )}
                        </div>
                      </div>

                      {heroFixApproved ? (
                        <span className="shrink-0 flex items-center gap-1 text-[10px] text-[#00FF85] font-mono px-2 py-0.5 bg-[#00FF85]/20 rounded border border-[#00FF85]/30">
                          <CheckCircle2 className="w-3 h-3" />
                          Applied
                        </span>
                      ) : (
                        <button
                          onClick={handleApprove}
                          className="shrink-0 px-2.5 py-1 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[10px] transition-colors cursor-pointer shadow-sm hover:shadow"
                        >
                          Approve fix
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
