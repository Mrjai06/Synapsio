import { useEffect, useState } from "react";

const ProgressNavbar = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    { id: "hero", label: "Intro" },
    { id: "problem", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "process", label: "Process" },
    { id: "product", label: "Product" },
    { id: "opportunity", label: "Opportunity" },
    { id: "roadmap", label: "Roadmap" },
    { id: "team", label: "Team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(scrolled);
      
      // Determine active section based on which section is in view
      const sectionElements = sections.map(s => document.getElementById(s.id));
      let currentSection = 0;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentSection = i;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      {/* Progress bar container */}
      <div className="relative h-12 flex items-center">
        {/* Background track */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-border/20 mx-8" />
        
        {/* Filled progress */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-primary/60 left-8 transition-all duration-150 ease-out"
          style={{ width: `calc(${progress * 100}% - 4rem)` }}
        />
        
        {/* Section indicators */}
        <div className="relative w-full flex items-center justify-between px-8">
          {sections.map((section, index) => {
            const sectionProgress = index / (sections.length - 1);
            const isActive = index === activeSection;
            const isPast = index < activeSection;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex flex-col items-center gap-1 relative"
              >
                {/* Dot indicator */}
                <div 
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300 border-2
                    ${isActive 
                      ? "bg-primary border-primary scale-125 shadow-lg shadow-primary/30" 
                      : isPast 
                        ? "bg-primary/60 border-primary/60" 
                        : "bg-background border-border/40 group-hover:border-muted-foreground/40"
                    }
                  `}
                />
                
                {/* Label */}
                <span 
                  className={`
                    text-[10px] tracking-wide uppercase transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? "text-foreground opacity-100" 
                      : isPast
                        ? "text-muted-foreground/60"
                        : "text-muted-foreground/40 group-hover:text-muted-foreground/70"
                    }
                  `}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProgressNavbar;
