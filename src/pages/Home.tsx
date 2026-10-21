import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import {
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Trophy,
  Award,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const exploreSections = [
  {
    title: 'About Me',
    subtitle: 'Education, journey & philosophy',
    path: '/about',
    icon: <User size={22} className="text-emerald-400" />,
    badge: '01',
  },
  {
    title: 'Skills & Arsenal',
    subtitle: 'Languages, frameworks & tools',
    path: '/skills',
    icon: <Cpu size={22} className="text-emerald-400" />,
    badge: '02',
  },
  {
    title: 'Featured Projects',
    subtitle: 'AI systems, full-stack & web apps',
    path: '/projects',
    icon: <FolderGit2 size={22} className="text-emerald-400" />,
    badge: '03',
  },
  {
    title: 'Experience & Community',
    subtitle: 'Internships, GDG & leadership',
    path: '/experience',
    icon: <Briefcase size={22} className="text-emerald-400" />,
    badge: '04',
  },
  {
    title: 'Achievements',
    subtitle: 'Hackathon rankings & awards',
    path: '/achievements',
    icon: <Trophy size={22} className="text-emerald-400" />,
    badge: '05',
  },
  {
    title: 'Certifications',
    subtitle: 'Drone tech & professional credentials',
    path: '/certifications',
    icon: <Award size={22} className="text-emerald-400" />,
    badge: '06',
  },
  {
    title: 'Contact',
    subtitle: 'Direct email & social profiles',
    path: '/contact',
    icon: <Mail size={22} className="text-emerald-400" />,
    badge: '07',
  },
];

const Home = () => {
  return (
    <Layout>
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Explore Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-emerald text-xs">
                <Sparkles size={12} className="text-emerald-400" />
                Portfolio Hub
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Explore My Journey & Work
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Select any section to dive into comprehensive details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {exploreSections.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bento-card p-5 group flex flex-col justify-between hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-[#0c1f17] transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-emerald-950/40 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:text-emerald-300">
                <span>Explore</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
