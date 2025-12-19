import { Clock, Check, Building, TrendingUp, BookOpen } from "lucide-react";

const ApplicationsSection = () => {
  const tutorSchoolFeatures = [
    "Students are matched with the right tutors",
    "Learning paths adapt over time",
    "Progress becomes visible and predictable"
  ];

  const comingSoon = [
    { icon: Building, label: "Skill development" },
    { icon: TrendingUp, label: "Career pathways" },
    { icon: BookOpen, label: "Lifelong learning decisions" }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
            Applications
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Where You'll Experience VYGOT™
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Now Live Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Check className="w-5 h-5" />
              <span>Now Live</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              TutorSchool
            </h3>
            <p className="text-muted-foreground mb-6">
              VYGOT™ powers TutorSchool, where:
            </p>
            <ul className="space-y-4">
              {tutorSchoolFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coming Soon Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              <span>Roadmap</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              Expanding VYGOT™'s impact beyond traditional education:
            </p>
            <ul className="space-y-4">
              {comingSoon.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
