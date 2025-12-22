import Head from 'next/head';
import { useScroll } from 'motion/react';
import { useRef } from 'react';
import { AboutHero } from '@/src/components/about/AboutHero';
import { AboutStory } from '@/src/components/about/AboutStory';
import { AboutOurTeam } from '@/src/components/about/AboutOurTeam';

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <Head>
        <title>Alis Filmes - About</title>
        <meta name="description" content="Learn more about Ali's Filmes" />
      </Head>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center px-6 "
      >
        <div className="max-w-440">
          <AboutHero scrollYProgress={scrollYProgress} />
          <AboutStory scrollYProgress={scrollYProgress} />
          <AboutOurTeam />
        </div>
      </div>
    </>
  );
}
