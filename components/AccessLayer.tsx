
import React from 'react';
import { AccessStatus } from '../types';
import { Shield, Key, MapPin, Cpu, Lock, Terminal as TerminalIcon, Activity } from 'lucide-react';

const STATUS_DATA: AccessStatus[] = [
  { layer: 'Volta Terminal', authentication: 'Architect ID: RAYMUND DE VERA ICO', status: 'GRANTED' },
  { layer: 'Neural Maps', authentication: 'Node: Carael Zone 2 Dagupan', status: 'ACTIVE' },
  { layer: 'V8 Sync Layer', authentication: '@GOOGLEMAPV8V8 Handshake', status: 'SECURE' },
  { layer: 'Gerrit API', authentication: 'RA 8293 IP Protection', status: 'ACTIVE' }
];

export const AccessLayer: React.FC = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'GRANTED': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]';
      case 'ACTIVE': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]';
      case 'SECURE': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const getIcon = (layer: string) => {
    if (layer.includes('Terminal')) return <TerminalIcon size={14} className="text-emerald-400" />;
    if (layer.includes('Maps')) return <MapPin size={14} className="text-cyan-400" />;
    if (layer.includes('V8')) return <Cpu size={14} className="text-indigo-400" />;
    if (layer.includes('Gerrit')) return <Lock size={14} className="text-indigo-400" />;
    return <Shield size={14} />;
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full shadow-2xl backdrop-blur-md relative group">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Key size={120} />
      </div>

      <div className="p-5 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <Shield size={18} className="text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Neural Access Layer</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5">@GooglemapicoSattelite // VOLTA_STABLE</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-12 gap-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest px-2 mb-2">
          <div className="col-span-5">Layer</div>
          <div className="col-span-4">Authentication</div>
          <div className="col-span-3 text-right">Status</div>
        </div>
        {STATUS_DATA.map((item, i) => (
          <div key={i} className="grid grid-cols-12 items-center p-3 bg-slate-950/80 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900 transition-all shadow-lg group/row">
            <div className="col-span-5 flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-slate-900 group-hover/row:scale-110 transition-transform">
                {getIcon(item.layer)}
              </div>
              <span className="text-[10px] font-bold text-slate-200 uppercase tracking-tighter">{item.layer}</span>
            </div>
            <div className="col-span-4">
              <span className="text-[9px] text-slate-400 font-mono line-clamp-1">{item.authentication}</span>
            </div>
            <div className="col-span-3 text-right">
              <span className={`px-2 py-0.5 rounded border text-[9px] font-bold inline-block ${getStatusStyle(item.status)}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={10} className="text-emerald-500" />
          <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Ground Station: DAGUPAN_02_LOCKED</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] text-indigo-400 font-mono">NODE: CARAEL_ZONE2</span>
        </div>
      </div>
    </div>
  );
};
