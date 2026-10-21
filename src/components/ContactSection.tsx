import React, { useState } from 'react';
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
  MessageSquare,
  Loader2,
  Radio,
  Activity,
} from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const email = 'kanaksaini020@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // 1. If Web3Forms Access Key is provided, submit silently via API
    if (accessKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: subject,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const data = await response.json();

        if (response.ok && data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.warn('API submission failed or timed out:', err);
      }
    }

    // 2. Fallback: Direct email dispatch so user is NEVER stuck on loading
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;

    try {
      const newWin = window.open(gmailUrl, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = mailtoUrl;
      }
    } catch {
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 relative border-t border-emerald-950/30 overflow-hidden">
      {/* Left Flank: Communications & Radio Link Rail */}
      <div className="absolute left-2 xl:left-5 2xl:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Top Node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#06120b] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <Radio size={14} className="animate-pulse" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 font-bold uppercase">
            RADIO.LINK
          </span>
        </div>

        {/* Circuit Trace with Traveling Pulse Bead */}
        <div className="relative h-32 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" />
        </div>

        {/* Micro Transmission Block */}
        <div className="px-2.5 py-1.5 rounded-md bg-[#050e08]/90 border border-emerald-500/20 backdrop-blur-sm text-center shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <div className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider flex items-center gap-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>INBOX//DIRECT</span>
          </div>
          <div className="font-mono text-[8px] text-emerald-400/60 leading-tight tracking-widest mt-1">
            <div>PORT: 443 TLS</div>
            <div>STATUS: LISTEN</div>
            <div>ROUTING: GMAIL</div>
          </div>
        </div>

        {/* Lower Circuit Trace */}
        <div className="relative h-24 w-[1.5px] bg-gradient-to-b from-emerald-500/35 via-emerald-500/20 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-down" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Right Flank: Dispatch Telemetry & Radar */}
      <div className="absolute right-2 xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none opacity-80 hover:opacity-100 transition-opacity">
        {/* Dispatch Telemetry HUD */}
        <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#06120b]/90 backdrop-blur-md font-mono text-[9px] space-y-1 shadow-[0_0_20px_rgba(16,185,129,0.15)] w-36">
          <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
            <span className="flex items-center gap-1">
              <Send size={11} className="text-emerald-400 animate-pulse" />
              <span>DISPATCH</span>
            </span>
            <span className="text-[8px] text-emerald-400/70">READY</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>DELIVERY:</span>
            <span className="text-emerald-300 font-semibold">DIRECT</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>ENCRYPT:</span>
            <span className="text-gray-300">TLS 1.3</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-[8.5px]">
            <span>LATENCY:</span>
            <span className="text-emerald-400 font-bold">&lt;100ms</span>
          </div>
        </div>

        {/* Upward Circuit Trace */}
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-emerald-300 rounded-full blur-[0.5px] shadow-[0_0_8px_#34d399] animate-rail-up" />
        </div>

        {/* Rotating Communications Radar Disc */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/40 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
          <Activity size={13} className="text-emerald-400 animate-pulse drop-shadow-[0_0_6px_#10b981]" />
        </div>

        <span className="text-[8px] font-mono tracking-widest text-emerald-400/60 uppercase">
          SIGNAL // 2.4G
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold">
              Get in Touch
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let's Connect &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Build Together.
            </span>
          </h2>
        </div>

        {/* 2-Column Compact Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* Left Column (5 cols): Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Direct Email Card */}
            <div className="bento-card p-4 sm:p-5 space-y-3">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                Direct Inquiries
              </span>

              <div className="p-3 rounded-lg bg-[#06110b] border border-emerald-500/20 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase text-gray-400 block font-semibold">Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-bold text-white hover:text-emerald-300 transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="btn-glass text-xs !py-1 !px-2.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                      <CheckCircle size={12} />
                      Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Copy size={12} />
                      Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#06110b]/80 border border-emerald-500/15 flex items-center gap-2 min-w-0">
                  <MapPin size={15} className="text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] text-gray-400 uppercase block">Location</span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-white leading-tight block truncate">Delhi NCR, India</span>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-[#06110b]/80 border border-emerald-500/15 flex items-center gap-2 min-w-0">
                  <Clock size={15} className="text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] text-gray-400 uppercase block">Timezone</span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-white leading-tight block truncate">IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels in 1 compact row */}
            <div className="bento-card p-3.5 sm:p-4">
              <span className="text-xs font-bold text-white block mb-2.5">
                Profiles & Networks
              </span>

              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/kanaksaini020/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#06110b] border border-emerald-500/20 flex flex-col items-center justify-center text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-emerald-400 mb-1" />
                  <span className="text-[10px] font-medium text-gray-300">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/kanakk020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#06110b] border border-emerald-500/20 flex flex-col items-center justify-center text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={16} className="text-emerald-400 mb-1" />
                  <span className="text-[10px] font-medium text-gray-300">GitHub</span>
                </a>

                <a
                  href="https://x.com/Kanakk_020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#06110b] border border-emerald-500/20 flex flex-col items-center justify-center text-gray-300 hover:text-white hover:border-emerald-400 transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <Twitter size={16} className="text-emerald-400 mb-1" />
                  <span className="text-[10px] font-medium text-gray-300">Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Compact Contact Form */}
          <div className="lg:col-span-7">
            <div className="bento-card p-4 sm:p-5 space-y-3.5">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  <MessageSquare size={16} className="text-emerald-400" />
                  <span>Send a Direct Message</span>
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 text-center rounded-lg bg-emerald-950/30 border border-emerald-500/25 space-y-2.5 animate-fade-in">
                  <CheckCircle size={32} className="mx-auto text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
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
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-lg bg-[#06110b] border border-emerald-500/20 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 rounded-lg bg-[#06110b] border border-emerald-500/20 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Kanak, let's discuss..."
                      className="w-full px-3 py-2 rounded-lg bg-[#06110b] border border-emerald-500/20 text-white text-xs focus:outline-none focus:border-emerald-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-emerald !py-2 !px-5 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={13} className="animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
