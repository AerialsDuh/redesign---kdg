import React from 'react';
import { Eye, Layers, Leaf, Cpu, Truck } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'optics',
    title: 'Optische Komponenten',
    description: 'Hochpräzisions-Linsen für Automotive und Lichtinstallationen. Maximale Lichtausbeute durch perfekte Oberflächengüte.',
    icon: 'eye',
    image: 'https://picsum.photos/400/300?grayscale&blur=2'
  },
  {
    id: 'injection',
    title: 'Präzisions-Spritzguss',
    description: 'Verarbeitung von Hochleistungspolymeren mit Toleranzen im Mikrometerbereich.',
    icon: 'layers',
    image: 'https://picsum.photos/400/301?grayscale&blur=2'
  },
  {
    id: 'logistics',
    title: 'Fulfillment & Logistik',
    description: 'Maßgeschneiderte Logistiklösungen, direkt aus dem Zentrum Europas.',
    icon: 'truck',
    image: 'https://picsum.photos/400/302?grayscale&blur=2'
  }
];

const IconMap = {
  eye: Eye,
  layers: Layers,
  leaf: Leaf,
  cpu: Cpu,
  truck: Truck
};

export const Services: React.FC = () => {
  return (
    <section id="kompetenzen" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Kompetenz im Fokus</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={service.id} className="group relative glass-panel p-1 rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-500">
                 {/* Card Content */}
                <div className="bg-slate-900/50 h-full p-8 rounded-xl relative z-10 flex flex-col items-start gap-6 border border-white/5">
                  <div className="p-4 bg-slate-800 rounded-full group-hover:bg-cyan-900/50 transition-colors">
                    <Icon className="text-cyan-400 w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
                  </div>

                  <div className="mt-auto pt-6 flex items-center text-sm font-medium text-cyan-500">
                    <span className="uppercase tracking-wider">Mehr erfahren</span>
                    <div className="ml-2 w-4 h-[1px] bg-cyan-500 group-hover:w-8 transition-all"></div>
                  </div>
                </div>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};