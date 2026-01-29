import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Database, Users, ShieldAlert, TrendingUp } from "lucide-react";

const problemNodes = [
  {
    id: "fragmented",
    icon: Database,
    title: "Fragmented Data",
    description: "ERP systems, suppliers, logistics and marketplaces operate in silos.",
    position: { x: 0, y: 0 },
  },
  {
    id: "manual",
    icon: Users,
    title: "Manual Planning",
    description: "Human-driven decisions introduce delay, errors and scalability limits.",
    position: { x: 1, y: 0 },
  },
  {
    id: "risk",
    icon: ShieldAlert,
    title: "Risk & Fraud",
    description: "Limited transparency increases supplier risk, fraud and compliance exposure.",
    position: { x: 0, y: 1 },
  },
  {
    id: "scaling",
    icon: TrendingUp,
    title: "Scaling Breakdown",
    description: "Operational complexity grows exponentially with volume and partners.",
    position: { x: 1, y: 1 },
  },
];

// Connection paths between nodes
const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
];

const ProblemSection = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [glitchingConnections, setGlitchingConnections] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Random glitch effect on connections
  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnection = Math.floor(Math.random() * connections.length);
      setGlitchingConnections(prev => [...prev, randomConnection]);
      
      setTimeout(() => {
        setGlitchingConnections(prev => prev.filter(c => c !== randomConnection));
      }, 300 + Math.random() * 400);
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  // Calculate node positions for SVG
  const getNodeCenter = (index: number, containerSize: number) => {
    const node = problemNodes[index];
    const padding = 80;
    const gridSize = (containerSize - padding * 2) / 2;
    const x = padding + node.position.x * gridSize + gridSize / 2;
    const y = padding + node.position.y * gridSize + gridSize / 2;
    return { x, y };
  };

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48">
      {/* Ambient background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-8"
            >
              The Challenge
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[-0.02em] leading-[1.15] mb-8"
            >
              <span className="text-foreground">Modern Supply Chains Are Built on</span>{" "}
              <span className="text-muted-foreground/40">Broken Connections</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base lg:text-lg text-muted-foreground/50 font-light leading-relaxed"
            >
              Fragmented systems, manual coordination, and disconnected data create hidden risk, 
              cost, and operational drag at scale.
            </motion.p>

            {/* Active node description */}
            <AnimatePresence mode="wait">
              {activeNode !== null && (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12 p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {(() => {
                      const Icon = problemNodes[activeNode].icon;
                      return <Icon className="w-5 h-5 text-primary" />;
                    })()}
                    <h4 className="text-lg font-medium text-foreground">
                      {problemNodes[activeNode].title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground/60 text-sm leading-relaxed">
                    {problemNodes[activeNode].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right column - Interactive network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-square max-w-md mx-auto lg:max-w-none"
          >
            {/* SVG Network visualization */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              {/* Connection lines */}
              {connections.map((connection, index) => {
                const from = getNodeCenter(connection.from, 400);
                const to = getNodeCenter(connection.to, 400);
                const isGlitching = glitchingConnections.includes(index);
                const isHighlighted = activeNode === connection.from || activeNode === connection.to;

                return (
                  <g key={index}>
                    {/* Base connection line */}
                    <motion.line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={isHighlighted ? 2 : 1}
                      strokeOpacity={isGlitching ? 0.1 : isHighlighted ? 0.8 : 0.3}
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { 
                        pathLength: isGlitching ? [1, 0.3, 1] : 1,
                        strokeOpacity: isGlitching ? [0.3, 0.05, 0.3] : isHighlighted ? 0.8 : 0.3
                      } : {}}
                      transition={{ 
                        pathLength: { duration: 1.5, delay: 0.5 + index * 0.1 },
                        strokeOpacity: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Animated flow particle */}
                    {!isGlitching && (
                      <motion.circle
                        r={2}
                        fill={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                        opacity={0.6}
                        initial={{ opacity: 0 }}
                        animate={isInView ? {
                          opacity: [0, 0.6, 0],
                          cx: [from.x, to.x],
                          cy: [from.y, to.y],
                        } : {}}
                        transition={{
                          duration: 3,
                          delay: 1 + index * 0.5,
                          repeat: Infinity,
                          repeatDelay: 2 + Math.random() * 3,
                          ease: "linear",
                        }}
                      />
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {problemNodes.map((node, index) => {
                const center = getNodeCenter(index, 400);
                const Icon = node.icon;
                const isActive = activeNode === index;

                return (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Outer glow ring */}
                    <motion.circle
                      cx={center.x}
                      cy={center.y}
                      r={isActive ? 55 : 50}
                      fill="none"
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={1}
                      strokeOpacity={isActive ? 0.5 : 0.15}
                      animate={{
                        r: isActive ? [55, 58, 55] : [50, 52, 50],
                        strokeOpacity: isActive ? [0.5, 0.3, 0.5] : [0.15, 0.1, 0.15],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Card background */}
                    <motion.rect
                      x={center.x - 45}
                      y={center.y - 45}
                      width={90}
                      height={90}
                      rx={20}
                      fill="hsl(var(--card))"
                      fillOpacity={isActive ? 0.6 : 0.3}
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={1}
                      strokeOpacity={isActive ? 0.6 : 0.2}
                      style={{
                        filter: isActive 
                          ? "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))" 
                          : "drop-shadow(0 4px 12px hsl(var(--background) / 0.5))",
                      }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon container */}
                    <foreignObject
                      x={center.x - 20}
                      y={center.y - 28}
                      width={40}
                      height={40}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon 
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isActive ? "text-primary" : "text-muted-foreground/50"
                          }`} 
                        />
                      </div>
                    </foreignObject>

                    {/* Node title */}
                    <text
                      x={center.x}
                      y={center.y + 22}
                      textAnchor="middle"
                      className={`text-[10px] font-medium fill-current transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground/60"
                      }`}
                    >
                      {node.title.split(" ")[0]}
                    </text>
                  </motion.g>
                );
              })}
            </svg>

            {/* Ambient particle effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/30"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1, 0.5],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32 md:mt-48 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground/30 font-light italic">
            "What if the system could manage itself?"
          </p>
          <motion.div
            className="mt-6 flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              width="20" 
              height="30" 
              viewBox="0 0 20 30" 
              className="text-muted-foreground/20"
            >
              <path
                d="M10 5 L10 20 M5 15 L10 20 L15 15"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
