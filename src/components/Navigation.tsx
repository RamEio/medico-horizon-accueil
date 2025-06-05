
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = ({ transparent = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClasses = transparent 
    ? "bg-white/10 backdrop-blur-md border-white/20" 
    : "bg-white/70 backdrop-blur-md border-medical-gray-200/30 shadow-sm";

  const textClasses = transparent ? "text-white" : "text-medical-gray-800";
  const logoClasses = transparent ? "text-white" : "text-medical-gray-800";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${navClasses}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/14428e7d-807e-4d91-8238-d05eb65e7255.png" 
              alt="Le Bellimont Santé" 
              className="h-12 w-auto"
            />
            <div className={logoClasses}>
              <h2 className="font-bold text-lg">LE BELLIMONT SANTÉ</h2>
              <p className="text-sm opacity-90">MAISON DE SANTÉ PLURIDISCIPLINAIRE</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${textClasses}`}>
            <Link to="/stagiaires" className="hover:text-medical-primary transition-colors">Stagiaires</Link>
            <Link to="/internes" className="hover:text-medical-primary transition-colors">Internes</Link>
            <Link to="/remplacements" className="hover:text-medical-primary transition-colors">Remplacements</Link>
            <Link to="/installation" className="hover:text-medical-primary transition-colors">Installation</Link>
            <Link to="/#contact" className="hover:text-medical-primary transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${textClasses}`}>
            <Link 
              to="/stagiaires" 
              className="block hover:text-medical-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stagiaires
            </Link>
            <Link 
              to="/internes" 
              className="block hover:text-medical-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Internes
            </Link>
            <Link 
              to="/remplacements" 
              className="block hover:text-medical-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Remplacements
            </Link>
            <Link 
              to="/installation" 
              className="block hover:text-medical-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Installation
            </Link>
            <Link 
              to="/#contact" 
              className="block hover:text-medical-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
