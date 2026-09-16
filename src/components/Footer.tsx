import React from 'react';
import fmcLogoOfficial from '../assets/images/fmc_asaba_official_logo_1789552607691.jpg';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onNavigateDepartments?: () => void;
  onNavigateContact?: () => void;
  onNavigateNews?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateDepartments,
  onNavigateContact,
  onNavigateNews
}) => {
  return (
    <footer id="fmc-footer" className="relative z-10 w-full bg-slate-100/80 border-t border-slate-200/90 pt-16 pb-10 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Column 1: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-slate-900 font-heading tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigateAbout) onNavigateAbout();
                    else document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigateDepartments) onNavigateDepartments();
                    else document.getElementById('departments-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigateContact) onNavigateContact();
                    else document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Key Portals & Governance */}
          <div className="lg:col-span-3 space-y-4 sm:pt-9">
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/departments/cdcr"
                  className="text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  CDCR
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('management-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Staff Strength
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Achievements
                </button>
              </li>
              <li>
                <a
                  href="https://webmail.fmcasaba.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  Staff webmail
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Reach the IT Team */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-heading tracking-tight">
              Reach the IT Team
            </h4>
            <div className="text-sm text-slate-600 leading-relaxed space-y-1">
              <p className="font-medium text-slate-800">FMC Asaba IT Team</p>
              <p>Main Admin Building,</p>
              <p>Ground Floor,</p>
              <p>Asaba</p>
              <p className="pt-1">
                Email:{' '}
                <a
                  href="mailto:info@fmcasaba.org"
                  className="text-emerald-700 hover:underline font-medium"
                >
                  info@fmcasaba.org
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Social Media & Official Crest */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Follow us on social media. We are only on the popular social media platforms listed below.
            </p>

            {/* Social Icons matching green circular style from reference */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/fmcasaba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FMC Asaba Facebook"
                className="w-9 h-9 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-800 hover:text-white flex items-center justify-center transition-colors shadow-2xs font-bold text-sm"
              >
                f
              </a>
              {/* Twitter/X */}
              <a
                href="https://twitter.com/fmcasaba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FMC Asaba Twitter"
                className="w-9 h-9 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-800 hover:text-white flex items-center justify-center transition-colors shadow-2xs font-bold text-xs"
              >
                𝕏
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/fmcasaba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FMC Asaba Instagram"
                className="w-9 h-9 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-800 hover:text-white flex items-center justify-center transition-colors shadow-2xs font-bold text-xs"
              >
                ig
              </a>
            </div>

            {/* Official FMC Asaba Delta State Crest */}
            <div className="pt-2 flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-600/50 p-0.5 shadow-sm overflow-hidden shrink-0">
                <img
                  src={fmcLogoOfficial}
                  alt="Federal Medical Centre Asaba Delta State Official Crest"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800 leading-tight">Federal Medical Centre Asaba</p>
                <p className="text-emerald-700 font-medium">Delta State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Browser note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>
            Recommended Browser: Mozilla Firefox - Designed and Developed by the FMC Asaba IT Department
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} Federal Medical Centre, Asaba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
