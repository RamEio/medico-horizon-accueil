import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Navigation */}
      <Navigation transparent={true} />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Votre Santé, <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-medical-primary to-medical-secondary">
              Notre Priorité
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Une approche pluridisciplinaire au cœur de Bellimont pour votre bien-être et celui de nos futurs praticiens
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-medical-primary hover:bg-medical-primary/90 text-medical-gray-800 border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Découvrir notre cabinet
            </Button>
            <a 
              href="https://maiamedical.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Button 
                size="lg" 
                className="bg-medical-secondary hover:bg-medical-secondary/90 text-medical-gray-800 border-0 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-base">
            <div className="flex items-center group">
              <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-white/20 transition-colors duration-300">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="group-hover:text-medical-primary transition-colors duration-300">123 Rue de Bellimont, 75000 Paris</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-white/20 transition-colors duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <span className="group-hover:text-medical-primary transition-colors duration-300">01 23 45 67 89</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <span className="group-hover:text-medical-primary transition-colors duration-300">contact@bellimont-sante.fr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">Découvrir</span>
          <ChevronDown className="h-6 w-6 text-white/80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
