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

  type MsgSide = "synapsio" | "supplier";
  const messages: { from: MsgSide; line1: string; line2?: string; time: string; thinking?: boolean }[] = [
    { from: "supplier", line1: "Capacity issue on order #4721",  line2: "Max available: 4,200 units",    time: "09:41:32" },
    { from: "synapsio", line1: "Evaluating alternatives...",                                              time: "09:41:32", thinking: true },
    { from: "synapsio", line1: "Proposal: 4,800 units @ €4.32",  line2: "DAP Hamburg · Net-30 · 4 days", time: "09:41:32" },
    { from: "supplier", line1: "Accepted. Contracts updated.",    line2: "Confirmed automatically",        time: "09:41:33" },
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
          fill="hsl(var(--accent))" fontFamily="inherit" fontWeight="600">SUPPLIER AI</text>
        <text x={rX} y={aiY + 59} textAnchor="middle" fontSize="8"
          fill="hsl(var(--muted-foreground))" fillOpacity="0.4" fontFamily="inherit">Synapsio Agent</text>
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
              {isLeft ? "SYNAPSIO AI" : "SUPPLIER AI"} · {msg.time}
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
