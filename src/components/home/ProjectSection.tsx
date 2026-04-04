import { useInView } from 'motion/react';
import { PROJECTS_DATA } from '@/src/consts/projects';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { VideoLoader } from './VideoLoader';
import { Project } from '@/src/types/projects.type';
import { CursorChip } from '@/src/components/CursorChip';

const ProjectComponent = memo(function ProjectComponent({
  project,
  index,
  isLast,
  onInView,
}: {
  project: Project;
  index: number;
  isLast: boolean;
  onInView: (index: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    } else {
      onInView(index - 1);
    }
  }, [isInView, index, onInView]);

  return (
    <div
      ref={ref}
      className={`h-[60vh] md:h-screen cursor-pointer top-0 ${isLast ? '' : 'md:sticky'}`}
    >
      <VideoLoader src={project.mainVideo} />
      <div className="md:hidden px-4 py-2">
        <h3 className="font-league-gothic text-xl uppercase">{project.title}</h3>
        <span className="text-sm text-gray-400">{project.year} · {project.category}</span>
      </div>
    </div>
  );
});

export const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = PROJECTS_DATA[activeProjectIndex];

  const [isHovering, setIsHovering] = useState(false);

  const handleInView = useCallback((index: number) => {
    setActiveProjectIndex(index);
  }, []);

  return (
    <div
      className="relative select-none"
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CursorChip isParentHovering={isHovering} />
      <div
        className="hidden md:grid h-[400vh] w-full grid-rows-4 z-10 absolute inset-0 pointer-events-none"
      >
        <div className="row-span-1 flex flex-col justify-center items-center sticky top-0">
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-league-gothic">
            {activeProject?.title}
          </h2>
          <div className="flex items-center gap-2 font-medium tracking-tighter text-sm">
            <span>{activeProject?.year}</span>
            <span>•</span>
            <span>{activeProject?.category}</span>
          </div>
        </div>
      </div>
      {PROJECTS_DATA.map((project, index) => (
        <ProjectComponent
          key={project.id}
          project={project}
          index={index}
          isLast={index === PROJECTS_DATA.length - 1}
          onInView={handleInView}
        />
      ))}
    </div>
  );
};
