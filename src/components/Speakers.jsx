import React from 'react';
import { SPEAKERS } from '../data/speakers';
import { Mic, ArrowUpRight, BookOpen } from 'lucide-react';
import { Asterisk, PlusSign, QuarterArc, HalfCircle } from './MemphisDecorations';

export default function Speakers() {
  const avatarBgColors = ['bg-coral', 'bg-teal', 'bg-mustard', 'bg-violet'];
  const avatarTextColors = ['text-white', 'text-white', 'text-charcoal', 'text-white'];

  return (
    <section id="speakers" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-10 left-6 animate-memphis-wiggle">
          <QuarterArc color="#6B5BE6" size={48} />
        </div>
        <div className="absolute bottom-12 right-12 animate-memphis-float">
          <Asterisk color="#FFC531" size={42} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-teal text-white font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] rotate-2">
              [ 04 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              KEYNOTE &amp; GUEST SPEAKERS
            </h2>
          </div>
          <div className="font-mono text-xs font-bold text-charcoal bg-white px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            [ ILLUSTRATIVE GUEST PROFILES // FESTIVAL DEMO ]
          </div>
        </div>

        {/* Editorial Profile Grid with Memphis Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker, idx) => {
            const bgColor = avatarBgColors[idx % avatarBgColors.length];
            const textColor = avatarTextColors[idx % avatarTextColors.length];

            return (
              <div
                key={speaker.id}
                className="border-[3px] border-charcoal bg-white p-6 flex flex-col justify-between shadow-hard-md hover:shadow-hard-lg hover:-translate-y-1 transition-all group relative"
              >
                <div>
                  {/* Playful Geometric Memphis Avatar */}
                  <div className={`aspect-[4/3] ${bgColor} border-[2.5px] border-charcoal p-4 mb-5 flex flex-col justify-between relative shadow-[3px_3px_0_#17140D] group-hover:rotate-1 transition-transform`}>
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold">
                      <span className="bg-white text-charcoal px-1.5 py-0.5 border border-charcoal">
                        {speaker.architecturalMonogram}
                      </span>
                      <span className="w-2.5 h-2.5 bg-white border border-charcoal" />
                    </div>

                    {/* Bold Monogram Initials */}
                    <div className="text-center py-2 relative">
                      <span className={`font-heading font-black text-5xl tracking-tighter ${textColor} drop-shadow-[2px_2px_0px_#17140D]`}>
                        {speaker.initials}
                      </span>
                    </div>

                    <div className="font-mono text-[9px] font-bold tracking-widest text-right bg-white text-charcoal px-1.5 py-0.5 border border-charcoal inline-block self-end">
                      RESEARCHER // MENTOR
                    </div>
                  </div>

                  {/* Speaker Identity */}
                  <h3 className="font-heading font-black text-2xl text-charcoal mb-1 group-hover:text-coral transition-colors">
                    {speaker.name}
                  </h3>
                  <div className="font-mono text-xs text-coral font-black mb-1">
                    {speaker.role}
                  </div>
                  <div className="text-xs text-charcoal/70 font-mono font-bold mb-4">
                    {speaker.organization}
                  </div>

                  {/* Session Box */}
                  <div className="p-3 bg-mustard border-2 border-charcoal text-xs font-sans mb-4 shadow-[2px_2px_0_#17140D]">
                    <span className="font-mono text-[10px] text-charcoal font-black uppercase block mb-1">
                      SESSION TOPIC:
                    </span>
                    <p className="font-bold text-charcoal leading-snug">
                      “{speaker.sessionTitle}”
                    </p>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-charcoal/80 font-sans font-medium leading-relaxed mb-5">
                    {speaker.shortBio}
                  </p>
                </div>

                {/* Topics Pills */}
                <div className="pt-4 border-t-2 border-charcoal">
                  <div className="flex flex-wrap gap-1.5">
                    {speaker.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 font-mono text-[10px] font-bold bg-cream text-charcoal border border-charcoal shadow-[1px_1px_0_#17140D]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Mentorship Circle */}
        <div className="mt-12 p-6 border-[3px] border-charcoal bg-white shadow-hard-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-coral text-white border-2 border-charcoal flex items-center justify-center font-heading font-black text-base shadow-[2px_2px_0_#17140D]">
              +12
            </div>
            <div>
              <div className="font-heading font-black text-base text-charcoal">
                Plus 12 Active Industry Mentors on Site
              </div>
              <div className="text-xs text-charcoal/80 font-medium">
                Available throughout the 36-hour hackathon for architecture review and live debugging.
              </div>
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-charcoal bg-mustard px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            ROTATING SHIFTS // ALL 3 DAYS
          </span>
        </div>
      </div>
    </section>
  );
}
