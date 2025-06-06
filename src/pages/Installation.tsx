import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Home, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

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
      description: "Aide aux démarches d'installation et formalités",
      color: "medical-primary"
    },
    {
      icon: Home,
      title: "Locaux équipés",
      description: "Bureaux médicaux modernes et plateau technique",
      color: "medical-secondary"
    },
    {
      icon: TrendingUp,
      title: "Développement d'activité",
      description: "Stratégies de croissance et optimisation de la pratique",
      color: "medical-accent"
    },
    {
      icon: Handshake,
      title: "Réseau professionnel",
      description: "Intégration dans l'écosystème médical local",
      color: "medical-green"
    }
  ];

  return (
    <div className="page-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-6xl mb-6">🤝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            <span className="text-gradient">Installation</span> et Collaboration
          </h1>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Rejoignez notre MSP et développez votre activité dans un environnement professionnel de qualité
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-medical-gray-800 mb-8 text-center">
            Nos <span className="text-medical-primary">Formules</span> de Collaboration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-medical-gray-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <CardTitle className={`text-${type.color} text-2xl font-bold mb-2`}>{type.title}</CardTitle>
                  <p className="text-medical-gray-600 mb-6">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-medical-gray-800 mb-4 text-center">Avantages :</h4>
                    <ul className="space-y-3">
                      {type.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${type.color} rounded-full`}></div>
                          <span className="text-medical-gray-600">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-medical-gray-800 mb-8 text-center">
            Notre <span className="text-medical-secondary">Accompagnement</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {support.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-medical-gray-200/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-${item.color}/20 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-6 w-6 text-${item.color}`} />
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

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-medical-gray-800 mb-8 text-center">
            Profil <span className="text-medical-accent">Recherché</span>
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-medical-gray-200/50">
            <CardContent className="p-8">
              <h3 className="font-bold text-medical-gray-800 mb-6 text-center text-xl">Nous recherchons :</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-medical-primary rounded-full"></div>
                  <span className="text-medical-gray-600">Médecins généralistes diplômés</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-medical-primary rounded-full"></div>
                  <span className="text-medical-gray-600">Motivation pour le travail en équipe</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-medical-primary rounded-full"></div>
                  <span className="text-medical-gray-600">Projet d'installation moyen/long terme</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-medical-primary rounded-full"></div>
                  <span className="text-medical-gray-600">Valeurs humanistes et bienveillance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-medical-primary to-medical-secondary text-white shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Prenez rendez-vous pour discuter de votre projet d'installation et découvrir nos opportunités de collaboration
            </p>
            <a 
              href="https://maiamedical.fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white/90 text-medical-gray-800 hover:bg-white transition-colors duration-300"
              >
                Planifier un entretien
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Installation;
