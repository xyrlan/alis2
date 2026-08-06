import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrames((f) => f + 1), 1000 / 24);
    return () => clearInterval(id);
  }, []);

  const ff = frames % 24;
  const totalSeconds = Math.floor(frames / 24);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <span className="font-mono tabular-nums">
      00:{pad(mm)}:{pad(ss)}:{pad(ff)}
    </span>
  );
}

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Cena não encontrada | Alis Filmes</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="relative h-screen flex flex-col items-center justify-center px-6 select-none overflow-hidden">
        {/* brackets de viewfinder */}
        <div className="absolute inset-6 md:inset-10 pointer-events-none">
          <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/60" />
          <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/60" />
          <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/60" />
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/60" />
        </div>

        {/* HUD superior */}
        <motion.div
          className="absolute top-8 md:top-12 left-10 md:left-14 right-10 md:right-14 flex justify-between items-center text-xs tracking-tighter text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASING }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            REC
          </span>
          <Timecode />
        </motion.div>

        {/* HUD inferior */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-10 md:left-14 right-10 md:right-14 flex justify-between items-center text-xs tracking-tighter text-white/50 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASING }}
        >
          <span>Cena 404 · Take 01</span>
          <span className="hidden md:block">Alis Filmes</span>
          <span>24 fps</span>
        </motion.div>

        <motion.p
          className="font-league-gothic tracking-wide text-lg md:text-2xl text-gray-400 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASING }}
        >
          Cena não encontrada
        </motion.p>

        <motion.h1
          className="font-league-gothic uppercase leading-none text-[10rem] md:text-[16rem] lg:text-[20rem]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASING }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base md:text-lg tracking-tighter max-w-md text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASING }}
        >
          Corta! Essa cena ficou na sala de edição.
        </motion.p>

        <motion.div
          className="flex gap-8 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASING }}
        >
          <Link
            href="/"
            className="border-b border-white/60 pb-1 font-league-gothic tracking-wide text-xl md:text-2xl uppercase hover:border-white transition-colors"
          >
            Voltar ao início
          </Link>
          <Link
            href="/projects"
            className="border-b border-white/30 pb-1 font-league-gothic tracking-wide text-xl md:text-2xl uppercase text-white/70 hover:text-white hover:border-white transition-colors"
          >
            Ver projetos
          </Link>
        </motion.div>
      </div>
    </>
  );
}
