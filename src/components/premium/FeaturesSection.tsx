import { useState, useRef, useEffect, useCallback } from "react";
import {
  Store, Cog, MessageSquare,
  ArrowRight, Clock, AlertTriangle,
  TrendingDown, Zap, Users, Circle, Play, CheckCircle, Plus, X
} from "lucide-react";
import { AmbientGlow } from "./DepthSystem";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

// System states for the animation
type SystemState = "idle" | "decision" | "execution";

// Investor-focused feature data - emphasizing decisions, not abstract AI
const features = [
  {
    id: "marketplace",
    title: "AI Marketplace",
    icon: Store,
    description: "Autonomous supplier discovery and qualification",
    content: {
      headline: "Every sourcing decision optimized automatically",
      decision: "Which supplier to use for each order",
      constraint: "Balance cost, lead time, quality, and risk exposure",
      removal: {
        cost: "Replaces manual RFQ processing (est. 20–40 hrs/week for mid-size procurement teams)",
        risk: "Real-time supplier health monitoring vs. quarterly reviews",
        time: "Seconds to match vs. weeks of evaluation"
      },
      keyFeatures: [
        "Direct producer-to-business trading",
        "Reduced procurement costs and faster sourcing",
        "AI-optimized supplier matching and contract negotiation (price, availability, lead time)",
        "Transaction-based scalability"
      ]
    },
    semantics: {
      input: "Incoming purchase request with specs, quantity, deadline",
      decision: "AI evaluates 47 suppliers on cost, risk, capacity in 0.3s",
      action: "Selected supplier receives automated PO, logistics triggered"
    }
  },
  {
    id: "operations",
    title: "Autonomous Operations",
    icon: Cog,
    description: "Self-running supply chain execution",
    content: {
      headline: "Zero-touch from order to delivery",
      decision: "When to replenish, how much, and which route",
      constraint: "Optimize service levels while minimizing working capital",
      removal: {
        risk: "Prevents stockouts before they happen",
        time: "Continuous optimization vs. weekly planning cycles"
      },
      keyFeatures: [
        "24/7 AI-driven operational decision-making",
        "Demand forecasting and auto-replenishment",
        "Dynamic safety stock optimization"
      ]
    },
    semantics: {
      input: "Inventory drops below dynamic threshold at DC-West",
      decision: "AI calculates optimal reorder: qty, timing, routing",
      action: "Orders placed, trucks dispatched, ETAs confirmed"
    }
  },
  {
    id: "communication",
    title: "AI-to-AI Communication",
    icon: MessageSquare,
    description: "Cross-company autonomous coordination",
    content: {
      headline: "Your system negotiates with their system",
      decision: "Contract terms, delivery windows, and exception handling",
      constraint: "Align partner incentives with your business objectives",
      removal: {
        cost: "Eliminates manual coordination across 50+ partner touchpoints",
        risk: "Instant exception handling vs. email escalation chains",
        time: "Sub-second sync vs. days of back-and-forth"
      },
      keyFeatures: [
        "Automated supplier communication",
        "Intelligent P2B & B2B-negotiations",
        "Cross-company data synchronisation",
        "Reduced friction and lower bullwhip effect"
      ]
    },
    semantics: {
      input: "Partner's AI signals capacity constraint on order #4721",
      decision: "Your AI evaluates alternatives, negotiates new terms",
      action: "Agreement reached, contracts updated, production rescheduled"
    }
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>("");
  const [systemState, setSystemState] = useState<SystemState>("idle");
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

  // Listen for external feature selection events
  useEffect(() => {
    const handleSetActiveFeature = (event: CustomEvent<string>) => {
      if (features.find(f => f.id === event.detail)) {
        setActiveFeature(event.detail);
      }
    };

    window.addEventListener('setActiveFeature', handleSetActiveFeature as EventListener);
    return () => {
      window.removeEventListener('setActiveFeature', handleSetActiveFeature as EventListener);
    };
  }, []);

  // Cycle through system states for the animation (only when not paused)
  useEffect(() => {
    if (isLoopPaused) return;

    const stateSequence: SystemState[] = ["idle", "decision", "execution"];
    let currentIndex = stateSequence.indexOf(systemState);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % stateSequence.length;
      setSystemState(stateSequence[currentIndex]);
    }, 3200);

    return () => clearInterval(interval);
  }, [activeFeature, isLoopPaused, systemState]);

  // Handler for clicking a state
  const handleStateClick = (clickedState: SystemState) => {
    setSystemState(clickedState);
    setIsLoopPaused(true);
  };

  // Reset state when feature changes
  useEffect(() => {
    setSystemState("idle");
    setIsLoopPaused(false);
  }, [activeFeature]);

  const activeData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section data-features-section className="relative py-32 md:py-48">


      <div className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div ref={headerRef} className="max-w-2xl mb-20 md:mb-28">
          <p
            className={`text-[0.625rem] tracking-[0.4em] uppercase text-primary/50 mb-8 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Competitive Moat
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] mb-8 leading-[1.08] transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-foreground">What no ERP or SCM tool</span>
            <br />
            <span className="text-muted-foreground/30">can do today</span>
          </h2>
        </div>

        {/* Feature Cards - Default 3-column, expands on click */}
        <div className="relative mb-12" ref={cardsRef}>
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-stretch"
            layout
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const isAnyActive = activeFeature !== "";
              const isInactive = isAnyActive && !isActive;
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={false}
                  animate={{
                    flex: isActive ? "1 1 auto" : isInactive ? "0 0 60px" : "1 1 0%",
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  onClick={() => {
                    if (cardsRef.current) {
                      const rect = cardsRef.current.getBoundingClientRect();
                      const offsetBefore = rect.top;
                      setActiveFeature(isActive ? "" : feature.id);
                      requestAnimationFrame(() => {
                        const newRect = cardsRef.current!.getBoundingClientRect();
                        const offsetAfter = newRect.top;
                        const diff = offsetAfter - offsetBefore;
                        if (diff !== 0) {
                          window.scrollBy({ top: diff, behavior: "instant" as ScrollBehavior });
                        }
                      });
                    } else {
                      setActiveFeature(isActive ? "" : feature.id);
                    }
                  }}
                  className={`rounded-2xl border overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-accent/10 border-accent/40 ring-2 ring-accent/20"
                      : isInactive
                        ? "bg-background/20 border-border/10 hover:border-border/30"
                        : "bg-background/40 border-border/20 hover:border-border/40"
                  }`}
                  style={{ transition: "background-color 0.5s, border-color 0.5s, box-shadow 0.5s" }}
                >
                  {/* Card Header - Always visible */}
                  <motion.div
                    layout="position"
                    className={`${isInactive ? "p-3" : "p-5"}`}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.div
                      layout="position"
                      className={`flex items-center ${isInactive ? "flex-col gap-2" : "gap-3 mb-3"}`}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <motion.div
                        layout
                        className={`rounded-xl flex items-center justify-center shrink-0 ${
                          isActive ? "bg-accent/20" : isInactive ? "bg-primary/5" : "bg-primary/10"
                        }`}
                        animate={{
                          width: isInactive ? 32 : 40,
                          height: isInactive ? 32 : 40
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        style={{ transition: "background-color 0.5s" }}
                      >
                        <Icon className={`transition-all duration-400 ${
                          isActive ? "text-accent w-5 h-5" : isInactive ? "text-primary/40 w-4 h-4" : "text-primary/60 w-5 h-5"
                        }`} />
                      </motion.div>

                      <AnimatePresence mode="wait">
                        {!isInactive && (
                          <motion.h3
                            key="title"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`font-medium text-base whitespace-nowrap ${
                              isActive ? "text-accent" : "text-foreground"
                            }`}
                            style={{ transition: "color 0.5s" }}
                          >
                            {feature.title}
                          </motion.h3>
                        )}
                      </AnimatePresence>

                      {/* Plus / Close indicator */}
                      {!isInactive && (
                        <div className="ml-auto shrink-0">
                          {isActive ? (
                            <X className="w-4 h-4 text-foreground" />
                          ) : (
                            <Plus className="w-4 h-4 text-foreground" />
                          )}
                        </div>
                      )}
                    </motion.div>

                      <AnimatePresence mode="wait">
                      {!isInactive && (
                        <motion.p
                          key="description"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                          className="text-sm text-muted-foreground/50 leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Expanded Content - Only when active */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 border-t border-accent/20 pt-4">
                            {/* Left: Headline & Details */}
                            <div className="space-y-4">
                              <p className="text-base text-foreground/90 leading-relaxed font-light">
                                {feature.content.headline}
                              </p>

                              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                                <p className="text-[0.625rem] uppercase tracking-wider text-accent/70 mb-1">
                                  Decision Automated
                                </p>
                                <p className="text-foreground/80 leading-relaxed text-sm">
                                  {feature.content.decision}
                                </p>
                              </div>

                              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-[0.625rem] uppercase tracking-wider text-primary/70 mb-1">
                                  Constraint Optimized
                                </p>
                                <p className="text-foreground/70 leading-relaxed text-sm">
                                  {feature.content.constraint}
                                </p>
                              </div>
                            </div>

                            {/* Middle: What's Eliminated */}
                            <div className="space-y-3">
                              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground/50">
                                What's Eliminated
                              </p>
                              {Object.entries(feature.content.removal).map(([key, value], idx) => (
                                <motion.div
                                  key={key}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + idx * 0.08 }}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-1.5" />
                                  <span className="text-muted-foreground/70">{value}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Right: Key Features */}
                            <div className="space-y-3">
                              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground/50">
                                Key Features
                              </p>
                              {feature.content.keyFeatures.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.15 + idx * 0.06 }}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                                  <span className="text-muted-foreground/70">{item}</span>
                                </motion.div>
                              ))}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-3 mt-1 border-t border-border/10"
                              >
                                <a
                                  href="https://app.synapsio.solutions"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary/60 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  → See it in the app
                                </a>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Animation Interface - Only visible when a card is selected */}
        <AnimatePresence>
          {activeFeature !== "" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              {/* Live Explanation Panel - Above visualization */}
              <div className="mb-4">
                <LiveExplanationPanel
                  semantics={activeData.semantics}
                  state={systemState}
                />
              </div>

              {/* VISUALIZATION - Full width below cards */}
              <div className="relative w-full aspect-square md:aspect-[16/9] max-h-[37.5rem] rounded-3xl border border-border/20 bg-background/40 backdrop-blur-sm overflow-hidden">
                {/* System State Indicator - Top Right */}
                <SystemStateIndicator state={systemState} onStateClick={handleStateClick} isPaused={isLoopPaused} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {activeFeature === "marketplace" && <MarketplaceVisualization state={systemState} />}
                    {activeFeature === "operations" && <OperationsVisualization state={systemState} />}
                    {activeFeature === "communication" && <CommunicationVisualization state={systemState} />}
                  </motion.div>
                </AnimatePresence>

                {/* What's eliminated - overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 pt-8 md:pt-16 pb-4 md:pb-6 px-3 md:px-6 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="max-w-2xl mx-auto"
                    >
                      <p className="text-xs uppercase tracking-wider text-muted-foreground/50 mb-3 text-center">
                        What's Eliminated
                      </p>
                      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-4">
                        {Object.entries(activeData.content.removal).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-xs md:text-sm bg-background/60 px-3 py-1.5 rounded-full border border-border/20"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                            <span className="text-muted-foreground/70 line-clamp-1">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ============================================================
// SYSTEM STATE INDICATOR
// ============================================================
const SystemStateIndicator = ({
  state,
  onStateClick,
  isPaused
}: {
  state: SystemState;
  onStateClick: (state: SystemState) => void;
  isPaused: boolean;
}) => {
  const states: { id: SystemState; label: string; icon: typeof Circle }[] = [
    { id: "idle", label: "Idle", icon: Circle },
    { id: "decision", label: "Decision", icon: Play },
    { id: "execution", label: "Execution", icon: CheckCircle },
  ];

  return (
    <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 flex items-center gap-1 md:gap-2 bg-background/80 backdrop-blur-sm rounded-full px-2 md:px-4 py-1.5 md:py-2 border border-border/30 scale-[0.8] md:scale-100 origin-top-right">
      <span className="text-[0.5625rem] uppercase tracking-wider text-muted-foreground/50 mr-2">State</span>
      {states.map((s) => {
        const isActive = state === s.id;
        const Icon = s.icon;
        return (
          <motion.button
            key={s.id}
            onClick={() => onStateClick(s.id)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer ${
              isActive
                ? s.id === "idle"
                  ? "bg-muted-foreground/20 text-foreground"
                  : s.id === "decision"
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/20 text-primary"
                : "text-muted-foreground/30 hover:text-muted-foreground/60 hover:bg-muted-foreground/10"
            }`}
            animate={isActive ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={`w-3 h-3 ${isActive && s.id === "execution" ? "animate-pulse" : ""}`} />
            <span className="text-[0.625rem] font-medium">{s.label}</span>
          </motion.button>
        );
      })}
      {isPaused && (
        <span className="text-[8px] uppercase tracking-wider text-accent/70 ml-1">Paused</span>
      )}
    </div>
  );
};

