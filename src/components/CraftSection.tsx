const CraftSection = () => {
  const craftCategories = [
    {
      title: "Individual",
      subtitle: "Skin & Soul",
      description: "Your unique essence captured in scent"
    },
    {
      title: "Seasonal",
      subtitle: "Nature's Rhythm",
      description: "Fragrances that evolve with time"
    },
    {
      title: "Occasion",
      subtitle: "Life's Moments",
      description: "Scents for your most precious memories"
    },
    {
      title: "Legacy",
      subtitle: "Your Signature",
      description: "An olfactory inheritance for generations"
    }
  ];

  return (
    <section className="py-32 px-8 relative overflow-hidden">
      {/* Subtle glacial mist effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mist/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-platinum/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            The Craft
          </h2>
        </div>

        {/* Craft Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {craftCategories.map((category, index) => (
            <div 
              key={category.title}
              className="text-center space-y-6 animate-ethereal-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-light text-foreground tracking-wide">
                  {category.title}
                </h3>
                <div className="w-16 h-px bg-gradient-metallic mx-auto" />
                <p className="text-lg text-accent font-light tracking-wider">
                  {category.subtitle}
                </p>
                <p className="text-sm text-mist/70 font-light font-sans leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftSection;