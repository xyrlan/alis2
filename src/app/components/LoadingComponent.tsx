import { motion } from 'motion/react';
import Image from 'next/image';

export const LoadingComponent = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        ease: 'linear' as const,
        repeat: Infinity,
      }}
      className="flex justify-center items-center h-screen"
    >
      <Image
        src="/images/selo2.png"
        alt="selo2"
        width={100}
        height={100}
        className="md:w-20 md:h-20 w-15 h-15"
      />
    </motion.div>
  );
};
