import { useState, useRef, useEffect, useCallback } from "react";
import { Brain, Store, Workflow, MessageSquare, ChevronRight } from "lucide-react";
import { AmbientGlow } from "./DepthSystem";
import { motion, AnimatePresence } from "framer-motion";

// Module definitions with sub-functions and details
const modules = [
  {
    id: "marketplace",
    title: "AI Marketplace",
    icon: Store,
    angle: 270, // Top
    subNodes: [
      { id: "discovery", label: "Agent Discovery" },
      { id: "negotiation", label: "Price Negotiation" },
      { id: "matching", label: "Capability Matching" },
      { id: "trust", label: "Trust Scoring" },
    ],
    details: {
      decisions: [
        "Which AI agents to engage for specific tasks",
        "Optimal pricing and resource allocation",
        "When to outsource vs. handle internally",
      ],
      data: [
        "Agent performance histories",
        "Real-time capability inventories",
        "Market pricing signals",
        "Task complexity metrics",
      ],
      outcomes: [
        "40% reduction in task completion time",
        "Automated agent procurement",
        "Dynamic resource scaling",
      ],
    },
  },
  {
    id: "operations",
    title: "Autonomous Supply Chain",
    icon: Workflow,
    angle: 30, // Bottom right
    subNodes: [
      { id: "planning", label: "Demand Planning" },
      { id: "inventory", label: "Inventory Optimization" },
      { id: "routing", label: "Dynamic Routing" },
      { id: "risk", label: "Risk Mitigation" },
    ],
    details: {
      decisions: [
        "Inventory reorder points and quantities",
        "Shipment routing and carrier selection",
        "Supplier switching during disruptions",
      ],
      data: [
        "Real-time demand signals",
        "Supplier health indicators",
        "Logistics network status",
        "Weather and geopolitical feeds",
      ],
      outcomes: [
        "23% inventory cost reduction",
        "98.7% on-time delivery rate",
        "Predictive disruption avoidance",
      ],
    },
  },
  {
    id: "communication",
    title: "AI-to-AI Communication",
    icon: MessageSquare,
    angle: 150, // Bottom left
    subNodes: [
      { id: "protocol", label: "Protocol Translation" },
      { id: "sync", label: "State Synchronization" },
      { id: "consensus", label: "Consensus Building" },
      { id: "handoff", label: "Task Handoff" },
    ],
    details: {
      decisions: [
        "Which agents to coordinate with",
        "When to escalate to human oversight",
        "How to resolve conflicting objectives",
      ],
      data: [
        "Inter-agent message streams",
        "Shared knowledge graphs",
        "Objective alignment scores",
        "Coordination protocols",
      ],
      outcomes: [
        "Seamless multi-agent orchestration",
        "Zero-latency decision propagation",
        "Self-healing system architecture",
      ],
    },
  },
];

