import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mysticalBg from "@/assets/mystical-mountain-bg.jpg";
import springBg from "@/assets/spring-blossoms.jpg";
import summerBg from "@/assets/summer-forest.jpg";
import autumnBg from "@/assets/autumn-leaves.jpg";
import winterBg from "@/assets/winter-ice.jpg";

type Season = 'signature' | 'spring' | 'summer' | 'autumn' | 'winter';

const seasonalData = {
  signature: {
    title: "Eternal",
    philosophy: "Beyond seasons",
    bgImage: mysticalBg,
    accent: "text-gold",
    description: "Your personal olfactory DNA"
  },
  spring: {
    title: "Spring",
    philosophy: "Awakening",
    bgImage: springBg,
    accent: "text-spring-accent",
    description: "Renewal and emergence"
  },
  summer: {
    title: "Summer",
    philosophy: "Radiance",
    bgImage: summerBg,
    accent: "text-summer-accent",
    description: "Radiance and vitality"
  },
  autumn: {
    title: "Autumn",
    philosophy: "Depth",
    bgImage: autumnBg,
    accent: "text-autumn-accent",
    description: "Depth and sophistication"
  },
  winter: {
    title: "Winter",
    philosophy: "Purity",
    bgImage: winterBg,
    accent: "text-winter-accent",
    description: "Clarity and warmth"
  }
};

const SeasonalScents = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('signature');
  
  const currentSeason = seasonalData[activeSeason];

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-32 px-8 transition-all duration-1000 overflow-hidden">
      {/* Dynamic Background with enhanced glacial integration */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentSeason.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Enhanced glacial overlay for consistent theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight/60 via-midnight/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-midnight/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            Choose Your Journey
          </h2>
        </div>

        {/* Season Selector */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {Object.entries(seasonalData).map(([season, data]) => (
            <Button
              key={season}
              onClick={() => setActiveSeason(season as Season)}
              className={`luxury-button px-8 py-4 text-lg transition-all duration-700 ${
                activeSeason === season 
                  ? 'bg-gold/20 border-gold text-gold' 
                  : 'bg-background/20 border-mist/30 text-mist hover:border-gold/50'
              }`}
            >
              {data.title}
            </Button>
          ))}
        </div>

        {/* Active Season Display */}
        <div className="text-center space-y-16 animate-ethereal-fade" key={activeSeason}>
          <div className="space-y-8">
            <h3 className="text-6xl md:text-8xl font-light text-foreground tracking-wide">
              {currentSeason.philosophy}
            </h3>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              className="luxury-button text-lg px-12 py-6"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalScents;