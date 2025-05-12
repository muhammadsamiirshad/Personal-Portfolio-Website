'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-slate-900/80 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-gradient">{personalInfo.shortForm}</span>
          </motion.div>
          
          <div className="mt-4 md:mt-0 text-slate-400 text-sm text-center md:text-right">
            <p>
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Designed and built with 
              <span className="mx-1 text-red-500">❤</span>
              using Next.js, Three.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
