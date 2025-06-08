import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import {
  SiNodedotjs,
  SiCplusplus,
  SiC,
  SiPython,
  SiNetlify,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  delay: number;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'HTML',
    icon: (
      <img
        src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
        alt="HTML Logo"
        style={{ width: 40, height: 32 }}
      />
    ),
    delay: 300,
    color: '#E34F26',
  },
  {
    name: 'CSS',
    icon: (
      <img
        src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
        alt="CSS Logo"
        style={{ width: 40, height: 32 }}
      />
    ),
    delay: 300,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
        alt="JavaScript Logo"
        style={{ width: 40, height: 32 }}
      />
    ),
    delay: 300,
    color: '#F7DF1E',
  },
  { name: 'React', icon: <FaReact size={32} />, delay: 200, color: '#61DAFB' },
  {
    name: 'TypeScript',
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
        alt="TypeScript Logo"
        style={{ width: 40, height: 32 }}
      />
    ),
    delay: 300,
    color: '#3178C6',
  },
  { name: 'Node.js', icon: <SiNodedotjs size={32} />, delay: 400, color: '#339933' },
  {
    name: 'C',
    icon: (
      <img
        src="https://static-00.iconduck.com/assets.00/c-original-icon-1788x2048-6b74oi6m.png"
        alt="C Logo"
        style={{ width: 32, height: 32 }}
      />
    ),
    delay: 800,
    color: '#A8B9CC',
  },
  { name: 'C++', icon: <SiCplusplus size={32} />, delay: 1000, color: '#00599C' },
  {
    name: 'Python',
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
        alt="Python Logo"
        style={{ width: 32, height: 32 }}
      />
    ),
    delay: 1100,
    color: '#3776AB',
  },
];

const tools: Skill[] = [
  {
    name: 'GitHub',
    icon: <FaGithub size={32} />,
    delay: 300,
    color: '#000000',
  },
  {
    name: 'VSCode',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
        alt="VSCode Logo"
        style={{ width: 32, height: 32 }}
      />
    ),
    delay: 1100,
    color: '#3776AB',
  },
  {
    name: 'Vercel',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/vercel.svg"
        alt="Vercel Logo"
        style={{ width: 40, height: 40 }}
      />
    ),
    delay: 1100,
    color: '#3776AB',
  },
  {
    name: 'Netlify',
    icon: <SiNetlify size={32} />,
    delay: 400,
    color: '#00C7B7',
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[#d1cee2] relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-portfolio-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-portfolio-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '7s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-portfolio-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-center items-start gap-16">
          {/* My Skills */}
          <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-3xl">
          <h2 className="section-heading mb-10">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 transform opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${skill.delay}ms`,
                    animationFillMode: 'forwards',
                    animationDuration: '0.5s',
                  }}
                >
                  <div
                    className="mb-4 transform transition-transform duration-300 hover:scale-125"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Tools */}
          <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-3xl">
          <h2 className="section-heading mb-10">My Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 transform opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${tool.delay}ms`,
                    animationFillMode: 'forwards',
                    animationDuration: '0.5s',
                  }}
                >
                  <div
                    className="mb-4 transform transition-transform duration-300 hover:scale-125"
                    style={{ color: tool.color }}
                  >
                    {tool.icon}
                  </div>
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
