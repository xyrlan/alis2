'use client';

import { useScroll } from 'motion/react';
import { useRef } from 'react';
import { AboutHero } from './components/AboutHero';
import { AboutStory } from './components/AboutStory';
import { AboutOurTeam } from './components/AboutOurTeam';

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-6 ">
      <div className="max-w-440">
        <AboutHero scrollYProgress={scrollYProgress} />
        <AboutStory scrollYProgress={scrollYProgress} />
        <AboutOurTeam />
      </div>
    </div>
  );
}
