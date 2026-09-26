import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import SafeImage from '../common/SafeImage.jsx';
import { useApp } from '../../context/AppContext.jsx';

export default function WishlistModal() {
  const {
    wishlist,
    wishlistModalOpen,
    setWishlistModalOpen,
    toggleWishlist,
    addToCart,
    openOrderModal
  } = useApp();

  if (!wishlistModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setWishlistModalOpen(false)}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl text-left overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="text-base font-bold">Saved Items ({wishlist.length})</h3>
            </div>
            <button
              onClick={() => setWishlistModalOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
            {wishlist.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <Heart className="w-12 h-12 text-slate-300 mx-auto stroke-1" />
                <p className="font-semibold text-slate-700 text-sm">No items in your wishlist</p>
                <p className="text-xs text-slate-400">
                  Tap the heart icon on any water purifier or spare part to save it for later.
                </p>
              </div>
            ) : (
              wishlist.map((product) => {
                const price = product.discountPrice || product.price;
                return (
                  <div key={product.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3">
                    <SafeImage
                      src={product.images?.[0]}
                      alt={product.name}
                      category={product.category}
                      subcategory={product.subcategory}
                      brand={product.brand}
                      className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs font-bold text-sky-700 mt-0.5">
                        ₹{price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product);
                        }}
                        className="px-2.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => setWishlistModalOpen(false)}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
