import React from 'react';
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
  SiCpanel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { Terminal, Cpu, Activity, Zap } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  highlightColor?: string;
}

const allSkills: SkillItem[] = [
  { name: 'React', icon: <FaReact size={20} />, highlightColor: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={20} />, highlightColor: '#FFFFFF' },
  { name: 'TypeScript', icon: <SiTypescript size={19} />, highlightColor: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript size={19} />, highlightColor: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} />, highlightColor: '#38BDF8' },
  { name: 'HTML5', icon: <FaHtml5 size={20} />, highlightColor: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt size={20} />, highlightColor: '#1572B6' },

  { name: 'Node.js', icon: <FaNodeJs size={20} />, highlightColor: '#68A063' },
  { name: 'Express.js', icon: <SiExpress size={20} />, highlightColor: '#EEEEEE' },
  { name: 'REST APIs', icon: <TbApi size={20} />, highlightColor: '#10B981' },
  { name: 'Python', icon: <FaPython size={20} />, highlightColor: '#3776AB' },
  { name: 'MongoDB', icon: <SiMongodb size={20} />, highlightColor: '#47A248' },
  { name: 'MySQL', icon: <SiMysql size={20} />, highlightColor: '#4479A1' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, highlightColor: '#336791' },
  { name: 'C', icon: <SiC size={19} />, highlightColor: '#A8B9CC' },
  { name: 'C++', icon: <SiCplusplus size={20} />, highlightColor: '#00599C' },

  { name: 'Git', icon: <FaGitAlt size={20} />, highlightColor: '#F05032' },
  { name: 'GitHub', icon: <FaGithub size={20} />, highlightColor: '#FFFFFF' },
  { name: 'VS Code', icon: <VscVscode size={20} />, highlightColor: '#007ACC' },
  { name: 'cPanel', icon: <SiCpanel size={20} />, highlightColor: '#FF6C2C' },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Compiler & Runtime Stream Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <Terminal size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            COMPILER.V8
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Runtime HUD */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>DEV//BUILD</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>✓ 0 ERRORS</div>
            <div>HOT.RELOAD</div>
            <div>STATUS: OPT</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Right Flank: Telemetry & Memory Buffer */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Memory Buffer HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Zap size={11} className="text-emerald-400 animate-pulse" />
              <span>STACK STATS</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">60FPS</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>HEAP:</span>
            <span className="text-emerald-300 font-semibold">48.2 MB</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>ENGINE:</span>
            <span className="text-gray-300">NODE • V8</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>THREADS:</span>
            <span className="text-emerald-400 font-bold">ASYNC</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Holographic Wireframe Scanner */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Activity size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          CORE // RUNTIME
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Header */}
        <div className="pb-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold font-mono">
              Technical Skills
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills, Languages &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Tools.
            </span>
          </h2>
        </div>

        {/* Centered Architecture Stack Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center justify-between px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-emerald-500/15 bg-[#060c08]/90 hover:bg-[#0a1811] hover:border-emerald-400/40 transition-all duration-200 shadow-sm w-[calc(50%-5px)] sm:w-[calc(33.333%-7px)] lg:w-[calc(25%-8px)]"
            >
              {/* Subtle emerald left edge accent on hover */}
              <div className="absolute left-0 top-2 bottom-2 w-[2.5px] bg-emerald-400 rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-200">
                  {skill.icon}
                </div>

                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 truncate block">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* Subtle status indicator dot */}
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-950 group-hover:bg-emerald-400 group-hover:shadow-[0_0_6px_rgba(16,185,129,0.7)] transition-all duration-200 shrink-0 ml-2"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SkillsSection;
