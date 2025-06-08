
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import VolunteeringSection from '@/components/VolunteeringSection';
import HackathonsSection from '@/components/HackathonsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll reveal effect for sections
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fade-in');
          section.style.opacity = '1';
          // Add staggered entrance for each section
          section.style.animationDelay = `${index * 0.1}s`;
        }
      });
    };

    // Add parallax effect for background elements
    const parallaxEffect = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollY * parseFloat(speed));
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Initial check
    revealSections();
    parallaxEffect();
    
    // Add event listeners
    window.addEventListener('scroll', revealSections);
    window.addEventListener('scroll', parallaxEffect);
    
    return () => {
      window.removeEventListener('scroll', revealSections);
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <VolunteeringSection />
      <HackathonsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
