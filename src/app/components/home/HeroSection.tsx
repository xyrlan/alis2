import { motion } from 'motion/react';
import { VideoLoader } from './VideoLoader';
import { HERO_SECTION } from '../../consts/herosection';
import { Clock } from '../Clock';
import { HeroLogo } from './HeroLogo';

export const HeroSection = () => {
  return (
    <main className="sticky top-0">
      <div className="h-screen w-full">
        <VideoLoader src={HERO_SECTION.video}>
          <div className="flex justify-center items-center h-full w-full">
            <HeroLogo />
          </div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 0.5, type: 'spring' }}
            className="fixed bottom-0 left-0 right-0 z-10 px-6 py-2"
          >
            <ul className="flex justify-between tracking-tighter text-sm font-semibold">
              <li>Creative Production Studio</li>
              <li>Brasilia, DF</li>
              <Clock />
              <li>© Alis Filmes 2025</li>
            </ul>
          </motion.div>
        </VideoLoader>
      </div>
    </main>
  );
};
