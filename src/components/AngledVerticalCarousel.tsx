import React from 'react';
import { ChevronUp, ChevronDown, Clock, Play, Pause } from 'lucide-react';
import { NewsArticle } from '../types';

interface AngledVerticalCarouselProps {
  articles: NewsArticle[];
  activeIndex: number;
  onSelectArticle: (index: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
}

export const AngledVerticalCarousel: React.FC<AngledVerticalCarouselProps> = ({
  articles,
  activeIndex,
  onSelectArticle,
  isAutoPlaying,
  onToggleAutoPlay,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (activeIndex - 1 + articles.length) % articles.length;
    onSelectArticle(nextIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (activeIndex + 1) % articles.length;
    onSelectArticle(nextIndex);
  };

  return (
    <div
      id="angled-vertical-carousel-wrapper"
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* Top Carousel Nav Controls */}
      <div className="flex items-center justify-between w-full max-w-[270px] xl:max-w-[320px] mb-2 px-2 z-20">
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/70 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Up Next in Feed
        </span>

        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-full p-0.5 border border-white/10">
          <button
            onClick={onToggleAutoPlay}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title={isAutoPlaying ? "Pause carousel" : "Resume auto-scroll"}
            aria-label="Toggle auto-scroll"
          >
            {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Previous article"
            aria-label="Previous article"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Next article"
            aria-label="Next article"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tilted Container */}
      <div className="relative w-full max-w-[280px] xl:max-w-[330px] overflow-hidden py-2 xl:py-3">
        {/* Angle Skew Transform */}
        <div
          ref={scrollContainerRef}
          className="space-y-1 transition-transform duration-500 ease-out transform -rotate-2 hover:rotate-0 origin-center"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {articles.map((article, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={article.id}
                id={`carousel-item-${idx}`}
                onClick={() => onSelectArticle(idx)}
                className={`group relative cursor-pointer rounded-xl p-2 xl:p-3 transition-all duration-500 backdrop-blur-md border ${
                  isActive
                    ? 'bg-white/20 border-white/60 shadow-xl shadow-black/40 scale-102 translate-x-1.5'
                    : 'bg-black/30 border-white/10 hover:bg-white/10 hover:border-white/30 opacity-70 hover:opacity-95'
                }`}
                style={{
                  boxShadow: isActive ? `0 10px 25px -5px ${article.gradient.glow}` : undefined
                }}
              >
                {/* Active Indicator Strip */}
                {isActive && (
                  <div
                    className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-emerald-400"
                    style={{ backgroundColor: article.gradient.accent }}
                  />
                )}

                <div className="flex items-center gap-3 pl-1">
                  {/* Thumbnail */}
                  <div className="relative w-11 h-11 xl:w-14 xl:h-14 rounded-lg overflow-hidden shrink-0 border border-white/20 shadow-xs">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay"></div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          isActive
                            ? 'bg-white/30 text-white border-white/40'
                            : 'bg-white/10 text-white/80 border-white/10'
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="text-[10px] text-white/60 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4
                      className={`text-xs sm:text-sm font-semibold leading-snug line-clamp-2 transition-colors ${
                        isActive ? 'text-white font-bold' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {article.title}
                    </h4>
                  </div>
                </div>

                {/* Progress bar inside active card */}
                {isActive && isAutoPlaying && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 animate-[progress_6s_linear_infinite]"
                      style={{ backgroundColor: article.gradient.accent }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
