
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Brain, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Marie Dubois",
      specialty: "Médecin Généraliste",
      experience: "15 ans d'expérience",
      description: "Spécialisée dans la médecine familiale et la prévention",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Pierre Martin",
      specialty: "Cardiologue",
      experience: "12 ans d'expérience",
      description: "Expert en cardiologie préventive et interventionnelle",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Sophie Laurent",
      specialty: "Psychologue",
      experience: "10 ans d'expérience",
      description: "Thérapies cognitivo-comportementales et soutien familial",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1594824758577-87db24e70bb6?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Julie Moreau",
      specialty: "Infirmière",
      experience: "8 ans d'expérience",
      description: "Soins infirmiers et coordination des parcours de soins",
      icon: User,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const profiles = [
    {
      title: "Stagiaires",
      description: "Stages d'externat et formations",
      path: "/stagiaires",
      icon: "📚",
      color: "medical-primary"
    },
    {
      title: "Internes",
      description: "Internat de médecine générale",
      path: "/internes",
      icon: "🏥",
      color: "medical-secondary"
    },
    {
      title: "Remplacements",
      description: "Remplacements ponctuels",
      path: "/remplacements",
      icon: "👨‍⚕️",
      color: "medical-accent"
    },
    {
      title: "Installation",
      description: "Collaboration et installation",
      path: "/installation",
      icon: "🤝",
      color: "medical-green"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Une équipe de professionnels dévoués à votre santé, alliant expertise médicale et approche humaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-medical-gray-200/50 shadow-lg animate-slide-in-left bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-medical-primary/30"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-medical-primary rounded-full p-2">
                      <IconComponent className="h-4 w-4 text-medical-gray-800" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-medical-gray-800 mb-2">
                    {member.name}
                  </h3>
                  
                  <Badge className="mb-3 bg-medical-secondary/20 text-medical-gray-700 border-medical-secondary/30">
                    {member.specialty}
                  </Badge>
                  
                  <p className="text-sm text-medical-accent font-medium mb-3">
                    {member.experience}
                  </p>
                  
                  <p className="text-medical-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-2xl p-8 text-medical-gray-800 animate-fade-in shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Rejoignez Notre Équipe</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Que vous soyez étudiant en médecine, interne, ou praticien confirmé, découvrez les opportunités qui correspondent à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <Link key={index} to={profile.path}>
                <Card className="bg-white/30 backdrop-blur-sm border-white/40 hover:bg-white/50 transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{profile.icon}</div>
                    <h4 className="text-xl font-bold text-medical-gray-800 mb-2">{profile.title}</h4>
                    <p className="text-medical-gray-700 text-sm mb-4">{profile.description}</p>
                    <Button variant="secondary" size="sm" className="group-hover:scale-105 transition-transform bg-white/70 text-medical-gray-800">
                      En savoir plus <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
