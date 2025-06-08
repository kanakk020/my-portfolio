import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "This project is a clone of the popular e-commerce website Amazon, created using only HTML and CSS. The goal is to replicate the look and feel of the Amazon website, focusing on the user interface and layout.",
    image: "/images/Amazonclone.png",
    technologies: ["HTML", "CSS"],
    demoLink: "https://amazonclonebykanak.netlify.app/",
    githubLink: "https://github.com/kanakk020/amazon-clone",
  },
  {
    id: 2,
    title: "Ment AI",
    description:
      "MentAI is a React-based chatbot application that aims to provide emotional support, personalized recommendations, and mood tracking features. It uses natural language processing and machine learning algorithms to understand and respond to user inputs.",
    image: "/images/Mentai.png",
    technologies: ["Tailwind", "React", "javascript", "Node JS ", "AI Model : llama"],
    demoLink: "https://mentai.netlify.app/",
    githubLink: "https://github.com/kanakk020/Ment-AI",
  },
  {
    id: 3,
    title: "Age-Well",
    description:
      "A modern, AI-powered web application for personalized nutrition and wellness tracking—tailored for individuals across all age groups.",
    image:
      "/images/agewell.png",
    technologies: ["JavaScript","React","Tailwind CSS" , "Typescript", "Node.js" , "superbase"],
    demoLink: "https://age-well-diet.vercel.app/",
    githubLink: "https://github.com/kanakk020/AgeWellDiet",
  },
  {
    id: 4,
    title: "Sky-View",
    description:
      "Real-time weather app built with React, Tailwind, and OpenWeather API — featuring time-based backgrounds, location-based weather, and 4-day forecast.",
    image:
      "/images/skyview.png",
    technologies: ["React", "Tailwind CSS", "JavaScript" , "API-openweather"],
    demoLink: "https://sky-view-eta.vercel.app/",
    githubLink: "https://github.com/kanakk020/Sky-view",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
      <div className="flex justify-center mb-10">
  <h2 className="text-3xl font-semibold border-b-4 border-portfolio-primary pb-2">
My Projects  </h2>
</div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-portfolio-light text-portfolio-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-portfolio-primary hover:bg-portfolio-secondary"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/kanakk020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-secondary px-6 py-3 text-lg"
            >
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
