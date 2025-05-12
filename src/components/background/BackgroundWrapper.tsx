'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false });
const GridPattern = dynamic(() => import('./GridPattern'), { ssr: false }); 
const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false });

const BackgroundWrapper: React.FC = () => {
  return (
    <>
      <GridPattern />
      <ParticleBackground />
      <ThreeBackground />
    </>
  );
};

export default BackgroundWrapper;
