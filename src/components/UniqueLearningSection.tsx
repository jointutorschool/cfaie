import { Fingerprint, Lightbulb } from "lucide-react";

const UniqueLearningSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            Introducing Unique Learning Fingerprint
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Every learner has a unique way of understanding. Every teacher has a unique way of teaching.
          </p>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Fingerprint className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold">Unique Learning Fingerprint</span> captures how students learn, how teachers teach, and how outcomes evolve across real learning interactions. This enables fit-based personalisation—replacing trial-and-error matching with data-driven alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueLearningSection;