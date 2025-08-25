import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SageAtelier from "@/components/SageAtelier";
import BespokeExperience from "@/components/BespokeExperience";
import SeasonalScents from "@/components/SeasonalScents";
import LegacySection from "@/components/LegacySection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="atelier">
        <SageAtelier />
      </div>
      <div id="experience">
        <BespokeExperience />
      </div>
      <div id="scents">
        <SeasonalScents />
      </div>
      <div id="legacy">
        <LegacySection />
      </div>
      <ConsultationForm />
      <Footer />
    </div>
  );
};

export default Index;
