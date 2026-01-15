
import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Galeria de Resultados</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((img) => (
            <div 
              key={img.id} 
              className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-lg border border-gray-100"
              onClick={() => setActiveImage(img.url)}
            >
              <img src={img.url} alt={img.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-4 rounded-full text-gold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Search size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 animate-fade-in" onClick={() => setActiveImage(null)}>
          <button className="absolute top-10 right-10 text-white/70 hover:text-white">
            <X size={40} />
          </button>
          <img src={activeImage} alt="Full screen" className="max-w-full max-h-full rounded-2xl animate-scale-up" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
