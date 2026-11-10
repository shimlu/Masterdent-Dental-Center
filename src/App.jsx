import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './components/SocialIcons';
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

  const BrandLogo = ({ size = "w-11 h-11" }) => (
    <div className={`${size} rounded-xl bg-brand-dark border border-amber-500/30 p-1 flex items-center justify-center overflow-hidden shadow-sm shrink-0`}>
      <img
        src="/masterdent-logo.png"
        alt="Masterdent Dental Center Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark">

      {/* Top Banner (Desktop Only) */}
      <div className="hidden lg:block bg-brand-dark text-slate-300 py-2.5 border-b border-slate-800 text-xs font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              CBD 2 Health & Wellness Strip, Joker Arroyo St., Brgy. Triangulo, Naga City
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              Open Daily (Mon - Sun): 8:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/MasterdentDentalCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
              Facebook
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.instagram.com/masterdentdentalcenter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              @masterdentdentalcenter
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open 7 Days a Week
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
              <BrandLogo size="w-11 h-11" />
              <div>
                <span className="text-lg font-black tracking-wide block text-brand-dark leading-none group-hover:text-brand-accent transition-colors">
                  Masterdent
                </span>
                <span className="text-[10px] font-bold text-brand-slate tracking-[0.22em] uppercase block mt-1">
                  Dental Center
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
                Services & Specialties
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
                href="tel:+639171630134"
                className="flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-brand-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span>0917 163 0134</span>
              </a>
              <button
                onClick={() => setPage('contact')}
                className="bg-brand-dark hover:bg-slate-800 text-brand-gold border border-brand-gold/40 text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Hamburger Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:+639171630134"
                className="bg-brand-accent text-white p-3 rounded-xl shadow-md flex items-center justify-center"
                aria-label="Call Masterdent Dental Center directly"
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
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'home' ? 'bg-amber-50 text-brand-dark border border-amber-200' : 'text-brand-slate'}`}
              >
                Home
              </button>
              <button
                onClick={() => setPage('services')}
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'services' ? 'bg-amber-50 text-brand-dark border border-amber-200' : 'text-brand-slate'}`}
              >
                Services & Specialties
              </button>
              <button
                onClick={() => setPage('contact')}
                className={`text-left font-bold py-3 px-4 rounded-xl text-base ${page === 'contact' ? 'bg-amber-50 text-brand-dark border border-amber-200' : 'text-brand-slate'}`}
              >
                Contact & Location
              </button>
            </nav>
            <div className="border-t border-brand-silver pt-4 flex flex-col gap-3">
              <a
                href="tel:+639171630134"
                className="flex items-center justify-center gap-2 bg-brand-dark hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                Call / Text: 0917 163 0134
              </a>
              <button
                onClick={() => setPage('contact')}
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold py-3.5 rounded-xl text-sm shadow-md"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Call Button Banner for Mobile Screens (CRO Focus) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href="tel:+639171630134"
          className="flex items-center justify-center gap-3 bg-brand-dark hover:bg-slate-900 text-brand-gold font-bold py-4 rounded-2xl shadow-xl shadow-black/30 border border-brand-gold/50 animate-pulse-subtle"
        >
          <Phone className="w-5 h-5 animate-pulse text-brand-gold" />
          Call / Text Clinic: 0917 163 0134
        </a>
      </div>

      {/* Page Routing Outlet */}
      <main className="flex-grow pb-16 md:pb-0">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'services' && <Services setPage={setPage} />}
        {page === 'contact' && <Contact />}
      </main>

      {/* Shared Global Footer */}
      <footer className="brand-gradient-slate text-slate-300 border-t border-slate-800 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Logo/Identity Col (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 text-white">
                <BrandLogo size="w-12 h-12" />
                <div>
                  <span className="text-xl font-black tracking-wide block leading-none">
                    Masterdent
                  </span>
                  <span className="text-[10px] font-bold text-brand-gold tracking-[0.22em] uppercase block mt-1">
                    Dental Center
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                <strong className="text-slate-200">Quality Dental Care For Every Smile.</strong> Serving Naga City & Camarines Sur with comprehensive general, cosmetic, pediatric, orthodontic, prosthodontic, endodontic, and oral surgery care—open 7 days a week.
              </p>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-amber-500/20 p-3 rounded-xl text-[11px] text-slate-300 max-w-xs">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Gentle Care • Honest Consults • Attentive Aftercare</span>
              </div>
            </div>

            {/* Quick Links Col (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button onClick={() => setPage('home')} className="hover:text-brand-gold transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('services')} className="hover:text-brand-gold transition-colors">
                    Dental Specialties
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('contact')} className="hover:text-brand-gold transition-colors">
                    Book Appointment
                  </button>
                </li>
                <li>
                  <a
                    href="https://mydmdapp.com/c/masterdent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                  >
                    MyDMD Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Clinic Details / Local SEO NAP Col (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Naga City Clinic</h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    Cluster A, The CBD 2 Health and Wellness Strip, Joker Arroyo St. (Crescenciana Anciano St.), CBD II, Brgy. Triangulo, Naga City, 4400
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <a href="tel:+639171630134" className="hover:text-brand-gold font-bold text-slate-200">
                    +63 917 163 0134
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-1">
                  <a
                    href="https://www.facebook.com/MasterdentDentalCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-brand-gold/50 px-3 py-1.5 rounded-lg text-slate-300 hover:text-brand-gold transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/masterdentdentalcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-brand-gold/50 px-3 py-1.5 rounded-lg text-slate-300 hover:text-brand-gold transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Hours Col (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Clinic Hours</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-slate-200">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-slate-200">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-brand-gold">8:00 AM - 6:00 PM</span>
                </li>
                <li className="border-t border-slate-800/80 pt-3 mt-3">
                  <span className="text-[10px] font-bold text-brand-gold block uppercase tracking-wider">
                    Accepted Payments
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Cash, GCash, QR Ph, BDO, Visa, Mastercard & JCB accepted.
                  </p>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Ribbon */}
          <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Masterdent Dental Center — Naga City, Camarines Sur. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-300 cursor-pointer">Quality Dental Care For Every Smile</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
