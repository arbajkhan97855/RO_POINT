import React, { useState, useEffect } from 'react';
import { X, MessageCircle, MapPin, User, Phone, CheckCircle, ShieldCheck, ShoppingBag } from 'lucide-react';
import SafeImage from '../common/SafeImage.jsx';
import { useApp } from '../../context/AppContext.jsx';
import { BUSINESS_INFO } from '../../data/initialData.js';

export default function OrderModal() {
  const { orderModalOpen, closeOrderModal, orderProduct, processOrderAndWhatsApp } = useApp();

  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    whatsapp: '',
    address: '',
    city: 'Chomu',
    pincode: '303702',
    quantity: 1,
    message: ''
  });

  const [useSameNumber, setUseSameNumber] = useState(true);

  useEffect(() => {
    if (orderModalOpen) {
      setFormData((prev) => ({
        ...prev,
        quantity: 1,
        message: orderProduct ? `Interested in ${orderProduct.name}. Please confirm availability and installation timing.` : ''
      }));
    }
  }, [orderModalOpen, orderProduct]);

  if (!orderModalOpen) return null;

  const price = orderProduct ? (orderProduct.discountPrice || orderProduct.price) : 0;
  const totalPrice = price * (formData.quantity || 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.mobile.trim() || !formData.address.trim()) {
      alert('Please fill in Customer Name, Mobile Number, and Delivery Address.');
      return;
    }

    const payload = {
      ...formData,
      whatsapp: useSameNumber ? formData.mobile : (formData.whatsapp || formData.mobile)
    };

    processOrderAndWhatsApp(payload, orderProduct);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={closeOrderModal}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl text-left overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-700 via-sky-800 to-blue-900 p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <ShoppingBag className="w-5 h-5 text-sky-200" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  {orderProduct ? 'Quick Order / WhatsApp Enquiry' : 'Place Store Order'}
                </h3>
                <p className="text-xs text-sky-200 mt-0.5">
                  Direct dispatch & installation by RO POINT Chomu
                </p>
              </div>
            </div>
            <button
              onClick={closeOrderModal}
              className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Summary Box if specific product */}
          {orderProduct && (
            <div className="p-4 bg-sky-50/70 border-b border-sky-100 flex items-center gap-3">
              <SafeImage
                src={orderProduct.images?.[0]}
                alt={orderProduct.name}
                category={orderProduct.category}
                subcategory={orderProduct.subcategory}
                brand={orderProduct.brand}
                className="w-16 h-16 rounded-xl border border-sky-200 bg-white shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider bg-sky-200/60 px-2 py-0.5 rounded">
                  {orderProduct.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-1">
                  {orderProduct.name}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm font-extrabold text-sky-700">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                  {orderProduct.price > price && (
                    <span className="text-xs text-slate-400 line-through">
                      ₹{orderProduct.price.toLocaleString('en-IN')}
                    </span>
                  )}
                  {orderProduct.capacity && (
                    <span className="text-[11px] text-slate-500 font-medium">
                      ({orderProduct.capacity})
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* WhatsApp checkbox */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                id="samePhone"
                checked={useSameNumber}
                onChange={(e) => setUseSameNumber(e.target.checked)}
                className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <label htmlFor="samePhone" className="cursor-pointer">
                WhatsApp number is same as mobile number
              </label>
            </div>

            {!useSameNumber && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="WhatsApp number"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                  <MessageCircle className="w-4 h-4 text-emerald-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Delivery Address *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Street / Colony / Landmark in Chomu or Jaipur"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none font-bold text-slate-800"
                >
                  {[1, 2, 3, 4, 5, 10].map((q) => (
                    <option key={q} value={q}>
                      {q} {q === 1 ? 'Unit' : 'Units'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Order Message / Special Instructions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="E.g. Need urgent installation, raw water TDS testing required..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none"
              />
            </div>

            {/* Order Price Summary */}
            {orderProduct && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500">Order Total ({formData.quantity} qty):</span>
                  <span className="block text-sm font-extrabold text-slate-900 mt-0.5">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center text-emerald-600 font-semibold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" /> Pay on Delivery / Setup
                  </span>
                  <p className="text-[10px] text-slate-500">Free site guidance</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm group"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm & Send Order via WhatsApp</span>
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                Sends order directly to shop WhatsApp: <strong>{BUSINESS_INFO.primaryPhone}</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
