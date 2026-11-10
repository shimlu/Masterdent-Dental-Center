import React, { useState } from 'react';
import { MapPin, Smartphone, Clock, ExternalLink, Star, Navigation, Compass, Map as MapIcon, Car, ShieldCheck } from 'lucide-react';

export default function OfficeLocationPanel() {
  const [mapMode, setMapMode] = useState('google'); // 'google' | 'landmark'

  const officeHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM" }
  ];

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=13.6213128,123.1949730";
  const googleDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=13.6213128,123.1949730";

  return (
    <div className="w-full bg-[#0a0c10] text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl my-10">
      <div className="grid lg:grid-cols-12 min-h-[540px]">

        {/* Left Column: Masterdent Office Details */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-gradient-to-b from-[#10141d] to-[#0a0c10] border-b lg:border-b-0 lg:border-r border-slate-800/80">
          <div className="space-y-8">

            {/* Title / Heading with Gold Accent Bar */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                CBD II • Brgy. Triangulo
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white lowercase leading-none font-sans">
                our naga city<br />
                <span className="text-brand-gold">office</span>
              </h2>
              <div className="w-16 h-1 bg-brand-gold rounded-full mt-4"></div>
            </div>

            {/* Info Items List */}
            <div className="space-y-6 text-sm">

              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="text-brand-gold mt-1">
                  <Compass className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-base font-bold leading-snug">
                    Cluster A, The CBD 2 Health & Wellness Strip
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Joker Arroyo St. (Crescenciana Anciano St.), CBD II,<br />
                    Brgy. Triangulo, Naga City, Camarines Sur 4400
                  </p>
                  <p className="text-xs text-amber-300/90 font-medium pt-0.5">
                    Landmark: Directly in front of BCDC • Near SM City Naga
                  </p>
                  <a
                    href={googleDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-gold hover:text-amber-300 font-semibold underline underline-offset-4 pt-1 transition-colors"
                  >
                    Get Directions
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone / Text Item */}
              <div className="flex items-start gap-4">
                <div className="text-brand-gold mt-1">
                  <Smartphone className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+639171630134"
                    className="text-white hover:text-brand-gold font-bold text-base underline underline-offset-4 transition-colors block"
                  >
                    Call / Text (+63) 917 163 0134
                  </a>
                  <p className="text-xs text-slate-400">
                    Direct line for appointments, dental pain & walk-in inquiries
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="text-brand-gold mt-1">
                  <Clock className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="w-full space-y-1.5 pt-0.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinic Schedule</span>
                    <span className="text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Open 7 Days
                    </span>
                  </div>
                  {officeHours.map((slot, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800/60 pb-1 last:border-0">
                      <span className="font-medium text-slate-400">{slot.day}:</span>
                      <span className="text-slate-100 font-semibold">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Amenities Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-[11px] bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg">
              <Car className="w-3.5 h-3.5 text-brand-gold" />
              CBD II Strip Parking
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              Plus Code: J5CV+3P
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Google Map with Place Card & Landmark Guide Toggle */}
        <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-full bg-slate-900 overflow-hidden flex flex-col">

          {/* Map View Switcher (Top Right) */}
          <div className="absolute top-4 right-4 z-20 flex bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg">
            <button
              type="button"
              onClick={() => setMapMode('google')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 ${mapMode === 'google' ? 'bg-brand-gold text-brand-dark' : 'text-slate-300 hover:text-white'}`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Live Map
            </button>
            <button
              type="button"
              onClick={() => setMapMode('landmark')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 ${mapMode === 'landmark' ? 'bg-brand-gold text-brand-dark' : 'text-slate-300 hover:text-white'}`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              Landmark Guide
            </button>
          </div>

          {/* Floating Google Maps Place Card Overlay */}
          {mapMode === 'google' && (
            <div className="absolute top-4 left-4 z-20 bg-white text-slate-900 rounded-xl p-3.5 sm:p-4 shadow-2xl border border-slate-200 max-w-[260px] sm:max-w-[305px] animate-fade-in">
              <div className="space-y-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
                    Masterdent Dental Center
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    CBD 2 Health & Wellness Strip, Joker Arroyo St., Brgy. Triangulo, Naga City, 4400
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs">
                  <span className="font-bold text-slate-800">4.7</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium text-xs ml-1"
                  >
                    Naga City
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="pt-1.5 flex items-center gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-dark hover:bg-slate-800 text-brand-gold text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Maps
                  </a>
                  <a
                    href={googleDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-accent transition-colors shadow-sm border border-amber-200"
                    title="Get Directions"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Map Content Area */}
          {mapMode === 'google' ? (
            <iframe
              title="Masterdent Dental Center Naga City Map"
              src="https://maps.google.com/maps?q=13.6213128,123.1949730+(Masterdent+Dental+Center)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full min-h-[460px] lg:min-h-full border-0 filter contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full min-h-[460px] bg-slate-100 flex flex-col items-center justify-center p-4 sm:p-8 pt-16">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-white max-w-2xl w-full">
                <img
                  src="/masterdent-landmark-map.jpg"
                  alt="Masterdent Dental Center Landmark Guide near SM City Naga and BCDC"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-600 font-semibold mt-3 text-center">
                Located along Joker Arroyo St. (former C. Anciano St.), directly in front of BCDC & near SM City Naga.
              </p>
            </div>
          )}

          {/* Bottom Map Bar */}
          <div className="bg-slate-950/95 border-t border-slate-800 px-4 py-2.5 text-xs text-slate-400 flex flex-wrap justify-between items-center gap-2 z-10">
            <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              In front of BCDC • Near SM City Naga & Plaza Medica
            </span>
            <a
              href={googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-amber-300 font-semibold text-[11px] inline-flex items-center gap-1"
            >
              Start GPS Navigation &rarr;
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
