'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';

const About: React.FC = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-cyan-500" />,
      text: personalInfo.location,
      label: 'Location',
    },
    {
      icon: <FiMail className="text-cyan-500" />,
      text: personalInfo.email,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiPhone className="text-cyan-500" />,
      text: personalInfo.phone,
      label: 'Phone',
      href: `tel:${personalInfo.phone}`,
    },
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-darker to-dark/80">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me and my background"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Animated delay={0.2} className="lg:col-span-2">
          <GlassPanel className="h-full">
            <h3 className="text-2xl font-bold text-gradient mb-6">My Background</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                With a strong foundation in both defensive and offensive security practices,
                I bring a comprehensive approach to developing secure web applications.
                My passion for technology drives me to constantly learn and adapt to the 
                ever-evolving landscape of web development and cybersecurity.
              </p>              <p>
                When I&apos;m not coding or researching security vulnerabilities,
                you&apos;ll find me contributing to open-source projects, mentoring aspiring developers,
                or speaking at tech conferences about the intersection of web development and security.
              </p>
            </div>
          </GlassPanel>
        </Animated>

        <div className="space-y-6">
          <Animated delay={0.3}>
            <GlassPanel>
              <h3 className="text-xl font-bold text-gradient mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 rounded-lg bg-slate-800 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <p className="text-white">{info.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </Animated>

          <Animated delay={0.4}>
            <GlassPanel>
              <h3 className="text-xl font-bold text-gradient mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">                {personalInfo.socials.map((social, index) => {
                  // Get icon directly from imported SiIcons
                  const IconComponent = SiIcons[social.icon as keyof typeof SiIcons];
                  
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-800 text-white hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </motion.a>
                  );
                })}
              </div>
            </GlassPanel>
          </Animated>
        </div>
      </div>
    </Section>
  );
};

export default About;
