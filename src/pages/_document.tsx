import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
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
