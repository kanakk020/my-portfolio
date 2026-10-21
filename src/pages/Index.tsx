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
  // Lightweight Intersection Observer for subtle scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => {
      section.classList.add('transition-all', 'duration-500', 'opacity-0', 'translate-y-5');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050807] text-[#F5F7F5] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative">
      {/* Background Subtle Ambient Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[400px] bg-emerald-500/4 blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emerald-700/4 blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-noise opacity-20 pointer-events-none -z-10"></div>

      {/* Sticky / Fixed Navigation Bar */}
      <Navbar />

      <main className="w-full relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Section */}
        <div className="scroll-reveal">
          <AboutSection />
        </div>

        {/* 3. Skills Section */}
        <div className="scroll-reveal">
          <SkillsSection />
        </div>

        {/* 4. Featured Projects Section */}
        <div className="scroll-reveal">
          <ProjectsSection />
        </div>

        {/* 5. Experience & Community Section */}
        <div className="scroll-reveal">
          <VolunteeringSection />
        </div>

        {/* 6. Achievements Section */}
        <div className="scroll-reveal">
          <HackathonsSection />
        </div>

        {/* 7. Contact Section */}
        <div className="scroll-reveal">
          <ContactSection />
        </div>

        {/* Footer with Scenic Quote Banner */}
        <div className="scroll-reveal">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
