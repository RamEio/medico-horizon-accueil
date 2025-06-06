import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
          {/* Fallback background image */}
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Navigation */}
      <Navigation transparent={true} />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Votre Santé, <br />
          <span className="text-gradient">Notre Priorité</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Une approche pluridisciplinaire au cœur de Bellimont pour votre bien-être et celui de nos futurs praticiens
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-medical-primary/80 hover:bg-medical-primary text-medical-gray-800 border-0 px-8 py-3">
            <MapPin className="mr-2 h-5 w-5" />
            Découvrir notre cabinet
          </Button>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-3">
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
