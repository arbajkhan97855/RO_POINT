import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Check, Phone, MessageCircle, ArrowRight, ShieldCheck, Droplets } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function CommercialPlantsSection() {
  const { openOrderModal } = useApp();

  const capacities = [
    { cap: "25 LPH", ideal: "Clinics, Cafes, Small Offices (up to 30 people)", pump: "Dual 150 GPD Pumps", frame: "SS 304 Compact" },
    { cap: "50 LPH", ideal: "Coaching Centers, Restaurants, Fuel Stations (50-100 people)", pump: "Heavy Commercial", frame: "SS 304 Skid" },
    { cap: "100 LPH", ideal: "Schools, Small Hotels, Hostels (100-200 people)", pump: "Vertical Multistage", frame: "10x54 FRP Column" },
    { cap: "250 LPH", ideal: "Marriage Gardens, Medium Institutions (200-500 people)", pump: "1.5 HP Multistage", frame: "Twin 4040 Membrane" },
    { cap: "500 LPH", ideal: "Water ATM, Hostels, Food Processing (500+ people)", pump: "2.0 HP Industrial", frame: "Four 4040 Vessel" },
    { cap: "1000 LPH", ideal: "Industrial Boilers, Bottling Plants, Hospitals", pump: "3 HP Three Phase", frame: "Twin 8040 Industrial" },
    { cap: "2000 LPH", ideal: "Large Textile, Chemical & Mega Water Projects", pump: "High Pressure Pump", frame: "Heavy Box Skid" },
    { cap: "5000 LPH", ideal: "Industrial Turnkey Setup & Municipal Supply", pump: "Custom Industrial", frame: "FRP & SS Piping" },
    { cap: "10000 LPH", ideal: "Mega Industrial Reverse Osmosis Infrastructure", pump: "Custom Heavy Duty", frame: "PLC Automated Skid" }
  ];

  const [selectedCap, setSelectedCap] = useState(capacities[2]);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 to-sky-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2 border border-sky-400/30">
              <Factory className="w-4 h-4 text-sky-400" /> Commercial & Industrial Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Commercial RO Plants (25 LPH to 10,000 LPH)
            </h2>
            <p className="text-sm sm:text-base text-sky-100 mt-2 max-w-2xl leading-relaxed">
              Engineered with Stainless Steel frames, high-pressure multistage pumps, Sand & Carbon pre-treatment media, and genuine industrial membranes. We design and install plants across Chomu, Jaipur, and Rajasthan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/commercial-ro"
              className="px-5 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>View All Plant Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Capacity Selector Tabs with Larger Readable Font */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5 mb-8">
          {capacities.map((item) => (
            <button
              key={item.cap}
              onClick={() => setSelectedCap(item)}
              className={`py-3 px-2 text-center rounded-xl text-sm font-black transition-all ${
                selectedCap.cap === item.cap
                  ? 'bg-sky-400 text-slate-950 shadow-xl scale-105'
                  : 'bg-slate-800/90 hover:bg-slate-700 text-sky-200 border border-slate-700'
              }`}
            >
              {item.cap}
            </button>
          ))}
        </div>

        {/* Selected Capacity Spotlight Card */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl border border-slate-700/80 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Check className="w-4 h-4 text-emerald-400" /> Suitable for Rajasthan Borewell & High TDS Water
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Commercial RO Plant – {selectedCap.cap} Capacity
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              <strong className="text-white">Ideal Application:</strong> {selectedCap.ideal}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                <span className="text-slate-400 block text-xs font-semibold">High Pressure Pump:</span>
                <span className="font-black text-white text-base mt-0.5 block">{selectedCap.pump}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                <span className="text-slate-400 block text-xs font-semibold">Structure & Setup:</span>
                <span className="font-black text-white text-base mt-0.5 block">{selectedCap.frame}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm text-sky-200">
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> 1-Year Comprehensive On-Site Warranty
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Droplets className="w-4 h-4 text-sky-400" /> Free TDS Testing & Water Audit
              </span>
            </div>
          </div>

          {/* Action Callout Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-900/80 to-blue-950/80 border border-sky-500/30 flex flex-col justify-between space-y-4 text-center">
            <div>
              <span className="text-xs text-sky-300 font-bold uppercase tracking-wider block">
                Direct Technical Consultation
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">Get Instant Plant Quotation</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Speak directly with technical leads <strong>Raju</strong> or <strong>Ajahar</strong> for site inspection.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-full py-3 px-4 bg-sky-400 hover:bg-sky-300 text-slate-950 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Raju ({BUSINESS_INFO.primaryPhone})</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello RO Point, I need quotation and technical details for ${selectedCap.cap} Commercial RO Plant for my location in Rajasthan.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Price on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
