import { Users, BarChart3, AlertCircle, Zap } from "lucide-react";

const ProblemSection = () => {
  const issues = [
    {
      icon: Users,
      text: "Teaching styles vary widely"
    },
    {
      icon: BarChart3,
      text: "Learning patterns are deeply individual"
    },
    {
      icon: AlertCircle,
      text: "Assessments are static and shallow"
    },
    {
      icon: Zap,
      text: "Learning gaps grow silently"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
            Why One-Size-Fits-All<br />Education Doesn't Work
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Every student learns differently. <span className="text-foreground font-semibold">Yet the world still teaches everyone the same.</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {issues.map((issue, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-sm border border-border/50 flex flex-col items-center text-center"
              >
                <issue.icon className="w-8 h-8 text-primary mb-4" />
                <span className="text-foreground font-medium text-sm md:text-base">{issue.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground">
            Most platforms personalise content. <span className="text-foreground font-semibold">Very few understand the human interaction where learning actually happens.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;