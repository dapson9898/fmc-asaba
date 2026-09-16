import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  HeartPulse,
  Award,
  Clock
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';
import { NewsArticle, ViewMode } from '../types';
import { MDWelcomeCard } from './MDWelcomeCard';
import { AngledVerticalCarousel } from './AngledVerticalCarousel';

interface HeroSectionProps {
  onOpenReachUs: () => void;
  onGoToCompleteNews: () => void;
  onOpenArticle: (article: NewsArticle) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReachUs,
  onGoToCompleteNews,
  onOpenArticle,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const activeArticle = NEWS_ARTICLES[activeIndex] || NEWS_ARTICLES[0];

  // Auto-scroll sliding timer
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % NEWS_ARTICLES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % NEWS_ARTICLES.length);
  };

  const handlePrevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length);
  };

  return (
    <section
      id="fmc-hero-section"
      className="relative w-full min-h-screen 2xl:h-screen pt-20 overflow-hidden flex flex-col justify-between transition-colors duration-1000 ease-in-out"
      style={{
        backgroundColor: '#f8fafc',
      }}
    >
      {/* =========================================================================
          DYNAMIC BACKGROUND GRADIENT LAYER (SHIFTS BASED ON CURRENT NEWS ITEM)
          ========================================================================= */}
      <div
        id="hero-dynamic-gradient-backdrop"
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{
          background: `radial-gradient(ellipse at 85% 30%, ${activeArticle.gradient.glow} 0%, rgba(248, 250, 252, 0) 65%),
                       radial-gradient(circle at 70% 80%, ${activeArticle.gradient.accent}15 0%, transparent 50%)`
        }}
      />

      {/* Main flex container: stacked below each other on mobile & standard desktops, side-by-side only on 2xl screens */}
      <div className="relative z-10 w-full h-full flex-1 flex flex-col 2xl:flex-row overflow-y-auto 2xl:overflow-hidden">

        {/* =========================================================================
            LEFT-HAND SIDE (WELCOME MESSAGE & MD WELCOME - FAITHFUL TO FMC REFERENCE)
            ========================================================================= */}
        <div
          id="hero-left-side"
          className="w-full 2xl:w-[42%] 2xl:shrink-0 relative z-10 flex flex-col justify-center px-6 sm:px-10 2xl:pl-12 2xl:pr-8 py-8 2xl:py-6"
        >
          {/* Subtle Organic Mint Shapes in Left Background */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            {/* National Pacesetter Badge */}            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-semibold mb-4 shadow-xs">
              <HeartPulse className="w-4 h-4 text-emerald-700 animate-pulse" />
              <span>Tertiary Healthcare Center of Excellence</span>
            </div>

            {/* Main Headline (From FMC reference) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15] mb-3">
              A warm welcome and{' '}
              <span className="text-emerald-700 underline decoration-emerald-400/50 decoration-wavy decoration-2">
                stellar service
              </span>
            </h1>

            {/* Subtitle (From FMC reference) */}
            <p className="text-base sm:text-lg font-medium text-slate-600 mb-6 leading-relaxed">
              Nigeria's pacesetting Federal Medical Centre.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              {/* Reach us today! Button (From FMC reference) */}
              <button
                id="hero-reach-us-btn"
                onClick={onOpenReachUs}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Reach us today!</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-complete-news-pill"
                onClick={onGoToCompleteNews}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-300/80 hover:border-emerald-600 text-slate-700 hover:text-emerald-800 text-sm font-semibold shadow-xs hover:bg-emerald-50 transition-all"
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>News & Bulletins</span>
              </button>
            </div>

            {/* Medical Director's Welcome Card (From FMC reference) */}
            <div className="mt-2">
              <MDWelcomeCard onLearnMore={onOpenReachUs} />
            </div>

            {/* Quick Accreditation Indicators */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> NHIS Accredited
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> 24/7 Emergency Wing
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> South-South Referral Hub
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            IMAGINARY / ORGANIC CURVED DIVISION BETWEEN LEFT & RIGHT
            SVG Wave boundary running down the screen - no harsh vertical line!
            Visible only on 2xl screens when side-by-side
            ========================================================================= */}
        <div
          id="hero-imaginary-divider"
          className="hidden 2xl:block absolute inset-y-0 left-[42%] w-24 -translate-x-1/2 pointer-events-none z-20 overflow-hidden"
        >
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fluid organic curve mimicking FMC reference wave boundary */}
            <path
              d="M0 0
                 C45 150, 85 280, 55 420
                 C25 560, 90 700, 60 850
                 C40 930, 20 980, 0 1000
                 L0 1000 Z"
              fill="#f8fafc"
            />
            {/* Subtle soft green wave ripple */}
            <path
              d="M10 0
                 C55 160, 95 290, 65 430
                 C35 570, 98 710, 70 860
                 C50 940, 30 985, 10 1000"
              stroke="rgba(16, 185, 129, 0.15)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* =========================================================================
            RIGHT-HAND SIDE (DYNAMIC GALLERY & ANGLED VERTICAL CAROUSEL)
            Full-width below left side on mobile/desktop, side-by-side on 2xl screens
            ========================================================================= */}
        <div
          id="hero-right-side"
          className="w-full 2xl:w-[58%] 2xl:flex-1 relative z-10 flex flex-col justify-between p-6 sm:p-8 2xl:p-10 min-h-[550px] 2xl:min-h-0 overflow-hidden text-white transition-all duration-1000 ease-in-out"
          style={{
            background: `linear-gradient(135deg, ${activeArticle.gradient.from} 0%, ${activeArticle.gradient.via} 50%, ${activeArticle.gradient.to} 100%)`,
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Dynamic Background Image of Current News Story with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              key={activeArticle.id}
              src={activeArticle.image}
              alt={activeArticle.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-105 animate-[fadeIn_0.8s_ease-out] transition-all duration-1000 filter brightness-45 contrast-110 saturate-120"
            />
            {/* Gradient Mask for maximum text readability and atmospheric blend */}
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                background: `linear-gradient(90deg, ${activeArticle.gradient.from}f0 0%, ${activeArticle.gradient.from}b0 45%, ${activeArticle.gradient.to}cc 100%)`,
              }}
            />
            {/* Subtle animated light bloom */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000"
              style={{ backgroundColor: activeArticle.gradient.accent }}
            />
          </div>

          {/* Top Bar on Right Side: Tag & Direct Link to Complete News Page */}
          <div className="relative z-10 flex items-center justify-between gap-4 pb-4 border-b border-white/15">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Gallery & Updates
              </span>
            </div>

            {/* User-requested: Button/Link that goes to the complete news page */}
            <button
              id="right-side-complete-news-btn"
              onClick={onGoToCompleteNews}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-900 text-xs font-bold backdrop-blur-md border border-white/30 hover:border-white shadow-lg transition-all duration-300"
              title="Visit complete news room with all articles"
            >
              <span>Complete News Page</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Middle Content: Split between Featured News Story (Left) & Angled Vertical Carousel (Right) */}
          <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6">

            {/* Featured Story Display (Matches Image 2 reference style) */}
            <div className="md:col-span-7 xl:col-span-7 space-y-4 pr-0 lg:pr-4">
              {/* "Read Next" Header with clean underline (As requested from reference image 2) */}
              <div className="space-y-1">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide uppercase inline-block border-b-2 border-white pb-0.5">
                  Read Next
                </span>
              </div>

              {/* Category Pill and Date */}
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md text-xs font-bold text-white shadow-sm"
                  style={{ backgroundColor: activeArticle.gradient.accent }}
                >
                  {activeArticle.category}
                </span>

                <span className="text-xs text-white/80 flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-white/70" />
                  {activeArticle.date}
                </span>

                <span className="text-xs text-white/60">•</span>

                <span className="text-xs text-white/80 font-medium">
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Main Headline (Bold, Impactful, Animated on Change) */}
              <h2
                key={`title-${activeArticle.id}`}
                className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white font-heading leading-tight tracking-tight drop-shadow-md animate-[fadeIn_0.5s_ease-out]"
              >
                {activeArticle.title}
              </h2>

              {/* Excerpt */}
              <p
                key={`excerpt-${activeArticle.id}`}
                className="text-xs sm:text-sm text-white/85 line-clamp-3 leading-relaxed font-normal max-w-lg animate-[fadeIn_0.6s_ease-out]"
              >
                {activeArticle.excerpt}
              </p>

              {/* Interactive Story Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="read-full-story-btn"
                  onClick={() => onOpenArticle(activeArticle)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 hover:text-slate-950 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    onClick={handlePrevArticle}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors"
                    aria-label="Previous article"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextArticle}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors"
                    aria-label="Next article"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-semibold text-white/70 ml-2">
                    0{activeIndex + 1} / 0{NEWS_ARTICLES.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Angled Vertical Carousel (Matches User Request: scrolling stylishly at an angle vertically) */}
            <div className="md:col-span-5 xl:col-span-5 flex justify-center md:justify-end">
              <AngledVerticalCarousel
                articles={NEWS_ARTICLES}
                activeIndex={activeIndex}
                onSelectArticle={(idx) => setActiveIndex(idx)}
                isAutoPlaying={isAutoPlaying}
                onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
              />
            </div>
          </div>

          {/* Bottom Bar: Quick Category Toggles & Additional Information CTA */}
          <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-white/60 uppercase tracking-wider text-[10px] font-bold">Categories:</span>
              {NEWS_ARTICLES.map((article, i) => (
                <button
                  key={article.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${i === activeIndex
                      ? 'bg-white text-slate-900 font-bold shadow-xs'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {article.category}
                </button>
              ))}
            </div>

            {/* Second prompt-requested link for more detailed articles and additional information */}
            <button
              onClick={onGoToCompleteNews}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
            >
              <span>Explore All FMC Bulletins & Press Releases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
