import isbLogo from "@/assets/partner-isb-iventure.jpg";
import nvidiaLogo from "@/assets/partner-nvidia-inception.png";
import googleLogo from "@/assets/partner-google-startups.png";

const partners = [
  { name: "NVIDIA Inception Program", logo: nvidiaLogo },
  { name: "Google for Startups Cloud Program", logo: googleLogo },
  { name: "ISB I-Venture", logo: isbLogo },
];

const PartnerLogos = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8" aria-hidden={hidden || undefined}>
    {partners.map((partner) => (
      <div
        key={partner.name}
        className="flex h-28 w-60 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-card px-7 shadow-card md:h-32 md:w-72"
      >
        <img
          src={partner.logo}
          alt={hidden ? "" : `${partner.name} logo`}
          className="h-16 w-full object-contain md:h-20"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const PartnersSection = () => {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-10 text-3xl font-heading font-bold text-foreground md:mb-12 md:text-4xl">
          Proud Member of
        </h2>
      </div>

      <div className="group flex overflow-hidden" aria-label="Membership programs">
        <div className="flex w-max animate-logo-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <PartnerLogos />
          <PartnerLogos hidden />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
