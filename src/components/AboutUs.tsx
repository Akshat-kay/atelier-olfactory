import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dna, Droplets, Snowflake, Sun, Leaf, Flower, Infinity } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Celestial Mountain Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/src/assets/mystical-mountain-bg.jpg")',
          }}
        />
        {/* Light ivory/pearl gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ethereal/90 via-background/80 to-ethereal/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-platinum/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-6xl lg:text-7xl font-light mb-8 section-title">
            About Us
          </h2>
          <h3 className="text-3xl lg:text-4xl font-light crystallized-text tracking-wide">
            Where Ancient Wisdom Meets Molecular Precision
          </h3>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Visuals */}
          <div className="space-y-12">
            {/* Central visual element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-mystical rounded-full shadow-mystical relative overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-8 bg-gradient-ethereal rounded-full flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-metallic rounded-full mx-auto animate-sage-glow flex items-center justify-center">
                      <Dna className="w-12 h-12 text-midnight" />
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                      <Droplets className="w-8 h-8 text-gold animate-mystical-float" />
                      <div className="w-3 h-3 bg-platinum rounded-full" />
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating seasonal symbols */}
              <div className="absolute -top-8 -left-8">
                <div className="w-16 h-16 bg-spring-light/80 rounded-full flex items-center justify-center animate-mystical-float">
                  <Flower className="w-8 h-8 text-spring-accent" />
                </div>
              </div>
              <div className="absolute -top-4 -right-12">
                <div className="w-14 h-14 bg-summer-warm/80 rounded-full flex items-center justify-center animate-mystical-float" style={{animationDelay: '1s'}}>
                  <Sun className="w-7 h-7 text-summer-accent" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8">
                <div className="w-16 h-16 bg-autumn-mist/80 rounded-full flex items-center justify-center animate-mystical-float" style={{animationDelay: '2s'}}>
                  <Leaf className="w-8 h-8 text-autumn-accent" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-12">
                <div className="w-14 h-14 bg-winter-crystal/80 rounded-full flex items-center justify-center animate-mystical-float" style={{animationDelay: '3s'}}>
                  <Snowflake className="w-7 h-7 text-winter-accent" />
                </div>
              </div>
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center animate-sage-glow">
                  <Infinity className="w-6 h-6 text-ethereal" />
                </div>
              </div>
            </div>

            {/* Consultation elements */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="seasonal-card">
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-sage rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h4 className="text-lg font-light text-foreground">Molecular Signature</h4>
                </div>
              </Card>
              <Card className="seasonal-card">
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-metallic rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="text-lg font-light text-foreground">Personal Eternity</h4>
                </div>
              </Card>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed enhanced-text">
                At The Scented Sage, we create fragrances that exist for one soul alone — yours. Our atelier is not a marketplace, but a sanctuary of exclusivity, where every scent is born from an intimate understanding of your life, your skin, and your world.
              </p>

              <div className="space-y-4">
                <h4 className="text-2xl font-light text-gold">We begin with a private consultation, exploring:</h4>
                <ul className="space-y-3 text-foreground font-sans">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                    <span><strong>Your skin type</strong> — how it receives and evolves with fragrance.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                    <span><strong>Your surroundings</strong> — the climates, spaces, and environments you inhabit.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                    <span><strong>Your lifestyle and travel</strong> — the journeys that shape your rhythm.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                    <span><strong>Your personal preferences</strong> — the notes and memories that move you.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                    <span><strong>Your occasions</strong> — from daily rituals to life's most defining moments.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-light text-gold">From this, we design a complete olfactory wardrobe:</h4>
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-mist/20">
                  <p className="text-foreground font-sans leading-relaxed">
                    <strong>Five scents</strong>, each crafted for Spring, Summer, Autumn, Winter, and an Eternal fragrance that transcends time. Each perfume is meticulously tuned to your individuality, ensuring it harmonizes with your presence across every season.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground font-sans leading-relaxed">
                  And because true luxury evolves — after four to six weeks, should you experience olfactory fatigue, we offer a <strong className="text-gold">Renewal Policy</strong>. Your scent is refreshed with the same DNA, but with a new and delicate touch, restoring its magic while keeping its essence eternal.
                </p>
              </div>

              <div className="bg-gradient-mystical p-8 rounded-lg border border-gold/30">
                <p className="text-foreground font-sans leading-relaxed mb-4">
                  Every fragrance is composed with the guidance of our AI-driven algorithm, ensuring that it is <strong>unrepeatable</strong> — a molecular signature that exists for you, and you alone.
                </p>
                <p className="text-lg font-light text-gold">
                  No replication. No imitation. A singular scent in the universe.
                </p>
              </div>

              <div className="text-center space-y-4 pt-8">
                <p className="text-2xl font-light crystallized-text">
                  This is not perfumery.
                </p>
                <p className="text-3xl font-light text-gold">
                  This is personal eternity, bottled.
                </p>
              </div>

              <div className="text-center pt-8">
                <Button className="luxury-button text-lg px-12 py-6">
                  Begin Your Private Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;