const FeaturesSection = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slow rotation for ambient movement
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setRotationAngle((prev) => (prev + 0.02) % 360);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Header observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleModuleInteraction = useCallback((moduleId: string | null) => {
    setActiveModule(moduleId);
  }, []);

  const activeModuleData = modules.find((m) => m.id === activeModule);

  // Calculate positions for modules
  const getModulePosition = (angle: number, radius: number) => {
    const rad = ((angle + rotationAngle * 0.1) * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Ambient glows */}
      <AmbientGlow color="secondary" size="xl" intensity="medium" position="center" />
      <AmbientGlow color="primary" size="md" intensity="subtle" position="right" className="top-1/4" />

      <div className="relative z-10 container mx-auto px-8 lg:px-20 xl:px-28">
        {/* Section header */}
        <div ref={headerRef} className="max-w-2xl mb-20 md:mb-28">
          <p
            className={`text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-10 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Intelligence Architecture
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] mb-12 leading-[1.08] transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-foreground">A self-reinforcing</span>
            <br />
            <span className="text-muted-foreground/30">autonomous system</span>
          </h2>
        </div>

        {/* Main interactive area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* System visualization */}
          <div
            ref={containerRef}
            className="relative w-full lg:w-[55%] aspect-square max-w-[600px] mx-auto lg:mx-0"
          >
            {/* SVG for connections and orbits */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="-300 -300 600 600"
              style={{ overflow: "visible" }}
            >
              {/* Orbit rings */}
              <circle
                cx="0"
                cy="0"
                r="180"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.3"
              />

              {/* Connection lines to modules */}
              {modules.map((module) => {
                const pos = getModulePosition(module.angle, 180);
                const isActive = activeModule === module.id;
                const isDimmed = activeModule && activeModule !== module.id;

                return (
                  <g key={`connection-${module.id}`}>
                    {/* Connection path */}
                    <motion.path
                      d={`M 0 0 Q ${pos.x * 0.5} ${pos.y * 0.5} ${pos.x} ${pos.y}`}
                      fill="none"
                      stroke={isActive ? "hsl(var(--accent))" : "hsl(var(--border))"}
                      strokeWidth={isActive ? 2 : 1}
                      opacity={isDimmed ? 0.2 : isActive ? 1 : 0.4}
                      animate={{
                        opacity: isDimmed ? 0.2 : isActive ? 1 : 0.4,
                        strokeWidth: isActive ? 2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Data flow particles */}
                    {isActive && (
                      <>
                        {[0, 1, 2].map((i) => (
                          <motion.circle
                            key={`pulse-${module.id}-${i}`}
                            r="3"
                            fill="hsl(var(--accent))"
                            initial={{ opacity: 0 }}
                            animate={{
                              cx: [0, pos.x * 0.5, pos.x],
                              cy: [0, pos.y * 0.5, pos.y],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </>
                    )}
                  </g>
                );
              })}

              {/* Inter-module connections (when active) */}
              {activeModule && (
                <>
                  {modules
                    .filter((m) => m.id !== activeModule)
                    .map((module) => {
                      const activePos = getModulePosition(
                        modules.find((m) => m.id === activeModule)!.angle,
                        180
                      );
                      const pos = getModulePosition(module.angle, 180);
                      const midX = (activePos.x + pos.x) / 2;
                      const midY = (activePos.y + pos.y) / 2;

                      return (
                        <motion.path
                          key={`inter-${module.id}`}
                          d={`M ${pos.x} ${pos.y} Q ${midX * 0.3} ${midY * 0.3} ${activePos.x} ${activePos.y}`}
                          fill="none"
                          stroke="hsl(var(--border))"
                          strokeWidth="1"
                          strokeDasharray="2 4"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 0.2, pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        />
                      );
                    })}
                </>
              )}
            </svg>

            {/* Central node */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: activeModule ? 0.9 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeModule
                    ? "bg-background/60 border border-border/30"
                    : "bg-background/80 border border-accent/30"
                }`}
                style={{
                  boxShadow: activeModule
                    ? "none"
                    : "0 0 60px hsl(var(--accent) / 0.15), inset 0 0 30px hsl(var(--accent) / 0.05)",
                }}
              >
                {/* Pulse rings */}
                {!activeModule && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/20"
                      animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/20"
                      animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                      transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  </>
                )}

                <div className="text-center">
                  <Brain
                    className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 transition-colors duration-500 ${
                      activeModule ? "text-muted-foreground/50" : "text-accent"
                    }`}
                  />
                  <p
                    className={`text-[10px] md:text-xs font-medium tracking-wide transition-colors duration-500 ${
                      activeModule ? "text-muted-foreground/50" : "text-foreground/80"
                    }`}
                  >
                    Decision Engine
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Module nodes */}
            {modules.map((module) => {
              const pos = getModulePosition(module.angle, 180);
              const isActive = activeModule === module.id;
              const isDimmed = activeModule && activeModule !== module.id;
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: isActive ? 1.1 : isDimmed ? 0.9 : 1,
                    opacity: isDimmed ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={() => handleModuleInteraction(isActive ? null : module.id)}
                    onMouseEnter={() => !activeModule && handleModuleInteraction(module.id)}
                    onMouseLeave={() => !activeModule && handleModuleInteraction(null)}
                    className={`relative w-28 h-28 md:w-36 md:h-36 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group ${
                      isActive
                        ? "bg-accent/10 border-2 border-accent"
                        : "bg-background/60 border border-border/50 hover:border-accent/50"
                    }`}
                    style={{
                      boxShadow: isActive
                        ? "0 0 40px hsl(var(--accent) / 0.2), inset 0 0 20px hsl(var(--accent) / 0.05)"
                        : "none",
                    }}
                  >
                    <Icon
                      className={`w-8 h-8 md:w-10 md:h-10 mb-2 transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-foreground/60 group-hover:text-accent/70"
                      }`}
                    />
                    <p
                      className={`text-[10px] md:text-xs font-medium text-center px-2 leading-tight transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-foreground/60"
                      }`}
                    >
                      {module.title}
                    </p>

                    {/* Sub-nodes that appear on activation */}
                    <AnimatePresence>
                      {isActive && (
                        <div className="absolute inset-0">
                          {module.subNodes.map((subNode, idx) => {
                            const subAngle = (idx / module.subNodes.length) * 360 - 90;
                            const subRad = (subAngle * Math.PI) / 180;
                            const subRadius = 65;
                            const subX = Math.cos(subRad) * subRadius;
                            const subY = Math.sin(subRad) * subRadius;

                            return (
                              <motion.div
                                key={subNode.id}
                                className="absolute left-1/2 top-1/2"
                                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                  x: subX,
                                  y: subY,
                                }}
                                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: idx * 0.08,
                                  ease: "easeOut",
                                }}
                                style={{ transform: "translate(-50%, -50%)" }}
                              >
                                <div className="w-16 md:w-20 px-2 py-1.5 bg-background/90 border border-accent/30 rounded-lg text-center">
                                  <p className="text-[8px] md:text-[9px] text-accent/90 font-medium whitespace-nowrap">
                                    {subNode.label}
                                  </p>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {activeModuleData ? (
                <motion.div
                  key={activeModuleData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background/40 border border-border/30 rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <activeModuleData.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-foreground">
                      {activeModuleData.title}
                    </h3>
                  </div>

                  {/* Decisions */}
                  <div className="mb-8">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">
                      Automated Decisions
                    </h4>
                    <ul className="space-y-3">
                      {activeModuleData.details.decisions.map((decision, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{decision}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Data inputs */}
                  <div className="mb-8">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
                      Data Inputs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModuleData.details.data.map((data, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="px-3 py-1.5 bg-border/20 rounded-lg text-xs text-foreground/60"
                        >
                          {data}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {activeModuleData.details.outcomes.map((outcome, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="text-sm text-accent/90 font-medium"
                        >
                          {outcome}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-background/20 border border-border/20 rounded-2xl p-8 md:p-10"
                >
                  <p className="text-muted-foreground/40 text-sm font-light">
                    Select a module to explore how it contributes to autonomous decision-making
                  </p>
                  <div className="mt-6 space-y-4">
                    {modules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => handleModuleInteraction(module.id)}
                        className="flex items-center gap-3 text-left w-full group"
                      >
                        <module.icon className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent/50 transition-colors" />
                        <span className="text-sm text-muted-foreground/50 group-hover:text-foreground/70 transition-colors">
                          {module.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    </section>
  );
};

export default FeaturesSection;
