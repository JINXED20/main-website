'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  duration: string;
  delay: string;
}

export function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Initial particles
    const initialParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 6 + 8}s`,
      delay: `${i * 0.5}s`,
    }));
    setParticles(initialParticles);

    // Create new particles periodically
    let idCounter = 8;
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: idCounter++,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 6 + 8}s`,
        delay: `${Math.random() * 3}s`,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[3]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute h-[3px] w-[3px] rounded-full bg-[var(--accent)] opacity-0"
          style={{
            left: particle.left,
            animation: `particleFloat ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
