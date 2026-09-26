import React from 'react';
import {
  ShieldCheck,
  Truck,
  Wrench,
  Droplets,
  Award,
  Headphones,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function TrustFeatures() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-sky-600" />,
      title: "100% Original Products",
      desc: "Authentic Dow Filmtec membranes, heavy copper pumps, and food-grade cartridges."
    },
    {
      icon: <Truck className="w-6 h-6 text-sky-600" />,
      title: "Fast Delivery in Chomu",
      desc: "Same-day or next-day prompt dispatch across Chomu, Jaipur, Renwal & nearby villages."
    },
    {
      icon: <Wrench className="w-6 h-6 text-sky-600" />,
      title: "Expert Installation & Repair",
      desc: "Skilled technicians for residential RO mounting, filter service & industrial skid assembly."
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-600" />,
      title: "Free Water TDS Testing",
      desc: "We test your borewell or tanker water TDS at your doorstep before recommending a system."
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white shadow-xs border border-slate-100 shrink-0">
                {f.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{f.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
