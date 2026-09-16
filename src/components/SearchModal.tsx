import React from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';
import { NewsArticle } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectArticle }) => {
  const [query, setQuery] = React.useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? NEWS_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div
      id="search-modal"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FMC Asaba services, news, doctors, facilities..."
            className="w-full text-base bg-transparent border-none focus:outline-hidden text-slate-800 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type keywords like <span className="font-semibold text-emerald-700">"Surgery"</span>, <span className="font-semibold text-emerald-700">"MRI"</span>, <span className="font-semibold text-emerald-700">"Pediatric"</span> or <span className="font-semibold text-emerald-700">"Outreach"</span>
            </div>
          ) : results.length > 0 ? (
            results.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="group p-3 rounded-xl hover:bg-emerald-50/80 cursor-pointer border border-transparent hover:border-emerald-200 transition-all flex items-center justify-between"
              >
                <div className="space-y-1 pr-4">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                    {article.category}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{article.excerpt}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching records found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
