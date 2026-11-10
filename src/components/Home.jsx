import React from 'react';
import { Star, ShieldCheck, Activity, Award, ArrowRight, Phone, Calendar, Heart, Shield, CheckCircle, Sparkles } from 'lucide-react';
import OfficeLocationPanel from './OfficeLocationPanel';

export default function Home({ setPage }) {
  // Accepted payment partners (verified from Masterdent channels)
  const paymentMethods = [
    'Cash', 'GCash', 'QR Ph', 'BDO', 'Visa', 'Mastercard', 'JCB'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlo M.",
      role: "Tooth Extraction Patient • Naga City",
      rating: 5,
      comment: "Super accommodating staff and very honest consultation. What impressed me most was their aftercare—they actually followed up after my tooth extraction to check on my recovery!",
      date: "Verified Patient"
    },
    {
      id: 2,
      name: "Bea R.",
      role: "Cosmetic & Crown Patient • Camarines Sur",
      rating: 5,
      comment: "The clinic inside CBD 2 is spotless, modern, and welcoming. Their crown workmanship looks super natural, and Doc Len explained every single step clearly before starting.",
      date: "Verified Patient"
    },
    {
      id: 3,
      name: "Jeric T.",
      role: "Weekend Appointment • Brgy. Triangulo",
      rating: 5,
      comment: "Being open on Sundays from 8 AM to 6 PM is a huge lifesaver for working professionals. Fast service, gentle cleaning, and super convenient GCash & card payments.",
      date: "Verified Patient"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-brand-dark">
        {/* Background Image with Obsidian Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_dentist.png"
            alt="Masterdent Dental Center Clinic in Naga City"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/95 via-[#0a0c10]/85 to-[#0a0c10]/40 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 w-full">
          <div className="max-w-2xl">
            {/* Clinic Hours & Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-brand-gold/40 text-brand-gold px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              Open Daily (Mon–Sun, 8 AM – 6 PM) • Naga City
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Quality Dental Care For Every Smile in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-gold to-amber-500">Naga City</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-light leading-relaxed">
              Visit <strong className="text-white font-semibold">Masterdent Dental Center</strong> at The CBD 2 Health & Wellness Strip (in front of BCDC). Led by Doc Len and our caring clinical team, we deliver honest consultations, gentle treatments, and attentive aftercare.
            </p>

            {/* High-Converting Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setPage('contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-400 text-brand-dark text-base font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Online
              </button>
              <a
                href="tel:+639171630134"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/85 hover:bg-slate-800 text-white text-base font-semibold px-8 py-4 rounded-xl border border-slate-700 hover:border-brand-gold/60 backdrop-blur-md transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                Call / Text: 0917 163 0134
              </a>
            </div>

            {/* Hero Trust Badges (Above the fold) */}
            <div className="border-t border-slate-700/60 pt-8 mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">4.7 / 5.0 Rated</p>
                  <p className="text-xs text-slate-400 mt-1">Trusted in Naga City</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-gold shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white leading-none">7 Dental Specialties</p>
                  <p className="text-xs text-slate-400 mt-1">Complete Family Care</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white leading-none">Open 7 Days a Week</p>
                  <p className="text-xs text-slate-400 mt-1">Including Sundays 8AM–6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Payments & Convenience Ribbon */}
      <section className="bg-white border-y border-brand-silver py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-4">
            Convenient Cashless & Card Payment Options Accepted
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {paymentMethods.map((method, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base font-extrabold text-brand-dark tracking-tight bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Clinic Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Showcase Col */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-gold/10 rounded-3xl -z-10 blur-xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-brand-silver bg-white p-3 relative">
                <img
                  src="/dentist_portrait.png"
                  alt="Masterdent Dental Center Clinical Team"
                  className="w-full h-[450px] object-cover rounded-2xl filter brightness-95"
                />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-brand-dark border border-brand-gold/50 p-1.5 shadow-xl">
                  <img
                    src="/masterdent-logo.png"
                    alt="Masterdent Crest"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-brand-dark/95 backdrop-blur-md rounded-2xl p-4 text-white border border-amber-500/30 shadow-lg">
                  <p className="text-lg font-bold">Masterdent Dental Center</p>
                  <p className="text-xs text-brand-gold font-semibold tracking-wider uppercase mt-1">
                    Doc Len & Clinical Care Team • CBD II Naga
                  </p>
                </div>
              </div>
            </div>

            {/* Text Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3 h-3 text-brand-accent fill-brand-accent" />
                Why Naga Patients Choose Masterdent
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Honest Consultations, Gentle Hands & Attentive Aftercare
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                Located at Cluster A, The CBD 2 Health and Wellness Strip in Barangay Triangulo (right in front of BCDC), Masterdent Dental Center brings seven specialized fields of dentistry under one roof in a clean, welcoming space.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                From your first checkup to post-procedure recovery, our dentists take time to explain every option honestly without pressure—and even follow up after treatments like extractions to make sure you heal comfortably.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Open Monday – Sunday (8AM – 6PM)",
                  "Proactive Post-Procedure Aftercare",
                  "7 Specialized Dental Disciplines",
                  "Right in Front of BCDC, Near SM Naga"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-semibold text-brand-dark">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('contact')}
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-slate-800 text-brand-gold font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-sm"
                >
                  Schedule Your Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPage('services')}
                  className="inline-flex items-center gap-2 bg-white border border-brand-silver hover:border-brand-accent text-brand-dark font-bold px-6 py-3.5 rounded-xl transition-colors duration-200"
                >
                  View All 7 Specialties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="py-20 bg-white border-t border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              7 Specialized Dental Services Under One Roof
            </h2>
            <p className="text-slate-500 font-light">
              General Dentistry • Cosmetic Dentistry • Orthodontics • Pediatric Dentistry • Prosthodontics • Endodontics • Oral Surgery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: General & Pediatric */}
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-silver hover-lift">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">General & Pediatric Care</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Complete oral checkups, gentle dental cleanings (oral prophylaxis), tooth-colored fillings (pasta), and kid-friendly pediatric dental visits.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:text-brand-accentHover"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Cosmetic & Orthodontics */}
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-silver hover-lift">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Cosmetic & Orthodontics</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Transform your smile with precision orthodontic braces, professional teeth whitening, custom porcelain veneers, crowns, and bridges.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:text-brand-accentHover"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Oral Surgery, Endodontics & Pain Relief */}
            <div className="bg-brand-light p-8 rounded-2xl border border-amber-200 hover-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-dark text-brand-gold px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-bl-lg">
                Pain Relief
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200/70 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Oral Surgery & Endodontics</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Safe tooth extractions (bunot), impacted wisdom tooth removal, root canal treatments (RCT), and prompt dental pain management 7 days a week.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:text-brand-accentHover"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Map Section */}
      <section className="py-20 bg-brand-light border-t border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Loved & Recommended Across Naga City
            </h2>
            <p className="text-slate-500 font-light">
              Known for honest diagnoses, clean facilities at CBD II, and genuine follow-up care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-silver flex flex-col justify-between">
                <div>
                  <div className="flex text-brand-gold gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-brand-silver/50">
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{t.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-1 rounded">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-3xl p-8 border border-brand-silver max-w-xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-brand-dark">Ready for your visit at Masterdent?</p>
                <p className="text-xs text-slate-400">Open Monday to Sunday, 8:00 AM – 6:00 PM.</p>
              </div>
              <button
                onClick={() => setPage('contact')}
                className="bg-brand-dark hover:bg-slate-800 text-brand-gold font-bold text-xs px-5 py-3 rounded-xl transition-colors sm:ml-auto shadow-sm shrink-0"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Location & Google Map Showcase Panel */}
          <div className="mt-16">
            <OfficeLocationPanel />
          </div>
        </div>
      </section>
    </div>
  );
}
