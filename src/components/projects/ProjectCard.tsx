import { motion } from 'motion/react';
import { VideoLoader } from '@/src/components/home/VideoLoader';
import { Project } from '@/src/types/projects.type';

const ASPECT_RATIO_MAP = {
  '16:9': '16/9',
  '9:16': '9/16',
  '1:1': '1/1',
} as const;

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProjectCardProps {
  project: Project;
  index: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function ProjectCard({
  project,
  index,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) {
  const aspectRatio = ASPECT_RATIO_MAP[project.aspectRatio];

  return (
    <motion.div
      className="group cursor-pointer overflow-hidden"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASING }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: EASING }}
        >
          <VideoLoader
            src={project.mainVideo}
            overlayClassName=""
            preload="metadata"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 pointer-events-none">
          <h3 className="font-league-gothic text-2xl uppercase tracking-wide">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-white/70 tracking-tighter">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
