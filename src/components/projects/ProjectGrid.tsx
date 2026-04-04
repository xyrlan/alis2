import { PROJECTS_DATA } from '@/src/consts/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  onCardHover: (hovering: boolean) => void;
}

export function ProjectGrid({ onCardHover }: ProjectGridProps) {
  const landscapes = PROJECTS_DATA.filter((p) => p.aspectRatio === '16:9');
  const verticals = PROJECTS_DATA.filter((p) => p.aspectRatio !== '16:9');

  const rows = landscapes.map((landscape, i) => ({
    landscape,
    vertical: verticals[i],
    reverse: i % 2 !== 0,
  }));

  return (
    <div className="flex flex-col gap-4 mt-20 w-full">
      {rows.map((row, i) => (
        <div
          key={row.landscape.id}
          className={`flex flex-col md:flex-row gap-4 ${row.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="md:flex-[3]">
            <ProjectCard project={row.landscape} index={i * 2} onHoverStart={() => onCardHover(true)} onHoverEnd={() => onCardHover(false)} />
          </div>
          {row.vertical && (
            <div className="md:flex-[1]">
              <ProjectCard project={row.vertical} index={i * 2 + 1} onHoverStart={() => onCardHover(true)} onHoverEnd={() => onCardHover(false)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
