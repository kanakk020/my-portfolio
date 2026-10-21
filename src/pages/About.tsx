import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import {
  GraduationCap,
  MapPin,
  Heart,
  Download,
  Mail,
  Sparkles,
  BookOpen,
  Code,
  Compass,
} from 'lucide-react';

const galleryPhotos = [
  { src: '/images/pic4.jpg', caption: 'Hackathon build sprint 🚀', tag: 'Building' },
  { src: '/images/pic7.jpg', caption: 'Coding late night sessions 💻', tag: 'Development' },
  { src: '/images/pic1.jpg', caption: 'Tech community gathering 🌐', tag: 'Community' },
  { src: '/images/pic10.jpg', caption: 'Presenting and collaborating 🎤', tag: 'Speaking' },
];

const highlights = [
  {
    icon: <Code className="text-emerald-400" size={20} />,
    title: 'Full-Stack Development',
    description: 'Developing responsive frontend interfaces with React/Next.js and resilient backend APIs with Node/Express.',
  },
  {
    icon: <Sparkles className="text-emerald-400" size={20} />,
    title: 'AI/ML Enthusiast',
    description: 'Integrating modern LLMs, NLP pipelines, and computer vision models into useful real-world applications.',
  },
  {
    icon: <Compass className="text-emerald-400" size={20} />,
    title: 'Community & Hackathons',
    description: 'Active participant in national hackathons and volunteer in developer communities including GDG Gurugram.',
  },
];

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineering with passion, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
              purpose and perseverance.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm a final year BTech CSE student with a strong interest in full-stack development, AI/ML and building meaningful tech solutions.
          </p>
        </div>

        {/* Main Grid: Story & Info Cards on Left, Visual Polaroid Collage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Detailed Bio & Structured Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bento-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen size={20} className="text-emerald-400" />
                <span>My Background & Philosophy</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Hi there! I'm an aspiring software developer with a passion for creating clean, user-friendly web experiences. I enjoy bringing ideas to life through code and love the process of turning challenges into elegant solutions.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I'm constantly exploring new technologies, improving my skills, and staying curious about the ever-evolving world of tech. Whether it's frontend development or learning something new, I'm always up for the challenge.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I love turning ideas into real products, participating in hackathons and contributing to communities. I'm open to new opportunities, collaborations, and connecting with like-minded individuals.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="/kanakresume.pdf"
                  download="Kanak_Saini_Resume.pdf"
                  className="btn-emerald text-xs sm:text-sm !py-2.5 !px-5"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-glass text-xs sm:text-sm !py-2.5 !px-5 border-emerald-500/25 hover:border-emerald-400"
                >
                  <Mail size={16} className="text-emerald-400" />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>

            {/* Structured Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bento-card p-4 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">Education</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                    BTech CSE, KCC Institute (2027)
                  </span>
                </div>
              </div>

              <div className="bento-card p-4 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">Location</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                    Delhi NCR, India
                  </span>
                </div>
              </div>

              <div className="bento-card p-4 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Heart size={20} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">Open to</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                    Internships & Full-time
                  </span>
                </div>
              </div>
            </div>

            {/* Core Competencies highlights */}
            <div className="bento-card p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-white">What I Bring to the Table</h3>
              <div className="grid grid-cols-1 gap-3.5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl bg-[#08150f]/80 border border-emerald-500/15">
                    <div className="w-9 h-9 rounded-lg bg-[#050c08] border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Photo Collage & Moments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bento-card p-6 sm:p-7 relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-white">Captured Moments</h3>
                  <p className="text-xs text-gray-400">Events, meetups and building products</p>
                </div>
                <span className="font-handwriting text-emerald-300 text-lg font-bold">
                  Code Create Grow ✨
                </span>
              </div>

              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-2 gap-4">
                {galleryPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="group/photo rounded-xl overflow-hidden bg-[#08150f] border border-emerald-500/20 shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-108"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                          {photo.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-2.5 text-center font-handwriting text-xs text-emerald-200/90 font-medium truncate">
                      {photo.caption}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scenic banner quote inside About page */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-transparent border border-emerald-500/20">
                <p className="font-serif italic text-sm text-emerald-100">
                  “Same Girl... Bigger Goals. Striving each day to write code that matters.”
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default About;
