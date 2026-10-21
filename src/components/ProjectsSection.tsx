import React from 'react';
import { ExternalLink, Github, GitBranch, Layers, Sparkles, Activity } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Drone Detection',
    subtitle: 'YOLO & Deep Learning',
    description:
      'Real-time drone detection and tracking system using YOLO and OpenCV for aerial object identification and surveillance pipelines.',
    image: '/images/drone-detection.jpg',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Deep Learning'],
    demoLink: 'https://github.com/kanakk020/Drone-Detection',
    githubLink: 'https://github.com/kanakk020/Drone-Detection',
  },
  {
    id: 2,
    title: 'AgeWellDiet',
    subtitle: 'MERN Stack Nutrition Platform',
    description:
      'Full-stack diet recommendation platform using the MERN stack to deliver personalized nutrition plans, responsive UI, and backend APIs.',
    image: '/images/agewell.png',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    demoLink: 'https://age-well-diet.vercel.app/',
    githubLink: 'https://github.com/kanakk020/AgeWellDiet',
  },
  {
    id: 3,
    title: 'Auto-Trust',
    subtitle: 'Blockchain & AI Smart Contracts',
    description:
      'Secure agreement platform enabling freelancing and renting with AI-generated contracts, digital signatures, escrow payments, and tamper-proof records.',
    image: '/images/autotrust.jpg',
    technologies: ['MERN Stack', 'Blockchain', 'Smart Contracts', 'AI'],
    demoLink: 'https://github.com/kanakk020/Auto-Trust',
    githubLink: 'https://github.com/kanakk020/Auto-Trust',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Git Workflow Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <GitBranch size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            GIT.BRANCH
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Commit Block */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>MAIN//PROD</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>HASH: 7f3a9c</div>
            <div>CI/CD: PASSED</div>
            <div>ENV: LIVE</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.6s' }} />
        </div>
      </div>

      {/* Right Flank: Pipeline & Release Telemetry */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Pipeline Telemetry HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Sparkles size={11} className="text-amber-400 animate-pulse" />
              <span>PIPELINE</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>BUILD:</span>
            <span className="text-emerald-300 font-semibold">SUCCESS</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>HOST:</span>
            <span className="text-gray-300">VERCEL PROD</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>SSL:</span>
            <span className="text-emerald-400 font-bold">256-BIT</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Rotating Release Disc Scanner */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Layers size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          RELEASE // v2.4
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Featured Projects
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Works &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Implementations.
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/kanakk020"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-xs !py-1.5 !px-3 self-start sm:self-auto"
          >
            <Github size={13} />
            <span>GitHub Profile</span>
            <ExternalLink size={11} className="text-gray-400" />
          </a>
        </div>

        {/* 3 Project Cards Per Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card overflow-hidden group flex flex-col justify-between hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Compact Screenshot */}
              <div className="relative h-36 sm:h-40 overflow-hidden bg-[#050c08] border-b border-emerald-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091510] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-2.5 left-2.5">
                  <span className="badge-emerald text-[10px] bg-black/70 backdrop-blur-md">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-950/40 space-y-3">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-[10px] text-emerald-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center pt-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass flex-1 !py-1.5 !px-3 text-xs justify-center gap-2 hover:border-emerald-400 group/btn"
                      title="GitHub Repository"
                    >
                      <Github size={13} className="text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                      <span>View Code</span>
                      <ExternalLink size={11} className="text-gray-500 group-hover/btn:text-emerald-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
