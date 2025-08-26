import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import SageAtelier from "@/components/SageAtelier";
import BespokeExperience from "@/components/BespokeExperience";
import CraftSection from "@/components/CraftSection";
import SeasonalScents from "@/components/SeasonalScents";
import OlfactoryFatigue from "@/components/OlfactoryFatigue";
import LegacySection from "@/components/LegacySection";
import ConsultationForm from "@/components/ConsultationForm";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <AboutUs />
      </div>
      <div id="atelier">
        <SageAtelier />
      </div>
      <div id="experience">
        <BespokeExperience />
      </div>
      <div id="craft">
        <CraftSection />
      </div>
      <div id="scents">
        <SeasonalScents />
      </div>
      <div id="fatigue">
        <OlfactoryFatigue />
      </div>
      <div id="legacy">
        <LegacySection />
      </div>
      <ConsultationForm />
      <div id="investor">
        <InvestorSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
