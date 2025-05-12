'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolioData';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <Section id="projects" className="bg-gradient-to-b from-dark/50 to-darker">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="Check out some of my recent work" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Animated key={project.title} delay={index * 0.2}>
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <GlassPanel className="overflow-hidden h-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div 
                    className="md:w-2/5 relative aspect-video md:aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openImageModal(project.image.replace(/^public/, ''))}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20"></div>
                    <motion.div
                      className="w-full h-full bg-slate-800 flex items-center justify-center"
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                    > <Image 
                        src={project.image.replace(/^public/, '')}
                        alt={project.title}
                        className="w-full h-full object-fill"
                        width={400}
                        height={400}
                      />
                      
                    </motion.div>
                  </div>
                  
                  <div className="md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gradient">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs rounded-full bg-slate-800 text-cyan-400 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800 text-white hover:text-cyan-400 transition-colors"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800 text-white hover:text-cyan-400 transition-colors"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassPanel>
              
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 -z-10 blur-xl transition-opacity"
                animate={{
                  opacity: hoveredIndex === index ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Animated>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                onClick={closeImageModal}
              >
                <FiX className="w-5 h-5" />
              </button>
              <Image 
                src={selectedImage} 
                alt="Project full view" 
                className="max-w-full max-h-[90vh] object-contain"
                width={1920}
                height={1080}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
