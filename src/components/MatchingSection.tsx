import { Shuffle, UserCheck, Users } from "lucide-react";

const MatchingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <Shuffle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fit-Based Matching</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Fit, Not Ideology
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              VYGOT™ does not assume one teaching style works for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-foreground">
                Some learners thrive under <span className="font-semibold">facilitation</span>.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-foreground">
                Others require <span className="font-semibold">structured instruction</span>.
              </p>
            </div>
          </div>
          
          <div className="bg-teal-light rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground">
              The engine's role is to identify and refine <span className="font-semibold text-primary">fit</span>—using outcome-driven feedback loops rather than static preferences, ratings, or assumptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingSection;
