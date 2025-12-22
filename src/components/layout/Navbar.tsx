'use client';
import { NAVBAR_ITEMS } from '@/src/consts/navbar';
import { motion } from 'motion/react';
import { FlipLink } from './FlipLink';

export function Navbar() {
  return (
    <motion.nav
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <ul className="flex justify-between uppercase tracking-tighter text-xs font-semibold select-none">
        {NAVBAR_ITEMS.map((item) => (
          <li key={item.name}>
            <FlipLink href={item.href}>{item.name}</FlipLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
