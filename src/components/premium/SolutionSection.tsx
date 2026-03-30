import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Brain, Zap, ChevronRight } from "lucide-react";
import synapsioLogo from "@/assets/synapsio-logo.png";
import { AmbientGlow } from "./DepthSystem";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const nodeDescriptions: Record<string, string> = {
  ERP: "Enterprise Resource Planning — Synapsio includes a built-in ERP module to manage finances, inventory, and operations all within one platform.",
  WMS: "Warehouse Management System — integrated directly into Synapsio to handle storage, picking, and shipping without external tools.",
  TMS: "Transport Management System — Synapsio's native TMS plans routes, selects carriers, and tracks shipments automatically.",
  Marketplace: "Synapsio's built-in sourcing hub — discover new suppliers, compare offers, and build resilient supply chains without leaving the platform.",
};

const nodeIcons = [Database, Brain, Zap, Database];
const nodeElements = ["ERP", "WMS", "TMS", "Marketplace"];

const ConnectionDiagram = () => {
  const renderNode = (index: number, delay: number) => {
    const Icon = nodeIcons[index];
    const label = nodeElements[index];
    return (
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <motion.div
            className="rounded-xl bg-card/30 backdrop-blur-xl border border-border/20 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-primary/40 transition-colors duration-300 group aspect-square"
            style={{ boxShadow: '0 0.5rem 1.5rem hsl(var(--background) / 0.6)' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ scale: 1.06, y: -3 }}
          >
            <Icon className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
            <span className="text-[10px] font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors duration-300">{label}</span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-[220px] bg-card/90 backdrop-blur-xl border-border/30 text-foreground/80 text-xs leading-relaxed"
        >
          {nodeDescriptions[label] || label}
        </TooltipContent>
      </Tooltip>
    );
  };

  return (
    <TooltipProvider>
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-2" style={{ width: 'clamp(160px, 100%, 260px)' }}>
          {renderNode(0, 0.3)}
          <div />
          {renderNode(1, 0.4)}
          <div />
          <motion.div
            className="relative z-10 rounded-2xl bg-card/50 backdrop-blur-2xl border border-primary/40 flex flex-col items-center justify-center gap-1.5 aspect-square"
            style={{
              boxShadow: '0 0 2rem hsl(var(--primary) / 0.2), 0 0 1rem hsl(var(--primary) / 0.1)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={synapsioLogo} alt="Synapsio" className="w-6 h-6 object-contain" />
            <span className="text-[10px] font-semibold text-primary">Synapsio</span>
          </motion.div>
          <div />
          {renderNode(2, 0.5)}
          <div />
          {renderNode(3, 0.6)}
        </div>
      </div>
    </TooltipProvider>
  );
};

const flowSteps = [
  { label: "Data In", desc: "ERP feeds, carrier APIs, demand signals, supplier data" },
  { label: "AI Analysis", desc: "Demand forecast · risk simulation · cost modeling" },
  { label: "Decision", desc: "Optimal action selected across all constraints" },
  { label: "Action", desc: "Order placed, supplier notified, route updated" },
];

const AiFlowDiagram = () => (
  <div className="w-full flex flex-col gap-2">
    {flowSteps.map((step, i) => (
      <motion.div
        key={step.label}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
        className="flex items-start gap-3"
      >
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-semibold text-primary">{i + 1}</span>
          </div>
          {i < flowSteps.length - 1 && (
            <div className="w-px h-4 bg-primary/15 mt-1" />
          )}
        </div>
        <div className="pb-1">
          <p className="text-xs font-medium text-foreground/80 leading-none mb-1">{step.label}</p>
          <p className="text-[11px] text-muted-foreground/50 leading-relaxed">{step.desc}</p>
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

        {/* Two horizontal cards stacked */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="flex flex-col lg:flex-row gap-0 bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 0.5rem 2rem hsl(var(--background) / 0.4)' }}
              >
                {/* Text side */}
                <div className="flex-1 flex flex-col gap-4 p-6 md:p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2.5 text-primary/60">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] tracking-widest uppercase">{card.label}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light leading-tight">
                    {card.title}
                    <br />
                    <span className="text-muted-foreground/50">{card.subtitle}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground/65 font-light leading-relaxed max-w-sm">
                    {card.description}
                  </p>
                </div>

                {/* Visual side */}
                <div className="flex-shrink-0 lg:w-72 xl:w-80 flex items-center justify-center p-6 md:p-8 border-t border-border/10 lg:border-t-0 lg:border-l bg-background/10">
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
