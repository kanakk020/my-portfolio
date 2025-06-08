
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#7168a2] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-black">Kanak Saini</p>
            <p className="text-sm text-gray-800">Software Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-900 flex items-center justify-center md:justify-end">
              Made with <Heart size={16} className="mx-1 text-red-900" /> in {currentYear}
            </p>
            <p className="text-xs text-gray-900 mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
