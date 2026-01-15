
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'AI Consultation', href: '#ai-consultation' },
    { name: 'Equipe', href: '#team' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-gold p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Scissors className="text-white" size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-800 md:text-white'}`}>
            LUMINA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-gold transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-800 md:text-white md:opacity-90 md:hover:opacity-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold/90 transition-all shadow-md active:scale-95"
          >
            Agendar Horário
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800 md:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full py-4 bg-gold text-white rounded-xl text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Horário
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
