
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Nossa Equipe</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Especialistas em Você</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TEAM.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 shadow-xl aspect-[4/5]">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="text-2xl font-serif mb-1 group-hover:text-gold transition-colors">{member.name}</h4>
                <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((s, i) => (
                    <span key={i} className="text-[10px] bg-white px-2 py-1 rounded-full border border-gray-100 text-gray-500 uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
