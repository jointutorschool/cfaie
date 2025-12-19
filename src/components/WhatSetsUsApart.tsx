import { Star, GraduationCap, Users } from "lucide-react";

const WhatSetsUsApart = () => {
  const learnerFeatures = [
    "Learning pace and depth",
    "Attention and engagement patterns",
    "Cognitive strengths and challenges"
  ];

  const teacherFeatures = [
    "Teaching style and structure",
    "Interaction and feedback patterns",
    "How students respond to their instruction"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What Sets Us Apart</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Makes VYGOT™ Different
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most platforms personalize content. <span className="text-foreground font-medium">VYGOT™ personalizes human learning interactions.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learner Intelligence Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Learner Intelligence
            </h3>
            <ul className="space-y-3">
              {learnerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Teacher Intelligence Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Teacher Intelligence
            </h3>
            <ul className="space-y-3">
              {teacherFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Analytics Image Card */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&w=800"
                alt="Learning analytics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                Real-Time Learning Analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Powered by Cognitive Fingerprint AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
