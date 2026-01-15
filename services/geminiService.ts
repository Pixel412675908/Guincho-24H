
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getHairConsultation = async (hairType: string, desiredLook: string, currentCondition: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analise como um hair stylist profissional: Meu cabelo é ${hairType}, procuro um visual ${desiredLook} e a condição atual é ${currentCondition}. Sugira serviços específicos e dê dicas de manutenção.`,
    config: {
      systemInstruction: "Você é um consultor de beleza premium. Responda de forma elegante, profissional e empática em português. Foque em serviços de salão.",
      temperature: 0.7,
    },
  });
  return response.text;
};

export const generateStylePreview = async (prompt: string, aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9" = "1:1") => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [{ text: `High quality professional hair style photography: ${prompt}. Elegant lighting, salon background, 8k resolution.` }]
    },
    config: {
      imageConfig: {
        aspectRatio,
        imageSize: "1K"
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

export const animateStyle = async (imageBase64: string, prompt: string) => {
  const ai = getAIClient();
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt || 'Slow motion cinematic shot of the hair moving elegantly',
    image: {
      imageBytes: imageBase64.split(',')[1],
      mimeType: 'image/png',
    },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '9:16'
    }
  });

  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
};
