import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 text-center py-20 space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-[#091510] border border-emerald-500/25 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <Compass size={36} className="animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div>
          <span className="badge-emerald text-xs mb-2">Error 404</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            The page <code className="text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">{location.pathname}</code> does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="btn-emerald inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
