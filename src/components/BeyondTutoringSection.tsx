import { Compass, BookOpen, TrendingUp, Clock } from "lucide-react";

const BeyondTutoringSection = () => {
  const paths = [
    { icon: BookOpen, label: "Subject & course choices" },
    { icon: TrendingUp, label: "Skill development pathways" },
    { icon: Compass, label: "Academic & career directions" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Roadmap</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Beyond Tutoring
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              As the intelligence layer matures, VYGOT™ will guide:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {paths.map((path, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <path.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {path.label}
                </h3>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground">
            Based on how learners <span className="text-foreground font-medium">actually learn</span>, not just what they score.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondTutoringSection;