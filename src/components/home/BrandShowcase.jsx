import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';

export default function BrandShowcase() {
  const brands = [
    {
      name: 'KENT RO',
      tagline: 'Mineral ROTM Technology',
      desc: 'Grand Plus, Prime, Supreme with In-tank UV disinfection.',
      models: 'Kent Grand, Kent Prime, Kent Elegant',
      badge: 'Authorized Stock',
      link: '/products?brand=KENT',
      color: 'from-blue-600 to-sky-700'
    },
    {
      name: 'AQUAGUARD',
      tagline: 'Active Copper & Zinc Booster',
      desc: 'Eureka Forbes Marvel & Enhance models with Taste Adjuster (MTDS).',
      models: 'Marvel, Enhance, Blaze',
      badge: 'Original Eureka',
      link: '/products?brand=Aquaguard',
      color: 'from-slate-900 to-sky-950'
    },
    {
      name: 'LIVPURE',
      tagline: '7-Stage Mineralizer Purity',
      desc: 'Glo Pro & Platino with insect-proof tanks and high sediment filters.',
      models: 'Glo Pro, Bolt, Platino',
      badge: 'Best Value',
      link: '/products?brand=Livpure',
      color: 'from-indigo-700 to-blue-800'
    },
    {
      name: 'AQUA TEJAS',
      tagline: 'Copper Alkaline 8.5 pH Mineral',
      desc: 'Traditional tamra-jal infusion with 12L high-capacity storage.',
      models: 'Copper Alkaline, Zinc Pro',
      badge: 'Alkaline Special',
      link: '/products?brand=Aqua+Tejas',
      color: 'from-amber-600 to-rose-700'
    },
    {
      name: 'RO POINT SPECIAL',
      tagline: 'Engineered for High Borewell TDS',
      desc: 'Custom built for Chomu & Rajasthan groundwater up to 2500+ PPM TDS.',
      models: 'Aqua Pure 12L, Smart Copper',
      badge: 'Local Borewell King',
      link: '/products?brand=RO+POINT',
      color: 'from-sky-700 to-cyan-800'
    },
    {
      name: 'COMMERCIAL PLANTS',
      tagline: '25 LPH up to 10,000 LPH',
      desc: 'Stainless steel skids with high-pressure vertical pumps for schools & factories.',
      models: '25, 50, 100, 250, 500, 1000 LPH',
      badge: 'Heavy Industrial',
      link: '/commercial-ro',
      color: 'from-slate-800 to-indigo-950'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Leading Water Purifier Brands
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              All Major Brands Available Under One Roof
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Visit our Chomu showroom to compare machines side-by-side, test purified water taste, and get honest technical advice.
            </p>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 w-fit group"
          >
            <span>Browse All Machines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group relative rounded-2xl border border-slate-200 hover:border-sky-300 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                    {b.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                    Available in Store →
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs font-bold text-sky-700 mt-0.5">{b.tagline}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>

                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block">Popular Models:</span>
                  <span className="text-slate-600">{b.models}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  to={b.link}
                  className="w-full py-2 px-3 bg-slate-50 hover:bg-sky-600 text-slate-800 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-between group-hover:bg-sky-600 group-hover:text-white"
                >
                  <span>Explore {b.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
