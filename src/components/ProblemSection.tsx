import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const issues = [
    "Teaching styles vary widely",
    "Learning patterns are deeply individual",
    "Assessments are static and shallow",
    "Learning gaps grow silently"
  ];

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-light border border-coral/20 mb-8">
            <AlertCircle className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-coral">The Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
            Why One-Size-Fits-All Education Doesn't Work
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Every student learns differently. Yet the world still teaches everyone the same.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {issues.map((issue, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral flex-shrink-0" />
                  <span className="text-foreground font-medium">{issue}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground">
            Most platforms personalise content. <span className="text-foreground font-medium">Very few understand the human interaction where learning actually happens.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;