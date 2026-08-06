'use client';
import useMeasure from 'react-use-measure';
import { useEffect } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { animate } from 'motion';
import Image from 'next/image';

const GAP_PX = 16;

const STRIP_PHOTOS = [
  { src: '/images/servicos/fnp-sign.jpg', alt: 'Letreiro do Frango no Pote' },
  { src: '/images/servicos/lh-rig-hands.jpg', alt: 'Ajuste de rig de câmera' },
  { src: '/images/servicos/lh-lens-1.jpg', alt: 'Retrato através de lente' },
  { src: '/images/servicos/fnp-laptop.jpg', alt: 'Produção em set' },
  { src: '/images/servicos/lh-dinner.jpg', alt: 'Cena gravada em ambiente real' },
  { src: '/images/servicos/fnp-jerseys.jpg', alt: 'Figurino de campanha' },
  { src: '/images/servicos/lh-lens-2.jpg', alt: 'Experimento visual com lente' },
  { src: '/images/servicos/lh-monitor-2.jpg', alt: 'Monitor de gravação' },
];

export const ServicesPhotoStrip = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const finalPosition = -width / 2 - GAP_PX / 2;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 45,
      repeat: Infinity,
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="flex w-max gap-4"
        style={{ x: xTranslation, willChange: 'transform' }}
      >
        {[...STRIP_PHOTOS, ...STRIP_PHOTOS].map((photo, index) => (
          <div
            key={index}
            className="relative h-40 md:h-56 aspect-[2/3] shrink-0 overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="200px"
              className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
