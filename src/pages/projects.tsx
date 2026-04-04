import Head from 'next/head';
import { useState } from 'react';
import { CursorChip } from '@/src/components/CursorChip';
import { ProjectGrid } from '@/src/components/projects/ProjectGrid';
import { motion } from 'motion/react';

export default function ProjectsPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Head>
        <title>Alis Filmes - Projetos</title>
        <meta name="description" content="Conheça nossos projetos" />
      </Head>
      <div className="flex flex-col items-center justify-center py-16 md:py-32 px-6">
        <CursorChip isParentHovering={isHovering} />
        <motion.h1
          className="font-league-gothic text-4xl md:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          PROJETOS
        </motion.h1>
        <ProjectGrid onCardHover={setIsHovering} />
      </div>
    </>
  );
}
