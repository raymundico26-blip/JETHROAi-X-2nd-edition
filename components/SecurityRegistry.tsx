
import React from 'react';
import { KeyRegistryEntry } from '../types';
import { Shield, Key, RefreshCw, Fingerprint } from 'lucide-react';

const REGISTRY: KeyRegistryEntry[] = [
  { alias: 'FIREBASE_PYTHON_GENAI', truncated: 'AIzaSyDo...YE6lw', role: 'Substrate Master', state: 'ACTIVE' },
  { alias: 'GEMINI_V14_OPTIMUS', truncated: 'AIzaSyBf...mEwyQ', role: 'V8V8 Neural Link', state: 'ACTIVE' },
  { alias: 'GERRIT_CHROMIUM_UPLINK', truncated: 'AIzaSyCn...mKJsO2g', role: 'Org Handshake', state: 'ACTIVE' },
  { alias: 'GCR_VOLTA_INGRESS', truncated: 'AIzaSyB8...RD0-7wR4', role: 'Cloud Run Deploy', state: 'ACTIVE' }
];

export const SecurityRegistry: React.FC = () => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl backdrop-blur-md relative group">
      <div className="p-5 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <Fingerprint size={18} className="text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Security Vault</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5 font-bold uppercase tracking-widest leading-none">Gerrit/Chromium Family Credentials</p>
          </div>
        </div>
        <button className="p-1.5 hover:bg-slate-800 rounded-md text-slate-500 transition-colors">
          <RefreshCw size={14} className="hover:rotate-180 transition-transform duration-700" />
        </button>
      </div>

      <div className="flex-1 p-5 space-y-3 overflow-y-auto custom-scrollbar">
        {REGISTRY.map((entry, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-slate-950/80 border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-all group/row">
            <div className="flex items-center gap-3">
              <Key size={14} className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-tight">{entry.alias}</span>
                <span className="text-[8px] text-slate-600 font-mono font-bold uppercase">{entry.role}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-slate-500">{entry.truncated}</span>
              <span className="text-[8px] font-black uppercase tracking-tighter text-emerald-500 animate-pulse">
                {entry.state}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <div className="flex items-center gap-2 text-indigo-500/50">
          <Shield size={10} />
          <span className="text-[8px] uppercase font-bold tracking-widest">Hardware Target: VOLTA GV100 LOCKED</span>
        </div>
      </div>
    </div>
  );
};
