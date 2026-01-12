import { Eye, Gauge, Brain, RefreshCw, Target, MessageSquare } from "lucide-react";

const HowVygotThinksSection = () => {
  const behaviors = [
    { icon: Gauge, label: "Pacing" },
    { icon: Brain, label: "Cognitive load" },
    { icon: RefreshCw, label: "Adaptability" },
    { icon: Eye, label: "Reflection–action patterns" },
    { icon: Target, label: "Instructional intent" },
    { icon: MessageSquare, label: "Learning response" }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Observable Behaviors</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              How the Engine Thinks
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VYGOT™ captures instruction-level signals that most platforms overlook.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {behaviors.map((behavior, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <behavior.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{behavior.label}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center">
            <p className="text-lg text-muted-foreground">
              These signals form evolving learner and instruction profiles—sometimes referred to as <span className="text-foreground font-semibold">Unique Learning DNA</span>—allowing systems to understand why the same curriculum produces different outcomes for different learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowVygotThinksSection;
