import React from 'react';
import { ArrowDown, Terminal, Laptop, Globe, Code, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 pb-8 overflow-hidden">
      {/* Purple to White Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-white opacity-90 z-0"></div>

      {/* Very subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_#D1C4E9_10%,_#B39DDB_40%)] opacity-10 z-10"></div>

      {/* Floating elements animation - Responsive */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {/* Terminal Icon */}
        <div className="absolute top-[15%] sm:top-1/4 left-[10%] sm:left-1/4 text-purple-900 animate-pulse" 
             style={{ animationDuration: '4s' }}>
          <Terminal className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[64px] lg:h-[64px]" />
        </div>
        
        {/* Laptop Icon */}
        <div className="absolute bottom-[20%] sm:bottom-1/4 right-[10%] sm:right-1/5 text-blue-800 animate-pulse" 
             style={{ animationDuration: '6s' }}>
          <Laptop className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px]" />
        </div>
        
        {/* Globe Icon */}
        <div className="absolute top-[60%] sm:top-2/3 left-[20%] sm:left-1/3 text-indigo-800 animate-pulse" 
             style={{ animationDuration: '5s' }}>
          <Globe className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-[56px] lg:h-[56px]" />
        </div>
        
        {/* Code Icon */}
        <div className="absolute top-[10%] sm:top-24 right-[40%] sm:right-1/2 text-blue-700 animate-pulse" 
             style={{ animationDuration: '7s' }}>
          <Code className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]" />
        </div>
        
        {/* Github Icon */}
        <div className="absolute top-[25%] sm:top-32 left-[5%] sm:left-20 text-gray-800 animate-pulse" 
             style={{ animationDuration: '8s' }}>
          <Github className="w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[64px] lg:h-[64px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
           <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-purple-900 mb-3 md:mb-4 opacity-0 animate-fade-in"
     style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
  Hello, I'm
</h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-portfolio-dark opacity-0 animate-fade-in" 
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              KANAK SAINI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 opacity-0 animate-fade-in" 
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Aspiring Software Developer | Learning by Building 
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" 
                 style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Button 
                className="w-full sm:w-auto bg-purple-800 hover:bg-purple-900 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText size={18} />
                View My Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full sm:w-auto text-purple-800 border-purple-800 hover:bg-purple-800/10 transition-all duration-300 transform hover:scale-110"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 opacity-0 animate-fade-in" 
               style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-portfolio-primary">
              <img 
                src="Kanak.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-[40%] sm:left-[45%] md:left-1/2 transform -translate-x-1/2 cursor-pointer z-20 animate-bounce hover:opacity-80 transition-opacity"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm md:text-base text-purple-600/90 mb-1 sm:mb-2">Scroll Down</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600/90" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
