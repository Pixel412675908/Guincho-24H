
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-beige overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000?random=5" 
                alt="Interior do Salão" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full -z-0"></div>
            <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-gold text-4xl font-serif font-bold mb-1">15+</p>
              <p className="text-gray-600 text-sm font-medium">Anos de <br />Excelência</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-gold text-sm font-medium tracking-widest uppercase mb-4">A nossa história</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                Paixão por revelar a sua melhor versão.
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              O Lumina Hair Studio nasceu do desejo de criar um ambiente onde a técnica se encontra com a arte. Nossa missão é oferecer mais do que um serviço capilar; proporcionamos uma experiência de renovação e autoconfiança.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Profissionais Qualificados",
                "Ambiente Luxuoso & Privativo",
                "Produtos Internacionais",
                "Atendimento Personalizado"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-gold/10 p-1 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/100/100?random=9" 
                  alt="Fundadora" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <p className="font-serif text-xl text-gray-900">Julianna Marques</p>
                  <p className="text-gray-500 text-sm">Fundadora & Master Stylist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
