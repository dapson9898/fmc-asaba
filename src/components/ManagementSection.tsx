import React from 'react';
import { createPortal } from 'react-dom';
import { Award, Mail, ChevronRight, X, ShieldCheck, Briefcase } from 'lucide-react';
import { MANAGEMENT_TEAM, ManagementMember } from '../data/managementData';

interface ManagementSectionProps {
  onContactSecretary?: () => void;
}

export const ManagementSection: React.FC<ManagementSectionProps> = ({ onContactSecretary }) => {
  const [selectedMember, setSelectedMember] = React.useState<ManagementMember | null>(null);

  // Lock background scrolling and add ESC key listener when modal is open
  React.useEffect(() => {
    if (selectedMember) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedMember(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedMember]);

  return (
    <section
      id="management-section"
      className="relative z-10 w-full py-16 sm:py-24 bg-linear-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact subtitle from the FMC Asaba reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Executive Leadership &amp; Governance
          </div>

          <h2
            id="management-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
          >
            Management Team
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Meet the individuals at the helm of affairs in Federal Medical Centre, Asaba.
          </p>
        </div>

        {/* 5-Column Responsive Cards Grid matching the 5 executives in the reference */}
        <div
          id="management-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 lg:gap-5"
        >
          {MANAGEMENT_TEAM.map((member, index) => {
            const isMd = index === 0;
            return (
              <div
                key={member.id}
                id={`management-card-${member.id}`}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-emerald-500/70 transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
              >
                {/* Photo Frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-slate-950">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge for MD or Departmental Heads */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-tight shadow-md backdrop-blur-md ${
                        isMd
                          ? 'bg-emerald-700/90 text-white border border-emerald-400/30'
                          : 'bg-slate-900/80 text-emerald-300 border border-white/15'
                      }`}
                    >
                      {isMd ? <Award className="w-3 h-3 text-amber-300" /> : <ShieldCheck className="w-3 h-3" />}
                      <span>{isMd ? 'Chief Executive' : member.category}</span>
                    </span>
                  </div>

                  {/* Quick Expand hover hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-emerald-800 shadow-md">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex-1 flex flex-col justify-between p-5 text-left">
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading leading-tight group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 font-medium leading-snug line-clamp-3">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                    <span>View Profile</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership Bio & Portfolio Modal (Portal to document.body prevents sibling section stacking overlap) */}
      {selectedMember && typeof document !== 'undefined' && createPortal(
        <div
          id="management-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="management-modal-title"
          className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md overflow-y-auto overscroll-contain p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div className="min-h-full flex items-end sm:items-center justify-center">
            <div
              id="management-modal-card"
              className="relative w-full max-w-2xl bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col h-[90dvh] sm:h-auto sm:max-h-[85vh] overflow-hidden my-auto animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header banner */}
              <div className="shrink-0 bg-linear-to-r from-emerald-900 via-emerald-800 to-slate-900 px-5 pt-3 pb-5 sm:p-7 text-white">
                {/* Mobile grab handle */}
                <div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-3 sm:hidden" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shrink-0 bg-slate-950">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-semibold border border-emerald-400/30 mb-1 truncate max-w-full">
                        {selectedMember.officeTitle}
                      </span>
                      <h3 id="management-modal-title" className="text-base sm:text-2xl font-bold font-heading leading-tight text-white line-clamp-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-emerald-100/90 mt-0.5 font-medium line-clamp-2">
                        {selectedMember.role}
                      </p>
                    </div>
                  </div>

                  {/* Highly prominent and accessible Close Button */}
                  <button
                    id="close-management-modal-btn"
                    onClick={() => setSelectedMember(null)}
                    aria-label="Close profile modal"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-sm border border-white/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body - Fully scrollable on desktop and mobile with min-h-0 constraint */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-5 sm:space-y-6 text-slate-700 text-sm leading-relaxed touch-pan-y">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    Executive Portfolio &amp; Mandate
                  </h4>
                  <p className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100 text-slate-700 leading-relaxed text-xs sm:text-sm">
                    {selectedMember.shortBio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Core Leadership Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedMember.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Secretariat Contact */}
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100/80 flex items-center gap-2.5 text-xs text-slate-700">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="truncate">Official Secretariat: <strong className="text-slate-900 font-semibold">{selectedMember.contactEmail}</strong></span>
                </div>
              </div>

              {/* Fixed Bottom Action Footer - Always visible and accessible */}
              <div className="shrink-0 bg-slate-50 px-4 py-3 sm:px-6 sm:py-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedMember(null);
                    if (onContactSecretary) onContactSecretary();
                  }}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer text-center"
                >
                  Contact Office
                </button>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-200/90 hover:bg-slate-300 active:scale-98 text-slate-800 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
