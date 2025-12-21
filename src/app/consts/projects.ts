import { Project } from '../types/projects.type';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Lançamento para Frango no Pote',
    year: 2025,
    category: 'Lançamento',
    client: 'Frango no Pote',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/fnp.mp4',
    overview: {
      title: 'Lançamento para Frango no Pote',
      description: 'Descrição do projeto 1',
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
        description: 'Descrição do video 1',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/fnp.mp4',
      },
    ],
  },
  {
    id: 2,
    title: 'Reels para Pilotis Imóveis',
    year: 2025,
    category: 'Reels',
    client: 'Pilotis Imóveis',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/pilotis2.mp4',
    overview: {
      title: 'Reels para Pilotis Imóveis',
      description: 'Descrição do projeto 2',
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
        description: 'Descrição do video 2',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/pilotis2.mp4',
      },
    ],
  },
  {
    id: 3,
    title: 'Isofen 10 anos - Teaser',
    year: 2025,
    category: 'Teaser',
    client: 'Isofen',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/isofen.mp4',
    overview: {
      title: 'Isofen 10 anos - Teaser',
      description: 'Descrição do projeto 3',
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
        description: 'Descrição do video 3',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/isofen.mp4',
      },
    ],
  },
  {
    id: 4,
    title: 'Reels para Açaí Puríssimo',
    year: 2025,
    category: 'Reels',
    client: 'Açaí Puríssimo',
    mainVideo: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/acai.mp4',
    overview: {
      title: 'Reels para Açaí Puríssimo',
      description: 'Descrição do projeto 4',
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
        description: 'Descrição do video 4',
        video: 'https://alisfilmes.s3.sa-east-1.amazonaws.com/acai.mp4',
      },
    ],
  },
];
