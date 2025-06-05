
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <section id="avantages" className="py-20 bg-gradient-to-b from-medical-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Les <span className="text-gradient">Avantages</span> de Notre MSP
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi patients et professionnels choisissent Le Bellimont Santé
          </p>
        </div>

        {/* Avantages pour les Patients */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-medical-gray-800 mb-4">
              Pour Nos <span className="text-medical-primary">Patients</span>
            </h3>
            <p className="text-medical-gray-600 max-w-2xl mx-auto">
              Une prise en charge globale et coordonnée pour votre santé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-${advantage.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-8 w-8 text-${advantage.color}`} />
                    </div>
                    <CardTitle className="text-lg text-medical-gray-800">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-medical-gray-600 text-sm text-center leading-relaxed">
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-medical-gray-800 mb-4">
              Pour Nos <span className="text-medical-secondary">Professionnels</span>
            </h3>
            <p className="text-medical-gray-600 max-w-2xl mx-auto">
              Un environnement propice à l'épanouissement professionnel et à l'excellence médicale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {professionalAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${advantage.color}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 text-${advantage.color}`} />
                    </div>
                    <CardTitle className="text-lg text-medical-gray-800">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-medical-gray-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-2xl p-8 text-white text-center animate-fade-in">
            <h4 className="text-2xl font-bold mb-4">Intéressé par une Collaboration ?</h4>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Que vous soyez étudiant en médecine, interne, ou praticien confirmé, nous serions ravis d'échanger avec vous sur les opportunités de collaboration
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                📚 Stages d'externat
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🏥 Internat
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                👨‍⚕️ Remplacements
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🤝 Collaborations
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
