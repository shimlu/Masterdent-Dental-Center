import React from 'react';
import { Star, ShieldCheck, Activity, Award, ArrowRight, Phone, Calendar, Heart, Shield, CheckCircle } from 'lucide-react';

export default function Home({ setPage }) {
  // Insurance partners list
  const insurances = [
    'MetLife', 'Delta Dental', 'Cigna', 'Aetna', 'BlueCross BlueShield', 'UnitedHealthcare'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marcus Vance",
      role: "Local Business Owner",
      rating: 5,
      comment: "Dr. Shimri and his team are phenomenal. I had a dental emergency on a Friday night, and they got me in immediately. The pain was gone in an hour. Extremely gentle and professional!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Teacher & Mother of Two",
      rating: 5,
      comment: "My kids actually enjoy going to Yeshu Dental! The atmosphere is like a modern spa—warm, calming, and clean. Dr. Shimri is patient, friendly, and explains everything in simple terms.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "David K. Sy",
      role: "Software Engineer",
      rating: 5,
      comment: "Highly recommend their cosmetic services. I got teeth whitening and veneers here. The technology they use is state-of-the-art and my smile has never looked better or more natural.",
      date: "3 months ago"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Dark Mesh Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_dentist.png"
            alt="Yeshu Dental Office & Care"
            className="w-full h-full object-cover object-center scale-105 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-transparent md:to-brand-dark/30 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 w-full">
          <div className="max-w-2xl">
            {/* Urgent Tag (CRO trigger) */}
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Accepting New Patients & Emergency Appointments
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Exceptional Gentle Dental Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Meridian City</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-light leading-relaxed">
              Experience modern, pain-free dentistry in a welcoming spa-like clinic. Led by Dr. Shimri Gabriel Luansing, we focus on comfortable care to make you smile.
            </p>

            {/* CRO High-Converting Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setPage('contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white text-base font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/35 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Online
              </button>
              <a 
                href="tel:+639171234567"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white text-base font-semibold px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 backdrop-blur-md transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brand-accent" />
                Call Office: +63 917 123 4567
              </a>
            </div>

            {/* Hero Trust Badges (Above the fold) */}
            <div className="border-t border-slate-700/50 pt-8 mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">5-Star Google Rating</p>
                  <p className="text-xs text-slate-400 mt-1">200+ Verified Patient Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-accent" />
                <div>
                  <p className="text-sm font-bold text-white leading-none">ADA & AACD Member</p>
                  <p className="text-xs text-slate-400 mt-1">Accredited Clinical Excellence</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                <div>
                  <p className="text-sm font-bold text-white leading-none">In-Network Approved</p>
                  <p className="text-xs text-slate-400 mt-1">All Major Insurances Welcomed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Logo Ribbon */}
      <section className="bg-white border-y border-brand-silver py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-4">
            We proudly accept in-network and major private insurance providers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {insurances.map((ins, idx) => (
              <span key={idx} className="text-base font-extrabold text-brand-dark tracking-tight">
                {ins}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Dentist Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-accent/5 rounded-3xl -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-gold/5 rounded-3xl -z-10 blur-xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-brand-silver bg-white p-3">
                <img
                  src="/dentist_portrait.png"
                  alt="Dr. Shimri Gabriel Luansing"
                  className="w-full h-[450px] object-cover rounded-2xl filter brightness-95"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-brand-dark/90 backdrop-blur-md rounded-2xl p-4 text-white border border-slate-700/50 shadow-lg">
                  <p className="text-lg font-bold">Dr. Shimri Gabriel Luansing</p>
                  <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase mt-1">Lead Dental Surgeon & Founder</p>
                </div>
              </div>
            </div>

            {/* Text Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-silver/50 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3 h-3 text-brand-accent fill-brand-accent" />
                Meet Your Dentist
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Your Smile is in Safe, Compassionate Hands
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                Welcome to Yeshu Dental. Our practice is built on a simple foundation: providing the highest standard of modern clinical care in a warm, welcoming environment that completely eases patient anxiety.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Dr. Shimri Gabriel Luansing and our dedicated clinical team utilize state-of-the-art diagnostic imaging, micro-dentistry tools, and comfortable sedation choices. We are committed to rendering every dental cleaning, filling, veneer, or dental implant procedure as pain-free, fast, and stress-free as possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "12+ Years Clinical Experience",
                  "Comfort-First Clinical Care",
                  "24/7 Priority Emergency Support",
                  "Digital Micro-Dentistry Tech"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-semibold text-brand-dark">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setPage('contact')}
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  Schedule an Appointment
                  <ArrowRight className="w-4 h-4" />
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
              Comprehensive Dentistry Services Custom-Tailored for You
            </h2>
            <p className="text-slate-500 font-light">
              From routine cleanings to critical, state-of-the-art cosmetic and restoration procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Preventive & General */}
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-silver hover-lift">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">General & Preventive Care</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Maintain optimal oral hygiene with regular dental cleaning, full digital X-rays, detailed gum evaluations, and protective fluoride therapies.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:text-brand-accentHover"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Cosmetic Dentistry */}
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-silver hover-lift">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Cosmetic Smile Makeovers</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Transform your smile with premium custom porcelain veneers, advanced teeth whitening treatments, dental bonding, and Invisalign clear aligners.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:text-brand-accentHover"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Emergency Dental Care */}
            <div className="bg-brand-light p-8 rounded-2xl border border-rose-100 hover-lift relative overflow-hidden">
              {/* Highlight badge for Emergency */}
              <div className="absolute top-0 right-0 bg-rose-500 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-bl-lg">
                Urgent Care
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">24/7 Urgent Emergency Dental</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Experiencing extreme toothaches, broken teeth, or a dislodged crown? Call us immediately. We offer priority same-day relief slots.
              </p>
              <button
                onClick={() => setPage('services')}
                className="inline-flex items-center gap-1 text-sm font-bold text-rose-500 hover:text-rose-600"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-light border-t border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Loved & Trusted by Patients
            </h2>
            <p className="text-slate-500 font-light">
              Read real feedback from our happy patient community in Meridian City.
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
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-3xl p-8 border border-brand-silver max-w-xl mx-auto shadow-sm">
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-brand-dark">Ready for a comfortable dental visit?</p>
                <p className="text-xs text-slate-400">Join our clinic community as a new patient today.</p>
              </div>
              <button
                onClick={() => setPage('contact')}
                className="bg-brand-accent hover:bg-brand-accentHover text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors ml-auto shadow-sm"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
