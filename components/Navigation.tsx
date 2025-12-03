import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Kompetenzen', href: '#kompetenzen' },
  { label: 'Technologie', href: '#technologie' },
  { label: 'Nachhaltigkeit', href: '#nachhaltigkeit' },
  { label: 'Karriere', href: '#karriere' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Top Left as requested */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2 border border-white/20 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 glass-panel">
            Anfrage
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
           {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-lg text-slate-200 py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};