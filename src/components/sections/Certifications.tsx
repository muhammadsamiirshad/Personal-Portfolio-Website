'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const Certifications: React.FC = () => {  // No need for Credly script as we're using local badge images

  return (
    <Section id="certifications">
      <SectionTitle 
        title="Certifications" 
        subtitle="Professional certifications and credentials" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Animated key={cert.name} delay={index * 0.15}>
            <GlassPanel className="h-full" hoverEffect>
              <div className="flex items-start gap-4">
                <div className=" rounded-xl bg-slate-800 border border-slate-700">
                  {cert.image ? (
                    <Image 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      width={1080} 
                      height={1080} 
                      className="w-24 h-24 object-fill rounded-lg "
                    />
                  ) : (
                    <FiAward className="w-6 h-6 text-cyan-500" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-gradient">
                    {cert.name}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <span className="text-slate-300">{cert.issuer}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-cyan-400 font-medium">{cert.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-2">
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <span>View Certificate</span>
                        <FiExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                      {cert.badgeImage && cert.hasViewBadge && (
                      <div className="">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="relative group"
                        >
                          
                          <motion.a
                            href={cert.badgeImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2  text-slate-300 hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <span>View Badge</span>
                            <FiExternalLink className="w-4 h-4" />
                          </motion.a>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </Animated>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
