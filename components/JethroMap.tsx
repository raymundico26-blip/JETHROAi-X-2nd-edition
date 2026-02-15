
import React from 'react';
import { MapPin, Globe, Navigation, Target, Radio } from 'lucide-react';

export const JethroMap: React.FC = () => {
  // Coordinates for Dagupan City, Carael Road Zone 2 specifically
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15328.756784365737!2d120.3243916!3d16.0556272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391678f24419965%3A0x60020f9c6d32832!2sCarael%2C%20Dagupan%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1705400000000!5m2!1sen!2sph";

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl backdrop-blur-md relative group">
      <div className="p-5 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <Target size={18} className="text-emerald-400 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em]">Grounding Node: Zone 2</h2>
            <p className="text-[8px] text-slate-500 font-mono mt-0.5 font-bold uppercase tracking-widest italic">
              @GOOGLEMAPV8V8 // @GooglemapicoSattelite
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <div className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[7px] text-emerald-400 font-black uppercase tracking-tighter">
             PRECISION LOCK
           </div>
           <span className="text-[6px] text-slate-600 font-mono mt-1">LAT: 16.055 // LON: 120.324</span>
        </div>
      </div>
      
      <div className="flex-1 min-h-[300px] relative">
        <iframe
          title="Jethro AI Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />
        
        {/* Overlay HUD elements */}
        <div className="absolute inset-0 pointer-events-none border-[20px] border-transparent group-hover:border-emerald-500/5 transition-all duration-700">
           <div className="absolute top-4 left-4 p-2 bg-black/60 backdrop-blur-md border border-emerald-500/20 rounded text-[8px] font-mono text-emerald-400/80">
              SCANNING_CARAEL_ROAD...
           </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
            <button className="p-3 bg-black/80 border border-slate-700 rounded-xl text-emerald-400 hover:text-emerald-300 shadow-2xl backdrop-blur-xl transition-all hover:scale-110 active:scale-95 group/nav">
                <Navigation size={18} className="group-hover/nav:rotate-45 transition-transform" />
            </button>
            <button className="p-3 bg-black/80 border border-slate-700 rounded-xl text-cyan-400 hover:text-cyan-300 shadow-2xl backdrop-blur-xl transition-all hover:scale-110 active:scale-95">
                <Radio size={18} />
            </button>
        </div>
      </div>

      <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]" />
                <span className="text-[9px] font-black text-slate-100 uppercase tracking-widest leading-none">362 Carael Road Zone 2, Dagupan City, Pangasinan</span>
            </div>
            <div className="flex items-center gap-2">
                <Globe size={12} className="text-emerald-500/50" />
                <span className="text-[8px] font-mono text-slate-600 uppercase">Philippines 2400</span>
            </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-900 pt-3">
           <span className="text-[7px] text-slate-600 font-mono uppercase tracking-[0.3em]">@GooglemapJETHROaiELECTRICALINSTALLATIONSERVICES</span>
           <span className="text-[7px] text-emerald-500 font-black uppercase tracking-widest">MASTER_NODE_ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
