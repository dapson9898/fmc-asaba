import React from 'react';
import { PhoneCall, Search, ExternalLink, ShieldCheck, Menu, X, Newspaper } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenSearch: () => void;
  onOpenEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenSearch,
  onOpenEmergency
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      id="fmc-header"
      className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official FMC Asaba Crest & Identity */}
          <div
            id="fmc-logo-brand"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onViewChange('hero')}
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-700/10 border-2 border-emerald-600 p-1 group-hover:scale-105 transition-transform duration-300">
              {/* Official Seal Graphic */}
              <div className="w-full h-full rounded-full bg-linear-to-tr from-emerald-800 to-green-600 flex items-center justify-center text-white shadow-inner">
                <svg
                  viewBox="0 0 48 48"
                  className="w-7 h-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 1" />
                  {/* Caduceus / Rod of Asclepius with Medical Cross */}
                  <path d="M22 6h4v36h-4z" fill="#ffffff" />
                  <path d="M12 18h24v4H12z" fill="#ffffff" />
                  {/* Serpent motif */}
                  <path
                    d="M17 12c4 2 10 2 14-2s4 10-2 12-10 4-10 8 6 6 10 4"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="6" r="3" fill="#fbbf24" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold text-emerald-950 font-heading leading-tight tracking-tight group-hover:text-emerald-700 transition-colors">
                Federal Medical Centre Asaba
              </span>
              <span className="text-xs font-semibold text-emerald-700/90 tracking-wide uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Delta State, Nigeria
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            <button
              id="nav-home-btn"
              onClick={() => onViewChange('hero')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === 'hero'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/20'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about-btn"
              onClick={() => onViewChange('hero')}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              About
            </button>

            <button
              id="nav-news-btn"
              onClick={() => onViewChange('news-page')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                currentView === 'news-page'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/20'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              News & Updates
            </button>

            <button
              id="nav-team-btn"
              onClick={() => onViewChange('hero')}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              Management Team
            </button>

            <button
              id="nav-dept-btn"
              onClick={() => onViewChange('hero')}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              Departments
            </button>

            <button
              id="nav-contact-btn"
              onClick={onOpenEmergency}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search FMC website"
              className="p-2.5 rounded-full text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 transition-colors"
              title="Search news, doctors and clinical services"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Emergency Hotline Quick Badge */}
            <button
              id="header-emergency-btn"
              onClick={onOpenEmergency}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>24/7 Trauma: +234 803 555 FMC</span>
            </button>

            {/* Portal / Sign In Button */}
            <button
              id="header-portal-btn"
              onClick={() => alert("Redirecting to FMC Asaba Staff & Patient NHIS Portal...")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-emerald-900 transition-colors shadow-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => { onViewChange('hero'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Home
          </button>
          <button
            onClick={() => { onViewChange('news-page'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-emerald-700 font-semibold bg-emerald-50"
          >
            Complete News & Updates
          </button>
          <button
            onClick={() => { onViewChange('hero'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            About FMC Asaba
          </button>
          <button
            onClick={() => { onOpenEmergency(); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Emergency & Contact (+234 803 555 FMC)
          </button>
        </div>
      )}
    </header>
  );
};
