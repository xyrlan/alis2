'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

interface CursorChipProps {
  text?: string;
  textColor?: string;
  isParentHovering?: boolean;
}

export const CursorChip = ({
  text = 'VIEW',
  textColor = '#ffffff',
  isParentHovering = false,
}: CursorChipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (!isParentHovering) return null;

  return (
    <motion.div
      className="fixed pointer-events-none top-0 left-0 z-9999 flex items-center justify-center text-sm bg-opacity-50 bg-black/50 p-1 rounded"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '50%',
        translateY: '70%',
        color: textColor,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.div>
  );
};
