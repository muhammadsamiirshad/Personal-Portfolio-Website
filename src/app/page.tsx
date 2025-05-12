'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components
const BackgroundWrapper = dynamic(() => import('@/components/background/BackgroundWrapper'), { ssr: false });
const Navbar = dynamic(() => import('@/components/ui/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const Certifications = dynamic(() => import('@/components/sections/Certifications'), { ssr: false });
const Education = dynamic(() => import('@/components/sections/Education'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-darker" />
      </div>
      
      {/* Dynamic Import for Background Components */}
      <BackgroundWrapper />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
