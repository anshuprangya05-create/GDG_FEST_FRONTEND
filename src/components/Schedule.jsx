import React, { useState } from 'react';
import { FESTIVAL_DAYS, SCHEDULE_ITEMS } from '../data/schedule';
import { Clock, MapPin, User, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { HalfCircle, PlusSign, Asterisk, MemphisTriangle } from './MemphisDecorations';

export default function Schedule() {
  const [activeDayId, setActiveDayId] = useState('day-1');
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedFilter, setSelectedFilter] = useState('All');

  const activeDay = FESTIVAL_DAYS.find((d) => d.id === activeDayId) || FESTIVAL_DAYS[0];
  const items = SCHEDULE_ITEMS[activeDayId] || [];

  const tracks = ['All', 'Core', 'Competition', 'Workshop', 'General'];

  const filteredItems = items.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.track.toLowerCase() === selectedFilter.toLowerCase();
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GDG FEST//FESTIVAL SCHEDULE//EN
BEGIN:VEVENT
SUMMARY:GDG FEST 2026 - University Chapter
DESCRIPTION:Three days of systems engineering, hackathons, and design sprints.
LOCATION:Campus Innovation Complex
DTSTART:20261114T030000Z
DTEND:20261116T130000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'gdg-fest-2026-calendar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-12 left-10 animate-memphis-float">
          <MemphisTriangle color="#FFC531" size={40} />
        </div>
        <div className="absolute bottom-16 right-10 animate-memphis-wiggle">
          <HalfCircle color="#12B3A4" size={54} rotate={270} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-10 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-mustard text-charcoal font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] -rotate-1">
              [ 03 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              INTERACTIVE SCHEDULE
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="btn-memphis-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold"
              title="Download ICS Calendar file"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>EXPORT .ICS</span>
            </button>
          </div>
        </div>

        {/* Day Selector Tabs (Memphis Hard Shadow Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {FESTIVAL_DAYS.map((day, idx) => {
            const isActive = day.id === activeDayId;
            const colors = ['bg-coral text-white', 'bg-mustard text-charcoal', 'bg-teal text-white'];
            const activeColor = colors[idx % colors.length];

            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveDayId(day.id)}
                className={`text-left p-5 border-[3px] border-charcoal transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal ${
                  isActive
                    ? `${activeColor} shadow-hard-lg -translate-y-1`
                    : 'bg-white hover:bg-cream-alt shadow-hard-sm'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className={`font-black px-2 py-0.5 border border-charcoal ${isActive ? 'bg-white text-charcoal' : 'bg-cream text-charcoal'}`}>
                    DAY // {day.dayNumber}
                  </span>
                  <span className="font-bold text-[11px]">{day.subtitle}</span>
                </div>
                <div className="font-heading font-black text-xl tracking-tight">
                  {day.title}
                </div>
                <div className="text-xs mt-1.5 font-sans font-medium line-clamp-1 opacity-90">
                  {day.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Day Meta Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border-[3px] border-charcoal shadow-hard-md mb-8">
          <div>
            <span className="bg-coral text-white font-mono text-xs font-black px-2 py-0.5 border border-charcoal mr-2">
              FOCUS // DAY {activeDay.dayNumber}
            </span>
            <span className="text-xs sm:text-sm font-bold text-charcoal">
              {activeDay.theme}
            </span>
          </div>

          {/* Track Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[11px] font-black text-charcoal mr-1">TRACK:</span>
            {tracks.map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setSelectedFilter(track)}
                className={`px-3 py-1 text-xs font-mono font-bold transition-all border-2 border-charcoal ${
                  selectedFilter === track
                    ? 'bg-charcoal text-white shadow-[2px_2px_0_#FF5B57]'
                    : 'bg-cream text-charcoal hover:bg-mustard shadow-[1px_1px_0_#17140D]'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List with Memphis Cards */}
        <div className="border-[3px] border-charcoal bg-white divide-y-[3px] divide-charcoal shadow-hard-lg">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center font-mono text-xs font-bold text-charcoal">
              NO SESSIONS FOUND FOR THE SELECTED TRACK ON THIS DAY.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isExpanded = !!expandedItems[item.id];

              return (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 hover:bg-cream/40 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                    {/* Time & Duration Column */}
                    <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start font-mono">
                      <div className="text-sm sm:text-base font-black text-charcoal flex items-center gap-2 bg-mustard px-2.5 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                        <Clock className="w-4 h-4 text-charcoal stroke-[2.5]" />
                        <span className="tabular-nums">{item.time}</span>
                      </div>
                      <span className="text-xs font-bold text-charcoal/70 mt-1 pl-1">
                        DURATION: {item.duration}
                      </span>
                    </div>

                    {/* Title, Speaker & Details Column */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] font-black tracking-wider uppercase px-2 py-0.5 bg-teal text-white border border-charcoal">
                          {item.category}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-charcoal bg-cream px-2 py-0.5 border border-charcoal">
                          // TRACK: {item.track}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-lg sm:text-xl text-charcoal leading-snug">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono font-bold text-charcoal/80">
                        <span className="flex items-center gap-1.5 bg-cream px-2 py-0.5 border border-charcoal">
                          <User className="w-3.5 h-3.5 text-coral stroke-[2.5]" />
                          {item.speaker}
                        </span>
                        <span className="flex items-center gap-1.5 bg-cream px-2 py-0.5 border border-charcoal">
                          <MapPin className="w-3.5 h-3.5 text-mustard stroke-[2.5]" />
                          {item.venue}
                        </span>
                      </div>

                      {/* Expandable Description */}
                      {isExpanded && (
                        <div className="mt-4 pt-3 border-t-2 border-charcoal text-xs sm:text-sm text-charcoal font-sans font-medium leading-relaxed bg-cream p-4 border-2 shadow-[2px_2px_0_#17140D]">
                          <span className="font-mono text-[10px] font-black uppercase block mb-1 text-coral">
                            SESSION BRIEFING:
                          </span>
                          {item.description}
                        </div>
                      )}
                    </div>

                    {/* Expand Toggle */}
                    <div className="lg:col-span-2 flex justify-end items-center pt-2 lg:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        className="btn-memphis-secondary font-mono text-xs font-bold px-3 py-1.5 flex items-center gap-1"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'LESS' : 'DETAILS'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
