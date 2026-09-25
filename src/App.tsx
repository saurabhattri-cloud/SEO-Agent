import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Ticker } from './components/Ticker';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { SelfHealingSection } from './components/SelfHealingSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { KnowledgeAssistantSection } from './components/KnowledgeAssistantSection';
import { AuditGovernanceSection } from './components/AuditGovernanceSection';
import { ProductDemoSection } from './components/ProductDemoSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { ModuleDetailModal } from './components/ModuleDetailModal';
import { DiffModal } from './components/DiffModal';
import { CommandCenterDrawer } from './components/CommandCenterDrawer';
import { INITIAL_HEALING_TASKS, INITIAL_AUDIT_LOGS, MODULES_DATA } from './data/mockData';
import { HealingTask, AuditLogEntry, ModuleInfo } from './types';

export default function App() {
  const [tasks, setTasks] = useState<HealingTask[]>(INITIAL_HEALING_TASKS);
  const [logs, setLogs] = useState<AuditLogEntry[]>(INITIAL_AUDIT_LOGS);
  const [heroFixApproved, setHeroFixApproved] = useState(false);
  const [killSwitchActive, setKillSwitchActive] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState(14);

  // Modals state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleInfo | null>(null);
  const [selectedDiffTask, setSelectedDiffTask] = useState<HealingTask | null>(null);

  const getCurrentTimeString = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const getRandomHexHash = () => {
    return '0x' + Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0');
  };

  // Hero fix approval handler
  const handleApproveHeroFix = () => {
    setHeroFixApproved(true);
    const newLog: AuditLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: getCurrentTimeString(),
      actor: 'MAYA K. - SEO LEAD',
      actorType: 'user',
      action: 'Approved: / homepage hero rewrite -> validated 200 OK',
      target: '/',
      hash: getRandomHexHash(),
      status: 'Validated',
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  // Healing task approval handler
  const handleApproveHealingTask = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: 'approved' } : t))
    );

    const newLog: AuditLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: getCurrentTimeString(),
      actor: 'MAYA K. - SEO LEAD',
      actorType: 'user',
      action: `Approved: ${task.title} on ${task.url} -> validated 200 OK`,
      target: task.url,
      hash: getRandomHexHash(),
      status: 'Approved',
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  // Rollback all handler
  const handleRollbackAll = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === 'heal-1' ? t : { ...t, status: 'pending' }))
    );
    setHeroFixApproved(false);

    const rollbackLog: AuditLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: getCurrentTimeString(),
      actor: 'GOVERNANCE',
      actorType: 'governance',
      action: '1-Click Rollback executed: all pending live patches restored to pre-flight snapshots',
      target: 'ALL',
      hash: getRandomHexHash(),
      status: 'Rolled Back',
    };
    setLogs((prev) => [rollbackLog, ...prev]);
  };

  // Kill switch handler
  const handleToggleKillSwitch = () => {
    const nextState = !killSwitchActive;
    setKillSwitchActive(nextState);

    const alertLog: AuditLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: getCurrentTimeString(),
      actor: 'GOVERNANCE',
      actorType: 'governance',
      action: nextState
        ? 'EMERGENCY KILL SWITCH ENGAGED: automated fixes halted'
        : 'KILL SWITCH DISENGAGED: automated fixes resumed',
      target: 'CORE ENGINE',
      hash: getRandomHexHash(),
      status: nextState ? 'Halted' : 'Resumed',
    };
    setLogs((prev) => [alertLog, ...prev]);
  };

  // Module selection
  const handleSelectModule = (moduleNumber: number) => {
    const mod = MODULES_DATA.find((m) => m.number === moduleNumber);
    if (mod) {
      setSelectedModule(mod);
    }
  };

  // Demo booked callback
  const handleBookDemoSuccess = (details: { name: string; email: string; company: string }) => {
    setSpotsRemaining((s) => Math.max(1, s - 1));
    const reservationLog: AuditLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: getCurrentTimeString(),
      actor: 'COHORT MANAGER',
      actorType: 'system',
      action: `Reserved walkthrough slot for ${details.name} (${details.company || 'Enterprise'})`,
      target: details.email,
      hash: getRandomHexHash(),
      status: 'Confirmed',
    };
    setLogs((prev) => [reservationLog, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#070A0D] text-slate-200 antialiased selection:bg-[#00FF85] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenCommandCenter={() => setIsCommandCenterOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onBookDemo={() => setIsDemoModalOpen(true)}
          onExploreCapabilities={() => {
            const el = document.getElementById('capabilities');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onApproveHeroFix={handleApproveHeroFix}
          heroFixApproved={heroFixApproved}
        />

        {/* Continuous Ticker */}
        <Ticker />

        {/* Capabilities (9 Core Modules) */}
        <CapabilitiesSection onSelectModule={handleSelectModule} />

        {/* Module 12: Automation & Self-Healing */}
        <SelfHealingSection
          tasks={tasks}
          onApproveTask={handleApproveHealingTask}
          onRollbackAll={handleRollbackAll}
          onViewDiff={(t) => setSelectedDiffTask(t)}
          killSwitchActive={killSwitchActive}
          onToggleKillSwitch={handleToggleKillSwitch}
        />

        {/* Who It's For (In-House vs Agency) */}
        <WhoItsForSection />

        {/* Module 13: Knowledge Assistant */}
        <KnowledgeAssistantSection />

        {/* Module 18: Audit Trail & Governance */}
        <AuditGovernanceSection logs={logs} />

        {/* Product Demo Video Walkthrough */}
        <ProductDemoSection />

        {/* Early Access Call To Action Banner */}
        <CallToAction
          onBookDemo={() => setIsDemoModalOpen(true)}
          spotsRemaining={spotsRemaining}
        />
      </main>

      {/* Footer with full 18-module platform index */}
      <Footer onSelectModule={handleSelectModule} />

      {/* Modals */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onSuccess={handleBookDemoSuccess}
        spotsRemaining={spotsRemaining}
      />

      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onOpenDemo={() => {
          setSelectedModule(null);
          setIsDemoModalOpen(true);
        }}
      />

      <DiffModal
        task={selectedDiffTask}
        onClose={() => setSelectedDiffTask(null)}
        onApprove={handleApproveHealingTask}
      />

      <CommandCenterDrawer
        isOpen={isCommandCenterOpen}
        onClose={() => setIsCommandCenterOpen(false)}
        tasks={tasks}
        logs={logs}
        onApproveTask={handleApproveHealingTask}
      />
    </div>
  );
}
