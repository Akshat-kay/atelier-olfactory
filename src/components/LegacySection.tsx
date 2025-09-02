import { Card } from "@/components/ui/card";

const LegacySection = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden mystical-section">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Central Message */}
        <div className="space-y-12 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-7xl font-light mystical-text">
            Legacy & Exclusivity
          </h2>
          
          <div className="w-32 h-px bg-gradient-metallic mx-auto" />
          
          <blockquote className="text-3xl lg:text-4xl font-light italic text-mist/90 leading-relaxed">
            "No scent is ever replicated. <br />
            Each is a personal legacy."
          </blockquote>
          
          <p className="text-lg text-gold font-light tracking-wider uppercase font-sans">
            Immortalized. Unrepeatable. Eternal.
          </p>
        </div>

        {/* Visual Elements */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Singular Creation",
              description: "Your formula exists only once in the universe",
              symbol: "∞"
            },
            {
              title: "Molecular Lock",
              description: "AI-encrypted essence signature, impossible to reverse",
              symbol: "🔒"
            },
            {
              title: "Generational Heritage",
              description: "A scent legacy passed through bloodlines",
              symbol: "⚱️"
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className="seasonal-card text-center space-y-6 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-gradient-mystical rounded-full flex items-center justify-center mx-auto animate-sage-glow">
                <span className="text-3xl text-gold">{item.symbol}</span>
              </div>
              
              <h3 className="text-xl font-light text-platinum">
                {item.title}
              </h3>
              
              <p className="text-sm text-mist/70 font-sans leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Antique Bottle Visual */}
        <div className="mt-20">
          <div className="relative inline-block">
            <div className="w-32 h-48 bg-gradient-to-b from-gold/20 via-platinum/10 to-gold/20 rounded-t-full rounded-b-lg mx-auto shadow-glow">
              <div className="absolute inset-4 bg-gradient-ethereal rounded-t-full rounded-b-lg opacity-50" />
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-sage-green/30 rounded-full" />
            </div>
            
            {/* Floating essence particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gold/40 rounded-full animate-mystical-float"
                style={{
                  left: `${-20 + Math.random() * 140}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <p className="mt-8 text-sm text-gold/70 font-light tracking-widest uppercase font-sans">
            Your Essence, Crystallized
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;