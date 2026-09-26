import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShoppingCart,
  MessageCircle,
  Star,
  Check,
  Zap,
  ShieldCheck,
  Truck,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';
import SafeImage from '../common/SafeImage.jsx';

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    openOrderModal,
    getProductWhatsAppUrl
  } = useApp();

  const isLiked = isInWishlist(product.id);
  const price = product.discountPrice || product.price;
  const originalPrice = product.price;
  const hasDiscount = originalPrice > price;
  const discountPercent =
    product.discountPercentage ||
    (hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Section: Badges & Wishlist */}
      <div className="relative p-3 pb-0 bg-white">
        <div className="flex items-center justify-between gap-2 mb-1">
          {hasDiscount ? (
            <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-black tracking-wide uppercase shadow-xs">
              {discountPercent}% OFF
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-xs font-bold">
              {product.brand || 'RO POINT'}
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`p-2 rounded-full border transition-all ${
              isLiked
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white/90 border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200'
            }`}
            title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600' : ''}`} />
          </button>
        </div>

        {/* Amazon/Flipkart Image Container */}
        <Link
          to={`/product/${product.slug}`}
          className="relative block w-full aspect-square p-3 overflow-hidden bg-white flex items-center justify-center"
        >
          <SafeImage
            src={product.images?.[0]}
            alt={product.name}
            category={product.category}
            subcategory={product.subcategory}
            brand={product.brand}
            className="w-full h-full rounded-xl bg-white"
            imgClassName="group-hover:scale-108 transition-transform duration-500 object-contain"
          />

          {/* Flipkart Assured Stamp */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-sky-900/90 text-white text-[11px] font-bold tracking-tight shadow-xs flex items-center gap-1 backdrop-blur-xs">
            <Check className="w-3 h-3 text-sky-400 stroke-[3]" />
            <span>RO POINT Assured</span>
          </div>
        </Link>
      </div>

      {/* Middle Section: Product Details with Large, Readable Typography */}
      <div className="p-4 pt-2 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Brand & Subcategory */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1">
            <span className="uppercase text-sky-700 font-bold tracking-wider">
              {product.brand}
            </span>
            <span className="truncate max-w-[130px] text-slate-400">
              {product.capacity || product.subcategory}
            </span>
          </div>

          {/* Product Title (Amazon 16px Font) */}
          <Link
            to={`/product/${product.slug}`}
            className="block text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>

          {/* Flipkart / Amazon Star Rating Pill */}
          <div className="flex items-center gap-2 mt-2">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600 text-white text-xs font-extrabold shadow-2xs">
              <span>{product.rating || 4.8}</span>
              <Star className="w-3 h-3 fill-white" />
            </div>
            <span className="text-xs font-semibold text-slate-500">
              ({product.reviewsCount || 42} ratings)
            </span>
          </div>

          {/* Pricing Block (Amazon Bold Layout) */}
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-baseline gap-2 flex-wrap">
            <span className="text-xl sm:text-2xl font-black text-slate-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
            {hasDiscount && (
              <span className="text-xs sm:text-sm text-slate-400 line-through">
                M.R.P: ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {hasDiscount && (
              <span className="text-xs font-black text-emerald-600">
                ({discountPercent}% off)
              </span>
            )}
          </div>

          {/* Delivery & Local Guarantee Notice */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
            <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-700">Free Delivery in Chomu</span>
            <span className="text-slate-400">• Same Day</span>
          </div>
        </div>

        {/* Action Buttons: Amazon Amber Buy Now & Add to Cart */}
        <div className="pt-2 grid grid-cols-2 gap-2">
          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-full py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            title="Add to Cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>

          {/* Amazon Orange Buy Now (WhatsApp Order) */}
          <button
            type="button"
            onClick={() => openOrderModal(product)}
            className="w-full py-2.5 px-2 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl text-xs font-black shadow-xs transition-all flex items-center justify-center gap-1.5"
            title="Buy Now / WhatsApp Enquiry"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
