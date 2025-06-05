
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Brain, User } from "lucide-react";

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

  return (
    <section id="equipe" className="py-20 bg-gradient-to-b from-white to-medical-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-800 mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Une équipe de professionnels dévoués à votre santé, alliant expertise médicale et approche humaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-medical-primary/20"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-medical-primary rounded-full p-2">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-medical-gray-800 mb-2">
                    {member.name}
                  </h3>
                  
                  <Badge className="mb-3 bg-medical-secondary/10 text-medical-secondary border-medical-secondary/20">
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

        <div className="mt-16 text-center bg-gradient-to-r from-medical-primary/10 to-medical-secondary/10 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-medical-gray-800 mb-4">
            Rejoignez Notre Équipe
          </h3>
          <p className="text-medical-gray-600 mb-6 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de nouveaux praticiens passionnés pour enrichir notre équipe pluridisciplinaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-medical-primary border-medical-primary">
              Stages disponibles
            </Badge>
            <Badge variant="outline" className="text-medical-secondary border-medical-secondary">
              Remplacements
            </Badge>
            <Badge variant="outline" className="text-medical-green border-medical-green">
              Collaborations
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
