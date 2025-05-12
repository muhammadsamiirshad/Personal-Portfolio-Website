'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GridPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-darker via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-darker via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-l from-darker via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default GridPattern;
