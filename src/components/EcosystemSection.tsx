import { Building, GraduationCap, Wrench, Users } from "lucide-react";

const EcosystemSection = () => {
  const stakeholders = [
    {
      icon: Building,
      title: "Education Platforms",
      description: "Embed adaptive learning intelligence without building complex learning systems in-house."
    },
    {
      icon: GraduationCap,
      title: "Schools & Institutions",
      description: "Gain cohort-level insight into learning outcomes and intervention needs."
    },
    {
      icon: Wrench,
      title: "Learning System Builders",
      description: "Power AI tutors, LMSs, and assessment tools with decision-grade learning intelligence."
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-8">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">For Everyone</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Built for Education Systems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {stakeholders.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
