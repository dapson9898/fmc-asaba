import React from 'react';
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from 'lucide-react';

interface GalleryEntry {
  id: number;
  group: string;
  title: string;
  date: string;
  description: string;
  height: string;
  images: string[];
}

const galleryData: GalleryEntry[] = [
  {
    id: 0,
    group: 'Atuma Outreach',
    title: 'Atuma Medical Outreach, June 2025 (Day 2)',
    date: '18 Jun 2025',
    height: 'h-80',
    description: 'Part of the end of tenure ceremony for Dr. Victor Osiatuma: medical consultations, outreach health screenings, and ceremony events.',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 1,
    group: 'SSAM Donation',
    title: 'SSAM Donates Airway Manikins',
    date: '15 Aug 2023',
    height: 'h-96',
    description: 'The Society of Specialists in Airway Management presents 10 airway manikins to Federal Medical Centre Asaba for clinical training.',
    images: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 2,
    group: 'Hospital Operations',
    title: 'FMC Staff & Store Management',
    date: '28 Feb 2022',
    height: 'h-64',
    description: 'Dedicated administrative staff during daily operations and a supply chain management training session.',
    images: [
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 3,
    group: 'Surgical Services',
    title: 'Advanced Laparoscopic Workshop',
    date: '12 Nov 2024',
    height: 'h-72',
    description: 'The FMC Asaba surgical team conducts a live demonstration during the annual Minimally Invasive Surgery Workshop.',
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581595220892-da07312f32ba?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 4,
    group: 'Maternity & Pediatrics',
    title: 'Specialized Neonatal ICU Expansion',
    date: '04 May 2025',
    height: 'h-80',
    description: 'Commissioning of new incubator units and monitoring systems at the Special Care Baby Unit.',
    images: [
      'https://images.unsplash.com/photo-1581594693702-f26b39c46921?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 5,
    group: 'Emergency Care',
    title: 'Accident & Emergency Rapid Response',
    date: '19 Jan 2025',
    height: 'h-64',
    description: 'A simulation exercise by emergency physicians and triage nurses for rapid trauma patient management.',
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 6,
    group: 'Laboratory Science',
    title: 'Molecular Diagnostics Lab Launch',
    date: '10 Oct 2024',
    height: 'h-88',
    description: 'Unveiling state-of-the-art diagnostic equipment for rapid pathogen detection and clinical pathology.',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 7,
    group: 'Staff Welfare',
    title: 'Annual Hospital Health & Sports Day',
    date: '02 Dec 2024',
    height: 'h-72',
    description: 'Staff members participate in wellness activities, team building, and inter-departmental athletic competitions.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const Gallery: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = React.useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const entry = selectedEntry === null ? null : galleryData[selectedEntry];

  const closeGallery = () => {
    setSelectedEntry(null);
    setIsFullscreen(false);
  };

  const navigatePhoto = (direction: number) => {
    if (!entry) return;
    setSelectedPhoto((current) => (current + direction + entry.images.length) % entry.images.length);
  };

  React.useEffect(() => {
    if (!entry) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFullscreen) setIsFullscreen(false);
        else closeGallery();
      } else if (!isFullscreen && event.key === 'ArrowRight') navigatePhoto(1);
      else if (!isFullscreen && event.key === 'ArrowLeft') navigatePhoto(-1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [entry, isFullscreen]);

  React.useEffect(() => {
    if (!entry) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [entry]);

  return (
    <>
      <main className="flex-1 w-full bg-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 sm:px-8 lg:px-10">
          <header className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">FMC Asaba moments</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              FMC Asaba <span className="text-emerald-400">Gallery</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              A glimpse at key events, medical outreaches, surgical advances, and daily operations inside Federal Medical Centre Asaba.
            </p>
          </header>

          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {galleryData.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setSelectedEntry(index);
                  setSelectedPhoto(0);
                }}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <img src={item.images[0]} alt={item.title} className={`w-full ${item.height} object-cover transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                <span className="absolute left-4 top-4 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  {item.group}
                </span>
                {item.images.length > 1 && (
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md">
                    <Images className="h-3.5 w-3.5 text-emerald-400" />
                    {item.images.length} Photos
                  </span>
                )}
                <span className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-6">
                  <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">{item.date}</span>
                  <span className="mb-1 text-lg font-bold leading-snug text-white transition-colors group-hover:text-emerald-300">{item.title}</span>
                  <span className="line-clamp-2 text-xs text-slate-300 opacity-80">{item.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {entry && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-slate-950/95 p-4 backdrop-blur-lg sm:p-8" onClick={(event) => event.target === event.currentTarget && closeGallery()}>
          <div className="z-10 flex w-full max-w-6xl items-center justify-between">
            <div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">{entry.group}</span>
              <span className="ml-3 text-xs font-medium text-slate-400">Photo {selectedPhoto + 1} of {entry.images.length}</span>
            </div>
            <button type="button" onClick={closeGallery} aria-label="Close gallery" className="rounded-full border border-slate-700 bg-slate-800/80 p-2.5 text-slate-300 transition hover:bg-slate-700 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative my-4 flex w-full max-w-5xl flex-1 items-center justify-center overflow-hidden">
            {entry.images.length > 1 && (
              <button type="button" onClick={() => navigatePhoto(-1)} aria-label="Previous photo" className="absolute left-2 z-20 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-white transition hover:scale-110 hover:bg-emerald-600 sm:left-4">
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <img src={entry.images[selectedPhoto]} alt={entry.title} className="max-h-[58vh] max-w-full rounded-xl object-contain shadow-2xl" />
            {entry.images.length > 1 && (
              <button type="button" onClick={() => navigatePhoto(1)} aria-label="Next photo" className="absolute right-2 z-20 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-white transition hover:scale-110 hover:bg-emerald-600 sm:right-4">
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          <div className="flex w-full max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-xl backdrop-blur md:flex-row md:text-left">
            <div className="flex-1">
              <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center">
                <h2 className="text-xl font-bold text-white md:text-2xl">{entry.title}</h2>
                <span className="shrink-0 text-xs font-semibold tracking-wider text-emerald-400">{entry.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{entry.description}</p>
            </div>
            <button type="button" onClick={() => setIsFullscreen(true)} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-emerald-500">
              <Maximize2 className="h-4 w-4" />
              Full View
            </button>
          </div>
        </div>
      )}

      {entry && isFullscreen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4" onClick={(event) => event.target === event.currentTarget && setIsFullscreen(false)}>
          <button type="button" onClick={() => setIsFullscreen(false)} aria-label="Close full view" className="absolute right-6 top-6 z-10 rounded-full border border-slate-700 bg-slate-800/80 p-3 text-white transition hover:bg-slate-700">
            <X className="h-6 w-6" />
          </button>
          <img src={entry.images[selectedPhoto]} alt={entry.title} className="max-h-full max-w-full rounded-lg object-contain shadow-2xl" />
        </div>
      )}
    </>
  );
};

export default Gallery;
