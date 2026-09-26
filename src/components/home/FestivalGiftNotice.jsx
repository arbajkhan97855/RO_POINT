import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Flame, Sparkles, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function FestivalGiftNotice() {
  const { openOrderModal } = useApp();

  return (
    <section className="py-12 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-200 fill-amber-200 animate-pulse" />
              <span>NAVRATRI SPECIAL OFFER</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Buy Domestic RO & Get Special Gifts!
            </h2>

            <p className="text-sm sm:text-base text-amber-100 font-medium">
              "Special Gift Offers Available For Selected Customers"
            </p>

            <div className="p-4 rounded-2xl bg-white/20 border border-white/30 text-white space-y-1.5 inline-block text-left w-full sm:w-auto">
              <div className="text-xs sm:text-sm font-extrabold flex items-center gap-2">
                <Gift className="w-5 h-5 text-amber-300" />
                <span>Special Highlighted Offer:</span>
              </div>
              <p className="text-base sm:text-lg font-black text-amber-200">
                Selected Customer → Electronic Gas Chulha (Free Gift!)
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Free Heavy Pre-Filter Bowl
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Free On-Site Installation
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> 1-Year Full Warranty
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/offers"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 text-center transition-all"
            >
              <span>Explore Navratri Offers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openOrderModal()}
              className="px-6 py-3.5 bg-white hover:bg-amber-50 text-slate-900 rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 text-center transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Book Offer Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
