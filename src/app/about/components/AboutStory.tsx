import { motion, MotionValue, useTransform } from 'motion/react';
import { ABOUT_DATA } from '../../consts/about';
import Image from 'next/image';
interface AboutStoryProps {
  scrollYProgress: MotionValue<number>;
}
const ImageMotionComponent = motion.create(Image);

export const AboutStory = ({ scrollYProgress }: AboutStoryProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  return (
    <div className="h-[60vh] py-28">
      <div className="flex justify-between h-full gap-12">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <p className="font-league-gothic tracking-wide text-lg">
              OUR STORY
            </p>
            <p className="tracking-tighter leading-none text-6xl font-bold">
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
                className="flex justify-between border-b items-end border-white/40 pb-2"
              >
                <span className="tracking-tighter leading-none text-5xl font-semibold">
                  {item.value}
                </span>
                <span className="text-gray-400 text-lg tracking-tighter">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden">
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
