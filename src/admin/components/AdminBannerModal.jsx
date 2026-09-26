import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminBannerModal({ isOpen, onClose, banner = null }) {
  const { addBanner, updateBanner } = useApp();

  const isEditing = Boolean(banner);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    offerText: '',
    buttonText: 'Claim Navratri Offer',
    buttonLink: '/offers',
    image: '',
    badge: '🔥 Festive Bumper Offer',
    order: 1,
    active: true
  });

  useEffect(() => {
    if (banner) {
      setFormData({
        title: banner.title || '',
        subtitle: banner.subtitle || '',
        offerText: banner.offerText || '',
        buttonText: banner.buttonText || 'Claim Offer',
        buttonLink: banner.buttonLink || '/offers',
        image: banner.image || '',
        badge: banner.badge || '🔥 Special Offer',
        order: banner.order || 1,
        active: banner.active !== undefined ? banner.active : true
      });
    } else {
      setFormData({
        title: 'Navratri Special Offer',
        subtitle: 'Buy Domestic RO & Get Special Gifts',
        offerText: '🎁 Free Electronic Gas Chulha for selected customers on Domestic RO purchase! Limited period offer.',
        buttonText: 'Claim Offer on WhatsApp',
        buttonLink: '/offers',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=80',
        badge: '🔥 Navratri Dhamaka',
        order: 1,
        active: true
      });
    }
  }, [banner, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateBanner(banner.id, formData);
    } else {
      addBanner(formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-5 text-center">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl text-left overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
          <div className="bg-slate-900 p-5 text-white flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold">
              {isEditing ? 'Edit Promotional Banner' : 'Add New Home Page Banner'}
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Banner Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Navratri Special Offer"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Subtitle *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Buy Domestic RO & Get Special Gifts"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Offer Details Text *
              </label>
              <textarea
                rows={2}
                required
                placeholder="e.g. Special Customer Offer: Electronic Gas Chulha Free"
                value={formData.offerText}
                onChange={(e) => setFormData({ ...formData, offerText: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Button Text
                </label>
                <input
                  type="text"
                  value={formData.buttonText}
                  onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Button Link
                </label>
                <input
                  type="text"
                  value={formData.buttonLink}
                  onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Banner Background Image URL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://... or /logo.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Display Order
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="rounded text-sky-600 focus:ring-sky-500"
                />
                <span>Active (Display on Home Page Carousel)</span>
              </label>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Save Banner</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
