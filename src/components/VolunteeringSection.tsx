import React from 'react';
import { Briefcase, Building, MapPin, Award, Users, Activity, Zap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  hasCertificate?: boolean;
  responsibilities: string[];
}

interface ResponsibilityItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  hasCertificate?: boolean;
  description: string;
}

const professionalExperience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    organization: 'TektonTech Solutions',
    type: 'Software Engineering',
    period: "Aug'26 – Present",
    location: 'Delhi NCR, India',
    responsibilities: [
      'Developed responsive application modules using React.js, Next.js, and TypeScript, focusing on dashboard functionality, user management, and UI consistency.',
      'Integrated APIs, database connectivity, and n8n-based email automation workflows.',
      'Implemented dashboard features, user authentication, profile management, and UI enhancements.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    organization: 'DigitalBuzz Pvt. Ltd',
    type: 'Software Engineering',
    period: "Aug'26 – Present",
    location: 'Delhi NCR, India',
    responsibilities: [
      'Developed and enhanced responsive websites using React.js, Next.js, and Tailwind CSS.',
      'Implemented reusable UI components, animations, and interactive features.',
      'Collaborated on debugging, frontend optimization, and application development.',
    ],
  },
  {
    id: 3,
    role: 'Event Management Team Member',
    organization: 'AI Community',
    type: 'Community & Events',
    period: "Sept'24 – Present",
    location: 'Delhi NCR, India',
    responsibilities: [
      'Coordinate workshops, hackathons, and community engagement activities.',
      'Assist in planning and execution of technical events and networking sessions.',
      'Collaborate with team members to ensure smooth event operations and participant experience.',
    ],
  },
  {
    id: 4,
    role: 'Drone Technology Intern & Trainee',
    organization: 'India Space Academy',
    type: 'Aerospace & Robotics',
    period: "Jan'26 – Feb'26",
    location: 'National / Online',
    hasCertificate: true,
    responsibilities: [
      'Completed training and internship activities under the Winter Training Programme on Advanced Drone Technology.',
      'Gained exposure to drone systems, applications, and emerging aerospace technologies.',
      'Participated in technical learning sessions and practical assignments.',
    ],
  },
];

const positionsOfResponsibility: ResponsibilityItem[] = [
  {
    id: 1,
    role: 'Chapter Head',
    organization: 'OSCode',
    period: '2024 – 2025',
    hasCertificate: true,
    description: 'Organized technical events, workshops, and coding community initiatives to empower student developers.',
  },
  {
    id: 2,
    role: 'Track Head',
    organization: 'Innova 2024 (GDG Event)',
    period: '2024',
    description: 'Coordinated a technical track and managed participant engagement during the flagship developer event.',
  },
  {
    id: 3,
    role: 'Gen AI Hackathon Mentor',
    organization: 'AI Community',
    period: '2024',
    hasCertificate: true,
    description: 'Mentored participants on AI/LLM project development, architectural ideation, and problem-solving.',
  },
  {
    id: 4,
    role: 'Event Management Volunteer',
    organization: 'GDG Gurugram',
    period: '2024',
    description: 'Assisted in organizing developer community events, speaker coordination, and tech meetups.',
  },
];

const VolunteeringSection = () => {
  return (
    <section id="experience" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Community Network Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <Users size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            COMMUNITY.NET
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Community HUD */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>GDG//LEAD</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>EVENTS: 12+</div>
            <div>REACH: 1500+</div>
            <div>STATUS: LEAD</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.4s' }} />
        </div>
      </div>

      {/* Right Flank: Leadership Telemetry & Disc */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Leadership Telemetry HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Award size={11} className="text-amber-400 animate-pulse" />
              <span>LEADERSHIP</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>IMPACT:</span>
            <span className="text-emerald-300 font-semibold">HIGH</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>PEERS:</span>
            <span className="text-gray-300">60+ REPS</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>CHAPTER:</span>
            <span className="text-emerald-400 font-bold">KCCITM</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Rotating Leadership Compass Disc */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Briefcase size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          MENTOR // ROLES
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold font-mono">
              Experience & Leadership
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Professional Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Community Roles.
            </span>
          </h2>
        </div>

        {/* 1. Professional Experience Timeline */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
            <Briefcase size={16} />
            <span>Work & Internship Experience</span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-emerald-500/20 space-y-4 my-2">
            {professionalExperience.map((exp) => (
              <div key={exp.id} className="relative group/exp">
                {/* Compact Timeline Node */}
                <div className="absolute -left-[34px] sm:-left-[42px] top-3 w-5 h-5 rounded-full bg-[#050c08] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>

                {/* Compact Bento Card */}
                <div className="bento-card p-4 sm:p-5 hover:border-emerald-400/35 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="badge-emerald text-[10px] py-0.2">
                        {exp.type}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover/exp:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono text-emerald-400/90 font-medium self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-400/80 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Building size={13} />
                      <span className="text-white font-semibold">{exp.organization}</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-1.5 pt-2 border-t border-emerald-950/40">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Positions of Responsibility Grid */}
        <div className="space-y-3 pt-4 border-t border-emerald-950/40">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
            <Users size={16} />
            <span>Positions of Responsibility</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {positionsOfResponsibility.map((pos) => (
              <div
                key={pos.id}
                className="bento-card p-4 flex flex-col justify-between hover:border-emerald-400/35 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-white">
                      {pos.role}
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400/80">
                      {pos.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-emerald-300">
                      {pos.organization}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pos.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VolunteeringSection;
