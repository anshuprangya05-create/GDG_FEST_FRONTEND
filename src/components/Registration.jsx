import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data/events';
import { CheckCircle2, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Asterisk, PlusSign, HalfCircle, Squiggle } from './MemphisDecorations';

export default function Registration({ preselectedEvent = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    eventTitle: preselectedEvent || (EVENTS[0]?.title ?? ''),
    participationType: 'Solo',
    teamName: '',
    teammates: '',
    githubOrPortfolio: '',
    agreedToConduct: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({ ...prev, eventTitle: preselectedEvent }));
    }
  }, [preselectedEvent]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gdg_fest_demo_registration');
      if (saved) {
        setRegistrationSuccess(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'University email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid university email address.';
    }

    if (!formData.college.trim()) {
      errs.college = 'College or University name is required.';
    }

    if (!formData.eventTitle) {
      errs.eventTitle = 'Please select a festival competition or workshop.';
    }

    if (formData.participationType === 'Team') {
      if (!formData.teamName.trim()) {
        errs.teamName = 'Team name is required for team submissions.';
      }
    }

    if (!formData.agreedToConduct) {
      errs.agreedToConduct = 'You must acknowledge the festival code of conduct.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const passId = `GDG26-${Math.floor(100000 + Math.random() * 900000)}`;
      const registrationPayload = {
        passId,
        participantName: formData.name,
        email: formData.email,
        college: formData.college,
        eventTitle: formData.eventTitle,
        participationType: formData.participationType,
        teamName: formData.participationType === 'Team' ? formData.teamName : null,
        timestamp: new Date().toISOString(),
        isDemo: true,
      };

      try {
        localStorage.setItem(
          'gdg_fest_demo_registration',
          JSON.stringify(registrationPayload)
        );
      } catch (err) {
        console.warn('Could not persist to localStorage', err);
      }

      setIsSubmitting(false);
      setRegistrationSuccess(registrationPayload);

      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5B57', '#FFC531', '#12B3A4', '#6B5BE6'],
        });
      } catch {
        // fallback
      }
    }, 600);
  };

  const handleReset = () => {
    localStorage.removeItem('gdg_fest_demo_registration');
    setRegistrationSuccess(null);
    setFormData({
      name: '',
      email: '',
      college: '',
      eventTitle: EVENTS[0]?.title ?? '',
      participationType: 'Solo',
      teamName: '',
      teammates: '',
      githubOrPortfolio: '',
      agreedToConduct: false,
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-20 sm:py-28 border-b-[3px] border-charcoal bg-cream relative overflow-hidden">
      {/* Background Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-12 right-12 animate-memphis-wiggle">
          <Squiggle color="#FF5B57" className="w-24" />
        </div>
        <div className="absolute bottom-20 left-6 animate-memphis-float">
          <HalfCircle color="#3AA0FF" size={54} rotate={180} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-[3px] border-charcoal pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-coral text-white font-mono text-sm font-black px-3 py-1 border-2 border-charcoal shadow-[3px_3px_0_#17140D] -rotate-1">
              [ 05 ]
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              FESTIVAL REGISTRATION
            </h2>
          </div>
          <div className="font-mono text-xs font-bold text-charcoal bg-white px-3 py-1 border-2 border-charcoal shadow-[2px_2px_0_#17140D]">
            [ DEMONSTRATION WORKFLOW // CLIENT VALIDATED ]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-[3px] border-charcoal bg-white p-6 sm:p-8 shadow-hard-lg">
              <span className="bg-mustard text-charcoal font-mono text-xs font-black px-2.5 py-0.5 border border-charcoal inline-block mb-3">
                APPLICATION PROTOCOL
              </span>
              <h3 className="font-heading font-black text-2xl text-charcoal mb-3">
                Reserve Your Attendance &amp; Competition Slot
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-medium mb-6">
                Registration grants full access to all three days of GDG Fest, including workshops, hackathon track participation, industry mentoring, and event catering.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-charcoal font-mono text-xs font-bold text-charcoal">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-coral border border-charcoal" />
                  <span>100% FREE ADMISSION // COMMUNITY SPONSORED</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-mustard border border-charcoal" />
                  <span>BADGE COLLECTION OPENS NOV 14, 08:30 AM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-teal border border-charcoal" />
                  <span>CROSS-UNIVERSITY TEAMS WELCOME</span>
                </div>
              </div>
            </div>

            {/* Explicit Notice in Memphis Box */}
            <div className="border-[3px] border-charcoal p-5 bg-mustard font-mono text-xs text-charcoal shadow-hard-md">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-charcoal shrink-0 mt-0.5 stroke-[2.5]" />
                <div className="leading-relaxed">
                  <span className="font-black">DEMONSTRATION NOTICE: </span>
                  This registration portal runs complete client-side validation and generates a verifiable demonstration pass persisted to your local browser storage. No live server credentials required.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Physical Memphis Badge */}
          <div className="lg:col-span-7">
            {registrationSuccess ? (
              /* Physical Festival Credential Badge Specimen */
              <div className="border-[3px] border-charcoal bg-white p-6 sm:p-8 relative shadow-hard-xl">
                {/* Lanyard Punch Simulation */}
                <div className="w-16 h-3 bg-cream border-2 border-charcoal rounded-full mx-auto mb-6" />

                <div className="flex items-center justify-between border-b-2 border-charcoal pb-4 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-black text-coral">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    <span>REGISTRATION CONFIRMED [PASS ACTIVE]</span>
                  </div>
                  <span className="font-mono text-xs font-bold bg-mustard px-2 py-0.5 border border-charcoal">
                    ITER // SOA CHAPTER
                  </span>
                </div>

                <div className="p-6 bg-cream border-2 border-charcoal shadow-[4px_4px_0_#17140D] space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-charcoal pb-3">
                    <span className="font-mono text-[10px] font-bold text-charcoal/70 uppercase">PASS IDENTIFIER</span>
                    <span className="font-mono text-lg font-black text-charcoal bg-white px-2 py-0.5 border border-charcoal">
                      {registrationSuccess.passId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-charcoal/60 block uppercase">ATTENDEE NAME</span>
                      <span className="font-black text-charcoal text-base">{registrationSuccess.participantName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-charcoal/60 block uppercase">ACADEMIC EMAIL</span>
                      <span className="text-charcoal font-bold truncate block">{registrationSuccess.email}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-charcoal/60 block uppercase">COLLEGE / INSTITUTION</span>
                      <span className="text-charcoal font-bold">{registrationSuccess.college}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-charcoal/60 block uppercase">REGISTERED TRACK</span>
                      <span className="font-black text-coral">{registrationSuccess.eventTitle}</span>
                    </div>
                    {registrationSuccess.teamName && (
                      <div className="sm:col-span-2">
                        <span className="text-[10px] font-bold text-charcoal/60 block uppercase">TEAM DESIGNATION</span>
                        <span className="text-charcoal font-bold">{registrationSuccess.teamName}</span>
                      </div>
                    )}
                  </div>

                  {/* Perforated Divider */}
                  <div className="border-t-2 border-dashed border-charcoal pt-4 mt-4 flex items-center justify-between font-mono text-[10px] font-bold text-charcoal">
                    <span>SECURITY: OK</span>
                    <span>VENUE: MAIN COMPLEX</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                  <p className="font-mono text-xs font-bold text-charcoal">
                    ★ DATA SAVED IN LOCAL STORAGE
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-memphis-secondary px-4 py-2 text-xs font-mono font-bold flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>CREATE NEW REGISTRATION</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Memphis High-Craft Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border-[3px] border-charcoal bg-white p-6 sm:p-8 space-y-6 shadow-hard-lg"
              >
                {/* Fieldset 01: Identity */}
                <div className="space-y-4">
                  <div className="font-mono text-xs font-black text-charcoal bg-mustard px-2.5 py-1 border-2 border-charcoal inline-block shadow-[2px_2px_0_#17140D]">
                    [ 01 // PERSONAL IDENTITY ]
                  </div>

                  <div>
                    <label htmlFor="reg-name" className="block font-mono text-xs text-charcoal font-black mb-1">
                      FULL NAME <span className="text-coral">*</span>
                    </label>
                    <input
                      id="reg-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sterling"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={`w-full px-4 py-2.5 text-sm bg-cream border-[2.5px] border-charcoal font-sans font-bold text-charcoal placeholder:text-charcoal/40 shadow-[3px_3px_0_#17140D] focus:outline-none focus:bg-white focus:ring-2 focus:ring-mustard transition-colors ${
                        errors.name ? 'border-coral ring-2 ring-coral' : ''
                      }`}
                    />
                    {errors.name && (
                      <p id="err-name" className="mt-1 font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 border border-coral inline-block">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block font-mono text-xs text-charcoal font-black mb-1">
                      UNIVERSITY EMAIL <span className="text-coral">*</span>
                    </label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@university.edu"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`w-full px-4 py-2.5 text-sm bg-cream border-[2.5px] border-charcoal font-sans font-bold text-charcoal placeholder:text-charcoal/40 shadow-[3px_3px_0_#17140D] focus:outline-none focus:bg-white focus:ring-2 focus:ring-mustard transition-colors ${
                        errors.email ? 'border-coral ring-2 ring-coral' : ''
                      }`}
                    />
                    {errors.email && (
                      <p id="err-email" className="mt-1 font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 border border-coral inline-block">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Fieldset 02: Academic Affiliation */}
                <div className="space-y-4">
                  <div className="font-mono text-xs font-black text-charcoal bg-teal text-white px-2.5 py-1 border-2 border-charcoal inline-block shadow-[2px_2px_0_#17140D]">
                    [ 02 // ACADEMIC AFFILIATION ]
                  </div>

                  <div>
                    <label htmlFor="reg-college" className="block font-mono text-xs text-charcoal font-black mb-1">
                      COLLEGE / INSTITUTION <span className="text-coral">*</span>
                    </label>
                    <input
                      id="reg-college"
                      name="college"
                      type="text"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Institute of Technical Education & Research"
                      aria-invalid={!!errors.college}
                      aria-describedby={errors.college ? 'err-college' : undefined}
                      className={`w-full px-4 py-2.5 text-sm bg-cream border-[2.5px] border-charcoal font-sans font-bold text-charcoal placeholder:text-charcoal/40 shadow-[3px_3px_0_#17140D] focus:outline-none focus:bg-white focus:ring-2 focus:ring-mustard transition-colors ${
                        errors.college ? 'border-coral ring-2 ring-coral' : ''
                      }`}
                    />
                    {errors.college && (
                      <p id="err-college" className="mt-1 font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 border border-coral inline-block">
                        {errors.college}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="reg-portfolio" className="block font-mono text-xs text-charcoal font-black mb-1">
                      GITHUB OR PORTFOLIO LINK (OPTIONAL)
                    </label>
                    <input
                      id="reg-portfolio"
                      name="githubOrPortfolio"
                      type="url"
                      value={formData.githubOrPortfolio}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-2.5 text-sm bg-cream border-[2.5px] border-charcoal font-sans font-bold text-charcoal placeholder:text-charcoal/40 shadow-[3px_3px_0_#17140D] focus:outline-none focus:bg-white focus:ring-2 focus:ring-mustard"
                    />
                  </div>
                </div>

                {/* Fieldset 03: Event Track & Format */}
                <div className="space-y-4">
                  <div className="font-mono text-xs font-black text-charcoal bg-coral text-white px-2.5 py-1 border-2 border-charcoal inline-block shadow-[2px_2px_0_#17140D]">
                    [ 03 // COMPETITION &amp; TRACK SELECTION ]
                  </div>

                  <div>
                    <label htmlFor="reg-event" className="block font-mono text-xs text-charcoal font-black mb-1">
                      PRIMARY COMPETITION OR WORKSHOP <span className="text-coral">*</span>
                    </label>
                    <select
                      id="reg-event"
                      name="eventTitle"
                      value={formData.eventTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm bg-cream border-[2.5px] border-charcoal text-charcoal font-bold shadow-[3px_3px_0_#17140D] focus:outline-none focus:ring-2 focus:ring-mustard"
                    >
                      {EVENTS.map((event) => (
                        <option key={event.id} value={event.title}>
                          [{event.category.toUpperCase()}] {event.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block font-mono text-xs text-charcoal font-black mb-2">
                      PARTICIPATION FORMAT <span className="text-coral">*</span>
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`flex items-center gap-2.5 p-3.5 border-[2.5px] border-charcoal cursor-pointer font-mono text-xs font-bold transition-all ${
                          formData.participationType === 'Solo'
                            ? 'bg-mustard text-charcoal shadow-[4px_4px_0_#17140D] -translate-y-0.5'
                            : 'bg-white text-charcoal shadow-[2px_2px_0_#17140D]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="participationType"
                          value="Solo"
                          checked={formData.participationType === 'Solo'}
                          onChange={handleChange}
                          className="accent-charcoal w-4 h-4"
                        />
                        <span>SOLO PARTICIPANT</span>
                      </label>

                      <label
                        className={`flex items-center gap-2.5 p-3.5 border-[2.5px] border-charcoal cursor-pointer font-mono text-xs font-bold transition-all ${
                          formData.participationType === 'Team'
                            ? 'bg-mustard text-charcoal shadow-[4px_4px_0_#17140D] -translate-y-0.5'
                            : 'bg-white text-charcoal shadow-[2px_2px_0_#17140D]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="participationType"
                          value="Team"
                          checked={formData.participationType === 'Team'}
                          onChange={handleChange}
                          className="accent-charcoal w-4 h-4"
                        />
                        <span>TEAM (2–4 MEMBERS)</span>
                      </label>
                    </div>
                  </div>

                  {formData.participationType === 'Team' && (
                    <div className="p-4 bg-cream border-2 border-charcoal space-y-4 shadow-[3px_3px_0_#17140D]">
                      <div>
                        <label htmlFor="reg-team-name" className="block font-mono text-xs text-charcoal font-bold mb-1">
                          TEAM NAME <span className="text-coral">*</span>
                        </label>
                        <input
                          id="reg-team-name"
                          name="teamName"
                          type="text"
                          value={formData.teamName}
                          onChange={handleChange}
                          placeholder="e.g. Distributed Core Architects"
                          className="w-full px-3 py-2 text-sm bg-white border-2 border-charcoal text-charcoal font-bold focus:outline-none"
                        />
                        {errors.teamName && (
                          <p className="mt-1 font-mono text-xs font-bold text-coral">
                            {errors.teamName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="reg-teammates" className="block font-mono text-xs text-charcoal font-bold mb-1">
                          TEAMMATE NAMES &amp; EMAILS (OPTIONAL AT INITIATION)
                        </label>
                        <textarea
                          id="reg-teammates"
                          name="teammates"
                          rows="2"
                          value={formData.teammates}
                          onChange={handleChange}
                          placeholder="Teammate 2: Name & Email, Teammate 3: Name & Email..."
                          className="w-full px-3 py-2 text-xs bg-white border-2 border-charcoal text-charcoal font-medium focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Conduct Agreement */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToConduct"
                      checked={formData.agreedToConduct}
                      onChange={handleChange}
                      className="mt-1 accent-coral w-4 h-4"
                    />
                    <span className="text-xs text-charcoal/85 leading-relaxed font-sans font-medium">
                      I agree to the festival code of conduct, commit to respectful peer collaboration, and acknowledge that all competition submissions must be open-sourced and original.
                    </span>
                  </label>
                  {errors.agreedToConduct && (
                    <p className="mt-1 font-mono text-xs font-bold text-coral pl-7">
                      {errors.agreedToConduct}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t-2 border-charcoal">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-memphis-primary w-full py-4 px-6 text-sm font-mono font-black uppercase flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>VALIDATING SUBMISSION...</span>
                    ) : (
                      <>
                        <span>SUBMIT FESTIVAL REGISTRATION</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
