import { Html, Head, Main, NextScript } from 'next/document';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alis Filmes',
  description:
    'Produtora audiovisual em Brasília: filmes institucionais, comerciais para TV e streaming, documentários e conteúdo para redes sociais.',
  url: 'https://alisfilmes.com',
  logo: 'https://alisfilmes.com/icon.png',
  image: 'https://alisfilmes.com/og.png',
  email: 'contato@alisfilmes.com',
  telephone: '+55 61 98427-0040',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/alis.filmes',
    'https://www.vimeo.com/alisfilmes',
  ],
};

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="32x32" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>
      <body
        suppressHydrationWarning
        className="antialiased text-white selection:bg-white selection:text-black"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
