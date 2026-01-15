
import React, { useState } from 'react';
import { Sparkles, Loader2, Wand2, Play } from 'lucide-react';
import { getHairConsultation, generateStylePreview, animateStyle } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [hairType, setHairType] = useState('');
  const [desiredLook, setDesiredLook] = useState('');
  const [condition, setCondition] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | undefined>('');
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [generatingMedia, setGeneratingMedia] = useState(false);

  const handleConsult = async () => {
    if (!hairType || !desiredLook) return;
    setLoading(true);
    try {
      const advice = await getHairConsultation(hairType, desiredLook, condition);
      setResult(advice);
    } catch (error) {
      console.error(error);
      setResult("Desculpe, não consegui processar sua consulta agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePreview = async () => {
    setGeneratingMedia(true);
    try {
      const img = await generateStylePreview(desiredLook || "modern elegant hair style");
      setGeneratedImg(img);
    } catch (e) {
      console.error(e);
    } finally {
      setGeneratingMedia(false);
    }
  };

  const handleAnimate = async () => {
    if (!generatedImg) return;
    setGeneratingMedia(true);
    try {
      const vid = await animateStyle(generatedImg, "make the hair flow in the wind gracefully");
      setGeneratedVideo(vid);
    } catch (e) {
      console.error(e);
    } finally {
      setGeneratingMedia(false);
    }
  };

  return (
    <section id="ai-consultation" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige text-gold mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-medium uppercase tracking-wider">Inovação</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Consultoria Digital AI</h2>
          <p className="text-gray-600">Descubra o estilo ideal para você com nossa inteligência artificial avançada.</p>
        </div>

        <div className="bg-beige rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Tipo de Cabelo</label>
              <input
                type="text"
                placeholder="Ex: Liso fino, Cacheado 3C..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/20"
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Visual Desejado</label>
              <input
                type="text"
                placeholder="Ex: Moderno, clássico, ousado..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/20"
                value={desiredLook}
                onChange={(e) => setDesiredLook(e.target.value)}
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="block text-sm font-medium text-gray-700">Condição Atual (Opcional)</label>
              <textarea
                placeholder="Ex: Ressecado, com química, oleoso..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/20 h-24"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleConsult}
              disabled={loading}
              className="px-8 py-4 bg-gold text-white rounded-full hover:bg-gold/90 transition shadow-lg flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
              Obter Diagnóstico
            </button>
            <button
              onClick={handleGeneratePreview}
              disabled={generatingMedia || !desiredLook}
              className="px-8 py-4 bg-white text-gold border border-gold rounded-full hover:bg-beige transition flex items-center gap-2 disabled:opacity-50"
            >
              {generatingMedia ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
              Visualizar Estilo
            </button>
          </div>

          {result && (
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 animate-fade-in">
              <h3 className="text-xl font-serif mb-4 flex items-center gap-2 text-gold">
                <Sparkles size={20} /> Recomendações Lumina
              </h3>
              <div className="prose prose-gold max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {result}
              </div>
            </div>
          )}

          {(generatedImg || generatedVideo) && (
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {generatedImg && (
                <div className="relative group">
                  <p className="text-xs text-center mb-2 text-gray-500 uppercase">Preview Gerado</p>
                  <img src={generatedImg} alt="Preview do Estilo" className="rounded-2xl w-full h-auto shadow-xl" />
                  {!generatedVideo && !generatingMedia && (
                    <button
                      onClick={handleAnimate}
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg text-gold hover:scale-110 transition"
                      title="Animar Estilo"
                    >
                      <Play size={20} />
                    </button>
                  )}
                </div>
              )}
              {generatedVideo && (
                <div className="relative">
                  <p className="text-xs text-center mb-2 text-gray-500 uppercase">Cinemática de Movimento</p>
                  <video src={generatedVideo} autoPlay loop muted className="rounded-2xl w-full h-auto shadow-xl" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
