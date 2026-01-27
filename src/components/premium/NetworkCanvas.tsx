import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseX: number;
  baseY: number;
  phase: number;
  cluster: number;
  flowOffset: number;
}

interface Cluster {
  x: number;
  y: number;
  radius: number;
  phase: number;
}

interface NetworkCanvasProps {
  nodeCount?: number;
  chaos?: number;
  className?: string;
  colorScheme?: "primary" | "accent" | "neutral";
  scrollReactive?: boolean;
  parallaxFactor?: number;
}

const NetworkCanvas = ({ 
  nodeCount = 40, 
  chaos = 0, 
  className = "",
  colorScheme = "neutral",
  scrollReactive = false,
  parallaxFactor = 0.3
}: NetworkCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const clustersRef = useRef<Cluster[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNodes();
    };

    const initializeNodes = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create cluster centers for organic grouping
      const clusterCount = 5;
      clustersRef.current = Array.from({ length: clusterCount }, (_, i) => {
        const angle = (i / clusterCount) * Math.PI * 2 + Math.random() * 0.3;
        const distance = 150 + Math.random() * 200;
        return {
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance * 0.7,
          radius: 80 + Math.random() * 60,
          phase: Math.random() * Math.PI * 2,
        };
      });

      // Add center cluster
      clustersRef.current.push({
        x: centerX,
        y: centerY,
        radius: 100,
        phase: 0,
      });

      // Distribute nodes among clusters
      nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
        const cluster = Math.floor(Math.random() * clustersRef.current.length);
        const clusterData = clustersRef.current[cluster];
        
        // Position within cluster with some variance
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * clusterData.radius;
        const baseX = clusterData.x + Math.cos(angle) * dist;
        const baseY = clusterData.y + Math.sin(angle) * dist;
        
        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          radius: 1.2 + Math.random() * 2,
          opacity: 0.25 + Math.random() * 0.35,
          phase: Math.random() * Math.PI * 2,
          cluster,
          flowOffset: Math.random() * 100,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      targetScrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const getColor = (opacity: number) => {
      switch (colorScheme) {
        case "primary":
          return `rgba(218, 138, 103, ${opacity})`;
        case "accent":
          return `rgba(14, 75, 88, ${opacity})`;
        default:
          return `rgba(255, 255, 255, ${opacity})`;
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth scroll interpolation
      scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.02;
      timeRef.current += 0.004; // Very slow time progression
      const time = timeRef.current;

      const nodes = nodesRef.current;
      const clusters = clustersRef.current;
      
      const chaosMultiplier = chaos * 2.5;
      const connectionDistance = 160 - chaos * 60;
      const organizationStrength = 1 - chaos * 0.6;

      // Scroll-based parallax offset
      const scrollOffset = scrollReactive ? scrollRef.current * parallaxFactor : 0;

      // Global directional flow (gentle drift)
      const flowAngle = time * 0.15;
      const flowStrength = 0.3;
      const globalFlowX = Math.cos(flowAngle) * flowStrength;
      const globalFlowY = Math.sin(flowAngle * 0.7) * flowStrength * 0.5;

      // Update cluster positions (slow orbital movement)
      clusters.forEach((cluster, i) => {
        if (i === clusters.length - 1) return; // Keep center cluster fixed
        const orbitSpeed = 0.02 + i * 0.005;
        cluster.phase += orbitSpeed * 0.01;
      });

      // First pass: update node positions
      nodes.forEach((node, i) => {
        const cluster = clusters[node.cluster];
        
        // Cluster breathing effect
        const clusterBreath = Math.sin(time * 0.5 + cluster.phase) * 15;
        
        // Individual organic movement within cluster
        const individualWave = Math.sin(time + node.phase) * (8 + chaosMultiplier * 25);
        const individualWaveY = Math.cos(time * 0.6 + node.phase * 1.2) * (6 + chaosMultiplier * 20);
        
        // Directional flow influence (varies by node)
        const flowInfluence = Math.sin(time * 0.3 + node.flowOffset) * 0.5 + 0.5;
        const nodeFlowX = globalFlowX * flowInfluence * 20;
        const nodeFlowY = globalFlowY * flowInfluence * 15;
        
        const targetX = node.baseX + individualWave + nodeFlowX + clusterBreath * 0.3;
        const targetY = node.baseY + individualWaveY + nodeFlowY - scrollOffset + clusterBreath * 0.2;
        
        // Ultra-smooth interpolation
        node.vx = (targetX - node.x) * 0.012 * organizationStrength;
        node.vy = (targetY - node.y) * 0.012 * organizationStrength;
        
        if (chaos > 0.4) {
          node.vx += (Math.random() - 0.5) * chaosMultiplier * 0.2;
          node.vy += (Math.random() - 0.5) * chaosMultiplier * 0.2;
        }
        
        // Heavy damping
        node.vx *= 0.94;
        node.vy *= 0.94;

        // Subtle mouse influence
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 && dist > 0) {
          const force = (250 - dist) / 250 * 0.003;
          node.vx += dx * force;
          node.vy += dy * force;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Soft boundaries
        const margin = 60;
        if (node.x < margin) node.vx += 0.04;
        if (node.x > canvas.width - margin) node.vx -= 0.04;
        if (node.y < margin) node.vy += 0.04;
        if (node.y > canvas.height - margin) node.vy -= 0.04;
      });

      // Second pass: draw connections first (behind nodes)
      ctx.lineCap = "round";
      
      // Draw inter-cluster backbone connections (main network lines)
      for (let i = 0; i < clusters.length; i++) {
        for (let j = i + 1; j < clusters.length; j++) {
          const c1 = clusters[i];
          const c2 = clusters[j];
          const cdx = c2.x - c1.x;
          const cdy = c2.y - c1.y;
          const clusterDist = Math.sqrt(cdx * cdx + cdy * cdy);
          
          if (clusterDist < 450) {
            // Find nodes closest to the line between clusters
            const nodesInC1 = nodes.filter(n => n.cluster === i);
            const nodesInC2 = nodes.filter(n => n.cluster === j);
            
            // Connect a few nodes between clusters
            const connectCount = Math.min(2, nodesInC1.length, nodesInC2.length);
            for (let k = 0; k < connectCount; k++) {
              const n1 = nodesInC1[k % nodesInC1.length];
              const n2 = nodesInC2[k % nodesInC2.length];
              
              if (n1 && n2) {
                const pulse = 0.7 + Math.sin(time * 1.5 + k) * 0.3;
                const lineOpacity = 0.04 * (1 - chaos * 0.4) * pulse;
                
                // Curved connection
                const midX = (n1.x + n2.x) / 2;
                const midY = (n1.y + n2.y) / 2;
                const perpX = -(n2.y - n1.y) * 0.1;
                const perpY = (n2.x - n1.x) * 0.1;
                
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.quadraticCurveTo(midX + perpX, midY + perpY, n2.x, n2.y);
                ctx.strokeStyle = getColor(lineOpacity);
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw local connections within proximity
      nodes.forEach((node, i) => {
        const nodeOpacity = node.opacity * (1 - chaos * 0.12);
        
        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const connDx = other.x - node.x;
          const connDy = other.y - node.y;
          const distance = Math.sqrt(connDx * connDx + connDy * connDy);

          // Stronger connections within same cluster
          const sameCluster = node.cluster === other.cluster;
          const maxDist = sameCluster ? connectionDistance * 1.2 : connectionDistance * 0.7;

          if (distance < maxDist && distance > 0) {
            const proximityFactor = 1 - distance / maxDist;
            const clusterBonus = sameCluster ? 1.5 : 0.6;
            const pulse = 0.75 + Math.sin(time * 1.2 + i * 0.05 + j * 0.03) * 0.25;
            const lineOpacity = proximityFactor * 0.08 * (1 - chaos * 0.25) * pulse * clusterBonus;
            
            // Add subtle curve based on flow direction
            const flowCurve = Math.sin(time + node.flowOffset * 0.1) * 8;
            const midX = (node.x + other.x) / 2;
            const midY = (node.y + other.y) / 2;
            const perpX = -(other.y - node.y) / distance * flowCurve;
            const perpY = (other.x - node.x) / distance * flowCurve;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.quadraticCurveTo(midX + perpX, midY + perpY, other.x, other.y);
            ctx.strokeStyle = getColor(lineOpacity);
            ctx.lineWidth = sameCluster ? 0.7 : 0.4;
            ctx.stroke();
          }
        }
      });

      // Third pass: draw nodes on top
      nodes.forEach((node) => {
        const nodeOpacity = node.opacity * (1 - chaos * 0.12);
        
        // Subtle outer glow
        const glowRadius = node.radius * 6;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, getColor(nodeOpacity * 0.15));
        gradient.addColorStop(0.5, getColor(nodeOpacity * 0.05));
        gradient.addColorStop(1, getColor(0));
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core node with soft edge
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        );
        coreGradient.addColorStop(0, getColor(nodeOpacity));
        coreGradient.addColorStop(0.7, getColor(nodeOpacity * 0.8));
        coreGradient.addColorStop(1, getColor(nodeOpacity * 0.3));
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodeCount, chaos, colorScheme, scrollReactive, parallaxFactor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
    />
  );
};

export default NetworkCanvas;