'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import Animated from '@/components/ui/Animated';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For demonstration purposes - in a real app, you'd handle the API call here
    setSubmitResult({
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.'
    });
    
    setIsSubmitting(false);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Section id="contact">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a question or want to work together?" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Animated delay={0.1}>
          <GlassPanel className="h-full">
            <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-slate-800 mr-4">
                  <FiMail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-slate-800 mr-4">
                  <FiPhone className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-slate-800 mr-4">
                  <FiMapPin className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Location</h4>
                  <p className="text-slate-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {personalInfo.socials.map((social, index) => {
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
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </GlassPanel>
        </Animated>
        
        <Animated delay={0.3}>
          <GlassPanel>
            <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
            
            {submitResult ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${
                  submitResult.success
                    ? 'bg-green-900/30 border-green-700 text-green-400'
                    : 'bg-red-900/30 border-red-700 text-red-400'
                } mb-6`}
              >
                {submitResult.message}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow flex items-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend />
                </motion.button>
              </form>
            )}
          </GlassPanel>
        </Animated>
      </div>
    </Section>
  );
};

export default Contact;
