import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, ClipboardList, Settings, TrendingUp, 
  Network, MessageSquare, ArrowRight, ChevronRight
} from "lucide-react";
import { AmbientGlow } from "./DepthSystem";

interface ProcessStage {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  linkTo: string; // Which feature ID to scroll to
  items: string[];
}

interface TopConnection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  linkTo: string;
  description: string;
  position: "left" | "right";
}

const processStages: ProcessStage[] = [
  {
    id: "sourcing",
    title: "Sourcing",
    icon: Search,
    linkTo: "marketplace",
    items: [
      "Inventory management & catalog",
      "Order history",
      "Pricing & availability"
    ]
  },
  {
    id: "planning",
    title: "Planning",
    icon: ClipboardList,
    linkTo: "operations",
    items: [
      "Demand forecasting",
      "Decision optimization",
      "Creating supply-chains",
      "Optimizing existing supply-chains"
    ]
  },
  {
    id: "executing",
    title: "Executing",
    icon: Settings,
    linkTo: "operations",
    items: [
      "Procurement & auto-replenishment of goods",
      "Monitoring existing supply-chains",
      "Contract negotiation & confirmation"
    ]
  },
  {
    id: "output",
    title: "Business Output",
    icon: TrendingUp,
    linkTo: "communication",
    items: [
      "Higher reliability",
      "Lower costs",
      "Less manual work"
    ]
  }
];

const topConnections: TopConnection[] = [
  {
    id: "b2b-marketplace",
    title: "B2B-Marketplace",
    icon: Network,
    linkTo: "marketplace",
    description: "Supplier discovery & matching\nDirect producer-to-business connection",
    position: "left"
  },
  {
    id: "ai-communication",
    title: "AI-to-AI Communication",
    icon: MessageSquare,
    linkTo: "communication",
    description: "Cross-company synergy\nSeamless communication between different synapsio-instances",
    position: "right"
  }
];

const ProcessOverviewSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [stagesVisible, setStagesVisible] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStagesVisible(true);
      },
      { threshold: 0.2 }
    );
    if (stagesRef.current) observer.observe(stagesRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToFeature = (featureId: string) => {
    // First scroll to the features section, then trigger the feature selection
    const featuresSection = document.querySelector('[data-features-section]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch a custom event to set the active feature
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setActiveFeature', { detail: featureId }));
      }, 500);
    }
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <AmbientGlow color="primary" size="lg" intensity="subtle" position="center" />
      <AmbientGlow color="accent" size="md" intensity="subtle" position="left" className="top-1/4" />

      <div className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div ref={headerRef} className="max-w-2xl mb-20 md:mb-28">
          <p
            className={`text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-8 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Process Overview
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] mb-8 leading-[1.08] transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-foreground">End-to-end</span>
            <br />
            <span className="text-muted-foreground/30">intelligent workflow</span>
          </h2>
        </div>

        {/* Process Diagram */}
        <div 
          ref={stagesRef}
          className={`transition-all duration-1000 ${stagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Top Connections - B2B Marketplace & AI Communication */}
          <div className="relative mb-16">
            <div className="flex justify-center items-center gap-8 md:gap-16">
              {topConnections.map((connection, idx) => (
                <motion.button
                  key={connection.id}
                  onClick={() => scrollToFeature(connection.linkTo)}
                  onMouseEnter={() => setHoveredStage(connection.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className="group relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={stagesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                >
                  {/* Icon container */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    hoveredStage === connection.id 
                      ? "border-accent bg-accent/10 scale-110" 
                      : "border-accent/40 bg-background/40"
                  }`}>
                    <connection.icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${
                      hoveredStage === connection.id ? "text-accent" : "text-accent/60"
                    }`} />
                  </div>
                  
                  {/* Title */}
                  <p className={`mt-3 text-xs md:text-sm font-medium text-center transition-colors duration-300 ${
                    hoveredStage === connection.id ? "text-accent" : "text-foreground/80"
                  }`}>
                    {connection.title}
                  </p>

                  {/* Hover tooltip */}
                  <div className={`absolute top-full mt-6 ${connection.position === 'left' ? '-left-8' : '-right-8'} w-48 p-3 rounded-xl bg-background/90 border border-accent/20 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
                    hoveredStage === connection.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}>
                    <p className="text-xs text-muted-foreground/70 whitespace-pre-line leading-relaxed">
                      {connection.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Connection lines between top elements */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '40px' }}>
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--accent))" opacity="0.5" />
                </marker>
              </defs>
              
              {/* Curved connection line */}
              <motion.path
                d="M 35% 20 Q 50% -10, 65% 20"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={stagesVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Labels on the curve */}
              <text x="43%" y="5" className="fill-muted-foreground/40 text-[8px] uppercase tracking-wider">
                Sharing
              </text>
              <text x="55%" y="5" className="fill-muted-foreground/40 text-[8px] uppercase tracking-wider">
                Communication
              </text>
            </svg>
          </div>

          {/* Vertical connection lines from top to main flow */}
          <div className="relative h-12 mb-8">
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {/* Left vertical line */}
              <motion.line
                x1="35%"
                y1="0"
                x2="25%"
                y2="100%"
                stroke="hsl(var(--accent))"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={stagesVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              <text x="27%" y="50%" className="fill-muted-foreground/40 text-[7px] uppercase tracking-wider">
                Transactions
              </text>
              
              {/* Right vertical line */}
              <motion.line
                x1="65%"
                y1="0"
                x2="75%"
                y2="100%"
                stroke="hsl(var(--accent))"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={stagesVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <text x="68%" y="50%" className="fill-muted-foreground/40 text-[7px] uppercase tracking-wider">
                Communication
              </text>
            </svg>
          </div>

          {/* Main Process Flow - 4 stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-start">
            {processStages.map((stage, idx) => (
              <div key={stage.id} className="relative flex items-start">
                {/* Stage Card */}
                <motion.button
                  onClick={() => scrollToFeature(stage.linkTo)}
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`flex-1 group p-5 rounded-2xl border transition-all duration-300 text-left ${
                    hoveredStage === stage.id 
                      ? "border-accent/60 bg-accent/5 scale-[1.02]" 
                      : "border-border/30 bg-background/40 hover:border-border/50"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stagesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15 + 0.5 }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredStage === stage.id 
                      ? "bg-accent/20" 
                      : "bg-primary/10"
                  }`}>
                    <stage.icon className={`w-6 h-6 transition-colors duration-300 ${
                      hoveredStage === stage.id ? "text-accent" : "text-primary/60"
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-base md:text-lg font-medium mb-3 transition-colors duration-300 ${
                    hoveredStage === stage.id ? "text-accent" : "text-foreground"
                  }`}>
                    {stage.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {stage.items.map((item, itemIdx) => (
                      <li 
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs text-muted-foreground/60"
                      >
                        <ChevronRight className="w-3 h-3 mt-0.5 text-accent/50 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Click hint */}
                  <div className={`mt-4 flex items-center gap-2 transition-all duration-300 ${
                    hoveredStage === stage.id ? "opacity-100 translate-x-1" : "opacity-0"
                  }`}>
                    <span className="text-[10px] text-accent/70 uppercase tracking-wider">
                      View details
                    </span>
                    <ArrowRight className="w-3 h-3 text-accent/70" />
                  </div>
                </motion.button>

                {/* Arrow between stages */}
                {idx < processStages.length - 1 && (
                  <motion.div 
                    className="hidden md:flex items-center justify-center w-8 h-full absolute -right-5 top-1/2 -translate-y-1/2 z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={stagesVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.15 + 0.7 }}
                  >
                    <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Flow indicator - animated dots */}
          <div className="hidden md:block relative h-8 mt-8">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Main flow line */}
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={stagesVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
              
              {/* Animated flow pulse */}
              <motion.circle
                r="4"
                fill="hsl(var(--accent))"
                animate={{
                  cx: ["10%", "90%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                cy="50%"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverviewSection;
