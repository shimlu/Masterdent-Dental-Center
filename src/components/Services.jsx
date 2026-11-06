import React from 'react';
import {
  Shield, Sparkles, Activity, PlusSquare,
  Smile, Phone, CheckCircle, ShieldCheck
} from 'lucide-react';

export default function Services({ setPage }) {
  const serviceCategories = [
    {
      title: "Preventative & General Care",
      subtitle: "Maintain a lifetime of healthy natural teeth",
      icon: <Shield className="w-6 h-6 text-brand-accent" />,
      items: [
        {
          name: "Routine Cleanings & Hygiene",
          desc: "Gentle plaque and tartar removal combined with professional scaling and polishing to keep gums healthy and breath fresh."
        },
        {
          name: "Comprehensive Exams & 3D X-Rays",
          desc: "State-of-the-art diagnostic imaging to detect early-stage cavities, bone issues, and alignment problems safely."
        },
        {
          name: "Fluoride Treatments & Sealants",
          desc: "Invisible protective sealants applied to chewing surfaces to shield children and adults against decay."
        }
      ]
    },
    {
      title: "Cosmetic Smile Makeovers",
      subtitle: "Gain high-confidence radiant smiles",
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      items: [
        {
          name: "Professional Teeth Whitening",
          desc: "Advanced in-office dental whitening systems that lighten your enamel up to 8 shades in a single hour."
        },
        {
          name: "Custom Porcelain Veneers",
          desc: "Wafer-thin, hand-crafted porcelain shells bonded to the front of teeth to fix chips, gaps, or discolorations."
        },
        {
          name: "Composite Tooth Bonding",
          desc: "Quick, non-invasive treatment using tooth-colored resins to seamlessly repair minor chips or shape irregularities."
        }
      ]
    },
    {
      title: "Restorative Dentistry",
      subtitle: "Rebuild chewing strength and structural health",
      icon: <PlusSquare className="w-6 h-6 text-slate-700" />,
      items: [
        {
          name: "Premium Crowns & Bridges",
          desc: "Custom-made porcelain restorations that caps damaged teeth or replaces missing ones with perfect alignment."
        },
        {
          name: "Modern Dental Implants",
          desc: "The gold standard for tooth replacement. Long-lasting titanium posts topped with ultra-natural crowns."
        },
        {
          name: "Gentle Mercury-Free Fillings",
          desc: "Composite white fillings that restore dental structures safely without compromising on aesthetic appearance."
        }
      ]
    }
  ];

  const emergencyServices = [
    "Severe Toothache & Throbbing Pain Relief",
    "Knocked-Out, Cracked, or Broken Teeth Repair",
    "Loose Crowns, Fillings, or Bridge Restorations",
    "Gum Swelling, Abscesses, and Infection Treatment"
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-brand-dark py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/45 via-brand-dark to-brand-dark z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our Dental Services
          </h1>
          <p className="text-slate-300 font-light text-base max-w-2xl mx-auto">
            Providing comprehensive dental care in plain English. No complicated jargon—just gentle, expert treatments designed around your absolute comfort.
          </p>
        </div>
      </section>

      {/* Emergency Dental Care Banner (CRO Focus) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 bg-rose-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-rose-950/20 border border-rose-500">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Tag / Left side */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 animate-pulse text-white fill-white" />
                Immediate Same-Day Assistance
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Dental Emergency? Don't Suffer in Pain.
              </h2>
              <p className="text-rose-100 text-sm leading-relaxed max-w-2xl">
                We prioritize dental emergencies! If you are suffering from a severe toothache, broken tooth, or dental abscess, call us immediately. We keep designated relief slots open every day.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {emergencyServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-rose-50 font-medium">
                    <CheckCircle className="w-4 h-4 text-rose-300 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action button / Right side */}
            <div className="md:col-span-4 flex flex-col gap-4 text-center md:text-right">
              <a 
                href="tel:+639171234567"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 hover:bg-rose-50 text-base font-bold px-6 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call Urgent Line Now
              </a>
              <p className="text-xs text-rose-200">
                Direct Line: +63 917 123 4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((category, catIdx) => (
              <div key={catIdx} className="space-y-8">
                <div className="border-b border-brand-silver pb-4 flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-brand-silver">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-brand-dark">{category.title}</h2>
                    <p className="text-sm text-slate-500">{category.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white p-8 rounded-2xl border border-brand-silver flex flex-col justify-between hover-lift shadow-sm"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-brand-accent rounded-full shrink-0"></span>
                          {item.name}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wide text-brand-slate uppercase flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                          Safe & Proven
                        </span>
                        <button
                          onClick={() => setPage('contact')}
                          className="text-xs font-bold text-brand-accent hover:text-brand-accentHover flex items-center gap-1"
                        >
                          Book Treatment
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Reassurance banner */}
      <section className="py-16 bg-white border-t border-brand-silver">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Smile className="w-4 h-4" />
            Dental Anxiety? We Have Options
          </div>
          <h2 className="text-3xl font-extrabold text-brand-dark">
            A Relaxing Treatment Tailored to Your Comfort
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Dental anxiety is common, and we handle it with care. Yeshu Dental utilizes gentle numbing techniques, noise-canceling headphones, warm blankets, and optional mild sedation to ensure you remain completely relaxed.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setPage('contact')}
              className="bg-brand-accent hover:bg-brand-accentHover text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all"
            >
              Request Comfort-First Booking
            </button>
            <a 
              href="tel:+639171234567"
              className="bg-white border border-brand-silver hover:bg-brand-light text-brand-dark font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Ask Our Staff: +63 917 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
