import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Flame,
  Clock
} from 'lucide-react';
import BrandLogo from '../../assets/BrandLogo.jsx';
import SafeImage from './SafeImage.jsx';
import { useApp } from '../../context/AppContext.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function Navbar() {
  const {
    cartCount,
    cartTotal,
    wishlist,
    setCartDrawerOpen,
    setWishlistModalOpen,
    products,
    categories,
    openOrderModal
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle sticky navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSuggestions([]);
  }, [location.pathname]);

  // Live search suggestions
  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const q = searchTerm.toLowerCase();
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.subcategory?.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.productCode?.toLowerCase().includes(q)
        )
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, products]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSuggestions([]);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Domestic RO', path: '/domestic-ro' },
    { name: 'Commercial Plants', path: '/commercial-ro' },
    { name: 'Geyser', path: '/geyser' },
    { name: 'RO Parts', path: '/ro-parts' },
    { name: 'All Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Visit Store', path: '/contact', highlight: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 text-white text-xs py-1.5 px-4 border-b border-sky-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[10px]">
              <MapPin className="w-3 h-3 mr-0.5" /> CHOMU SHOWROOM
            </span>
            <span className="text-sky-100 font-medium">
              Visit Us at Dholi Mandi, Renwal Road • Authorized Kent, Aquaguard, Livpure & Aqua Tejas Dealer
            </span>
          </div>

          <div className="flex items-center gap-4 text-sky-200 text-[11px]">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Raju: <strong>{BUSINESS_INFO.primaryPhone}</strong></span>
            </a>
            <span className="hidden md:inline text-sky-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="hidden md:flex hover:text-white items-center gap-1 transition-colors"
            >
              <span>Ajahar: <strong>{BUSINESS_INFO.secondaryPhone}</strong></span>
            </a>
            <span className="hidden lg:inline text-sky-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-amber-400" /> Open 8 AM – 9 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-3 shadow-sm'
        } border-b border-slate-200/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <BrandLogo />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6 relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search RO, 25-1000 LPH Plant, Geyser, Membrane, Pump..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 text-xs sm:text-sm bg-slate-100/90 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all text-slate-800 placeholder-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Autocomplete Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 bg-slate-50">
                  Matching Products & Spares
                </div>
                {suggestions.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.slug}`}
                    onClick={() => {
                      setSuggestions([]);
                      setSearchTerm('');
                    }}
                    className="flex items-center gap-3 p-2.5 hover:bg-sky-50 transition-colors border-b border-slate-100 last:border-0"
                  >
                    <SafeImage
                      src={p.images?.[0]}
                      alt={p.name}
                      category={p.category}
                      subcategory={p.subcategory}
                      brand={p.brand}
                      className="w-10 h-10 rounded-lg bg-slate-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate">{p.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-sky-600 bg-sky-100/70 px-1.5 py-0.2 rounded font-medium">
                          {p.category}
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          ₹{(p.discountPrice || p.price).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                <button
                  onClick={handleSearchSubmit}
                  className="w-full p-2 text-center text-xs font-semibold text-sky-600 hover:bg-sky-100/50 bg-sky-50 transition-colors"
                >
                  View all results for "{searchTerm}" →
                </button>
              </div>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-100 rounded-full transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello RO Point! I would like to enquire about your Water Purifiers, Commercial RO Plants and Spare Parts in Chomu.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Wishlist Button */}
            <button
              onClick={() => setWishlistModalOpen(true)}
              className="p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button with Total */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-900 rounded-full border border-sky-200 transition-colors relative group"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-sky-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col text-left leading-none pr-1">
                <span className="text-[10px] text-slate-500 font-medium">Cart</span>
                <span className="text-xs font-bold text-sky-800">
                  ₹{cartTotal > 0 ? cartTotal.toLocaleString('en-IN') : '0'}
                </span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="lg:hidden px-4 pt-2 pb-3 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search Purifiers, Plants, Geysers, Spares..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-9 py-2 text-sm bg-slate-100 border border-slate-200 focus:border-sky-500 rounded-full focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
        )}

        {/* Secondary Category / Desktop Navigation Bar */}
        <nav className="hidden lg:block border-t border-slate-100 bg-slate-50/70 mt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-1 py-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-sm'
                        : link.highlight
                        ? 'text-amber-600 hover:bg-amber-50 hover:text-amber-700'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-white'
                    }`
                  }
                >
                  {link.highlight && <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Quick Consultation Callout */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Need RO Advice?</span>
              <button
                onClick={() => openOrderModal()}
                className="text-sky-700 hover:text-sky-800 font-bold hover:underline"
              >
                Instant Enquiry
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <BrandLogo size="small" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-1 flex-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Store Menu
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-sky-600 text-white'
                        : link.highlight
                        ? 'text-amber-700 bg-amber-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />}
                    {link.name}
                  </span>
                  {link.highlight && (
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">
                      Special Offer
                    </span>
                  )}
                </NavLink>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Direct Helpline
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="flex items-center gap-3 p-3 bg-sky-50 text-sky-900 rounded-xl hover:bg-sky-100 font-semibold text-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <div>
                    <p className="text-[11px] text-slate-500">Sales & Domestic RO</p>
                    <p className="font-bold text-slate-800">Raju: {BUSINESS_INFO.primaryPhone}</p>
                  </div>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                  className="flex items-center gap-3 p-3 bg-sky-50 text-sky-900 rounded-xl hover:bg-sky-100 font-semibold text-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <div>
                    <p className="text-[11px] text-slate-500">Commercial Plants & Service</p>
                    <p className="font-bold text-slate-800">Ajahar: {BUSINESS_INFO.secondaryPhone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Address Footer in Drawer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-slate-500 text-[11px]">
              <p className="font-semibold text-slate-700 mb-0.5">RO POINT Chomu</p>
              <p className="line-clamp-2">
                Hanuman Ji Ke Mandir Ke Samne, Dholi Mandi, Renwal Road, Chomu, Jaipur – 303702
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
