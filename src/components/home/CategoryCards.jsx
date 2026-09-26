import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplets, Factory, Flame, Wrench, Shield, MapPin, Navigation } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import SafeImage from '../common/SafeImage.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function CategoryCards() {
  const { categories } = useApp();

  const getCategoryIcon = (slug) => {
    switch (slug) {
      case 'domestic-ro':
        return <Droplets className="w-5 h-5 text-sky-500" />;
      case 'commercial-ro':
        return <Factory className="w-5 h-5 text-indigo-500" />;
      case 'geyser':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'ro-parts':
        return <Wrench className="w-5 h-5 text-cyan-500" />;
      default:
        return <Shield className="w-5 h-5 text-sky-500" />;
    }
  };

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dholi Mandi Renwal Road Chomu Jaipur Rajasthan 303702'
  )}`;

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Complete Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore Our Product Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Domestic purifiers (Kent, Aquaguard, Livpure, Aqua Tejas), 25-10000 LPH plants, geysers, and original spare parts.
            </p>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-fit group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.slice(0, 4).map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Category Image Header using SafeImage */}
              <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                <SafeImage
                  src={cat.image}
                  alt={cat.name}
                  category={cat.name}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xs z-10">
                  {getCategoryIcon(cat.slug)}
                </div>
                <div className="absolute bottom-2.5 left-2.5 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                    {cat.itemCount || 'In Stock'}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-3">
                  <Link
                    to={cat.slug ? `/${cat.slug}` : `/products?category=${encodeURIComponent(cat.name)}`}
                    className="w-full py-2 px-3 bg-slate-50 hover:bg-sky-600 text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-between group-hover:bg-sky-600 group-hover:text-white"
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
