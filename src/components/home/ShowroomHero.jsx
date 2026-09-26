import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Droplets,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  Wrench,
  Factory
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/initialData.js';
import { useApp } from '../../context/AppContext.jsx';

export default function ShowroomHero() {
  const { openOrderModal } = useApp();
  const [sampleTDS, setSampleTDS] = useState(1200);

  const getTdsRecommendation = (tds) => {
    if (tds < 300) return { type: 'UV + UF Purifier', desc: 'Low TDS municipal water. Natural minerals intact.', tag: 'Budget Friendly' };
    if (tds <= 1000) return { type: 'RO + UV + Mineralizer', desc: 'Kent / Aquaguard / Livpure multi-stage system.', tag: 'High Purity' };
    if (tds <= 2500) return { type: 'RO POINT Heavy TDS + Alkaline', desc: 'Rajasthan high-borewell special with 80 GPD Filmtec membrane.', tag: 'Borewell Special' };
    return { type: 'Commercial Skid Plant or Dual Membrane', desc: 'Very hard saline water. Requires heavy pump & pre-treatment.', tag: 'Heavy Duty' };
  };

  const rec = getTdsRecommendation(sampleTDS);

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dholi Mandi Renwal Road Chomu Jaipur Rajasthan 303702'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white">
      {/* Dynamic Water Wave Mesh Background */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Shop Visit Pitch & Buttons (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Showroom Open Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Shop Open Today (8 AM – 9 PM) • Chomu, Jaipur</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              RO POINT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Water Purifier & RO Solutions
              </span>
            </h1>

            {/* Subheading emphasizing Store Visit & All Top Brands */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-medium">
              Chomu's authorized water purification showroom. Visit our store to see live demos of <strong className="text-white">KENT, Aquaguard, Livpure, Aqua Tejas & RO POINT</strong> heavy borewell machines.
            </p>

            {/* Address Highlight Card */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-sky-100">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-white block">Store Address:</span>
                  <span>{BUSINESS_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Directions, Call & WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-xl shadow-sky-600/30 transition-all flex items-center gap-2 group"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-xl font-bold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call Raju ({BUSINESS_INFO.primaryPhone})</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello RO Point! I want to visit your shop in Chomu to check Kent, Aquaguard, and water purifiers.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Brand Strip */}
            <div className="pt-4 border-t border-white/15 space-y-2">
              <span className="text-[11px] font-bold text-sky-300 uppercase tracking-widest block">
                Top Brands Available in Shop:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-black">
                {['KENT RO', 'AQUAGUARD', 'LIVPURE', 'AQUA TEJAS', 'RO POINT SPECIAL', 'COMMERCIAL PLANTS'].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-lg bg-slate-900/80 border border-sky-400/30 text-white shadow-2xs hover:border-sky-400 transition-colors"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Water TDS & Recommendation Tool (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-sky-500/30 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-sm">Water TDS Guide</h3>
                    <p className="text-[11px] text-sky-300">Know your groundwater level</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/40">
                  Free in Store
                </span>
              </div>

              {/* Interactive TDS Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-semibold">Your Area Water TDS:</span>
                  <span className="font-black text-sky-400 text-sm font-mono bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    {sampleTDS} PPM
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={sampleTDS}
                  onChange={(e) => setSampleTDS(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>100 (Tap)</span>
                  <span>1000 (Hard)</span>
                  <span>2500+ (Borewell)</span>
                </div>
              </div>

              {/* Live Recommendation Result Box */}
              <div className="p-4 rounded-2xl bg-sky-950/70 border border-sky-700/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                    Recommended Solution
                  </span>
                  <span className="px-2 py-0.2 rounded text-[9px] font-bold bg-sky-800 text-white">
                    {rec.tag}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white">{rec.type}</h4>
                <p className="text-xs text-slate-300 leading-snug">{rec.desc}</p>
              </div>

              {/* Free In-Store Testing Invitation */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bring a 500ml Water Bottle to Our Shop:</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-5">
                  Raju or Ajahar will test your exact TDS and Fluoride on digital meters within 2 minutes for free!
                </p>
              </div>

              {/* CTA button */}
              <button
                onClick={() => openOrderModal()}
                className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book Free Water Checkup or Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
