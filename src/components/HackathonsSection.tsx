
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Award } from 'lucide-react';

interface Hackathon {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    name: "SIH 2024",
    description: "Participated in Smart India Hackathon (SIH) 2024. Advanced through the internal hackathon round and secured a position in the top 25 teams. Collaborated on innovative tech solutions under time constraints, focusing on problem-solving, teamwork, and real-world application of skills.",
    location: "Online",
    image: "https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "HackWithMAIT 5.0",
    description: "Participated in HackWithMAIT 5.0 and ranked in the top 15 under the Innovation Track. Developed a creative tech solution focused on real-world impact, showcasing strong problem-solving, innovation, and teamwork throughout the hackathon.",
    location: "MAIT, Delhi",
    image: "/images/mait.png",
  },
  {
    id: 3,
    name: "HackIndia 2024",
    description: "Participated in HackIndia 2024, a national-level hackathon bringing together developers and innovators from across the country. Worked on building a scalable tech solution within 36 hours, focusing on innovation, collaboration, and rapid prototyping in a high-pressure environment.",
    location: "Manav Rachna University, Faridabad",
    image: "/images/hackindia.jpg",
  },
  {
    id: 4,
    name: "Sprinthacks 3.0",
    description: "Participated in SprintHacks 3.0, a 24-hour hackathon with 30 teams, securing 7th place by developing an innovative tech solution through collaboration, rapid prototyping, and problem-solving under pressure.",
    location: " Kiet, Ghaziabad",
    image: "/images/sprint.jpg",
  },
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
      <div className="flex justify-center mb-10">
  <h2 className="text-3xl font-semibold border-b-4 border-portfolio-primary pb-2">
Hackathons  </h2>
</div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.id} className="overflow-hidden card-hover">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.name}
                  className="w-full h-full object-cover"
                />
                
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">{hackathon.name}</CardTitle>
                <CardDescription>{hackathon.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 text-sm">
                  
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-portfolio-primary" />
                    <span>{hackathon.location}</span>
                  </div>
                
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/kanaksaini020/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-portfolio-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-portfolio-dark transition"
          >
            For more, check out my LinkedIn
          </a>
        </div>
      </div>
    </section>
   
  );
};

export default HackathonsSection;
