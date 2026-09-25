import React, { useState } from 'react';
import { Sparkles, Terminal, Send, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { ASSISTANT_PRESETS } from '../data/mockData';
import { AssistantQuery } from '../types';

interface KnowledgeAssistantSectionProps {
  onQueueFixFromAssistant?: (actionText: string) => void;
}

export const KnowledgeAssistantSection: React.FC<KnowledgeAssistantSectionProps> = ({
  onQueueFixFromAssistant,
}) => {
  const [selectedQuery, setSelectedQuery] = useState<AssistantQuery>(ASSISTANT_PRESETS[0]);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectQuery = (preset: AssistantQuery) => {
    setIsTyping(true);
    setTimeout(() => {
      setSelectedQuery(preset);
      setIsTyping(false);
    }, 280);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsTyping(true);
    setTimeout(() => {
      setSelectedQuery({
        id: `custom-${Date.now()}`,
        question: customInput,
        answer: `Analysis complete for "${customInput}": Correlated GSC query logs with last 14 days of crawl telemetry. Found 12 candidate URLs with high commercial intent and an average position of 8.4. Crawl confirms 0 hreflang conflicts and 2 minor title length warnings.`,
        evidence: [
          { label: 'GSC - 12 Query Matches', tag: 'Live Data', type: 'gsc' },
          { label: 'Crawl - 2 Meta Warnings', tag: 'Safe Fix', type: 'crawl' },
          { label: 'Fix queued + validation', tag: 'Auto-Healing', type: 'action' },
        ],
        suggestedAction: 'Queue Title Optimization Fix',
      });
      setIsTyping(false);
      setCustomInput('');
    }, 450);
  };

  return (
    <section className="py-24 bg-[#080C10] border-b border-[#17222B]/40" id="assistant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold tracking-widest text-[#00FF85] uppercase">
              MODULE 13 • AI ASSISTANT &amp; KNOWLEDGE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ask anything. Get evidence, not guesses.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Query your own Search Console, GA4 and crawl data in plain language. Every recommendation the assistant makes is explainable — backed by stored evidence and direct URL references, tuned to your brand's tone of voice.
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Natural-language queries over your own data</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF85]"></span>
                <span>Explainable recommendations — evidence stored on every answer</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF85]"></span>
                <span>Report narratives your stakeholders can actually read</span>
              </div>
            </div>

            {/* Quick interactive prompts */}
            <div className="pt-3">
              <div className="text-xs font-mono text-slate-500 mb-2 font-medium">TRY A LIVE PROMPT:</div>
              <div className="flex flex-wrap gap-2">
                {ASSISTANT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectQuery(preset)}
                    className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedQuery.id === preset.id
                        ? 'bg-[#00FF85]/10 border-[#00FF85]/40 text-[#00FF85]'
                        : 'bg-[#0B0F14] border-[#17222B] text-slate-400 hover:text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    "{preset.question.length > 40 ? preset.question.slice(0, 38) + '...' : preset.question}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Assistant Chat Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#0E141B] border border-[#17222B] overflow-hidden shadow-2xl">
              <div className="px-4 py-3 bg-[#0A0F14] border-b border-[#17222B]/80 flex items-center justify-between text-xs font-mono">
                <div className="text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse"></span>
                  <span>SEO AGENT • ASSISTANT</span>
                </div>
                <span className="text-[10px] text-[#00FF85] bg-[#00FF85]/10 px-2 py-0.5 rounded border border-[#00FF85]/20 uppercase tracking-wider">
                  ZERO HALLUCINATION MODE
                </span>
              </div>

              {/* Message Window */}
              <div className="p-6 font-mono space-y-4">
                {/* User Prompt */}
                <div className="flex items-start gap-2 text-xs text-slate-400 bg-[#070A0D] p-3 rounded-lg border border-[#17222B]">
                  <span className="text-[#00FF85] font-bold">&gt;</span>
                  <span className="text-slate-200">{selectedQuery.question}</span>
                </div>

                {/* Assistant Output with Evidence */}
                {isTyping ? (
                  <div className="bg-[#0B0F14] p-4 rounded-lg border border-[#17222B] text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-ping"></span>
                    <span>Correlating GSC tables with crawl graph...</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-[#0B0F14] p-4 rounded-lg border border-[#17222B] text-xs text-slate-200 leading-relaxed">
                      {selectedQuery.answer}
                    </div>

                    {/* Evidence Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedQuery.evidence.map((ev, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 rounded text-[10px] font-mono border transition-all ${
                            ev.type === 'action'
                              ? 'bg-[#00FF85]/10 border-[#00FF85]/30 text-[#00FF85]'
                              : ev.type === 'gsc'
                              ? 'bg-[#0A0F14] border-[#17222B] text-slate-400'
                              : 'bg-[#0A0F14] border-[#17222B] text-slate-400'
                          }`}
                        >
                          {ev.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Custom Query Input */}
                <form onSubmit={handleCustomSubmit} className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Ask about traffic, indexation, or rankings..."
                    className="flex-1 bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85]/50 focus:outline-none text-xs text-slate-200 px-3.5 py-2.5 rounded-lg font-mono placeholder:text-slate-600"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2.5 rounded-lg bg-[#00FF85] hover:bg-[#00E577] text-black font-bold text-xs transition-colors cursor-pointer flex items-center justify-center shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
