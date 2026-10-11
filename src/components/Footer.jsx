import React from 'react';
import { ArrowUp, Globe, Mail, MapPin } from 'lucide-react';
import { Asterisk, PlusSign, MemphisTriangle, HalfCircle } from './MemphisDecorations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-charcoal text-cream pt-20 pb-12 border-t-[3px] border-charcoal relative overflow-hidden">
      {/* Background dark-mode Memphis accents */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20" aria-hidden="true">
        <div className="absolute top-10 right-20 animate-memphis-float">
          <HalfCircle color="#FFC531" size={70} rotate={45} />
        </div>
        <div className="absolute bottom-16 left-12 animate-memphis-wiggle">
          <Asterisk color="#FF5B57" size={40} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Typographic Identity */}
        <div className="border-b-[3px] border-cream/20 pb-12 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-black text-mustard uppercase mb-3 bg-cream/10 px-3 py-1 border border-cream/30 inline-block">
                <span className="w-2.5 h-2.5 bg-coral inline-block mr-1.5" />
                <span>UNIVERSITY TECHNOLOGY FESTIVAL 2026</span>
              </div>
              <h2 className="font-heading font-black text-display-xl sm:text-display-2xl text-cream tracking-tighter leading-none">
                GDG FEST <span className="text-coral">’26</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="self-start lg:self-end px-5 py-3 border-[2.5px] border-cream bg-[#242018] hover:bg-mustard hover:text-charcoal text-cream font-mono text-xs font-black flex items-center gap-2 shadow-[4px_4px_0_#FFC531] active:translate-x-1 active:translate-y-1 transition-all"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b-[3px] border-cream/20 font-sans text-xs sm:text-sm">
          {/* Col 1: Overview */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-black text-mustard uppercase tracking-wider block bg-cream/10 px-2 py-0.5 border border-cream/20 inline-block">
              // CHAPTER DETAILS
            </span>
            <p className="text-cream/80 leading-relaxed font-medium">
              Organized by Google Developer Groups (GDG) on Campus, SOA ITER Chapter. A student-led organization cultivating open-source software, competitive engineering, and human-centered design.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-black text-teal uppercase tracking-wider block bg-cream/10 px-2 py-0.5 border border-cream/20 inline-block">
              // QUICK LINKS
            </span>
            <ul className="space-y-2 font-mono text-xs font-bold">
              <li>
                <a href="#about" className="text-cream/80 hover:text-mustard transition-colors flex items-center gap-1">
                  <span>01 //</span> About Mission
                </a>
              </li>
              <li>
                <a href="#events" className="text-cream/80 hover:text-mustard transition-colors flex items-center gap-1">
                  <span>02 //</span> Competitions &amp; Tracks
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-cream/80 hover:text-mustard transition-colors flex items-center gap-1">
                  <span>03 //</span> 3-Day Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-cream/80 hover:text-mustard transition-colors flex items-center gap-1">
                  <span>04 //</span> Guest Speakers
                </a>
              </li>
              <li>
                <a href="#register" className="text-cream/80 hover:text-mustard transition-colors flex items-center gap-1">
                  <span>05 //</span> Registration Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Logistics & Campus */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-black text-coral uppercase tracking-wider block bg-cream/10 px-2 py-0.5 border border-cream/20 inline-block">
              // VENUE &amp; LOGISTICS
            </span>
            <div className="text-cream/80 space-y-2 font-sans font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-mustard shrink-0 mt-0.5 stroke-[2.5]" />
                <span>
                  Campus Innovation Complex<br />
                  Institute of Technical Education &amp; Research<br />
                  Bhubaneswar, Odisha, India
                </span>
              </div>
              <div className="pt-2 font-mono text-xs font-bold text-mustard bg-cream/10 px-2 py-0.5 border border-cream/20 inline-block">
                DATES: NOV 14–16, 2026
              </div>
            </div>
          </div>

          {/* Col 4: Community Inquiries */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-black text-skyblue uppercase tracking-wider block bg-cream/10 px-2 py-0.5 border border-cream/20 inline-block">
              // INQUIRIES &amp; COMMUNITY
            </span>
            <div className="text-cream/80 space-y-2.5 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-coral stroke-[2.5]" />
                <span className="font-mono text-xs font-bold">chapter@gdg-soa.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal stroke-[2.5]" />
                <span className="font-mono text-xs font-bold">gdg.community.dev/iter</span>
              </div>
              <div className="pt-2">
                <span className="font-mono text-[10px] font-bold text-cream/60 block uppercase">
                  COMMUNITY REPOSITORY
                </span>
                <span className="font-mono text-xs font-black text-mustard">github.com/gdg-iter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Chapter Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-cream/70 font-medium">
          <p className="max-w-2xl leading-relaxed">
            GDG Fest is organized independently by university student developers. Google Developer Groups is an independent group; activities and opinions expressed here should in no way be linked to Google, the corporation.
          </p>

          <div className="shrink-0 text-left md:text-right font-black text-cream">
            <span>© 2026 GDG CHAPTER. ALL CODE OPEN-SOURCED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
