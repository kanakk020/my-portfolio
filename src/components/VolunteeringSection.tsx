
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, HandHelping } from 'lucide-react';

interface VolunteeringEvent {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const volunteeringEvents: VolunteeringEvent[] = [
  {
    id: 1,
    name: "Web and Ai Connect",
    role: "Organizer",
    description: "Organized Web & AI Connect, a focused tech talk exploring the intersection of web development and artificial intelligence. Curated expert speakers, managed event flow, and facilitated engaging discussions on real-world AI integration in modern web technologies.",
    image: "/images/webai.jpg",
  },
  {
    id: 2,
    name: "AlgoOps 25",
    role: "Organizer",
    description: "Organized Algo Ops, a tech event centered on the convergence of DevOps practices and Data Structures & Algorithms (DSA). The event featured expert talks on optimizing DevOps pipelines using algorithmic approaches, improving system performance, and leveraging DSA in real-world applications. ",
    image: "/images/algo.jpg",
  },
  {
    id: 3,
    name: "Gdg Gurugram",
    role: "Event Management",
    description: "Volunteered in event management at GDG Gurugram, assisting with the organization of tech events, workshops, and community meetups. Supported logistics, speaker coordination, and attendee engagement to ensure smooth event execution. Contributed to creating a collaborative environment for developers to learn, share, and connect.",
    image: "/images/gdg.jpg",
  },

  {
    id: 3,
    name: "AI Community",
    role: "Event Management",
    description: "Volunteered in event management at AI community, supporting the organization of tech events, workshops, and community meetups. Assisted with logistics, speaker coordination, and audience engagement to ensure smooth event execution. Helped foster a collaborative environment where developers could explore Google technologies and share insights with the community.",
    image: "/images/tfug.jpg",
  },
];

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-20 bg-[#d1cee2]">
       <div className="flex justify-center mb-10">
  <h2 className="text-4xl font-semibold border-b-4 border-portfolio-primary pb-2">
    Volunteer
  </h2>
</div>
      <div className="container mx-auto px-4">
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteeringEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden card-hover">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{event.role}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">{event.name}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
