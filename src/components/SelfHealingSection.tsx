import React, { useState } from 'react';
import { Check, Eye, ShieldCheck, Undo2, AlertOctagon, RotateCcw, FileCode, CheckCircle2 } from 'lucide-react';
import { HealingTask } from '../types';
import confetti from 'canvas-confetti';

interface SelfHealingSectionProps {
  tasks: HealingTask[];
  onApproveTask: (taskId: string) => void;
  onRollbackAll: () => void;
  onViewDiff: (task: HealingTask) => void;
  killSwitchActive: boolean;
  onToggleKillSwitch: () => void;
}

export const SelfHealingSection: React.FC<SelfHealingSectionProps> = ({
  tasks,
  onApproveTask,
  onRollbackAll,
  onViewDiff,
  killSwitchActive,
  onToggleKillSwitch,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApprove = (task: HealingTask) => {
    if (killSwitchActive) {
      setToastMessage('Kill switch is active! Disengage kill switch to approve changes.');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6, x: 0.7 },
      colors: ['#00FF85', '#00F0FF', '#ffffff'],
    });

    onApproveTask(task.id);
    setToastMessage(`Approved & validated fix for: ${task.title}`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRollback = () => {
    onRollbackAll();
    setToastMessage('1-Click Rollback executed: all pending live patches restored to pre-flight snapshots.');
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section className="py-24 bg-[#080C10] border-b border-[#17222B]/40 relative" id="self-healing">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E141B] border border-[#00FF85] text-slate-100 px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 font-mono text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#00FF85] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase">
              MODULE 12 • AUTOMATION &amp; SELF-HEALING
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              It fixes itself. You stay in charge.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              The agent detects issues, proposes fixes and applies them through risk-tiered healing. Safe changes apply automatically; anything moderate or high-risk waits for your click — and every action is reversible.
            </p>

            {/* Feature points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Approval gate, default ON</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Anything that goes live waits for a human. Safe-tier tweaks like metadata can auto-apply — you set the line.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Dry-run first</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    New healing rules start report-only. See exactly what the agent would change before it ever touches the site.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Post-fix validation</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    After every fix, a re-fetch confirms the change is live and correct — no silent failures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <Undo2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">1-click rollback</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    More people can undo than do. Every change keeps a before/after snapshot, revertible in one click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Healing Queue Terminal UI */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#0E141B] border border-[#17222B]/90 overflow-hidden shadow-2xl">
              {/* Window top */}
              <div className="px-4 py-3 bg-[#0A0F14] border-b border-[#17222B]/80 flex items-center justify-between">
                <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-[#00FF85] font-semibold">HEALING QUEUE</span> • TRY IT
                  {killSwitchActive && (
                    <span className="text-[10px] text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/40 animate-pulse">
                      HALTED
                    </span>
                  )}
                </div>

                <button
                  onClick={onToggleKillSwitch}
                  className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    killSwitchActive
                      ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20'
                  }`}
                  title={killSwitchActive ? 'Click to re-enable automated self-healing' : 'Emergency freeze all automated fixes'}
                >
                  <AlertOctagon className="w-3 h-3" />
                  <span>{killSwitchActive ? 'RESUME ENGINE' : 'KILL SWITCH'}</span>
                </button>
              </div>

              {/* Queue tasks */}
              <div className="p-5 space-y-3.5 font-mono text-xs">
                {tasks.map((task) => {
                  const isApproved = task.status === 'approved' || task.status === 'applied';

                  return (
                    <div
                      key={task.id}
                      className={`p-3.5 rounded-lg border transition-all ${
                        isApproved
                          ? 'bg-[#0B0F14] border-[#00FF85]/30'
                          : 'bg-[#0B0F14]/90 border-[#17222B] hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              task.tier === 'safe'
                                ? 'bg-emerald-500/20 text-[#00FF85] border-emerald-500/30'
                                : task.tier === 'moderate'
                                ? 'bg-teal-500/20 text-cyan-300 border-teal-500/30'
                                : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                            }`}
                          >
                            {task.tier.toUpperCase()}
                          </span>

                          <button
                            onClick={() => onViewDiff(task)}
                            className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 underline underline-offset-2 cursor-pointer"
                          >
                            <FileCode className="w-3 h-3" />
                            Diff
                          </button>
                        </div>

                        {task.tier === 'safe' || isApproved ? (
                          <span className="text-[10px] text-[#00FF85] flex items-center gap-1.5 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse"></span>
                            {isApproved ? 'APPROVED & VALIDATED' : 'APPLIED / VALIDATING...'}
                          </span>
                        ) : (
                          <button
                            onClick={() => handleApprove(task)}
                            disabled={killSwitchActive}
                            className={`px-3 py-1 rounded font-bold text-[10px] transition-all cursor-pointer ${
                              killSwitchActive
                                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                : 'bg-[#00FF85] hover:bg-[#00E577] text-[#070A0D] shadow-[0_0_12px_rgba(0,255,133,0.3)]'
                            }`}
                          >
                            Approve &amp; apply
                          </button>
                        )}
                      </div>

                      <div className="font-semibold text-white text-xs">{task.title}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{task.description}</div>
                    </div>
                  );
                })}

                {/* Footer Bar in Card */}
                <div className="pt-3 border-t border-[#17222B]/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">BEFORE/AFTER SNAPSHOT KEPT FOR EVERY FIX</span>
                  <button
                    onClick={handleRollback}
                    className="text-slate-300 hover:text-white flex items-center gap-1 font-bold cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rollback all</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
