import { motion, MotionValue, useTransform } from 'motion/react';
import { ABOUT_DATA } from '@/src/consts/about';
import Image from 'next/image';

const ImageMotionComponent = motion.create(Image);

interface AboutHeroProps {
  scrollYProgress: MotionValue<number>;
}

export const AboutHero = ({ scrollYProgress }: AboutHeroProps) => {
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -350]);

  return (
    <div className="space-y-14 pt-48 pb-28">
      <p className="tracking-tighter leading-none text-6xl font-bold">
        {ABOUT_DATA.title}
      </p>
      <div className="h-[730px] relative overflow-hidden">
        <ImageMotionComponent
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ y: translateY }}
          src="/images/alisabout.jpg"
          alt="About 1"
          width={1920}
          height={1080}
          className="w-full h-[1080px] object-cover object-top absolute bottom-0 top-0"
        />
      </div>
    </div>
  );
};
