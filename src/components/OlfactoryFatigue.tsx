import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const OlfactoryFatigue = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            Olfactory Evolution
          </h2>
          <p className="text-xl text-mist font-light max-w-3xl mx-auto leading-relaxed font-sans">
            The science of scent adaptation and the art of renewal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-12">
            <Card className="seasonal-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-sage rounded-full flex items-center justify-center animate-sage-glow mx-auto lg:mx-0">
                  <span className="text-3xl">🧬</span>
                </div>
                <h3 className="text-2xl font-light text-sage-green">Understanding Olfactory Fatigue</h3>
                <p className="text-mist/80 font-sans leading-relaxed">
                  After 4-6 weeks, your olfactory receptors adapt to your signature scent. 
                  This natural phenomenon, known as olfactory fatigue, means you may no longer 
                  perceive your fragrance as others do.
                </p>
              </div>
            </Card>

            <Card className="seasonal-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-metallic rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-light text-gold">The Renewal Process</h3>
                <p className="text-mist/80 font-sans leading-relaxed">
                  Our exclusive renewal consultation recalibrates your olfactory journey. 
                  Through advanced molecular analysis, we craft your evolved signature—
                  maintaining your essence while awakening new sensory pathways.
                </p>
              </div>
            </Card>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-mystical rounded-full shadow-mystical relative overflow-hidden">
              <div className="absolute inset-8 bg-gradient-ethereal rounded-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-sage rounded-full mx-auto animate-sage-glow flex items-center justify-center">
                    <span className="text-5xl text-ethereal">🌸</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sage-green text-lg font-light tracking-wider">
                      RENEWAL
                    </p>
                    <p className="text-mist text-sm font-light tracking-wide uppercase">
                      Every 30 Days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating DNA helixes */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-sage-green/40 rounded-full animate-mystical-float"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            className="luxury-button text-lg px-12 py-6"
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Renewal Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OlfactoryFatigue;