import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { ServiceDetail, ServicePhoto } from '@/src/types/service.type';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ServiceSectionProps {
  service: ServiceDetail;
  index: number;
}

function ServicePhotoCard({
  photo,
  y,
  className = '',
}: {
  photo: ServicePhoto;
  y: ReturnType<typeof useTransform<number, number>>;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y }}
      className={`relative aspect-[2/3] overflow-hidden group ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
      />
    </motion.div>
  );
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const reverse = index % 2 !== 0;
  const number = String(index + 1).padStart(2, '0');

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const ySecond = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <motion.div
      ref={ref}
      className="py-12 md:py-20 border-b border-white/20 last:border-b-0"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASING }}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="md:flex-[1] flex items-start">
          <motion.span
            className="font-league-gothic text-7xl md:text-9xl text-white/10 leading-none select-none"
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASING }}
          >
            {number}
          </motion.span>
        </div>

        <motion.div
          className="md:flex-[2] grid grid-cols-2 gap-3 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASING }}
        >
          {service.photos[0] && (
            <ServicePhotoCard photo={service.photos[0]} y={yMain} />
          )}
          {service.photos[1] && (
            <ServicePhotoCard
              photo={service.photos[1]}
              y={ySecond}
              className="mt-10 md:mt-16"
            />
          )}
        </motion.div>

        <div className="md:flex-[3] space-y-4">
          <motion.h2
            className="font-league-gothic text-2xl md:text-4xl uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASING }}
          >
            {service.title}
          </motion.h2>

          <motion.p
            className="text-white/70 text-base md:text-lg tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASING }}
          >
            {service.subtitle}
          </motion.p>

          <motion.p
            className="text-gray-400 text-sm md:text-lg tracking-tighter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASING }}
          >
            {service.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
