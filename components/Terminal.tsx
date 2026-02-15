
import React from 'react';
import { LogEntry } from '../types';

interface TerminalProps {
  logs: LogEntry[];
}

export const Terminal: React.FC<TerminalProps> = ({ logs }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-400';
      case 'warn': return 'text-yellow-400';
      case 'success': return 'text-emerald-400';
      default: return 'text-sky-400';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex flex-col h-full shadow-2xl">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-xs font-mono text-slate-500 font-medium tracking-widest uppercase">BlinkNGv8 Console</span>
        <div className="w-12" />
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-1 bg-[radial-gradient(circle_at_top,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)]"
      >
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 hover:bg-slate-900/50 py-0.5 rounded px-1 transition-colors">
            <span className="text-slate-600 shrink-0">[{log.timestamp.toLocaleTimeString()}]</span>
            <span className={`font-bold shrink-0 uppercase text-[10px] w-12 ${getLevelColor(log.level)}`}>{log.level}</span>
            <span className="text-slate-300 break-all">{log.message}</span>
          </div>
        ))}
        {logs.length === 0 && (
          <div className="text-slate-700 italic">Waiting for system handshake...</div>
        )}
      </div>
    </div>
  );
};
