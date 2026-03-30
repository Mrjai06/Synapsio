import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingSurface } from "./DepthSystem";
import synapsioLogo from "@/assets/synapsio-logo.png";

const VisionSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={synapsioLogo} alt="Synapsio" className="h-12 w-auto opacity-50" />
          </motion.div>
          
          {/* CTA content */}
          <motion.h2
            className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to see Synapsio in action?
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground/40 mb-14 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We're onboarding a small number of pilot customers. Get a personal walkthrough of the platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingSurface elevation="high" glow glowColor="primary" className="rounded-full">
              <a href="mailto:contact@synapsio.co.site?subject=Synapsio%20Pilot%20Request" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-sm tracking-wide font-normal transition-all duration-1000 hover:scale-[1.02]"
                >
                  Request Intro
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
                </Button>
              </a>
            </FloatingSurface>
            <FloatingSurface elevation="low" className="rounded-full">
              <a href="/Synapsio_Pitch.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="group rounded-full px-10 py-7 text-sm tracking-wide font-normal transition-all duration-1000 hover:scale-[1.02]"
                >
                  View Pitchdeck
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
                </Button>
              </a>
            </FloatingSurface>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-muted-foreground/30 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span>GDPR-compliant</span>
            <span className="hidden sm:block w-px h-4 bg-border/30" />
            <span>Hosted in EU (Frankfurt)</span>
            <span className="hidden sm:block w-px h-4 bg-border/30" />
            <span>Built on Supabase + OpenAI</span>
            <span className="hidden sm:block w-px h-4 bg-border/30" />
            <a href="https://app.synapsio.solutions" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground/60 transition-colors">
              Live demo available →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
