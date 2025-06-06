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
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      color: "medical-primary"
    },
    {
      name: "Dr. Pierre Martin",
      specialty: "Cardiologue",
      experience: "12 ans d'expérience",
      description: "Expert en cardiologie préventive et interventionnelle",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      color: "medical-secondary"
    },
    {
      name: "Dr. Sophie Laurent",
      specialty: "Psychologue",
      experience: "10 ans d'expérience",
      description: "Thérapies cognitivo-comportementales et soutien familial",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1594824758577-87db24e70bb6?w=400&h=400&fit=crop&crop=face",
      color: "medical-accent"
    },
    {
      name: "Julie Moreau",
      specialty: "Infirmière",
      experience: "8 ans d'expérience",
      description: "Soins infirmiers et coordination des parcours de soins",
      icon: User,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
      color: "medical-green"
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
    <section id="equipe" className="py-32 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Notre <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-medical-primary to-medical-secondary">Équipe</span>
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe de professionnels dévoués à votre santé, alliant expertise médicale et approche humaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-medical-gray-200/50 shadow-lg animate-fade-in-up bg-white/90 backdrop-blur-sm" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl mx-auto object-cover border-4 border-medical-primary/30 group-hover:border-medical-primary/50 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-${member.color} rounded-xl p-3 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-medical-gray-800 mb-3">
                    {member.name}
                  </h3>
                  
                  <Badge className={`mb-4 bg-${member.color}/20 text-${member.color} border-${member.color}/30 text-base px-4 py-1`}>
                    {member.specialty}
                  </Badge>
                  
                  <p className={`text-base text-${member.color} font-medium mb-4`}>
                    {member.experience}
                  </p>
                  
                  <p className="text-medical-gray-600 text-base leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-3xl p-12 text-medical-gray-800 animate-fade-in-up shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Rejoignez Notre Équipe</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Que vous soyez étudiant en médecine, interne, ou praticien confirmé, découvrez les opportunités qui correspondent à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profiles.map((profile, index) => (
              <Link 
                key={index} 
                to={profile.path}
                className="group block"
              >
                <Card className="bg-white/30 backdrop-blur-sm border-white/40 hover:bg-white/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{profile.icon}</div>
                    <h4 className="text-2xl font-bold text-medical-gray-800 mb-3">{profile.title}</h4>
                    <p className="text-medical-gray-700 text-base mb-6">{profile.description}</p>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="group-hover:scale-105 transition-all duration-300 bg-white/70 text-medical-gray-800 hover:bg-white/90 px-6"
                    >
                      En savoir plus <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
