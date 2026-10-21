import React, { useState } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, ArrowDown, Code2, Copy, Check } from 'lucide-react';
import { SiReact, SiTypescript, SiPython } from 'react-icons/si';

const stats = [
  { value: '2+', label: 'SDE Internships' },
  { value: '4+', label: 'Leadership Roles' },
  { value: '2027', label: 'B.Tech Batch' },
];

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`const developer = {
  name: "Kanak Saini",
  role: "Full-Stack & AI/ML Engineer",
  location: "Delhi NCR, India",
  skills: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
  status: "Open to opportunities"
};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Restrained Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-emerald"></div>
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a13]/90 border border-emerald-500/25 text-emerald-300 text-[11px] sm:text-xs font-medium mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)] max-w-full text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="truncate sm:whitespace-normal">Final-year B.Tech CSE • KCC ITM (2023–2027)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.15] mb-3">
              Hi, I'm{' '}
              <span className="text-white">Kanak </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Saini
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-emerald-100/90 mb-3 max-w-lg leading-snug">
              Full-Stack Developer & Software Engineering Intern crafting responsive web apps and scalable systems.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 max-w-lg">
              Hands-on experience in React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Experienced in building scalable application modules, automation workflows, and user-centric interfaces. Passionate about solving real-world problems through technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-emerald group"
              >
                <span>View My Work</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="/kanakresume.pdf"
                download="Kanak_Saini_Resume.pdf"
                className="btn-glass"
              >
                <Download size={14} className="text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-emerald-950/60 w-full max-w-md">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight font-display">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-400/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Developer Code Terminal with Animations */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full mt-4 lg:mt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              
              {/* Pulsing Emerald Spotlight Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/25 via-emerald-400/15 to-transparent rounded-2xl blur-3xl -z-10 transform scale-100 animate-pulse-glow"></div>

              {/* Floating Tech Badge 1: React.js (Top Left) */}
              <div className="absolute -top-4 left-1 sm:-left-5 z-30 bento-card px-2.5 py-1.5 flex items-center gap-1.5 border-emerald-500/30 bg-[#07150e]/95 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.8)] animate-float pointer-events-auto hover:scale-105 transition-transform">
                <SiReact className="text-cyan-400 text-sm animate-[spin_10s_linear_infinite]" />
                <span className="text-[10px] font-mono font-semibold text-gray-200">React.js</span>
              </div>

              {/* Floating Tech Badge 2: TypeScript (Top Right) */}
              <div className="absolute -top-4 right-1 sm:-right-4 z-30 bento-card px-2.5 py-1.5 flex items-center gap-1.5 border-emerald-500/30 bg-[#07150e]/95 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.8)] animate-float-reverse pointer-events-auto hover:scale-105 transition-transform">
                <SiTypescript className="text-[#3178c6] text-xs" />
                <span className="text-[10px] font-mono font-semibold text-gray-200">TypeScript</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* Floating Tech Badge 3: Python AI (Right Middle) */}
              <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 z-30 bento-card px-2.5 py-1.5 hidden xs:flex items-center gap-1.5 border-emerald-500/30 bg-[#07150e]/95 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.8)] animate-float pointer-events-auto hover:scale-105 transition-transform">
                <SiPython className="text-amber-300 text-xs" />
                <span className="text-[10px] font-mono font-semibold text-gray-200">AI / ML</span>
              </div>

              {/* Decorative Handwritten Note: Above Card */}
              <div className="absolute -top-8 right-4 sm:right-8 z-20 font-handwriting text-emerald-300 text-xs sm:text-base font-bold flex items-center gap-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] pointer-events-none">
                <span>Turning ideas into impact</span>
                <Sparkles size={14} className="text-emerald-400 animate-pulse" />
              </div>

              {/* Developer Code Terminal Window */}
              <div className="bento-card relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#06120b]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-emerald-500/50 transition-all duration-300 group">
                {/* Moving Ambient Glass Light Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/[0.04] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#08180f] border-b border-emerald-500/15 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-[0_0_6px_rgba(244,63,94,0.4)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block shadow-[0_0_6px_rgba(245,158,11,0.4)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-[0_0_6px_rgba(16,185,129,0.5)]"></span>
                    <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Code2 size={13} className="text-emerald-400" />
                      <span>kanak.config.ts</span>
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-emerald-300 transition-colors p-1 rounded text-xs flex items-center gap-1"
                    title="Copy snippet"
                    aria-label="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-[10px] text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="text-[10px] text-gray-500 font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-gray-300 select-text overflow-x-auto relative z-10">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-emerald-300 font-medium">developer</span>:{' '}
                    <span className="text-teal-300">SoftwareEngineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">name:</span>{' '}
                    <span className="text-amber-300">'Kanak Saini'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">role:</span>{' '}
                    <span className="text-amber-300">'Full-Stack &amp; AI Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">location:</span>{' '}
                    <span className="text-amber-300">'Delhi NCR, India'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">stack:</span> &#91;
                  </div>
                  <div className="pl-8 text-emerald-400">
                    <span className="text-amber-300">'React'</span>,{' '}
                    <span className="text-amber-300">'Next.js'</span>,{' '}
                    <span className="text-amber-300">'TypeScript'</span>,
                  </div>
                  <div className="pl-8 text-emerald-400">
                    <span className="text-amber-300">'Node.js'</span>,{' '}
                    <span className="text-amber-300">'Express'</span>,{' '}
                    <span className="text-amber-300">'MongoDB'</span>
                  </div>
                  <div className="pl-4">
                    &#93;,
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">status:</span>{' '}
                    <span className="text-emerald-300">'Open to opportunities'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-gray-400">readyToBuild:</span>{' '}
                    <span className="text-rose-400 font-semibold">true</span>
                  </div>
                  <div className="flex items-center">
                    <span>&#125;;</span>
                    {/* Glowing Animated Terminal Cursor */}
                    <span className="inline-flex items-center ml-1.5 align-middle">
                      <span className="w-2.5 h-4 bg-emerald-400 rounded-[2px] animate-cursor-blink shadow-[0_0_12px_#34d399]"></span>
                    </span>
                  </div>
                </div>

                {/* Animated Moving Developer Cursor */}
                <div className="absolute bottom-16 right-6 sm:right-10 z-20 pointer-events-none animate-cursor-wander">
                  <div className="relative flex items-start gap-1">
                    <svg
                      className="w-5 h-5 text-emerald-400 drop-shadow-[0_2px_10px_rgba(16,185,129,0.95)] -rotate-[18deg]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3l7 18 3-7 7-3L3 3z" />
                    </svg>
                    <div className="px-2 py-0.5 rounded-full bg-emerald-500 text-[#041108] text-[10px] font-bold font-mono shadow-[0_4px_14px_rgba(16,185,129,0.7)] flex items-center gap-1 -mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      <span>kanak.dev</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Status Footer */}
                <div className="px-4 py-2 bg-[#040d07] border-t border-emerald-500/15 flex items-center justify-between text-[10px] font-mono text-gray-400 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-emerald-300 font-medium">Ready to ship</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Terminal size={11} className="text-emerald-400" />
                    <span>bash • zsh</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-xs text-emerald-400/70 hover:text-emerald-300 transition-colors animate-bounce cursor-pointer group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <ArrowDown size={14} className="text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
      </button>
    </section>
  );
};

export default HeroSection;
