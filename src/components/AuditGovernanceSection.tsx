import React, { useState } from 'react';
import { Lock, FileCheck2, History, Download, Copy, Check } from 'lucide-react';
import { AuditLogEntry } from '../types';

interface AuditGovernanceSectionProps {
  logs: AuditLogEntry[];
}

export const AuditGovernanceSection: React.FC<AuditGovernanceSectionProps> = ({ logs }) => {
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(logs, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', 'seo_agent_audit_trail_2026_q1.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setTimeout(() => {
      setIsExporting(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }, 400);
  };

  return (
    <section className="py-24 bg-[#070A0D] border-b border-[#17222B]/40" id="governance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Terminal / Code view */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-xl bg-[#090D11] border border-[#17222B] overflow-hidden font-mono text-xs shadow-2xl">
              {/* Window header */}
              <div className="px-4 py-3 bg-[#06090C] border-b border-[#17222B]/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-slate-400 text-[11px]">AUDIT.LOG — READ ONLY</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF85] bg-[#00FF85]/10 px-2 py-0.5 rounded text-[10px] border border-[#00FF85]/20">
                    SHA-256 VERIFIED
                  </span>
                </div>
              </div>

              {/* Terminal contents */}
              <div className="p-5 space-y-2.5 text-[11px] leading-relaxed max-h-[380px] overflow-y-auto">
                {logs.map((log) => {
                  let actorColor = 'text-cyan-400';
                  if (log.actorType === 'governance') actorColor = 'text-amber-400';
                  if (log.actorType === 'user') actorColor = 'text-emerald-400 font-semibold';
                  if (log.actorType === 'system') actorColor = 'text-[#00FF85] font-bold';

                  return (
                    <div
                      key={log.id}
                      className={`text-slate-400 flex justify-between items-center transition-colors hover:bg-slate-900/40 p-1 rounded ${
                        log.actorType === 'system' ? 'border-t border-[#17222B]/60 pt-2' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="text-slate-500 shrink-0">{log.timestamp}</span>
                        <span className={`${actorColor} shrink-0`}>[{log.actor}]</span>
                        <span className="truncate">{log.action}</span>
                      </div>
                      <span
                        className={`shrink-0 font-mono ${
                          log.hash === 'Recorded' ? 'text-[#00FF85] font-bold' : 'text-slate-600'
                        }`}
                      >
                        {log.hash}
                      </span>
                    </div>
                  );
                })}

                {/* Export Command Line */}
                <div className="mt-4 pt-3 border-t border-[#17222B]/70 flex items-center justify-between text-[#00FF85]">
                  <button
                    onClick={handleExport}
                    className="hover:underline flex items-center gap-2 text-left cursor-pointer"
                    title="Export verifiable JSON audit logs"
                  >
                    <span>$ export audit-trail --range=2026-Q1</span>
                    <span className="animate-pulse">_</span>
                  </button>

                  <button
                    onClick={handleExport}
                    className="px-2 py-1 rounded bg-[#00FF85]/10 hover:bg-[#00FF85]/20 text-[#00FF85] border border-[#00FF85]/30 text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#00FF85]" /> : <Download className="w-3 h-3" />}
                    <span>{copied ? 'Exported' : 'Download Log'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase">
              MODULE 18 • AUDIT &amp; GOVERNANCE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              An audit trail no one can rewrite.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Every automated action, human sign-off and URL change is recorded permanently. Enterprise risk teams get complete visibility — with retention controls that satisfy GDPR and CCPA.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Append-only, by design</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No one — including admins — can edit or delete a single entry. Audit records survive resource deletion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Approval decision log</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Captures what the approver was shown at decision time — not just that they clicked a button.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-[#00FF85]/40 text-[#00FF85] flex items-center justify-center shrink-0 mt-0.5">
                  <History className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Change history per URL</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Full before/after timeline for every page, with one-click revert when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
