import { Globe, Heart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-navy via-navy to-[hsl(180,30%,15%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Globe icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Our Vision
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
            To build the <span className="text-white font-semibold">learning intelligence AI infrastructure</span> that understands how humans learn together and enables outcome-driven education at scale across platforms and institutions.
          </p>
          
          {/* Partner CTA */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-teal-dark text-primary-foreground px-8 py-6 text-lg mb-12"
            asChild
          >
            <a href="mailto:rajeev@vygot.io">
              <Handshake className="mr-2 h-5 w-5" />
              Partner with Us
            </a>
          </Button>
          
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/50" />
            <Heart className="w-5 h-5 text-primary" />
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
