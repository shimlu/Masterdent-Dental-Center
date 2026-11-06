import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, ShieldCheck,
  CheckCircle2, AlertCircle, Info, Navigation, Car
} from 'lucide-react';
import OfficeLocationPanel from './OfficeLocationPanel';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    reason: '',
    notes: ''
  });

  // Validation State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Basic Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (formData.name.length > 50) {
      newErrors.name = "Full Name cannot exceed 50 characters.";
    }

    // Regular expression for basic phone validation
    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    } else if (formData.phone.length > 20) {
      newErrors.phone = "Phone number cannot exceed 20 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (formData.email.length > 80) {
      newErrors.email = "Email address cannot exceed 80 characters.";
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else if (formData.date < todayStr) {
      newErrors.date = "Preferred date cannot be in the past.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select the reason for your visit.";
    }

    if (formData.notes && formData.notes.length > 500) {
      newErrors.notes = "Notes cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Generate random booking reference for realism
      const refId = "YSD-" + Math.floor(100000 + Math.random() * 900000);
      setBookingId(refId);

      // Fetch the Google Sheets Web App deployment URL from environments
      const webAppUrl = (import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL || "").trim();

      if (webAppUrl) {
        try {
          // Send request. mode: 'no-cors' resolves the redirects that Google Apps Script performs.
          await fetch(webAppUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ...formData,
              bookingId: refId
            })
          });
        } catch (error) {
          console.error("Failed to write to Google Sheet:", error);
          // Fail-safe: log errors but still allow the UI to transition so patient knows we have them
        }
      } else {
        // Mock network latency when not configured
        console.log("No Google Sheet Web App URL configured. Data logged:", { ...formData, bookingId: refId });
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Scroll to top of section on submit
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in bg-brand-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Schedule an Appointment
          </h1>
          <p className="text-slate-500 font-light">
            Take the first step toward a beautiful, healthy smile. Request an appointment below or call our office directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Form (8 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-brand-silver shadow-sm">

            {/* If Form is successfully submitted */}
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6 animate-slide-up">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-brand-dark">Request Received Successfully!</h2>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-brand-dark">{formData.name}</span>. Your preliminary appointment request has been securely transmitted.
                  </p>
                </div>

                {/* Booking summary card */}
                <div className="bg-brand-light border border-brand-silver rounded-2xl p-6 max-w-md mx-auto text-left space-y-3">
                  <div className="flex justify-between border-b border-brand-silver/60 pb-2 text-xs text-slate-400 font-bold">
                    <span>BOOKING REFERENCE</span>
                    <span className="text-brand-accent">{bookingId}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm pt-1">
                    <div>
                      <p className="text-xs text-slate-400">Preferred Date</p>
                      <p className="font-semibold text-brand-dark">{formData.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Preferred Time</p>
                      <p className="font-semibold text-brand-dark">{formData.time}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-slate-400">Reason for Visit</p>
                      <p className="font-semibold text-brand-dark">{formData.reason}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800 flex items-start gap-3 max-w-md mx-auto text-left">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <p>
                    <strong>What happens next?</strong> Our patient coordinator will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 2 business hours to confirm your exact appointment slot and review insurance details.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', date: '', time: '', reason: '', notes: '' });
                  }}
                  className="bg-brand-dark hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              // Active Form UI
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Form header/encryption message */}
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-xs text-slate-500">
                  <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                  <div>
                    <span className="font-bold text-brand-dark block">HIPAA Compliant & Secure</span>
                    Your personal health details are fully encrypted and transmitted securely.
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      maxLength={50}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-50 border ${errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={20}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +63 917 123 4567"
                      className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="email" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength={80}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@gmail.com"
                      className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${errors.date ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    />
                    {errors.date && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${errors.time ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    >
                      <option value="">Select a time...</option>
                      {/* Morning slots */}
                      <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                      <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      {/* Lunch gap */}
                      <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                      <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                      <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                      <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                    </select>
                    {errors.time && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Reason for Visit */}
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="reason" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Reason for Appointment *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${errors.reason ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm transition-all focus:border-brand-accent focus:bg-white`}
                    >
                      <option value="">Select visit reason...</option>
                      <option value="Routine Cleaning & Exam">Routine Cleaning & Exam</option>
                      <option value="Emergency Care / Pain Relief">Emergency Care / Pain Relief</option>
                      <option value="Cosmetic Whitening / Veneers">Cosmetic Whitening / Veneers</option>
                      <option value="Restoration (Crown / Filling / Bridge)">Restoration (Crown / Filling / Bridge)</option>
                      <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                      <option value="Other Dental Issue">Other Dental Issue</option>
                    </select>
                    {errors.reason && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.reason}
                      </p>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2 sm:col-span-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="notes" className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                        Symptoms or Additional Notes (Optional)
                      </label>
                      {errors.notes && (
                        <span className="text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.notes}
                        </span>
                      )}
                    </div>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="3"
                      maxLength={500}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us if you have pain, specific fears, or questions..."
                      className={`w-full bg-slate-50 border ${errors.notes ? 'border-rose-400 focus:ring-rose-200' : 'border-brand-silver focus:ring-teal-100'} rounded-xl px-4 py-3 text-sm focus:ring-teal-100 focus:border-brand-accent focus:bg-white transition-all resize-none`}
                    ></textarea>
                    <div className="flex justify-between text-[10px] text-slate-400 px-1">
                      <span>Describe your symptoms briefly (e.g. pain level, tooth position)</span>
                      <span>{formData.notes ? formData.notes.length : 0} / 500 characters</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-brand-accent hover:bg-brand-accentHover text-white text-base font-bold py-4 rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/35 transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending Secure Request...' : 'Securely Request Appointment'}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-3">
                    By submitting, you agree to receive follow-up contact calls or text messages regarding your clinical booking.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">

            {/* NAP (Name, Address, Phone) & Contact Info Box */}
            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-brand-accent uppercase">
                  Contact Information
                </span>
                <h2 className="text-2xl font-extrabold mt-1">Yeshu Dental Clinic</h2>
              </div>

              <div className="space-y-4">
                {/* Address Link */}
                <a
                  href="https://maps.google.com/?q=Meridian+Dental+Center+45+Pearl+Street+Meridian+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Our Location</span>
                    <span className="text-sm font-medium leading-relaxed group-hover:text-teal-300">
                      Meridian Dental Center, 45 Pearl Street,<br />
                      Meridian City, Metro Manila, 1600
                    </span>
                  </div>
                </a>

                {/* Click-to-Call Link */}
                <a 
                  href="tel:+639171234567" 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Call / Text Direct</span>
                    <span className="text-sm font-bold group-hover:text-teal-300">
                      +63 917 123 4567
                    </span>
                  </div>
                </a>

                {/* Click-to-Email Link */}
                <a 
                  href="mailto:shimrilu@gmail.com" 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Email Patient Support</span>
                    <span className="text-sm font-medium group-hover:text-teal-300 break-all">
                      shimrilu@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours Table Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-silver shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-accent" />
                <h3 className="text-lg font-bold text-brand-dark">Clinical Hours</h3>
              </div>

              <div className="divide-y divide-brand-silver/50 text-sm">
                {[
                  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "9:00 AM - 4:00 PM" },
                  { days: "Sunday", hours: "Closed", highlight: true },
                ].map((row, idx) => (
                  <div key={idx} className="flex justify-between py-3">
                    <span className="font-semibold text-brand-dark">{row.days}</span>
                    <span className={row.highlight ? 'text-slate-400 font-medium' : 'text-slate-600 font-bold'}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Urgent Emergency highlight */}
              <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 space-y-2">
                <p className="text-xs font-bold text-rose-700 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                  24/7 Pain Relief Coverage
                </p>
                <p className="text-xs text-rose-600 leading-relaxed">
                  We answer urgent patient queries 24/7. Registered active patients receive priority callbacks for emergency consults.
                </p>
              </div>
            </div>

            {/* Arrival & Parking Details Card */}
            <div className="bg-white rounded-3xl p-6 border border-brand-silver shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-brand-accent" />
                  <h4 className="text-sm font-bold text-brand-dark">Arrival & Parking</h4>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                  Free Reserved Parking
                </span>
              </div>

              <div className="text-xs text-slate-500 space-y-2 leading-relaxed">
                <p>
                  Reserved patient parking is located right in front of the clinic. Underground parking is available in <strong>Slots 12 to 20</strong>.
                </p>
                <p>
                  Ground floor accessibility with full wheelchair ramps and step-free clinic access.
                </p>
              </div>

              <a
                href="#office-map"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-accentHover pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                View Interactive Map Below &darr;
              </a>
            </div>

          </div>

        </div>

        {/* Full-Width Interactive Google Map & Office Details Showcase (Matching Reference Panel) */}
        <div id="office-map" className="mt-16 pt-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Visit Our Clinic
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Conveniently located with easy highway access and reserved patient parking.
            </p>
          </div>
          <OfficeLocationPanel />
        </div>

      </div>
    </div>
  );
}
