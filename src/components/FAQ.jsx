import React, { useState } from 'react';
import { FAQS } from '../data/faq';
import { Plus, Minus } from 'lucide-react';
import { Asterisk, PlusSign, HalfCircle, Squiggle } from './MemphisDecorations';

export default function FAQ() {
  const [openIds, setOpenIds] = useState({ 'faq-01': true });

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-10 right-10 animate-memphis-wiggle">
          <HalfCircle color="#12B3A4" size={54} rotate={180} />
        </div>
        <div className="absolute bottom-12 left-12 animate-memphis-float">
          <Asterisk color="#FF5B57" size={36} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-skyblue text-charcoal font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] rotate-1">
              [ 06 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <span className="font-mono text-xs font-bold text-charcoal bg-white px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            LOGISTICS &amp; DETAILS
          </span>
        </div>

        {/* Editorial Accordion Grid in Memphis Card Container */}
        <div className="max-w-4xl mx-auto border-[3px] border-charcoal divide-y-[3px] divide-charcoal bg-white shadow-hard-xl">
          {FAQS.map((faq, index) => {
            const isOpen = !!openIds[faq.id];

            return (
              <div key={faq.id} className="transition-colors">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className={`w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal ${
                      isOpen ? 'bg-cream-alt' : 'hover:bg-cream/40'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-mono text-xs font-black text-coral bg-white px-2 py-0.5 border border-charcoal shadow-[1px_1px_0_#17140D] mt-0.5">
                        // 0{index + 1}
                      </span>
                      <div>
                        <span className="font-heading font-black text-base sm:text-xl text-charcoal block leading-snug">
                          {faq.question}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-charcoal uppercase tracking-wider mt-1.5 inline-block bg-white px-2 py-0.5 border border-charcoal">
                          CATEGORY: {faq.category}
                        </span>
                      </div>
                    </div>

                    <div className={`p-1.5 border-2 border-charcoal shrink-0 mt-0.5 shadow-[2px_2px_0_#17140D] transition-colors ${
                      isOpen ? 'bg-coral text-white' : 'bg-mustard text-charcoal'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[3]" />
                      )}
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-header-${faq.id}`}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 pl-12 sm:pl-16 font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed bg-white"
                  >
                    <p className="border-l-[3px] border-coral pl-4 text-charcoal font-medium leading-relaxed bg-cream p-3 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs font-bold text-charcoal bg-mustard inline-block px-4 py-2 border-[2.5px] border-charcoal shadow-hard-sm">
            HAVE AN INSTITUTIONAL OR TRAVEL QUESTION?{' '}
            <a
              href="#footer"
              className="text-coral underline underline-offset-4 hover:text-charcoal transition-colors ml-1"
            >
              CONTACT THE CHAPTER LEAD TEAM DIRECTLY →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
