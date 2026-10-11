import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PlusSign, Asterisk } from './MemphisDecorations';

export default function Navbar({ onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'events', 'schedule', 'speakers', 'register', 'faq'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Schedule', href: '#schedule', id: 'schedule' },
    { name: 'Speakers', href: '#speakers', id: 'speakers' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 border-b-[3px] border-charcoal ${
        isScrolled
          ? 'bg-cream py-2.5 shadow-[0_4px_0_#17140D]'
          : 'bg-cream py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Chapter Identity (Memphis Postmodern badge) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-mustard border-[3px] border-charcoal flex items-center justify-center font-heading font-black text-lg shadow-[3px_3px_0_#17140D] group-hover:rotate-6 transition-transform">
                <span className="text-charcoal leading-none">G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-coral rounded-full border-2 border-charcoal" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight leading-none text-charcoal">
                GDG FEST <span className="text-coral">’26</span>
              </span>
              <span className="font-mono text-[10px] font-bold text-charcoal tracking-wider uppercase mt-0.5">
                CAMPUS CHAPTER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-bold tracking-tight transition-all relative border-2 ${
                    isActive
                      ? 'bg-mustard text-charcoal border-charcoal shadow-[3px_3px_0_#17140D] -rotate-1'
                      : 'bg-transparent text-charcoal border-transparent hover:border-charcoal hover:bg-cream-alt'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Registration Action */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold text-charcoal bg-teal/20 px-2 py-1 border-2 border-charcoal hidden xl:inline-block">
              ★ NOV 14–16, 2026
            </span>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('register');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-memphis-primary group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold tracking-wide uppercase"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('register');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-memphis-primary px-3 py-1.5 text-[11px] font-mono font-bold uppercase"
            >
              REGISTER
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-1.5 bg-mustard border-[3px] border-charcoal shadow-[3px_3px_0_#17140D] active:translate-x-0.5 active:translate-y-0.5"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-charcoal" /> : <Menu className="w-5 h-5 text-charcoal" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t-[3px] border-charcoal bg-cream px-6 py-6 transition-all shadow-[0_6px_0_#17140D]">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-heading font-extrabold text-charcoal p-2 border-2 border-charcoal bg-white shadow-[3px_3px_0_#17140D] flex justify-between items-center hover:bg-mustard transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs">→</span>
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="text-base font-heading font-extrabold text-charcoal p-2.5 border-2 border-charcoal bg-coral text-white shadow-[4px_4px_0_#17140D] flex justify-between items-center"
            >
              <span>REGISTER FOR FESTIVAL</span>
              <span className="font-mono text-xs">★</span>
            </a>
            <div className="pt-2">
              <div className="font-mono text-xs font-bold text-charcoal text-center p-2 bg-teal/20 border-2 border-dashed border-charcoal">
                NOV 14–16, 2026 • UNIVERSITY CAMPUS
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
