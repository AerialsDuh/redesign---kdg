import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Abstracted 'Circles' from original logo, turned into optical lenses/orbitals */}
        <div className="absolute inset-0 border border-cyan-400/50 rounded-full animate-spin-slow" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
        <div className="absolute inset-1 border border-emerald-400/40 rounded-full animate-reverse-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-widest text-white leading-none">KDG</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/80 leading-none mt-1">Optical</span>
      </div>
    </div>
  );
};