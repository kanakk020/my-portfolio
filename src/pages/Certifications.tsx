import React from 'react';
import Layout from '@/components/Layout';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Cpu, Terminal, BookCheck } from 'lucide-react';

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
    association: 'In Association with ISRO',
    category: 'Avionics & Aerial Robotics',
    description:
      'Rigorous training and practical exposure to modern unmanned aerial vehicle (UAV) systems, autonomous flight controllers, telemetry protocols, sensor integration, and aerial computational vision.',
    skillsValidated: [
      'UAV system architectures and flight telemetry',
      'Hardware-software integration and avionics protocols',
      'Remote sensing data capture and image analysis',
    ],
    icon: <Cpu size={26} className="text-emerald-400" />,
  },
  {
    id: 2,
    title: 'Full Stack Development Training',
    issuer: 'TektonTech Solutions',
    association: 'Professional Certification Program',
    category: 'Full-Stack Software Engineering',
    description:
      'Intensive industry training curriculum focused on engineering scalable web architectures, asynchronous backend REST APIs, component-driven frontend applications, database modeling, and automated deployment pipelines.',
    skillsValidated: [
      'Full-stack JavaScript/TypeScript engineering (React, Node.js)',
      'Relational and NoSQL database query optimization',
      'API authentication, security headers, and production deployment',
    ],
    icon: <Terminal size={26} className="text-emerald-400" />,
  },
  {
    id: 3,
    title: 'Open Source & AI Conclave',
    issuer: 'Microsoft, Gurugram',
    association: 'Official Delegate & Participant',
    category: 'Artificial Intelligence & Open Source',
    description:
      'Participated in high-level technical sessions and architecture keynotes at Microsoft Campus Gurugram, exploring enterprise generative AI implementation, open-source governance, model deployment, and cloud scalability.',
    skillsValidated: [
      'Enterprise LLM and AI workflow integration',
      'Open-source repository contribution standards',
      'Developer tooling and cloud DevOps best practices',
    ],
    icon: <BookCheck size={26} className="text-emerald-400" />,
  },
];

const Certifications = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Verified Credentials
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Certifications & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Professional Accreditations.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Formal engineering programs, aerospace technologies, and recognized tech industry conclaves.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/kanaksaini020/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-xs sm:text-sm !py-2.5 !px-5 self-start sm:self-auto border-emerald-500/25 hover:border-emerald-400"
          >
            <span>Verify on LinkedIn</span>
            <ExternalLink size={14} className="text-emerald-400" />
          </a>
        </div>

        {/* Certifications Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bento-card p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-400/40 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#06110b] border border-emerald-500/25 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    {cert.icon}
                  </div>
                  <span className="badge-emerald text-[11px]">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                  {cert.title}
                </h3>

                <h4 className="text-xs sm:text-sm font-semibold text-emerald-300 mb-0.5">
                  {cert.issuer}
                </h4>

                {cert.association && (
                  <p className="text-[11px] text-gray-400 mb-4 font-medium">
                    {cert.association}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Validated Skills */}
                <div className="p-3.5 rounded-xl bg-[#06110b]/80 border border-emerald-500/15 space-y-1.5 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400/90 block mb-1">
                    Competencies Validated:
                  </span>
                  {cert.skillsValidated.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-950/40 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} />
                  <span>Credential Active</span>
                </span>
                <span className="text-gray-400 text-[11px]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Certifications;
