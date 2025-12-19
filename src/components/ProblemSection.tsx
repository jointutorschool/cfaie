import { AlertCircle, XCircle } from "lucide-react";

const ProblemSection = () => {
  const issues = [
    "Endless trial-and-error with tutors",
    "Slow progress despite effort",
    "No visibility into why learning works—or doesn't"
  ];

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-light border border-coral/20">
              <AlertCircle className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-coral">The Problem</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Why Learning Fails Today
            </h2>
            
            <div className="space-y-3 text-lg text-muted-foreground">
              <p>Every child is taught differently.</p>
              <p>Every teacher teaches differently.</p>
              <p>Yet education still treats everyone the same.</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Resulting Issues
              </h3>
              <ul className="space-y-4">
                {issues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fHx8MTc2NjA2NDAxMHww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stat card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated border border-border/50">
              <span className="stat-highlight">70%</span>
              <p className="text-sm text-muted-foreground mt-1">
                of students struggle with<br />
                mismatched teaching styles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
