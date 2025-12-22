import Head from 'next/head';
import { useRef, useState } from 'react';
import { PROJECTS_DATA } from '@/src/consts/projects';
import { CursorChip } from '@/src/components/CursorChip';
import { Project } from '@/src/types/projects.type';
import { motion } from 'motion/react';

function ProjectCard({
  project,
  ref,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  ref: React.RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="cursor-pointer"
    >
      <video
        src={project.mainVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="flex justify-between">
        <h2 className="font-league-gothic text-xl uppercase">
          {project.title}
        </h2>
        <span className="text-base text-gray-400">{project.category}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const projectRefs = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Head>
        <title>Alis Filmes - Projects</title>
        <meta name="description" content="Explore our amazing projects" />
      </Head>
      <div className="flex flex-col items-center justify-center py-32 px-6">
        <CursorChip isParentHovering={isHovering} />
        <motion.h1 className="font-league-gothic text-8xl">PROJECTS</motion.h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-12 mt-20">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              ref={projectRefs}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
