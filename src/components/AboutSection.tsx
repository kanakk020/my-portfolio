import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  MapPin,
  Heart,
  Download,
  Mail,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Activity,
  Zap,
} from 'lucide-react';

const slideshowPhotos = [
  { src: '/images/pic4.jpg', caption: 'Hackathon build sprint 🚀', tag: 'Building' },
  { src: '/images/pic7.jpg', caption: 'Coding late night sessions 💻', tag: 'Development' },
  { src: '/images/pic8.jpg', caption: 'Brainstorming & architecture 💡', tag: 'Planning' },
  { src: '/images/pic9.jpg', caption: 'Collaborative team sprints 🤝', tag: 'Teamwork' },
  { src: '/images/pic10.jpg', caption: 'Presenting and collaborating 🎤', tag: 'Speaking' },
  { src: '/images/pic11.jpg', caption: 'Ideation & prototype review ⚙️', tag: 'Prototyping' },
  { src: '/images/pic12.jpg', caption: 'Focus & deep work 🌟', tag: 'Focus' },
  { src: '/images/pic13.jpg', caption: 'Community workshops & talks 👥', tag: 'Workshops' },
  { src: '/images/pic1.jpg', caption: 'Tech community gathering 🌐', tag: 'Community' },
  { src: '/images/pic14.jpg', caption: 'Celebrating team milestones 🏆', tag: 'Celebration' },
  { src: '/images/pic15.jpg', caption: 'Tech Summit & community gathering 🌐', tag: 'Community' },
  { src: '/images/pic16.jpg', caption: 'Nexify Hackathon with Team AlgoRythms 💻', tag: 'Hackathon' },
  { src: '/images/pic17.jpg', caption: 'Google Developer AI Community meetup ✨', tag: 'Meetup' },
  { src: '/images/pic18.jpg', caption: 'Build with AI • Google for Developers 🚀', tag: 'Build with AI' },
  { src: '/images/pic2.jpg', caption: 'Hackathon demo rounds ⚡', tag: 'Innovation' },
  { src: '/images/pic3.jpg', caption: 'Engineering solutions together 🛠️', tag: 'Engineering' },
  { src: '/images/pic5.jpg', caption: 'Networking with fellow devs 💬', tag: 'Networking' },
];

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowPhotos.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowPhotos.length) % slideshowPhotos.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowPhotos.length);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
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
    <section id="about" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Futuristic Cyber Circuit & Binary Stream Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node with Pulse */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <Cpu size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            SYS.CORE
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-36 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Floating Binary / Matrix Code Block */}
        <div className="px-2 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>NODE//01</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>01101001</div>
            <div>01101110</div>
            <div>0x7F // OK</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.8s' }} />
        </div>
      </div>

      {/* Right Flank: Live Telemetry & Rotating Cyber Radar */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Live Telemetry Module HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Zap size={11} className="text-amber-400 animate-pulse" />
              <span>TELEMETRY</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">LIVE</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>STATUS:</span>
            <span className="text-emerald-300 font-semibold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
              ACTIVE
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>STACK:</span>
            <span className="text-gray-300">REACT • AI</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>LATENCY:</span>
            <span className="text-emerald-400 font-bold">14ms</span>
          </div>
        </div>

        {/* Circuit Trace with Traveling Upward Pulse */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Holographic Wireframe Radar Scanner */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* Outer Rotating Disc */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          {/* Inner Dashed Disc */}
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          {/* Crosshairs */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Activity size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          ORBIT // 28.6°N
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Compact Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold font-mono">
              About Me
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering with passion,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              purpose and perseverance.
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (7 cols): Bio & Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bento-card p-5 sm:p-6 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <BookOpen size={17} className="text-emerald-400" />
                <span>Summary & Engineering Background</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Final-year B.Tech Computer Science student with hands-on experience in React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Skilled in developing responsive web applications, REST API integration, and full-stack development.
              </p>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Experienced in building scalable application modules, automation workflows (including n8n), and user-centric interfaces. Passionate about solving real-world challenges through technology, leading tech communities, and participating in hackathons.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href="/kanakresume.pdf"
                  download="Kanak_Saini_Resume.pdf"
                  className="btn-emerald text-xs"
                >
                  <Download size={13} />
                  <span>Resume PDF</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="btn-glass text-xs"
                >
                  <Mail size={13} className="text-emerald-400" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>

            {/* Structured Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="bento-card p-3 sm:p-3.5 flex items-start gap-2.5 min-w-0 h-full">
                <div className="w-8 h-8 rounded-lg bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <GraduationCap size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block leading-none mb-1">
                    Education
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-200 font-semibold leading-snug block">
                    B.Tech CSE, KCC (2023–2027)
                  </span>
                </div>
              </div>

              <div className="bento-card p-3 sm:p-3.5 flex items-start gap-2.5 min-w-0 h-full">
                <div className="w-8 h-8 rounded-lg bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block leading-none mb-1">
                    Location
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-200 font-medium leading-snug block">
                    Delhi NCR, India
                  </span>
                </div>
              </div>

              <div className="bento-card p-3 sm:p-3.5 flex items-start gap-2.5 min-w-0 h-full">
                <div className="w-8 h-8 rounded-lg bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Heart size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block leading-none mb-1">
                    Open to
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-200 font-medium leading-snug block">
                    SDE Internships & Roles
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Dynamic Changing Photo Slideshow */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className="bento-card p-4 sm:p-5 space-y-3 relative group/slideshow"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Moments & Highlights</span>
                  <Sparkles size={14} className="text-emerald-400 animate-pulse" />
                </h3>
                
                <span className="font-handwriting text-emerald-300 text-sm font-bold">
                  Code Create Grow ✨
                </span>
              </div>

              {/* Main Photo Slideshow Display Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#07130d] border border-emerald-500/20 shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
                {slideshowPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 z-10 scale-100'
                        : 'opacity-0 pointer-events-none z-0 scale-105'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover filter brightness-95"
                      loading="lazy"
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 text-emerald-300 flex items-center justify-center transition-all duration-200 backdrop-blur-md opacity-80 sm:opacity-0 sm:group-hover/slideshow:opacity-100 focus:opacity-100 active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 text-emerald-300 flex items-center justify-center transition-all duration-200 backdrop-blur-md opacity-80 sm:opacity-0 sm:group-hover/slideshow:opacity-100 focus:opacity-100 active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Interactive Navigation Dot Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 pt-1 px-2 max-w-full">
                {slideshowPhotos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-6 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]'
                        : 'w-1.5 bg-emerald-950 hover:bg-emerald-800'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
