'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120,
          density: { enable: true, value_area: 900 },
        },
        color: { value: '#1A1612' },
        shape: { type: ['circle', 'triangle'] },
        opacity: { value: { min: 0.05, max: 0.15 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: 'rgba(26,22,18,0.12)',
          opacity: 1,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          straight: false,
          outMode: 'bounce',
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id={props.id}
      options={options}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    />
  );
};

export default ParticlesComponent;
