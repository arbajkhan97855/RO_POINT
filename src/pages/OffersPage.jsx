import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Gift,
  Flame,
  CheckCircle2,
  Phone,
  MessageCircle,
  Tag,
  ArrowRight,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { BUSINESS_INFO } from '../data/initialData.js';

export default function OffersPage() {
  const { offers, openOrderModal } = useApp();

  const activeOffers = offers.filter((o) => o.active !== false);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-600 animate-pulse" />
            <span>FESTIVE DEALS & DHAMAKA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Special Offers & Festival Gifts
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Grab exclusive gifts and seasonal discounts on Domestic RO purifiers, Commercial RO Plants, Geysers, and Spare Parts from <strong>RO POINT Chomu</strong>.
          </p>
        </div>

        {/* Featured Navratri Offer Banner Spotlight */}
        <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-amber-600 text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl border border-amber-300/40 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-950/40 text-amber-200 text-xs font-black uppercase tracking-wider inline-block">
              🔥 Grand Bumper Festival Deal
            </span>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              Buy Domestic RO & Get Electronic Gas Chulha Free!
            </h2>

            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
              Selected customers purchasing any premium Domestic RO Purifier (RO+UV+UF / Alkaline) receive an Electronic Gas Chulha stove free of cost, plus a heavy pre-filter bowl set and free installation in Chomu & Jaipur!
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold text-white">
              <span className="flex items-center gap-1 bg-black/20 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Electronic Gas Chulha Free
              </span>
              <span className="flex items-center gap-1 bg-black/20 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Free Pre-Filter Housing
              </span>
              <span className="flex items-center gap-1 bg-black/20 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Free Doorstep Installation
              </span>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => openOrderModal()}
                className="px-6 py-3 bg-white text-slate-950 hover:bg-amber-50 rounded-xl font-black text-xs sm:text-sm shadow transition-all flex items-center gap-2"
              >
                <Gift className="w-4 h-4 text-rose-600" />
                <span>Claim This Offer via WhatsApp</span>
              </button>
              <Link
                to="/domestic-ro"
                className="px-5 py-3 bg-black/30 hover:bg-black/40 text-white rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
              >
                <span>Browse Eligible RO Purifiers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* All Active Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {activeOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-sky-300 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                    {offer.category}
                  </span>
                  {offer.discount && (
                    <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black uppercase tracking-wider">
                      {offer.discount}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {offer.title}
                  </h3>
                  {offer.subtitle && (
                    <p className="text-xs sm:text-sm font-bold text-sky-700 mt-1">
                      {offer.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {offer.description}
                </p>

                {offer.validTill && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 font-semibold">
                    <Clock className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Validity: {offer.validTill}</span>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                {offer.code && (
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Offer Code:</span>
                    <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                      {offer.code}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => openOrderModal()}
                  className="ml-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
