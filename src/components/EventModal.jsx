import React, { useEffect } from 'react';
import { X, Clock, Users, MapPin, Calendar, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EventModal({ event, onClose, onSelectForRegistration }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-[3px] border-charcoal text-charcoal shadow-hard-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Memphis Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b-[3px] border-charcoal bg-mustard px-6 py-4">
          <div className="flex items-center gap-3 font-mono text-xs font-bold text-charcoal">
            <span className="w-3 h-3 bg-coral border-2 border-charcoal inline-block" />
            <span className="bg-white px-2 py-0.5 border border-charcoal uppercase tracking-wider">
              {event.category}
            </span>
            <span>//</span>
            <span>ID: {event.id.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="p-1.5 bg-white hover:bg-coral hover:text-white transition-colors border-2 border-charcoal shadow-[2px_2px_0_#17140D] active:translate-x-0.5 active:translate-y-0.5"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 bg-cream">
          {/* Title & Track */}
          <div>
            <div className="inline-block bg-teal text-white font-mono text-xs font-bold tracking-wider uppercase px-2.5 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D] mb-3 -rotate-1">
              TRACK: {event.track}
            </div>
            <h2 id="modal-event-title" className="font-heading font-black text-2xl sm:text-4xl text-charcoal leading-tight">
              {event.title}
            </h2>
          </div>

          {/* Quick Specifications Strip in Memphis Color Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="bg-white p-3.5 border-2 border-charcoal shadow-[3px_3px_0_#17140D]">
              <span className="text-charcoal/60 block text-[10px] font-bold uppercase">DURATION</span>
              <span className="font-black text-charcoal flex items-center gap-1 mt-1 text-sm">
                <Clock className="w-3.5 h-3.5 text-coral stroke-[2.5]" />
                {event.duration}
              </span>
            </div>
            <div className="bg-white p-3.5 border-2 border-charcoal shadow-[3px_3px_0_#17140D]">
              <span className="text-charcoal/60 block text-[10px] font-bold uppercase">FORMAT</span>
              <span className="font-black text-charcoal flex items-center gap-1 mt-1 text-sm">
                <Users className="w-3.5 h-3.5 text-teal stroke-[2.5]" />
                {event.participationType}
              </span>
            </div>
            <div className="bg-white p-3.5 border-2 border-charcoal shadow-[3px_3px_0_#17140D]">
              <span className="text-charcoal/60 block text-[10px] font-bold uppercase">VENUE</span>
              <span className="font-black text-charcoal flex items-center gap-1 mt-1 text-sm truncate">
                <MapPin className="w-3.5 h-3.5 text-mustard stroke-[2.5]" />
                {event.venue}
              </span>
            </div>
            <div className="bg-white p-3.5 border-2 border-charcoal shadow-[3px_3px_0_#17140D]">
              <span className="text-charcoal/60 block text-[10px] font-bold uppercase">TIMELINE</span>
              <span className="font-black text-charcoal flex items-center gap-1 mt-1 text-sm">
                <Calendar className="w-3.5 h-3.5 text-coral stroke-[2.5]" />
                {event.scheduleSlot.split(',')[0]}
              </span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="bg-white border-2 border-charcoal p-5 shadow-[3px_3px_0_#17140D]">
            <h3 className="font-mono text-xs uppercase font-black text-charcoal tracking-wider mb-2 bg-mustard px-2 py-0.5 inline-block border border-charcoal">
              [ COMPREHENSIVE OVERVIEW ]
            </h3>
            <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans font-medium mt-2">
              {event.fullDescription}
            </p>
          </div>

          {/* Prerequisites & Requirements */}
          <div className="border-2 border-charcoal p-5 bg-white shadow-[3px_3px_0_#17140D]">
            <h4 className="font-mono text-xs uppercase font-black text-charcoal mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal stroke-[2.5]" />
              <span className="bg-teal text-white px-2 py-0.5 border border-charcoal">Prerequisites &amp; Equipment</span>
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 font-sans font-medium leading-relaxed mt-2">
              {event.prerequisites}
            </p>
          </div>

          {/* Rules & Deliverables */}
          {event.rules && event.rules.length > 0 && (
            <div className="bg-white border-2 border-charcoal p-5 shadow-[3px_3px_0_#17140D]">
              <h4 className="font-mono text-xs uppercase font-black text-charcoal tracking-wider mb-3 bg-coral text-white px-2 py-0.5 inline-block border border-charcoal">
                [ COMPETITION GUIDELINES &amp; CRITERIA ]
              </h4>
              <ul className="space-y-2.5 mt-2">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                    <span className="font-mono text-white bg-charcoal text-xs font-black px-1.5 py-0.2 border border-charcoal mt-0.5">{idx + 1}</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Awards & Perks in High-Contrast Box */}
          <div className="p-5 border-2 border-charcoal bg-mustard text-charcoal shadow-[4px_4px_0_#17140D]">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-coral shrink-0 mt-0.5 stroke-[2.5]" />
              <div>
                <span className="font-mono text-xs font-black uppercase block mb-1 bg-charcoal text-white px-2 py-0.5 inline-block border border-charcoal">
                  RECOGNITION &amp; PERKS
                </span>
                <p className="text-xs sm:text-sm font-bold text-charcoal leading-relaxed mt-1">
                  {event.prizes}
                </p>
              </div>
            </div>
          </div>

          {/* Availability / Capacity ticker */}
          <div className="flex items-center justify-between text-xs font-mono font-bold text-charcoal pt-2 border-t-2 border-charcoal">
            <span>SEATS RESERVED: {event.registeredCount} / {event.slotsTotal}</span>
            <span className="bg-coral text-white px-2 py-0.5 border border-charcoal">
              {event.slotsTotal - event.registeredCount} SLOTS AVAILABLE
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-charcoal bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="btn-memphis-secondary px-4 py-2.5 text-xs font-mono font-bold"
          >
            CLOSE WINDOW [ESC]
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectForRegistration(event.title);
              onClose();
            }}
            className="btn-memphis-primary px-6 py-3 text-xs sm:text-sm font-mono font-bold flex items-center gap-2"
          >
            <span>REGISTER FOR THIS EVENT</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
