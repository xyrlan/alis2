import type { AppProps } from 'next/app';
import { Geist, Geist_Mono, League_Gothic } from 'next/font/google';
import '@/src/styles/globals.css';
import SmoothScroll from '@/src/components/layout/SmoothScroll';
import { Navbar } from '@/src/components/layout/Navbar';
import PageTransition from '@/src/components/layout/PageTransition';
import { Footer } from '@/src/components/layout/Footer';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const leagueGothic = League_Gothic({
  variable: '--font-league-gothic',
  subsets: ['latin'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Alis Filmes</title>
        <meta
          name="description"
          content="Ali's Filmes - Audiovisual Production"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} ${leagueGothic.variable} relative mb-[40vh]`}
      >
        <SmoothScroll>
          <Navbar />
          <PageTransition routerKey={router.asPath}>
            <Component {...pageProps} />
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
