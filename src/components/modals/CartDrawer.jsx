import React from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Truck
} from 'lucide-react';
import SafeImage from '../common/SafeImage.jsx';
import { useApp } from '../../context/AppContext.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function CartDrawer() {
  const {
    cart,
    cartDrawerOpen,
    setCartDrawerOpen,
    removeFromCart,
    updateCartQty,
    clearCart,
    cartTotal,
    openOrderModal
  } = useApp();

  if (!cartDrawerOpen) return null;

  const handleCheckout = () => {
    setCartDrawerOpen(false);
    openOrderModal(null); // Triggers cart checkout
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-sky-900 text-white">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-sky-300" />
              <h2 className="text-base font-bold">Shopping Cart ({cart.length})</h2>
            </div>
            <button
              onClick={() => setCartDrawerOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                  <ShoppingCart className="w-8 h-8 stroke-1" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Your Cart is Empty</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Explore our range of domestic purifiers, commercial RO plants, geysers, and authentic spare parts.
                  </p>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const product = item.product;
                const price = product.discountPrice || product.price;
                return (
                  <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-3.5 items-center">
                    <SafeImage
                      src={product.images?.[0]}
                      alt={product.name}
                      category={product.category}
                      subcategory={product.subcategory}
                      brand={product.brand}
                      className="w-16 h-16 rounded-xl border border-slate-100 bg-slate-50 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-sky-600 font-semibold uppercase">
                        {product.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                          ₹{price.toLocaleString('en-IN')}
                        </span>
                        {product.price > price && (
                          <span className="text-[11px] text-slate-400 line-through">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => updateCartQty(product.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQty(product.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span className="text-sm font-extrabold text-slate-900">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <Truck className="w-3.5 h-3.5" /> Local Delivery & Setup
                </span>
                <span className="font-bold text-emerald-700 uppercase text-[11px]">
                  Free in Chomu
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-800">Grand Total</span>
                <span className="text-lg font-black text-sky-700">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Checkout via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] text-slate-400 hover:text-rose-600 py-1 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
