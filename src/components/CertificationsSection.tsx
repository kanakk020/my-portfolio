import React from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Cpu, Terminal, BookCheck, Activity } from 'lucide-react';

interface CertDetail {
  id: number;
  title: string;
  issuer: string;
  association?: string;
  category: string;
  description: string;
  skillsValidated: string[];
  icon: React.ReactNode;
}

const certifications: CertDetail[] = [
  {
    id: 1,
    title: 'Advanced Drone Technology',
    issuer: 'India Space Academy',
    association: 'Winter Training Programme (Certificate)',
    category: 'Avionics & Robotics',
    description:
      'Rigorous training in UAV systems, autonomous flight controllers, telemetry protocols, and aerial computational vision.',
    skillsValidated: [
      'UAV system architectures & telemetry',
      'Avionics protocols & emerging aerospace tech',
    ],
    icon: <Cpu size={20} className="text-emerald-400" />,
  },
  {
    id: 2,
    title: 'Chapter Head Leadership',
    issuer: 'OSCode (2024–2025)',
    association: 'Official Chapter Head Certificate',
    category: 'Community Leadership',
    description:
      'Certified leadership for organizing technical events, developer workshops, hackathons, and open-source coding initiatives.',
    skillsValidated: [
      'Community organizing & tech leadership',
      'Workshop curation & student mentorship',
    ],
    icon: <Award size={20} className="text-emerald-400" />,
  },
  {
    id: 3,
    title: 'Gen AI Hackathon Mentor',
    issuer: 'AI Community',
    association: 'Official Mentor Certificate',
    category: 'AI & Mentorship',
    description:
      'Recognized and certified for mentoring hackathon participants on generative AI integration, prompt engineering, and LLM applications.',
    skillsValidated: [
      'Gen AI architecture & prototyping',
      'Technical problem-solving & guidance',
    ],
    icon: <BookCheck size={20} className="text-emerald-400" />,
  },
  {
    id: 4,
    title: 'Full Stack Development',
    issuer: 'TektonTech Solutions',
    association: 'Software Engineering Internship',
    category: 'Full-Stack Software',
    description:
      'Hands-on engineering of responsive web modules, Next.js dashboard features, REST APIs, and n8n email automation workflows.',
    skillsValidated: [
      'React.js, Next.js & TypeScript',
      'REST APIs & automation pipelines',
    ],
    icon: <Terminal size={20} className="text-emerald-400" />,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Credentials & Verification Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <ShieldCheck size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            VERIFY.CERT
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Credential Block */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>AUTH//VERIFIED</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>IIT DELHI TBI</div>
            <div>AVIAN AERO</div>
            <div>STATUS: ACCREDITED</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.6s' }} />
        </div>
      </div>

      {/* Right Flank: Avionics & Accreditation Telemetry */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Accreditation Telemetry HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Award size={11} className="text-amber-400 animate-pulse" />
              <span>ACCREDIT</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">VALID</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>AVIONICS:</span>
            <span className="text-emerald-300 font-semibold">DRONE TBI</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>ENGINEERING:</span>
            <span className="text-gray-300">FULL-STACK</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>ISSUER:</span>
            <span className="text-emerald-400 font-bold">VERIFIED</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Rotating Certification Stamp Disc */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <CheckCircle2 size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          STAMP // AUTH
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Certifications
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Credentials & Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Accreditations.
              </span>
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/kanaksaini020/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-xs !py-1.5 !px-3 self-start sm:self-auto"
          >
            <span>Verify on LinkedIn</span>
            <ExternalLink size={12} className="text-emerald-400" />
          </a>
        </div>

        {/* Small Consistent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bento-card p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-400/35 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#06110b] border border-emerald-500/25 flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <span className="badge-emerald text-[10px]">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">
                  {cert.title}
                </h3>

                <h4 className="text-xs font-semibold text-emerald-300 mb-0.5">
                  {cert.issuer}
                </h4>

                {cert.association && (
                  <p className="text-[11px] text-gray-400 mb-2.5">
                    {cert.association}
                  </p>
                )}

                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {cert.description}
                </p>

                {/* Validated Skills */}
                <div className="p-2.5 rounded-lg bg-[#06110b]/80 border border-emerald-500/15 space-y-1 mb-3">
                  {cert.skillsValidated.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-emerald-950/40 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} />
                  <span>Credential Active</span>
                </span>
                <span className="text-gray-400 text-[10px]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
