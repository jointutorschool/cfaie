import { Lightbulb, Check } from "lucide-react";

const SolutionSection = () => {
  const features = [
    "How a learner absorbs information",
    "Which teaching style works best for them",
    "What keeps them engaged"
  ];

  return (
    <section id="solution" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Is Cognitive Fingerprint AI?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cognitive Fingerprint AI is a new way to personalize learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1565598621680-94ac0c22b148?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fHx8MTc2NjA2NDAxMHww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Personalized learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xs font-medium text-primary">Unique Learning DNA</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=srgb&fm=jpg&w=800"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xs font-medium text-primary">Every learner is different</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                VYGOT™ Understands
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Every learner has a <span className="text-primary font-semibold">unique Cognitive Fingerprint</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
