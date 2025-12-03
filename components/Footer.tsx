import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 scale-90 origin-left" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              KDG Mediatech / KDG Optical<br/>
              High-End Fertigungslösungen für anspruchsvolle Kunden weltweit. 
              Präzision aus den Alpen.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Elbigenalp 91</li>
              <li>6652 Elbigenalp, Tirol</li>
              <li>Austria</li>
              <li className="mt-4 text-cyan-400">+43 5634 500</li>
              <li>office@kdg.at</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Karriere</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} KDG. All rights reserved.</p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500 transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};