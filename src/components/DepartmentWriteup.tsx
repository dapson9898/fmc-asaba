import { useState } from 'react';
import { Department, DepartmentContent } from '../data/departments';

interface DepartmentWriteupProps {
  department: Department;
  content: DepartmentContent;
}

export function DepartmentWriteup({ department, content }: DepartmentWriteupProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = content.contactEmail;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <section
      id="department-details"
      className="relative z-10 w-full min-h-screen px-4 sm:px-8 md:px-12 py-16 md:py-24 max-w-7xl mx-auto"
    >
      {/* Content wrapper card with modern frosted glass effect that lets the medical scanner background peek through */}
      <div
        id="department-main-card"
        className="bg-black/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl text-white transition-all duration-300"
      >
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center md:text-left border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Federal Medical Centre Asaba (FMC Asaba)
          </div>
          <h1
            id="department-page-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {department.name}
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 max-w-3xl">
            {department.category}. Explore the role, services, and people behind FMC Asaba's {department.name.toLowerCase()}.
          </p>
        </div>

        {/* Two-Column Layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Navigation Button & HOD Profile Card */}
          <div id="leadership" className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            {/* "Back to Departments List" Button */}
            <button
              id="back-to-departments-btn"
              type="button"
                  onClick={() => {
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#107c41] hover:bg-[#0d6837] text-white font-medium text-[15px] sm:text-[16px] rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all duration-200 cursor-pointer text-center group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Departments List</span>
            </button>

            {/* Profile Card for Benjamin Yakubu */}
            <div
              id="hod-profile-card"
              className="bg-neutral-900/90 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
                <img
                  id="hod-portrait-img"
                  src={content.portrait}
                  alt={`${department.head} - ${department.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-neutral-300 font-medium">
                  {department.category}
                </div>
              </div>

              {/* Caption & Titles */}
              <div className="p-6 text-center">
                <h3
                  id="hod-name"
                  className="text-2xl sm:text-3xl font-semibold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {department.head}
                </h3>
                <p id="hod-title" className="text-neutral-300 text-base sm:text-lg mt-1 font-normal">
                  Head of Department
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                  <span className="text-xs text-neutral-400">
                    Direct Contact:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-lg py-2 px-3 transition-colors cursor-pointer"
                  >
                    <span>{content.contactEmail}</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
                  {copied && (
                    <span className="text-[11px] text-emerald-300 animate-fade-in">
                      Copied HOD email to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Department Stat Pills */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-xl font-bold text-white">{content.stats[0].value}</span>
                <p className="text-xs text-neutral-400 mt-0.5">{content.stats[0].label}</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className={`text-xl font-bold ${content.stats[1].accent ? 'text-emerald-400' : 'text-white'}`}>{content.stats[1].value}</span>
                <p className="text-xs text-neutral-400 mt-0.5">{content.stats[1].label}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Main Write-Up, Services List, Vision & Team Photo */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
            {/* Primary Paragraph */}
            <div className="text-neutral-100 text-lg sm:text-xl leading-relaxed">
              <p id="dept-overview-p1" className="font-normal">
                {content.overview}
              </p>
            </div>

            {/* Secondary Paragraph & Services Subheading */}
            <div id="digital-services" className="text-neutral-200 text-base sm:text-lg leading-relaxed">
              <p id="dept-overview-p2" className="text-neutral-300">
                {content.introduction}
              </p>
            </div>

            {/* Bulleted List of Services */}
            <div id="dept-services-list" className="space-y-4">
              {content.services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                  <div className="text-sm sm:text-base leading-relaxed">
                    <strong className="text-white font-semibold">
                      {item.title}
                    </strong>{' '}
                    <span className="text-neutral-300">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision & Mandate Paragraph */}
            <div
              id="vision"
              className="p-6 sm:p-7 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-neutral-200 text-base sm:text-lg leading-relaxed mt-2"
            >
              <h4 className="text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-2">
                Vision & Sustained Growth
              </h4>
              <p id="dept-vision-text">
                {content.vision}
              </p>

              {/* Reach Us Callout */}
              <div id="contact" className="mt-5 pt-4 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm sm:text-base text-white">
                  <span className="text-neutral-400">Reach us: </span>
                  <span className="font-semibold text-white">
                    {content.contactEmail}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                  <a
                    href={`mailto:${content.contactEmail}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#107c41] hover:bg-[#0d6837] text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Send Mail</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Photo Section */}
            <div id="team" className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white">
                  {department.name} Team
                </h4>
                <span className="text-xs text-neutral-400">
                  FMC Asaba Headquarters
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-neutral-950 group">
                <img
                  id="it-team-group-photo"
                  src={content.teamImage}
                  alt={`${department.name} team at FMC Asaba`}
                  className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                  <p className="font-medium drop-shadow">
                    {department.name} Team Members and Specialists
                  </p>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/60 border border-white/20 text-[11px]">
                    FMC Asaba
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
