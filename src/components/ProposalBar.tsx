import React from 'react';
import { Layers, Sparkles, Check, Monitor, Eye, Newspaper } from 'lucide-react';
import { ViewMode } from '../types';

interface ProposalBarProps {
  currentView: ViewMode;
  onToggleView: () => void;
}

export const ProposalBar: React.FC<ProposalBarProps> = ({ currentView, onToggleView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <aside
      id="proposal-control-bar"
      aria-label="Proposal highlights"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end"
    >
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 text-white p-5 shadow-2xl animate-fade-in text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              FMC Website Redesign Proposal
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white text-xs px-1.5 py-0.5 rounded-sm"
            >
              Close
            </button>
          </div>

          <p className="text-white/80 leading-relaxed">
            This design prototype specifically implements all your requested requirements for the new FMC website:
          </p>

          <ul className="space-y-2 text-white/90">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>100% Screen Split (Laptop View):</strong> Full viewport hero divided organically with an imaginary wave boundary rather than a rigid vertical line.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Left Hand Welcome:</strong> Features the MD's portrait, inspirational welcome quote, signature, and pacesetter badge consistent with FMC identity.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Angled Vertical News Carousel:</strong> Dynamically scrolls updates at a stylish angle with auto-play and manual controls.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Reactive Background Gradient:</strong> The hero atmosphere shifts its gradient colors dynamically with each news item's visual tone.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Complete News Link:</strong> Direct button to open the full newsroom with search, categories, and full articles.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onToggleView}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              {currentView === 'hero' ? <Newspaper className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
              <span>{currentView === 'hero' ? 'Switch to Complete News Page' : 'Switch to Hero View'}</span>
            </button>
            <span className="text-[10px] text-white/50">FMC Asaba UI Proposal</span>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        id="proposal-features-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white border border-emerald-500/40 shadow-xl backdrop-blur-md text-xs font-bold transition-all hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-4 h-4 text-emerald-400" />
        <span>Design Proposal Guide</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      </button>
    </aside>
  );
};
