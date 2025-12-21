import { motion } from 'motion/react';
import Image from 'next/image';

const LOGO_CONFIG = {
  src: '/alishorizontal-branca.png',
  alt: 'Alis Filmes Logo',
  width: 1000,
  height: 1000,
};

const logoAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.5,
    delay: 1,
    ease: 'easeInOut' as const,
  },
};

export const HeroLogo = () => (
  <motion.div {...logoAnimation}>
    <Image
      src={LOGO_CONFIG.src}
      alt={LOGO_CONFIG.alt}
      width={LOGO_CONFIG.width}
      height={LOGO_CONFIG.height}
      className="object-contain drop-shadow-2xl -translate-x-10 md:block hidden select-none"
      priority
    />
  </motion.div>
);
