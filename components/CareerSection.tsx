import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Mountain } from 'lucide-react';

interface JobOffer {
  id: string;
  title: string;
  department: string;
  type: string;
  tags: string[];
}

const JOBS: JobOffer[] = [
  {
    id: '1',
    title: 'Verfahrensmechaniker Kunststoff (m/w/d)',
    department: 'Produktion',
    type: 'Vollzeit',
    tags: ['Schichtbetrieb', 'High-Tech']
  },
  {
    id: '2',
    title: 'IT System Administrator (m/w/d)',
    department: 'IT & Infrastructure',
    type: 'Vollzeit',
    tags: ['In-House', 'Security']
  },
  {
    id: '3',
    title: 'Mitarbeiter Logistik & Fulfillment (m/w/d)',
    department: 'Logistik',
    type: 'Vollzeit / Teilzeit',
    tags: ['Automatisierung', 'SAP']
  }
];

export const CareerSection: React.FC = () => {
  return (
    <section id="karriere" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Zukunft formen. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Im Herzen der Natur.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto md:mx-0"></div>
          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            Werden Sie Teil eines Teams, das technologische Präzision mit Tiroler Bodenständigkeit verbindet. 
            Arbeiten, wo andere Urlaub machen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Benefits / Culture */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-slate-900/40">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="text-cyan-400" /> Warum KDG?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 h-fit">
                    <Mountain size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Work-Life-Balance im Lechtal</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Der Naturpark Lechtal liegt direkt vor der Bürotür. Mittagspause am Fluss, Feierabend am Berg.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 h-fit">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">High-Tech Umgebung</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Arbeiten mit modernsten Spritzgussanlagen und automatisierten Robotersystemen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 h-fit">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Sicherer Arbeitsplatz</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Als familiengeführtes Unternehmen bieten wir Stabilität und langfristige Perspektiven.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Application Call */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-slate-900 border border-cyan-500/20 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Kein passender Job dabei?</h3>
              <p className="text-slate-400 text-sm mb-6">Wir sind immer auf der Suche nach Talenten. Senden Sie uns Ihre Initiativbewerbung.</p>
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all w-full md:w-auto">
                Initiativ bewerben
              </button>
            </div>
          </div>

          {/* Right Column: Job List */}
          <div className="flex flex-col gap-4">
            {JOBS.map((job) => (
              <div key={job.id} className="group glass-panel p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10} /> {job.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">{job.title}</h3>
                    
                    <div className="flex gap-2 mt-4">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <ArrowRight size={20} className="-ml-1 group-hover:ml-0 transition-all" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
              </div>
            ))}
            
            <a href="#" className="mt-4 text-center text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2">
              Alle Stellenangebote ansehen <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};