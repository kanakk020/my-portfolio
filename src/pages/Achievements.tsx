import React from 'react';
import Layout from '@/components/Layout';
import { Trophy, Award, Star, Users, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface HackathonDetail {
  id: number;
  name: string;
  result: string;
  location: string;
  timeline: string;
  description: string;
  image: string;
  highlights: string[];
}

const keyMilestones = [
  {
    icon: <Trophy size={32} className="text-amber-400" />,
    ranking: 'Top 4 Finalist',
    event: "Nexify'26 Hackathon",
    subtext: 'Out of 450+ collegiate engineering teams',
    badge: 'Participant',
  },
  {
    icon: <Star size={32} className="text-emerald-400" />,
    ranking: 'Top 15 & Winner',
    event: 'HackWithMAIT & SprintHacks',
    subtext: 'Top ranks in Innovation & Sprint Tracks',
    badge: 'Rank Holder',
  },
  {
    icon: <Users size={32} className="text-teal-300" />,
    ranking: 'Event Organizer',
    event: 'Open Source & AI Conclave',
    subtext: 'Microsoft Campus, Gurugram',
    badge: 'Stewardship',
  },
  {
    icon: <Award size={32} className="text-emerald-300" />,
    ranking: '7th Place Winner',
    event: 'SprintHacks 3.0',
    subtext: '24-hour sprint at KIET Ghaziabad',
    badge: 'Winner',
  },
];

const hackathons: HackathonDetail[] = [
  {
    id: 1,
    name: 'Smart India Hackathon (SIH 2024)',
    result: 'Top 25 Teams',
    location: 'Online',
    timeline: '2024',
    description:
      'Participated in Smart India Hackathon (SIH) 2024. Advanced through the internal hackathon round and secured a position in the top 25 teams. Collaborated on innovative tech solutions under time constraints, focusing on problem-solving, teamwork, and real-world application of skills.',
    image: 'https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg',
    highlights: [
      'Qualified through rigorous internal competitive rounds into Top 25',
      'Architected end-to-end full-stack software prototype addressing real-world problem statements',
      'Practiced collaborative rapid prototyping under strict time limitations',
    ],
  },
  {
    id: 2,
    name: 'HackWithMAIT 5.0',
    result: 'Top 15 Innovation Track',
    location: 'MAIT, Delhi',
    timeline: '2024',
    description:
      'Participated in HackWithMAIT 5.0 and ranked in the top 15 under the Innovation Track. Developed a creative tech solution focused on real-world impact, showcasing strong problem-solving, innovation, and teamwork throughout the hackathon.',
    image: '/images/mait.png',
    highlights: [
      'Ranked among the top 15 projects in the competitive Innovation Track',
      'Engineered accessible frontend user flows and responsive data dashboards',
      'Presented live technical demonstrations before industry jury panels',
    ],
  },
  {
    id: 3,
    name: 'SprintHacks 3.0',
    result: '7th Place Winner',
    location: 'KIET, Ghaziabad',
    timeline: '2024',
    description:
      'Participated in SprintHacks 3.0, a 24-hour hackathon with 30 teams, securing 7th place by developing an innovative tech solution through collaboration, rapid prototyping, and problem-solving under pressure.',
    image: '/images/sprint.jpg',
    highlights: [
      'Secured 7th place out of 30 qualified shortlisted finalist teams',
      'Built and deployed a functional working application within 24 hours',
      'Demonstrated robust system design and clean client-server communication',
    ],
  },
];

const Achievements = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
                Milestones & Honors
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Achievements, Awards & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Hackathon Triumphs.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Competitive engineering tournaments and recognized milestones that keep me building at the highest standard.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/kanaksaini020/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-xs sm:text-sm !py-2.5 !px-5 self-start sm:self-auto border-emerald-500/25 hover:border-emerald-400"
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink size={14} className="text-emerald-400" />
          </a>
        </div>

        {/* 4 Key Milestone Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyMilestones.map((item, idx) => (
            <div
              key={idx}
              className="bento-card p-6 flex flex-col items-center text-center justify-between hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-[#0c1f17] transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#06110b] border border-emerald-500/25 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                {item.icon}
              </div>

              <div>
                <span className="badge-emerald text-[11px] mb-2">
                  {item.badge}
                </span>
                <h3 className="text-xl font-extrabold text-white font-display mb-1">
                  {item.ranking}
                </h3>
                <h4 className="text-sm font-semibold text-emerald-300 mb-1">
                  {item.event}
                </h4>
                <p className="text-xs text-gray-400">
                  {item.subtext}
                </p>
              </div>

              <div className="w-full pt-4 mt-4 border-t border-emerald-950/40 text-[11px] text-emerald-400/80 font-medium">
                Verified Milestone
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Hackathon Journey Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Competitive Hackathon Detailed Records
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {hackathons.map((h) => (
              <div
                key={h.id}
                className="bento-card overflow-hidden group flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 w-full lg:w-[calc(50%-1rem)]"
              >
                {/* Image Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-black/40 border-b border-emerald-500/15">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-85 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091510] via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="badge-emerald text-xs backdrop-blur-md bg-black/70 border-emerald-500/30">
                      {h.result}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-300 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <MapPin size={13} />
                      <span>{h.location}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-emerald-500/20 text-gray-300">
                      {h.timeline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {h.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                      {h.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#06110b]/80 border border-emerald-500/15 space-y-1.5">
                      {h.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Achievements;
