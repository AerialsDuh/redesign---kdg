import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Gradient Orb - Top Right (Sunlight/Clarity) */}
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      
      {/* Large Gradient Orb - Bottom Left (Nature/Lechtal) */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[900px] h-[900px] rounded-full bg-emerald-600/10 blur-[130px] mix-blend-screen"></div>

      {/* Floating "Lenses" - Reinterpreting the circles from the logo */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-white/5 backdrop-blur-[1px] animate-float opacity-30"></div>
      <div className="absolute top-3/4 right-1/3 w-48 h-48 rounded-full border border-cyan-500/10 backdrop-blur-[2px] animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-2/3 w-24 h-24 rounded-full bg-white/5 blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Diamond/Crystal refractions */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
    </div>
  );
};