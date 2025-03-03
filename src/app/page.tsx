import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/custom/Button-beam";
import FeaturesSection from "@/components/ui/custom/features-section";
import FeaturesSection2 from "@/components/ui/custom/features-section-2";
import FeaturesSection3 from "@/components/ui/custom/features-section-3";
import FeaturesSection4 from "@/components/ui/custom/features-section-4";
import HeroSection from "@/components/ui/custom/hero-section";
import Navbar from "@/components/ui/custom/navbar";
import QuestionSection from "@/components/ui/custom/QuestionSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:px-40 pr-0">
        <HeroSection />
        <FeaturesSection />
        <FeaturesSection2 />
        <FeaturesSection3 />
        <QuestionSection />
        <FeaturesSection4 />
      </div>
    </>
  );
}
