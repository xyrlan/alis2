import { motion } from 'motion/react';
import { Seo } from '@/src/components/Seo';
import { SERVICES_DETAIL } from '@/src/consts/services';
import { ServiceSection } from '@/src/components/servicos/ServiceSection';
import { ServicesPhotoStrip } from '@/src/components/servicos/ServicesPhotoStrip';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PAGE_DESC =
  'Documentários, conteúdo para redes sociais, filmes institucionais e comerciais para TV e streaming. Do conceito à tela, produção audiovisual completa em Brasília.';
const HEADING = 'Serviços';
const INTRO =
  'Do conceito à tela, cada projeto é uma oportunidade de contar uma história que importa.';

export default function ServicosPage() {
  return (
    <>
      <Seo title="Serviços" description={PAGE_DESC} path="/servicos" />
      <div className="pt-24 md:pt-48 pb-14 md:pb-28">
        <div className="flex flex-col items-center px-6">
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
          </div>
        </div>

        <motion.div
          className="mt-12 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASING }}
        >
          <ServicesPhotoStrip />
        </motion.div>

        <div className="flex flex-col items-center px-6">
          <div className="max-w-440 w-full mt-4 md:mt-8">
            {SERVICES_DETAIL.map((service, i) => (
              <ServiceSection key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
