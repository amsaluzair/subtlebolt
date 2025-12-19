import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
  isYellow: boolean;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    
    const updateDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const particles: Particle[] = [];
    // Adjust density: fewer particles on smaller screens to keep it subtle
    const particleCount = Math.floor((width * height) / 25000); 

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 0.2, // Very slow horizontal drift
          dy: (Math.random() - 0.5) * 0.2, // Very slow vertical drift
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          isYellow: Math.random() > 0.85 // 15% chance of being brand yellow
        });
      }
    };

    createParticles();

    // Re-create particles on resize to ensure distribution covers new area
    window.addEventListener('resize', createParticles);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Brand colors: Yellow or faint White
        if (p.isYellow) {
            ctx.fillStyle = `rgba(250, 204, 21, ${p.opacity})`; 
        } else {
            ctx.fillStyle = `rgba(150, 150, 150, ${p.opacity * 0.5})`;
        }
        
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', createParticles);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }} 
    />
  );
};