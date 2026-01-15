
import React from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-beige rounded-[3rem] overflow-hidden shadow-2xl border border-gold/5">
          <div className="grid lg:grid-cols-2">
            {/* Info */}
            <div className="p-10 md:p-20 bg-gold text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif mb-8">Vamos Agendar?</h3>
                <p className="text-white/80 text-lg mb-12">
                  Estamos prontos para transformar seu visual. Entre em contato ou preencha o formulário e retornaremos em breve.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-widest">Telefone & WhatsApp</p>
                      <p className="text-xl font-medium">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-widest">E-mail</p>
                      <p className="text-xl font-medium">contato@lumina.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-widest">Endereço</p>
                      <p className="text-xl font-medium">Av. Paulista, 1234 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl transition">
                  <Instagram />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl transition">
                  <Facebook />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-20 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome Completo</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gold/20" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Telefone</label>
                    <input type="tel" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gold/20" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Serviço de Interesse</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gold/20 appearance-none">
                    <option>Selecione um serviço</option>
                    <option>Corte Feminino</option>
                    <option>Coloração / Mechas</option>
                    <option>Tratamentos</option>
                    <option>Dia de Noiva</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem</label>
                  <textarea className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-gold/20 h-32" placeholder="Como podemos te ajudar?"></textarea>
                </div>
                
                <button className="w-full py-5 bg-gold text-white rounded-2xl font-bold text-lg hover:bg-gold/90 transition shadow-xl shadow-gold/10 flex items-center justify-center gap-3">
                  <Send size={20} />
                  Enviar Pedido
                </button>
                
                <p className="text-center text-gray-400 text-sm">
                  Entraremos em contato via WhatsApp o mais rápido possível.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
