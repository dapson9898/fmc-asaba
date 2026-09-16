import React, { useState } from 'react';
import { Eye, Compass, ShieldCheck, ArrowRight, X, Calendar, CheckCircle2, Award, Building, Sparkles } from 'lucide-react';
import aboutImage from '../assets/images/fmc_about_nurses.jpg';

interface AboutSectionProps {
  onExploreDepartments?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreDepartments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock background scrolling and add ESC key listener when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <section
      id="about-section"
      className="relative z-10 w-full py-16 sm:py-24 bg-white border-t border-slate-200/80 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Heading, History Narrative & Vision/Mission/Values Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Federal Tertiary Healthcare Institution
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight"
            >
              About FMC Asaba
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Federal Medical Centre, Asaba was established in August, 1998 as a result of the policy of the Federal Government to provide a Federal Medical Centre in any state of the country where there is no Federal Teaching Hospital. Remarkably, the new Federal Medical Centre, Asaba took off with a mere change of name and ownership from the old Central Hospital, Asaba.
            </p>

            {/* 3 Pillars Grid: Vision, Mission, Core Values */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                    Vision
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed flex-1">
                  To be an outstanding medical centre in the delivery of qualitative and affordable healthcare services and development of skilled manpower through training and research.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                    Mission
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed flex-1">
                  We are dedicated to the provision of prompt, qualitative, acceptable, accessible and affordable healthcare services through highly motivated workforce and modern technology in collaboration with stakeholders.
                </p>
              </div>

              {/* Core Values Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                    Core Values
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed flex-1">
                  Professionalism, Honesty, Transparency, Accountability, Patient satisfaction, Cleanliness, Neatness, Team work, Staff Motivation, Development and Efficiency in resource Management.
                </p>
              </div>
            </div>

            {/* Learn More Button matching the green button in reference */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="about-learn-more-btn"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Learn more about FMC Asaba</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('departments-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else if (onExploreDepartments) onExploreDepartments();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
              >
                <span>Explore Clinical Services</span>
              </button>
            </div>
          </div>

          {/* Right Column: Circular Hospital Staff Visual matching reference */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Outer Decorative Glow & Accent Rings */}
              <div className="absolute inset-0 rounded-full bg-emerald-100/60 scale-105 filter blur-xs animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-emerald-400/40" />

              {/* Circular Clipped Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-900">
                <img
                  src={aboutImage}
                  alt="FMC Asaba Medical Professionals and Nursing Staff"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Serving Since 1998</p>
                  <p className="text-[11px] text-slate-500 font-medium">Over 25 Years of Healing</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Comprehensive "Learn More About FMC Asaba" Institutional Modal */}
      {isModalOpen && (
        <div
          id="about-institutional-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="min-h-full flex items-center justify-center py-4 sm:py-8">
            <div
              className="relative w-full max-w-3xl my-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[calc(100dvh-2.5rem)] sm:max-h-[88vh] animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="shrink-0 bg-linear-to-r from-emerald-900 via-emerald-800 to-slate-900 p-6 sm:p-7 text-white flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30 mb-2">
                    Institutional Profile &amp; History
                  </span>
                  <h3 id="about-modal-title" className="text-2xl sm:text-3xl font-bold font-heading leading-tight text-white">
                    Federal Medical Centre, Asaba
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                    Delta State's Premier Federal Tertiary Healthcare &amp; Post-Graduate Training Facility
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed">
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-700" />
                  Origin &amp; Historical Trajectory
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Federal Medical Centre, Asaba was established in August, 1998 pursuant to the policy of the Federal Government to provide a Federal Medical Centre in any state of the federation lacking a Federal Teaching Hospital. The centre transitioned seamlessly from the former Central Hospital Asaba, inheriting its foundational legacy while aggressively upgrading its infrastructure into a modern tertiary facility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Key Milestones</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>August 1998: Formal takeover &amp; federal commissioning.</li>
                    <li>2005: Full accreditation for Family Medicine residency.</li>
                    <li>2018: Expansion of specialized Intensive Care Units (ICU).</li>
                    <li>2023: Commissioning of cutting-edge Diagnostic Suites.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Statutory Mandate</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Comprehensive multi-specialty clinical care.</li>
                    <li>Residency training for doctors, nurses, &amp; allied staff.</li>
                    <li>Clinical research &amp; disease surveillance (CDCR).</li>
                    <li>Community health extension and immunization outreach.</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <h4 className="text-sm font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  Patients' Right &amp; Service Charter
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  FMC Asaba is dedicated to compassionate, non-discriminatory, prompt medical care. Through SERVICOM and the Clinical Audit Directorate, every patient is guaranteed transparent treatment protocols, dignified attention, and accessible grievance channels.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  Close Institutional Overview
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};
