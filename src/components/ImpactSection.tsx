import { TrendingUp, Rocket, Heart, BarChart3 } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    { icon: Rocket, title: "Students learn faster" },
    { icon: TrendingUp, title: "Teachers teach more effectively" },
    { icon: Heart, title: "Confidence increases" },
    { icon: BarChart3, title: "Outcomes become measurable" }
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12">
            Why This Matters
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                {impact.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-2xl text-foreground font-medium">
            Learning stops being guesswork.
          </p>
          <p className="text-xl text-primary font-semibold">
            Welcome to the future of personalized education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
