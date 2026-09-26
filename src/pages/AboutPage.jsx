import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Wrench,
  Droplets,
  Factory,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData.js';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            About RO POINT Chomu
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Pure Water, Healthy Rajasthan
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Welcome to <strong>RO POINT</strong> – your premier destination for advanced domestic water purifiers, commercial & industrial RO plants, geysers, and authentic spare parts in Chomu, Jaipur.
          </p>
        </div>

        {/* Story & Commitment Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Dedicated to Solving Hard Borewell Water Problems
            </h2>
            <p>
              In Chomu, Renwal, and nearby regions of Jaipur, groundwater TDS often exceeds 1500 to 2500+ PPM with severe hardness, fluoride, and salt content. Ordinary purifiers choke within months.
            </p>
            <p>
              At <strong>RO POINT</strong>, we hand-engineer our RO purifiers and commercial plants with high-rejection 80/100 GPD membranes, heavy pure copper booster pumps, and multi-stage pre-filtration that comfortably withstand harsh water while maintaining sweet, alkaline, mineral-rich taste.
            </p>
            <div className="pt-2 space-y-2 text-slate-800 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> Complete water TDS testing prior to installation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> Direct wholesale pricing for spare parts
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> Commercial plants from 25 LPH up to 10,000 LPH
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> On-site breakdown repair and filter replacement
              </div>
            </div>
          </div>

          {/* Shop Image / Visual Card */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800 p-6 sm:p-8 text-white space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-sky-400 font-bold uppercase tracking-wider block">
                Shop Location & Headquarters
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">RO POINT Store</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Working Hours: <strong>8:00 AM – 9:00 PM (Daily)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Opposite Hanuman Ji Mandir, Dholi Mandi, Renwal Road</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Shop ({BUSINESS_INFO.primaryPhone})</span>
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Business Owners / Leadership Team Cards */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Meet the RO POINT Technical Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Direct access to business owners for personal attention, honest recommendations, and reliable after-sales service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Raju */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-xl">
                R
              </div>
              <div>
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                  Domestic RO & Sales Head
                </span>
                <h4 className="text-lg font-bold text-slate-900">Raju</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Expert in household water purification, filter selection, and festive customer gift offers.
                </p>
              </div>
              <a
                href="tel:9660063962"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-800 hover:bg-sky-100 rounded-xl text-xs font-bold transition-colors w-full justify-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 9660063962</span>
              </a>
            </div>

            {/* Ajahar */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xl">
                A
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                  Commercial Plants & Technical Lead
                </span>
                <h4 className="text-lg font-bold text-slate-900">Ajahar</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Specialist in 25 LPH to 10,000 LPH heavy commercial plant setup, pump repairs, and industrial plumbing.
                </p>
              </div>
              <a
                href="tel:7792901409"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 rounded-xl text-xs font-bold transition-colors w-full justify-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 7792901409</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
