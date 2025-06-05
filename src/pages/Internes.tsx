
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Users, BookOpen, Target } from "lucide-react";
import Navigation from "@/components/Navigation";

const Internes = () => {
  const internshipDetails = [
    {
      title: "Stage SASPAS",
      duration: "6 mois",
      description: "Stage Autonome en Soins Primaires Ambulatoires Supervisé",
      objectives: ["Autonomie progressive", "Gestion de patientèle", "Coordination interprofessionnelle"]
    },
    {
      title: "Stage libre",
      duration: "3-6 mois",
      description: "Stage optionnel pour approfondir la médecine générale",
      objectives: ["Perfectionnement technique", "Projet de recherche", "Préparation à l'installation"]
    }
  ];

  const supervision = [
    {
      icon: Target,
      title: "Supervision graduée",
      description: "Accompagnement progressif vers l'autonomie avec supervision adaptée à votre niveau"
    },
    {
      icon: BookOpen,
      title: "Formations complémentaires",
      description: "Accès aux formations DPC et sessions d'enseignement post-universitaire"
    },
    {
      icon: Users,
      title: "Travail en équipe",
      description: "Collaboration avec l'ensemble des professionnels de la MSP"
    },
    {
      icon: Stethoscope,
      title: "Plateau technique",
      description: "Utilisation d'équipements modernes et logiciels professionnels"
    }
  ];

  return (
    <div className="page-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-6">🏥</div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Internat de <span className="text-gradient">Médecine Générale</span>
          </h1>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Perfectionnez votre formation en médecine générale dans un environnement professionnel stimulant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Stages d'internat proposés</h2>
            <div className="space-y-8">
              {internshipDetails.map((internship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                  <CardHeader>
                    <CardTitle className="text-medical-secondary">{internship.title}</CardTitle>
                    <Badge className="w-fit bg-medical-primary/20 text-medical-gray-700">
                      {internship.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medical-gray-600 mb-6">{internship.description}</p>
                    <div>
                      <h4 className="font-semibold text-medical-gray-800 mb-3">Objectifs pédagogiques :</h4>
                      <ul className="space-y-2">
                        {internship.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-medical-secondary rounded-full"></div>
                            <span className="text-medical-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Modalités de supervision</h2>
            <div className="space-y-6">
              {supervision.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-medical-secondary/20 rounded-lg p-3">
                          <IconComponent className="h-6 w-6 text-medical-secondary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-medical-gray-800 mb-2">{item.title}</h3>
                          <p className="text-medical-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-medical-secondary to-medical-accent text-medical-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Conditions d'accueil</h3>
                <ul className="space-y-2 mb-6 opacity-90">
                  <li>• Agrément universitaire MSU</li>
                  <li>• Bureau individuel équipé</li>
                  <li>• Accès aux formations continues</li>
                  <li>• Intégration équipe médicale</li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full bg-white/80 text-medical-gray-800">
                  Candidater pour un stage
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internes;
