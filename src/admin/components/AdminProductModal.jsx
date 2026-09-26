import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Image as ImageIcon, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminProductModal({ isOpen, onClose, product = null }) {
  const { addProduct, updateProduct, categories } = useApp();

  const isEditing = Boolean(product);

  const [formData, setFormData] = useState({
    name: '',
    productCode: '',
    category: 'Domestic RO',
    subcategory: '',
    brand: 'RO POINT',
    price: 9999,
    discountPrice: 7499,
    stock: 10,
    capacity: '12 Litres Storage',
    warranty: '1 Year Warranty',
    description: '',
    featuresText: '',
    specsText: '',
    imageUrls: [''],
    offer: '',
    status: 'In Stock'
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        productCode: product.productCode || '',
        category: product.category || 'Domestic RO',
        subcategory: product.subcategory || '',
        brand: product.brand || 'RO POINT',
        price: product.price || 0,
        discountPrice: product.discountPrice || product.price || 0,
        stock: product.stock !== undefined ? product.stock : 10,
        capacity: product.capacity || '',
        warranty: product.warranty || '1 Year Warranty',
        description: product.description || '',
        featuresText: Array.isArray(product.features) ? product.features.join('\n') : '',
        specsText: product.specifications
          ? Object.entries(product.specifications)
              .map(([k, v]) => `${k}: ${v}`)
              .join('\n')
          : '',
        imageUrls: product.images && product.images.length > 0 ? product.images : [''],
        offer: product.offer || '',
        status: product.status || 'In Stock'
      });
    } else {
      setFormData({
        name: '',
        productCode: `ROP-${Math.floor(100 + Math.random() * 900)}`,
        category: 'Domestic RO',
        subcategory: 'RO + UV',
        brand: 'RO POINT',
        price: 12000,
        discountPrice: 8499,
        stock: 15,
        capacity: '12 Litres',
        warranty: '1 Year Comprehensive Warranty',
        description: 'High-grade water purification system engineered for Rajasthan groundwater.',
        featuresText: 'Multi-stage RO + UV disinfection\nCopper & Alkaline Mineralization\nHigh Rejection 80 GPD Membrane',
        specsText: 'Purification Technology: RO + UV + UF\nStorage Capacity: 12 Litres\nMembrane: 80 GPD\nInput TDS: Up to 2000 PPM',
        imageUrls: ['https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80'],
        offer: 'Navratri Special Gift Eligible',
        status: 'In Stock'
      });
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleImageUrlChange = (idx, val) => {
    const next = [...formData.imageUrls];
    next[idx] = val;
    setFormData({ ...formData, imageUrls: next });
  };

  const addImageField = () => {
    setFormData({ ...formData, imageUrls: [...formData.imageUrls, ''] });
  };

  const removeImageField = (idx) => {
    if (formData.imageUrls.length <= 1) return;
    const next = formData.imageUrls.filter((_, i) => i !== idx);
    setFormData({ ...formData, imageUrls: next });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clean features
    const features = formData.featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    // Clean specs
    const specifications = {};
    formData.specsText.split('\n').forEach((line) => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join(':').trim();
        if (key && val) specifications[key] = val;
      }
    });

    // Clean images
    const validImages = formData.imageUrls.map((s) => s.trim()).filter(Boolean);
    const finalImages =
      validImages.length > 0
        ? validImages
        : ['https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80'];

    const priceNum = parseFloat(formData.price) || 0;
    const discPriceNum = parseFloat(formData.discountPrice) || priceNum;
    const discountPercent =
      priceNum > discPriceNum
        ? Math.round(((priceNum - discPriceNum) / priceNum) * 100)
        : 0;

    const payload = {
      name: formData.name,
      productCode: formData.productCode,
      category: formData.category,
      subcategory: formData.subcategory,
      brand: formData.brand,
      price: priceNum,
      discountPrice: discPriceNum,
      discountPercentage: discountPercent,
      stock: parseInt(formData.stock) || 0,
      capacity: formData.capacity,
      warranty: formData.warranty,
      description: formData.description,
      features,
      specifications,
      images: finalImages,
      offer: formData.offer,
      status: formData.status
    };

    if (isEditing) {
      updateProduct(product.id, payload);
    } else {
      addProduct(payload);
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
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl text-left overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-900 p-5 text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {isEditing ? `Edit Product: ${product.name}` : 'Add New Water Purifier / Spare Product'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Changes will appear instantly on the public website.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Row 1: Name and Code */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. RO Point Aqua Pure Multi-Stage RO"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. ROP-DOM-001"
                  value={formData.productCode}
                  onChange={(e) => setFormData({ ...formData, productCode: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Row 2: Category, Subcategory, Brand */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none font-semibold text-slate-800"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="RO Accessories">RO Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subcategory / Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. RO+UV, 50 LPH, 80 GPD Membrane"
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 3: Prices & Stock */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  MRP Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-700 mb-1">
                  Discounted Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.discountPrice}
                  onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none font-bold text-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Available Stock
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
            </div>

            {/* Row 4: Capacity & Warranty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Capacity / Flow Rate
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12 Litres / 50 LPH / 80 GPD"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Warranty Info
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 Year Comprehensive Warranty"
                  value={formData.warranty}
                  onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 5: Festive Offer Badge */}
            <div>
              <label className="block text-xs font-bold text-amber-800 mb-1">
                Special Offer / Festival Tag (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Navratri Special Gift Eligible (Electronic Gas Chulha Offer!)"
                value={formData.offer}
                onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-amber-50/50 border border-amber-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none text-amber-900"
              />
            </div>

            {/* Row 6: Image URLs */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700">
                  Product Image URLs (Local or Online)
                </label>
                <button
                  type="button"
                  onClick={addImageField}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Another Image
                </button>
              </div>

              {formData.imageUrls.map((url, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="https://... or /logo.jpg"
                    value={url}
                    onChange={(e) => handleImageUrlChange(idx, e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                  />
                  {formData.imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(idx)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Description
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none"
              />
            </div>

            {/* Features (One per line) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Key Features (Enter each feature on a new line)
              </label>
              <textarea
                rows={3}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                value={formData.featuresText}
                onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none font-mono"
              />
            </div>

            {/* Specifications (Key: Value per line) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Technical Specifications (Format: Key: Value on each line)
              </label>
              <textarea
                rows={3}
                placeholder="Technology: RO + UV + UF&#10;Membrane: 80 GPD&#10;Power: 24V DC"
                value={formData.specsText}
                onChange={(e) => setFormData({ ...formData, specsText: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none resize-none font-mono"
              />
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>{isEditing ? 'Save Product Changes' : 'Publish Product to Store'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
