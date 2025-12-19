import { Layout, Clock, Check } from "lucide-react";

const ApplicationsSection = () => {
  const tutorSchoolFeatures = [
    "Students are matched with the right tutors",
    "Learning paths adapt over time",
    "Progress becomes visible and predictable"
  ];

  const comingSoon = [
    "Skill development",
    "Career pathways",
    "Lifelong learning decisions"
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <Layout className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Applications</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Where You'll Experience VYGOT™
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Now Live Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Now Live
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              TutorSchool
            </h3>
            <p className="text-muted-foreground mb-6">
              VYGOT™ powers TutorSchool, where:
            </p>
            <ul className="space-y-3">
              {tutorSchoolFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coming Soon Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
              <Clock className="w-3 h-3" />
              Roadmap
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              Expanding VYGOT™'s impact beyond traditional education:
            </p>
            <div className="flex flex-wrap gap-3">
              {comingSoon.map((item, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
