import { Eye, MessageSquare, Shield, Heart, RefreshCw, ClipboardCheck } from "lucide-react";

const HowVygotThinksSection = () => {
  const behaviors = [
    { icon: MessageSquare, label: "Facilitation vs Instruction" },
    { icon: RefreshCw, label: "Reflection–Action–Silence patterns" },
    { icon: Shield, label: "Psychological safety" },
    { icon: Heart, label: "Emotional climate" },
    { icon: Eye, label: "Adaptability" },
    { icon: ClipboardCheck, label: "Assessment philosophy" }
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
              How VYGOT™ Thinks
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VYGOT™ captures observable teaching and learning behaviors that most platforms ignore.
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
            <p className="text-lg text-muted-foreground mb-4">
              These signals form an evolving <span className="text-foreground font-semibold">Teacher Teaching Pattern</span>, paired with each learner's <span className="text-foreground font-semibold">Unique Learning Fingerprint</span>.
            </p>
            <p className="text-primary font-medium">
              The result is a deeper understanding of why the same curriculum produces different outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowVygotThinksSection;