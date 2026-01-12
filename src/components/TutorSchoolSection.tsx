import { Check } from "lucide-react";

const TutorSchoolSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-8">
              <Check className="w-4 h-4" />
              <span>Now Live</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Where VYGOT Operates Today
            </h2>
            
            <p className="text-xl text-muted-foreground mb-4">
              VYGOT is live at <span className="text-foreground font-semibold">TutorSchool</span>—a real-world learning system that enables VYGOT to observe instruction, refine models, and harden learning intelligence.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              TutorSchool functions as an operational environment where authentic learning interactions continuously strengthen the engine deployed via APIs to platforms and institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorSchoolSection;
