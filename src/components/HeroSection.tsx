import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-10">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-foreground/90">Learning Intelligence AI Engine</span>
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 tracking-tight">
          <span className="text-foreground">VYGOT</span>
          <span className="text-primary">™</span>
        </h1>
        
        <div className="space-y-2 mb-8">
          <p className="text-xl md:text-2xl text-foreground/70 font-medium">
            Understand how students learn.
          </p>
          <p className="text-xl md:text-2xl text-foreground/70 font-medium">
            Understand how teachers teach.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Match them for better outcomes.
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          VYGOT™ powers <span className="text-foreground font-semibold">Unique Learning Fingerprint</span>—a proprietary intelligence engine that models learner–teacher interactions to deliver truly personalised education, beyond content and test scores.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-teal-dark text-primary-foreground px-8 py-6 text-lg"
            onClick={() => document.getElementById('engine')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
          >
            <Play className="mr-2 h-4 w-4" />
            See It in Action on TutorSchool
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-foreground/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;