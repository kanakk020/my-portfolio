import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#d1cee2]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl font-semibold border-b-4 border-portfolio-primary pb-2">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question, feel free to reach out!
          </p>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center text-portfolio-primary">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">kanaksaini020@gmail.com</p>
            </div>
          </div>

          <p className="text-gray-500 mb-4">Connect with me:</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/kanakk020" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kanaksaini020/" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/Kanakk_020" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
