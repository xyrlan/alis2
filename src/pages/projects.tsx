import { Seo } from '@/src/components/Seo';
import { ProjectShowcase } from '@/src/components/projects/ProjectShowcase';
import { PROJECTS_DATA } from '@/src/consts/projects';
import { motion } from 'motion/react';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProjectsPage() {
  const count = String(PROJECTS_DATA.length).padStart(2, '0');

  return (
    <>
      <Seo
        title="Projetos"
        description="Conheça os filmes da Alis: comerciais, institucionais, documentários e conteúdo para marcas como Frango no Pote, Pilotis Imóveis, Isofen e Açaí Puríssimo."
        path="/projects"
      />
      <div className="flex flex-col items-center pt-24 md:pt-48 pb-14 md:pb-28 px-6">
        <div className="max-w-440 w-full">
          <motion.h1
            className="font-league-gothic text-4xl md:text-6xl lg:text-8xl uppercase flex items-start gap-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING }}
          >
            Projetos
            <span className="font-league-gothic text-lg md:text-2xl text-gray-400 mt-2 md:mt-4">
              ({count})
            </span>
          </motion.h1>

          <ProjectShowcase />
        </div>
      </div>
    </>
  );
}