// ============================================================
// LIVE EXPLANATION PANEL
// ============================================================
const LiveExplanationPanel = ({
  semantics,
  state
}: {
  semantics: { input: string; decision: string; action: string };
  state: SystemState;
}) => {
  const steps = [
    { id: "idle", label: "Input", text: semantics.input, color: "muted-foreground" },
    { id: "decision", label: "Decision", text: semantics.decision, color: "accent" },
    { id: "execution", label: "Action", text: semantics.action, color: "primary" },
  ];

  return (
    <div className="w-full bg-background/90 backdrop-blur-sm rounded-xl border border-border/30 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 px-4 py-3">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap shrink-0">
          Live System Activity
        </p>

        <div className="flex-1 flex items-center gap-2 min-w-0 overflow-hidden w-full">
          {steps.map((step, idx) => {
            const isActive =
              (state === "idle" && step.id === "idle") ||
              (state === "decision" && (step.id === "idle" || step.id === "decision")) ||
              (state === "execution");
            const isCurrent = step.id === state;

            return (
              <motion.div
                key={step.id}
                className={`flex items-center gap-2 flex-1 min-w-0 transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                animate={isCurrent ? { x: [0, 2, 0] } : {}}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isCurrent
                      ? step.id === "idle"
                        ? "bg-foreground"
                        : step.id === "decision"
                          ? "bg-accent"
                          : "bg-primary"
                      : "bg-border"
                  }`}
                  animate={isCurrent ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 0.75, repeat: isCurrent ? Infinity : 0, repeatDelay: 1.25 }}
                />
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className={`text-[0.5625rem] uppercase tracking-wider truncate ${
                    isCurrent
                      ? step.id === "idle"
                        ? "text-foreground/70"
                        : step.id === "decision"
                          ? "text-accent/70"
                          : "text-primary/70"
                      : "text-muted-foreground/40"
                  }`}>
                    {step.label}
                  </p>
                  <p className={`text-[0.625rem] leading-tight truncate ${
                    isCurrent ? "text-foreground/90" : "text-muted-foreground/50"
                  }`} title={step.text}>
                    {step.text}
                  </p>
                </div>
                {idx < 2 && (
                  <div className={`text-[0.625rem] ${isActive ? "text-border" : "text-border/30"}`}>→</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="w-24 h-1 bg-border/20 rounded-full overflow-hidden shrink-0">
          <motion.div
            className={`h-full ${
              state === "idle"
                ? "bg-foreground/30"
                : state === "decision"
                  ? "bg-accent"
                  : "bg-primary"
            }`}
            animate={{
              width: state === "idle" ? "33%" : state === "decision" ? "66%" : "100%"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MARKETPLACE VISUALIZATION
// Radial supplier network — AI hub evaluates all, selects winner instantly
// ============================================================
const MarketplaceVisualization = ({ state }: { state: SystemState }) => {
  const cx = 275, cy = 178;
  const scores = [92, 84, 65, 71, 78, 58, 83, 69, 76];
  const nodes = [
    { id: 0, x: 110, y: 88,  winner: true,  name: "AltaSupply GmbH" },
    { id: 1, x: 415, y: 80,  winner: false, name: "NordTrade AG" },
    { id: 2, x: 448, y: 190, winner: false, name: "FastParts Ltd" },
    { id: 3, x: 390, y: 290, winner: false, name: "ChemSource EU" },
    { id: 4, x: 150, y: 292, winner: false, name: "BayernLogistik" },
    { id: 5, x: 88,  y: 200, winner: false, name: "AsiaLink GmbH" },
    { id: 6, x: 148, y: 60,  winner: false, name: "TechParts AG" },
    { id: 7, x: 284, y: 38,  winner: false, name: "EuroTrade B.V." },
    { id: 8, x: 400, y: 56,  winner: false, name: "ScandiSupply" },
  ];

  // no layout constants needed — network layout

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="mp-glow">
          <feGaussianBlur stdDeviation="6" result="cb"/><feMerge><feMergeNode in="cb"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mp-glow-sm">
          <feGaussianBlur stdDeviation="3" result="cb"/><feMerge><feMergeNode in="cb"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="hub-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hub ambient glow */}
      <motion.circle cx={cx} cy={cy} fill="url(#hub-aura)"
        animate={{ r: [88, 105, 88] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scanning rings during decision */}
      {state === "decision" && [0, 0.6, 1.2].map((delay, i) => (
        <motion.circle key={i} cx={cx} cy={cy} fill="none"
          stroke="hsl(var(--accent))" strokeWidth="1.5"
          animate={{ r: [12, 215], opacity: [0.75, 0] }}
          transition={{ duration: 1.8, delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* Connection lines */}
      {nodes.map((n) => {
        const isWinner = n.winner && state === "execution";
        const isFaded = !n.winner && state === "execution";
        return (
          <motion.line key={`l-${n.id}`}
            x1={n.x} y1={n.y} x2={cx} y2={cy}
            stroke={isWinner ? "hsl(var(--primary))" : "hsl(var(--border))"}
            strokeWidth={isWinner ? 2.5 : 0.8}
            strokeDasharray={isWinner ? "none" : "3 6"}
            animate={{ strokeOpacity: isWinner ? [0.6, 1, 0.6] : isFaded ? 0.04 : state === "decision" ? 0.3 : 0.15 }}
            transition={{ duration: 1.5, repeat: isWinner ? Infinity : 0 }}
          />
        );
      })}

      {/* Supplier dots */}
      {nodes.map((n, i) => {
        const isWinner = n.winner && state === "execution";
        const isFaded = !n.winner && state === "execution";
        return (
          <motion.g key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.06 }}>
            {isWinner && (
              <motion.circle cx={n.x} cy={n.y} fill="hsl(var(--primary))" fillOpacity="0.18" filter="url(#mp-glow)"
                animate={{ r: [14, 22, 14] }} transition={{ duration: 1.5, repeat: Infinity }} />
            )}
            <motion.circle cx={n.x} cy={n.y}
              fill={isWinner ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
              filter={isWinner ? "url(#mp-glow)" : "none"}
              animate={{
                r: isWinner ? [9, 12, 9] : state === "decision" ? [5, 7, 5] : 5,
                fillOpacity: isFaded ? 0.1 : isWinner ? 1 : state === "idle" ? 0.4 : 0.55,
              }}
              transition={{ duration: isWinner ? 1.5 : 0.5, delay: state === "decision" ? i * 0.07 : 0, repeat: Infinity }}
            />
            {/* Score flash during decision */}
            {state === "decision" && (
              <motion.text x={n.x} y={n.y - 12} textAnchor="middle" fontSize="10"
                fill="hsl(var(--accent))" fontFamily="inherit" fontWeight="700"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.55, delay: i * 0.07, repeat: Infinity, repeatDelay: nodes.length * 0.07 }}>
                {scores[i]}
              </motion.text>
            )}
            {/* Winner callout */}
            {isWinner && (
              <motion.g initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 280, delay: 0.1 }}>
                <rect x={n.x - 43} y={n.y - 32} width="86" height="18" rx="9" fill="hsl(var(--primary))" />
                <text x={n.x} y={n.y - 19} textAnchor="middle" fontSize="9"
                  fill="hsl(var(--background))" fontFamily="inherit" fontWeight="700">BEST MATCH · 92</text>
                <text x={n.x} y={n.y + 24} textAnchor="middle" fontSize="10"
                  fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="500">{n.name}</text>
              </motion.g>
            )}
          </motion.g>
        );
      })}

      {/* Central AI hub */}
      <motion.circle cx={cx} cy={cy} r="44"
        fill="hsl(var(--background))"
        stroke="hsl(var(--primary))"
        strokeWidth={state === "decision" ? 2.5 : 1.5}
        strokeOpacity={state === "decision" ? 1 : 0.55}
        filter={state === "decision" ? "url(#mp-glow-sm)" : "none"}
        animate={state === "decision" ? { scale: [1, 1.06, 1] } : { scale: 1 }}
        transition={{ duration: 0.8, repeat: state === "decision" ? Infinity : 0 }}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="11"
        fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="700">SYNAPSIO</text>
      <motion.text x={cx} y={cy + 10} textAnchor="middle" fontSize="9"
        fill="hsl(var(--primary))" fillOpacity="0.7" fontFamily="inherit"
        animate={state === "decision" ? { fillOpacity: [0.4, 1, 0.4] } : {}}
        transition={{ duration: 0.7, repeat: state === "decision" ? Infinity : 0 }}>
        {state === "idle" ? "Monitoring" : state === "decision" ? "Evaluating..." : "✓ Matched"}
      </motion.text>

      {/* State label */}
      <text x={cx} y="334" textAnchor="middle" fontSize="9"
        fill="hsl(var(--muted-foreground))" fillOpacity="0.3" fontFamily="inherit" letterSpacing="2">
        {state === "idle" ? "MONITORING 47 SUPPLIERS IN REAL-TIME"
          : state === "decision" ? "AI SCORING — COST · RISK · CAPACITY · LEAD TIME"
          : "OPTIMAL MATCH FOUND IN 0.3s"}
      </text>

      {/* Execution PO confirmation */}
      {state === "execution" && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <rect x="88" y="350" width="374" height="38" rx="12"
            fill="hsl(var(--primary))" fillOpacity="0.11"
            stroke="hsl(var(--primary))" strokeOpacity="0.38" strokeWidth="1.5" />
          <text x="148" y="365" fontSize="9" fill="hsl(var(--primary))" fillOpacity="0.65"
            fontFamily="inherit" letterSpacing="2">PO ISSUED AUTOMATICALLY</text>
          <text x="148" y="381" fontSize="12" fill="hsl(var(--primary))"
            fontFamily="inherit" fontWeight="500">AltaSupply GmbH · 1,200 units · €5,040</text>
          <text x="442" y="374" textAnchor="middle" fontSize="22" fill="hsl(var(--primary))" fontFamily="inherit">✓</text>
        </motion.g>
      )}
    </svg>
  );
};

// ============================================================
// OPERATIONS VISUALIZATION
// Horizontal pipeline — order flows from alert to delivery automatically
// ============================================================
const OperationsVisualization = ({ state }: { state: SystemState }) => {
  const stages = [
    { label: "Stock Alert",  sub: "Threshold hit",   x: 62  },
    { label: "AI Decides",   sub: "0.3s",             x: 174 },
    { label: "PO Created",   sub: "Automated",        x: 286 },
    { label: "In Transit",   sub: "Route optimized",  x: 398 },
    { label: "Delivered",    sub: "Confirmed",         x: 490 },
  ];
  const nodeY = 152;
  const activeIdx = state === "idle" ? 0 : state === "decision" ? 1 : 4;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="pipe-glow">
          <feGaussianBlur stdDeviation="5" result="cb"/><feMerge><feMergeNode in="cb"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Context label */}
      <text x="275" y="45" textAnchor="middle" fontSize="11"
        fill="hsl(var(--foreground))" fillOpacity="0.55" fontFamily="inherit" fontWeight="400">
        Order #4721 · DC-West inventory threshold breached
      </text>

      {/* Pipeline connecting lines */}
      {stages.slice(0, -1).map((s, i) => {
        const nextX = stages[i + 1].x;
        const done = i < activeIdx || state === "execution";
        return (
          <motion.line key={i}
            x1={s.x + 27} y1={nodeY} x2={nextX - 27} y2={nodeY}
            stroke={done ? "hsl(var(--primary))" : "hsl(var(--border))"}
            strokeWidth={2}
            animate={{ strokeOpacity: done ? (state === "execution" ? [0.5, 0.9, 0.5] : 0.6) : 0.2 }}
            transition={{ duration: 1.5, delay: i * 0.1, repeat: state === "execution" ? Infinity : 0 }}
          />
        );
      })}

      {/* Stage nodes */}
      {stages.map((s, i) => {
        const done = i < activeIdx || state === "execution";
        const current = i === activeIdx && state !== "execution";
        const clr = done ? "hsl(var(--primary))" : current ? "hsl(var(--accent))" : "hsl(var(--border))";
        return (
          <motion.g key={i}
            animate={current ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 1.2, repeat: current ? Infinity : 0 }}
          >
            {current && (
              <motion.circle cx={s.x} cy={nodeY} fill="hsl(var(--accent))" fillOpacity="0.12"
                animate={{ r: [28, 38, 28] }} transition={{ duration: 1, repeat: Infinity }} />
            )}
            <motion.circle cx={s.x} cy={nodeY} r="26"
              fill="hsl(var(--background))" stroke={clr}
              strokeWidth={current ? 2.5 : done ? 2 : 1}
              strokeOpacity={done || current ? 1 : 0.25}
              filter={current || (done && state === "execution") ? "url(#pipe-glow)" : "none"}
              animate={done && state === "execution" ? { strokeOpacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 1.5, delay: i * 0.12, repeat: state === "execution" ? Infinity : 0 }}
            />
            <text x={s.x} y={nodeY + 6} textAnchor="middle" fontSize="14"
              fill={done ? "hsl(var(--primary))" : current ? "hsl(var(--accent))" : "hsl(var(--border))"}
              fontFamily="inherit" fontWeight="700"
              fillOpacity={done || current ? 1 : 0.3}>
              {done ? "✓" : current ? (i === 0 ? "!" : "◎") : "○"}
            </text>
            <text x={s.x} y={nodeY + 44} textAnchor="middle" fontSize="11"
              fill="hsl(var(--foreground))"
              fillOpacity={done || current ? 0.85 : 0.28}
              fontFamily="inherit" fontWeight={current ? "600" : "400"}>
              {s.label}
            </text>
            <text x={s.x} y={nodeY + 58} textAnchor="middle" fontSize="9"
              fill="hsl(var(--muted-foreground))"
              fillOpacity={done || current ? 0.5 : 0.18}
              fontFamily="inherit">
              {current && state === "decision" ? "Working..." : s.sub}
            </text>
          </motion.g>
        );
      })}

      {/* Flowing token during execution */}
      {state === "execution" && [0, 1].map((i) => (
        <motion.circle key={i} cy={nodeY} r="7"
          fill="hsl(var(--primary))" filter="url(#pipe-glow)"
          animate={{ cx: [stages[0].x, stages[4].x], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, delay: i * 1.1, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Comparison block */}
      <g>
        <rect x="62" y="242" width="426" height="74" rx="12"
          fill="hsl(var(--border))" fillOpacity="0.05"
          stroke="hsl(var(--border))" strokeOpacity="0.1" strokeWidth="1" />
        {/* Traditional */}
        <text x="155" y="266" textAnchor="middle" fontSize="9"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit" letterSpacing="1.5">TRADITIONAL</text>
        <text x="155" y="291" textAnchor="middle" fontSize="20"
          fill="#E8845A" fontFamily="inherit" fontWeight="300">3–5 days</text>
        <text x="155" y="307" textAnchor="middle" fontSize="9"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.32" fontFamily="inherit">manual, email-based</text>
        {/* Divider */}
        <line x1="275" y1="250" x2="275" y2="308"
          stroke="hsl(var(--border))" strokeOpacity="0.18" strokeWidth="1" />
        <text x="275" y="285" textAnchor="middle" fontSize="10"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.28" fontFamily="inherit">vs</text>
        {/* Synapsio */}
        <text x="395" y="266" textAnchor="middle" fontSize="9"
          fill="hsl(var(--primary))" fillOpacity="0.55" fontFamily="inherit" letterSpacing="1.5">SYNAPSIO</text>
        <motion.text x="395" y="291" textAnchor="middle" fontSize="20"
          fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="300"
          animate={state === "execution" ? { fillOpacity: [0.8, 1, 0.8] } : { fillOpacity: 0.8 }}
          transition={{ duration: 1.5, repeat: state === "execution" ? Infinity : 0 }}>
          0.8 seconds
        </motion.text>
        <text x="395" y="307" textAnchor="middle" fontSize="9"
          fill="hsl(var(--primary))" fillOpacity="0.4" fontFamily="inherit">fully automated</text>
      </g>
    </svg>
  );
};

// ============================================================
// COMMUNICATION VISUALIZATION
// Live AI-to-AI negotiation chat — messages appear as state advances
// ============================================================
const CommunicationVisualization = ({ state }: { state: SystemState }) => {
  const lX = 62, rX = 488, aiY = 62;

  type MsgSide = "synapsio" | "partner";
  const messages: { from: MsgSide; line1: string; line2?: string; time: string; thinking?: boolean }[] = [
    { from: "partner",  line1: "Capacity issue on order #4721",  line2: "Max available: 4,200 units",    time: "09:41:32" },
    { from: "synapsio", line1: "Evaluating alternatives...",                                              time: "09:41:32", thinking: true },
    { from: "synapsio", line1: "Proposal: 4,800 units @ €4.32",  line2: "DAP Hamburg · Net-30 · 4 days", time: "09:41:32" },
    { from: "partner",  line1: "Accepted. Contracts updated.",    line2: "Confirmed automatically",        time: "09:41:33" },
  ];

  const visible = state === "idle" ? 1 : state === "decision" ? 3 : 4;
  const msgW = 195, msgStartY = 112, msgGapY = 58;
  const leftX = 108, rightX = 247;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="chat-glow">
          <feGaussianBlur stdDeviation="5" result="cb"/><feMerge><feMergeNode in="cb"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Left AI node — Synapsio */}
      <motion.g animate={state === "decision" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.2, repeat: state === "decision" ? Infinity : 0 }}>
        <circle cx={lX} cy={aiY} r="30" fill="hsl(var(--background))"
          stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.6" />
        <motion.circle cx={lX} cy={aiY} r="30" fill="none"
          stroke="hsl(var(--primary))" strokeWidth="1"
          animate={state === "execution" ? { r: [30, 44], opacity: [0.7, 0] } : {}}
          transition={{ duration: 1.4, repeat: state === "execution" ? Infinity : 0 }} />
        <circle cx={lX} cy={aiY - 5} r="7" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx={lX} cy={aiY + 5} r="4" fill="hsl(var(--primary))" fillOpacity="0.35" />
        <text x={lX} y={aiY + 48} textAnchor="middle" fontSize="9"
          fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="600">SYNAPSIO AI</text>
        <text x={lX} y={aiY + 59} textAnchor="middle" fontSize="8"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">Your Agent</text>
        {state === "execution" && (
          <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <circle cx={lX + 22} cy={aiY - 22} r="10" fill="hsl(var(--primary))" />
            <text x={lX + 22} y={aiY - 17} textAnchor="middle" fontSize="10"
              fill="hsl(var(--background))" fontFamily="inherit" fontWeight="bold">✓</text>
          </motion.g>
        )}
      </motion.g>

      {/* Right AI node — Partner */}
      <motion.g animate={state === "idle" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.5, repeat: state === "idle" ? Infinity : 0 }}>
        {state === "idle" && (
          <motion.circle cx={rX} cy={aiY} r="30" fill="none"
            stroke="hsl(var(--accent))" strokeWidth="2"
            animate={{ r: [30, 46], opacity: [0.8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }} />
        )}
        <circle cx={rX} cy={aiY} r="30" fill="hsl(var(--background))"
          stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx={rX} cy={aiY - 5} r="7" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx={rX} cy={aiY + 5} r="4" fill="hsl(var(--accent))" fillOpacity="0.35" />
        <text x={rX} y={aiY + 48} textAnchor="middle" fontSize="9"
          fill="hsl(var(--accent))" fontFamily="inherit" fontWeight="600">PARTNER AI</text>
        <text x={rX} y={aiY + 59} textAnchor="middle" fontSize="8"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">Partner Agent</text>
        {state === "execution" && (
          <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}>
            <circle cx={rX - 22} cy={aiY - 22} r="10" fill="hsl(var(--primary))" />
            <text x={rX - 22} y={aiY - 17} textAnchor="middle" fontSize="10"
              fill="hsl(var(--background))" fontFamily="inherit" fontWeight="bold">✓</text>
          </motion.g>
        )}
      </motion.g>

      {/* Connecting line between agents */}
      <line x1={lX + 30} y1={aiY} x2={rX - 30} y2={aiY}
        stroke="hsl(var(--border))" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="5 6" />

      {/* Negotiation particles during decision */}
      {state === "decision" && [0, 1, 2].map((i) => (
        <motion.circle key={`p-${i}`} cy={aiY} r="4"
          fill="hsl(var(--primary))" fillOpacity="0.85" filter="url(#chat-glow)"
          animate={{ cx: [lX + 30, rX - 30], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.6, delay: i * 0.22, repeat: Infinity, ease: "easeOut" }} />
      ))}
      {state === "decision" && [0, 1].map((i) => (
        <motion.circle key={`pr-${i}`} cy={aiY + 8} r="4"
          fill="hsl(var(--accent))" fillOpacity="0.8"
          animate={{ cx: [rX - 30, lX + 30], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.6, delay: i * 0.35 + 0.15, repeat: Infinity, ease: "easeOut" }} />
      ))}

      {/* Message bubbles */}
      {messages.slice(0, visible).map((msg, i) => {
        const isLeft = msg.from === "synapsio";
        const by = msgStartY + i * msgGapY;
        const bx = isLeft ? leftX : rightX;
        const clr = isLeft ? "hsl(var(--primary))" : "hsl(var(--accent))";
        const h = msg.line2 ? 50 : 36;
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}>
            <rect x={bx} y={by} width={msgW} height={h} rx="10"
              fill={clr} fillOpacity="0.09"
              stroke={clr} strokeOpacity="0.25" strokeWidth="1" />
            <text x={bx + 10} y={by + 13} fontSize="8" fill={clr} fillOpacity="0.65"
              fontFamily="inherit" fontWeight="600" letterSpacing="1">
              {isLeft ? "SYNAPSIO AI" : "PARTNER AI"} · {msg.time}
            </text>
            {msg.thinking ? (
              <motion.text x={bx + 10} y={by + 28} fontSize="11"
                fill="hsl(var(--foreground))" fontFamily="inherit" fillOpacity="0.75"
                animate={{ fillOpacity: [0.4, 1, 0.4] }} transition={{ duration: 1.1, repeat: Infinity }}>
                {msg.line1}
              </motion.text>
            ) : (
              <text x={bx + 10} y={by + 28} fontSize="11"
                fill="hsl(var(--foreground))" fontFamily="inherit" fillOpacity="0.85">{msg.line1}</text>
            )}
            {msg.line2 && (
              <text x={bx + 10} y={by + 42} fontSize="9" fill={clr} fillOpacity="0.55" fontFamily="inherit">{msg.line2}</text>
            )}
          </motion.g>
        );
      })}

      {/* Resolution banner */}
      {state === "execution" && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <rect x="108" y="352" width={msgW * 2 + rightX - leftX - msgW} height="30" rx="10"
            fill="hsl(var(--primary))" fillOpacity="0.11"
            stroke="hsl(var(--primary))" strokeOpacity="0.38" strokeWidth="1.5" />
          <text x="275" y="372" textAnchor="middle" fontSize="11"
            fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="500">
            ✓ Resolved in 1.2s · No human required
          </text>
        </motion.g>
      )}

      {/* Bottom context */}
      <text x="275" y="393" textAnchor="middle" fontSize="9"
        fill="hsl(var(--muted-foreground))" fillOpacity="0.25" fontFamily="inherit">
        Traditional: 3–5 days of email back-and-forth
      </text>
    </svg>
  );
};

export default FeaturesSection;
      <rect x={tX} y={tY} width="490" height="28" rx="5" fill="hsl(var(--border))" fillOpacity="0.08" />
      <line x1={tX} y1={tY + 28} x2={tX + 490} y2={tY + 28} stroke="hsl(var(--border))" strokeOpacity="0.2" strokeWidth="1" />
      <text x={cName}  y={tY + 19} fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">SUPPLIER</text>
      <text x={cCost}  y={tY + 19} fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">COST/UNIT</text>
      <text x={cLead}  y={tY + 19} fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">LEAD</text>
      <text x={cRisk}  y={tY + 19} fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">RISK</text>
      <text x={bX + bW / 2} y={tY + 19} textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">SCORE</text>

      {/* Supplier rows */}
      {suppliers.map((s, i) => {
        const ry = tY + 28 + i * rH;
        const won = state === "execution" && i === 0;
        return (
          <motion.g key={s.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.09 }}
          >
            {/* Winner highlight */}
            {won && (
              <motion.rect x={tX} y={ry} width="490" height={rH - 2} rx="5"
                fill="hsl(var(--primary))" fillOpacity="0.07"
                stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1"
                filter="url(#mp-glow)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              />
            )}
            {/* Name */}
            <text x={cName} y={ry + 23} fontSize="12" fill="hsl(var(--foreground))"
              fillOpacity={won ? 1 : 0.78} fontFamily="inherit" fontWeight={won ? "500" : "400"}>{s.name}</text>
            {i === 0 && (
              <text x={cName} y={ry + 40} fontSize="9" fill="hsl(var(--primary))"
                fillOpacity={state === "execution" ? 0.85 : 0} fontFamily="inherit">#1 Recommended</text>
            )}
            {/* Cost */}
            <text x={cCost} y={ry + 29} fontSize="12" fill="hsl(var(--foreground))" fillOpacity="0.65" fontFamily="inherit">{s.cost}</text>
            {/* Lead */}
            <text x={cLead} y={ry + 29} fontSize="12" fill="hsl(var(--foreground))" fillOpacity="0.65" fontFamily="inherit">{s.lead}</text>
            {/* Risk badge */}
            <rect x={cRisk} y={ry + 17} width="44" height="18" rx="9" fill={s.riskClr} fillOpacity="0.14" />
            <text x={cRisk + 22} y={ry + 30} textAnchor="middle" fontSize="9" fill={s.riskClr} fontFamily="inherit" fontWeight="600">{s.risk}</text>
            {/* Score bar bg */}
            <rect x={bX} y={ry + 22} width={bW} height="9" rx="4" fill="hsl(var(--border))" fillOpacity="0.18" />
            {/* Score bar fill — grows on decision */}
            <motion.rect x={bX} y={ry + 22} height="9" rx="4"
              fill={won ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              animate={{
                width: state === "idle" ? bW * 0.15 : bW * s.pct,
                fillOpacity: state === "idle" ? 0.3 : 0.75,
              }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            />
            {/* Score number */}
            <text x={cScore} y={ry + 30} textAnchor="middle" fontSize="13"
              fill={won ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              fillOpacity={state === "idle" ? 0.22 : 1}
              fontFamily="inherit" fontWeight={won ? "600" : "400"}>{s.score}</text>
            {/* Row divider */}
            <line x1={tX} y1={ry + rH} x2={tX + 490} y2={ry + rH} stroke="hsl(var(--border))" strokeOpacity="0.1" strokeWidth="1" />
          </motion.g>
        );
      })}

      {/* Decision state: "Evaluating..." badge */}
      <AnimatePresence>
        {state === "decision" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <rect x="155" y="330" width="240" height="32" rx="16" fill="hsl(var(--accent))" fillOpacity="0.1" stroke="hsl(var(--accent))" strokeOpacity="0.3" strokeWidth="1" />
            <motion.text x="275" y="351" textAnchor="middle" fontSize="10" fill="hsl(var(--accent))" fontFamily="inherit" letterSpacing="2"
              animate={{ fillOpacity: [0.5, 1, 0.5] }} transition={{ duration: 1.1, repeat: Infinity }}>
              EVALUATING 47 SUPPLIERS...
            </motion.text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* Execution state: PO confirmation */}
      <AnimatePresence>
        {state === "execution" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <rect x="95" y="326" width="360" height="46" rx="12" fill="hsl(var(--primary))" fillOpacity="0.1" stroke="hsl(var(--primary))" strokeOpacity="0.45" strokeWidth="1.5" />
            <text x="152" y="344" fontSize="9" fill="hsl(var(--primary))" fillOpacity="0.7" fontFamily="inherit" letterSpacing="2">PO CREATED</text>
            <text x="152" y="362" fontSize="13" fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="500">PO-8247 · 1,200 units · €5,040</text>
            <text x="430" y="354" textAnchor="middle" fontSize="22" fill="hsl(var(--primary))" fontFamily="inherit">✓</text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};

// ============================================================
// OPERATIONS VISUALIZATION
// Demand signal chart + inventory gauge + AI analysis / reorder results
// ============================================================
const OperationsVisualization = ({ state }: { state: SystemState }) => {
  // demand chart
  const dData = [45, 62, 38, 68, 105];
  const dMax = 120, dBarW = 22, dGap = 10, dStartX = 46, dBaseY = 270, dMaxH = 165;

  // gauge
  const gX = 225, gY = 62, gW = 55, gH = 215, gBaseY = gY + gH; // 277
  const reorderY = gBaseY - 0.40 * gH; // threshold at 40%
  const safetyY  = gBaseY - 0.20 * gH; // threshold at 20%
  const idleFill = 0.28, execFill = 0.78;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="gauge-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.65" />
        </linearGradient>
        <filter id="ops-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Section labels */}
      <text x="114" y="40" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit" letterSpacing="2">DEMAND SIGNAL</text>
      <text x={gX + gW / 2} y="40" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit" letterSpacing="2">STOCK LEVEL</text>
      <text x="430" y="40" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit" letterSpacing="2">
        {state === "execution" ? "REORDER PLACED" : "AI ANALYSIS"}
      </text>

      {/* ── Demand bars ── */}
      {dData.map((h, i) => {
        const barH = (h / dMax) * dMaxH;
        const bx = dStartX + i * (dBarW + dGap);
        const isSpike = i === 4;
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: i * 0.08 }}>
            <rect x={bx} y={dBaseY - barH} width={dBarW} height={barH} rx="4"
              fill={isSpike ? "hsl(var(--accent))" : "hsl(var(--primary))"}
              fillOpacity={isSpike ? 0.8 : 0.35} />
            <text x={bx + dBarW / 2} y={dBaseY + 14} textAnchor="middle" fontSize="9"
              fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit">D{i + 1}</text>
          </motion.g>
        );
      })}
      <line x1={dStartX - 4} y1={dBaseY} x2={dStartX + 5 * (dBarW + dGap) - dGap + 4} y2={dBaseY}
        stroke="hsl(var(--border))" strokeOpacity="0.25" strokeWidth="1" />

      {/* Surge annotation on decision/execution */}
      <AnimatePresence>
        {state !== "idle" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.2 }}>
            <text
              x={dStartX + 4 * (dBarW + dGap) + dBarW / 2}
              y={dBaseY - (dData[4] / dMax) * dMaxH - 9}
              textAnchor="middle" fontSize="9" fill="hsl(var(--accent))" fontFamily="inherit">Surge</text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* ── Inventory gauge ── */}
      {/* Outer shell */}
      <rect x={gX} y={gY} width={gW} height={gH} rx="8"
        fill="hsl(var(--border))" fillOpacity="0.08"
        stroke="hsl(var(--border))" strokeOpacity="0.2" strokeWidth="1" />
      {/* Threshold lines */}
      <line x1={gX - 8} y1={reorderY} x2={gX + gW + 8} y2={reorderY}
        stroke="hsl(var(--accent))" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="3 3" />
      <text x={gX + gW + 12} y={reorderY + 4} fontSize="8" fill="hsl(var(--accent))" fillOpacity="0.7" fontFamily="inherit">REORDER</text>
      <line x1={gX - 8} y1={safetyY} x2={gX + gW + 8} y2={safetyY}
        stroke="#E8845A" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="3 3" />
      <text x={gX + gW + 12} y={safetyY + 4} fontSize="8" fill="#E8845A" fillOpacity="0.7" fontFamily="inherit">SAFETY</text>
      {/* Gauge fill */}
      <motion.rect
        x={gX + 5} width={gW - 10} rx="5"
        fill="url(#gauge-grad)"
        animate={{
          y: gBaseY - (state === "execution" ? execFill : idleFill) * gH,
          height: (state === "execution" ? execFill : idleFill) * gH - 5,
        }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      />
      {/* Gauge value */}
      <text x={gX + gW / 2} y={gBaseY + 18} textAnchor="middle" fontSize="12"
        fill="hsl(var(--foreground))" fillOpacity="0.75" fontFamily="inherit" fontWeight="500">
        {state === "execution" ? "78%" : "28%"}
      </text>
      <text x={gX + gW / 2} y={gBaseY + 30} textAnchor="middle" fontSize="8"
        fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">IN STOCK</text>
      {/* Warning pulse in idle */}
      <AnimatePresence>
        {state === "idle" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.circle cx={gX + gW / 2} cy={gBaseY - idleFill * gH - 18} r="11"
              fill="#E8845A" fillOpacity="0.18" stroke="#E8845A" strokeOpacity="0.5" strokeWidth="1"
              animate={{ scale: [1, 1.2, 1], fillOpacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 1.1, repeat: Infinity }} />
            <text x={gX + gW / 2} y={gBaseY - idleFill * gH - 13} textAnchor="middle"
              fontSize="11" fill="#E8845A" fontFamily="inherit" fontWeight="bold">!</text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* ── Decision: AI calculation panel ── */}
      <AnimatePresence>
        {state === "decision" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
            <rect x="315" y="58" width="210" height="228" rx="12"
              fill="hsl(var(--accent))" fillOpacity="0.05"
              stroke="hsl(var(--accent))" strokeOpacity="0.22" strokeWidth="1" />
            <motion.text x="325" y="82" fontSize="9" fill="hsl(var(--accent))" fontFamily="inherit" letterSpacing="2"
              animate={{ fillOpacity: [0.6, 1, 0.6] }} transition={{ duration: 1.2, repeat: Infinity }}>
              AI CALCULATING
            </motion.text>
            {[
              { label: "Current stock:", val: "28%" },
              { label: "Reorder point:", val: "40%" },
              { label: "Forecast spike:", val: "Day 5 +38%" },
              { label: "Optimal qty:",   val: "4,800 units" },
              { label: "Split orders:",  val: "2 suppliers" },
            ].map((row, i) => (
              <motion.g key={row.label}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 + i * 0.1 }}>
                <text x="325" y={112 + i * 32} fontSize="10" fill="hsl(var(--muted-foreground))" fillOpacity="0.5" fontFamily="inherit">{row.label}</text>
                <text x="512" y={112 + i * 32} textAnchor="end" fontSize="11" fill="hsl(var(--foreground))" fillOpacity="0.9" fontFamily="inherit" fontWeight="500">{row.val}</text>
              </motion.g>
            ))}
          </motion.g>
        )}
      </AnimatePresence>

      {/* ── Execution: supplier confirmation cards ── */}
      <AnimatePresence>
        {state === "execution" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
            {[
              { name: "AltaSupply GmbH", qty: "2,400 units", eta: "ETA 3d", clr: "hsl(var(--primary))" },
              { name: "NordTrade AG",    qty: "2,400 units", eta: "ETA 5d", clr: "hsl(var(--accent))" },
            ].map((card, i) => (
              <motion.g key={card.name}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.18 }}>
                <rect x="315" y={65 + i * 112} width="210" height="94" rx="10"
                  fill={card.clr} fillOpacity="0.06"
                  stroke={card.clr} strokeOpacity="0.28" strokeWidth="1" />
                <circle cx="335" cy={100 + i * 112} r="5" fill={card.clr} fillOpacity="0.85" />
                <text x="350" y={104 + i * 112} fontSize="12" fill="hsl(var(--foreground))" fillOpacity="0.85" fontFamily="inherit" fontWeight="500">{card.name}</text>
                <text x="335" y={124 + i * 112} fontSize="10" fill="hsl(var(--muted-foreground))" fillOpacity="0.6" fontFamily="inherit">{card.qty}</text>
                <rect x="395" y={113 + i * 112} width="55" height="18" rx="9" fill={card.clr} fillOpacity="0.15" />
                <text x="422" y={126 + i * 112} textAnchor="middle" fontSize="9" fill={card.clr} fontFamily="inherit" fontWeight="600">{card.eta}</text>
              </motion.g>
            ))}
            <motion.text x="420" y="300" textAnchor="middle" fontSize="10" fill="hsl(var(--primary))"
              fillOpacity="0.7" fontFamily="inherit" letterSpacing="1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              RESTOCKING COMPLETE
            </motion.text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};

