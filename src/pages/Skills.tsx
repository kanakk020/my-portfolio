import React from 'react';
import Layout from '@/components/Layout';
import {
  FaReact,
  FaGithub,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiC,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Sparkles, Cpu } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  highlightColor?: string;
  description: string;
}

const allSkills: SkillItem[] = [
  {
    name: 'React',
    icon: <FaReact size={30} />,
    highlightColor: '#61DAFB',
    description: 'Component architecture, state management, hooks, and modern frontend ecosystems.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={30} />,
    highlightColor: '#FFFFFF',
    description: 'Server-side rendering, App Router, full-stack React capabilities, and API routes.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={28} />,
    highlightColor: '#3178C6',
    description: 'Static typing, interfaces, strict mode development, and scalable codebases.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={28} />,
    highlightColor: '#F7DF1E',
    description: 'Core ES6+, asynchronous programming, closures, event-driven patterns, and DOM.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={30} />,
    highlightColor: '#38BDF8',
    description: 'Utility-first modern styling, responsive layouts, design systems, and animations.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 size={30} />,
    highlightColor: '#E34F26',
    description: 'Semantic markup, accessibility (a11y), clean document structures, and web standards.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt size={30} />,
    highlightColor: '#1572B6',
    description: 'Advanced responsive design, Flexbox, Grid, transitions, and keyframe animations.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={30} />,
    highlightColor: '#68A063',
    description: 'Server runtime, microservices, asynchronous I/O, and server-side execution.',
  },
  {
    name: 'Express.js',
    icon: <SiExpress size={30} />,
    highlightColor: '#EEEEEE',
    description: 'RESTful API development, custom middleware, routing, and controller architectures.',
  },
  {
    name: 'Python',
    icon: <FaPython size={30} />,
    highlightColor: '#3776AB',
    description: 'Scripting, backend logic, machine learning workflows, and data processing.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={30} />,
    highlightColor: '#47A248',
    description: 'NoSQL document schemas, Mongoose ODM, aggregation pipelines, and indexing.',
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={30} />,
    highlightColor: '#4479A1',
    description: 'Relational database schemas, SQL queries, relational joins, and ACID compliance.',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={30} />,
    highlightColor: '#336791',
    description: 'Relational database modeling, complex queries, indexing, and data integrity.',
  },
  {
    name: 'C',
    icon: <SiC size={28} />,
    highlightColor: '#A8B9CC',
    description: 'Fundamental computer science, memory management, pointers, and data structures.',
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={30} />,
    highlightColor: '#00599C',
    description: 'Object-oriented programming, STL, algorithms, and high-performance computing.',
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={30} />,
    highlightColor: '#F05032',
    description: 'Version control, branching workflows, pull requests, merge conflict resolution.',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={30} />,
    highlightColor: '#FFFFFF',
    description: 'Open source collaboration, repository management, and project deployments.',
  },
  {
    name: 'VS Code',
    icon: <VscVscode size={30} />,
    highlightColor: '#007ACC',
    description: 'Primary IDE, debugging workflows, extensions ecosystem, and CLI integration.',
  },
];

const Skills = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Technical Skills
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Skills, Languages & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Developer Arsenal.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Technologies and tools I work with daily and love exploring to build resilient web solutions.
            </p>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="bento-card p-5 group flex flex-col justify-between hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-[#0c1f17] transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    style={{ color: skill.highlightColor || '#10B981' }}
                  >
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mt-2">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-emerald-950/40 flex items-center justify-between text-[11px] text-emerald-400/80 font-medium">
                <span>Production Ready</span>
                <Sparkles size={12} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Methodology & Learning Approach Banner */}
        <div className="bento-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Full-Stack Fluency</h4>
              <p className="text-xs text-gray-400 mt-0.5">End-to-end web architectures from responsive UI to database modeling.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
