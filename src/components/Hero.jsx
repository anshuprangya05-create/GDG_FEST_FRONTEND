import React from 'react';
import { ArrowUpRight, Sparkles, Terminal, MapPin, Zap } from 'lucide-react';
import { Squiggle, ZigZag, PlusSign, HalfCircle, QuarterArc, MemphisTriangle, Asterisk, DottedCircle } from './MemphisDecorations';

export default function Hero({ onExploreClick, onRegisterClick }) {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b-[3px] border-charcoal bg-cream overflow-hidden"
    >
      {/* Decorative Memphis SVG Shapes (Background, non-interactive) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 memphis-dots opacity-20" />

        {/* Floating animated Memphis shapes */}
        <div className="absolute top-16 left-8 animate-memphis-float">
          <ZigZag color="#FF5B57" className="w-20" />
        </div>
        <div className="absolute top-28 right-12 animate-memphis-wiggle">
          <Asterisk color="#FFC531" size={36} />
        </div>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 animate-memphis-float-reverse hidden md:block">
          <HalfCircle color="#12B3A4" size={56} rotate={45} />
        </div>
        <div className="absolute bottom-16 left-1/3 animate-memphis-bounce-gentle hidden lg:block">
          <Squiggle color="#6B5BE6" className="w-24" />
        </div>
        <div className="absolute top-36 right-1/3 animate-memphis-spin-slow opacity-60 hidden xl:block">
          <DottedCircle size={64} color="#17140D" />
        </div>
        <div className="absolute bottom-8 right-10 animate-memphis-float">
          <MemphisTriangle color="#3AA0FF" size={42} />
        </div>
        <div className="absolute top-1/4 left-1/2 animate-memphis-wiggle hidden sm:block">
          <PlusSign color="#FF5B57" size={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Metadata Strip in Playful Memphis Tag Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-[3px] border-charcoal bg-white p-3 mb-8 sm:mb-12 shadow-[4px_4px_0_#17140D]">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-charcoal">
            <span className="w-3 h-3 bg-coral border-2 border-charcoal inline-block" />
            <span className="bg-mustard px-2 py-0.5 border border-charcoal uppercase tracking-wider text-[11px]">
              EDITION // 2026
            </span>
            <span className="text-charcoal hidden sm:inline">•</span>
            <span className="hidden sm:inline">CAMPUS INNOVATION COMPLEX</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs font-bold text-charcoal">
            <span className="bg-teal text-white px-2.5 py-0.5 border border-charcoal text-[11px] tracking-wide">
              NOV 14–16, 2026
            </span>
            <span className="px-2 py-0.5 border border-charcoal bg-cream font-bold text-[10px] uppercase">
              STUDENT CHAPTER
            </span>
          </div>
        </div>

        {/* Asymmetrical Memphis Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Expressive Typography with Marker Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-violet text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 border-[2.5px] border-charcoal shadow-[3px_3px_0_#17140D] mb-4 -rotate-1">
                ★ ANNUAL TECHNOLOGY FESTIVAL ★
              </div>

              <h1 className="text-display-2xl font-heading font-black text-charcoal tracking-tighter leading-none mb-6">
                GDG<br />
                <span className="text-charcoal">FEST</span>
                <span className="text-coral ml-1 inline-block transform hover:rotate-6 transition-transform">’26</span>
              </h1>

              <div className="max-w-xl">
                <p className="text-xl sm:text-2xl font-heading font-bold text-charcoal leading-snug mb-4">
                  A gathering of{' '}
                  <span className="marker-yellow">builders</span>,{' '}
                  <span className="marker-teal">thinkers</span>, and{' '}
                  <span className="marker-coral">creators</span>.
                </p>
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans font-medium mb-8">
                  Three high-octane days of systems engineering, 36-hour hackathons, algorithmic tournaments, and human-centered design sprints. Built by the university developer community for curious minds who write code with intention.
                </p>
              </div>

              {/* Action Buttons with Memphis Hard Shadow & Press Effects */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onRegisterClick}
                  className="btn-memphis-primary px-7 py-4 text-sm font-bold tracking-wider inline-flex items-center gap-2"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={onExploreClick}
                  className="btn-memphis-secondary px-7 py-4 text-sm font-bold tracking-wider"
                >
                  EXPLORE SCHEDULE &amp; TRACKS
                </button>
              </div>
            </div>

            {/* Memphis Metric Blocks (Solid colors, 3px border, 5px hard shadow) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-10 sm:pt-12 mt-10 border-t-[3px] border-charcoal">
              <div className="p-3.5 bg-mustard border-[3px] border-charcoal shadow-[4px_4px_0_#17140D] transform -rotate-1 hover:rotate-0 transition-transform">
                <span className="block font-mono text-[10px] sm:text-[11px] font-bold text-charcoal uppercase tracking-wider">COMPETITIONS</span>
                <span className="font-heading font-black text-xl sm:text-2xl text-charcoal">06 Tracks</span>
              </div>
              <div className="p-3.5 bg-teal text-white border-[3px] border-charcoal shadow-[4px_4px_0_#17140D] transform rotate-1 hover:rotate-0 transition-transform">
                <span className="block font-mono text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">SPRINT DURATION</span>
                <span className="font-heading font-black text-xl sm:text-2xl text-white">36 Hours</span>
              </div>
              <div className="p-3.5 bg-coral text-white border-[3px] border-charcoal shadow-[4px_4px_0_#17140D] transform -rotate-1 hover:rotate-0 transition-transform">
                <span className="block font-mono text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">ADMISSION</span>
                <span className="font-heading font-black text-xl sm:text-2xl text-white">100% Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Memphis Postmodern Pass / Specimen Card */}
          <div className="lg:col-span-5 w-full">
            <div className="border-[3px] border-charcoal bg-white p-5 sm:p-7 relative shadow-hard-lg">
              {/* Header Memphis Stripe Banner */}
              <div className="flex items-center justify-between border-[2.5px] border-charcoal bg-mustard p-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-coral border border-charcoal" />
                  <span className="font-mono text-xs font-black text-charcoal uppercase tracking-wider">
                    SPECIMEN // ADMISSION PASS
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold bg-charcoal text-white px-2 py-0.5">
                  VERIFIED
                </span>
              </div>

              {/* Card Body */}
              <div className="bg-cream border-[2.5px] border-charcoal p-5 relative">
                {/* Event Identifiers */}
                <div className="flex items-start justify-between border-b-[2px] border-charcoal pb-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-charcoal/70 uppercase block">EVENT IDENTIFIER</span>
                    <span className="font-heading font-black text-2xl text-charcoal">GDG-SOA-2026</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] font-bold text-charcoal/70 uppercase block">SECTOR</span>
                    <span className="font-mono text-xs font-black text-coral bg-white px-2 py-0.5 border border-charcoal">
                      CAMPUS-HUB
                    </span>
                  </div>
                </div>

                {/* 4 Postmodern Track Cards */}
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs mb-5">
                  <div className="p-2.5 bg-coral text-white border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                    <span className="text-[9px] font-bold opacity-90 block uppercase">01 // HACKATHON</span>
                    <span className="font-bold text-sm">36H SPRINT</span>
                  </div>
                  <div className="p-2.5 bg-teal text-white border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                    <span className="text-[9px] font-bold opacity-90 block uppercase">02 // ALGORITHMS</span>
                    <span className="font-bold text-sm">DUEL &amp; BENCH</span>
                  </div>
                  <div className="p-2.5 bg-mustard text-charcoal border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                    <span className="text-[9px] font-bold opacity-90 block uppercase">03 // DESIGN</span>
                    <span className="font-bold text-sm">WCAG AAA UI</span>
                  </div>
                  <div className="p-2.5 bg-skyblue text-charcoal border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                    <span className="text-[9px] font-bold opacity-90 block uppercase">04 // SYSTEMS</span>
                    <span className="font-bold text-sm">BROWSER JIT</span>
                  </div>
                </div>

                {/* Vector Barcode with Memphis Accents */}
                <div className="pt-3 border-t-[2px] border-charcoal">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-charcoal mb-2">
                    <span>COORDS: 20°17'N 85°49'E</span>
                    <span>CODE: GDG26-PASS</span>
                  </div>
                  
                  {/* High contrast vector barcode */}
                  <svg viewBox="0 0 320 28" className="w-full h-8 text-charcoal" fill="currentColor">
                    <rect x="0" y="0" width="3" height="28" />
                    <rect x="6" y="0" width="1.5" height="28" />
                    <rect x="10" y="0" width="4" height="28" />
                    <rect x="17" y="0" width="2" height="28" />
                    <rect x="22" y="0" width="6" height="28" />
                    <rect x="31" y="0" width="1.5" height="28" />
                    <rect x="35" y="0" width="3" height="28" />
                    <rect x="42" y="0" width="5" height="28" />
                    <rect x="50" y="0" width="2" height="28" />
                    <rect x="56" y="0" width="1.5" height="28" />
                    <rect x="60" y="0" width="4" height="28" />
                    <rect x="68" y="0" width="7" height="28" />
                    <rect x="78" y="0" width="2" height="28" />
                    <rect x="83" y="0" width="3" height="28" />
                    <rect x="89" y="0" width="1.5" height="28" />
                    <rect x="94" y="0" width="5" height="28" />
                    <rect x="103" y="0" width="2" height="28" />
                    <rect x="108" y="0" width="4" height="28" />
                    <rect x="115" y="0" width="1.5" height="28" />
                    <rect x="120" y="0" width="8" height="28" />
                    <rect x="131" y="0" width="2" height="28" />
                    <rect x="136" y="0" width="3" height="28" />
                    <rect x="142" y="0" width="1.5" height="28" />
                    <rect x="146" y="0" width="5" height="28" />
                    <rect x="154" y="0" width="2" height="28" />
                    <rect x="159" y="0" width="4" height="28" />
                    <rect x="166" y="0" width="1.5" height="28" />
                    <rect x="171" y="0" width="6" height="28" />
                    <rect x="180" y="0" width="2" height="28" />
                    <rect x="185" y="0" width="3" height="28" />
                    <rect x="191" y="0" width="1.5" height="28" />
                    <rect x="195" y="0" width="5" height="28" />
                    <rect x="203" y="0" width="3" height="28" />
                    <rect x="209" y="0" width="2" height="28" />
                    <rect x="214" y="0" width="4" height="28" />
                    <rect x="221" y="0" width="7" height="28" />
                    <rect x="231" y="0" width="2" height="28" />
                    <rect x="236" y="0" width="3" height="28" />
                    <rect x="242" y="0" width="1.5" height="28" />
                    <rect x="246" y="0" width="5" height="28" />
                    <rect x="254" y="0" width="2" height="28" />
                    <rect x="259" y="0" width="4" height="28" />
                    <rect x="266" y="0" width="1.5" height="28" />
                    <rect x="270" y="0" width="6" height="28" />
                    <rect x="279" y="0" width="3" height="28" />
                    <rect x="285" y="0" width="2" height="28" />
                    <rect x="290" y="0" width="5" height="28" />
                    <rect x="298" y="0" width="1.5" height="28" />
                    <rect x="302" y="0" width="4" height="28" />
                    <rect x="309" y="0" width="2" height="28" />
                    <rect x="314" y="0" width="3" height="28" />
                  </svg>
                </div>
              </div>

              {/* Bottom annotation */}
              <div className="mt-4 p-3 bg-white border-2 border-charcoal text-charcoal flex items-center justify-between text-xs font-mono font-bold shadow-[2px_2px_0_#17140D]">
                <span>COMMUNITY SPONSORED</span>
                <span className="text-coral">★ ZERO FEES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text-based Scroll Indication with Playful Memphis Navigation Badges */}
        <div className="mt-14 pt-8 border-t-[3px] border-charcoal flex flex-wrap items-center justify-between text-xs font-mono font-bold text-charcoal gap-4">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            <span>SCROLL TO EXPLORE SESSIONS</span>
            <span className="text-coral text-base">↓</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="bg-mustard px-2 py-1 border border-charcoal">[ 01 ABOUT ]</span>
            <span className="bg-teal text-white px-2 py-1 border border-charcoal">[ 02 EVENTS ]</span>
            <span className="bg-coral text-white px-2 py-1 border border-charcoal">[ 03 SCHEDULE ]</span>
            <span className="bg-violet text-white px-2 py-1 border border-charcoal">[ 04 SPEAKERS ]</span>
            <span className="bg-skyblue px-2 py-1 border border-charcoal">[ 05 REGISTER ]</span>
            <span className="bg-white px-2 py-1 border border-charcoal">[ 06 FAQ ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
