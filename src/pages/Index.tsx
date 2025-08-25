import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SageAtelier from "@/components/SageAtelier";
import BespokeExperience from "@/components/BespokeExperience";
import CraftSection from "@/components/CraftSection";
import SeasonalScents from "@/components/SeasonalScents";
import LegacySection from "@/components/LegacySection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-glacial-base">
      <Navigation />
      <Hero />
      <div id="atelier" className="bg-glacial-section">
        <SageAtelier />
      </div>
      <div id="experience" className="bg-glacial-overlay">
        <BespokeExperience />
      </div>
      <div id="craft" className="bg-glacial-section">
        <CraftSection />
      </div>
      <div id="scents" className="bg-glacial-overlay">
        <SeasonalScents />
      </div>
      <div id="legacy" className="bg-glacial-section">
        <LegacySection />
      </div>
      <div className="bg-glacial-overlay">
        <ConsultationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
