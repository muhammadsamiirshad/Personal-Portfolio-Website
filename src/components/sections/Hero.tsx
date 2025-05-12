'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { personalInfo } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import { FiArrowDown } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <span className="text-sm sm:text-base bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-slate-700 inline-block self-start rounded-full px-4 py-1 text-cyan-400">
            Welcome to my portfolio
          </span>          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl text-slate-300 h-20">
            <Typewriter
              options={{
                strings: personalInfo.titles,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-slate-300 max-w-lg text-lg">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow"
            >
              Get in Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-slate-700 hover:border-cyan-500 px-6 py-3 rounded-lg font-medium transition-all"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10"
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className=" flex flex-col items-center cursor-pointer group"
          >
            <span className=" text-slate-400 text-sm mb-2 group-hover:text-cyan-400">
              Scroll Down
            </span>
            <FiArrowDown className="text-cyan-500 text-2xl" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </Section>
  );
};

export default Hero;
