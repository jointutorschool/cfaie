import { Lightbulb, Check, Fingerprint, Wifi } from "lucide-react";

const SolutionSection = () => {
  const features = [
    "How a learner absorbs information",
    "Which teaching style works best for them",
    "What keeps them engaged"
  ];

  return (
    <section id="solution" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with floating card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565598621680-94ac0c22b148?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fHx8MTc2NjA2NDAxMHww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Students learning together"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -top-4 -right-4 md:top-4 md:right-[-60px] bg-card rounded-xl p-4 shadow-elevated border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-3">
                <Wifi className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-sm">Unique Learning DNA</h4>
              <p className="text-xs text-muted-foreground">Every learner is different</p>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              What Is Cognitive Fingerprint AI?
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Cognitive Fingerprint AI is a new way to personalize learning.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                VYGOT™ UNDERSTANDS
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Callout box */}
            <div className="bg-teal-light rounded-xl p-4 flex items-center gap-3">
              <Fingerprint className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">
                Every learner has a unique Cognitive Fingerprint.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
