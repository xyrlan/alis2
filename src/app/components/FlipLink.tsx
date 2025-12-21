'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

const MotionLinkComponent = motion(Link);

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({
  children,
  href,
  width = '2',
}: {
  children: string;
  href: string;
  width?: string;
}) => {
  return (
    <MotionLinkComponent
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
      href={href}
    >
      <div>
        {children.split('').map((l, i) => {
          return (
            <motion.span
              className={`inline-block ${l === ' ' ? `w-${width}` : ''}`}
              key={i}
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: '-100%',
                },
              }}
              transition={{
                duration: DURATION,
                delay: STAGGER * i,
                ease: 'easeInOut',
              }}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => {
          return (
            <motion.span
              className={`inline-block ${l === ' ' ? `w-${width}` : ''}`}
              key={i}
              variants={{
                initial: {
                  y: '100%',
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                delay: STAGGER * i,
                ease: 'easeInOut',
              }}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </div>
    </MotionLinkComponent>
  );
};
