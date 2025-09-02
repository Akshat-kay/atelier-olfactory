import { Button } from "@/components/ui/button";
import mysticalBg from "@/assets/mystical-mountain-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${mysticalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full animate-mystical-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
        {/* Logo Integration */}
        <div className="mb-12 animate-ethereal-fade">
          <img 
            src="/lovable-uploads/bafd5ab7-a480-4420-9528-36f47fc03e8c.png"
            alt="The Scented Sage"
            className="w-48 md:w-64 mx-auto logo-glow opacity-90"
          />
        </div>

        {/* Mystical Tagline */}
        <div className="mb-16 animate-ethereal-fade" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide">
            <span className="hero-text">Olfactory Alchemy</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium enhanced-text tracking-wider">
            Your Essence, Immortalized
          </p>
        </div>

        {/* CTA */}
        <div className="animate-ethereal-fade" style={{ animationDelay: '0.6s' }}>
          <Button 
            className="luxury-button text-lg px-12 py-6"
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Begin Your Bespoke Journey
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;