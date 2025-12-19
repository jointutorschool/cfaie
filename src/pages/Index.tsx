import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/ImpactSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatSetsUsApart />
      <HowItWorks />
      <ImpactSection />
      <ApplicationsSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
