
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Stagiaires = () => {
  const stageTypes = [
    {
      title: "Stage d'observation (DFGSM2)",
      duration: "1-2 semaines",
      description: "Découverte de la médecine générale en cabinet de ville",
      requirements: ["Être en DFGSM2 ou DFGSM3", "Attestation d'assurance", "Motivation pour la médecine générale"]
    },
    {
      title: "Stage infirmier (DFGSM2-3)",
      duration: "4 semaines",
      description: "Apprentissage des gestes de soins et de la relation patient",
      requirements: ["Validation du DFGSM1", "Stage obligatoire du cursus", "Encadrement par notre équipe infirmière"]
    },
    {
      title: "Stage ambulatoire (DFASM)",
      duration: "6 semaines",
      description: "Immersion complète dans la pratique de la médecine générale",
      requirements: ["Être en DFASM", "Validation des stages hospitaliers", "Projet professionnel orienté médecine générale"]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Encadrement personnalisé",
      description: "Suivi individuel par un médecin senior expérimenté"
    },
    {
      icon: BookOpen,
      title: "Formation complète",
      description: "Apprentissage théorique et pratique de la médecine générale"
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Adaptation des horaires selon votre emploi du temps universitaire"
    },
    {
      icon: Award,
      title: "Validation",
      description: "Validation officielle de votre stage par l'université"
    }
  ];

  return (
    <div className="page-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Stages <span className="text-gradient">Étudiants</span>
          </h1>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Découvrez la médecine générale au sein de notre maison de santé pluridisciplinaire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Types de stages proposés</h2>
            <div className="space-y-6">
              {stageTypes.map((stage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                  <CardHeader>
                    <CardTitle className="text-medical-primary">{stage.title}</CardTitle>
                    <Badge className="w-fit bg-medical-secondary/20 text-medical-gray-700">
                      {stage.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medical-gray-600 mb-4">{stage.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-medical-gray-800">Prérequis :</h4>
                      <ul className="list-disc list-inside text-sm text-medical-gray-600 space-y-1">
                        {stage.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Pourquoi choisir notre MSP ?</h2>
            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-medical-primary/20 rounded-lg p-3">
                          <IconComponent className="h-6 w-6 text-medical-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-medical-gray-800 mb-2">{advantage.title}</h3>
                          <p className="text-medical-gray-600">{advantage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-medical-primary to-medical-secondary text-medical-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Candidature spontanée</h3>
                <p className="mb-6 opacity-90">
                  Envoyez-nous votre CV et lettre de motivation pour rejoindre notre équipe
                </p>
                <Button variant="secondary" size="lg" className="bg-white/80 text-medical-gray-800">
                  Postuler maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stagiaires;
