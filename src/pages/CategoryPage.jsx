import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Droplets,
  Factory,
  Flame,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { useApp } from '../context/AppContext.jsx';
import { BUSINESS_INFO } from '../data/initialData.js';

export default function CategoryPage({ targetCategory }) {
  const { products, openOrderModal } = useApp();
  const location = useLocation();

  // Determine category name from prop or route path
  const categoryName = useMemo(() => {
    if (targetCategory) return targetCategory;
    const path = location.pathname.toLowerCase();
    if (path.includes('domestic')) return 'Domestic RO';
    if (path.includes('commercial')) return 'Commercial RO Plants';
    if (path.includes('geyser')) return 'Geyser';
    if (path.includes('part') || path.includes('spare')) return 'RO Spare Parts';
    return 'Domestic RO';
  }, [targetCategory, location.pathname]);

  const [selectedSubcat, setSelectedSubcat] = useState('All');

  // Filter products for this specific category
  const categoryProducts = useMemo(() => {
    return products.filter((p) => p.category === categoryName);
  }, [products, categoryName]);

  // Extract subcategories
  const subcategories = useMemo(() => {
    const subs = Array.from(
      new Set(categoryProducts.map((p) => p.subcategory).filter(Boolean))
    );
    return ['All', ...subs];
  }, [categoryProducts]);

  // Final filtered list
  const filteredProducts = useMemo(() => {
    if (selectedSubcat === 'All') return categoryProducts;
    return categoryProducts.filter((p) => p.subcategory === selectedSubcat);
  }, [categoryProducts, selectedSubcat]);

  // Dynamic Category Header Content
  const categoryDetails = useMemo(() => {
    switch (categoryName) {
      case 'Domestic RO':
        return {
          title: 'Domestic RO Water Purifiers',
          subtitle: 'Pure, sweet, mineralized drinking water for your home and family.',
          badge: 'Home Water Solutions',
          icon: <Droplets className="w-6 h-6 text-sky-500" />,
          features: [
            'Handles high TDS borewell & tanker water up to 2500+ PPM',
            'Alkaline, Mineralizer & Copper infusion options',
            'Free Pre-Filter Bowl + Installation Kit with selected models',
            'Eligible for Navratri Special Electronic Gas Chulha gift!'
          ]
        };
      case 'Commercial RO Plants':
        return {
          title: 'Commercial & Industrial RO Plants',
          subtitle: 'Turnkey RO systems from 25 LPH to 10,000 LPH for institutions, factories, and schools.',
          badge: 'Heavy Engineering',
          icon: <Factory className="w-6 h-6 text-indigo-500" />,
          features: [
            'Capacities: 25 LPH, 50 LPH, 100 LPH, 250 LPH, 500 LPH, 1000 LPH to 10000 LPH',
            'Rigid Stainless Steel 304 skids & multistage vertical pumps',
            'FRP Sand & Activated Carbon pre-treatment columns',
            'Free on-site raw water testing and TDS evaluation in Chomu/Jaipur'
          ]
        };
      case 'Geyser':
        return {
          title: 'Electric Geysers & Water Heaters',
          subtitle: 'Instant & Storage water heaters with heavy glassline enamel tanks.',
          badge: 'Comfort Bathing',
          icon: <Flame className="w-6 h-6 text-amber-500" />,
          features: [
            'Available in 3L Instant, 10L, 15L & 25L Storage capacities',
            '5-Star energy efficiency rating with thick PUF insulation',
            'Hard water corrosion-proof magnesium anode rod',
            'Up to 5 years inner tank warranty'
          ]
        };
      case 'RO Spare Parts':
        return {
          title: 'Genuine RO Spare Parts & Accessories',
          subtitle: '100% authentic wholesale & retail spares for technicians and homeowners.',
          badge: 'Original Spares',
          icon: <Wrench className="w-6 h-6 text-cyan-500" />,
          features: [
            'Filmtec & RO Point 80/100 GPD high-rejection membranes',
            'Heavy pure copper booster pumps & 24V surge-proof SMPS',
            'Inline sediment, carbon, and alkaline filter cartridges',
            'Solenoid valves, brass TDS controllers, float valves & fittings'
          ]
        };
      default:
        return {
          title: categoryName,
          subtitle: 'Premium water purification products from RO POINT.',
          badge: 'RO POINT Store',
          icon: <Droplets className="w-6 h-6 text-sky-500" />,
          features: ['100% Quality Assurance', 'Expert local installation in Chomu']
        };
    }
  }, [categoryName]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Hero Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30">
              {categoryDetails.icon}
              <span>{categoryDetails.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              {categoryDetails.title}
            </h1>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-2xl">
              {categoryDetails.subtitle}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-sky-200">
              {categoryDetails.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Raju ({BUSINESS_INFO.primaryPhone})</span>
              </a>
              <button
                onClick={() => openOrderModal()}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all backdrop-blur-xs border border-white/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Enquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subcategories Filter Pills */}
        {subcategories.length > 2 && (
          <div className="mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Filter by Subcategory / Capacity:
            </span>
            <div className="flex flex-wrap gap-2">
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcat(sub)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    selectedSubcat === sub
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          title={`${categoryName} Models`}
          subtitle={`Showing ${filteredProducts.length} verified products available in Chomu`}
        />
      </div>
    </div>
  );
}
