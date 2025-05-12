import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedProps } from '@/types';

const Animated: React.FC<AnimatedProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
