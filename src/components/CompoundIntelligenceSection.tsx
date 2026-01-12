import { TrendingUp } from "lucide-react";

const CompoundIntelligenceSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Continuous Learning</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Built to Compound Intelligence
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              VYGOT improves with every learning interaction.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <p className="text-lg text-foreground leading-relaxed">
              Real instructional environments generate high-fidelity, instruction-level data that continuously trains the engine. Incentive-aligned participation preserves natural teaching behaviour, ensuring long-term data quality and creating a compounding learning intelligence flywheel that is difficult to replicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompoundIntelligenceSection;
