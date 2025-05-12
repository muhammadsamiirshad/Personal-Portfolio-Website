'use client';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navLinks, personalInfo } from '@/data/portfolioData';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg'
            : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-gradient">{personalInfo.shortForm}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ScrollLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={cn(
                      'text-slate-300 cursor-pointer py-2 px-3 rounded-lg relative overflow-hidden transition-colors duration-300',
                      'hover:text-white group'
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 text-cyan-500" />
              ) : (
                <FiMenu className="w-6 h-6 text-cyan-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-50 glass-panel border-t-0 rounded-t-none rounded-b-2xl mx-4 py-4 shadow-lg"
          >
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <ScrollLink
                      to={link.path}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-white block py-2 px-3 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
