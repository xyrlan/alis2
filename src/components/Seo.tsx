import Head from 'next/head';

const SITE_URL = 'https://alisfilmes.com';
const SITE_NAME = 'Alis Filmes';
const OG_IMAGE = `${SITE_URL}/og.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Caminho da página começando com "/" (ex.: "/servicos") */
  path: string;
}

export function Seo({ title, description, path }: SeoProps) {
  const fullTitle =
    path === '/' ? `${SITE_NAME} — Produtora Audiovisual` : `${title} | ${SITE_NAME}`;
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
}
