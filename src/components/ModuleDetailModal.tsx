import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { ModuleInfo } from '../types';

interface ModuleDetailModalProps {
  module: ModuleInfo | null;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onOpenDemo,
}) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0E141B] border border-[#17222B] rounded-2xl shadow-2xl overflow-hidden glow-subtle">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0A0F14] border-b border-[#17222B] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-[#00FF85]/30 text-[#00FF85] flex items-center justify-center font-mono font-bold text-xs">
              M{module.number}
            </span>
            <div>
              <h3 className="font-bold text-sm text-white">{module.name}</h3>
              <p className="text-[10px] font-mono text-slate-400">{module.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto font-mono text-xs">
          {/* Summary description */}
          <div className="bg-[#0B0F14] p-4 rounded-xl border border-[#17222B] space-y-2">
            <div className="text-[10px] text-[#00FF85] uppercase tracking-wider font-bold">
              ARCHITECTURE &amp; PURPOSE
            </div>
            <p className="text-slate-300 font-sans leading-relaxed text-xs">
              {module.description}
            </p>
          </div>

          {/* Stats Triad */}
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
              LIVE TELEMETRY
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {module.stats.map((s, idx) => (
                <div key={idx} className="p-3 bg-[#0B0F14] rounded-lg border border-[#17222B]">
                  <div className="text-[10px] text-slate-400">{s.label}</div>
                  <div className="text-base font-bold text-white mt-1">{s.value}</div>
                  {s.trend && (
                    <div className="text-[10px] text-[#00FF85] mt-0.5">{s.trend}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
              ENTERPRISE CAPABILITIES
            </div>
            <div className="space-y-2">
              {module.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#0B0F14]/60 rounded border border-[#17222B]/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF85] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-[11px] font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-2 border-t border-[#17222B] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400">
              Module {module.number} integrates with live GSC, GA4 and Self-Healing rules.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#00FF85] hover:bg-[#00E577] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>See in Action</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
