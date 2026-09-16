import React from 'react';
import { Briefcase, AlertCircle, Newspaper, ArrowRight, ShieldAlert } from 'lucide-react';

interface RecruitmentsSectionProps {
  onGoToNews?: () => void;
}

export const RecruitmentsSection: React.FC<RecruitmentsSectionProps> = ({ onGoToNews }) => {
  return (
    <section
      id="recruitments-section"
      className="relative z-10 w-full py-16 sm:py-20 bg-linear-to-b from-slate-50 to-white border-t border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Federal Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
          Federal Career Notices &amp; Vacancies
        </div>

        {/* Section Heading matching reference */}
        <h2
          id="recruitments-heading"
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading"
        >
          Recruitments
        </h2>

        {/* Narrative matching the reference screenshot */}
        <div className="mt-5 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            As a Federal establishment, recruitments in FMC Asaba are always advertised in National dailies prior to commencement of the exercise.
          </p>
          <p>
            Kindly check newspapers to know when we or other Federal organisations are recruiting.
          </p>
          <p className="font-medium text-slate-700">
            We also advertise in the news section of our website above.
          </p>
        </div>

        {/* Action Button & Fraud Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="view-career-news-btn"
            onClick={() => {
              if (onGoToNews) {
                onGoToNews();
              } else {
                const el = document.getElementById('news-section') || document.getElementById('fmc-header');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <Newspaper className="w-4 h-4" />
            <span>Check News Section for Notices</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Anti-fraud Warning Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm text-left flex items-start gap-3 max-w-2xl mx-auto shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Public Disclaimer:</span> Federal Medical Centre Asaba will{' '}
            <strong className="underline">NEVER</strong> solicit fees, processing charges, or agency payments for employment opportunities. All official recruitments are strictly merit-based and published through authorized federal gazettes and national daily newspapers.
          </div>
        </div>
      </div>
    </section>
  );
};
