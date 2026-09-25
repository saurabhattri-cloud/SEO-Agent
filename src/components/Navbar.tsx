import React, { useState } from 'react';
import { ArrowRight, Activity, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  onOpenCommandCenter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal, onOpenCommandCenter }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A0D]/85 backdrop-blur-md border-b border-[#17222B]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-[#00FF85]/40 flex items-center justify-center text-[#00FF85] shadow-[0_0_12px_rgba(0,255,133,0.3)] group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white flex items-center">
            SEO Agent<span className="text-[#00FF85]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#capabilities" className="hover:text-[#00FF85] transition-colors">Capabilities</a>
          <a href="#self-healing" className="hover:text-[#00FF85] transition-colors">Self-Healing</a>
          <a href="#demo" className="hover:text-[#00FF85] transition-colors">Watch Demo</a>
          <a href="#who-its-for" className="hover:text-[#00FF85] transition-colors">Who It's For</a>
          <a href="#governance" className="hover:text-[#00FF85] transition-colors">Governance</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommandCenter}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[#00FF85] bg-[#00FF85]/10 border border-[#00FF85]/30 hover:bg-[#00FF85]/20 transition-all cursor-pointer"
            title="Open Live SEO Command Center"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse"></span>
            <Activity className="w-3.5 h-3.5" />
            <span>Live Console</span>
          </button>

          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#00FF85] text-[#070A0D] hover:bg-[#00E577] transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)] hover:shadow-[0_0_25px_rgba(0,255,133,0.5)] cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-[#0E141B] border border-[#17222B]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F14] border-b border-[#17222B] px-4 py-4 space-y-3">
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-[#00FF85] py-1"
          >
            Capabilities
          </a>
          <a
            href="#self-healing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-[#00FF85] py-1"
          >
            Self-Healing
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-[#00FF85] py-1"
          >
            Watch Demo
          </a>
          <a
            href="#who-its-for"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-[#00FF85] py-1"
          >
            Who It's For
          </a>
          <a
            href="#governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-[#00FF85] py-1"
          >
            Governance
          </a>
          <div className="pt-2 border-t border-[#17222B] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandCenter();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-[#00FF85] bg-[#00FF85]/10 border border-[#00FF85]/30"
            >
              <Activity className="w-4 h-4" />
              <span>Launch Live Console</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#00FF85] text-black"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
