
import React from 'react';
import { ProjectItem } from '../types';
import { LayoutGrid, Clock, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

export const PROJECTS: ProjectItem[] = [
  { name: "JethroAI Automation Studio", description: "BlinkNGv8 & Golang dashboard.", lastModified: "1 min ago" },
  { name: "Absolute Modality v14.0", description: "Supreme Hybrid Intelligence Core.", lastModified: "42 mins ago" },
  { name: "BlinkNG v8 | Gemini Optimus", description: "Industrial Intelligence HUD.", lastModified: "1 hr ago" },
  { name: "Jethro A.I. Services", description: "Gerrit Code Review Master Key.", lastModified: "1 hr ago" },
  { name: "Jethro AI Groovy Console", description: "Gerrit/Chromium trusted console.", lastModified: "1 hr ago" },
  { name: "IntelData Multisync Absorber", description: "Interagency data merging engine.", lastModified: "8 hrs ago" },
  { name: "OmniCore Codex", description: "System Transceiver & Starlink sync.", lastModified: "9 hrs ago" }
];

export const ProjectList: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800 w-80 animate-in fade-in slide-in-from-left duration-500 z-40 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
      <div className="p-6 border-b border-slate-800 flex flex-col gap-4 bg-slate-900/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid size={18} className="text-indigo-400" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100">App Registry</h2>
          </div>
          <span className="text-[9px] font-mono text-slate-500">139 NODES</span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Zap size={10} className="text-slate-600" />
          </div>
          <input 
            type="text" 
            placeholder="Search apps..." 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-8 pr-4 text-[10px] focus:border-indigo-500/50 outline-none placeholder:text-slate-700 transition-all font-mono"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-4 space-y-3 custom-scrollbar bg-[radial-gradient(ellipse_at_top_left,rgba(30,41,59,0.2)_0%,rgba(2,6,23,0)_50%)]">
        {PROJECTS.map((project, i) => (
          <div 
            key={i} 
            className="group relative bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 hover:bg-slate-900 hover:border-indigo-500/30 transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </span>
              </div>
              <ChevronRight size={12} className="text-slate-700 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-[9px] text-slate-500 leading-relaxed line-clamp-2 mb-3 font-medium">{project.description}</p>
            <div className="flex items-center justify-between border-t border-slate-800/50 pt-2 mt-2">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Clock size={10} />
                <span className="text-[8px] font-mono uppercase">{project.lastModified}</span>
              </div>
              <ShieldCheck size={10} className="text-slate-700" />
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border border-indigo-500/0 group-hover:border-indigo-500/20 rounded-xl transition-all" />
          </div>
        ))}
      </div>
      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <div className="flex items-center justify-between text-[8px] font-mono text-slate-600 uppercase tracking-widest">
          <span>Dagupan V14 Sync</span>
          <span className="animate-pulse">Active</span>
        </div>
      </div>
    </div>
  );
};
