
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";

const Remplacements = () => {
  const replacementTypes = [
    {
      title: "Remplacements ponctuels",
      description: "Congés, formations, arrêts maladie",
      duration: "1 jour à 2 semaines",
      color: "medical-primary"
    },
    {
      title: "Remplacements réguliers",
      description: "Planning fixe hebdomadaire ou mensuel",
      duration: "Récurrent",
      color: "medical-secondary"
    },
    {
      title: "Remplacements d'été",
      description: "Période estivale et vacances scolaires",
      duration: "2-8 semaines",
      color: "medical-accent"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Équipe bienveillante",
      description: "Intégration rapide dans une équipe expérimentée et accueillante"
    },
    {
      icon: Shield,
      title: "Assurance incluse",
      description: "Couverture RCP et protection juridique pendant vos remplacements"
    },
    {
      icon: Clock,
      title: "Flexibilité horaire",
      description: "Adaptation possible selon vos disponibilités et contraintes"
    },
    {
      icon: Calendar,
      title: "Planning anticipé",
      description: "Organisation des remplacements avec préavis suffisant"
    }
  ];

  const requirements = [
    "Thèse de médecine soutenue",
    "Inscription à l'Ordre des Médecins",
    "Assurance RCP à jour",
    "Expérience en médecine générale souhaitée"
  ];

  return (
    <div className="page-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-6">👨‍⚕️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            <span className="text-gradient">Remplacements</span> Médicaux
          </h1>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Rejoignez notre réseau de remplaçants et exercez dans un environnement professionnel de qualité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {replacementTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
              <CardHeader>
                <CardTitle className={`text-${type.color}`}>{type.title}</CardTitle>
                <Badge className={`w-fit mx-auto bg-${type.color}/10 text-${type.color}`}>
                  {type.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Avantages du remplacement</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-medical-accent/10 rounded-lg p-3">
                          <IconComponent className="h-6 w-6 text-medical-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-medical-gray-800 mb-2">{benefit.title}</h3>
                          <p className="text-medical-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Prérequis</h2>
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                      <span className="text-medical-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-medical-primary to-medical-secondary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Rémunération attractive</h3>
                <ul className="space-y-2 mb-6 opacity-90">
                  <li>• Tarifs conventionnels sector 1</li>
                  <li>• Paiement rapide garanti</li>
                  <li>• Frais de déplacement pris en charge</li>
                  <li>• Prime d'intégration équipe</li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full">
                  Rejoindre notre réseau
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remplacements;
