import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  layer: number;
}

const HeroVisualAnchor = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create layered particle system - organic cluster formation
    const particleCount = 35;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => {
      const layer = Math.floor(Math.random() * 3); // 0 = inner, 1 = mid, 2 = outer
      const layerRadius = 60 + layer * 50;
      const angle = (i / particleCount) * Math.PI * 2 + Math.random() * 0.5;
      const radiusVariation = Math.random() * 40;
      
      const baseX = centerX + Math.cos(angle) * (layerRadius + radiusVariation);
      const baseY = centerY + Math.sin(angle) * (layerRadius + radiusVariation) * 0.7; // Slightly elliptical
      
      return {
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        vx: 0,
        vy: 0,
        radius: 1.5 + Math.random() * 2 + (2 - layer) * 0.5,
        opacity: 0.3 + Math.random() * 0.4 + (2 - layer) * 0.1,
        phase: Math.random() * Math.PI * 2,
        layer,
      };
    });

    const animate = () => {
      if (!canvas || !ctx) return;
      
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      ctx.clearRect(0, 0, w, h);
      
      timeRef.current += 0.003; // Very slow time progression
      const time = timeRef.current;
      
      const particles = particlesRef.current;
      const cx = w / 2;
      const cy = h / 2;

      // Draw central subtle glow
      const centralGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
      centralGlow.addColorStop(0, "rgba(218, 138, 103, 0.08)");
      centralGlow.addColorStop(0.5, "rgba(218, 138, 103, 0.03)");
      centralGlow.addColorStop(1, "rgba(218, 138, 103, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fillStyle = centralGlow;
      ctx.fill();

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Organic orbital movement - slower for outer layers
        const speedMultiplier = 1 - particle.layer * 0.25;
        const orbitSpeed = time * speedMultiplier;
        
        // Breathing motion
        const breathe = Math.sin(time * 0.5 + particle.phase) * 8;
        const drift = Math.cos(time * 0.3 + particle.phase * 1.5) * 6;
        
        // Subtle orbital rotation
        const currentAngle = Math.atan2(particle.baseY - cy, particle.baseX - cx);
        const currentRadius = Math.sqrt(
          Math.pow(particle.baseX - cx, 2) + Math.pow(particle.baseY - cy, 2)
        );
        
        const newAngle = currentAngle + orbitSpeed * 0.02;
        const targetX = cx + Math.cos(newAngle) * (currentRadius + breathe);
        const targetY = cy + Math.sin(newAngle) * (currentRadius + breathe) * 0.7 + drift;
        
        // Smooth interpolation
        particle.x += (targetX - particle.x) * 0.02;
        particle.y += (targetY - particle.y) * 0.02;

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.7 + Math.sin(time + particle.phase) * 0.3);

        // Draw particle glow
        const glowSize = particle.radius * 4;
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        glow.addColorStop(0, `rgba(218, 138, 103, ${pulseOpacity * 0.3})`);
        glow.addColorStop(1, "rgba(218, 138, 103, 0)");
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
        ctx.fill();

        // Draw connections within same layer and to adjacent layers
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const layerDiff = Math.abs(particle.layer - other.layer);
          if (layerDiff > 1) continue;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = layerDiff === 0 ? 80 : 60;
          
          if (distance < maxDist) {
            const lineOpacity = (1 - distance / maxDist) * 0.12 * (layerDiff === 0 ? 1 : 0.5);
            
            // Curved connection using quadratic bezier
            const midX = (particle.x + other.x) / 2;
            const midY = (particle.y + other.y) / 2;
            const curvature = Math.sin(time + i * 0.1) * 10;
            const perpX = -(other.y - particle.y) / distance * curvature;
            const perpY = (other.x - particle.x) / distance * curvature;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.quadraticCurveTo(midX + perpX, midY + perpY, other.x, other.y);
            ctx.strokeStyle = `rgba(218, 138, 103, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // Draw flowing energy lines from center
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const angle = (i / lineCount) * Math.PI * 2 + time * 0.1;
        const length = 80 + Math.sin(time * 2 + i) * 20;
        const opacity = 0.08 + Math.sin(time + i * 0.5) * 0.04;
        
        const gradient = ctx.createLinearGradient(
          cx, cy,
          cx + Math.cos(angle) * length,
          cy + Math.sin(angle) * length * 0.7
        );
        gradient.addColorStop(0, `rgba(218, 138, 103, ${opacity})`);
        gradient.addColorStop(1, "rgba(218, 138, 103, 0)");
        
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle) * length,
          cy + Math.sin(angle) * length * 0.7
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default HeroVisualAnchor;
