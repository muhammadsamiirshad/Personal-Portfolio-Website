'use client';

import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, Container } from 'tsparticles-engine';

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded successfully
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#06B6D4'
          },
          links: {
            color: '#8B5CF6',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 50
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;
