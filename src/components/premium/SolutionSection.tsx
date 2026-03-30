import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Brain, Zap, ShoppingBag, Truck } from "lucide-react";
import synapsioLogo from "@/assets/synapsio-logo.png";
import { AmbientGlow } from "./DepthSystem";

const nodes = [
  {
    key: "ERP",
    Icon: Database,
    label: "ERP",
    desc: "Finance, inventory & ops — all in one module",
  },
  {
    key: "WMS",
    Icon: ShoppingBag,
    label: "WMS",
    desc: "Storage, picking & shipping without external tools",
  },
  {
    key: "TMS",
    Icon: Truck,
    label: "TMS",
    desc: "Route planning, carrier selection & shipment tracking",
  },
  {
    key: "Marketplace",
    Icon: Zap,
    label: "Marketplace",
    desc: "Discover suppliers, compare offers & build new chains",
  },
];

const ConnectionDiagram = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 2×2 node grid around center */}
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] gap-3 items-center">
        {/* Row 1 */}
        <NodeTile node={nodes[0]} hovered={hovered} setHovered={setHovered} delay={0.3} />
        <div />
        <NodeTile node={nodes[1]} hovered={hovered} setHovered={setHovered} delay={0.4} />

        {/* Row 2: connectors + center */}
        <div className="flex justify-end pr-2">
          <div className="w-6 h-px bg-primary/20" />
        </div>
        <motion.div
          className="relative z-10 rounded-2xl bg-card/60 backdrop-blur-2xl border border-primary/50 flex flex-col items-center justify-center gap-2 p-4"
          style={{
            boxShadow: "0 0 2.5rem hsl(var(--primary) / 0.25), 0 0 1rem hsl(var(--primary) / 0.12)",
            minWidth: "80px",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
        >
          <img src={synapsioLogo} alt="Synapsio" className="w-7 h-7 object-contain" />
          <span className="text-xs font-semibold text-primary whitespace-nowrap">Synapsio</span>
        </motion.div>
        <div className="flex justify-start pl-2">
          <div className="w-6 h-px bg-primary/20" />
        </div>

        {/* Row 3 */}
        <NodeTile node={nodes[2]} hovered={hovered} setHovered={setHovered} delay={0.5} />
        <div />
        <NodeTile node={nodes[3]} hovered={hovered} setHovered={setHovered} delay={0.6} />
      </div>

      {/* Description strip */}
      <div className="h-10 flex items-center">
        {hovered && (
          <motion.p
            key={hovered}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-primary/70 leading-relaxed"
          >
            {nodes.find(n => n.key === hovered)?.desc}
          </motion.p>
        )}
        {!hovered && (
          <p className="text-[11px] text-muted-foreground/30">Hover a module to learn more</p>
        )}
      </div>
    </div>
  );
};

const NodeTile = ({
  node,
  hovered,
  setHovered,
  delay,
}: {
  node: typeof nodes[0];
  hovered: string | null;
  setHovered: (k: string | null) => void;
  delay: number;
}) => {
  const { Icon, key, label } = node;
  const isHovered = hovered === key;
  return (
    <motion.div
      className={`rounded-xl border flex flex-col items-center justify-center gap-2 p-3 cursor-default transition-all duration-300 ${
        isHovered
          ? "bg-primary/10 border-primary/40"
          : "bg-card/30 border-border/20 hover:border-primary/30"
      }`}
      style={{ boxShadow: "0 0.5rem 1.5rem hsl(var(--background) / 0.5)" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.04, y: -2 }}
      onMouseEnter={() => setHovered(key)}
      onMouseLeave={() => setHovered(null)}
    >
      <Icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? "text-primary" : "text-muted-foreground/60"}`} />
      <span className={`text-xs font-medium transition-colors duration-300 ${isHovered ? "text-foreground" : "text-muted-foreground/70"}`}>
        {label}
      </span>
    </motion.div>
  );
};

const flowSteps = [
  { label: "Data In", desc: "ERP feeds, carrier APIs, demand signals, supplier data" },
  { label: "AI Analysis", desc: "Demand forecast · risk simulation · cost modeling" },
  { label: "Decision", desc: "Optimal action selected across all constraints" },
  { label: "Action", desc: "Order placed, supplier notified, route updated" },
];

const AiFlowDiagram = () => (
  <div className="w-full flex flex-col gap-3">
    {flowSteps.map((step, i) => (
      <motion.div
        key={step.label}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
        className="flex items-start gap-4 group"
      >
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <span className="text-xs font-semibold text-primary">{i + 1}</span>
          </div>
          {i < flowSteps.length - 1 && <div className="w-px h-4 bg-primary/15 mt-1" />}
        </div>
        <div className="pt-1">
          <p className="text-sm font-medium text-foreground/85 leading-none mb-1">{step.label}</p>
          <p className="text-xs text-muted-foreground/55 leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const cards = [
  {
    id: "what",
    label: "What It Is",
    icon: Database,
    title: "The Intelligence Layer",
    subtitle: "for Supply Chains",
    description: "Synapsio connects every node of your supply chain — ERP systems, warehouses, carriers, and our internal marketplace — into a unified, self-optimizing network.",
    visual: <ConnectionDiagram />,
  },
  {
    id: "how",
    label: "What It Does",
    icon: Brain,
    title: "Predict. Optimize.",
    subtitle: "Create. Execute.",
    description: "Continuously analyzes millions of data points to forecast demand, optimize inventory, orchestrate fulfillment, and create new supply chains — all in real-time.",
    visual: <AiFlowDiagram />,
  },
];

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48">
      <AmbientGlow color="primary" size="xl" intensity="medium" position="center" />

      <div className="relative z-10 container mx-auto px-6 lg:px-20 xl:px-28">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <motion.p
            className="text-[0.625rem] tracking-[0.4em] uppercase text-primary/50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            The Solution
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-foreground">A unified</span>
            <br />
            <span className="text-foreground">intelligence layer</span>
          </motion.h2>
        </div>

        {/* Two horizontal cards */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="flex flex-col lg:flex-row bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 0.5rem 2rem hsl(var(--background) / 0.4)" }}
              >
                {/* Text side — 38% */}
                <div className="lg:w-[38%] flex flex-col gap-4 p-6 md:p-8 lg:p-10 flex-shrink-0">
                  <div className="inline-flex items-center gap-2.5 text-primary/60">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] tracking-widest uppercase">{card.label}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light leading-tight">
                    {card.title}
                    <br />
                    <span className="text-muted-foreground/50">{card.subtitle}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground/65 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Visual side — 62%, clearly dominant */}
                <div className="lg:w-[62%] flex items-center justify-center p-6 md:p-8 lg:p-10 border-t border-border/10 lg:border-t-0 lg:border-l bg-background/10">
                  {card.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
