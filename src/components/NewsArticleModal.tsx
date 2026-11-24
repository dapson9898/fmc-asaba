import React from 'react';
import { X, Calendar, Share2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { NewsArticle } from '../types';
import { formatNewsDate, getNewsImage, getNewsImages } from '../data/newsApi';
import { sanitizeNewsHtml } from '../data/sanitizeNewsHtml';

interface NewsArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsArticleModal: React.FC<NewsArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const [copyError, setCopyError] = React.useState(false);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [article?.id]);

  React.useEffect(() => {
    if (!article) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;
  const articleImages = getNewsImages(article);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyError(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy the news link:', error);
      setCopyError(true);
    }
  };

  return (
    <div
      id="news-article-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-article-title"
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center py-4 sm:py-8">
        <article
          className="relative w-full max-w-3xl my-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={getNewsImage(article, activeImageIndex)}
              alt={`${article.title}${articleImages.length > 1 ? `, image ${activeImageIndex + 1}` : ''}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <button
              onClick={onClose}
              aria-label="Close article modal"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <h2 id="news-article-title" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-heading leading-snug drop-shadow-md">
                {article.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {articleImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Article images">
                {articleImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show article image ${index + 1}`}
                    aria-pressed={activeImageIndex === index}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeImageIndex === index ? 'border-emerald-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs sm:text-sm text-slate-600">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {formatNewsDate(article.created_at)}
              </span>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : copyError ? 'Copy unavailable' : 'Share'}
              </button>
            </div>

            <p className="text-slate-800 font-medium leading-relaxed">{article.summary}</p>

            <div
              className="news-article-content text-slate-700 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: sanitizeNewsHtml(article.content) }}
            />
          </div>

          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Close News
            </button>
            <div className="text-xs text-slate-500">
              Federal Medical Centre Asaba
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
