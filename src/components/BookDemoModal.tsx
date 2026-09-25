import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Shield, Sparkles, Building, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (bookingDetails: { name: string; email: string; company: string }) => void;
  spotsRemaining: number;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  spotsRemaining,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('11-50');
  const [goal, setGoal] = useState('Automate technical crawls & self-healing');
  const [preferredDate, setPreferredDate] = useState('Tomorrow, 2:00 PM EST');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.5, x: 0.5 },
      colors: ['#00FF85', '#00F0FF', '#ffffff', '#22d3ee'],
    });

    setSubmitted(true);
    onSuccess({ name, email, company });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0E141B] border border-[#17222B] rounded-2xl shadow-2xl overflow-hidden glow-subtle">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0A0F14] border-b border-[#17222B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500/10 border border-[#00FF85]/40 flex items-center justify-center text-[#00FF85]">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-white">Book an Executive Walkthrough</span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#00FF85]/10 border-2 border-[#00FF85] flex items-center justify-center text-[#00FF85] shadow-[0_0_25px_rgba(0,255,133,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white">Spot Reserved for {company || name}!</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                We've assigned your cohort token ({spotsRemaining - 1} spots remaining). A calendar invite and sandbox access credentials have been sent to <strong className="text-white">{email}</strong>.
              </p>

              <div className="bg-[#0B0F14] border border-[#17222B] p-3.5 rounded-lg text-xs font-mono text-slate-300 text-left space-y-1">
                <div><span className="text-slate-500">Attendee:</span> {name} ({company})</div>
                <div><span className="text-slate-500">Time Slot:</span> {preferredDate}</div>
                <div><span className="text-slate-500">Security Gate:</span> Human Approval Sandbox Enabled</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 rounded-full text-xs font-bold bg-[#00FF85] text-black hover:bg-[#00E577] transition-all cursor-pointer"
                >
                  Return to Platform
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="bg-[#00FF85]/10 border border-[#00FF85]/20 p-2.5 rounded-lg flex items-center justify-between text-[#00FF85] text-[11px]">
                <span>Early Access Cohort Q1</span>
                <span className="font-bold">{spotsRemaining} spots remaining</span>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Maya Kovacs"
                    className="w-full bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85] focus:outline-none rounded-lg py-2 pl-9 pr-3 text-white font-sans text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@company.com"
                    className="w-full bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85] focus:outline-none rounded-lg py-2 pl-9 pr-3 text-white font-sans text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Company / Brand</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85] focus:outline-none rounded-lg py-2 pl-9 pr-3 text-white font-sans text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Team Size</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85] focus:outline-none rounded-lg py-2 px-3 text-white font-sans text-xs"
                  >
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="200+">200+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Primary Objective</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#0B0F14] border border-[#17222B] focus:border-[#00FF85] focus:outline-none rounded-lg py-2 px-3 text-white font-sans text-xs"
                >
                  <option value="Automate technical crawls & self-healing">Automate technical crawls &amp; self-healing</option>
                  <option value="Scale content intelligence without headcount">Scale content intelligence without headcount</option>
                  <option value="Agency client governance & white-label reporting">Agency client governance &amp; white-label reporting</option>
                  <option value="Executive audit trail & compliance controls">Executive audit trail &amp; compliance controls</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold bg-[#00FF85] text-black hover:bg-[#00E577] transition-all shadow-[0_0_20px_rgba(0,255,133,0.35)] cursor-pointer"
                >
                  Reserve Demo Spot
                </button>
              </div>

              <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3 text-[#00FF85]" />
                <span>NDA &amp; enterprise SOC2-compliant sandbox guarantee</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
