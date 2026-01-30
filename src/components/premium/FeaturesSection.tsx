import { useState, useRef, useEffect } from "react";
import { 
  Store, Cog, MessageSquare, 
  ArrowRight, TrendingUp, Clock, Shield,
  Brain
} from "lucide-react";
import { AmbientGlow } from "./DepthSystem";
import { motion, AnimatePresence } from "framer-motion";

// Feature data
const features = [
  {
    id: "marketplace",
    title: "AI Marketplace",
    icon: Store,
    description: "Autonomous supplier discovery and matching",
    visualization: {
      activeAreas: ["suppliers", "matching", "validation"],
      flowDirection: "inward",
    },
    content: {
      headline: "Find the right supplier in seconds, not weeks",
      steps: [
        {
          label: "Input",
          description: "Procurement requirements, specifications, and constraints"
        },
        {
          label: "AI Action", 
          description: "Scans global supplier network, scores by capability, cost, and reliability"
        },
        {
          label: "Output",
          description: "Ranked supplier recommendations with automated RFQ generation"
        }
      ],
      impact: [
        { icon: Clock, label: "90% faster", detail: "supplier qualification" },
        { icon: TrendingUp, label: "23% savings", detail: "on procurement costs" },
        { icon: Shield, label: "Real-time", detail: "risk monitoring" }
      ]
    }
  },
  {
    id: "operations",
    title: "Autonomous Supply Chain",
    icon: Cog,
    description: "Self-optimizing inventory and logistics",
    visualization: {
      activeAreas: ["inventory", "routing", "fulfillment"],
      flowDirection: "circular",
    },
    content: {
      headline: "Operations that run themselves",
      steps: [
        {
          label: "Input",
          description: "Real-time inventory levels, demand signals, and capacity data"
        },
        {
          label: "AI Action",
          description: "Predicts demand, triggers replenishment, optimizes routes dynamically"
        },
        {
          label: "Output",
          description: "Zero-touch order fulfillment with exception-only escalation"
        }
      ],
      impact: [
        { icon: Clock, label: "85%", detail: "automation rate" },
        { icon: TrendingUp, label: "40% reduction", detail: "in stockouts" },
        { icon: Shield, label: "99.2%", detail: "on-time delivery" }
      ]
    }
  },
  {
    id: "communication",
    title: "AI-to-AI Communication",
    icon: MessageSquare,
    description: "Cross-company autonomous coordination",
    visualization: {
      activeAreas: ["negotiation", "sync", "events"],
      flowDirection: "bidirectional",
    },
    content: {
      headline: "Your AI talks to their AI",
      steps: [
        {
          label: "Input",
          description: "Business rules, negotiation parameters, and partnership constraints"
        },
        {
          label: "AI Action",
          description: "Autonomous negotiation, real-time data sync, event-driven responses"
        },
        {
          label: "Output",
          description: "Executed agreements, synchronized state, instant coordination"
        }
      ],
      impact: [
        { icon: Clock, label: "Sub-second", detail: "cross-company sync" },
        { icon: TrendingUp, label: "70% fewer", detail: "manual touchpoints" },
        { icon: Shield, label: "24/7", detail: "autonomous operation" }
      ]
    }
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>("marketplace");
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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

  const activeData = features.find(f => f.id === activeFeature)!;

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Ambient glows */}
      <AmbientGlow color="primary" size="xl" intensity="medium" position="center" />
      <AmbientGlow color="accent" size="md" intensity="subtle" position="right" className="top-1/3" />

      <div className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div ref={headerRef} className="max-w-2xl mb-20 md:mb-28">
          <p
            className={`text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-8 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How It Works
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] mb-8 leading-[1.08] transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-foreground">How Synapsio</span>
            <br />
            <span className="text-muted-foreground/30">Works</span>
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-[280px_1fr_320px] gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Feature Selector */}
          <div className="space-y-4">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const Icon = feature.icon;
              
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                    isActive 
                      ? "bg-accent/10 border-accent/40" 
                      : "bg-background/40 border-border/20 hover:border-border/40"
                  }`}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                      isActive ? "bg-accent/20" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-500 ${
                        isActive ? "text-accent" : "text-primary/60"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium text-lg mb-1 transition-colors duration-500 ${
                        isActive ? "text-accent" : "text-foreground"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center gap-2 mt-4 pt-4 border-t border-accent/20"
                      >
                        <span className="text-xs text-accent/70 uppercase tracking-wider">Active</span>
                        <ArrowRight className="w-3 h-3 text-accent/70" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* CENTER COLUMN: System Visualization */}
          <div className="relative aspect-square max-w-[500px] mx-auto w-full lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl border border-border/10 bg-background/30 backdrop-blur-sm overflow-hidden">
              {/* Persistent central core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/80 border border-primary/30 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 40px hsl(var(--primary) / 0.15)",
                      "0 0 60px hsl(var(--primary) / 0.25)",
                      "0 0 40px hsl(var(--primary) / 0.15)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </motion.div>
                
                {/* Pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/20"
                  animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
              </div>

              {/* Feature-specific visualization elements */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Marketplace visualization */}
                  {activeFeature === "marketplace" && (
                    <MarketplaceVisualization />
                  )}
                  
                  {/* Operations visualization */}
                  {activeFeature === "operations" && (
                    <OperationsVisualization />
                  )}
                  
                  {/* Communication visualization */}
                  {activeFeature === "communication" && (
                    <CommunicationVisualization />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: Explanation Panel */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Headline */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-4">
                    {activeData.content.headline}
                  </h3>
                </div>

                {/* 3-Step Flow */}
                <div className="space-y-6">
                  {activeData.content.steps.map((step, idx) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      {/* Connector line */}
                      {idx < activeData.content.steps.length - 1 && (
                        <div className="absolute left-4 top-10 w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
                      )}
                      
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                          step.label === "AI Action" 
                            ? "bg-accent/20 text-accent border border-accent/30" 
                            : "bg-primary/10 text-primary/70 border border-primary/20"
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs uppercase tracking-wider mb-1 ${
                            step.label === "AI Action" ? "text-accent" : "text-muted-foreground/50"
                          }`}>
                            {step.label}
                          </p>
                          <p className="text-sm text-muted-foreground/80 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Business Impact */}
                <div className="pt-6 border-t border-border/20">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/40 mb-4">
                    Business Impact
                  </p>
                  <div className="grid gap-4">
                    {activeData.content.impact.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <span className="text-accent font-medium">{item.label}</span>
                            <span className="text-muted-foreground/50 text-sm ml-2">{item.detail}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Marketplace Visualization - suppliers flowing inward
const MarketplaceVisualization = () => {
  const supplierPositions = [
    { angle: 30, distance: 140 },
    { angle: 90, distance: 160 },
    { angle: 150, distance: 140 },
    { angle: 210, distance: 155 },
    { angle: 270, distance: 145 },
    { angle: 330, distance: 150 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      {/* Orbit ring */}
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
        strokeDasharray="4 8"
        opacity="0.3"
      />
      
      {/* Supplier nodes and connections */}
      {supplierPositions.map((pos, idx) => {
        const rad = (pos.angle * Math.PI) / 180;
        const x = 200 + Math.cos(rad) * pos.distance;
        const y = 200 + Math.sin(rad) * pos.distance;
        
        return (
          <g key={idx}>
            {/* Connection to center */}
            <motion.line
              x1={x}
              y1={y}
              x2="200"
              y2="200"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              opacity="0.3"
            />
            
            {/* Data flow particle */}
            <motion.circle
              r="4"
              fill="hsl(var(--accent))"
              initial={{ opacity: 0 }}
              animate={{
                cx: [x, 200],
                cy: [y, 200],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                delay: idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Supplier node */}
            <motion.circle
              cx={x}
              cy={y}
              r="12"
              fill="hsl(var(--background))"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            />
            <motion.circle
              cx={x}
              cy={y}
              r="4"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.1 }}
            />
          </g>
        );
      })}
    </svg>
  );
};

// Operations Visualization - circular flow
const OperationsVisualization = () => {
  const nodes = [
    { label: "Inventory", angle: 0 },
    { label: "Demand", angle: 72 },
    { label: "Routing", angle: 144 },
    { label: "Fulfillment", angle: 216 },
    { label: "Feedback", angle: 288 },
  ];
  const radius = 130;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      {/* Circular flow path */}
      <motion.circle
        cx="200"
        cy="200"
        r={radius}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.4"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      />
      
      {/* Flow particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="5"
          fill="hsl(var(--accent))"
          animate={{
            cx: [
              200 + Math.cos(0) * radius,
              200 + Math.cos((2 * Math.PI) / 3) * radius,
              200 + Math.cos((4 * Math.PI) / 3) * radius,
              200 + Math.cos(0) * radius,
            ],
            cy: [
              200 + Math.sin(0) * radius,
              200 + Math.sin((2 * Math.PI) / 3) * radius,
              200 + Math.sin((4 * Math.PI) / 3) * radius,
              200 + Math.sin(0) * radius,
            ],
          }}
          transition={{
            duration: 6,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Operation nodes */}
      {nodes.map((node, idx) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 200 + Math.cos(rad) * radius;
        const y = 200 + Math.sin(rad) * radius;
        
        return (
          <g key={idx}>
            <motion.circle
              cx={x}
              cy={y}
              r="18"
              fill="hsl(var(--background))"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            />
            <motion.circle
              cx={x}
              cy={y}
              r="6"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.1 }}
            />
          </g>
        );
      })}
    </svg>
  );
};

// Communication Visualization - bidirectional flows
const CommunicationVisualization = () => {
  const partners = [
    { x: 80, y: 120 },
    { x: 320, y: 120 },
    { x: 80, y: 280 },
    { x: 320, y: 280 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      {/* Partner connections */}
      {partners.map((partner, idx) => (
        <g key={idx}>
          {/* Connection line */}
          <motion.line
            x1={partner.x}
            y1={partner.y}
            x2="200"
            y2="200"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            opacity="0.3"
          />
          
          {/* Outbound data */}
          <motion.circle
            r="4"
            fill="hsl(var(--accent))"
            animate={{
              cx: [200, partner.x],
              cy: [200, partner.y],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 2,
              delay: idx * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Inbound data */}
          <motion.circle
            r="4"
            fill="hsl(var(--primary))"
            animate={{
              cx: [partner.x, 200],
              cy: [partner.y, 200],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 2,
              delay: idx * 0.5 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Partner node */}
          <motion.rect
            x={partner.x - 20}
            y={partner.y - 20}
            width="40"
            height="40"
            rx="8"
            fill="hsl(var(--background))"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: idx * 0.15 }}
          />
          <motion.circle
            cx={partner.x}
            cy={partner.y}
            r="6"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: idx * 0.15 + 0.1 }}
          />
        </g>
      ))}
      
      {/* Cross-partner sync lines */}
      <motion.path
        d="M 80 120 L 320 280"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.2"
      />
      <motion.path
        d="M 320 120 L 80 280"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.2"
      />
    </svg>
  );
};

export default FeaturesSection;
