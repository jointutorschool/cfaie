import { Handshake } from "lucide-react";
import isbLogo from "@/assets/partner-isb-iventure.jpg";
import nvidiaLogo from "@/assets/partner-nvidia-inception.png";
import googleLogo from "@/assets/partner-google-startups.webp";

const PartnersSection = () => {
  const partners = [
    { name: "ISB I-Venture", logo: isbLogo },
    { name: "NVIDIA Inception Program", logo: nvidiaLogo },
    { name: "Google for Startups Cloud Program", logo: googleLogo },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light border border-primary/20 mb-6">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Partners & Supporters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Partners & Supporters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex items-center justify-center h-40"
            >
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="max-h-24 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
