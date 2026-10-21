import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowRight, Download, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy for active section indicator
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 md:py-4 px-4 sm:px-6 lg:px-8',
        isScrolled
          ? 'bg-[#050807]/90 backdrop-blur-xl border-b border-emerald-950/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-[#050807]/50 backdrop-blur-md border-b border-emerald-950/20'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo linking to Top */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2 select-none text-left"
        >
          <span className="font-script text-3xl sm:text-4xl font-semibold tracking-wide text-white transition-all duration-300 group-hover:scale-105">
            Kanak <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">Saini</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#09130e]/85 border border-emerald-500/15 rounded-full px-3 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 relative',
                  isActive
                    ? 'text-emerald-300 bg-emerald-950/80 border border-emerald-500/35 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                    : 'text-gray-300 hover:text-white hover:bg-emerald-950/30'
                )}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Download Resume Button */}
          <a
            href="/kanakresume.pdf"
            download="Kanak_Saini_Resume.pdf"
            className="btn-glass text-xs sm:text-sm !py-2 !px-3.5 border-emerald-500/20 hover:border-emerald-500/40"
            title="Download Resume PDF"
          >
            <Download size={14} className="text-emerald-400" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Let's Connect CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-emerald text-xs sm:text-sm !py-2 !px-4 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
          >
            <span>Let's Connect</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="/kanakresume.pdf"
            download="Kanak_Saini_Resume.pdf"
            className="p-2 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs"
            aria-label="Download Resume"
          >
            <Download size={16} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-[#0a1510] border border-emerald-500/25 text-emerald-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden mt-3 bento-card p-4 mx-2 bg-[#07110c]/95 border-emerald-500/30 animate-fade-in shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between text-left',
                    isActive
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/35 font-semibold'
                      : 'text-gray-300 hover:bg-emerald-950/30 hover:text-white'
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && <Sparkles size={12} className="text-emerald-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 mt-3 border-t border-emerald-950/50 flex flex-col sm:flex-row gap-2">
            <a
              href="/kanakresume.pdf"
              download="Kanak_Saini_Resume.pdf"
              className="btn-glass text-xs justify-center py-2.5 flex-1"
            >
              <Download size={14} className="text-emerald-400" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-emerald text-xs justify-center py-2.5 flex-1"
            >
              <span>Let's Connect</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
