
import React, { useState } from 'react';
import { Phone, Send, X, MessageCircle, MapPin, User, Map, Instagram, ChevronDown, CreditCard, Landmark, Check } from 'lucide-react';

const GuinchoLogo = () => (
  <svg viewBox="0 0 240 100" className="w-14 h-7 md:w-20 md:h-10 text-primary" fill="currentColor">
    <path d="M10,80 L10,45 L50,45 L80,20 L120,20 L120,80 Z" />
    <path d="M75,30 L110,30 L110,55 L55,55 Z" fill="black" fillOpacity="0.3" />
    <rect x="120" y="70" width="110" height="10" />
    <path d="M120,70 L230,70 L230,62 L125,55 Z" />
    <circle cx="40" cy="85" r="12" />
    <circle cx="165" cy="85" r="12" />
    <circle cx="205" cy="85" r="12" />
  </svg>
);

const App: React.FC = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [outroVeiculo, setOutroVeiculo] = useState('');
  const [problema, setProblema] = useState('');
  const [outroProblema, setOutroProblema] = useState('');
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5519999999999";
    const veiculoFinal = veiculo === 'Outro' ? outroVeiculo : veiculo;
    const problemaFinal = problema === 'Outro' ? outroProblema : problema;
    const message = `🚨 *SOLICITAÇÃO DE GUINCHO 24H* 🚨\n----------------------------------\n👤 *Nome:* ${nome}\n📱 *Telefone:* ${telefone}\n📍 *Local:* ${localizacao}\n🚗 *Veículo:* ${veiculoFinal}\n🛠️ *Problema:* ${problemaFinal}\n----------------------------------\n_Enviado via Landing Page_`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const faqData = [
    {
      q: "Qual o tempo médio de espera?",
      a: "O nosso tempo médio de chegada em Piracicaba é de 20 a 30 minutos."
    },
    {
      q: "Aceitam seguros de veículos?",
      a: "Sim, emitimos nota fiscal para que possa solicitar o reembolso junto à sua seguradora."
    },
    {
      q: "O guincho pode levar passageiros?",
      a: "Sim, os nossos caminhões têm cabine para transportar até 2 passageiros com total conforto e segurança."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-dark">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-full h-20 bg-dark/95 backdrop-blur-md border-b-2 border-primary z-[100] flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-3">
          <GuinchoLogo />
          <span className="font-heading font-extrabold text-xl md:text-2xl text-primary tracking-tighter leading-none">
            GUINCHO <span className="text-white">24H</span>
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <a href="https://www.google.com/maps/search/?api=1&query=Piracicaba+SP" target="_blank" className="hidden md:flex items-center gap-2 text-white font-medium hover:text-primary transition-colors text-sm border border-white/20 px-4 py-2 rounded-full">
            <Map size={16} /> ONDE ESTAMOS
          </a>
          <a href="tel:5519999999999" className="bg-accent hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 text-sm transition-all shadow-lg shadow-accent/20">
            <Phone size={18} /> <span className="hidden sm:inline uppercase text-xs">Ligar Agora</span>
          </a>
        </div>
      </header>

      {/* SEÇÃO HERO - OTIMIZADA PARA FOCO NO GUINCHO */}
      <section className="mt-20 bg-white flex flex-col overflow-hidden relative">
        <div className="w-full bg-dark pt-12 pb-8 text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-primary leading-tight uppercase tracking-tighter">
            GUINCHO 24H EM <span className="text-white">PIRACICABA</span> E REGIÃO
          </h1>
          <p className="text-gray-400 mt-2 font-medium tracking-widest uppercase text-xs md:text-sm">Assistência Profissional • Chegada Rápida • Preço Justo</p>
        </div>
        
        {/* Container da Imagem com Ajuste de Enquadramento */}
        <div 
          className="w-full h-[45vh] md:h-[60vh] lg:h-[70vh] relative transition-all duration-700"
          style={{ 
            backgroundImage: 'url(https://i.postimg.cc/T2WjXh8h/file-000000000e74720e8a5331128c2ffc01.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Gradiente para suavizar a base da imagem com o fundo escuro do formulário */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL - FORMULÁRIO */}
      <main className="relative z-20 bg-[#111111] py-12 md:py-20 shadow-[0_-30px_60px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border-t-8 border-primary shadow-2xl mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-10 text-white uppercase tracking-tight">
                Solicitar <span className="text-primary">Socorro Agora</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase ml-1">Seu Nome</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input type="text" required placeholder="Digite seu nome" className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-primary outline-none transition-all" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase ml-1">WhatsApp</label>
                    <div className="relative">
                      <i className="fab fa-whatsapp absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                      <input type="tel" required placeholder="(19) 99999-9999" className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-primary outline-none transition-all" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase ml-1">Localização Atual</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="text" required placeholder="Ex: Av. Independência ou Rodovia SP-127..." className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-primary outline-none transition-all" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase ml-1">Tipo de Veículo</label>
                    <select required className="w-full bg-[#222] border border-white/10 rounded-xl py-4 px-4 text-white focus:border-primary outline-none appearance-none cursor-pointer" value={veiculo} onChange={(e) => setVeiculo(e.target.value)}>
                      <option value="" className="text-gray-500">Selecione o tipo...</option>
                      <option value="Carro de Passeio">Carro de Passeio</option>
                      <option value="Moto">Moto</option>
                      <option value="SUV/Caminhonete">SUV/Caminhonete</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase ml-1">Qual o problema?</label>
                    <select required className="w-full bg-[#222] border border-white/10 rounded-xl py-4 px-4 text-white focus:border-primary outline-none appearance-none cursor-pointer" value={problema} onChange={(e) => setProblema(e.target.value)}>
                      <option value="" className="text-gray-500">O que aconteceu?</option>
                      <option value="Pane Mecânica/Elétrica">Pane Mecânica/Elétrica</option>
                      <option value="Bateria Descarregada">Bateria Descarregada</option>
                      <option value="Pneu Furado">Pneu Furado</option>
                      <option value="Acidente/Colisão">Acidente/Colisão</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                {veiculo === 'Outro' && <input type="text" placeholder="Qual o veículo?" required className="w-full bg-[#222] border border-primary/40 rounded-xl py-4 px-4 text-white outline-none" value={outroVeiculo} onChange={(e) => setOutroVeiculo(e.target.value)} />}
                {problema === 'Outro' && <input type="text" placeholder="Descreva o problema" required className="w-full bg-[#222] border border-primary/40 rounded-xl py-4 px-4 text-white outline-none" value={outroProblema} onChange={(e) => setOutroProblema(e.target.value)} />}

                <button type="submit" className="w-full bg-primary text-dark font-heading font-black py-5 rounded-2xl uppercase text-xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-primary/10">
                  <Send size={24} /> Solicitar Socorro Agora
                </button>
              </form>
            </div>

            {/* SECÇÃO DE CIDADES ATENDIDAS (SEO) */}
            <section className="bg-black border border-primary/20 rounded-3xl p-8 md:p-12 mb-20 text-center">
              <h3 className="text-primary font-heading font-bold text-2xl md:text-3xl mb-6 uppercase tracking-widest">
                Área de Atendimento
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Piracicaba, Saltinho, Rio das Pedras, São Pedro, Charqueada e toda a região metropolitana.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {['Piracicaba', 'Saltinho', 'Rio das Pedras', 'São Pedro', 'Charqueada'].map(city => (
                  <span key={city} className="bg-primary/10 text-primary border border-primary/20 px-4 py-1 rounded-full text-sm font-bold uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </section>

            {/* SECÇÃO FAQ */}
            <section className="bg-[#111] mb-20">
              <h3 className="text-white font-heading font-bold text-3xl mb-10 text-center uppercase tracking-tight">
                Dúvidas <span className="text-primary">Frequentes</span>
              </h3>
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index} className="border border-primary/30 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 bg-[#1a1a1a] text-left hover:bg-[#222] transition-colors"
                    >
                      <span className="text-white font-bold text-lg pr-4">{item.q}</span>
                      <ChevronDown className={`text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 p-6 opacity-100' : 'max-h-0 p-0 opacity-0 pointer-events-none'}`}>
                      <p className="text-gray-300">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="w-full bg-[#111111] border-t-2 border-primary/10 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-4">
            <GuinchoLogo />
            <span className="font-heading font-bold text-primary tracking-tighter uppercase text-xl">GUINCHO 24H</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 text-center">
            <div className="space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">Localização</span>
              <p className="text-white text-sm">Rua Exemplo, 123 - Bairro Industrial,<br />Piracicaba - SP</p>
            </div>
            <div className="space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">Horário de Funcionamento</span>
              <p className="text-white text-sm font-medium">Atendimento 24 horas, 7 dias por semana.</p>
            </div>
          </div>

          {/* FORMAS DE PAGAMENTO NO RODAPÉ */}
          <div className="py-8 border-y border-white/5 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Formas de Pagamento</span>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Landmark size={18} className="text-primary" /> Pix
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <CreditCard size={18} className="text-primary" /> Crédito (Parcelamos)
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Check size={18} className="text-primary" /> Débito
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a href="https://www.google.com/maps/search/?api=1&query=Piracicaba+SP" target="_blank" className="bg-white/5 hover:bg-primary hover:text-dark border border-white/20 text-white font-bold py-3 px-12 rounded-full flex items-center gap-2 transition-all">
              <Map size={20} /> ONDE ESTAMOS
            </a>
          </div>
          <div className="pt-8">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              © 2024 Guincho 24h Piracicaba. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-center gap-4">
        <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${isFabOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
          <a href="https://instagram.com" target="_blank" className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"><Instagram size={22} /></a>
          <a href="tel:5519999999999" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"><Phone size={22} /></a>
          <a href="https://wa.me/5519999999999" target="_blank" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"><i className="fab fa-whatsapp text-2xl"></i></a>
        </div>
        <button onClick={() => setIsFabOpen(!isFabOpen)} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 outline-none ${isFabOpen ? 'bg-accent rotate-45' : 'bg-primary rotate-0'}`}>
          {isFabOpen ? <X size={32} className="text-white" /> : <MessageCircle size={32} className="text-dark" />}
          {!isFabOpen && <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white"></span>}
        </button>
      </div>

    </div>
  );
};

export default App;
