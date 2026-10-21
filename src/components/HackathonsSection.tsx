import React from 'react';
import { Trophy, Award, Star, Users, MapPin, Activity } from 'lucide-react';

interface HackathonDetail {
  id: number;
  name: string;
  result: string;
  location: string;
  timeline: string;
  description: string;
  image: string;
}

const keyMilestones = [
  {
    icon: <Trophy size={22} className="text-amber-400" />,
    ranking: 'Top 25 Teams',
    event: 'Smart India Hackathon (SIH 2025)',
    subtext: 'Internal Selection Round',
    badge: 'Selection',
  },
  {
    icon: <Star size={22} className="text-emerald-400" />,
    ranking: 'Winter Training',
    event: 'Advanced Drone Tech',
    subtext: 'India Space Academy',
    badge: 'Certified',
  },
  {
    icon: <Users size={22} className="text-teal-300" />,
    ranking: 'Hackathon Mentor',
    event: 'AI Community Hackathon',
    subtext: 'Project Mentorship',
    badge: 'Leadership',
  },
  {
    icon: <Award size={22} className="text-emerald-300" />,
    ranking: 'Top 15 & Finalist',
    event: 'National Hackathons',
    subtext: 'MAIT, SprintHacks & SIH',
    badge: 'Innovator',
  },
];

const hackathons: HackathonDetail[] = [
  {
    id: 1,
    name: 'Smart India Hackathon (SIH 2025)',
    result: 'Top 25 Teams',
    location: 'Internal College Round',
    timeline: '2025',
    description:
      'Ranked among the Top 25 teams in the internal college selection round of Smart India Hackathon (SIH) 2025, solving real-world technological challenges.',
    image: 'https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg',
  },
  {
    id: 2,
    name: 'HackWithMAIT 5.0',
    result: 'Top 15 Innovation Track',
    location: 'MAIT, Delhi',
    timeline: '2024',
    description:
      'Ranked in top 15 under the Innovation Track. Developed a creative tech solution focused on real-world impact and usability.',
    image: '/images/mait.png',
  },
  {
    id: 3,
    name: 'SprintHacks 3.0',
    result: '7th Place Winner',
    location: 'KIET, Ghaziabad',
    timeline: '2024',
    description:
      'Competed in a 24-hour hackathon against 30 teams, securing 7th place with rapid prototyping and problem-solving.',
    image: '/images/sprint.jpg',
  },
];

const HackathonsSection = () => {
  return (
    <section id="achievements" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Podium & SIH Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.3)]">
            <Trophy size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            SIH.PODIUM
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Achievement HUD */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>HACK//RANK</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>SIH: TOP 25</div>
            <div>INNOVATE: 1ST</div>
            <div>STATUS: WIN</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.7s' }} />
        </div>
      </div>

      {/* Right Flank: Competitive Coding Telemetry */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Milestone Telemetry HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Star size={11} className="text-amber-400 animate-pulse" />
              <span>COMPETITION</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">APEX</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>SOLVED:</span>
            <span className="text-emerald-300 font-semibold">100%</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>CATEGORY:</span>
            <span className="text-gray-300">AI &amp; WEB</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>FINALIST:</span>
            <span className="text-emerald-400 font-bold">STATE</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Rotating Achievement Target Disc */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Award size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          HONOR // APEX
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Achievements
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Milestones, Awards &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Hackathons.
              </span>
            </h2>
          </div>

        </div>

        {/* 4 Compact Milestone Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {keyMilestones.map((item, idx) => (
            <div
              key={idx}
              className="bento-card p-4 flex flex-col items-center text-center justify-between hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center mb-2">
                {item.icon}
              </div>

              <div>
                <span className="text-sm font-extrabold text-white block mb-0.5">
                  {item.ranking}
                </span>
                <span className="text-xs font-semibold text-emerald-300 block mb-0.5">
                  {item.event}
                </span>
                <span className="text-[10px] text-gray-400 block">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Balanced Hackathon Cards */}
        <div className="flex flex-wrap justify-center gap-3.5">
          {hackathons.map((h) => (
            <div
              key={h.id}
              className="bento-card p-3.5 flex flex-col sm:flex-row gap-3 items-start sm:items-center hover:border-emerald-400/35 transition-all duration-200 w-full md:w-[calc(50%-7px)]"
            >
              <div className="w-full sm:w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-black/40 border border-emerald-500/10">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                    {h.name}
                  </h3>
                  <span className="badge-emerald text-[9px] py-0.2 shrink-0">
                    {h.result}
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-1.5">
                  {h.description}
                </p>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400/80 font-medium">
                  <MapPin size={11} />
                  <span>{h.location} • {h.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HackathonsSection;
