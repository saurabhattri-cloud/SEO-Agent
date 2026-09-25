import React from 'react';
import { X, Check, FileCode, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { HealingTask } from '../types';

interface DiffModalProps {
  task: HealingTask | null;
  onClose: () => void;
  onApprove: (taskId: string) => void;
}

export const DiffModal: React.FC<DiffModalProps> = ({ task, onClose, onApprove }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0E141B] border border-[#17222B] rounded-2xl shadow-2xl overflow-hidden glow-subtle font-mono text-xs">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0A0F14] border-b border-[#17222B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                task.tier === 'safe'
                  ? 'bg-emerald-500/20 text-[#00FF85] border-emerald-500/30'
                  : task.tier === 'moderate'
                  ? 'bg-teal-500/20 text-cyan-300 border-teal-500/30'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
              }`}
            >
              {task.tier.toUpperCase()} TIER
            </span>
            <span className="text-white font-bold text-sm truncate">{task.title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>Target URL: <strong className="text-white">{task.url}</strong></span>
            <span>Impact: <span className="text-[#00FF85]">{task.impact}</span></span>
          </div>

          {/* Diff comparison blocks */}
          <div className="space-y-3">
            {/* Before */}
            <div className="space-y-1">
              <div className="text-[10px] text-rose-400 font-bold flex items-center gap-1">
                <span>- CURRENT LIVE STATE (BEFORE):</span>
              </div>
              <pre className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-lg text-rose-200 overflow-x-auto text-[11px] leading-relaxed">
                <code>{task.beforeSnippet || '<!-- Missing required metadata tags -->'}</code>
              </pre>
            </div>

            {/* After */}
            <div className="space-y-1">
              <div className="text-[10px] text-[#00FF85] font-bold flex items-center gap-1">
                <span>+ PROPOSED HEALED STATE (AFTER):</span>
              </div>
              <pre className="p-3 bg-emerald-950/20 border border-[#00FF85]/30 rounded-lg text-emerald-200 overflow-x-auto text-[11px] leading-relaxed">
                <code>{task.afterSnippet || '<!-- Healed configuration -->'}</code>
              </pre>
            </div>
          </div>

          <div className="bg-[#0B0F14] p-3 rounded-lg border border-[#17222B] text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Human sign-off required. Once approved, the change validates live via HTTP 200 re-fetch, and a reversible snapshot is stored in the audit ledger.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#17222B] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onApprove(task.id);
                onClose();
              }}
              className="px-5 py-2 rounded-lg bg-[#00FF85] hover:bg-[#00E577] text-black font-bold transition-all shadow-[0_0_15px_rgba(0,255,133,0.3)] flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>Approve &amp; Deploy Fix</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
