
import React from 'react';
import { Scissors, Palmtree, Sparkles, Heart, Star } from 'lucide-react';
import { Service, TeamMember, Testimonial, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Personalizado',
    description: 'Cortes modernos que realçam sua estrutura facial.',
    fullDescription: 'Nossa equipe estuda seu visagismo para criar um corte que não apenas siga as tendências, mas que harmonize perfeitamente com seu rosto e estilo de vida.',
    icon: 'scissors',
    benefits: ['Análise de visagismo inclusa', 'Lavagem relaxante', 'Dicas de finalização']
  },
  {
    id: '2',
    name: 'Coloração & Mechas',
    description: 'Técnicas avançadas para cores vibrantes e saudáveis.',
    fullDescription: 'Especialistas em morena iluminada, loiros platinados e cobertura de brancos. Utilizamos produtos premium que preservam a integridade da fibra capilar.',
    icon: 'palette',
    benefits: ['Teste de mecha obrigatório', 'Proteção pré-química', 'Matização inclusa']
  },
  {
    id: '3',
    name: 'Tratamentos Recomposição',
    description: 'Recuperação intensiva de brilho e maciez.',
    fullDescription: 'Protocolos exclusivos de hidratação, nutrição e reconstrução capilar. Ideal para cabelos que passaram por processos químicos ou danos ambientais.',
    icon: 'sparkles',
    benefits: ['Diagnóstico capilar', 'Massagem craniana', 'Selagem de cutículas']
  },
  {
    id: '4',
    name: 'Pacote Dia de Noiva',
    description: 'O cuidado completo para o seu dia especial.',
    fullDescription: 'Um refúgio de paz e luxo para noivas. Incluímos teste de penteado, maquiagem de alta durabilidade e assistência completa durante os preparativos.',
    icon: 'heart',
    benefits: ['Espaço privativo', 'Acompanhamento fotográfico', 'Brinde especial']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Julianna Marques',
    role: 'Hair Stylist & Master Colorist',
    bio: 'Com mais de 10 anos de experiência em Paris, Julianna é especialista em loiros naturais e técnicas de visagismo.',
    photo: 'https://picsum.photos/400/500?random=1',
    specialties: ['Loiros', 'Cortes Curtos', 'Visagismo']
  },
  {
    id: '2',
    name: 'Ricardo Silva',
    role: 'Especialista em Tratamentos',
    bio: 'Focado na saúde capilar, Ricardo desenvolve protocolos personalizados para recuperação de fios danificados.',
    photo: 'https://picsum.photos/400/500?random=2',
    specialties: ['Terapia Capilar', 'Cronograma', 'Químicas']
  },
  {
    id: '3',
    name: 'Sofia Helena',
    role: 'Makeup & Bridal Expert',
    bio: 'Especialista em maquiagem social e penteados clássicos para eventos e noivas.',
    photo: 'https://picsum.photos/400/500?random=3',
    specialties: ['Penteados', 'Maquiagem', 'Produção']
  }
];

export const GALLERY: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/600/600?random=10', title: 'Corte Médio Camadas' },
  { id: '2', url: 'https://picsum.photos/600/600?random=11', title: 'Iluminado Canela' },
  { id: '3', url: 'https://picsum.photos/600/600?random=12', title: 'Loiro Pérola' },
  { id: '4', url: 'https://picsum.photos/600/600?random=13', title: 'Ambiente Sofisticado' },
  { id: '5', url: 'https://picsum.photos/600/600?random=14', title: 'Tratamento de Brilho' },
  { id: '6', url: 'https://picsum.photos/600/600?random=15', title: 'Penteado Boho' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Carla Souza', comment: 'A melhor experiência que já tive em um salão. O atendimento é impecável e meu cabelo nunca esteve tão saudável.', rating: 5 },
  { id: '2', name: 'Mariana Lima', comment: 'Julianna é uma artista! Ela entendeu exatamente o que eu queria e superou as expectativas.', rating: 5 },
  { id: '3', name: 'Beatriz Costa', comment: 'O ambiente é maravilhoso e relaxante. O tratamento de reconstrução salvou meus fios.', rating: 5 },
];
