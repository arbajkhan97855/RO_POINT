import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  Calendar
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function StoreVisitSection() {
  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dholi Mandi Renwal Road Chomu Jaipur Rajasthan 303702'
  )}`;

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Visit Our Physical Store in Chomu</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Experience Pure Water Quality Before You Buy
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nothing beats seeing the machines in person! Visit <strong>RO POINT</strong> at Dholi Mandi, Renwal Road, Chomu. See live filtration demos, inspect genuine internal copper pumps and Filmtec membranes, and taste the difference.
              </p>

              <div className="space-y-3 pt-1 text-xs text-sky-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Free On-The-Spot Water TDS Test:</strong> Bring 500ml water from your home or farm borewell.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Live Brand Comparison:</strong> Compare Kent, Aquaguard, Livpure, Aqua Tejas & RO Point models side by side.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Wholesale Spare Counter:</strong> Genuine membranes, pumps, filters, and valves ready in stock.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 fill-slate-950" />
                  <span>Open Google Maps Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call Raju ({BUSINESS_INFO.primaryPhone})</span>
                </a>
              </div>
            </div>

            {/* Right: Store Timing & Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] text-sky-400 font-bold uppercase tracking-wider block">
                  Showroom Location
                </span>
                <h3 className="text-xl font-bold text-white mt-1">RO POINT Store</h3>
                <p className="text-xs text-slate-300 mt-1 leading-snug">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Store Hours:</span>
                  <span className="font-extrabold text-white text-xs mt-0.5 block">
                    8:00 AM – 9:00 PM
                  </span>
                  <span className="text-[10px] text-emerald-400">Open 7 Days a Week</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase">Landmark:</span>
                  <span className="font-extrabold text-white text-xs mt-0.5 block">
                    Opp. Hanuman Ji Temple
                  </span>
                  <span className="text-[10px] text-sky-400">Dholi Mandi, Renwal Road</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-emerald-300 font-bold block">Need Technical Advice?</span>
                  <span className="text-[11px] text-slate-400">Connect directly on WhatsApp</span>
                </div>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
