import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Calendar, MapPin, Users, Sparkles, Building, Rocket } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  type: 'Internship' | 'Community Leadership' | 'Event Management';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  image?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    organization: 'TektonTech Solutions LLP',
    type: 'Internship',
    period: 'Oct 2026 – Dec 2026',
    location: 'Delhi NCR, India',
    description:
      'Working as a full-stack software engineering intern contributing to client-facing web applications, responsive user interfaces, backend services, and agile product development.',
    responsibilities: [
      'Engineered modern full-stack web applications and scalable user interfaces',
      'Developed and integrated RESTful endpoints with databases and authentication workflows',
      'Collaborated within an agile sprint team with code reviews and automated tests',
    ],
  },
  {
    id: 2,
    role: 'Event Management Volunteer',
    organization: 'GDG Gurugram',
    type: 'Community Leadership',
    period: 'Volunteer',
    location: 'Gurugram, India',
    description:
      'Volunteered in event management at GDG Gurugram, assisting with the organization of tech events, developer workshops, and community meetups. Supported logistics, speaker coordination, and attendee engagement to ensure smooth execution.',
    responsibilities: [
      'Facilitated speaker coordination, tech-talk schedules, and panel sessions',
      'Managed attendee registration, on-ground operations, and logistics',
      'Fostered a collaborative community where developers connect and exchange insights',
    ],
    image: '/images/gdg.jpg',
  },
  {
    id: 3,
    role: 'Core Team Member',
    organization: 'AI Community Delhi',
    type: 'Community Leadership',
    period: 'Core Contributor',
    location: 'Delhi NCR, India',
    description:
      'Volunteered in event management at AI community, supporting the organization of tech events, workshops, and community meetups. Organized and mentored in GenAI Hackathon.',
    responsibilities: [
      'Mentored participants through prototyping GenAI and LLM-powered applications',
      'Curated workshops on Google AI tools, developer APIs, and machine learning pipelines',
      'Assisted with speaker coordination and audience Q&A engagement',
    ],
    image: '/images/tfug.jpg',
  },
  {
    id: 4,
    role: 'Track Head - Evolve',
    organization: 'Innova Delhi NCR, IIIT Delhi',
    type: 'Event Management',
    period: 'Lead Organizer',
    location: 'IIIT Delhi, India',
    description:
      'Managed the Evolve track and coordinated with esteemed industry speakers, mentors, and collegiate participants across technical tracks at Innova Delhi NCR.',
    responsibilities: [
      'Designed technical competition guidelines and problem statements',
      'Coordinated keynote schedules and mentor-participant matching',
      'Facilitated evaluation rubrics and stage presentations',
    ],
  },
  {
    id: 5,
    role: 'Organizer — Web and AI Connect & AlgoOps 25',
    organization: 'Technical Summits',
    type: 'Event Management',
    period: 'Lead Organizer',
    location: 'Delhi NCR, India',
    description:
      'Organized focused technical conferences exploring the intersection of modern web development and artificial intelligence, as well as DevOps practices and Data Structures & Algorithms.',
    responsibilities: [
      'Curated expert speakers addressing real-world AI integration in modern web technologies',
      'Facilitated deep-dive panels on optimizing DevOps pipelines using algorithmic approaches',
      'Managed event flow, speaker logistics, and developer networking sessions',
    ],
    image: '/images/webai.jpg',
  },
];

const Experience = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
              Work & Community
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Professional Experience & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
              Community Leadership.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Learning, building, and contributing through real-world software engineering and active tech community stewardship.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-emerald-500/25 space-y-10 my-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group/exp">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#050c08] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-transform duration-300 group-hover/exp:scale-120">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* Bento Card for Experience */}
              <div className="bento-card p-6 sm:p-8 hover:border-emerald-400/40 hover:bg-[#0c1f17] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="badge-emerald text-xs mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/exp:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start lg:self-auto">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/25 text-xs text-emerald-300 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-400/90 font-medium mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building size={15} />
                    <span>{exp.organization}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <MapPin size={15} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="p-4 rounded-xl bg-[#06110b]/80 border border-emerald-500/15 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Key Highlights & Responsibilities:
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Experience;
