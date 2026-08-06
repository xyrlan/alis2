'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { PROJECTS_DATA } from '@/src/consts/projects';
import { PORTRAIT_FORMATS } from '@/src/types/projects.type';
import { VideoLoader } from '@/src/components/home/VideoLoader';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ASPECT_RATIO_MAP = {
  '16:9': '16/9',
  '9:16': '9/16',
  '1:1': '1/1',
  '9:8': '9/8',
  '2.35:1': '2.35/1',
} as const;

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PROJECTS_DATA[activeIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12 md:mt-20 items-start">
      <ul className="flex flex-col">
        {PROJECTS_DATA.map((project, i) => {
          const isActive = i === activeIndex;
          const number = String(i + 1).padStart(2, '0');
          return (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASING }}
              className="border-b border-white/20 first:border-t"
            >
              <div
                onMouseEnter={() => setActiveIndex(i)}
                className="py-6 md:py-8 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="font-league-gothic text-white/30 text-lg md:text-xl mt-1 select-none">
                    {number}
                  </span>
                  <div className="min-w-0">
                    <h2
                      className={`font-league-gothic uppercase leading-[0.95] text-4xl md:text-5xl lg:text-7xl transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white md:text-white/40'
                      }`}
                    >
                      {project.title}
                    </h2>
                    <div
                      className={`flex gap-2 mt-2 text-sm tracking-tighter transition-colors duration-300 ${
                        isActive ? 'text-gray-300' : 'text-gray-300 md:text-gray-500'
                      }`}
                    >
                      <span>{project.year}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>

                <div
                  className="md:hidden mt-5"
                  style={{ aspectRatio: ASPECT_RATIO_MAP[project.aspectRatio] }}
                >
                  <VideoLoader
                    src={project.mainVideo}
                    backdrop={
                      PORTRAIT_FORMATS.includes(project.aspectRatio)
                        ? 'background'
                        : 'none'
                    }
                    overlayClassName=""
                    preload="metadata"
                  />
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>

      <motion.div
        className="hidden md:block sticky top-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASING }}
      >
        <div className="relative h-[70vh] overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active.id}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASING }}
            >
              <VideoLoader
                src={active.mainVideo}
                backdrop="background"
                overlayClassName=""
                preload="metadata"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-baseline mt-3 text-sm tracking-tighter text-gray-400">
          <span className="uppercase font-league-gothic tracking-wide text-base">
            {active.client}
          </span>
          <span>
            {active.year} · {active.category}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
