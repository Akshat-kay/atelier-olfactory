import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Season = 'signature' | 'spring' | 'summer' | 'autumn' | 'winter';

const seasonalData = {
  signature: {
    title: "All-Season Signature",
    philosophy: "A timeless essence that transcends seasons, capturing the eternal within.",
    bg: "bg-gradient-mystical",
    accent: "text-gold",
    description: "Your personal olfactory DNA"
  },
  spring: {
    title: "Spring Awakening",
    philosophy: "Fresh beginnings emerge from winter's embrace, delicate yet profound.",
    bg: "bg-gradient-to-br from-spring-light/20 to-spring-accent/10",
    accent: "text-spring-accent",
    description: "Renewal and emergence"
  },
  summer: {
    title: "Summer Solstice",
    philosophy: "Golden warmth and endless possibility dance in perfect harmony.",
    bg: "bg-gradient-to-br from-summer-warm/20 to-summer-accent/10",
    accent: "text-summer-accent",
    description: "Radiance and vitality"
  },
  autumn: {
    title: "Autumn Mystique",
    philosophy: "Rich depths and golden wisdom, the beauty of transformation.",
    bg: "bg-gradient-to-br from-autumn-mist/20 to-autumn-accent/10",
    accent: "text-autumn-accent",
    description: "Depth and sophistication"
  },
  winter: {
    title: "Winter Solace",
    philosophy: "Crystalline purity meets warm intimacy in perfect balance.",
    bg: "bg-gradient-to-br from-winter-crystal/20 to-winter-accent/10",
    accent: "text-winter-accent",
    description: "Clarity and warmth"
  }
};

const SeasonalScents = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('signature');
  
  const currentSeason = seasonalData[activeSeason];

  return (
    <section className={`py-32 px-8 transition-all duration-1000 ${currentSeason.bg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            Seasonal & Signature Scents
          </h2>
          <p className="text-xl text-mist/80 font-light font-sans max-w-3xl mx-auto">
            Your essence evolves with time and circumstance. Each creation captures a moment, 
            a season, a chapter of your eternal story.
          </p>
        </div>

        {/* Season Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(seasonalData).map(([season, data]) => (
            <Button
              key={season}
              onClick={() => setActiveSeason(season as Season)}
              className={`luxury-button transition-all duration-700 ${
                activeSeason === season 
                  ? 'bg-gold/20 border-gold text-gold' 
                  : 'bg-charcoal/20 border-mist/30 text-mist hover:border-gold/50'
              }`}
            >
              {data.title}
            </Button>
          ))}
        </div>

        {/* Active Season Display */}
        <div className="text-center space-y-12 animate-ethereal-fade" key={activeSeason}>
          <Card className="seasonal-card max-w-4xl mx-auto p-16">
            <div className="space-y-8">
              <h3 className={`text-4xl font-light ${currentSeason.accent}`}>
                {currentSeason.title}
              </h3>
              
              <div className="w-24 h-px bg-gradient-metallic mx-auto" />
              
              <p className="text-2xl font-light text-mist/90 italic leading-relaxed">
                "{currentSeason.philosophy}"
              </p>
              
              <p className={`text-sm uppercase tracking-wider font-sans ${currentSeason.accent}`}>
                {currentSeason.description}
              </p>
            </div>
          </Card>

          {/* Visual Elements */}
          <div className="flex justify-center space-x-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 2 ? 'bg-gold animate-sage-glow' : 'bg-mist/30'
                } transition-all duration-700`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalScents;