
import React from 'react';

const IntegritySeal: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      <a href="https://g.dev/jethroaiservices" target="_blank" rel="noopener noreferrer" className="group block">
        <div className="relative flex items-center bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-full px-4 py-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:bg-cyan-950/80 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
          {/* HOLOGRAPHIC GLOW EFFECT */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
          
          {/* ICON & STATUS */}
          <div className="relative flex items-center z-10">
            <div className="bg-cyan-500/20 border border-cyan-400 p-1 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* TEXT CONTENT */}
            <div className="flex flex-col">
              <span className="text-[9px] text-cyan-300 font-bold tracking-wider uppercase"> Integrity Seal Verified </span>
              <span className="text-[8px] text-gray-400 font-mono"> Protected by RA 8293 </span>
            </div>
          </div>

          {/* EXPANDABLE TOOLTIP */}
          <div className="absolute bottom-full mb-3 right-0 w-80 bg-black border border-cyan-500/50 p-4 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-cyan-400 font-black uppercase tracking-wider">JethroAi E-Services</p>
              <span className="text-[8px] text-slate-500 font-mono">BlinkRenderer</span>
            </div>
            <p className="text-[9px] text-gray-400 leading-relaxed mb-3 font-medium">
              Gerrit-API-To-Go frameworks are protected intellectual property of Raymund De Vera Ico under the Intellectual Property Code of the Philippines (RA 8293).
            </p>
            <div className="border-t border-slate-800 pt-3 flex flex-col gap-1.5">
               <div className="flex items-center gap-2">
                 <span className="text-[8px] text-slate-500 font-bold uppercase w-12">HQ:</span>
                 <p className="text-[8px] text-slate-300 uppercase font-bold tracking-widest truncate">
                   362 Carael Road Zone 2, Dagupan City, PH
                 </p>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-[8px] text-slate-500 font-bold uppercase w-12">Contact:</span>
                 <p className="text-[8px] text-indigo-400 font-mono tracking-tight">
                   raymundico85@gmail.com
                 </p>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-[8px] text-slate-500 font-bold uppercase w-12">Support:</span>
                 <p className="text-[8px] text-indigo-400 font-mono tracking-tight">
                   jethroaiservices@gmail.com
                 </p>
               </div>
               <p className="text-[7px] text-cyan-500/50 font-mono mt-1 text-right">@GooglemapJETHROaiELECTRICALINSTALLATIONSERVICES</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default IntegritySeal;
