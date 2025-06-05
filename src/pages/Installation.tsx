
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Home, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Installation = () => {
  const collaborationTypes = [
    {
      title: "Collaboration libérale",
      description: "Exercice en tant que collaborateur avant installation",
      advantages: ["Apprentissage de la gestion", "Constitution de patientèle", "Revenus progressifs"],
      color: "medical-primary"
    },
    {
      title: "Association",
      description: "Intégration progressive en tant qu'associé",
      advantages: ["Partage des investissements", "Développement commun", "Sécurité financière"],
      color: "medical-secondary"
    },
    {
      title: "Succession progressive",
      description: "Reprise planifiée de patientèle existante",
      advantages: ["Transmission de patientèle", "Accompagnement personnalisé", "Continuité des soins"],
      color: "medical-accent"
    }
  ];

  const support = [
    {
      icon: Users,
      title: "Accompagnement administratif",
      description: "Aide aux démarches d'installation et formalités"
    },
    {
      icon: Home,
      title: "Locaux équipés",
      description: "Bureaux médicaux modernes et plateau technique"
    },
    {
      icon: TrendingUp,
      title: "Développement d'activité",
      description: "Stratégies de croissance et optimisation de la pratique"
    },
    {
      icon: Handshake,
      title: "Réseau professionnel",
      description: "Intégration dans l'écosystème médical local"
    }
  ];

  return (
    <div className="page-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-6">🤝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            <span className="text-gradient">Collaboration</span> et Installation
          </h1>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Développez votre carrière médicale dans un environnement collaboratif et bienveillant
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-medical-gray-800 mb-8 text-center">
            Modalités de collaboration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                <CardHeader className="text-center">
                  <CardTitle className={`text-${type.color}`}>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray-600 mb-6 text-center">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-medical-gray-800 mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {type.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${type.color} rounded-full`}></div>
                          <span className="text-medical-gray-600 text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Notre accompagnement</h2>
            <div className="space-y-6">
              {support.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-medical-green/10 rounded-lg p-3">
                          <IconComponent className="h-6 w-6 text-medical-green" />
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
          </div>

          <div>
            <h2 className="text-3xl font-bold text-medical-gray-800 mb-8">Profil recherché</h2>
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
              <CardContent className="p-6">
                <h3 className="font-bold text-medical-gray-800 mb-4">Nous recherchons :</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                    <span className="text-medical-gray-600">Médecins généralistes diplômés</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                    <span className="text-medical-gray-600">Motivation pour le travail en équipe</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                    <span className="text-medical-gray-600">Projet d'installation moyen/long terme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                    <span className="text-medical-gray-600">Valeurs humanistes et bienveillance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-medical-green to-medical-accent text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Prenez rendez-vous</h3>
                <p className="mb-6 opacity-90">
                  Discutons ensemble de votre projet professionnel et des modalités de collaboration
                </p>
                <div className="space-y-3">
                  <Button variant="secondary" size="lg" className="w-full">
                    Planifier un entretien
                  </Button>
                  <p className="text-center text-sm opacity-75">
                    Entretien sans engagement • Confidentialité garantie
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
