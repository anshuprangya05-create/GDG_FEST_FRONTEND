import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Terminal, Cpu } from 'lucide-react';
import { HalfCircle, ZigZag, PlusSign, Squiggle, Asterisk } from './MemphisDecorations';

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Systems & Architecture First',
      category: 'ENGINEERING PRINCIPLE',
      description: 'We prioritize deep architectural comprehension over superficial syntax. From browser render engines and compiler internals to distributed state machines, our sessions examine how computers actually execute instructions.',
      details: 'Focus: V8 bytecode analysis, cache invalidation, low-latency network primitives, and memory safety benchmarks.',
      highlight: 'ZERO SYNTAX OBSESSION',
      badgeColor: 'bg-coral text-white',
    },
    {
      num: '02',
      title: 'Radical Open Collaboration',
      category: 'OPEN SOURCE ETHOS',
      description: 'Competitions are framed around real developer tooling, civic web accessibility, and resilient local infrastructure. All code created during the festival is committed to public repositories under permissive licenses.',
      details: 'Requirement: Public commit timelines, automated test verification, and reproducible container environments.',
      highlight: 'PUBLIC REPOSITORIES',
      badgeColor: 'bg-teal text-white',
    },
    {
      num: '03',
      title: 'Aesthetic Rigor & Restraint',
      category: 'INTERFACE PHILOSOPHY',
      description: 'True product engineering balances typographic hierarchy with extreme runtime performance. We reject generic templates, excessive bloat, and fake decoration in favor of accessible, purposeful user interfaces.',
      details: 'Standards: WCAG AAA compliance, zero bundle bloat, responsive clamp scales, and fluid interaction feedback.',
      highlight: 'HUMAN INTERFACES',
      badgeColor: 'bg-mustard text-charcoal',
    },
    {
      num: '04',
      title: 'Direct Peer & Industry Bridge',
      category: 'MENTORSHIP MODEL',
      description: 'No velvet ropes or isolated keynote stages. Attendees participate in live architecture reviews, 1-on-1 code reviews with staff engineers, and collaborative debugging sessions directly at the lab benches.',
      details: 'Access: 12 on-site mentors across systems, design, and cloud infrastructure rotating across all 3 festival days.',
      highlight: 'UNFILTERED ACCESS',
      badgeColor: 'bg-violet text-white',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-6 right-16 animate-memphis-wiggle">
          <HalfCircle color="#FF5B57" size={64} rotate={180} />
        </div>
        <div className="absolute top-1/3 -left-4 animate-memphis-float">
          <Squiggle color="#12B3A4" className="w-20" />
        </div>
        <div className="absolute bottom-10 right-8 animate-memphis-float-reverse">
          <Asterisk color="#6B5BE6" size={40} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Memphis Tag */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-12 sm:mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-mustard text-charcoal font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] -rotate-2">
              [ 01 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              ABOUT THE FESTIVAL
            </h2>
          </div>
          <span className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider bg-white px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            MISSION &amp; CORE VALUES
          </span>
        </div>

        {/* Editorial Statement Block with Playful Marker Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-stretch">
          <div className="lg:col-span-8 bg-white border-[3px] border-charcoal p-6 sm:p-10 shadow-hard-lg flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4 font-bold">
                // THE CORE HYPOTHESIS
              </p>
              <blockquote className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
                “Great things happen when <span className="marker-yellow">curious minds</span> build together.”
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t-[2px] border-charcoal flex items-center justify-between font-mono text-xs font-bold">
              <span>GDG CHAPTER PRINCIPLE</span>
              <span className="bg-teal text-white px-2 py-0.5 border border-charcoal">VERIFIED</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between bg-mustard border-[3px] border-charcoal p-6 sm:p-8 shadow-hard-lg">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-wider bg-charcoal text-white px-2 py-0.5 inline-block mb-3">
                CHAPTER ETHOS
              </div>
              <p className="text-sm sm:text-base text-charcoal leading-relaxed font-sans font-bold mb-4">
                GDG Fest is the flagship technical gathering hosted by Google Developer Groups SOA ITER.
              </p>
              <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed font-sans">
                Conceived by student builders who value software engineering as an intellectual craft: low latency, intuitive human interfaces, and thoughtful collaboration over commercial marketing hype.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-charcoal font-mono text-xs font-bold text-charcoal">
              ★ COMMUNITY DRIVEN &amp; STUDENT LED
            </div>
          </div>
        </div>

        {/* Architectural 4-Pillar Ledger Layout */}
        <div className="border-[3px] border-charcoal bg-white divide-y-[3px] divide-charcoal shadow-hard-lg">
          {pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.num}
                onClick={() => setActivePillar(idx)}
                className={`p-6 sm:p-8 cursor-pointer transition-colors duration-150 ${
                  isSelected ? 'bg-cream-alt' : 'bg-white hover:bg-cream/50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Column 1: Index and Category */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start">
                    <span className="font-mono text-lg font-black text-coral">
                      // {pillar.num}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-charcoal uppercase tracking-wider mt-1 bg-white px-2 py-0.5 border border-charcoal">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Column 2: Title and Core Description */}
                  <div className="lg:col-span-6">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-charcoal tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/85 font-sans font-medium leading-relaxed">
                      {pillar.description}
                    </p>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t-2 border-charcoal font-mono text-xs text-charcoal bg-white p-3.5 border-2 border-charcoal shadow-[3px_3px_0_#17140D]">
                        <span className="bg-mustard px-1.5 py-0.5 border border-charcoal font-bold mr-1">
                          SPECIFICATION:
                        </span>
                        <span>{pillar.details}</span>
                      </div>
                    )}
                  </div>

                  {/* Column 3: Tag & Selection Indicator */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between items-end h-full">
                    <span className={`px-2.5 py-1 font-mono text-[10px] font-black tracking-wider uppercase border-2 border-charcoal shadow-[2px_2px_0_#17140D] ${pillar.badgeColor}`}>
                      {pillar.highlight}
                    </span>
                    <span className="hidden lg:inline-block font-mono text-xs font-bold text-charcoal mt-6 bg-cream px-2 py-0.5 border border-charcoal">
                      {isSelected ? '[ ACTIVE FOCUS ]' : '[ CLICK TO EXPAND ]'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Qualitative Community Ribbon */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 border-[3px] border-charcoal bg-white shadow-hard-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="bg-coral text-white font-mono text-xs font-black px-2 py-0.5 border border-charcoal inline-block mb-2">
              INCLUSIVE COMMUNITY CULTURE
            </span>
            <p className="font-heading font-black text-lg sm:text-2xl text-charcoal">
              Equal access for first-year builders and experienced systems engineers alike.
            </p>
            <p className="text-xs sm:text-sm text-charcoal/80 font-medium mt-1">
              Whether you are submitting your first open-source pull request or benchmarking custom allocator kernels, our mentor circle ensures a supportive, rigorous environment.
            </p>
          </div>

          <div className="font-mono text-xs text-charcoal border-[2.5px] border-charcoal bg-mustard px-5 py-3.5 shadow-[4px_4px_0_#17140D] shrink-0">
            <div className="text-[10px] font-bold text-charcoal uppercase">HOST CHAPTER:</div>
            <div className="font-black text-sm text-charcoal">GDG SOA ITER CHAPTER</div>
          </div>
        </div>
      </div>
    </section>
  );
}
