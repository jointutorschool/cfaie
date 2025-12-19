import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(160_40%_95%)_0%,transparent_50%)]" />
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">AI-Powered Learning Intelligence</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
          <span className="text-foreground">VYGOT</span>
          <span className="text-primary">™</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6 max-w-3xl mx-auto">
          The Learning Intelligence Engine Behind Cognitive Fingerprint AI
        </p>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          VYGOT™ is the AI engine that helps learners find the right teacher, the right way of learning, and eventually the right path forward—by understanding how learning actually works.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground px-8 py-6 text-lg">
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-secondary px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
        
        <div className="pt-8 border-t border-border/50 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Powering the future of personalized education</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-foreground">TutorSchool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-foreground">Cognitive Fingerprint AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-foreground">Learning Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
