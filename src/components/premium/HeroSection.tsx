import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkCanvas from "./NetworkCanvas";
import HeroVisualAnchor from "./HeroVisualAnchor";
import { FloatingSurface, AmbientGlow, GlassPanel } from "./DepthSystem";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  // Smooth mouse interpolation
  useEffect(() => {
    const updateSmoothMouse = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(updateSmoothMouse);
    };
    rafRef.current = requestAnimationFrame(updateSmoothMouse);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentOpacity = 1 - scrollProgress * 1.5;
  const contentTranslate = scrollProgress * 40;

  // Parallax offsets (very subtle)
  const panelParallax = {
    x: smoothMouse.x * 8,
    y: smoothMouse.y * 6,
  };
  const anchorParallax = {
    x: smoothMouse.x * -15,
    y: smoothMouse.y * -12,
  };
  const glowParallax = {
    x: smoothMouse.x * 20,
    y: smoothMouse.y * 15,
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated network */}
      <NetworkCanvas 
        nodeCount={50} 
        chaos={scrollProgress * 0.3} 
        className="absolute inset-0 opacity-40" 
        colorScheme="neutral" 
        scrollReactive={true} 
        parallaxFactor={0.15} 
      />
      
      {/* Ambient depth glows with parallax */}
      <AmbientGlow 
        color="primary" 
        size="xl" 
        intensity="subtle" 
        position="right" 
        className="top-1/4 transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${glowParallax.x}px, ${glowParallax.y}px)`,
        }}
      />
      <AmbientGlow 
        color="secondary" 
        size="lg" 
        intensity="subtle" 
        position="left" 
        className="top-2/3 transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${-glowParallax.x}px, ${-glowParallax.y}px)`,
        }}
      />
      
      {/* Depth layers */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000" 
        style={{
          background: `radial-gradient(ellipse at 50% 40%, transparent 0%, hsl(var(--background) / ${0.2 + scrollProgress * 0.5}) 70%)`
        }} 
      />
      
      {/* Visual Anchor - offset to the right with parallax */}
      <div 
        className="absolute right-0 top-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] transition-[opacity] duration-1000"
        style={{
          transform: `translate(${anchorParallax.x}px, calc(-50% + ${contentTranslate * 0.5 + anchorParallax.y}px))`,
          opacity: Math.max(0, 0.6 - scrollProgress * 0.8),
        }}
      >
        <HeroVisualAnchor className="w-full h-full" />
      </div>
      
      {/* Content with parallax */}
      <div 
        className="relative z-10 container mx-auto px-8 lg:px-20 xl:px-28"
        style={{
          opacity: Math.max(0, contentOpacity),
          transform: `translate(${panelParallax.x}px, ${contentTranslate + panelParallax.y}px)`,
          transition: 'opacity 700ms ease-out',
        }}
      >
        {/* Floating Glass Panel */}
        <FloatingSurface elevation="floating" glow glowColor="primary" className="rounded-3xl">
          <GlassPanel 
            intensity="medium" 
            bordered 
            className="rounded-3xl px-10 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 max-w-2xl xl:max-w-3xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] border-border/15"
          >
            {/* Branding */}
            <div className="mb-12 animate-fade-in" style={{
              animationDelay: "0.2s",
              animationDuration: "1.2s"
            }}>
              <span className="tracking-[0.5em] uppercase text-muted-foreground/50 font-light text-2xl md:text-3xl font-mono">
                Synapsio
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] mb-10 animate-fade-in leading-[0.95]" style={{
              animationDelay: "0.4s",
              animationDuration: "1.4s"
            }}>
              <span className="text-foreground">Connections</span>
              <br />
              <span className="text-primary">you can rely </span>
              <br />
              <span className="text-primary">on</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl max-w-lg mb-14 font-light leading-[1.7] animate-fade-in text-muted-foreground" style={{
              animationDelay: "0.6s",
              animationDuration: "1.4s"
            }}>
              A fully automated AI-based SCM-solution used for the management and creation of supply-chains
            </p>
            
            {/* CTAs with enhanced hover */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
              animationDelay: "0.8s",
              animationDuration: "1.4s"
            }}>
              <Button 
                size="lg" 
                className="group relative bg-primary text-primary-foreground rounded-full px-10 py-7 text-sm tracking-wide font-normal overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_8px_30px_-5px_hsl(var(--primary)/0.4)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center">
                  View Pitchdeck
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-700 ease-out group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="group text-muted-foreground hover:text-foreground rounded-full px-10 py-7 text-sm tracking-wide font-normal border border-border/20 transition-all duration-700 ease-out hover:border-border/50 hover:bg-foreground/[0.03] hover:shadow-[0_4px_20px_-5px_rgba(255,255,255,0.1)]"
              >
                Explore Product
              </Button>
            </div>
          </GlassPanel>
        </FloatingSurface>
      </div>
      
      {/* Scroll hint */}
      <div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 transition-opacity duration-1000" 
        style={{ opacity: 1 - scrollProgress * 4 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/25">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-border/15 flex justify-center pt-1.5">
            <div 
              className="w-0.5 h-1.5 bg-muted-foreground/25 rounded-full animate-bounce" 
              style={{ animationDuration: "2.5s" }} 
            />
          </div>
        </div>
      </div>
      
      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;