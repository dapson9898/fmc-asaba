import React from 'react';
import fmcLogoOfficial from '../assets/images/fmc_asaba_official_logo_1789552607691.jpg';
import {
  PhoneCall,
  ShieldCheck,
  Menu,
  X,
  Newspaper,
  ChevronRight,
  Building,
  Users,
  Layers,
  Image as ImageIcon,
  Mail,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenSearch?: () => void;
  onOpenEmergency: () => void;
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenEmergency,
  currentPath: propCurrentPath,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState(propCurrentPath ?? window.location.pathname);

  React.useEffect(() => {
    if (propCurrentPath !== undefined) {
      setCurrentPath(propCurrentPath);
    }
  }, [propCurrentPath]);

  // Active section tracking for nav list (scroll-spy)
  const [activeSection, setActiveSection] = React.useState<string>(() => {
    if (window.location.pathname === '/gallery') return 'gallery';
    if (window.location.pathname.startsWith('/departments/')) return 'departments';
    if (currentView === 'news-page') return 'news';
    return 'home';
  });

  const isProgrammaticScroll = React.useRef(false);
  const programmaticScrollTimer = React.useRef<NodeJS.Timeout | null>(null);

  // High precision active section calculation based on current viewport & document scroll
  const getActiveSection = React.useCallback((): string => {
    const pathname = window.location.pathname;
    if (pathname === '/gallery' || currentPath === '/gallery') return 'gallery';
    if (pathname.startsWith('/departments/')) return 'departments';
    if (currentView === 'news-page') return 'news';

    // If pathname is root '/', never treat as department detail view
    if (pathname !== '/' && currentPath.startsWith('/departments/')) return 'departments';

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if scrolled near the bottom of document (Contact is the lowest major section)
    if (windowHeight + scrollY >= documentHeight - 90) {
      return 'contact';
    }

    // Check if at the top of document
    if (scrollY < 120) {
      return 'home';
    }

    // Check primary homepage sections in reverse order (bottom to top)
    const sections = [
      { id: 'contact', elId: 'contact-section' },
      { id: 'departments', elId: 'departments-section' },
      { id: 'management', elId: 'management-section' },
      { id: 'about', elId: 'about-section' },
      { id: 'home', elId: 'fmc-hero-section' }
    ];

    const headerLine = 150; // Just below the fixed navbar

    // Priority 1: Direct viewport occupancy under header
    for (const s of sections) {
      const el = document.getElementById(s.elId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerLine && rect.bottom > headerLine) {
          return s.id;
        }
      }
    }

    // Priority 2: Handling transition areas (e.g. Recruitments notice between Departments and Contact)
    const contactEl = document.getElementById('contact-section');
    if (contactEl) {
      const cRect = contactEl.getBoundingClientRect();
      if (cRect.top <= windowHeight * 0.6) {
        return 'contact';
      }
    }

    for (const s of sections) {
      const el = document.getElementById(s.elId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerLine) {
          return s.id;
        }
      }
    }

    return 'home';
  }, [currentPath, currentView]);

  // Scroll listener with requestAnimationFrame for smooth, non-blocking ScrollSpy
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isProgrammaticScroll.current && !ticking) {
        window.requestAnimationFrame(() => {
          const detected = getActiveSection();
          setActiveSection(detected);

          // Update URL hash dynamically on homepage so the URL never stays hardcoded to a section
          if (window.location.pathname === '/' && currentView === 'hero') {
            const targetHash =
              detected === 'home' ? '' :
              detected === 'about' ? '#about-section' :
              detected === 'management' ? '#management-section' :
              detected === 'departments' ? '#departments-section' :
              detected === 'contact' ? '#contact-section' : '';

            const currentHash = window.location.hash;
            if (currentHash !== targetHash) {
              const newUrl = targetHash ? `/${targetHash}` : '/';
              window.history.replaceState(null, '', newUrl);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getActiveSection, currentView]);

  // Update active section on route or view mode changes
  React.useEffect(() => {
    if (currentPath === '/gallery' || window.location.pathname === '/gallery') {
      setActiveSection('gallery');
    } else if (window.location.pathname.startsWith('/departments/') || (currentPath.startsWith('/departments/') && window.location.pathname !== '/')) {
      setActiveSection('departments');
    } else if (currentView === 'news-page') {
      setActiveSection('news');
    } else {
      setActiveSection(getActiveSection());
    }
  }, [currentPath, currentView, getActiveSection]);

  // Update currentPath on route changes
  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lock background scrolling and add ESC key listener when mobile menu or portal modal is open
  React.useEffect(() => {
    if (isMobileMenuOpen || isPortalModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          setIsPortalModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMobileMenuOpen, isPortalModalOpen]);

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSection('home');
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);

    if (window.location.pathname !== '/' || window.location.hash !== '') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setCurrentPath('/');
    }
    if (currentView !== 'hero') {
      onViewChange('hero');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string, fallbackView: ViewMode = 'hero', sectionKey?: string) => {
    setIsMobileMenuOpen(false);

    // Provide immediate active state highlight upon clicking
    if (sectionKey) {
      setActiveSection(sectionKey);
      isProgrammaticScroll.current = true;
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
      programmaticScrollTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 900);
    }

    const targetUrl = `/#${id}`;
    if (window.location.pathname !== '/' || window.location.hash !== `#${id}`) {
      window.history.pushState({}, '', targetUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setCurrentPath('/');
    }

    if (currentView !== fallbackView) {
      onViewChange(fallbackView);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGalleryClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSection('gallery');
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);

    if (window.location.pathname !== '/gallery') {
      window.history.pushState({}, '', '/gallery');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setCurrentPath('/gallery');
    }
    onViewChange('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSection('news');
    if (window.location.pathname !== '/' || window.location.hash !== '') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setCurrentPath('/');
    }
    onViewChange('news-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDepartmentDetail = (currentPath.startsWith('/departments/') || window.location.pathname.startsWith('/departments/')) && window.location.pathname !== '/';
  const isDarkDetailView = isDepartmentDetail && !isScrolled;

  const getNavButtonClasses = (sectionKey: string) => {
    const isActive = activeSection === sectionKey;
    if (isActive) {
      return isDarkDetailView
        ? 'bg-emerald-600 text-white shadow-xs font-semibold'
        : 'bg-emerald-700 text-white shadow-xs font-semibold';
    }
    if (isDarkDetailView) {
      return 'text-slate-100 hover:text-white hover:bg-white/15 font-medium';
    }
    return 'text-slate-800 hover:text-emerald-800 hover:bg-emerald-50/80 font-medium';
  };

  return (
    <>
      <header
        id="fmc-header"
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-emerald-900/10 py-0'
            : 'bg-transparent border-b border-transparent shadow-none py-1 sm:py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official FMC Asaba Crest & Identity */}
            <div
              id="fmc-logo-brand"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={handleHomeClick}
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600/60 bg-white p-0.5 shadow-sm group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src={fmcLogoOfficial}
                  alt="Federal Medical Centre Asaba Official Crest"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <span className={`text-base sm:text-lg font-bold font-heading leading-tight tracking-tight transition-colors ${
                  isDarkDetailView
                    ? 'text-white group-hover:text-emerald-300'
                    : 'text-slate-950 group-hover:text-emerald-800'
                }`}>
                  Federal Medical Centre Asaba
                </span>
                <span className={`text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 ${
                  isDarkDetailView ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Delta State, Nigeria
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links - Always clearly visible with high contrast */}
            <nav
              id="desktop-nav"
              className={`hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                isDarkDetailView
                  ? 'bg-slate-900/80 backdrop-blur-md border border-slate-700/80 shadow-md'
                  : isScrolled
                  ? 'bg-slate-100/90 border border-slate-200/90 shadow-2xs'
                  : 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm'
              }`}
            >
              <button
                id="nav-home-btn"
                onClick={handleHomeClick}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('home')}`}
              >
                Home
              </button>

              <button
                id="nav-news-btn"
                onClick={handleNewsClick}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all flex items-center gap-1.5 cursor-pointer ${getNavButtonClasses('news')}`}
              >
                News
              </button>

              <button
                id="nav-about-btn"
                onClick={() => scrollToSection('about-section', 'hero', 'about')}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('about')}`}
              >
                About
              </button>

              <button
                id="nav-team-btn"
                onClick={() => scrollToSection('management-section', 'hero', 'management')}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('management')}`}
              >
                Management Team
              </button>

              <button
                id="nav-dept-btn"
                onClick={() => scrollToSection('departments-section', 'hero', 'departments')}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('departments')}`}
              >
                Departments
              </button>

              <button
                id="nav-gallery-btn"
                onClick={handleGalleryClick}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('gallery')}`}
              >
                Gallery
              </button>

              <button
                id="nav-contact-btn"
                onClick={() => scrollToSection('contact-section', 'hero', 'contact')}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all cursor-pointer ${getNavButtonClasses('contact')}`}
              >
                Contact
              </button>
            </nav>

            {/* Right Header Action Cluster: Groups Sign In and Hamburger toggle on the right on tablet & mobile */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Portal / Sign In Button (Placed next to hamburger on tablet, aligned right) */}
              <button
                id="header-portal-btn"
                onClick={() => setIsPortalModalOpen(true)}
                className={`hidden sm:flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  isDarkDetailView
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/30'
                    : 'bg-slate-900 text-white hover:bg-emerald-800 shadow-slate-900/20'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sign In</span>
              </button>

              {/* Mobile / Tablet Menu Hamburger Button */}
              <div className="lg:hidden flex items-center">
                <button
                  id="mobile-menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    isDarkDetailView
                      ? 'text-white bg-white/10 hover:bg-white/20'
                      : 'text-slate-800 bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900'
                  }`}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-emerald-700" />
                  ) : (
                    <div className="flex flex-col gap-1.5 w-6 items-end">
                      <span className={`h-0.5 rounded-full transition-all w-6 ${isDarkDetailView ? 'bg-white' : 'bg-emerald-900'}`}></span>
                      <span className={`h-0.5 rounded-full transition-all w-4 ${isDarkDetailView ? 'bg-emerald-300' : 'bg-emerald-700'}`}></span>
                      <span className={`h-0.5 rounded-full transition-all w-5 ${isDarkDetailView ? 'bg-white' : 'bg-emerald-900'}`}></span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          COWORKING-INSPIRED SPLIT DUAL-SIDE SLIDE-IN MOBILE NAVIGATION
          When opened: Left curtain slides from Left; Right curtain slides from Right!
          ========================================================================= */}
      {/* Backdrop overlay */}
      <div
        id="mobile-menu-backdrop"
        className={`fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Close Button floating over the curtains */}
      <div
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[80] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <button
          id="close-split-nav-btn"
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-3 rounded-full bg-white sm:bg-slate-900 text-slate-800 sm:text-white shadow-xl hover:bg-emerald-700 hover:text-white border border-slate-200 sm:border-emerald-800 transition-all cursor-pointer group"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* 1. LEFT CURTAIN PANEL (Slides in from the Left) */}
      <aside
        id="mobile-split-nav-left"
        className={`fixed top-0 left-0 bottom-auto sm:bottom-0 h-[52vh] sm:h-full w-full sm:w-1/2 lg:w-7/12 bg-white z-[70] shadow-2xl flex flex-col justify-between p-4 sm:p-10 transition-transform duration-500 ease-out overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Primary Navigation Drawer"
      >
        {/* Top Header inside Left Drawer */}
        <div>
          <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-6 border-b border-slate-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center p-0.5 shrink-0 shadow-xs">
              <img
                src={fmcLogoOfficial}
                alt="Federal Medical Centre Asaba Official Crest"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-heading leading-tight">
                Federal Medical Centre Asaba
              </h3>
              <p className="text-[10px] sm:text-[11px] text-emerald-700 font-medium">
                Federal Tertiary Healthcare &amp; Training
              </p>
            </div>
          </div>

          {/* Navigation Menu Items (Unnumbered for clean mobile and tablet experience) */}
          <nav className="mt-2 sm:mt-6 space-y-0.5 sm:space-y-1">
            {[
              { id: 'home', label: 'Home', icon: Building, action: handleHomeClick, active: activeSection === 'home' },
              { id: 'news', label: 'News', icon: Newspaper, action: handleNewsClick, active: activeSection === 'news' },
              { id: 'about', label: 'About', icon: Building, action: () => scrollToSection('about-section', 'hero', 'about'), active: activeSection === 'about' },
              { id: 'management', label: 'Management Team', icon: Users, action: () => scrollToSection('management-section', 'hero', 'management'), active: activeSection === 'management' },
              { id: 'departments', label: 'Departments', icon: Layers, action: () => scrollToSection('departments-section', 'hero', 'departments'), active: activeSection === 'departments' },
              { id: 'gallery', label: 'Gallery', icon: ImageIcon, action: handleGalleryClick, active: activeSection === 'gallery' },
              { id: 'contact', label: 'Contact', icon: Mail, action: () => scrollToSection('contact-section', 'hero', 'contact'), active: activeSection === 'contact' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full group flex items-center justify-between py-2 sm:py-2.5 px-3 rounded-xl text-left transition-all cursor-pointer ${
                    item.active
                      ? 'bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-600 shadow-2xs'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-colors ${
                      item.active ? 'text-emerald-700' : 'text-emerald-600/80 group-hover:text-emerald-700'
                    }`} />
                    <span className="text-xs sm:text-base lg:text-lg font-heading tracking-tight group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </div>
                  {item.active ? (
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Institutional Seal Motto */}
        <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 hidden sm:block">
          <p className="italic text-slate-500 font-medium">
            "Qualitative, Accessible &amp; Prompt Healthcare Delivery"
          </p>
          <p className="text-[11px] mt-0.5 text-slate-400">
            Approved by the Federal Ministry of Health, Nigeria
          </p>
        </div>
      </aside>

      {/* 2. RIGHT CURTAIN PANEL (Slides in from the Right) */}
      <aside
        id="mobile-split-nav-right"
        className={`fixed top-[52vh] sm:top-0 right-0 bottom-0 h-[48vh] sm:h-full w-full sm:w-1/2 lg:w-5/12 bg-linear-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white z-[70] shadow-2xl flex flex-col justify-between p-4 sm:p-10 transition-transform duration-500 ease-out border-t-0 sm:border-t-0 sm:border-l border-emerald-800/40 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Institutional Quick Hub Drawer"
      >
        {/* Seamless blend gradient along the top edge on mobile to blend both parts */}
        <div className="sm:hidden absolute -top-5 inset-x-0 h-5 bg-linear-to-b from-transparent to-emerald-950 pointer-events-none" />

        <div className="space-y-2.5 sm:space-y-6">
          {/* Institutional Information Hub Section - Now visible on mobile to keep bottom balanced and rich */}
          <div>
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-semibold border border-emerald-400/30">
              Institutional Information Hub
            </span>
            <h4 className="text-base sm:text-2xl font-bold font-heading mt-1 sm:mt-2 text-white">
              Always at Your Service
            </h4>
            <p className="text-[11px] sm:text-sm text-emerald-100/80 mt-0.5 sm:mt-1 leading-snug">
              Federal Tertiary Healthcare facility serving Delta State and neighboring regions.
            </p>
          </div>

          {/* Quick Call Emergency Card (Hidden on mobile view to provide ample room for the bottom section without scrolling) */}
          <div className="hidden sm:block p-3.5 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span>24/7 Trauma Hotline</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-white font-mono tracking-tight">
              +234 916 781 0386
            </p>
            <p className="text-[11px] sm:text-xs text-emerald-100/70">
              Immediate response for accident, emergency &amp; ambulance dispatches.
            </p>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="mt-1 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Reach Us Online</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Campus Location */}
          <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-emerald-100/90">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white leading-tight">Medical Centre Campus</p>
              <p className="text-emerald-100/70 text-[11px] sm:text-xs">Nnebisi Road, P.M.B. 1033, Asaba, Delta State</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-emerald-100/90">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white leading-tight">Clinical Hours</p>
              <p className="text-emerald-100/70 text-[11px] sm:text-xs">Emergency &amp; Inpatients: 24/7 Daily</p>
            </div>
          </div>
        </div>

        {/* Sign In Portal Action Button */}
        <div className="pt-2.5 sm:pt-4 border-t border-white/10">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsPortalModalOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>NHIS &amp; Staff Portal Sign In</span>
          </button>
        </div>
      </aside>

      {/* =========================================================================
          FMC ASABA PORTAL / SIGN IN MODAL
          ========================================================================= */}
      {isPortalModalOpen && (
        <div
          id="fmc-portal-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsPortalModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-linear-to-r from-emerald-900 via-emerald-800 to-slate-900 p-6 text-white flex items-start justify-between">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30 mb-2">
                  Official Portal Gateway
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  FMC Asaba Sign In
                </h3>
                <p className="text-xs text-emerald-100/80 mt-1">
                  Secure access for patients, medical consultants, and residency staff.
                </p>
              </div>
              <button
                onClick={() => setIsPortalModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close portal dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Portal Categories */}
            <div className="p-6 space-y-3">
              {[
                {
                  title: 'Program officers.',
                  desc: 'Upload gallery and news contents.',
                  badge: 'Admin',
                  color: 'emerald',
                },
                {
                  title: 'IT Officer.',
                  desc: 'Manage admin and content.',
                  badge: 'Super admin',
                  color: 'blue',
                }
              ].map((portal, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    alert(`Navigating to ${portal.title} login endpoint...`);
                    setIsPortalModalOpen(false);
                  }}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/40 transition-all cursor-pointer group flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-emerald-800 px-2 py-0.5 rounded-full bg-emerald-100/70">
                        {portal.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {portal.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {portal.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))}

              <div className="pt-2 text-center text-xs text-slate-400">
                Need help accessing your hospital account? Call the ICT Unit or visit the Administration block.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

