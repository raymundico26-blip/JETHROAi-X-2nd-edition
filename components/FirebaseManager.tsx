
import React from 'react';
import { FirebaseStatus } from '../types';
import { Flame, Database, ShieldCheck, Activity, Terminal } from 'lucide-react';

const FIREBASE_DATA: FirebaseStatus[] = [
  { service: 'Cloud Functions', status: 'online', usage: '12%', runtime: 'Python 3.12' },
  { service: 'Firestore Index', status: 'syncing', usage: '84%', runtime: 'BlinkNGv8' },
  { service: 'Auth Registry', status: 'online', usage: '2%', runtime: 'Secure' },
  { service: 'GenAI Vertex', status: 'online', usage: '45%', runtime: 'Gemini 3 Pro' }
];

export const FirebaseManager: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col h-full shadow-2xl backdrop-blur-md overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none transition-transform group-hover:rotate-12 duration-700">
        <Flame size={100} className="text-orange-500" />
      </div>

      <div className="p-5 border-b border-slate-800 bg-slate-900/20 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
            <Database size={18} className="text-orange-500" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Firebase Substrate</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5 font-bold uppercase tracking-widest leading-none">python genai integration</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">
          <Activity size={10} className="text-orange-500 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-400">projects/368250655155</span>
        </div>
      </div>
      
      <div className="flex-1 p-5 space-y-3 overflow-y-auto relative z-10">
        {FIREBASE_DATA.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-slate-950/80 border border-slate-800 rounded-xl hover:border-orange-500/30 hover:bg-slate-900 transition-all shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'online' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-tight">{item.service}</span>
                <span className="text-[8px] text-slate-500 font-mono">{item.runtime}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-300 font-bold">{item.usage}</span>
              <span className="text-[8px] uppercase font-bold text-slate-600 tracking-tighter">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <Terminal size={10} className="text-slate-500" />
          <span className="text-[8px] text-slate-500 font-mono uppercase tracking-widest">Master Key: AIzaSyD...6lw</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={12} className="text-emerald-500/70" />
          <span className="text-[9px] font-bold text-emerald-500/70 uppercase">Verified</span>
        </div>
      </div>
    </div>
  );
};
