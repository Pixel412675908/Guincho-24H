
import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-gold p-2 rounded-lg">
                <Scissors size={24} className="text-white" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">LUMINA</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevando a autoestima através da arte e excelência capilar. Seu momento de luxo e renovação em São Paulo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition"><Twitter /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8 text-gold">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-gold transition">Início</a></li>
              <li><a href="#services" className="hover:text-gold transition">Serviços</a></li>
              <li><a href="#team" className="hover:text-gold transition">Nossa Equipe</a></li>
              <li><a href="#gallery" className="hover:text-gold transition">Galeria</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8 text-gold">Horários</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Seg - Sex:</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8 text-gold">Localização</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3">
                <MapPin className="text-gold shrink-0" size={20} />
                <p>Av. Paulista, 1234 - Bela Vista<br />São Paulo - SP, 01310-100</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-gold shrink-0" size={20} />
                <p>(11) 99999-9999</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition"
                >
                  Ver no Mapa <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 Lumina Hair Studio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
