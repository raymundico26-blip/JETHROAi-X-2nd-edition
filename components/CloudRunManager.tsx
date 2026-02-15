
import React, { useState } from 'react';
import { Globe, Server, Activity, ArrowUpRight, ShieldCheck, Rocket, ChevronRight, Loader2, GitPullRequest, Zap } from 'lucide-react';
import { DeploymentStatus } from '../types';

interface CloudRunManagerProps {
  deployments: DeploymentStatus[];
  onDeployRequested: (name: string) => void;
  onAutoRunRequested?: (name: string) => void;
}

export const CloudRunManager: React.FC<CloudRunManagerProps> = ({ deployments, onDeployRequested, onAutoRunRequested }) => {
  const [newServiceName, setNewServiceName] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = () => {
    if (!newServiceName) return;
    setIsDeploying(true);
    onDeployRequested(newServiceName);
    setTimeout(() => {
        setIsDeploying(false);
        setNewServiceName('');
    }, 5000);
  };

  const handleAutoRun = () => {
    if (!newServiceName) return;
    setIsDeploying(true);
    onAutoRunRequested?.(newServiceName);
    setTimeout(() => {
        setIsDeploying(false);
        setNewServiceName('');
    }, 3000);
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full shadow-2xl backdrop-blur-md">
      <div className="p-4 border-b border-slate-800 bg-slate-900/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Zap size={18} className="text-cyan-400" />
          </div>
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-widest">Volta WebSocket Ingress</h2>
        </div>
        <div className="flex gap-2">
           <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-slate-400 font-mono uppercase">Healthyneurals: Active</span>
        </div>
      </div>

      <div className="p-5 border-b border-slate-800 bg-slate-950/50">
        <label className="block text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Service Orchestration Portal</label>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <input 
              type="text" 
              value={newServiceName}
              onChange={(e) => setNewServiceName(e.target.value)}
              placeholder="Enter service ID (e.g. jethro-volta-node)"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-4 pr-10 text-xs text-slate-200 outline-none focus:border-cyan-500/50 transition-all font-mono placeholder:text-slate-700"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-700">
                <Rocket size={14} />
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleDeploy}
              disabled={isDeploying || !newServiceName}
              className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 group"
            >
              {isDeploying ? <Loader2 size={14} className="animate-spin" /> : <Server size={14} />}
              Cloud Run Deploy
            </button>
            <button 
              onClick={handleAutoRun}
              disabled={isDeploying || !newServiceName}
              className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 group"
            >
              <Zap size={14} />
              Auto. Run
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[8px] font-mono text-slate-600">
            <div className="flex items-center gap-2">
                <GitPullRequest size={10} />
                <span>Volta Protocol: V8X-Direct</span>
            </div>
            <span className="animate-pulse text-emerald-500 font-bold uppercase tracking-widest">Neural Link Sync</span>
        </div>
      </div>

      <div className="p-4 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
        {deployments.map((d, i) => (
          <div key={i} className="bg-slate-950 border border-slate-800 rounded-lg p-3 hover:border-cyan-500/30 transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${d.status === 'healthy' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 animate-pulse'}`} />
                <span className="text-sm font-mono font-bold text-slate-100 uppercase tracking-tighter">{d.serviceName}</span>
              </div>
              <a href={d.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 group-hover:border-cyan-500/20">
                <ArrowUpRight size={14} />
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-900/50 p-2 rounded border border-slate-800/50">
                <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Volta Sync</p>
                <p className="text-xs font-mono text-cyan-400">Stable</p>
              </div>
              <div className="bg-slate-900/50 p-2 rounded border border-slate-800/50">
                <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">CPU</p>
                <p className="text-xs font-mono text-slate-300">{d.cpu} vCPU</p>
              </div>
              <div className="bg-slate-900/50 p-2 rounded border border-slate-800/50">
                <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Status</p>
                <p className="text-xs font-mono text-slate-300 uppercase">{d.status}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck size={12} className="text-emerald-500/70" />
                <span className="uppercase text-[8px] font-bold">Healthyneurals Substrate</span>
              </div>
              <span className="text-slate-600 uppercase text-[8px] font-bold">WebSocket Latency: 4ms</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
