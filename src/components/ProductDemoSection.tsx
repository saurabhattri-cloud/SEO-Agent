import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, ShieldCheck, Zap, BarChart2 } from 'lucide-react';

export const ProductDemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 167; // 2:47 in seconds

  const chapters = [
    { start: 0, title: 'Headless Crawl Engine', desc: 'Scanning 1,240 URLs with JavaScript rendering' },
    { start: 42, title: 'Anomaly & Issue Discovery', desc: 'Flagging canonical drop and orphan link depth' },
    { start: 78, title: 'Human Governance Gate', desc: 'Escalating high-risk content rewrites to SEO Lead' },
    { start: 112, title: 'Live Self-Healing', desc: 'Deploying edge fix with HTTP 200 validation' },
    { start: 150, title: 'Audit Ledger & Executive Report', desc: 'Recording SHA-256 hash & issuing board PDF' },
  ];

  const currentChapter =
    chapters.slice().reverse().find((c) => currentTime >= c.start) || chapters[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  return (
    <section className="py-24 bg-[#080C10] border-b border-[#17222B]/40" id="demo">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase mb-2">
          PRODUCT DEMO
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          See SEO Agent in action.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Two minutes is all it takes — watch a crawl find issues, apply governed fixes and roll a report off the line.
        </p>

        {/* Video Mockup Player Container */}
        <div className="mt-10 relative rounded-2xl overflow-hidden bg-[#0E141B] border border-[#17222B] shadow-2xl group text-left">
          <div className="aspect-video relative bg-gradient-to-tr from-slate-950 via-slate-900 to-[#0c1a16] flex flex-col justify-between p-6">
            {/* Top Video Header */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-20">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#00FF85] animate-ping' : 'bg-[#00FF85]'}`}></span>
                DEMO WALKTHROUGH
              </span>
              <span className="text-slate-400">SEO Command Center</span>
            </div>

            {/* Dashboard Visualizer / Simulation inside Video */}
            <div className="relative z-10 mx-auto w-full max-w-3xl my-auto p-4 sm:p-6 rounded-xl border border-[#17222B]/70 bg-[#070A0D]/85 backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                {/* Left Telemetry Column */}
                <div className="border-b sm:border-b-0 sm:border-r border-[#17222B] pb-3 sm:pb-0 sm:pr-4 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>STAGE</span>
                    <span className="text-[#00FF85] font-bold">
                      {isPlaying ? 'ACTIVE' : 'READY'}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white">{currentChapter.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono leading-relaxed">
                    {currentChapter.desc}
                  </div>
                </div>

                {/* Center Gauge */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="relative w-20 h-20 rounded-full border-2 border-[#00FF85] flex flex-col items-center justify-center text-[#00FF85] font-bold shadow-[0_0_20px_rgba(0,255,133,0.3)] bg-[#00FF85]/5">
                    <span className="text-2xl font-black text-white">94</span>
                    <span className="text-[9px] font-mono text-slate-400 -mt-1">SCORE</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-2 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#00FF85]" />
                    <span>Governed &amp; Clean</span>
                  </div>
                </div>

                {/* Right Telemetry Column */}
                <div className="border-t sm:border-t-0 sm:border-l border-[#17222B] pt-3 sm:pt-0 sm:pl-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Live Crawl</span>
                    <span className="text-white">1,240 / 1,240</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#00FF85] h-1.5 transition-all duration-300"
                      style={{ width: `${Math.min(100, Math.floor((currentTime / totalDuration) * 100))}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Approval Gate</span>
                    <span className="text-[#00FF85]">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Big Play Button (Overlayed when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <button
                  onClick={handlePlayToggle}
                  className="pointer-events-auto w-20 h-20 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white flex items-center justify-center pl-1 shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:scale-110 transition-transform duration-300 cursor-pointer"
                  aria-label="Play video walkthrough"
                >
                  <Play className="w-8 h-8 fill-current" />
                </button>
              </div>
            )}

            {/* Bottom Video Controls Bar */}
            <div className="relative z-20 space-y-2">
              {/* Progress Bar / Scrubber */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayToggle}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <input
                  type="range"
                  min="0"
                  max={totalDuration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 accent-[#00FF85] bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />

                <span className="text-xs font-mono text-slate-300 shrink-0">
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </span>

                <button
                  onClick={() => setCurrentTime(0)}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Replay from start"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Labels */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                <span className="text-white font-medium flex items-center gap-2">
                  <span>Watch: SEO Agent in action</span>
                  <span className="text-[#00FF85] text-[10px] bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20">
                    Chapter: {currentChapter.title}
                  </span>
                </span>
                <span>2:47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
