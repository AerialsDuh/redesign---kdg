import React from 'react';
import { Leaf } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nachhaltigkeit" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <Leaf size={20} />
            <span className="text-sm uppercase tracking-widest font-bold">Nature & Tech</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Innovation im Einklang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">mit dem Lechtal.</span>
          </h2>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            Als eines der führenden High-Tech Unternehmen Österreichs sehen wir unseren Standort im Lechtal nicht nur als Kulisse, sondern als Verpflichtung.
          </p>
          <p className="text-slate-400 text-base mb-8 leading-relaxed">
            Die Reinheit des Wassers und die klare Luft spiegeln sich in der Klarheit unserer optischen Linsen wider. Wir nutzen Wasserkraft und modernste Recycling-Technologien, um unseren ökologischen Fußabdruck zu minimieren.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs uppercase tracking-wider text-emerald-400">Grüne Energie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt; 1µm</div>
              <div className="text-xs uppercase tracking-wider text-cyan-400">Fertigungstoleranz</div>
            </div>
          </div>
        </div>

        {/* Image/Visual Side - Abstract representation of Lens + Mountain */}
        <div className="relative h-[500px] w-full">
          {/* Main Container with Diamond Clip */}
          <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)' }}>
            <img 
              src="https://picsum.photos/800/800?image=1044" 
              alt="Lechtal Nature" 
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
          </div>

          {/* Decorative Circles behind */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-emerald-500/30 rounded-full z-0 animate-spin-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-cyan-500/30 rounded-full z-0 animate-float"></div>
        </div>
      </div>
    </section>
  );
};