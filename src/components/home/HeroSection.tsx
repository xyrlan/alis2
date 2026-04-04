import { motion } from 'motion/react';
import { VideoLoader } from './VideoLoader';
import { HERO_SECTION } from '@/src/consts/herosection';
import { Clock } from '@/src/components/Clock';
import { HeroLogo } from './HeroLogo';
import { useEffect, useRef, useState } from 'react';

export const HeroSection = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const rafId = useRef(0);
  const isOnTopRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const onTop = window.scrollY === 0;
        if (onTop !== isOnTopRef.current) {
          isOnTopRef.current = onTop;
          setIsOnTop(onTop);
        }
        rafId.current = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <main className="sticky top-0">
      <div className="h-screen w-full">
        <VideoLoader src={HERO_SECTION.video} preload="metadata">
          <div className="flex justify-center items-center h-full w-full">
            <HeroLogo />
          </div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            style={{
              y: isOnTop ? '0' : '100%',
              opacity: isOnTop ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            transition={{ duration: 2, delay: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-10 px-6 py-2"
          >
            <ul className="flex justify-between tracking-tighter text-sm font-semibold">
              <li className="hidden md:block">Creative Production Studio</li>
              <li className="hidden md:block">Brasilia, DF</li>
              <Clock />
              <li>© Alis Filmes 2025</li>
            </ul>
          </motion.div>
        </VideoLoader>
      </div>
    </main>
  );
};
