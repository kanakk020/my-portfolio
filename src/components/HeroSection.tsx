
import React from 'react';
import { ArrowDown, Terminal, Laptop, Globe, Code, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 overflow-hidden">
  {/* Purple to White Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-white opacity-90 z-0"></div>

  {/* Very subtle pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(45deg,_#D1C4E9_10%,_#B39DDB_40%)] opacity-10 z-10"></div>

{/* Floating elements animation */}
<div className="absolute w-full h-full overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-1/4 text-purple-900 animate-pulse" style={{ animationDuration: '4s' }}>
    <Terminal size={64} />
  </div>
  <div className="absolute bottom-1/4 right-1/5 text-blue-800 animate-pulse" style={{ animationDuration: '6s' }}>
    <Laptop size={80} />
  </div>
  <div className="absolute top-2/3 left-1/3 text-indigo-800 animate-pulse" style={{ animationDuration: '5s' }}>
    <Globe size={56} />
  </div>
  <div className="absolute top-24 right-1/2 text-blue-700 animate-pulse" style={{ animationDuration: '7s' }}>
    <Code size={72} />
  </div>
  <div className="absolute top-32 left-20 text-gray-800 animate-pulse" style={{ animationDuration: '8s' }}>
    <Github size={64} />
  </div>
</div>


      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-medium text-black text-portfolio-primary mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-dark opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              KANAK SAINI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Aspiring Software Developer |  Learning by Building 
            </p>
            <div
  className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
  style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
>
  <Button 
    className="bg-purple-800 hover:bg-purple-900 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  >
    <FileText size={18} />
    View My Projects
  </Button>
  
  <Button 
    variant="outline" 
    className="text-purple-800 border-purple-800 hover:bg-purple-800/10 transition-all duration-300 transform hover:scale-110"
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Contact Me
  </Button>
</div>

          </div>
          
          <div className="lg:w-1/2 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-portfolio-primary">
              <img 
                src="Kanak.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll down indicator */}
        <div className="absolute top-[130%] left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s' }}>
          <a 
            href="#about" 
            className="flex flex-col items-center group"
          >
           <span className="mb-2 text-sm font-medium text-purple-800 group-hover:text-purple-800 transition-colors duration-300">
  Discover More
</span>
<div className="relative w-10 h-10 rounded-full bg-purple-800/10 flex items-center justify-center group-hover:bg-purple-800/20 transition-all duration-300 group-hover:scale-110">
  <ArrowDown 
    size={20} 
    className="text-purple-800 group-hover:text-purple-800 transition-colors duration-300"
  />
</div>

          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
