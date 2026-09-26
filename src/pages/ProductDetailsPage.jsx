import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingCart,
  Zap,
  MessageCircle,
  Share2,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Wrench,
  Clock,
  MapPin,
  ChevronRight,
  Phone,
  Droplets,
  Layers,
  ArrowRight,
  Check
} from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SafeImage from '../components/common/SafeImage.jsx';
import { useApp } from '../context/AppContext.jsx';
import { BUSINESS_INFO } from '../data/initialData.js';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    openOrderModal,
    showToast
  } = useApp();

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  // Find product
  const product = products.find((p) => p.slug === slug);

  // If not found
  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-slate-800">Product Not Found</h2>
        <p className="text-base text-slate-500 mt-2 max-w-md">
          The purifier or spare part you are looking for is currently unavailable or has been moved.
        </p>
        <Link
          to="/products"
          className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-xl text-sm font-bold shadow hover:bg-sky-700 transition-all"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);
  const price = product.discountPrice || product.price;
  const originalPrice = product.price;
  const hasDiscount = originalPrice > price;
  const discountPercent =
    product.discountPercentage ||
    (hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);
  const savings = originalPrice - price;

  // Related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // WhatsApp Pre-filled text
  const waEnquiryText = encodeURIComponent(
    `Hello RO POINT (Raju / Ajahar)!
I am looking at *${product.name}* (Price: ₹${price.toLocaleString('en-IN')}).
Please confirm delivery and installation at my location in Chomu/Jaipur.`
  );
  const waEnquiryUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${waEnquiryText}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on RO POINT Chomu`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Amazon/Flipkart Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-sky-600">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            to={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-sky-600 font-medium"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold truncate max-w-sm">{product.name}</span>
        </div>

        {/* Main Product Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ================= LEFT: FLIPKART/AMAZON IMAGE GALLERY (5 COLS) ================= */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                
                {/* Thumbnails Strip */}
                <div className="flex sm:flex-col gap-2.5 order-2 sm:order-1 overflow-x-auto sm:overflow-visible w-full sm:w-20 shrink-0">
                  {product.images?.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl p-1 bg-white border-2 transition-all overflow-hidden shrink-0 ${
                        activeImgIndex === idx
                          ? 'border-sky-600 shadow-md scale-102'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <SafeImage
                        src={img}
                        alt={`Angle ${idx + 1}`}
                        category={product.category}
                        subcategory={product.subcategory}
                        brand={product.brand}
                        className="w-full h-full rounded-lg"
                      />
                    </button>
                  ))}
                </div>

                {/* Primary Image View with Amazon Zoom Effect */}
                <div
                  className="relative aspect-square w-full rounded-2xl bg-white p-4 flex items-center justify-center border border-slate-200 overflow-hidden order-1 sm:order-2 cursor-crosshair group shadow-xs"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                  onMouseMove={handleMouseMove}
                >
                  <SafeImage
                    src={product.images[activeImgIndex] || product.images[0]}
                    alt={product.name}
                    category={product.category}
                    subcategory={product.subcategory}
                    brand={product.brand}
                    className="w-full h-full rounded-xl"
                    imgClassName={`w-full h-full object-contain transition-transform duration-200 ${
                      isZoomed ? 'scale-150' : 'scale-100'
                    }`}
                    style={
                      isZoomed
                        ? {
                            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                          }
                        : undefined
                    }
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                    {hasDiscount && (
                      <span className="px-3 py-1 rounded-md bg-rose-600 text-white text-xs font-black tracking-wide uppercase shadow-sm">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Wishlist & Share Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                      className={`p-2.5 rounded-full border shadow-xs transition-all ${
                        isLiked
                          ? 'bg-rose-50 border-rose-200 text-rose-600'
                          : 'bg-white/95 border-slate-200 text-slate-500 hover:text-rose-600'
                      }`}
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-600' : ''}`} />
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="p-2.5 rounded-full bg-white/95 border border-slate-200 text-slate-500 hover:text-sky-600 shadow-xs transition-colors"
                      title="Share Product"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Zoom Hint Indicator */}
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white/90 px-2 py-1 rounded-md border border-slate-200 pointer-events-none">
                    🔍 Hover to Zoom
                  </div>
                </div>
              </div>

              {/* Flipkart Style High-Impact Action Buttons Under Image */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => addToCart(product, quantity)}
                  className="py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4 fill-slate-950" />
                  <span>ADD TO CART</span>
                </button>

                <button
                  type="button"
                  onClick={() => openOrderModal(product)}
                  className="py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>BUY NOW</span>
                </button>
              </div>

              {/* WhatsApp Direct Enquiry Button */}
              <a
                href={waEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire or Order on WhatsApp</span>
              </a>
            </div>

            {/* ================= RIGHT: AMAZON DETAILS & BUY BOX (7 COLS) ================= */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand Store Link & Title */}
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  {product.brand} AUTHORIZED STORE
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug mt-3">
                  {product.name}
                </h1>

                {/* Ratings & Code */}
                <div className="flex items-center gap-3 mt-3 flex-wrap text-sm">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-600 text-white text-xs font-black shadow-2xs">
                    <span>{product.rating || 4.9}</span>
                    <Star className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span className="font-semibold text-sky-700 hover:underline cursor-pointer">
                    {product.reviewsCount || 42} Verified Ratings
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500 font-mono text-xs">
                    Model: {product.productCode || 'ROP-001'}
                  </span>
                </div>
              </div>

              {/* Amazon Pricing Section (Large Bold Typography) */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                  {hasDiscount && (
                    <span className="text-base text-slate-400 line-through">
                      M.R.P.: ₹{originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {hasDiscount && (
                    <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                {hasDiscount && (
                  <p className="text-sm font-bold text-emerald-700">
                    You Save: ₹{savings.toLocaleString('en-IN')} ({discountPercent}%)
                  </p>
                )}

                <p className="text-xs text-slate-500">
                  Inclusive of all taxes • Free Doorstep Installation in Chomu
                </p>
              </div>

              {/* Flipkart / Amazon Trust Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <Truck className="w-5 h-5 text-sky-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Free Delivery</span>
                  <span className="text-[11px] text-slate-500">Chomu & Jaipur</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <Wrench className="w-5 h-5 text-emerald-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Free Installation</span>
                  <span className="text-[11px] text-slate-500">By Raju / Ajahar</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">1 Year Warranty</span>
                  <span className="text-[11px] text-slate-500">100% Genuine</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <Droplets className="w-5 h-5 text-cyan-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Free TDS Test</span>
                  <span className="text-[11px] text-slate-500">On-site audit</span>
                </div>
              </div>

              {/* Key Features / Highlights */}
              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900">
                  Key Features & Highlights
                </h3>
                <ul className="space-y-2">
                  {product.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Specifications Table (Readable 14px Font) */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-extrabold text-slate-900">
                  Technical Specifications
                </h3>
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-sm">
                  {Object.entries(product.specifications || {}).map(([key, val], idx) => (
                    <div
                      key={key}
                      className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 ${
                        idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                      }`}
                    >
                      <span className="font-bold text-slate-700">{key}</span>
                      <span className="sm:col-span-2 text-slate-900 font-semibold">{val}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/70">
                    <span className="font-bold text-slate-700">Warranty</span>
                    <span className="sm:col-span-2 text-slate-900 font-semibold">{product.warranty || '1 Year Comprehensive Warranty'}</span>
                  </div>
                </div>
              </div>

              {/* Physical Showroom Visit Callout */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-sky-950">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Want to see this machine live before buying?</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Visit our showroom at <strong>{BUSINESS_INFO.address}</strong>. Call Raju at <strong>{BUSINESS_INFO.primaryPhone}</strong> or Ajahar at <strong>{BUSINESS_INFO.secondaryPhone}</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-black text-slate-900">
                Similar Products You May Like
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Explore more options in {product.category}
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
