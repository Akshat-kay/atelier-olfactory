import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-charcoal/30">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bafd5ab7-a480-4420-9528-36f47fc03e8c.png"
              alt="The Scented Sage"
              className="w-12 h-12 logo-glow"
            />
            <span className="text-xl font-light text-gold tracking-wide font-serif">
              The Scented Sage
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('atelier')}
              className="text-sm text-mist/80 hover:text-gold transition-colors duration-300 font-light tracking-wide font-sans uppercase"
            >
              Atelier
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm text-mist/80 hover:text-gold transition-colors duration-300 font-light tracking-wide font-sans uppercase"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('scents')}
              className="text-sm text-mist/80 hover:text-gold transition-colors duration-300 font-light tracking-wide font-sans uppercase"
            >
              Scents
            </button>
            <button 
              onClick={() => scrollToSection('legacy')}
              className="text-sm text-mist/80 hover:text-gold transition-colors duration-300 font-light tracking-wide font-sans uppercase"
            >
              Legacy
            </button>
            <Button 
              onClick={() => scrollToSection('consultation')}
              className="luxury-button text-xs px-6 py-2"
            >
              Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection('consultation')}
              className="luxury-button text-xs px-4 py-2"
            >
              Consult
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;