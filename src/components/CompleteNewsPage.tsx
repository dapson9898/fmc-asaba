import React from 'react';
import { Search, Calendar, ArrowRight, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { NewsArticle } from '../types';
import { formatNewsDate, getNewsImage } from '../data/newsApi';

interface CompleteNewsPageProps {
  articles: NewsArticle[];
  isLoading: boolean;
  error: string | null;
  onBackToHero: () => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const CompleteNewsPage: React.FC<CompleteNewsPageProps> = ({
  articles,
  isLoading,
  error,
  onBackToHero,
  onSelectArticle,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase();
    return article.title.toLowerCase().includes(query) || article.summary.toLowerCase().includes(query);
  });

  return (
    <div id="complete-news-page" className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHero}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>FMC Asaba Newsroom</span>
          </div>
        </div>

        <div className="mb-10 text-center sm:text-left max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
            News & Updates
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The latest news and announcements from Federal Medical Centre Asaba.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search news..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm placeholder:text-slate-400"
            />
          </div>
        </div>

        {error && (
          <div role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            News could not be loaded: {error}
          </div>
        )}

        {isLoading ? (
          <div role="status" className="py-16 text-center text-slate-600">Loading the latest news…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <button
                type="button"
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group text-left cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={getNewsImage(article)}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {formatNewsDate(article.created_at)}
                    </div>
                    <h2 className="text-base font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">FMC Asaba</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {!isLoading && filteredArticles.length === 0 && !error && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No news articles found</h3>
            <p className="text-sm text-slate-500 mt-1">Try another search, or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};
