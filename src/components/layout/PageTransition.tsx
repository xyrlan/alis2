'use client';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';

export default function PageTransition({
  children,
  routerKey,
}: {
  children: ReactNode;
  routerKey: string;
}) {
  const router = useRouter();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstRender(false);
    }, 0);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };

    const handleComplete = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <AnimatePresence
      initial={!isFirstRender}
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={routerKey}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: '100%',
          height: isAnimating ? '100vh' : 'auto',
          position: isAnimating ? 'absolute' : 'relative',
          top: 0,
          left: 0,
          overflow: 'hidden',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
