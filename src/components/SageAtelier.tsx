import { Card } from "@/components/ui/card";

const SageAtelier = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="animate-ethereal-fade">
              <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
                The Sage's Atelier
              </h2>
              <p className="text-xl text-mist/80 font-light leading-relaxed font-sans">
                Where ancient perfumery artistry converges with proprietary AI algorithms. 
                Each essence is a singular creation, never to be replicated.
              </p>
            </div>

            {/* Alchemy Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="seasonal-card group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center animate-sage-glow">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h3 className="text-xl font-light text-gold">Ancient Artistry</h3>
                  <p className="text-sm text-mist/70 font-sans leading-relaxed">
                    Rare botanicals sourced from forgotten valleys, distilled through centuries-old techniques.
                  </p>
                </div>
              </Card>

              <Card className="seasonal-card group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-metallic rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-light text-platinum">AI Precision</h3>
                  <p className="text-sm text-mist/70 font-sans leading-relaxed">
                    Molecular analysis creates your unique olfactory signature, unrepeatable and eternal.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-mystical rounded-full shadow-mystical relative overflow-hidden">
              <div className="absolute inset-8 bg-gradient-ethereal rounded-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-sage rounded-full mx-auto animate-sage-glow flex items-center justify-center">
                    <span className="text-4xl text-ethereal">⚗️</span>
                  </div>
                  <p className="text-gold text-sm font-light tracking-wider uppercase">
                    Bespoke Creation
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gold/30 rounded-full animate-mystical-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SageAtelier;