import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            Our Vision
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            To build the intelligence layer that understands how humans learn together—and make personalized learning accessible to <span className="text-primary font-semibold">every learner, everywhere</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground px-8 py-6 text-lg">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-secondary px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
