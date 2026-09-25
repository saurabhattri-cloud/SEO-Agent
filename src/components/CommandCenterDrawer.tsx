import React, { useState } from 'react';
import {
  X,
  Activity,
  CheckCircle2,
  RefreshCw,
  Search,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Play,
  Terminal,
} from 'lucide-react';
import { HealingTask, AuditLogEntry } from '../types';

interface CommandCenterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: HealingTask[];
  logs: AuditLogEntry[];
  onApproveTask: (taskId: string) => void;
}

export const CommandCenterDrawer: React.FC<CommandCenterDrawerProps> = ({
  isOpen,
  onClose,
  tasks,
  logs,
  onApproveTask,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'crawls' | 'healing' | 'terminal'>('overview');
  const [crawling, setCrawling] = useState(false);
  const [urlFilter, setUrlFilter] = useState('');

  if (!isOpen) return null;

  const handleCrawlNow = () => {
    setCrawling(true);
    setTimeout(() => {
      setCrawling(false);
    }, 1500);
  };

  const sampleUrls = [
    { path: '/', status: 200, health: '98%', cwv: 'Pass', lastCheck: '2m ago' },
    { path: '/pricing', status: 200, health: '94%', cwv: 'Pass', lastCheck: '5m ago' },
    { path: '/blog/local-seo-guide', status: 200, health: '89%', cwv: 'Pass', lastCheck: '8m ago' },
    { path: '/solutions/enterprise-crawler', status: 200, health: '82%', cwv: 'Pass', lastCheck: '12m ago' },
    { path: '/de', status: 200, health: '96%', cwv: 'Pass', lastCheck: '15m ago' },
    { path: '/features/rank-tracker', status: 200, health: '95%', cwv: 'Pass', lastCheck: '18m ago' },
  ];

  const filteredUrls = sampleUrls.filter((u) =>
    u.path.toLowerCase().includes(urlFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0A0F14] border border-[#17222B] rounded-2xl shadow-2xl overflow-hidden flex flex-col glow-subtle">
        {/* Header */}
        <div className="px-6 py-4 bg-[#070A0D] border-b border-[#17222B] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="h-4 w-[1px] bg-[#17222B] mx-1"></div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#00FF85]" />
              <span className="font-bold text-sm text-white font-mono">
                SEO COMMAND CENTER — ENTERPRISE CONSOLE
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#00FF85] bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-ping"></span>
              LIVE CONNECTED
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="px-6 py-2.5 bg-[#0B0F14] border-b border-[#17222B] flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#17222B] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview &amp; KPIs
            </button>
            <button
              onClick={() => setActiveTab('crawls')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'crawls'
                  ? 'bg-[#17222B] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              URL Health (1,240)
            </button>
            <button
              onClick={() => setActiveTab('healing')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'healing'
                  ? 'bg-[#17222B] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Healing Queue</span>
              <span className="bg-[#00FF85]/20 text-[#00FF85] text-[10px] px-1.5 py-0.2 rounded font-bold">
                {tasks.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-[#17222B] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Audit Stream ({logs.length})
            </button>
          </div>

          <button
            onClick={handleCrawlNow}
            disabled={crawling}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#00FF85] hover:bg-[#00E577] text-black font-bold text-xs transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${crawling ? 'animate-spin' : ''}`} />
            <span>{crawling ? 'Crawling URLs...' : 'Run Quick Crawl'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Tiles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#0E141B] rounded-xl border border-[#17222B]">
                  <div className="text-[10px] text-slate-400">OVERALL HEALTH SCORE</div>
                  <div className="text-2xl font-bold text-white mt-1">94 / 100</div>
                  <div className="text-[10px] text-[#00FF85] mt-1">▲ +4 pts vs baseline</div>
                </div>

                <div className="p-4 bg-[#0E141B] rounded-xl border border-[#17222B]">
                  <div className="text-[10px] text-slate-400">ORGANIC CLICKS (30D)</div>
                  <div className="text-2xl font-bold text-white mt-1">24.3k</div>
                  <div className="text-[10px] text-[#00FF85] mt-1">+18.2% WoW velocity</div>
                </div>

                <div className="p-4 bg-[#0E141B] rounded-xl border border-[#17222B]">
                  <div className="text-[10px] text-slate-400">TRACKED KEYWORDS</div>
                  <div className="text-2xl font-bold text-white mt-1">3,420</div>
                  <div className="text-[10px] text-cyan-300 mt-1">412 top 3 rankings</div>
                </div>

                <div className="p-4 bg-[#0E141B] rounded-xl border border-[#17222B]">
                  <div className="text-[10px] text-slate-400">HUMAN APPROVAL GATE</div>
                  <div className="text-2xl font-bold text-[#00FF85] mt-1">ACTIVE</div>
                  <div className="text-[10px] text-slate-400 mt-1">3 queued fixes pending</div>
                </div>
              </div>

              {/* Real-time crawler visual */}
              <div className="p-5 bg-[#0E141B] rounded-xl border border-[#17222B] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Continuous Headless Crawl Engine (M4)</span>
                  <span className="text-[#00FF85]">Status: Nominal</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Rendering 1,240 URLs with headless Chromium</span>
                    <span>100% complete</span>
                  </div>
                  <div className="w-full bg-[#17222B] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#00FF85] h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[10px] text-slate-400">
                  <div>Canonical Tags: <span className="text-[#00FF85]">99.8% valid</span></div>
                  <div>Hreflang Clusters: <span className="text-[#00FF85]">Synchronized</span></div>
                  <div>CWV Passed: <span className="text-[#00FF85]">100%</span></div>
                  <div>Orphan Pages: <span className="text-amber-400">16 detected (healing ready)</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crawls' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={urlFilter}
                    onChange={(e) => setUrlFilter(e.target.value)}
                    placeholder="Filter URLs (e.g. /pricing, /blog)..."
                    className="w-full bg-[#0E141B] border border-[#17222B] rounded-lg py-1.5 pl-8 pr-3 text-white text-xs focus:outline-none focus:border-[#00FF85]"
                  />
                </div>
                <div className="text-slate-400 text-[11px]">
                  Showing {filteredUrls.length} monitored paths
                </div>
              </div>

              <div className="border border-[#17222B] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#070A0D] text-[10px] text-slate-400 uppercase tracking-wider border-b border-[#17222B]">
                    <tr>
                      <th className="p-3">URL Path</th>
                      <th className="p-3">HTTP Status</th>
                      <th className="p-3">Health Score</th>
                      <th className="p-3">Core Web Vitals</th>
                      <th className="p-3">Last Verified</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#17222B]/60 text-[11px]">
                    {filteredUrls.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="p-3 font-semibold text-white">{item.path}</td>
                        <td className="p-3 text-[#00FF85]">
                          <span className="bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20">
                            {item.status} OK
                          </span>
                        </td>
                        <td className="p-3 text-slate-300">{item.health}</td>
                        <td className="p-3 text-cyan-300">{item.cwv}</td>
                        <td className="p-3 text-slate-500">{item.lastCheck}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'healing' && (
            <div className="space-y-4">
              <div className="text-slate-400 text-xs">
                Active issues identified across live crawlers waiting for validation or sign-off:
              </div>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-[#0E141B] rounded-xl border border-[#17222B] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
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
                        <span className="font-bold text-white text-xs">{task.title}</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">{task.description}</p>
                      <p className="text-slate-500 text-[10px]">Impact: {task.impact}</p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {task.status === 'approved' || task.status === 'applied' ? (
                        <span className="text-[#00FF85] text-xs font-bold flex items-center gap-1 bg-[#00FF85]/10 px-3 py-1 rounded border border-[#00FF85]/30">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Validated Live
                        </span>
                      ) : (
                        <button
                          onClick={() => onApproveTask(task.id)}
                          className="px-4 py-1.5 rounded-lg bg-[#00FF85] hover:bg-[#00E577] text-black font-bold text-xs transition-colors cursor-pointer"
                        >
                          Approve &amp; Deploy
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="space-y-3">
              <div className="text-slate-400 text-xs">
                Real-time SHA-256 tamper-proof ledger entries:
              </div>
              <div className="p-4 bg-[#070A0D] border border-[#17222B] rounded-xl font-mono text-[11px] space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between text-slate-400">
                    <div>
                      <span className="text-slate-600">{log.timestamp}</span>{' '}
                      <span className="text-[#00FF85]">[{log.actor}]</span> {log.action}
                    </div>
                    <span className="text-slate-600 shrink-0 ml-2">{log.hash}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
