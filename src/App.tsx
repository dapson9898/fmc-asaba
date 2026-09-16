/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// import { Link } from './Link';
// import { DEPARTMENTS } from '../data/departments';
import React from 'react';
import { ViewMode, NewsArticle } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CompleteNewsPage } from './components/CompleteNewsPage';
import { NewsArticleModal } from './components/NewsArticleModal';
import { ReachUsModal } from './components/ReachUsModal';
import { SearchModal } from './components/SearchModal';
import { ProposalBar } from './components/ProposalBar';
import { DepartmentsPage } from './components/DepartmentsPage';
import { BackgroundVideo } from './components/BackgroundVideo';
import { DepartmentWriteup } from './components/DepartmentWriteup';
import { DEPARTMENTS, getDepartmentContent } from './data/departments';


function getDepartmentFromPath() {
  const match = window.location.pathname.match(/^\/departments\/([^/]+)\/?$/);
  return DEPARTMENTS.find((department) => department.id === match?.[1]) ?? null;
}


export default function App() {
  const [currentView, setCurrentView] = React.useState<ViewMode>('hero');
  const [selectedArticle, setSelectedArticle] = React.useState<NewsArticle | null>(null);
  const [isReachUsOpen, setIsReachUsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const department = currentPath.match(/^\/departments\/[^/]+\/?$/)
    ? getDepartmentFromPath()
    : null;
  const content = department ? getDepartmentContent(department.id) : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEmergency={() => setIsReachUsOpen(true)}
      />

      {department && content ? (
        <main id="mainframe-app" className="w-full bg-black pt-20 text-white selection:bg-emerald-500 selection:text-black">
          <section className="relative min-h-screen w-full overflow-hidden">
            <BackgroundVideo source={content.backgroundVideo} />
          </section>
          <section className="relative z-10 min-h-screen w-full bg-black">
            <DepartmentWriteup department={department} content={content} />
          </section>
        </main>
      ) : (
        <>
          {/* Main Viewport Content */}
          <main className="flex-1 flex flex-col pt-20">
            {currentView === 'hero' ? (
              <HeroSection
                onOpenReachUs={() => setIsReachUsOpen(true)}
                onGoToCompleteNews={() => {
                  setCurrentView('news-page');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenArticle={(article) => setSelectedArticle(article)}
              />
            ) : (
              <CompleteNewsPage
                onBackToHero={() => {
                  setCurrentView('hero');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectArticle={(article) => setSelectedArticle(article)}
              />
            )}
          {currentView === 'hero' && <DepartmentsPage />}
          </main>

        </>
      )}

      {/* Interactive Modals */}
      <NewsArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ReachUsModal
        isOpen={isReachUsOpen}
        onClose={() => setIsReachUsOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(article) => setSelectedArticle(article)}
      />

      {/* Proposal Feature Highlights & Switcher */}
      <ProposalBar
        currentView={currentView}
        onToggleView={() =>
          setCurrentView(currentView === 'hero' ? 'news-page' : 'hero')
        }
      />

    </div>
  );
}
