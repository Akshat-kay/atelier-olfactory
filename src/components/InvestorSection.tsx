import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const InvestorSection = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden bg-gradient-ethereal">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            Become an Investor
          </h2>
          <p className="text-xl text-mist font-light leading-relaxed font-sans max-w-2xl mx-auto">
            Join an exclusive circle of visionaries investing in the future of luxury olfactory experiences
          </p>
        </div>

        <Card className="seasonal-card max-w-2xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="w-20 h-20 bg-gradient-metallic rounded-full flex items-center justify-center animate-sage-glow mx-auto">
              <span className="text-4xl">👑</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-sage-green">Exclusive Investment Opportunity</h3>
              <p className="text-mist/80 font-sans leading-relaxed">
                Partner with The Scented Sage in revolutionizing bespoke fragrance creation. 
                Our proprietary AI-driven molecular analysis represents the pinnacle of 
                olfactory innovation for discerning clientele.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">🔬</span>
                </div>
                <h4 className="text-lg font-light text-sage-green">Innovation</h4>
                <p className="text-sm text-mist/70 font-sans">Cutting-edge AI perfumery technology</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-metallic rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">💎</span>
                </div>
                <h4 className="text-lg font-light text-gold">Exclusivity</h4>
                <p className="text-sm text-mist/70 font-sans">Ultra-high-net-worth clientele</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">📈</span>
                </div>
                <h4 className="text-lg font-light text-sage-green">Growth</h4>
                <p className="text-sm text-mist/70 font-sans">Exponential market expansion</p>
              </div>
            </div>

            <div className="pt-4 border-t border-mist/20">
              <p className="text-sm text-mist/60 font-sans italic mb-6">
                By Appointment Only • Accredited Investors • Minimum Investment Required
              </p>
              <Button 
                className="luxury-button text-lg px-12 py-6"
                onClick={() => {
                  const email = "investments@thescentedsage.com";
                  const subject = "Investment Inquiry - Private Consultation Request";
                  const body = "I am interested in learning more about investment opportunities with The Scented Sage. Please schedule a private consultation.";
                  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                Request Private Investment Consultation
              </Button>
            </div>
          </div>
        </Card>

        {/* Floating investment symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gold/20 rounded-full animate-mystical-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;