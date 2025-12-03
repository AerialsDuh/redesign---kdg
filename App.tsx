import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BackgroundElements } from './components/BackgroundElements';
import { Services } from './components/Services';
import { AboutSection } from './components/AboutSection';
import { CareerSection } from './components/CareerSection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Global Background (Lenses, Gradients) */}
      <BackgroundElements />

      {/* Main Navigation */}
      <Navigation />

      {/* Main Content Areas */}
      <main>
        <Hero />
        
        {/* Divider Effect */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        
        <Services />
        
        {/* Divider Effect */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        
        <AboutSection />

        {/* Divider Effect */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

        <CareerSection />
      </main>

      {/* Contact & Footer */}
      <Footer />

      {/* AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;