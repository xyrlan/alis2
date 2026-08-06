import { Service, ServiceDetail } from '../types/service.type';

export const SERVICES_DATA: Service[] = [
  {
    name: 'Filmes Institucionais',
    description: 'Narrativas visuais para marcas',
  },
  {
    name: 'Comerciais e Publicidade',
    description: 'Campanhas com impacto',
  },
  {
    name: 'Cinematografia de Eventos',
    description: 'Cobertura cinematográfica',
  },
  {
    name: 'Filmes Editoriais e Moda',
    description: 'Estética e storytelling',
  },
  {
    name: 'Filmes de Casamento',
    description: 'Histórias de amor em filme',
  },
  {
    name: 'Filmes de Produto',
    description: 'Produto em destaque',
  },
  {
    name: 'Videoclipes',
    description: 'Música e imagem',
  },
  {
    name: 'Documentários Curtos',
    description: 'Histórias reais com profundidade',
  },
  {
    name: 'Conteúdo para Redes Sociais',
    description: 'Reels, stories e mais',
  },
  {
    name: 'Direção Criativa',
    description: 'Conceito e visão',
  },
];

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id: 1,
    title: 'Document\u00e1rios',
    subtitle: 'Sua realidade, pelos nossos olhos',
    description:
      'Criamos document\u00e1rios que mergulham na alma de hist\u00f3rias reais, com profundidade e empatia. Seja para resgatar a mem\u00f3ria de uma marca, contar trajet\u00f3rias inspiradoras ou explorar causas relevantes, nossos document\u00e1rios s\u00e3o pensados para emocionar, informar e posicionar.',
    photos: [
      {
        src: '/images/servicos/lh-interview.jpg',
        alt: 'Set de entrevista com equipamento de filmagem',
      },
      {
        src: '/images/servicos/fnp-crew.jpg',
        alt: 'Equipe da Alis Filmes trabalhando em set',
      },
    ],
  },
  {
    id: 2,
    title: 'Conte\u00fado para Redes Sociais',
    subtitle: 'Produ\u00e7\u00e3o de reels para o seu neg\u00f3cio e redes sociais',
    description:
      'Produzimos reels e conte\u00fados com olhar estrat\u00e9gico. Nossa proposta \u00e9 transformar ideias em pe\u00e7as impactantes que gerem desejo com intencionalidade. Est\u00e9tica, ritmo, som e mensagem seguem em fun\u00e7\u00e3o de uma marca forte, trabalhando em constru\u00e7\u00e3o a longo prazo e transformando a sua empresa em top of mind.',
    photos: [
      {
        src: '/images/servicos/lh-creator.jpg',
        alt: 'Criadora de conte\u00fado gravando com rig de filmagem',
      },
      {
        src: '/images/servicos/lh-monitor-1.jpg',
        alt: 'Monitor de refer\u00eancia durante grava\u00e7\u00e3o de conte\u00fado',
      },
    ],
  },
  {
    id: 3,
    title: 'Institucionais',
    subtitle: 'Produ\u00e7\u00e3o de filmes que explicam seu servi\u00e7o ou produto',
    description:
      'Nossos institucionais s\u00e3o feitos para apresentar empresas de forma aut\u00eantica. Mais do que mostrar estruturas ou servi\u00e7os, queremos revelar prop\u00f3sito, cultura e identidade. Do briefing \u00e0 edi\u00e7\u00e3o final, cada frame carrega inten\u00e7\u00e3o, cada depoimento constr\u00f3i conex\u00e3o.',
    photos: [
      {
        src: '/images/servicos/lh-briefing.jpg',
        alt: 'Reuni\u00e3o de briefing antes da grava\u00e7\u00e3o',
      },
      {
        src: '/images/servicos/fnp-light.jpg',
        alt: 'Setup de ilumina\u00e7\u00e3o profissional em set',
      },
    ],
  },
  {
    id: 4,
    title: 'Comerciais para TV e Streaming',
    subtitle: 'Produ\u00e7\u00e3o de comerciais para TV e streaming para o seu neg\u00f3cio',
    description:
      'Com um olhar cinematogr\u00e1fico, produzimos comerciais que traduzem a proposta da marca \u00e0 linguagem audiovisual. Pensamos o comercial como um todo: do tratamento \u00e0 p\u00f3s-produ\u00e7\u00e3o, alinhando proposta da campanha \u00e0 linguagem do p\u00fablico-alvo.',
    photos: [
      {
        src: '/images/servicos/fnp-burger.jpg',
        alt: 'Cena de produto do comercial Frango no Pote',
      },
      {
        src: '/images/servicos/fnp-gear.jpg',
        alt: 'Lentes e c\u00e2mera preparadas para grava\u00e7\u00e3o de comercial',
      },
    ],
  },
];
