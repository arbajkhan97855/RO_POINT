import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Droplets,
  Factory,
  Flame,
  Wrench,
  HelpCircle,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import ShowroomHero from '../components/home/ShowroomHero.jsx';
import BrandShowcase from '../components/home/BrandShowcase.jsx';
import CategoryCards from '../components/home/CategoryCards.jsx';
import CommercialPlantsSection from '../components/home/CommercialPlantsSection.jsx';
import TrustFeatures from '../components/home/TrustFeatures.jsx';
import StoreVisitSection from '../components/home/StoreVisitSection.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { useApp } from '../context/AppContext.jsx';
import { BUSINESS_INFO, FAQS_DATA } from '../data/initialData.js';

export default function HomePage() {
  const { products, openOrderModal } = useApp();

  // Top Domestic Purifiers (Kent, Aquaguard, Livpure, Aqua Tejas, RO Point)
  const domesticProducts = products
    .filter((p) => p.category === 'Domestic RO')
    .slice(0, 6);

  // Top Spare Parts & Accessories
  const spareParts = products
    .filter((p) => p.category === 'RO Spare Parts')
    .slice(0, 4);

  // Top Geysers
  const topGeysers = products
    .filter((p) => p.category === 'Geyser')
    .slice(0, 3);

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dholi Mandi Renwal Road Chomu Jaipur Rajasthan 303702'
  )}`;

  return (
    <div className="w-full">
      {/* 1. Ultra-Attractive Modern Water Showroom Hero */}
      <ShowroomHero />

      {/* 2. Top Brands Strip: Kent, Aquaguard, Livpure, Aqua Tejas, RO Point */}
      <BrandShowcase />

      {/* 3. Core Trust & In-Shop Water Testing Guarantees */}
      <TrustFeatures />

      {/* 4. Product Categories Grid */}
      <CategoryCards />

      {/* 5. Featured Domestic Water Purifiers (Kent, Aquaguard, Livpure, Aqua Tejas, RO Point) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Droplets className="w-3.5 h-3.5 text-sky-600" /> Leading Domestic Purifiers
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Top Brand Water Purifiers for Home
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Kent, Aquaguard, Livpure, Aqua Tejas & RO POINT custom machines. Multi-stage RO+UV+UF+Alkaline purification.
              </p>
            </div>
            <Link
              to="/domestic-ro"
              className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-fit group"
            >
              <span>View All Domestic Purifiers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProductGrid products={domesticProducts} />
        </div>
      </section>

      {/* 6. Physical Store Visit Experience & Map Direction Invitation */}
      <StoreVisitSection />

      {/* 7. Commercial RO Plants Capacity Showcase (25 LPH to 10000 LPH) */}
      <CommercialPlantsSection />

      {/* 8. 100% Original Spare Parts Counter */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5 text-cyan-600" /> Genuine Spares Counter
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Original RO Spare Parts & Service Components
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Dow Filmtec membranes, 100% pure copper booster pumps, surge-proof SMPS, inline filters, and brass controllers.
              </p>
            </div>
            <Link
              to="/ro-parts"
              className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-fit group"
            >
              <span>View All RO Spare Parts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProductGrid products={spareParts} />
        </div>
      </section>

      {/* 9. Geysers & Water Heaters Preview */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5 text-amber-600" /> Winter Comfort
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Electric Geysers & Water Heaters
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Instant 3L and Storage 10L, 15L, 25L with 5-star rating and titanium glassline tank.
              </p>
            </div>
            <Link
              to="/geyser"
              className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-fit group"
            >
              <span>View All Geysers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProductGrid products={topGeysers} columns={3} />
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" /> Customer Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Got Questions on Water TDS & Purifier Models?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Here are direct answers from Raju & Ajahar to help you choose the right machine for your water.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.slice(0, 5).map((faq) => (
              <details
                key={faq.id}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 transition-all open:bg-sky-50/50 open:border-sky-200 cursor-pointer"
              >
                <summary className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full bg-white group-open:rotate-180 transition-transform shadow-2xs text-sky-600 shrink-0 ml-3">
                    ↓
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-sky-100 text-slate-800 hover:text-sky-800 rounded-xl font-bold text-xs transition-colors"
            >
              <span>View All Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final Store Visit CTA Bar */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black">
                Ready to Visit RO POINT Showroom in Chomu?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {BUSINESS_INFO.address}. Open 7 days a week from 8:00 AM to 9:00 PM.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 border border-white/20"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Raju ({BUSINESS_INFO.primaryPhone})</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
