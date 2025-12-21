'use client';
import useMeasure from 'react-use-measure';
import { CarouselItem } from './CarouselItem';
import { useEffect } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { animate } from 'motion';
import Image from 'next/image';

export const InfiniteScrollingCarousel = () => {
  const images = [
    '/images/sponsors/acai.png',
    '/images/sponsors/fnp.png',
    '/images/sponsors/isofen.png',
    '/images/sponsors/natura.png',
    '/images/sponsors/pilotis.png',
    '/images/sponsors/vise.png',
    '/images/sponsors/pump.png',
  ];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (width === 0 || !width) return;

    const finalPosition = -width / 2 - 100;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="relative h-[140px] bg-black flex items-center justify-center">
      <Image
        src="/images/border.png"
        alt="border"
        width={2177}
        height={200}
        className="absolute top-2 left-0 h-[18px] scale-x-200"
      />
      <Image
        src="/images/border.png"
        alt="border"
        width={2177}
        height={200}
        className="absolute bottom-2 rotate-180 left-0 h-[18px] scale-x-200"
      />

      <motion.div
        className="absolute left-0 flex gap-50 z-50"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((image, index) => (
          <CarouselItem key={index} image={image} />
        ))}
      </motion.div>
    </div>
  );
};
