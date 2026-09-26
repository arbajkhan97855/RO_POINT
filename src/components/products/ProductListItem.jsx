import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShoppingCart,
  Zap,
  Star,
  Check,
  Truck,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import SafeImage from '../common/SafeImage.jsx';

export default function ProductListItem({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    openOrderModal
  } = useApp();

  const isLiked = isInWishlist(product.id);
  const price = product.discountPrice || product.price;
  const originalPrice = product.price;
  const hasDiscount = originalPrice > price;
  const discountPercent =
    product.discountPercentage ||
    (hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-400 p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-5 items-center justify-between">
      {/* Left: Product Image */}
      <div className="relative w-full md:w-52 aspect-square rounded-xl bg-white border border-slate-100 p-3 shrink-0 flex items-center justify-center overflow-hidden">
        <Link to={`/product/${product.slug}`} className="w-full h-full block">
          <SafeImage
            src={product.images?.[0]}
            alt={product.name}
            category={product.category}
            subcategory={product.subcategory}
            brand={product.brand}
            className="w-full h-full rounded-lg bg-white"
            imgClassName="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {hasDiscount && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-rose-600 text-white text-[11px] font-black uppercase">
            {discountPercent}% OFF
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`absolute top-2 right-2 p-2 rounded-full border shadow-2xs transition-all ${
            isLiked
              ? 'bg-rose-50 border-rose-200 text-rose-600'
              : 'bg-white/90 border-slate-200 text-slate-400 hover:text-rose-600'
          }`}
          title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600' : ''}`} />
        </button>
      </div>

      {/* Center: Title, Brand, Ratings, Key Specs */}
      <div className="flex-1 min-w-0 space-y-2 text-left w-full">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
            {product.brand}
          </span>
          <span className="text-xs text-slate-400 font-semibold">•</span>
          <span className="text-xs text-slate-500 font-medium">{product.category}</span>
        </div>

        <Link
          to={`/product/${product.slug}`}
          className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2"
        >
          {product.name}
        </Link>

        {/* Rating Pill */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600 text-white text-xs font-black">
            <span>{product.rating || 4.8}</span>
            <Star className="w-3 h-3 fill-white" />
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            ({product.reviewsCount || 42} ratings)
          </span>
          <span className="text-xs text-slate-300">|</span>
          <span className="text-xs text-sky-700 font-bold flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-sky-500 stroke-[3]" />
            RO POINT Assured
          </span>
        </div>

        {/* Short Features / Capacity */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Delivery Tag */}
        <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
          <Truck className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-semibold text-slate-800">FREE Delivery in Chomu & Jaipur</span>
          <span className="text-slate-400">• Same-Day Installation Available</span>
        </div>
      </div>

      {/* Right: Pricing & Buttons (Amazon Buy Box) */}
      <div className="w-full md:w-56 md:border-l md:border-slate-100 md:pl-5 space-y-3 shrink-0 flex flex-col justify-between text-left md:text-right">
        <div>
          <div className="flex items-baseline gap-2 md:justify-end flex-wrap">
            <span className="text-2xl font-black text-slate-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
            {hasDiscount && (
              <span className="text-xs sm:text-sm text-slate-400 line-through">
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {hasDiscount && (
            <p className="text-xs font-black text-emerald-600">
              Save ₹{(originalPrice - price).toLocaleString('en-IN')} ({discountPercent}%)
            </p>
          )}
          <p className="text-[11px] text-slate-400 mt-0.5">Inclusive of all taxes</p>
        </div>

        {/* Buttons */}
        <div className="space-y-2 w-full">
          <button
            type="button"
            onClick={() => openOrderModal(product)}
            className="w-full py-2.5 px-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>BUY NOW</span>
          </button>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
