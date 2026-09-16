import React from 'react';
import { X, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { MD_INFO } from '../data/newsData';

interface ReachUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReachUsModal: React.FC<ReachUsModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Outpatient (GOPD)',
    message: ''
  });

  React.useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      id="reach-us-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center py-4 sm:py-8">
        <div
          className="relative w-full max-w-xl my-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close reach us modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Patient Services & Inquiries
          </span>
          <h2 className="text-2xl font-bold text-slate-900 font-heading mt-2">
            Reach FMC Asaba Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Connect with our triage desk, book specialized clinical consultations, or speak with patient liaison officers.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Our clinical desk at FMC Asaba will contact you shortly via phone or email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Chukwuma Okafor"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Clinical Department / Service</label>
              <select
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option>General Outpatient (GOPD)</option>
                <option>Surgery & Anaesthesia</option>
                <option>Obstetrics & Gynaecology</option>
                <option>Pediatrics & Child Health</option>
                <option>Radiology & MRI Imaging</option>
                <option>Internal Medicine & Cardiology</option>
                <option>Dental & Maxillofacial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Consultation Details</label>
              <textarea
                rows={3}
                placeholder="Describe your inquiry or appointment requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Emergency? Call <span className="font-bold text-emerald-800">{MD_INFO.contactHotline}</span>
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Send Request
              </button>
            </div>
          </form>
        )}

        {/* Quick Contact Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Nnebisi Road, Cable Point, Asaba, Delta State</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>24/7 Hotline: {MD_INFO.contactHotline}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
