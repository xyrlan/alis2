'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function FrozenRoute({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const [frozenContext] = useState(context);

  return (
    <LayoutRouterContext.Provider value={frozenContext}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageAnimatePresence({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstRender(false);
    }, 0);
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      initial={!isFirstRender}
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={pathname}
        onAnimationStart={() => {
          setIsAnimating(true);
        }}
        onAnimationComplete={() => {
          setIsAnimating(false);
        }}
        className={isAnimating ? 'disable-sticky' : ''}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '-100vh', overflow: 'hidden', height: '100vh' }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
