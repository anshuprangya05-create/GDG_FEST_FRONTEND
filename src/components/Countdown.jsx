import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Clock } from 'lucide-react';
import { Asterisk, PlusSign, MemphisTriangle } from './MemphisDecorations';

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown('2026-11-14T09:00:00Z');

  const padZero = (num) => String(num).padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: padZero(days), color: 'text-coral', borderColor: 'border-coral', shadowColor: 'shadow-[6px_6px_0_#FF5B57]' },
    { label: 'HOURS', value: padZero(hours), color: 'text-mustard', borderColor: 'border-mustard', shadowColor: 'shadow-[6px_6px_0_#FFC531]' },
    { label: 'MINUTES', value: padZero(minutes), color: 'text-teal', borderColor: 'border-teal', shadowColor: 'shadow-[6px_6px_0_#12B3A4]' },
    { label: 'SECONDS', value: padZero(seconds), color: 'text-skyblue', borderColor: 'border-skyblue', shadowColor: 'shadow-[6px_6px_0_#3AA0FF]' },
  ];

  return (
    <section className="py-20 sm:py-24 border-b-[3px] border-charcoal bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative dark-mode Memphis accents */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden="true">
        <div className="absolute top-8 left-12 animate-memphis-float">
          <Asterisk color="#FFC531" size={36} />
        </div>
        <div className="absolute bottom-10 right-16 animate-memphis-wiggle">
          <PlusSign color="#FF5B57" size={28} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-[3px] border-cream/30 pb-5 mb-10 sm:mb-14 gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-cream">
            <span className="w-3 h-3 bg-coral border-2 border-cream inline-block animate-pulse-subtle" />
            <span className="font-bold tracking-wider uppercase bg-cream/10 px-2 py-0.5 border border-cream/30">
              SYNCHRONIZED TIMELINE TELEMETRY
            </span>
          </div>

          <div className="font-mono text-xs font-black text-charcoal tracking-wide uppercase px-3 py-1 bg-mustard border-2 border-cream shadow-[3px_3px_0_#FFFFFF] inline-block -rotate-1">
            ★ DEMONSTRATION COUNTDOWN // FESTIVAL WINDOW: NOV 14–16, 2026
          </div>
        </div>

        {/* Countdown Grid with Memphis High-Contrast Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className={`border-[3px] border-cream bg-[#242018] p-6 sm:p-8 flex flex-col justify-between relative group ${unit.shadowColor} hover:-translate-y-1 transition-transform`}
            >
              <div className="flex items-center justify-between font-mono text-xs text-cream/80 mb-4">
                <span className="font-bold">UNIT // 0{index + 1}</span>
                <span className="font-bold bg-cream/20 px-1.5 py-0.5 border border-cream/40 text-[10px]">
                  {unit.label === 'SECONDS' ? 'TICKING' : 'HOLD'}
                </span>
              </div>

              <div className="text-center py-2 sm:py-4">
                <span className={`font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight block tabular-nums ${unit.color}`}>
                  {unit.value}
                </span>
              </div>

              <div className="border-t-[2px] border-cream/20 pt-3 text-center">
                <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-cream uppercase bg-charcoal px-3 py-0.5 border border-cream/40 inline-block">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Notice */}
        <div className="mt-10 pt-6 border-t-[2px] border-cream/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-cream/80 font-bold">
          <div className="bg-cream/10 px-3 py-1 border border-cream/30">
            VENUE: MAIN CAMPUS AUDITORIUM &amp; INNOVATION ANNEX
          </div>
          <div className="bg-cream/10 px-3 py-1 border border-cream/30">
            OFFICIAL KICKOFF: 09:00 AM UTC+05:30
          </div>
        </div>
      </div>
    </section>
  );
}
