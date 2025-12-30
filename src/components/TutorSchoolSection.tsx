import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TutorSchoolSection = () => {
  const features = [
    "Find the right tutor faster—based on learning and teaching fit, not guesswork",
    "See real learning progress through transparent, data-driven insights",
    "Benefit from adaptive learning paths that adjust content depth, difficulty, and pace",
    "Receive early risk signals through predictive analytics before learning gaps widen",
    "Access customised assessments that reveal strengths, weaknesses, and mastery gaps"
  ];

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
              Built into TutorSchool
            </h2>
            
            <p className="text-xl text-muted-foreground mb-4">
              Today, VYGOT™ powers <span className="text-foreground font-semibold">TutorSchool</span>, where parents and learners can:
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-muted-foreground mb-6">
              Once a learner–teacher match is established, VYGOT™ continuously refines the experience by recommending personalised learning pathways—aligning instruction, pacing, and remediation to the learner's Unique Learning DNA.
            </p>
            
            <p className="text-muted-foreground text-center">
              VYGOT™ operates quietly in the background, using outcome-based intelligence loops to improve matching accuracy and learning effectiveness with every real interaction.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground px-8 py-6 text-lg">
              Visit TutorSchool
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorSchoolSection;