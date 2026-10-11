import React, { useState, useMemo } from 'react';
import { EVENT_CATEGORIES, EVENTS } from '../data/events';
import { Clock, Users, ArrowUpRight, Search, MapPin } from 'lucide-react';
import { Asterisk, PlusSign, HalfCircle, Squiggle } from './MemphisDecorations';

export default function Events({ onSelectEvent, onSelectForRegistration }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.track.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts = { All: EVENTS.length };
    EVENTS.forEach((e) => {
      counts[e.category] = (counts[e.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Category badge colors for playful Memphis palette
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Hackathon':
        return 'bg-coral text-white';
      case 'Coding Challenge':
        return 'bg-teal text-white';
      case 'UI/UX Competition':
        return 'bg-mustard text-charcoal';
      case 'Web Development':
        return 'bg-skyblue text-charcoal';
      case 'Technical Workshop':
        return 'bg-violet text-white';
      case 'Developer Talks':
        return 'bg-coral text-white';
      default:
        return 'bg-white text-charcoal';
    }
  };

  return (
    <section id="events" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-10 right-10 animate-memphis-wiggle">
          <Asterisk color="#FF5B57" size={36} />
        </div>
        <div className="absolute bottom-20 left-6 animate-memphis-float">
          <HalfCircle color="#FFC531" size={50} rotate={90} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-coral text-white font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] rotate-2">
              [ 02 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              COMPETITIONS &amp; SESSIONS
            </h2>
          </div>
          <span className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider bg-white px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            6 VERIFIED TRACKS // OPEN ACCESS
          </span>
        </div>

        {/* Filters and Search Toolbar in Memphis Pill & Input Style */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b-[3px] border-charcoal mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Event Categories">
            {EVENT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-all border-[2.5px] border-charcoal flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-mustard text-charcoal shadow-[4px_4px_0_#17140D] -translate-y-0.5'
                      : 'bg-white text-charcoal hover:bg-cream-alt shadow-[2px_2px_0_#17140D]'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-coral font-black' : 'text-charcoal/60'}`}>
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Solid Border & Hard Shadow */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-charcoal absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by track, title..."
              aria-label="Search events"
              className="w-full pl-10 pr-3.5 py-2 text-xs font-mono font-bold bg-white border-[2.5px] border-charcoal text-charcoal placeholder:text-charcoal/40 shadow-[3px_3px_0_#17140D] focus:outline-none focus:ring-2 focus:ring-mustard"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold text-coral hover:underline"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Asymmetrical Memphis Event Cards Layout */}
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center border-[3px] border-charcoal bg-white font-mono text-sm font-bold text-charcoal shadow-hard-md">
            NO SESSIONS MATCHING THE SEARCH OR FILTER CRITERIA.
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Flagship Event Card (Wide Memphis Format) */}
            {filteredEvents.map((event, index) => {
              const isFlagship = event.featured && index === 0;

              if (isFlagship) {
                return (
                  <article
                    key={event.id}
                    className="border-[3px] border-charcoal bg-white p-6 sm:p-9 relative shadow-hard-lg"
                  >
                    {/* Top Ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-[2.5px] border-charcoal pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-coral text-white font-mono text-xs font-black tracking-wider border-2 border-charcoal shadow-[2px_2px_0_#17140D] -rotate-1">
                          ★ {event.tag}
                        </span>
                        <span className="font-mono text-xs font-bold text-charcoal uppercase bg-mustard px-2 py-0.5 border border-charcoal">
                          CATEGORY: {event.category}
                        </span>
                      </div>
                      <div className="font-mono text-xs font-black text-coral bg-white px-2.5 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                        {event.slotsTotal - event.registeredCount} OF {event.slotsTotal} SLOTS OPEN
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-8">
                        <h3 className="font-heading font-black text-2xl sm:text-4xl text-charcoal tracking-tight mb-4">
                          {event.title}
                        </h3>
                        <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans font-medium mb-6">
                          {event.shortDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
                          <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 border-2 border-charcoal font-bold text-charcoal">
                            <Clock className="w-4 h-4 text-coral stroke-[2.5]" />
                            {event.duration}
                          </span>
                          <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 border-2 border-charcoal font-bold text-charcoal">
                            <Users className="w-4 h-4 text-teal stroke-[2.5]" />
                            {event.participationType}
                          </span>
                          <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 border-2 border-charcoal font-bold text-charcoal">
                            <MapPin className="w-4 h-4 text-mustard stroke-[2.5]" />
                            {event.venue}
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-4 flex flex-col justify-between border-t-[2.5px] lg:border-t-0 lg:border-l-[2.5px] border-charcoal pt-6 lg:pt-0 lg:pl-8 h-full space-y-5">
                        <div className="bg-cream border-[2.5px] border-charcoal p-4 shadow-[3px_3px_0_#17140D]">
                          <span className="font-mono text-[10px] font-black uppercase text-charcoal block mb-1">
                            TRACK BENCHMARK
                          </span>
                          <span className="font-heading font-black text-sm text-charcoal block">
                            {event.track}
                          </span>
                          <span className="font-mono text-xs font-bold text-coral mt-2 block bg-white px-2 py-0.5 border border-charcoal">
                            {event.scheduleSlot}
                          </span>
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectEvent(event)}
                            className="btn-memphis-primary w-full py-3 px-4 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2"
                          >
                            <span>VIEW SPECIFICATIONS</span>
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onSelectForRegistration(event.title)}
                            className="btn-memphis-secondary w-full py-2.5 px-4 text-xs font-mono font-bold tracking-wider"
                          >
                            SELECT FOR REGISTRATION →
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              return null;
            })}

            {/* Asymmetrical 2-Column Grid for remaining events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents
                .filter((e, idx) => !(e.featured && idx === 0))
                .map((event) => {
                  return (
                    <article
                      key={event.id}
                      className="border-[3px] border-charcoal bg-white p-6 sm:p-7 flex flex-col justify-between shadow-hard-md hover:shadow-hard-lg hover:-translate-y-1 transition-all relative group"
                    >
                      <div>
                        {/* Card Header Strip */}
                        <div className="flex items-center justify-between border-b-[2px] border-charcoal pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-mono text-[11px] font-black uppercase px-2 py-0.5 border border-charcoal ${getCategoryColor(event.category)}`}>
                              {event.tag}
                            </span>
                            <span className="font-mono text-xs font-bold text-charcoal">
                              // {event.category}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] font-bold text-charcoal bg-cream px-2 py-0.5 border border-charcoal">
                            {event.duration}
                          </span>
                        </div>

                        {/* Event Title */}
                        <h3 className="font-heading font-black text-xl sm:text-2xl text-charcoal tracking-tight mb-3 group-hover:text-coral transition-colors">
                          {event.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-charcoal/80 font-sans font-medium leading-relaxed mb-6">
                          {event.shortDescription}
                        </p>
                      </div>

                      <div>
                        {/* Meta Specifications */}
                        <div className="grid grid-cols-2 gap-2 py-3 border-y-[2px] border-charcoal font-mono text-xs mb-5 bg-cream p-3">
                          <div>
                            <span className="block text-[10px] font-bold text-charcoal/60 uppercase">FORMAT</span>
                            <span className="font-black text-charcoal">{event.participationType}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold text-charcoal/60 uppercase">VENUE</span>
                            <span className="font-black text-charcoal truncate block">{event.venue}</span>
                          </div>
                        </div>

                        {/* Interactive Buttons with Memphis Style */}
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => onSelectEvent(event)}
                            className="btn-memphis-secondary flex-1 py-2.5 px-3 font-mono text-xs font-bold flex items-center justify-center gap-1.5"
                          >
                            <span>DETAILS</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onSelectForRegistration(event.title)}
                            className="btn-memphis-primary py-2.5 px-4 font-mono text-xs font-bold uppercase"
                          >
                            SELECT
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
