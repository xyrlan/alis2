'use client';

import { useRouter } from 'next/router';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = 'idle' | 'covering' | 'revealing';

function getInternalHref(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute('href');
  if (!href || !href.startsWith('/')) return null;
  if (anchor.target && anchor.target !== '_self') return null;
  if (anchor.hasAttribute('download')) return null;
  return href;
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('idle');
  const pendingHref = useRef<string | null>(null);

  // Intercepta cliques em links internos (capture roda antes do onClick do
  // next/link; preventDefault faz o Link ignorar o clique sem bloquear os
  // onClick de analytics). A navegação real só acontece com a cortina fechada.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;
      const href = getInternalHref(anchor);
      if (!href) return;
      e.preventDefault();
      if (href === router.asPath || pendingHref.current) return;
      pendingHref.current = href;
      setPhase('covering');
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [router.asPath]);

  // Página nova montou atrás da cortina (Next já resetou o scroll):
  // espera dois frames pra garantir o primeiro paint e revela.
  useEffect(() => {
    const finish = () => {
      if (!pendingHref.current) return;
      pendingHref.current = null;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase('revealing')),
      );
    };
    router.events.on('routeChangeComplete', finish);
    router.events.on('routeChangeError', finish);
    return () => {
      router.events.off('routeChangeComplete', finish);
      router.events.off('routeChangeError', finish);
    };
  }, [router.events]);

  return (
    <>
      {/* bg opaco esconde o footer fixo (-z-10) até o fim do scroll */}
      <div className="relative bg-background">{children}</div>
      <motion.div
        className={`fixed inset-0 z-100 bg-background flex items-center justify-center ${
          phase === 'idle' ? 'pointer-events-none' : ''
        }`}
        initial={false}
        animate={phase}
        variants={{
          idle: { y: '100%', transition: { duration: 0 } },
          covering: { y: '0%', transition: { duration: 0.5, ease: EASING } },
          revealing: { y: '-100%', transition: { duration: 0.6, ease: EASING } },
        }}
        onAnimationComplete={(definition) => {
          if (definition === 'covering' && pendingHref.current) {
            router.push(pendingHref.current).catch(() => {
              pendingHref.current = null;
              setPhase('revealing');
            });
          } else if (definition === 'revealing') {
            setPhase('idle');
          }
        }}
      >
        <Image
          src="/alishorizontal-branca.png"
          alt="Alis Filmes"
          width={500}
          height={500}
          className="w-[160px] md:w-[240px] object-contain select-none"
        />
      </motion.div>
    </>
  );
}
