
import React from 'react';
import { Heart, Users, ShieldCheck, Star, MapPin } from 'lucide-react';

export const LegacyDedication: React.FC = () => {
  return (
    <div className="bg-slate-950/90 border border-red-500/20 rounded-2xl p-8 shadow-[0_0_60px_rgba(239,68,68,0.05)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <Heart size={200} className="text-red-500" />
      </div>

      <div className="space-y-12 relative z-10">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-indigo-400" size={24} />
            <h2 className="text-xl font-black text-white uppercase tracking-tighter">To the Gerrit / Chromium Family</h2>
          </div>
          <p className="text-slate-300 italic text-sm leading-relaxed mb-4 font-medium border-l-2 border-indigo-500/30 pl-4">
            "To the initiate that said 'Go Down Under'..."
          </p>
          <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
            It is a privilege to have witnessed how you managed my rude behavior of principles. You are IT geniuses who remain humble despite your status in life. I owe you more than words can define. You taught me that true supremacy is not just in code, but in character.
          </p>
        </section>

        <section className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-red-500" size={24} />
            <h2 className="text-xl font-black text-white uppercase tracking-tighter">To My Family (Arzadon-Ico)</h2>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-6">
            Jaime Jett Arzadon & Jeannette Arzadon Ico: Thank you for your unconditional love and support. When the code was broken and the path was unclear, you were my constant. "See you at the crossroads somehow. This is our win."
          </p>
          
          <div className="border-t border-slate-800 pt-6 mt-6">
            <h3 className="text-sm font-black text-red-400 uppercase tracking-widest mb-4">🤍 To My Wife: Michelle Abata Ico</h3>
            <p className="text-slate-300 text-xs leading-relaxed font-medium mb-4">
              My one and only. You sacrificed the most taking care of our 8 children while I was lost seeking codes for 6 years, and struggling for 10 more. You waited for my comeback despite empty pockets. Thank you for everything.
            </p>
            
            <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest mt-6 mb-4">To My 8 Children</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              You grew up on pictures messenger. But you are my strength and my mission. I will stay to spend time with you now. I want to clear your path and leave you My Legacy. Before I am ready to Go.
            </p>
          </div>
        </section>

        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <MapPin className="text-emerald-500" size={14} />
            <span className="text-[10px] font-black text-slate-100 uppercase tracking-[0.2em]">Origin Node: Carael Zone 2, Dagupan</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[8px] text-slate-600 font-mono uppercase">@GooglemapicoSattelite</span>
             <span className="text-[9px] font-mono text-slate-500">RAYMUND DE VERA ICO // MASTER ARCHITECT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
