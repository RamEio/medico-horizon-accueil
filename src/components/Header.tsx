
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          {/* Fallback background image */}
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/14428e7d-807e-4d91-8238-d05eb65e7255.png" 
                alt="Le Bellimont Santé" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <h2 className="font-bold text-lg">LE BELLIMONT SANTÉ</h2>
                <p className="text-sm opacity-90">MAISON DE SANTÉ PLURIDISCIPLINAIRE</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#equipe" className="hover:text-medical-accent transition-colors">Équipe</a>
              <a href="#avantages" className="hover:text-medical-accent transition-colors">Avantages MSP</a>
              <a href="#contact" className="hover:text-medical-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Votre Santé, <br />
          <span className="text-gradient">Notre Priorité</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Une approche pluridisciplinaire au cœur de Bellimont pour votre bien-être et celui de nos futurs praticiens
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-medical-primary/80 hover:bg-medical-primary text-medical-gray-800 border-0 px-8 py-3">
            <MapPin className="mr-2 h-5 w-5" />
            Découvrir notre cabinet
          </Button>
          <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/20 hover:text-white px-8 py-3">
            <Phone className="mr-2 h-5 w-5" />
            Nous contacter
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>123 Rue de Bellimont, 75000 Paris</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>01 23 45 67 89</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@bellimont-sante.fr</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
