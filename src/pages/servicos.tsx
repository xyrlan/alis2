import Head from 'next/head';
import { motion } from 'motion/react';
import { SERVICES_DETAIL } from '@/src/consts/services';
import { ServiceSection } from '@/src/components/servicos/ServiceSection';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PAGE_TITLE = 'Alis Filmes - Servi\u00e7os';
const PAGE_DESC = 'Conhe\u00e7a os servi\u00e7os da Alis Filmes';
const HEADING = 'Servi\u00e7os';
const INTRO = 'Do conceito \u00e0 tela, cada projeto \u00e9 uma oportunidade de contar uma hist\u00f3ria que importa.';

export default function ServicosPage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
      </Head>
      <div className="flex flex-col items-center justify-center px-6 pt-24 md:pt-48 pb-14 md:pb-28">
        <div className="max-w-440 w-full">
          <motion.h1
            className="font-league-gothic text-4xl md:text-6xl lg:text-8xl uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING }}
          >
            {HEADING}
          </motion.h1>

          <motion.p
            className="text-gray-400 text-base md:text-lg tracking-tighter max-w-xl mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASING }}
          >
            {INTRO}
          </motion.p>

          <div className="mt-12 md:mt-20">
            {SERVICES_DETAIL.map((service, i) => (
              <ServiceSection key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
