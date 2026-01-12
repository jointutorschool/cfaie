import { Check, Star } from "lucide-react";

const WhyDifferentSection = () => {
  const differentiators = [
    "Built on instruction-level interaction data—not surface engagement metrics",
    "Compounds intelligence through outcome-driven feedback loops",
    "Encodes teaching-pattern signals most platforms ignore",
    "Grounded in learning science rather than heuristics"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">What Sets Us Apart</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12">
              Why VYGOT Is Different
            </h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-navy rounded-2xl p-8 text-center">
            <p className="text-xl text-white font-medium">
              VYGOT is not a feature. It is <span className="text-primary">learning intelligence infrastructure</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
