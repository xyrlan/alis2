import { motion, MotionValue, useTransform } from 'motion/react';
import { ABOUT_DATA } from '@/src/consts/about';
import Image from 'next/image';
interface AboutStoryProps {
  scrollYProgress: MotionValue<number>;
}
const ImageMotionComponent = motion.create(Image);

export const AboutStory = ({ scrollYProgress }: AboutStoryProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  return (
    <div className="py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex flex-col justify-between gap-8 md:gap-12">
          <div className="space-y-4">
            <p className="font-league-gothic tracking-wide text-lg">
              NOSSA HISTÓRIA
            </p>
            <p className="tracking-tighter leading-none text-2xl md:text-4xl lg:text-6xl font-bold">
              {ABOUT_DATA.title2}
            </p>
            <p className="text-gray-400 text-lg tracking-tighter max-w-xl">
              {ABOUT_DATA.description2}
            </p>
          </div>
          <div className="space-y-4">
            {ABOUT_DATA.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/40 pb-2 gap-1"
              >
                <span className="tracking-tighter leading-none text-3xl md:text-5xl font-semibold">
                  {item.value}
                </span>
                <span className="text-gray-400 text-sm md:text-lg tracking-tighter">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden h-[250px] md:h-auto">
          <ImageMotionComponent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ scale }}
            src="/images/alisabout2.jpg"
            alt="About 1"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
