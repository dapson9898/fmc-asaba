import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  HelpCircle,
  MessageSquare,
  Send,
  MapPin,
  CheckCircle,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

export const GetInTouchSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  // Math Captcha state
  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(4);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const regenerateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 8) + 1);
    setNum2(Math.floor(Math.random() * 8) + 1);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput.trim(), 10) !== num1 + num2) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setCaptchaError(false);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      });
      regenerateCaptcha();
    }, 800);
  };

  return (
    <section
      id="contact-section"
      className="relative z-10 w-full py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            24/7 Enquiries &amp; Patient Relations
          </div>

          <h2
            id="get-in-touch-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Get in touch
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We have an actively manned customer care service eagerly waiting to respond to your call as best we can. Reach us today! FMC Asaba surely has an answer to your enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Form: Matching the fields & Captcha in the reference */}
          <div className="lg:col-span-8 bg-slate-50/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-10 sm:py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Federal Medical Centre, Asaba. Our customer support desk has received your enquiry and will respond promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 2x2 Grid for Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="Number"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    required
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs resize-none"
                  />
                </div>

                {/* Captcha & Submit Row matching reference */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* Captcha Challenge Box */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 text-emerald-950 font-bold text-sm tracking-wide shadow-2xs select-none">
                      <span>What is {num1} + {num2}?</span>
                      <button
                        type="button"
                        onClick={regenerateCaptcha}
                        title="New question"
                        className="text-emerald-700 hover:text-emerald-900 transition-colors p-1"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Answer here"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setCaptchaError(false);
                      }}
                      className={`w-32 px-3.5 py-2.5 bg-white border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none shadow-2xs ${
                        captchaError
                          ? 'border-red-400 ring-2 ring-red-400/20'
                          : 'border-slate-200 focus:border-emerald-600'
                      }`}
                    />
                  </div>

                  {/* Send Message Button matching reference green styling */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>

                {captchaError && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Incorrect math answer. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right Contact Info Cards matching reference */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Physical Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-slate-800">
                <h4 className="font-bold text-base font-heading">
                  Federal Medical Centre
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                  Nnebisi road, Asaba, Delta State, Nigeria
                </p>
              </div>
            </div>

            {/* Card 2: Phone Numbers */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-slate-800 space-y-1">
                <a
                  href="tel:+2349167810386"
                  className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  +234 916 781 0386
                </a>
                <a
                  href="tel:+2349167791541"
                  className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  +234 916 779 1541
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">24/7 Switchboard &amp; Call Line</p>
              </div>
            </div>

            {/* Card 3: Official Email */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-slate-800">
                <a
                  href="mailto:info@fmcasaba.org"
                  className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  info@fmcasaba.org
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Official Registry &amp; Help Desk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
