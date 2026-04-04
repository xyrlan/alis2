import { motion } from 'motion/react';
import { ServiceDetail } from '@/src/types/service.type';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ServiceSectionProps {
  service: ServiceDetail;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const reverse = index % 2 !== 0;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="py-12 md:py-20 border-b border-white/20 last:border-b-0"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASING }}
    >
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}
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
