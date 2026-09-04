import type { ImageFocus, ImagePresetName } from './image-presets';

export type SiteImage = {
  src: string;
  alt: string;
  preset: ImagePresetName;
  focus?: ImageFocus;
};

/**
 * Curadoria fotográfica da Home.
 * Regra editorial: evite reutilizar a mesma fotografia em seções diferentes.
 * Quando uma repetição for deliberada, mantenha-a limitada a dois contextos.
 */
export const siteImages = {
  hero: {
    src: '/images/hero-atelie.webp',
    alt: 'Crianças criando juntas no ateliê da Casa Criativa',
    preset: 'hero',
  },
  manifesto: {
    src: '/images/criacao-em-grupo.webp',
    alt: 'Alunas criando juntas no ateliê da Casa Criativa',
    preset: 'portrait',
    focus: { desktop: '50% 32%', tablet: '50% 30%', mobile: '50% 28%' },
  },
  experiences: {
    drawing: {
      src: '/images/aula-pintura-aquarela.jpg',
      alt: 'Aluna pintando com aquarela durante aula na Casa Criativa',
      preset: 'editorial',
      focus: { desktop: '50% 38%', tablet: '50% 35%', mobile: '50% 34%' },
    },
    ceramics: {
      src: '/images/modelagem-argila-maos.jpg',
      alt: 'Mão com argila durante oficina de modelagem na Casa Criativa',
      preset: 'process',
      focus: { desktop: '43% 58%', tablet: '43% 58%', mobile: '43% 58%' },
    },
    projects: {
      src: '/images/projeto-recorte-papel.jpg',
      alt: 'Crianças criando projetos com recortes de papel colorido',
      preset: 'editorial',
      focus: { desktop: '50% 34%', tablet: '50% 32%', mobile: '50% 30%' },
    },
  },
  gallery: [
    {
      src: '/images/obra-festa-junina.webp',
      alt: 'Aluna apresenta um cenário artístico colorido',
      preset: 'gallery',
      focus: { desktop: '50% 38%', tablet: '50% 28%', mobile: '50% 32%' },
    },
    {
      src: '/images/ceramica-processo.webp',
      alt: 'Mãos modelam detalhes florais em uma peça de cerâmica',
      preset: 'process',
    },
    {
      src: '/images/oficina-recorte-colagem.jpg',
      alt: 'Montagem de cenas de crianças criando com recortes coloridos',
      preset: 'gallery',
      focus: { desktop: '50% 45%', tablet: '50% 43%', mobile: '50% 42%' },
    },
    {
      src: '/images/ceramica-fria-processo.jpg',
      alt: 'Etapas de uma oficina de cerâmica fria com materiais de modelagem',
      preset: 'gallery',
      focus: { desktop: '50% 38%', tablet: '50% 36%', mobile: '50% 35%' },
    },
    {
      src: '/images/exposicao-trabalhos.jpg',
      alt: 'Alunas observando trabalhos na exposição da Casa Criativa',
      preset: 'gallery',
      focus: { desktop: '52% 34%', tablet: '52% 32%', mobile: '52% 30%' },
    },
  ] satisfies SiteImage[],
  audiences: {
    children: {
      src: '/images/aula-desenho.webp',
      alt: 'Crianças desenhando juntas ao redor da mesa do ateliê',
      preset: 'editorial',
      focus: { desktop: '50% 30%', tablet: '50% 30%', mobile: '50% 27%' },
    },
    youth: {
      src: '/images/turma-casa-criativa.jpg',
      alt: 'Turma reunida em uma aula de arte na Casa Criativa',
      preset: 'editorial',
      focus: { desktop: '50% 32%', tablet: '50% 32%', mobile: '50% 30%' },
    },
    adults: {
      src: '/images/exposicao-trabalhos.jpg',
      alt: 'Jovens e adultas compartilham trabalhos em uma exposição de arte',
      preset: 'portrait',
      focus: { desktop: '58% 28%', tablet: '58% 26%', mobile: '58% 24%' },
    },
  },
  founder: {
    src: '/images/fundadora.webp',
    alt: 'Responsável pela Casa Criativa com um pincel em seu ateliê',
    preset: 'portrait',
    focus: { desktop: '50% 32%', tablet: '50% 28%', mobile: '50% 18%' },
  },
  testimonial: {
    src: '/images/obra-festa-junina.webp',
    alt: 'Aluna sorrindo enquanto apresenta o trabalho que criou',
    preset: 'portrait',
    focus: { desktop: '50% 35%', tablet: '50% 32%', mobile: '50% 30%' },
  },
  instagram: [
    {
      src: '/images/aula-pintura-aquarela.jpg',
      alt: 'Bastidores de uma aula de pintura e aquarela',
      preset: 'gallery',
      focus: { desktop: '50% 38%', tablet: '50% 36%', mobile: '50% 34%' },
    },
    {
      src: '/images/oficina-recorte-colagem.jpg',
      alt: 'Crianças experimentando recortes e formas coloridas',
      preset: 'gallery',
      focus: { desktop: '50% 45%', tablet: '50% 43%', mobile: '50% 42%' },
    },
    {
      src: '/images/ceramica-fria-processo.jpg',
      alt: 'Bastidores de uma oficina de modelagem em cerâmica fria',
      preset: 'process',
      focus: { desktop: '50% 38%', tablet: '50% 36%', mobile: '50% 35%' },
    },
  ] satisfies SiteImage[],
  finalCTA: {
    src: '/images/turma-casa-criativa.jpg',
    alt: 'Crianças e professora reunidas durante uma aula na Casa Criativa',
    preset: 'wide',
    focus: { desktop: '50% 30%', tablet: '50% 30%', mobile: '50% 28%' },
  },
} as const satisfies Record<string, unknown>;
