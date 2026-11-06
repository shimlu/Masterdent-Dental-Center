import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [page]);

  // Premium SVG Wing Crest Logo (replicated from Yeshu Meridian branding)
  const Logo = ({ className = "w-8 h-8" }) => (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Left Wing */}
      <path d="M 192 245 L 65 50 L 138 50 L 192 165 Z" />
      {/* Right Wing */}
      <path d="M 208 245 L 335 50 L 262 50 L 208 165 Z" />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark">

      {/* Top Banner (Desktop Only) */}
      <div className="hidden lg:block bg-brand-dark text-slate-300 py-2.5 border-b border-slate-800 text-xs font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              45 Pearl Street, Meridian City
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:shimrilu@gmail.com" className="hover:text-white transition-colors">
              shimrilu@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Dental Emergency Priority
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-silver/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo Brand Group */}
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-3 focus-visible:ring-brand-accent text-left group"
            >
              <div className="text-brand-dark group-hover:text-brand-accent transition-colors">
                <Logo className="w-9 h-9" />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider uppercase block text-brand-dark leading-none">
                  Yeshu Dental
                </span>
                <span className="text-[9px] font-bold text-brand-slate tracking-widest uppercase block mt-1">
                  Meridian Smile Care
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-slate">
              <button
                onClick={() => setPage('home')}
                className={`py-2 border-b-2 hover:text-brand-dark transition-all ${page === 'home' ? 'border-brand-accent text-brand-dark' : 'border-transparent'}`}
              >
                Home
              </button>
              <button
                onClick={() => setPage('services')}
                className={`py-2 border-b-2 hover:text-brand-dark transition-all ${page === 'services' ? 'border-brand-accent text-brand-dark' : 'border-transparent'}`}
              >
                Services & Pricing
              </button>
              <button
                onClick={() => setPage('contact')}
                className={`py-2 border-b-2 hover:text-brand-dark transition-all ${page === 'contact' ? 'border-brand-accent text-brand-dark' : 'border-transparent'}`}
              >
                Contact & Location
              </button>
            </nav>

            {/* Desktop Navigation Action CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+639171234567"
                className="flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+63 917 123 4567</span>
              </a>
              <button
                onClick={() => setPage('contact')}
                className="bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Hamburguer Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              <a 
                href="tel:+639171234567"
                className="bg-brand-accent text-white p-3 rounded-xl shadow-md flex items-center justify-center"
                aria-label="Call clinic directly"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-dark hover:text-brand-accent"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-silver bg-white px-4 py-6 space-y-4 shadow-xl animate-fade-in">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => setPage('home')}
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'home' ? 'bg-brand-light text-brand-dark' : 'text-brand-slate'}`}
              >
                Home
              </button>
              <button
                onClick={() => setPage('services')}
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'services' ? 'bg-brand-light text-brand-dark' : 'text-brand-slate'}`}
              >
                Services & Pricing
              </button>
              <button
                onClick={() => setPage('contact')}
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'contact' ? 'bg-brand-light text-brand-dark' : 'text-brand-slate'}`}
              >
                Contact & Location
              </button>
            </nav>
            <div className="border-t border-brand-silver pt-4 flex flex-col gap-3">
              <a 
                href="tel:+639171234567"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                Call: +63 917 123 4567
              </a>
              <button
                onClick={() => setPage('contact')}
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold py-3.5 rounded-xl text-sm shadow-md"
              >
                Book Online Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Call Button Banner for Mobile Screens (CRO Focus) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a 
          href="tel:+639171234567"
          className="flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-rose-950/20 border border-rose-500 animate-pulse-subtle"
        >
          <Phone className="w-5 h-5 animate-pulse text-white fill-white" />
          Call Dentist Now: +63 917 123 4567
        </a>
      </div>

      {/* Page Routing Outlet */}
      <main className="flex-grow pb-16 md:pb-0">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'services' && <Services setPage={setPage} />}
        {page === 'contact' && <Contact />}
      </main>

      {/* Shared Global Footer */}
      <footer className="brand-gradient-slate text-slate-350 border-t border-slate-800 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Logo/Identity Col (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 text-white">
                <Logo className="w-10 h-10 text-brand-accent" />
                <div>
                  <span className="text-xl font-black tracking-wider uppercase block leading-none">
                    Yeshu Dental
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mt-1">
                    Meridian Smile Care
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Providing standard-setting dental clinical care, cosmetic makeovers, and same-day dental emergency services in Meridian City. Your dental health and absolute comfort are our primary concerns.
              </p>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/60 p-3 rounded-xl text-[11px] text-slate-300 max-w-xs">
                <Heart className="w-4 h-4 text-brand-accent fill-brand-accent shrink-0" />
                <span>Dr. Shimri Gabriel Luansing, Lead Clinician</span>
              </div>
            </div>

            {/* Quick Links Col (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button onClick={() => setPage('home')} className="hover:text-white transition-colors">
                    Home Landing
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('services')} className="hover:text-white transition-colors">
                    Clinical Services
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('contact')} className="hover:text-white transition-colors">
                    Request Appointment
                  </button>
                </li>
                <li>
                  <a
                    href="https://facebook.com/ShimriLuansing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Follow on Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Clinic Details / Local SEO NAP Col (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Yeshu Dental Office</h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    Meridian Dental Center, 45 Pearl Street,<br />
                    Meridian City, Metro Manila, 1600
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="tel:+639171234567" className="hover:text-white font-bold">
                    +63 917 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="mailto:shimrilu@gmail.com" className="hover:text-white break-all">
                    shimrilu@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Hours Col (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Office Hours</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-slate-200">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-slate-200">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </li>
                <li className="border-t border-slate-800/80 pt-3 mt-3">
                  <span className="text-[10px] font-bold text-rose-400 block uppercase tracking-wider">
                    Emergency Treatment Hours
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Emergency dental lines are answered 24/7. Call us for instructions if you have severe dental pain.
                  </p>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Ribbon */}
          <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Yeshu Dental. All rights reserved. Registered Dental Practitioner.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">HIPAA Statement</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
