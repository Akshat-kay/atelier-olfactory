import { Card } from "@/components/ui/card";

const experienceCategories = [
  {
    title: "Individual Profile",
    description: "Your unique olfactory DNA captured in molecular precision",
    icon: "👤",
    gradient: "from-sage-green/20 to-sage-light/10"
  },
  {
    title: "Seasonality",
    description: "Evolving scents that mirror nature's eternal dance",
    icon: "🌿",
    gradient: "from-spring-accent/20 to-summer-accent/10"
  },
  {
    title: "Travel",
    description: "Portable essences that carry your sanctuary anywhere",
    icon: "✈️",
    gradient: "from-platinum/20 to-mist/10"
  },
  {
    title: "Occasion",
    description: "Ceremonial fragrances for life's most sacred moments",
    icon: "🕯️",
    gradient: "from-gold/20 to-autumn-accent/10"
  },
  {
    title: "Legacy",
    description: "Timeless scents to be passed through generations",
    icon: "🏛️",
    gradient: "from-midnight/20 to-charcoal/10"
  }
];

const BespokeExperience = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      {/* Subtle glacial mist effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-sage-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            The Bespoke Experience
          </h2>
          <p className="text-xl text-mist/80 font-light font-sans max-w-3xl mx-auto leading-relaxed">
            A private consultation journey where ancient wisdom meets molecular artistry. 
            Your scent story begins with understanding your essence.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experienceCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`seasonal-card bg-gradient-to-br ${category.gradient} group hover:scale-105 transition-all duration-700`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-gradient-mystical rounded-full flex items-center justify-center mx-auto animate-sage-glow">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                
                <h3 className="text-xl font-light text-gold">
                  {category.title}
                </h3>
                
                <p className="text-sm text-mist/70 font-sans leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-sage-green to-platinum transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Intimate consultation to unveil your olfactory preferences and life story"
              },
              {
                step: "02",
                title: "Alchemy",
                description: "AI-assisted molecular analysis combined with master perfumer intuition"
              },
              {
                step: "03",
                title: "Creation",
                description: "Hand-crafted in our private atelier using the world's rarest ingredients"
              },
              {
                step: "04",
                title: "Legacy",
                description: "Your unique formula sealed forever, never to be replicated"
              }
            ].map((process, index) => (
              <div 
                key={process.step}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <Card className={`seasonal-card max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center text-ethereal font-light">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-gold mb-1">{process.title}</h4>
                      <p className="text-sm text-mist/70 font-sans">{process.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeExperience;