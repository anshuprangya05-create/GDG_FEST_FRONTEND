import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import EventModal from './components/EventModal';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Countdown from './components/Countdown';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [preselectedEvent, setPreselectedEvent] = useState('');

  const handleSelectEvent = (event) => {
    setSelectedEventModal(event);
  };

  const handleCloseModal = () => {
    setSelectedEventModal(null);
  };

  const handleSelectForRegistration = (eventTitle) => {
    setPreselectedEvent(eventTitle);
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans selection:bg-coral selection:text-cream">
      {/* Sticky Top Navigation */}
      <Navbar onOpenRegister={handleRegisterClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={handleExploreClick}
          onRegisterClick={handleRegisterClick}
        />
        <About />
        <Events
          onSelectEvent={handleSelectEvent}
          onSelectForRegistration={handleSelectForRegistration}
        />
        <Schedule />
        <Speakers />
        <Countdown />
        <Registration preselectedEvent={preselectedEvent} />
        <FAQ />
      </main>

      {/* Typographic Footer */}
      <Footer />

      {/* Event Details Modal */}
      {selectedEventModal && (
        <EventModal
          event={selectedEventModal}
          onClose={handleCloseModal}
          onSelectForRegistration={handleSelectForRegistration}
        />
      )}
    </div>
  );
}
