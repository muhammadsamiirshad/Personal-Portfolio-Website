'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
// Import all icons from SimpleIcons for consistency
import { 
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiSqlite,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiKalilinux,
  SiLinux,
  SiWireshark,
  SiOpenbugbounty,
  SiElectron
} from 'react-icons/si';

// Create a map of icon components
const iconMap = {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiSqlite,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiKalilinux,
  SiLinux,
  SiWireshark,
  SiOpenbugbounty,
  SiElectron
};

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <SectionTitle 
        title="Technical Skills" 
        subtitle="My expertise and technologies I work with" 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
          
          return (
            <Animated 
              key={skill.name} 
              delay={index * 0.1} 
              className="h-full"
            >
              <GlassPanel 
                className="h-full flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-500/50 p-4 sm:p-6"
                hoverEffect
              >
                <div className="relative mb-3 sm:mb-4">                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-30 blur-lg"></div>
                  <div className="relative bg-slate-800/50 rounded-full p-3 flex items-center justify-center">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: skill.color || 'white' }} />
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-xs sm:text-sm text-white font-bold">{skill.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{skill.name}</h3>
                
                <div className="flex space-x-1 mt-1 sm:mt-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        i < skill.level
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                          : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </GlassPanel>
            </Animated>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
