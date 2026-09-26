import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Send,
  Navigation,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData.js';
import { useApp } from '../context/AppContext.jsx';

export default function ContactPage() {
  const { processOrderAndWhatsApp } = useApp();

  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    whatsapp: '',
    address: '',
    message: '',
    inquiryType: 'Domestic RO Purifier'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    processOrderAndWhatsApp(
      {
        ...formData,
        city: 'Chomu',
        pincode: '303702',
        quantity: 1,
        message: `[Inquiry: ${formData.inquiryType}] ${formData.message}`
      },
      null
    );
  };

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dholi Mandi Renwal Road Chomu Jaipur Rajasthan 303702'
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact RO POINT
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Have questions about water TDS testing, domestic purifier models, 25-10000 LPH commercial plant quotes, or geysers? Call or visit our shop in Chomu.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Shop Location */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Store Address</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>
            <a
              href={mapDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Card 2: Phone & Owners */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Phone & Helpline</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Raju (Sales):</span>
                  <a href="tel:9660063962" className="font-bold text-sky-700 hover:underline">
                    9660063962
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ajahar (Service):</span>
                  <a href="tel:7792901409" className="font-bold text-sky-700 hover:underline">
                    7792901409
                  </a>
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Card 3: Business Hours */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Store Timings</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Open 7 Days a week for walk-in consultations, spare parts supply, and water testing.
              </p>
              <p className="text-xs font-bold text-slate-800 bg-slate-100 p-2 rounded-lg">
                Monday to Sunday: 8:00 AM – 9:00 PM
              </p>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Free raw water TDS testing in-store</span>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Enquiry Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
              Send an Enquiry / Request Callback
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill the form below and we will connect with you immediately on WhatsApp or phone.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit phone"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Product / Service of Interest
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none font-semibold text-slate-800"
                >
                  <option value="Domestic RO Purifier">Domestic RO Purifier</option>
                  <option value="Commercial RO Plant (25 to 10000 LPH)">Commercial RO Plant (25 to 10,000 LPH)</option>
                  <option value="Electric Geyser">Electric Geyser / Water Heater</option>
                  <option value="RO Spare Parts Wholesale">RO Spare Parts (Membrane, Pump, Filter)</option>
                  <option value="Water TDS Testing Request">Doorstep Water TDS Testing Request</option>
                  <option value="Breakdown Repair Service">Breakdown Repair Service in Chomu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Location / Village in Chomu or Jaipur
                </label>
                <input
                  type="text"
                  placeholder="E.g. Renwal Road, Dholi Mandi, Ward 15, Chomu"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details like water source (borewell/tap), raw water TDS, or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit & Open WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Map Location Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Locate Our Store on Map
            </h3>
            <p className="text-xs text-slate-500">
              Situated right in front of Hanuman Ji Temple on Renwal Road, Dholi Mandi, Chomu.
            </p>

            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
              <iframe
                title="RO Point Chomu Location"
                src="https://maps.google.com/maps?q=Dholi%20Mandi%20Renwal%20Road%20Chomu%20Jaipur%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">
                Pincode: <strong>303702</strong> (Jaipur District)
              </span>
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
