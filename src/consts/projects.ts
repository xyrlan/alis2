import { Project } from '../types/projects.type';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Comercial Frango no Pote BBQ',
    year: 2025,
    category: 'Comercial',
    client: 'Frango no Pote',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/fnp.mp4',
    aspectRatio: '16:9',
    overview: {
      title: 'Comercial Frango no Pote BBQ',
      description: 'Comercial para o lançamento da linha BBQ do Frango no Pote.',
    },
    credits: [
      {
        name: 'John Doe',
        role: 'Director',
      },
      {
        name: 'Jane Doe',
        role: 'Producer',
      },
    ],
    videos: [
      {
        title: 'Video 1',
        description: 'Comercial Frango no Pote BBQ',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/fnp.mp4',
      },
    ],
  },
  {
    id: 2,
    title: 'Pilotis Imóveis',
    year: 2025,
    category: 'Institucional',
    client: 'Pilotis Imóveis',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/pilotis2.mp4',
    aspectRatio: '9:16',
    overview: {
      title: 'Pilotis Imóveis',
      description: 'Vídeo institucional para a Pilotis Imóveis.',
    },
    credits: [
      {
        name: 'John Doe',
        role: 'Director',
      },
      {
        name: 'Jane Doe',
        role: 'Producer',
      },
    ],
    videos: [
      {
        title: 'Video 2',
        description: 'Pilotis Imóveis',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/pilotis2.mp4',
      },
    ],
  },
  {
    id: 3,
    title: 'Documentário Isofen — 10 Anos',
    year: 2025,
    category: 'Documentário',
    client: 'Isofen',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/isofen.mp4',
    aspectRatio: '16:9',
    overview: {
      title: 'Documentário Isofen — 10 Anos',
      description: 'Documentário comemorativo dos 10 anos da Isofen.',
    },
    credits: [
      {
        name: 'John Doe',
        role: 'Director',
      },
      {
        name: 'Jane Doe',
        role: 'Producer',
      },
    ],
    videos: [
      {
        title: 'Video 3',
        description: 'Documentário Isofen — 10 Anos',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/isofen.mp4',
      },
    ],
  },
  {
    id: 4,
    title: 'Açaí Puríssimo',
    year: 2024,
    category: 'Reels',
    client: 'Açaí Puríssimo',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/acai.mp4',
    aspectRatio: '9:16',
    overview: {
      title: 'Açaí Puríssimo',
      description: 'Conteúdo para redes sociais do Açaí Puríssimo.',
    },
    credits: [
      {
        name: 'John Doe',
        role: 'Director',
      },
    ],
    videos: [
      {
        title: 'Video 4',
        description: 'Açaí Puríssimo',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/acai.mp4',
      },
    ],
  },
];
