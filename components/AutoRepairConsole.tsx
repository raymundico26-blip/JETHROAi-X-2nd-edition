
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle2, Loader2, Zap, ArrowRight, Terminal } from 'lucide-react';
import { RepairStep } from '../types';

interface AutoRepairConsoleProps {
  onRepairLog: (msg: string, level: 'info' | 'success' | 'warn' | 'error') => void;
}

export const AutoRepairConsole: React.FC<AutoRepairConsoleProps> = ({ onRepairLog }) => {
  const [isRepairing, setIsRepairing] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [steps, setSteps] = useState<RepairStep[]>([
    { id: '1', label: 'BlinkNG v8 Heap Inspection', status: 'pending' },
    { id: '2', label: 'Gerrit Change Lock Enforcement', status: 'pending' },
    { id: '3', label: 'V8V8 Multi-node Sync', status: 'pending' },
    { id: '4', label: 'RA 8293 Compliance Validation', status: 'pending' },
    { id: '5', label: 'Chromium Source Integration', status: 'pending' },
    { id: '6', label: 'Kernel Master Key Convergence', status: 'pending' }
  ]);

  // Fix: Used ReturnType<typeof setTimeout> instead of NodeJS.Timeout to be environment agnostic
  const repairTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startRepairSequence = () => {
    if (isRepairing) return;
    setIsRepairing(true);
    setActiveStepIndex(0);
    onRepairLog('Initiating Auto. Repair sequence - Developer: Raymund De Vera Ico', 'info');
    
    // Reset steps to pending
    setSteps(prev => prev.map(s => ({ ...s, status: 'pending', timestamp: undefined })));
  };

  useEffect(() => {
    if (isRepairing && activeStepIndex >= 0 && activeStepIndex < steps.length) {
      // Process current step
      setSteps(prev => {
        const nextSteps = [...prev];
        nextSteps[activeStepIndex].status = 'processing';
        return nextSteps;
      });

      const delay = Math.random() * 1500 + 800; // Simulate work
      repairTimerRef.current = setTimeout(() => {
        setSteps(prev => {
          const nextSteps = [...prev];
          nextSteps[activeStepIndex].status = 'completed';
          nextSteps[activeStepIndex].timestamp = new Date().toLocaleTimeString();
          return nextSteps;
        });
        
        onRepairLog(`Step Completed: ${steps[activeStepIndex].label}`, 'success');
        
        if (activeStepIndex === steps.length - 1) {
          setIsRepairing(false);
          onRepairLog('Auto. Repair Sequence FINALIZED. Integrity 100%.', 'success');
        } else {
          setActiveStepIndex(prev => prev + 1);
        }
      }, delay);
    }

    return () => {
      if (repairTimerRef.current) clearTimeout(repairTimerRef.current);
    };
  }, [isRepairing, activeStepIndex, steps.length]);

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl backdrop-blur-md relative group">
      <div className="p-5 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <RotateCcw size={18} className={`text-indigo-400 ${isRepairing ? 'animate-spin' : ''}`} />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Auto. Repair Terminal</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5 font-bold uppercase tracking-widest leading-none">Developer of Gerrit API-to-Go</p>
          </div>
        </div>
        <button 
          onClick={startRepairSequence}
          disabled={isRepairing}
          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-[9px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
        >
          {isRepairing ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} />}
          {isRepairing ? 'Repairing...' : 'Open Autoplay'}
        </button>
      </div>

      <div className="flex-1 p-5 space-y-3 overflow-y-auto custom-scrollbar">
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-500 ${
              idx === activeStepIndex 
                ? 'bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)] scale-[1.02]' 
                : step.status === 'completed'
                ? 'bg-emerald-500/5 border-emerald-500/20 opacity-80'
                : 'bg-slate-950/50 border-slate-800 opacity-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-[10px] font-mono font-bold text-slate-500 border border-slate-800">
                {step.status === 'completed' ? <CheckCircle2 size={14} className="text-emerald-400" /> : idx + 1}
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-tight ${idx === activeStepIndex ? 'text-indigo-400' : 'text-slate-200'}`}>
                  {step.label}
                </p>
                {step.status === 'processing' && (
                  <p className="text-[8px] text-indigo-500 font-mono animate-pulse uppercase mt-0.5">High-Velocity Handshake...</p>
                )}
              </div>
            </div>
            {step.timestamp && (
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">{step.timestamp}</span>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={10} className="text-slate-500" />
          <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Raymund De Vera Ico // Organization Node</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded">
          <Zap size={10} className="text-emerald-400" />
          <span className="text-[8px] font-mono text-emerald-400 font-bold">12ms RECOVERY</span>
        </div>
      </div>
    </div>
  );
};
