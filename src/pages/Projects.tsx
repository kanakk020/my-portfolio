import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, Github, ArrowRight, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: 'AI / Full-Stack' | 'Web Apps' | 'UI / Frontend';
  description: string;
  keyFeatures: string[];
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'PitchPerfect',
    subtitle: 'AI Presenting Analyzer',
    category: 'AI / Full-Stack',
    description:
      'PitchPerfect (MentAI) is an intelligent presenting and communication analysis platform designed to evaluate speech delivery, pace, clarity, and confidence in real time using machine learning.',
    keyFeatures: [
      'Speech & presentation feedback with natural language processing',
      'Personalized performance metrics and mood/confidence tracking',
      'Interactive conversational chatbot assistant powered by LLM models',
    ],
    image: '/images/Mentai.png',
    technologies: ['React', 'Python', 'Gemini API', 'Node.js', 'Tailwind CSS'],
    demoLink: 'https://mentai.netlify.app/',
    githubLink: 'https://github.com/kanakk020/Ment-AI',
  },
  {
    id: 2,
    title: 'AgeWellDiet',
    subtitle: 'Personalized Nutrition & Wellness',
    category: 'AI / Full-Stack',
    description:
      'A modern AI-powered web application for personalized diet recommendations and holistic wellness tracking tailored for individuals across various age demographics.',
    keyFeatures: [
      'Personalized dietary plan generator based on lifestyle inputs',
      'Real-time nutritional balance calculation and meal scheduling',
      'Secure Supabase & MongoDB cloud backend with authenticated profiles',
    ],
    image: '/images/agewell.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase', 'Tailwind CSS'],
    demoLink: 'https://age-well-diet.vercel.app/',
    githubLink: 'https://github.com/kanakk020/AgeWellDiet',
  },
  {
    id: 3,
    title: 'Auto-Trust',
    subtitle: 'Blockchain Vehicle Platform',
    category: 'Web Apps',
    description:
      'A decentralized vehicular data verification and maintenance history platform leveraging blockchain immutability and AI inspection validation.',
    keyFeatures: [
      'Immutable service records and ownership lifecycle tracking',
      'Tamper-proof mileage verification using cryptographic hashes',
      'Transparent buyer-seller vehicle trust score calculations',
    ],
    image: '/images/skyview.png',
    technologies: ['React', 'Node.js', 'Blockchain', 'Solidity', 'Smart Contracts'],
    demoLink: 'https://github.com/kanakk020',
    githubLink: 'https://github.com/kanakk020',
  },
  {
    id: 4,
    title: 'Sky-View',
    subtitle: 'Real-time Weather Intelligence',
    category: 'Web Apps',
    description:
      'Real-time weather application built with dynamic time-based meteorological backgrounds, geolocation detection, and comprehensive 4-day forecast reports.',
    keyFeatures: [
      'Accurate real-time temperature, humidity, wind, and air conditions',
      'Adaptive day-and-night dynamic UI backgrounds matching atmospheric state',
      'Fast responsive search indexing across international cities',
    ],
    image: '/images/skyview.png',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'OpenWeather API'],
    demoLink: 'https://sky-view-eta.vercel.app/',
    githubLink: 'https://github.com/kanakk020/Sky-view',
  },
  {
    id: 5,
    title: 'Amazon Clone',
    subtitle: 'E-Commerce Platform Interface',
    category: 'UI / Frontend',
    description:
      'A comprehensive pixel-perfect recreation of the popular e-commerce platform Amazon, replicating the complete browsing, product catalog, and checkout UX layout.',
    keyFeatures: [
      'Responsive multi-breakpoint layout mirroring production e-commerce platforms',
      'Interactive navigation menus, promotional banners, and product carousels',
      'Clean modular HTML5 semantic architecture and CSS styling',
    ],
    image: '/images/Amazonclone.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoLink: 'https://amazonclonebykanak.netlify.app/',
    githubLink: 'https://github.com/kanakk020/amazon-clone',
  },
];

const categories = ['All', 'AI / Full-Stack', 'Web Apps', 'UI / Frontend'] as const;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Portfolio Showcase
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Featured Projects & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Engineering Implementations.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              A curated selection of applications I've engineered—from machine learning pipelines to high-performance responsive web platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#07130e] border border-emerald-500/20 rounded-full self-start md:self-auto shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-emerald-950/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Generous Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card overflow-hidden group flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.18)]"
            >
              {/* Project Screenshot Container */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-[#050c08] border-b border-emerald-500/15">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-106 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091510] via-transparent to-transparent opacity-90"></div>

                {/* Category Pill top left */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="badge-emerald text-xs backdrop-blur-md bg-black/60 border-emerald-500/35">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-medium text-emerald-400/80 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features Bullet Points */}
                  <div className="space-y-1.5 mb-4">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-950/60 space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/25 text-xs text-emerald-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-emerald text-xs sm:text-sm !py-2.5 !px-5 flex-1 justify-center"
                    >
                      <span>Live Demo</span>
                      <ArrowRight size={15} />
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass text-xs sm:text-sm !py-2.5 !px-5 border-emerald-500/25 hover:border-emerald-400 hover:text-emerald-300"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                      <ExternalLink size={12} className="text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Exploration CTA */}
        <div className="bento-card p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3">
          <FolderGit2 size={32} className="mx-auto text-emerald-400" />
          <h3 className="text-xl font-bold text-white">Looking for more code repositories?</h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Explore my complete open-source contributions, algorithms, experimental sandboxes, and hackathon prototypes on GitHub.
          </p>
          <div className="pt-2">
            <a
              href="https://github.com/kanakk020"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald text-xs sm:text-sm !py-2.5 !px-6"
            >
              <Github size={16} />
              <span>Visit @kanakk020 on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Projects;
