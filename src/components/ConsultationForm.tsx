import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Consultation Request Received",
      description: "Your journey into bespoke fragrance begins. We will contact you within 48 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", country: "" });
  };

  return (
    <section id="consultation" className="py-32 px-8 bg-gradient-mystical relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full animate-mystical-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16 animate-ethereal-fade">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 mystical-text">
            Begin Your Legacy
          </h2>
          <p className="text-xl text-mist/80 font-light font-sans">
            Request a private consultation to discover your unique olfactory signature.
          </p>
        </div>

        {/* Consultation Card */}
        <Card className="seasonal-card p-12 max-w-lg mx-auto animate-ethereal-fade" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-sage rounded-full flex items-center justify-center mx-auto mb-4 animate-sage-glow">
                <span className="text-2xl text-ethereal">✨</span>
              </div>
              <h3 className="text-2xl font-light text-gold mb-2">Private Consultation</h3>
              <p className="text-sm text-mist/70 font-sans italic">An invitation to exclusivity</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-platinum font-light tracking-wide font-sans">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-midnight/50 border-charcoal text-ethereal placeholder:text-mist/50 font-sans"
                  placeholder="Your distinguished name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-platinum font-light tracking-wide font-sans">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-midnight/50 border-charcoal text-ethereal placeholder:text-mist/50 font-sans"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-platinum font-light tracking-wide font-sans">
                  Country
                </Label>
                <Select 
                  value={formData.country} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                >
                  <SelectTrigger className="bg-midnight/50 border-charcoal text-ethereal font-sans">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent className="bg-midnight border-charcoal">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="ch">Switzerland</SelectItem>
                    <SelectItem value="ae">United Arab Emirates</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="luxury-button w-full text-lg py-6"
                disabled={!formData.name || !formData.email || !formData.country}
              >
                Request Private Consultation
              </Button>
            </div>

            <p className="text-xs text-mist/60 font-sans italic leading-relaxed">
              By submitting this form, you enter our circle of exclusivity. 
              Your privacy is as sacred as your unique essence.
            </p>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="mt-16 animate-ethereal-fade" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-gold/70 font-light tracking-widest uppercase font-sans mb-4">
            For Immediate Inquiries
          </p>
          <p className="text-mist/70 font-sans">
            info@scentedsage.com | +1-437-230-0427
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;