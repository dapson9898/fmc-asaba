import React from 'react';
import { MD_INFO } from '../data/newsData';
import { Award, Quote } from 'lucide-react';

interface MDWelcomeCardProps {
  onLearnMore?: () => void;
}

export const MDWelcomeCard: React.FC<MDWelcomeCardProps> = ({ onLearnMore }) => {
  return (
    <div
      id="md-welcome-card"
      className="relative rounded-2xl bg-white/90 backdrop-blur-md p-5 sm:p-6 border border-emerald-900/10 shadow-lg shadow-emerald-950/5 transition-all duration-300 hover:shadow-xl hover:bg-white"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* MD Picture */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-emerald-600/30 shadow-md ring-4 ring-emerald-500/10">
            <img
              src={MD_INFO.image}
              alt={`${MD_INFO.name} - ${MD_INFO.title}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Official Seal badge pill */}
          <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-1 rounded-full shadow-md border-2 border-white" title="Chief Executive Officer">
            <Award className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* MD Welcome Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
              Leadership Address
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-slate-500 font-medium">Chief Medical Director</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
            Medical Director's welcome
          </h3>

          <div className="relative mt-2">
            <Quote className="absolute -top-1 -left-2 w-4 h-4 text-emerald-400/40 rotate-180" />
            <p className="text-xs sm:text-sm text-slate-700 italic pl-3.5 leading-relaxed font-normal">
              "{MD_INFO.quote}"
            </p>
          </div>

          {/* Signature & Name */}
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <div>
              <p className="font-signature text-xl sm:text-2xl text-emerald-800 -mb-1 select-none">
                Dr. Omo Ekenam
              </p>
              <p className="text-[11px] font-semibold text-slate-600">
                {MD_INFO.name} <span className="font-normal text-slate-600">({MD_INFO.credentials})</span>
              </p>
            </div>

            {/* {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
              >
                Full Profile & Vision
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
