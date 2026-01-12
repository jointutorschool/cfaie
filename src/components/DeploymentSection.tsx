import { Code, Key, Handshake } from "lucide-react";

const DeploymentSection = () => {
  const deploymentOptions = [
    { icon: Code, label: "API Integration" },
    { icon: Key, label: "Licensing" },
    { icon: Handshake, label: "Strategic Pilots" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              How VYGOT Is Deployed
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              VYGOT is delivered via <span className="text-foreground font-semibold">APIs and licensing</span>, enabling platforms and institutions to embed learning intelligence directly into their existing systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {deploymentOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {option.label}
                </h3>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground">
            Strategic pilots support outcome validation and integration, allowing partners to adopt learning intelligence <span className="text-foreground font-medium">without rebuilding core infrastructure</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
