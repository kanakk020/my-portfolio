import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050807] text-[#F5F7F5] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden flex flex-col justify-between">
      {/* Background Decorative Ambient Spotlights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[550px] bg-emerald-500/5 blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-700/5 blur-[150px] pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none -z-10"></div>

      {/* Persistent Navigation */}
      <Navbar />

      {/* Page Content Container */}
      <main className="flex-grow pt-28 pb-12 w-full animate-fade-in">
        {children}
      </main>

      {/* Persistent Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
