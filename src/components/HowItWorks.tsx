import { RefreshCw, Eye, Fingerprint, Shuffle, RotateCcw, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Eye,
      title: "Observe Real Learning",
      description: "From onboarding tasks, sessions, assessments, and engagement signals."
    },
    {
      number: 2,
      icon: Fingerprint,
      title: "Build Fingerprints",
      description: "A learning fingerprint for every student. A teaching fingerprint for every teacher."
    },
    {
      number: 3,
      icon: Shuffle,
      title: "Match for Best Outcomes",
      description: "AI matches learners with teachers whose teaching style fits how they learn."
    },
    {
      number: 4,
      icon: RotateCcw,
      title: "Learn From Results",
      description: "Every session improves future matches automatically."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How VYGOT™ Works
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A continuous learning cycle that improves with every interaction
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
                
                <div className="text-center">
                  {/* Icon with number badge */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom indicator */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-3 shadow-card border border-border/50">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num} 
                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center"
                >
                  {num}
                </div>
              ))}
            </div>
            <span className="text-foreground font-medium">
              Continuous improvement with every learning session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
