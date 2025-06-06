import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  BookOpen, 
  Handshake, 
  Award, 
  Shield,
  Stethoscope,
  Heart,
  Lightbulb,
  Target
} from "lucide-react";

const Advantages = () => {
  const patientAdvantages = [
    {
      icon: Users,
      title: "Équipe Pluridisciplinaire",
      description: "Accès à différents spécialistes en un seul lieu pour une prise en charge complète",
      color: "medical-primary"
    },
    {
      icon: Clock,
      title: "Horaires Étendus",
      description: "Consultations possibles en soirée et le samedi pour s'adapter à votre emploi du temps",
      color: "medical-secondary"
    },
    {
      icon: Shield,
      title: "Suivi Coordonné",
      description: "Communication optimisée entre praticiens pour un suivi médical cohérent",
      color: "medical-accent"
    },
    {
      icon: Heart,
      title: "Approche Humaine",
      description: "Prise en charge personnalisée avec une attention particulière à votre bien-être",
      color: "medical-green"
    }
  ];

  const professionalAdvantages = [
    {
      icon: BookOpen,
      title: "Formation Continue",
      description: "Accès à des formations régulières et échanges entre praticiens expérimentés",
      color: "medical-primary"
    },
    {
      icon: Handshake,
      title: "Travail Collaboratif",
      description: "Environnement de travail stimulant favorisant l'échange de bonnes pratiques",
      color: "medical-secondary"
    },
    {
      icon: Award,
      title: "Développement Professionnel",
      description: "Opportunités d'évolution et de spécialisation dans un cadre bienveillant",
      color: "medical-accent"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Utilisation des dernières technologies médicales et méthodes de soins",
      color: "medical-green"
    },
    {
      icon: Target,
      title: "Mentoring",
      description: "Accompagnement personnalisé pour les jeunes praticiens et étudiants",
      color: "medical-lightBlue"
    },
    {
      icon: Stethoscope,
      title: "Équipements Modernes",
      description: "Plateau technique de qualité pour exercer dans les meilleures conditions",
      color: "medical-purple"
    }
  ];

  return (
    <section id="avantages" className="py-32 bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Les <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-medical-primary to-medical-secondary">Avantages</span> de Notre MSP
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi patients et professionnels choisissent Le Bellimont Santé
          </p>
        </div>

        {/* Avantages pour les Patients */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-medical-gray-800 mb-4">
              Pour Nos <span className="text-medical-primary">Patients</span>
            </h3>
            <p className="text-lg text-medical-gray-600 max-w-2xl mx-auto">
              Une prise en charge globale et coordonnée pour votre santé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-medical-gray-200/50 shadow-lg animate-fade-in-up bg-white/90 backdrop-blur-sm" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-${advantage.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:bg-${advantage.color}/20`}>
                      <IconComponent className={`h-10 w-10 text-${advantage.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-medical-gray-800 mb-2">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-medical-gray-600 text-base text-center leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Avantages pour les Professionnels */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-medical-gray-800 mb-4">
              Pour Nos <span className="text-medical-secondary">Professionnels</span>
            </h3>
            <p className="text-lg text-medical-gray-600 max-w-2xl mx-auto">
              Un environnement propice à l'épanouissement professionnel et à l'excellence médicale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-medical-gray-200/50 shadow-lg animate-fade-in-up bg-white/90 backdrop-blur-sm" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-${advantage.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:bg-${advantage.color}/20`}>
                      <IconComponent className={`h-10 w-10 text-${advantage.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-medical-gray-800 mb-2">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-medical-gray-600 text-base text-center leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
