import Head from 'next/head';
import { AboutHero } from '@/src/components/about/AboutHero';
import { AboutStory } from '@/src/components/about/AboutStory';
import { AboutOurTeam } from '@/src/components/about/AboutOurTeam';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Alis Filmes - About</title>
        <meta name="description" content="Learn more about Ali's Filmes" />
      </Head>
      <div className="flex flex-col items-center justify-center px-6 ">
        <div className="max-w-440">
          <AboutHero />
          <AboutStory />
          <AboutOurTeam />
        </div>
      </div>
    </>
  );
}
