import { Brain, User, GraduationCap, ArrowLeftRight } from "lucide-react";

const WhatIsVygotSection = () => {
  return (
    <section id="engine" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">VYGOT™ Engine</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              What Is VYGOT™?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              VYGOT™ is the proprietary engine behind Unique Learning Fingerprint.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inspired by learning science and neuroscience of learning, it is a <span className="text-foreground font-semibold">bi-directional intelligence system</span> that continuously learns from real educational interactions.
            </p>
          </div>
          
          {/* Bi-directional visual */}
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Teacher */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Teacher</h3>
                <p className="text-sm text-muted-foreground mt-1">Teaching Pattern</p>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center gap-3">
                <ArrowLeftRight className="w-10 h-10 text-primary" />
              </div>
              
              {/* Learner */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Learner</h3>
                <p className="text-sm text-muted-foreground mt-1">Learning Fingerprint</p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground mt-8 pt-8 border-t border-border/50">
              VYGOT™ models learning as a <span className="text-foreground font-medium">relationship</span>—not just content consumption or test performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVygotSection;