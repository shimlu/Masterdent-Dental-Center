import React from 'react';
import { MapPin, Smartphone, Clock, ExternalLink, Star, Navigation, Compass, Info } from 'lucide-react';

export default function OfficeLocationPanel() {
  // Sample schedule view
  const officeHours = [
    { day: "Monday", hours: "7:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "7:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "7:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "7:00 AM - 5:00 PM" },
    { day: "Friday", hours: "7:00 AM - 3:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 1:00 PM (By Appt)" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="w-full bg-[#0a0f18] text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl my-10">
      <div className="grid lg:grid-cols-12 min-h-[520px]">
        
        {/* Left Column: Office Details Panel */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#0b101b] border-b lg:border-b-0 lg:border-r border-slate-800/80">
          <div className="space-y-8">
            
            {/* Title / Heading with Accent Bar */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none font-sans">
                our meridian<br />
                <span className="text-cyan-400">office</span>
              </h2>
              <div className="w-14 h-1 bg-cyan-400 rounded-full mt-4"></div>
            </div>

            {/* Info Items List */}
            <div className="space-y-6 text-sm">
              
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="text-cyan-400 mt-1">
                  <Compass className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <p className="text-slate-200 text-base font-medium leading-snug">
                    8650 Meridian Valley Way, Suite 100
                  </p>
                  <p className="text-slate-400">
                    Meridian City, MC 64157
                  </p>
                  <a
                    href="https://maps.google.com/?q=Meridian+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 pt-1 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone / Text Item */}
              <div className="flex items-start gap-4">
                <div className="text-cyan-400 mt-1">
                  <Smartphone className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+18164295799"
                    className="text-white hover:text-cyan-300 font-semibold text-base underline underline-offset-4 transition-colors block"
                  >
                    Call / Text (816) 429-5799
                  </a>
                  <p className="text-xs text-slate-400">
                    Direct line for appointments & urgent inquiries
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="text-cyan-400 mt-1">
                  <Clock className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="w-full space-y-1.5 pt-0.5">
                  {officeHours.map((slot, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs sm:text-sm text-slate-300">
                      <span className="font-medium text-slate-400">{slot.day}:</span>
                      <span className={slot.day === "Sunday" ? "text-slate-500 font-normal" : "text-slate-200 font-medium"}>
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sample note / disclaimer badge */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-[11px] bg-slate-900 border border-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg">
              <Info className="w-3.5 h-3.5" />
              Sample Interactive Location View
            </span>
            <span className="text-slate-500 text-[11px]">Free Patient Parking</span>
          </div>
        </div>

        {/* Right Column: Google Map Embed with Sample Pin & Info Card Overlay */}
        <div className="lg:col-span-7 relative min-h-[440px] lg:min-h-full bg-slate-900 overflow-hidden flex flex-col">
          
          {/* Floating Google Maps Place Card Overlay (replicated from example) */}
          <div className="absolute top-4 left-4 z-20 bg-white text-slate-900 rounded-xl p-3.5 sm:p-4 shadow-2xl border border-slate-200 max-w-[270px] sm:max-w-[310px] animate-fade-in">
            <div className="space-y-2">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  Yeshu Family Dental - Meridian
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                  8650 Meridian Valley Way, Meridian City, MC 64157, USA
                </p>
              </div>

              {/* Google Reviews Line */}
              <div className="flex items-center gap-1 text-xs">
                <span className="font-bold text-slate-800">5.0</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <a
                  href="https://maps.google.com/?q=Meridian+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-xs"
                >
                  (691)
                </a>
                <span className="text-slate-400 text-[10px] ml-0.5 cursor-pointer" title="Google Review details">ⓘ</span>
              </div>

              {/* Action Buttons: Open in Maps & Directions */}
              <div className="pt-1.5 flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=Meridian+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in Maps
                </a>
                <a
                  href="https://maps.google.com/maps/dir/?api=1&destination=Meridian+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors shadow-sm"
                  title="Directions"
                >
                  <Navigation className="w-4 h-4 fill-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Realistic Red Google Maps Pin Indicator centered in map */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 pointer-events-none drop-shadow-lg flex flex-col items-center animate-bounce-subtle">
            <div className="bg-white/95 text-slate-900 border border-slate-300 font-bold text-[11px] px-2 py-0.5 rounded-md shadow-md whitespace-nowrap mb-1">
              Yeshu Dental - Meridian
            </div>
            <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center border-2 border-white shadow-xl">
              <MapPin className="w-5 h-5 fill-white text-rose-600" />
            </div>
            <div className="w-2 h-2 bg-rose-600 rotate-45 -mt-1 shadow-sm"></div>
            <div className="w-4 h-1.5 bg-black/30 rounded-full blur-[1px] mt-0.5"></div>
          </div>

          {/* Interactive Google Map Embed (Sample scenic location map) */}
          <iframe
            title="Office Location Map Preview"
            src="https://maps.google.com/maps?q=Kansas+City+MO+USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[460px] lg:min-h-full border-0 filter contrast-[1.01]"
            loading="lazy"
            allowFullScreen
          ></iframe>

          {/* Bottom Map Bar */}
          <div className="bg-slate-950/95 border-t border-slate-800 px-4 py-2 text-xs text-slate-400 flex justify-between items-center z-10">
            <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Pin: 8650 Meridian Valley Way
            </span>
            <a
              href="https://maps.google.com/maps/dir/?api=1&destination=Meridian+City"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold text-[11px] inline-flex items-center gap-1"
            >
              Get Directions &rarr;
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
