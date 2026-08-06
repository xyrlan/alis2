'use client';
import { CarouselItem } from './CarouselItem';
import { useEffect } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { animate } from 'motion';

const IMAGES = [
  '/images/sponsors/acai.png',
  '/images/sponsors/fnp.png',
  '/images/sponsors/isofen.png',
  '/images/sponsors/natura.png',
  '/images/sponsors/pilotis.png',
  '/images/sponsors/vise.png',
  '/images/sponsors/pump.png',
];

export const InfiniteScrollingCarousel = () => {
  const xTranslation = useMotionValue('0%');

  useEffect(() => {
    const controls = animate(xTranslation, ['0%', '-50%'], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [xTranslation]);

  return (
    <div className="relative h-[140px] bg-black flex items-center overflow-hidden">
      <motion.div
        className="flex w-max"
        style={{ x: xTranslation, willChange: 'transform' }}
      >
        {/* duas metades idênticas; pl = gap garante emenda perfeita no -50% */}
        {[0, 1].map((half) => (
          <div
            key={half}
            aria-hidden={half === 1}
            className="flex gap-20 md:gap-50 pl-20 md:pl-50 shrink-0"
          >
            {IMAGES.map((image) => (
              <CarouselItem key={`${half}-${image}`} image={image} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
