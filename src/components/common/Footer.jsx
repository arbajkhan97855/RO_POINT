import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Truck,
  Wrench,
  Clock,
  Sparkles,
  Lock,
  ChevronRight,
  Droplets
} from 'lucide-react';
import BrandLogo from '../../assets/BrandLogo.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      {/* Trust & Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Genuine Spares</h4>
              <p className="text-xs text-slate-400 mt-0.5">Original membranes, pumps & filters guaranteed.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Fast Local Delivery</h4>
              <p className="text-xs text-slate-400 mt-0.5">Prompt supply in Chomu, Jaipur, Renwal & nearby.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Expert Technicians</h4>
              <p className="text-xs text-slate-400 mt-0.5">Domestic RO & heavy 25-10000 LPH plant installation.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Free Water TDS Testing</h4>
              <p className="text-xs text-slate-400 mt-0.5">Know your borewell water TDS before purchase.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Company Brief & Owners */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="default" invert={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              <strong>RO POINT</strong> is your trusted one-stop water purification hub in Chomu, Jaipur.
              We specialize in Domestic RO purifiers, Commercial & Industrial RO Plants (25 LPH to 10,000 LPH),
              heavy energy-efficient geysers, and authentic wholesale RO spare parts.
            </p>

            {/* Business Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[11px] text-sky-400 font-semibold block uppercase tracking-wider">
                  Sales & Domestic RO
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">Raju</span>
                <a
                  href="tel:9660063962"
                  className="text-xs text-slate-300 hover:text-sky-300 font-mono flex items-center gap-1.5 mt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 9660063962
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[11px] text-sky-400 font-semibold block uppercase tracking-wider">
                  Commercial Plants & Service
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">Ajahar</span>
                <a
                  href="tel:7792901409"
                  className="text-xs text-slate-300 hover:text-sky-300 font-mono flex items-center gap-1.5 mt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 7792901409
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> All Products
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Navratri Offers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> About RO POINT
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> FAQs & Water Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/domestic-ro" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Domestic RO
                </Link>
              </li>
              <li>
                <Link to="/commercial-ro" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Commercial RO Plants
                </Link>
              </li>
              <li>
                <Link to="/geyser" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Electric Geysers
                </Link>
              </li>
              <li>
                <Link to="/ro-parts" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> RO Spare Parts
                </Link>
              </li>
              <li>
                <Link to="/products?category=RO+Accessories" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> RO Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Address & Visiting Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              Store Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-snug text-slate-300">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-slate-300">Mon - Sun: 8:00 AM – 9:00 PM</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <p className="text-slate-300">{BUSINESS_INFO.email}</p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  Order On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Policy & Admin Access Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/shipping" className="hover:text-slate-400 transition-colors">
              Shipping & Delivery
            </Link>
            <span>•</span>
            <Link to="/returns" className="hover:text-slate-400 transition-colors">
              Return & Replacement
            </Link>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <p className="text-slate-400 text-center md:text-right">
              © {new Date().getFullYear()} <strong>RO POINT</strong>. All rights reserved.
            </p>

            {/* Required Discreet Admin Access Button at the very bottom right */}
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:text-sky-300 bg-slate-800/60 hover:bg-slate-800 rounded-md border border-slate-700/60 transition-colors shrink-0"
              title="RO Point Administration"
            >
              <Lock className="w-3 h-3 text-sky-400" />
              <span>🔐 RO Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
