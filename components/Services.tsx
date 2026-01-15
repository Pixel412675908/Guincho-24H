
import React, { useState } from 'react';
import { Scissors, Palette, Sparkles, Heart, X, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const IconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors size={32} />,
  palette: <Palette size={32} />,
  sparkles: <Sparkles size={32} />,
  heart: <Heart size={32} />,
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Nossas Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Serviços & Pacotes</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-beige p-10 rounded-3xl border border-transparent hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold mb-8 shadow-sm group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                {IconMap[service.icon]}
              </div>
              <h4 className="text-xl font-serif text-gray-900 mb-4">{service.name}</h4>
              <p className="text-gray-500 line-clamp-2 mb-6">{service.description}</p>
              <span className="text-gold font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Ver detalhes <span className="text-lg">→</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl animate-scale-up">
            <button 
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition"
              onClick={() => setSelectedService(null)}
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="text-gold mb-6">{IconMap[selectedService.icon]}</div>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">{selectedService.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selectedService.fullDescription}
              </p>
              
              <div className="space-y-4 mb-10">
                <h4 className="font-medium text-gray-900 uppercase tracking-widest text-sm">Benefícios</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-gold/10 p-1 rounded-full text-gold">
                        <Check size={16} />
                      </div>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={`https://wa.me/5511999999999?text=Olá, gostaria de agendar um ${selectedService.name}`}
                target="_blank"
                className="block w-full py-5 bg-gold text-white text-center rounded-2xl font-bold hover:bg-gold/90 transition shadow-xl shadow-gold/20"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
