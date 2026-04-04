'use client';
import { NAVBAR_ITEMS } from '@/src/consts/navbar';
import { AnimatePresence, motion } from 'motion/react';
import { FlipLink } from './FlipLink';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rafId = useRef(0);
  const isOnTopRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const onTop = window.scrollY === 0;
        if (onTop !== isOnTopRef.current) {
          isOnTopRef.current = onTop;
          setIsOnTop(onTop);
        }
        rafId.current = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
        style={{
          backgroundColor: isOnTop && !isMenuOpen ? 'transparent' : 'black',
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <div className="flex justify-between items-center">
          <div className="md:hidden uppercase tracking-tighter text-xs font-semibold">
            <Link href="/">Alis Filmes</Link>
          </div>

          <ul className="hidden md:flex w-full justify-between uppercase tracking-tighter text-xs font-semibold select-none">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.name}>
                <FlipLink href={item.href}>{item.name}</FlipLink>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden relative w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-300 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'}`} />
            <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-300 top-1/2 -translate-y-1/2 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-300 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {NAVBAR_ITEMS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-league-gothic text-4xl uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
