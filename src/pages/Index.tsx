import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import UniqueLearningSection from "@/components/UniqueLearningSection";
import WhatIsVygotSection from "@/components/WhatIsVygotSection";
import HowVygotThinksSection from "@/components/HowVygotThinksSection";
import MatchingSection from "@/components/MatchingSection";
import CompoundIntelligenceSection from "@/components/CompoundIntelligenceSection";
import DeploymentSection from "@/components/DeploymentSection";
import TutorSchoolSection from "@/components/TutorSchoolSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <UniqueLearningSection />
      <WhatIsVygotSection />
      <HowVygotThinksSection />
      <MatchingSection />
      <CompoundIntelligenceSection />
      <DeploymentSection />
      <TutorSchoolSection />
      <EcosystemSection />
      <WhyDifferentSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
