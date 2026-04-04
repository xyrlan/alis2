import Head from 'next/head';
import { motion } from 'motion/react';
import { SOCIAL_ITEMS } from '@/src/consts/social';
import { FlipLink } from '@/src/components/layout/FlipLink';

const EASING = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASING },
});

export default function ContatoPage() {
  return (
    <>
      <Head>
        <title>Alis Filmes - Contato</title>
        <meta
          name="description"
          content="Entre em contato com a Alis Filmes"
        />
      </Head>
      <div className="flex flex-col items-center justify-center px-6 pt-24 md:pt-48 pb-14 md:pb-28">
        <div className="max-w-440 w-full">
          <motion.h1
            className="font-league-gothic text-4xl md:text-6xl lg:text-8xl uppercase"
            {...fadeUp(0)}
          >
            Contato
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg tracking-tighter max-w-xl mt-6"
            {...fadeUp(0.1)}
          >
            Tem um projeto em mente? Vamos conversar sobre como transformar sua
            ideia em uma narrativa audiovisual potente.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <motion.div className="space-y-10" {...fadeUp(0.2)}>
              <div className="space-y-2">
                <span className="font-league-gothic tracking-wide text-lg text-gray-400">
                  EMAIL
                </span>
                <p className="text-2xl tracking-tighter font-semibold">
                  <a
                    href="mailto:contato@alisfilmes.com"
                    className="hover:text-gray-300 transition-colors"
                  >
                    contato@alisfilmes.com
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-league-gothic tracking-wide text-lg text-gray-400">
                  LOCALIZAÇÃO
                </span>
                <p className="text-2xl tracking-tighter font-semibold">
                  Brasília, DF
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-league-gothic tracking-wide text-lg text-gray-400">
                  REDES SOCIAIS
                </span>
                <div className="flex gap-6 text-xl font-semibold tracking-tighter">
                  {SOCIAL_ITEMS.map((social) => (
                    <FlipLink href={social.href} key={social.href}>
                      {social.name}
                    </FlipLink>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-6" {...fadeUp(0.3)}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-league-gothic tracking-wide text-lg text-gray-400"
                >
                  NOME
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent border-b border-white/30 pb-2 text-lg tracking-tighter focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-league-gothic tracking-wide text-lg text-gray-400"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-transparent border-b border-white/30 pb-2 text-lg tracking-tighter focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-league-gothic tracking-wide text-lg text-gray-400"
                >
                  MENSAGEM
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 pb-2 text-lg tracking-tighter focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="mt-4 border border-white/40 px-8 py-3 font-league-gothic tracking-wide text-lg uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Enviar
              </button>
            </motion.div>
          </div>

          <motion.div
            className="mt-32 border-t border-white/20 pt-8"
            {...fadeUp(0.4)}
          >
            <p className="text-gray-500 text-sm tracking-tighter">
              Respondemos em até 48 horas úteis.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
