
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Code, FileText } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Volunteer', href: '#volunteering' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500',
        isScrolled ? 'bg-white/30 backdrop-blur-md shadow' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-bold text-purple-900 group flex items-center gap-2 transition-all duration-300"
          >
            <Code size={28} className="text-purple-900 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:text-purple-800 text-black">KANAK SAINI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-sm rounded-md transition-all duration-300 relative group flex items-center",
                        activeSection === link.href.substring(1)
                          ? "text-purple-900 font-medium"
                          : "text-gray-700 hover:text-purple-900"
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 w-full h-0.5 bg-purple-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                          activeSection === link.href.substring(1) && "scale-x-100"
                        )}
                      />
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <a
  href="/public/kanakresume.pdf"
  download // <-- Add this attribute
  className="ml-6 flex items-center gap-1.5 text-sm font-medium text-purple-900 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
>
  <FileText size={16} className="animate-pulse" style={{ animationDuration: '3s' }} />
  Resume
</a>

          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <a
              href="/public/kanakresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 flex items-center gap-1 text-sm font-medium text-purple-900"
            >
              <FileText size={16} />
              <span className="sr-only md:not-sr-only">Resume</span>
            </a>

            <button
              className="text-gray-700 focus:outline-none hover:text-purple-900 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "block py-2 px-4 rounded-md transition-all duration-300",
                  activeSection === link.href.substring(1)
                    ? "bg-purple-100 text-purple-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-purple-900"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
