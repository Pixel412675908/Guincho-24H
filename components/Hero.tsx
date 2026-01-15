
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=100" 
          alt="Salon Background" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 bg-gold/20 border border-gold/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Premium Hair Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
            Transforme seu <br /> Visual com <span className="italic text-gold">Estilo</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
            Cortes, colorações e tratamentos capilares personalizados. Um novo conceito em beleza e bem-estar para o seu cabelo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-gold text-white rounded-full text-lg font-medium hover:bg-gold/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-gold/20"
            >
              Marcar Atendimento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
