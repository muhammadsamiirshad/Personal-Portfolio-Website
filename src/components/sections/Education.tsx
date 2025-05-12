'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
import { FiCalendar } from 'react-icons/fi';

const Education: React.FC = () => {
  return (
    <Section id="education" className="bg-gradient-to-b from-darker to-dark/50">
      <SectionTitle 
        title="Education" 
        subtitle="My academic background and qualifications" 
      />
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-50 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <Animated key={edu.institution} delay={index * 0.2}>
              <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:rtl' : ''
              }`}>
                <div className="md:text-right ltr">
                  <GlassPanel className="h-full" hoverEffect>
                    <h3 className="text-xl font-bold text-gradient mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-medium text-white mb-1">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center mb-3 md:justify-end">
                      <FiCalendar className="text-cyan-500 mr-2" />
                      <span className="text-slate-300">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-slate-300">{edu.description}</p>
                  </GlassPanel>
                </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'order-first'}`}>
                  <div className="h-full w-full flex items-center">
                    <motion.div 
                      className="relative w-full aspect-video max-w-md mx-auto"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl text-white font-bold">{edu.shortName}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  className="absolute left-4 md:left-1/2 top-10 w-4 h-4 bg-cyan-500 rounded-full z-10 -translate-x-1/2"
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
                </motion.div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
