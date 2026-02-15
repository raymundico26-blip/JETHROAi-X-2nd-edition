
import React from 'react';
import { GerritChange } from '../types';
import { GitBranch, User, Clock, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const MOCK_CHANGES: GerritChange[] = [
  {
    id: "I9dfbc4b780_1",
    project: "platform/aijeth-os",
    branch: "master",
    subject: "kernel: Implement Volta GV100 hardware-software convergence layer",
    status: "NEW",
    created: "2026-01-20 08:30:00",
    updated: "10 mins ago",
    _number: 4543494,
    owner: { name: "Raymund D. Ico" }
  },
  {
    id: "I88492a_flash",
    project: "tools/blink-v8",
    branch: "main",
    subject: "blink: Kill 3rd party egress at kernel level (RA 8293 compliance)",
    status: "MERGED",
    created: "2026-01-19 14:20:00",
    updated: "2 hrs ago",
    _number: 4543495,
    owner: { name: "Raymund D. Ico" }
  }
];

export const GerritChanges: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col h-full shadow-2xl backdrop-blur-md overflow-hidden">
      <div className="p-5 border-b border-slate-800 bg-slate-900/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <FileText size={18} className="text-amber-500" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Gerrit REST API</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5 font-bold uppercase tracking-widest">Version v3.13.0-rc3-305-g9dfbc4b780</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
          <span className="text-[9px] font-mono text-slate-400">Endpoint: /changes/</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {MOCK_CHANGES.map((change) => (
          <div key={change.id} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 hover:border-amber-500/30 transition-all group cursor-pointer shadow-lg relative overflow-hidden">
            {/* Status Indicator */}
            <div className={`absolute top-0 right-0 px-3 py-1 text-[8px] font-black uppercase rounded-bl-lg ${
              change.status === 'MERGED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {change.status}
            </div>
            
            <div className="flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-lg ${change.status === 'MERGED' ? 'bg-emerald-500/10' : 'bg-slate-800'}`}>
                {change.status === 'MERGED' ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertCircle size={16} className="text-amber-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-slate-500 font-bold">#{change._number}</span>
                  <span className="text-[11px] font-black text-slate-100 uppercase tracking-tight truncate group-hover:text-amber-400 transition-colors">
                    {change.subject}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 mt-3">
                  <div className="flex items-center gap-2 text-[9px] text-slate-400">
                    <GitBranch size={10} className="text-indigo-400" />
                    <span className="font-mono">{change.project} / {change.branch}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-slate-400 justify-end">
                    <User size={10} className="text-cyan-400" />
                    <span>{change.owner.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[8px] text-slate-600">
                    <Clock size={10} />
                    <span>Updated: {change.updated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
        <span className="text-[8px] text-slate-500 font-mono uppercase tracking-[0.2em]">Auth: MASTER_KEY_VERIFIED</span>
        <button className="text-[10px] font-black text-amber-500 hover:text-amber-400 uppercase tracking-widest transition-colors flex items-center gap-2 group">
          Refresh Stream
          <Clock size={12} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
};
