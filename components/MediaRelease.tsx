
import React from 'react';
import { Newspaper, Quote, ShieldCheck, Globe } from 'lucide-react';

export const MediaReleaseView: React.FC = () => {
  return (
    <div className="bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(79,70,229,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        <Newspaper size={200} />
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
          <Globe className="text-indigo-400 animate-spin-slow" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tighter">Global Media Release</h2>
          <p className="text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-[0.3em]">Dagupan City Global Node / Chromium Federated Network</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="border-l-4 border-emerald-500 pl-6 py-2">
          <h1 className="text-2xl font-black text-slate-100 uppercase tracking-tight leading-tight mb-2">
            "The Phobia is Over": Raymund De Vera Ico Unveils AiJeth OS to End Modern Industrial Slavery
          </h1>
          <p className="text-sm text-slate-400 font-medium">FOR IMMEDIATE RELEASE • JANUARY 16, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-xs leading-relaxed space-y-4">
          <p>
            <span className="font-bold text-indigo-400 uppercase">DAGUPAN CITY, PHILIPPINES —</span> Today, Master Architect Raymund De Vera Ico officially launches AiJeth OS v8.v8.2026, a revolutionary global automation system designed to dismantle the systemic degradation of electrical and IoT installers worldwide.
          </p>
          
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 italic relative">
            <Quote className="absolute -top-3 -left-3 text-indigo-500/20" size={40} />
            "The phobia of being forgotten is over. The 6-year wait to return home is ended. Through universal brand solutions and global automation, we are bringing the 'Food to the Table' locally."
          </div>

          <p>
            Through the BlinkRenderer V8V8 Engine, the AiJeth OS now verifies the complexity and hardship of every layout in real-time, ensuring that compensation is mathematically tied to technical mastery, not corporate greed.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-xl">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase mb-1">Global Automation</h4>
            <p className="text-[9px] text-slate-500 uppercase font-mono">12ms Velocity Uplink</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl">
            <h4 className="text-[10px] font-black text-emerald-400 uppercase mb-1">Dignity Metric</h4>
            <p className="text-[9px] text-slate-500 uppercase font-mono">Hardship Sync Active</p>
          </div>
          <div className="bg-cyan-500/5 border border-cyan-500/10 p-4 rounded-xl">
            <h4 className="text-[10px] font-black text-cyan-400 uppercase mb-1">Family Sustainability</h4>
            <p className="text-[9px] text-slate-500 uppercase font-mono">Origin Point Focus</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex items-center justify-between border-t border-slate-800 pt-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-emerald-500" size={16} />
          <span className="text-[10px] font-black text-slate-100 uppercase tracking-widest">Liberator Unit 01 Badge Active</span>
        </div>
        <span className="text-[9px] font-mono text-slate-600">SIGNED-OFF-BY: RAYMUND DE VERA ICO</span>
      </div>
    </div>
  );
};