// ============================================================
// COMMUNICATION VISUALIZATION
// Contract negotiation table between two AI agents
// ============================================================
const CommunicationVisualization = ({ state }: { state: SystemState }) => {
  const terms = [
    { label: "Quantity",   yours: "5,000 units", partner: "4,200 units", agreed: "4,800 units" },
    { label: "Unit Price", yours: "€4.20",        partner: "€4.50",       agreed: "€4.32" },
    { label: "Lead Time",  yours: "3 days",       partner: "5 days",      agreed: "4 days" },
    { label: "Delivery",   yours: "DAP Hamburg",  partner: "EXW Munich",  agreed: "DAP Hamburg" },
    { label: "Payment",    yours: "Net-30",        partner: "Net-15",      agreed: "Net-30" },
  ];

  const lX = 75, rX = 475;
  const tStartX = 130, tWidth = 290, tStartY = 72, rowH = 43;
  // column midpoints within the table
  const cTerm = tStartX + 10, cYours = tStartX + 98, cPartner = tStartX + 186, cAgreed = tStartX + 263;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="comm-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="left-band" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="right-band" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient colour bands */}
      <rect x="0" y="0" width="130" height="400" fill="url(#left-band)" />
      <rect x="420" y="0" width="130" height="400" fill="url(#right-band)" />

      {/* ── Left node: Synapsio AI ── */}
      <motion.g animate={state === "idle" ? { scale: [1, 1.03, 1] } : { scale: 1 }}
        transition={{ duration: 2, repeat: state === "idle" ? Infinity : 0 }}>
        <rect x={lX - 50} y="148" width="100" height="104" rx="14"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))" strokeWidth="1.5"
          strokeOpacity={state === "execution" ? 1 : 0.5} />
        <rect x={lX - 34} y="163" width="68" height="28" rx="6" fill="hsl(var(--primary))" fillOpacity="0.14" />
        <text x={lX} y="182" textAnchor="middle" fontSize="9" fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="600" letterSpacing="1">SYNAPSIO AI</text>
        <motion.circle cx={lX} cy="220" r="5" fill="hsl(var(--primary))"
          animate={state !== "execution" ? { scale: [1, 1.4, 1], fillOpacity: [0.6, 1, 0.6] } : { scale: 1, fillOpacity: 1 }}
          transition={{ duration: 1.5, repeat: state !== "execution" ? Infinity : 0 }} />
        <text x={lX} y="240" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">Your system</text>
        <AnimatePresence>
          {state === "execution" && (
            <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.25 }}>
              <circle cx={lX + 38} cy="152" r="12" fill="hsl(var(--primary))" />
              <text x={lX + 38} y="157" textAnchor="middle" fontSize="12" fill="hsl(var(--background))" fontFamily="inherit" fontWeight="bold">✓</text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>

      {/* ── Right node: Partner AI ── */}
      <motion.g animate={state === "idle" ? { scale: [1, 1.03, 1] } : { scale: 1 }}
        transition={{ duration: 2.2, repeat: state === "idle" ? Infinity : 0, delay: 0.5 }}>
        <rect x={rX - 50} y="148" width="100" height="104" rx="14"
          fill="hsl(var(--background))"
          stroke="hsl(var(--accent))" strokeWidth="1.5"
          strokeOpacity={state === "execution" ? 1 : 0.5} />
        <rect x={rX - 34} y="163" width="68" height="28" rx="6" fill="hsl(var(--accent))" fillOpacity="0.14" />
        <text x={rX} y="182" textAnchor="middle" fontSize="9" fill="hsl(var(--accent))" fontFamily="inherit" fontWeight="600" letterSpacing="1">PARTNER AI</text>
        <motion.circle cx={rX} cy="220" r="5" fill="hsl(var(--accent))"
          animate={state !== "execution" ? { scale: [1, 1.4, 1], fillOpacity: [0.6, 1, 0.6] } : { scale: 1, fillOpacity: 1 }}
          transition={{ duration: 1.5, repeat: state !== "execution" ? Infinity : 0, delay: 0.4 }} />
        <text x={rX} y="240" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">Partner system</text>
        {/* Idle alert badge */}
        <AnimatePresence>
          {state === "idle" && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.circle cx={rX - 40} cy="152" r="10" fill="hsl(var(--accent))" fillOpacity="0.18"
                stroke="hsl(var(--accent))" strokeWidth="1.5"
                animate={{ scale: [1, 1.2, 1], fillOpacity: [0.18, 0.3, 0.18] }}
                transition={{ duration: 1, repeat: Infinity }} />
              <text x={rX - 40} y="156" textAnchor="middle" fontSize="10" fill="hsl(var(--accent))" fontFamily="inherit" fontWeight="bold">!</text>
            </motion.g>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {state === "execution" && (
            <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.45 }}>
              <circle cx={rX + 38} cy="152" r="12" fill="hsl(var(--primary))" />
              <text x={rX + 38} y="157" textAnchor="middle" fontSize="12" fill="hsl(var(--background))" fontFamily="inherit" fontWeight="bold">✓</text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>

      {/* Connector dashes to table */}
      <line x1={lX + 50} y1="200" x2={tStartX} y2="200"
        stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="5 4" />
      <line x1={rX - 50} y1="200" x2={tStartX + tWidth} y2="200"
        stroke="hsl(var(--accent))" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="5 4" />

      {/* ── Contract terms table ── */}
      {/* Header */}
      <rect x={tStartX} y={tStartY} width={tWidth} height="27" rx="5" fill="hsl(var(--border))" fillOpacity="0.1" />
      <line x1={tStartX} y1={tStartY + 27} x2={tStartX + tWidth} y2={tStartY + 27} stroke="hsl(var(--border))" strokeOpacity="0.2" strokeWidth="1" />
      <text x={cTerm}    y={tStartY + 18} fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">TERM</text>
      <text x={cYours}   y={tStartY + 18} textAnchor="middle" fontSize="9" fill="hsl(var(--primary))" fillOpacity="0.65" fontFamily="inherit" letterSpacing="1.5">YOU</text>
      <text x={cPartner} y={tStartY + 18} textAnchor="middle" fontSize="9" fill="hsl(var(--accent))" fillOpacity="0.65" fontFamily="inherit" letterSpacing="1.5">PARTNER</text>
      <text x={cAgreed}  y={tStartY + 18} textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fillOpacity="0.45" fontFamily="inherit" letterSpacing="1.5">AGREED</text>

      {/* Data rows */}
      {terms.map((t, i) => {
        const ry = tStartY + 27 + i * rowH;
        return (
          <motion.g key={t.label}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
            <line x1={tStartX} y1={ry} x2={tStartX + tWidth} y2={ry} stroke="hsl(var(--border))" strokeOpacity="0.1" strokeWidth="1" />
            <text x={cTerm}    y={ry + rowH / 2 + 4} fontSize="11" fill="hsl(var(--foreground))" fillOpacity="0.6" fontFamily="inherit">{t.label}</text>
            <text x={cYours}   y={ry + rowH / 2 + 4} textAnchor="middle" fontSize="11" fill="hsl(var(--primary))"
              fillOpacity={state === "decision" ? 0.9 : 0.6} fontFamily="inherit">{t.yours}</text>
            <text x={cPartner} y={ry + rowH / 2 + 4} textAnchor="middle" fontSize="11" fill="hsl(var(--accent))"
              fillOpacity={state === "decision" ? 0.9 : 0.6} fontFamily="inherit">{t.partner}</text>
            {state === "execution" ? (
              <motion.text x={cAgreed} y={ry + rowH / 2 + 4} textAnchor="middle" fontSize="11"
                fill="hsl(var(--primary))" fontFamily="inherit" fontWeight="500"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.09 }}>
                {t.agreed}
              </motion.text>
            ) : (
              <text x={cAgreed} y={ry + rowH / 2 + 4} textAnchor="middle" fontSize="12"
                fill="hsl(var(--muted-foreground))" fillOpacity="0.18" fontFamily="inherit">—</text>
            )}
          </motion.g>
        );
      })}
      {/* Table bottom line */}
      <line x1={tStartX} y1={tStartY + 27 + terms.length * rowH} x2={tStartX + tWidth} y2={tStartY + 27 + terms.length * rowH}
        stroke="hsl(var(--border))" strokeOpacity="0.15" strokeWidth="1" />

      {/* ── Decision: negotiation particles ── */}
      <AnimatePresence>
        {state === "decision" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[0, 1, 2].map((i) => (
              <motion.circle key={`lp-${i}`} r="4" cy={200}
                fill="hsl(var(--primary))" fillOpacity="0.85"
                animate={{ cx: [lX + 50, tStartX], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.55, delay: i * 0.22, repeat: Infinity, ease: "easeOut" }} />
            ))}
            {[0, 1, 2].map((i) => (
              <motion.circle key={`rp-${i}`} r="4" cy={200}
                fill="hsl(var(--accent))" fillOpacity="0.85"
                animate={{ cx: [rX - 50, tStartX + tWidth], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.55, delay: i * 0.22 + 0.11, repeat: Infinity, ease: "easeOut" }} />
            ))}
            <motion.text x="275" y="368" textAnchor="middle" fontSize="10" fill="hsl(var(--accent))"
              fontFamily="inherit" letterSpacing="2"
              animate={{ fillOpacity: [0.45, 1, 0.45] }} transition={{ duration: 0.9, repeat: Infinity }}>
              NEGOTIATING TERMS...
            </motion.text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* ── Execution: agreement banner ── */}
      <AnimatePresence>
        {state === "execution" && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.5 }}>
            <rect x="130" y="356" width="290" height="30" rx="15"
              fill="hsl(var(--primary))" fillOpacity="0.11"
              stroke="hsl(var(--primary))" strokeOpacity="0.38" strokeWidth="1.5" />
            <text x="275" y="376" textAnchor="middle" fontSize="11" fill="hsl(var(--primary))"
              fontFamily="inherit" fontWeight="500">✓ Contract agreed — no human required</text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};

export default FeaturesSection;
