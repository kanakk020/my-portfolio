import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 pb-10 w-full border-t border-emerald-950/30 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Community & Moments Banner */}
        <div className="relative overflow-hidden mb-8 rounded-2xl border border-emerald-500/20 bg-[#050807] shadow-xl shadow-emerald-950/30 group">
          <div className="w-full aspect-[4/1] sm:aspect-[1432/352] min-h-[150px] sm:min-h-[180px] md:min-h-[220px] max-h-[300px] relative overflow-hidden">
            <img
              src="/images/bg.png"
              alt="Community, Hackathons & Moments"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105 saturate-100 group-hover:brightness-100 group-hover:scale-[1.01] transition-all duration-500"
            />
            {/* Subtle Vignette & Depth Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-[#030705]/20 to-black/30 pointer-events-none"></div>

            {/* Bottom Glass Quote Bar */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-t from-[#030705]/95 via-[#030705]/80 to-transparent backdrop-blur-[2px] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-emerald-500/10">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-emerald-400 font-serif text-lg leading-none select-none">“</span>
                <p className="font-serif italic text-xs sm:text-sm text-gray-200 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Driven by curiosity, fueled by community, engineered for impact.
                </p>
                <span className="text-emerald-400 font-serif text-lg leading-none select-none">”</span>
              </div>
              
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium tracking-wide">
                <Sparkles size={13} className="text-amber-300 animate-pulse" />
                <span>Community • Hackathons • Moments</span>
              </div>
            </div>
          </div>
        </div>


        {/* Main Footer Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('home')}
              className="font-script text-xl text-white font-bold hover:scale-105 transition-transform"
            >
              Kanak <span className="text-emerald-400">Saini</span>
            </button>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300 text-[11px]">Software Engineer</span>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[11px] text-gray-400">
              © {currentYear} Kanak Saini • All rights reserved
            </p>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-[#0a1510] border border-emerald-500/25 text-emerald-400 hover:text-white hover:bg-emerald-950/60 transition-all duration-200"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
