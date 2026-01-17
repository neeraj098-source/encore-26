import React, { useEffect, useRef } from 'react';

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  angle: number;
  speed: number;
}

const Antigravity: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = '#FF9FFC',
  autoAnimate = true,
  particleVariance = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 0.5,
      });
    }
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;

      timeRef.current += waveSpeed;

      // Clear canvas
      ctx.fillStyle = 'rgba(26, 26, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Calculate wave motion
        const waveX = Math.sin(timeRef.current + index * 0.01) * waveAmplitude * 10;
        const waveY = Math.cos(timeRef.current + index * 0.01) * waveAmplitude * 10;

        // Circle orbit pattern
        particle.angle += (waveSpeed * 0.01) * (particleVariance || 1);
        const orbitRadius = ringRadius + Math.sin(timeRef.current + index * 0.02) * magnetRadius;
        
        particle.targetX = centerX + Math.cos(particle.angle) * orbitRadius * 20 + waveX;
        particle.targetY = centerY + Math.sin(particle.angle) * orbitRadius * 20 + waveY;

        // Lerp towards target
        particle.x += (particle.targetX - particle.x) * lerpSpeed;
        particle.y += (particle.targetY - particle.y) * lerpSpeed;

        // Draw particle
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = color;
            ctx.globalAlpha = 0.1 * (1 - distance / 100);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (autoAnimate) {
      animate();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [count, magnetRadius, ringRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, autoAnimate, particleVariance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
      }}
    />
  );
};

export default Antigravity;
