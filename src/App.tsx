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
import { AboutSection } from './components/AboutSection';
import { ManagementSection } from './components/ManagementSection';
import { DepartmentsPage } from './components/DepartmentsPage';
import { RecruitmentsSection } from './components/RecruitmentsSection';
import { GetInTouchSection } from './components/GetInTouchSection';
import { Footer } from './components/Footer';
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

  const handleBackToDepartments = () => {
    setCurrentView('hero');
    window.history.pushState({}, '', '/#departments-section');
    setCurrentPath('/');
    setTimeout(() => {
      const deptSection = document.getElementById('departments-section');
      if (deptSection) {
        deptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  React.useEffect(() => {
    const checkHashAndScroll = () => {
      const hash = window.location.hash;
      if (hash === '#departments-section' || hash === '#departments') {
        setCurrentView('hero');
        setTimeout(() => {
          document.getElementById('departments-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else if (hash === '#about-section' || hash === '#about') {
        setCurrentView('hero');
        setTimeout(() => {
          document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else if (hash === '#contact-section' || hash === '#contact') {
        setCurrentView('hero');
        setTimeout(() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else if (hash === '#management-section' || hash === '#management') {
        setCurrentView('hero');
        setTimeout(() => {
          document.getElementById('management-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      checkHashAndScroll();
    };

    window.addEventListener('popstate', handlePopState);
    checkHashAndScroll();
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
        <main id="mainframe-app" className="w-full bg-black text-white selection:bg-emerald-500 selection:text-black">
          <section className="relative min-h-screen w-full overflow-hidden">
            <BackgroundVideo source={content.backgroundVideo} />
          </section>
          <section className="relative z-10 min-h-screen w-full bg-black">
            <DepartmentWriteup
              department={department}
              content={content}
              onBackToDepartmentsList={handleBackToDepartments}
            />
          </section>
          <Footer
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentPath('/');
              setCurrentView('hero');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              window.history.pushState({}, '', '/#about-section');
              setCurrentPath('/');
              setCurrentView('hero');
              setTimeout(() => {
                document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 120);
            }}
            onNavigateDepartments={handleBackToDepartments}
            onNavigateContact={() => {
              window.history.pushState({}, '', '/#contact-section');
              setCurrentPath('/');
              setCurrentView('hero');
              setTimeout(() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 120);
            }}
            onNavigateNews={() => {
              window.history.pushState({}, '', '/');
              setCurrentPath('/');
              setCurrentView('news-page');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : (
        <>
          {/* Main Viewport Content */}
          <main className={`flex-1 flex flex-col ${currentView === 'news-page' ? 'pt-20' : ''}`}>
            {currentView === 'hero' && (
              <>
                <HeroSection
                  onOpenReachUs={() => setIsReachUsOpen(true)}
                  onGoToCompleteNews={() => {
                    setCurrentView('news-page');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenArticle={(article) => setSelectedArticle(article)}
                />

                {/* About Section: placed before Management Section */}
                <AboutSection
                  onExploreDepartments={() => {
                    document.getElementById('departments-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                {/* Management Section: Placed after About and before departments */}
                <ManagementSection onContactSecretary={() => setIsReachUsOpen(true)} />

                {/* Department Section: 2-column modernized directory */}
                <DepartmentsPage />

                {/* Recruitments Section: Brief federal career message */}
                <RecruitmentsSection
                  onGoToNews={() => {
                    setCurrentView('news-page');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* Get in touch: Interactive customer care form and contact cards */}
                <GetInTouchSection />
              </>
            )}

            {currentView === 'news-page' && (
              <CompleteNewsPage
                onBackToHero={() => {
                  setCurrentView('hero');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectArticle={(article) => setSelectedArticle(article)}
              />
            )}

            {/* Footer Section */}
            <Footer
              onNavigateHome={() => {
                setCurrentView('hero');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateAbout={() => {
                if (currentView !== 'hero') {
                  setCurrentView('hero');
                  setTimeout(() => {
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onNavigateDepartments={() => {
                if (currentView !== 'hero') {
                  setCurrentView('hero');
                  setTimeout(() => {
                    document.getElementById('departments-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  document.getElementById('departments-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onNavigateContact={() => {
                if (currentView !== 'hero') {
                  setCurrentView('hero');
                  setTimeout(() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onNavigateNews={() => {
                setCurrentView('news-page');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
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
