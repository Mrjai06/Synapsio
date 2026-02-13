import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CosmicSynapseCanvas } from "@/components/ui/neurons-hero";
import { FloatingSurface, AmbientGlow } from "./DepthSystem";
import synapsioLogo from "@/assets/synapsio-logo.png";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const contentOpacity = 1 - scrollProgress * 1.5;
  const contentTranslate = scrollProgress * 40;
  return <section ref={sectionRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Neural synapse animated background */}
      <CosmicSynapseCanvas className="absolute inset-0 opacity-60" />
      
      {/* Ambient depth glows */}
      <AmbientGlow color="primary" size="xl" intensity="subtle" position="right" className="top-1/4" />
      <AmbientGlow color="secondary" size="lg" intensity="subtle" position="left" className="top-2/3" />
      
      {/* Depth layers */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000" style={{
      background: `radial-gradient(ellipse at 50% 40%, transparent 0%, hsl(var(--background) / ${0.2 + scrollProgress * 0.5}) 70%)`
    }} />
      
      
      {/* Content */}
      




















































      
      {/* Scroll hint - more subtle */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transition-opacity duration-1000" style={{
      opacity: 1 - scrollProgress * 4
    }}>
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/25">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-border/15 flex justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-muted-foreground/25 rounded-full animate-bounce" style={{
            animationDuration: "2.5s"
          }} />
          </div>
        </div>
      </div>
      
      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    </section>;
};
export default HeroSection;