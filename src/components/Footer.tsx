const Footer = () => {
  return (
    <footer className="py-16 px-8 mystical-section border-t border-charcoal/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <img 
                src="/lovable-uploads/751cfda5-2098-4934-afef-8867559d89eb.png"
                alt="The Scented Sage"
                className="w-12 h-12 logo-glow"
              />
              <span className="text-xl font-light text-gold tracking-wide font-serif">
                The Scented Sage
              </span>
            </div>
            <p className="text-sm text-mist/60 font-sans leading-relaxed max-w-xs mx-auto md:mx-0">
              Private atelier crafting singular fragrances for the discerning few. 
              Each essence, a legacy immortalized.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-platinum mb-6">Private Consultation</h3>
            <div className="space-y-2 text-sm text-mist/70 font-sans">
              <p>info@scentedsage.com</p>
              <p>+1-437-230-0427</p>
              <p className="text-xs text-gold/60 italic mt-4">
                By appointment only
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-platinum mb-6">Our Philosophy</h3>
            <blockquote className="text-sm text-mist/70 font-sans italic leading-relaxed">
              "In the realm of scent, we do not create products. 
              We birth legacies that transcend time."
            </blockquote>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-charcoal/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-mist/50 font-sans">
              © 2024 The Scented Sage. All rights reserved. Unauthorized replication forbidden.
            </p>
            <div className="flex space-x-6 text-xs text-mist/50 font-sans">
              <button className="hover:text-gold transition-colors duration-300">Privacy</button>
              <button className="hover:text-gold transition-colors duration-300">Terms</button>
              <button className="hover:text-gold transition-colors duration-300">Exclusivity</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;