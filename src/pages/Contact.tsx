import React, { useState } from 'react';
import Layout from '@/components/Layout';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const email = 'kanaksaini020@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('message', formData.message);
    postData.append('_subject', formData.subject || `Portfolio Contact from ${formData.name}`);
    postData.append('_captcha', 'false');

    fetch(`https://formsubmit.co/ajax/${email}`, {
      method: 'POST',
      body: postData,
      headers: { Accept: 'application/json' },
    }).catch(console.error);

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
              Get in Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Let's Connect & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
              Build Together.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            I'm always open to discussing full-stack engineering opportunities, hackathon ideas, internships, and creative collaborations.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Contact Information, Copy Email, Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bento-card p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Direct Inquiries
                </span>
                <span className="badge-emerald text-[10px]">
                  Fast Response
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase text-gray-400 block font-semibold">Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-300 transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="btn-glass text-xs !py-1.5 !px-3 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle size={13} />
                      Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={13} />
                      Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#06110b]/80 border border-emerald-500/15 flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Location</span>
                    <span className="text-xs font-semibold text-white">Delhi NCR, India</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#06110b]/80 border border-emerald-500/15 flex items-center gap-3">
                  <Clock size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Timezone</span>
                    <span className="text-xs font-semibold text-white">IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bento-card p-6 sm:p-7 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Connect Across Platforms</span>
                <Sparkles size={16} className="text-emerald-400" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/kanaksaini020/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center gap-3 text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">LinkedIn</span>
                    <span className="text-[10px] text-gray-400">@kanaksaini020</span>
                  </div>
                </a>

                <a
                  href="https://github.com/kanakk020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center gap-3 text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">GitHub</span>
                    <span className="text-[10px] text-gray-400">@kanakk020</span>
                  </div>
                </a>

                <a
                  href="https://x.com/Kanakk_020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#06110b] border border-emerald-500/20 flex items-center gap-3 text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Twitter size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Twitter / X</span>
                    <span className="text-[10px] text-gray-400">@Kanakk_020</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <MessageSquare size={20} className="text-emerald-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill out the form below and it will compose directly to my inbox.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3 animate-fade-in">
                  <CheckCircle size={44} className="mx-auto text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-gray-300">
                    Your message has been sent successfully. I will get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-glass text-xs !py-1.5 !px-3.5 mt-2 inline-flex items-center gap-1.5 text-gray-200 hover:text-white"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#06110b] border border-emerald-500/25 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-[#06110b] border border-emerald-500/25 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#06110b] border border-emerald-500/25 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Kanak, I would love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#06110b] border border-emerald-500/25 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-emerald w-full sm:w-auto !py-3 !px-8 text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Contact;
