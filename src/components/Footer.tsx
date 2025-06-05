
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-medical-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo et Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/14428e7d-807e-4d91-8238-d05eb65e7255.png" 
                alt="Le Bellimont Santé" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-xl">LE BELLIMONT SANTÉ</h3>
                <p className="text-sm opacity-80">MAISON DE SANTÉ PLURIDISCIPLINAIRE</p>
              </div>
            </div>
            <p className="text-medical-gray-300 leading-relaxed mb-6 max-w-md">
              Notre maison de santé pluridisciplinaire offre une prise en charge globale et coordonnée, 
              alliant expertise médicale et approche humaine au service de votre bien-être.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-medical-primary/30 flex items-center justify-center hover:bg-medical-primary/40 transition-colors cursor-pointer">
                <span className="text-medical-primary font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-medical-secondary/30 flex items-center justify-center hover:bg-medical-secondary/40 transition-colors cursor-pointer">
                <span className="text-medical-secondary font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Informations de Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-medical-accent">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-medical-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-medical-gray-300 text-sm">
                    123 Rue de Bellimont<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical-secondary flex-shrink-0" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-medical-gray-300 text-sm">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-medical-green flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-medical-gray-300 text-sm">contact@bellimont-sante.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-medical-accent">Horaires d'Ouverture</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-medical-purple flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p className="text-medical-gray-300">8h00 - 19h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-medical-purple flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Samedi</p>
                  <p className="text-medical-gray-300">9h00 - 17h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-medical-gray-400 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Dimanche</p>
                  <p className="text-medical-gray-400">Fermé</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-medical-primary/20 rounded-lg border border-medical-primary/30">
              <p className="text-sm text-medical-primary font-medium mb-2">Urgences</p>
              <p className="text-xs text-medical-gray-300">
                En cas d'urgence en dehors des heures d'ouverture, contactez le 15 (SAMU) ou le 112
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-medical-gray-400 text-sm">
              © 2024 Le Bellimont Santé. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-medical-gray-400 hover:text-medical-accent text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-medical-gray-400 hover:text-medical-accent text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-medical-gray-400 hover:text-medical-accent text-sm transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
