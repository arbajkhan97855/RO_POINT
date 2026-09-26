import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Package,
  Layers,
  Image as ImageIcon,
  Gift,
  ShoppingBag,
  Database,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  LogOut,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  MessageCircle,
  FileSpreadsheet,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import BrandLogo from '../../assets/BrandLogo.jsx';
import SafeImage from '../../components/common/SafeImage.jsx';
import AdminProductModal from '../components/AdminProductModal.jsx';
import AdminBannerModal from '../components/AdminBannerModal.jsx';
import AdminOfferModal from '../components/AdminOfferModal.jsx';
import AdminCategoryModal from '../components/AdminCategoryModal.jsx';
import DeleteConfirmModal from '../components/DeleteConfirmModal.jsx';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminDashboardPage() {
  const {
    isAdminLoggedIn,
    adminLogout,
    products,
    categories,
    banners,
    offers,
    orders,
    deleteProduct,
    deleteBanner,
    deleteOffer,
    deleteCategory,
    updateOrderStatus,
    resetToDefaultData,
    exportDatabase,
    importDatabase
  } = useApp();

  const navigate = useNavigate();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/admin/login');
    }
  }, [isAdminLoggedIn, navigate]);

  // Active Tab
  const [activeTab, setActiveTab] = useState('products');

  // Modal States
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Search in Products Tab
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Import JSON file input ref
  const fileInputRef = React.useRef(null);

  if (!isAdminLoggedIn) return null;

  // Stats calculation
  const domesticCount = products.filter((p) => p.category === 'Domestic RO').length;
  const commercialCount = products.filter((p) => p.category === 'Commercial RO Plants').length;
  const geyserCount = products.filter((p) => p.category === 'Geyser').length;
  const sparesCount = products.filter((p) => p.category === 'RO Spare Parts').length;
  const activeBannersCount = banners.filter((b) => b.active !== false).length;
  const activeOffersCount = offers.filter((o) => o.active !== false).length;

  // Filtered products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      (p.productCode && p.productCode.toLowerCase().includes(productSearch.toLowerCase())) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(productSearch.toLowerCase()));
    const matchesCat =
      selectedCategoryFilter === 'All' || p.category === selectedCategoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleOpenDelete = (type, item) => {
    setDeleteTarget({ type, item });
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    const { type, item } = deleteTarget;
    if (type === 'product') deleteProduct(item.id);
    if (type === 'banner') deleteBanner(item.id);
    if (type === 'offer') deleteOffer(item.id);
    if (type === 'category') deleteCategory(item.id);
    setDeleteTarget(null);
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        importDatabase(content);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BrandLogo size="small" invert={true} />
            <div className="hidden sm:block border-l border-slate-700 pl-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                RO POINT Admin Control
              </span>
              <span className="text-sm font-semibold text-slate-200">
                Chomu Store Management
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-xl text-xs font-bold transition-colors"
            >
              <span>View Public Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={adminLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white rounded-xl text-xs font-bold transition-all border border-rose-500/30"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="bg-slate-800 border-t border-slate-700/60 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1">
            {[
              { id: 'products', name: 'Products Catalog', icon: <Package className="w-4 h-4" />, count: products.length },
              { id: 'banners', name: 'Home Banners', icon: <ImageIcon className="w-4 h-4" />, count: activeBannersCount },
              { id: 'offers', name: 'Offers & Gifts', icon: <Gift className="w-4 h-4" />, count: offers.length },
              { id: 'categories', name: 'Categories', icon: <Layers className="w-4 h-4" />, count: categories.length },
              { id: 'orders', name: 'WhatsApp Orders', icon: <ShoppingBag className="w-4 h-4" />, count: orders.length },
              { id: 'backup', name: 'Database & Reset', icon: <Database className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
                {tab.count !== undefined && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      activeTab === tab.id
                        ? 'bg-sky-900 text-sky-100'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">All Products</span>
            <span className="text-xl font-black text-slate-900 mt-0.5 block">{products.length}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-sky-600 font-bold uppercase block">Domestic RO</span>
            <span className="text-xl font-black text-sky-700 mt-0.5 block">{domesticCount}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-indigo-600 font-bold uppercase block">RO Plants</span>
            <span className="text-xl font-black text-indigo-700 mt-0.5 block">{commercialCount}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-amber-600 font-bold uppercase block">Geysers</span>
            <span className="text-xl font-black text-amber-700 mt-0.5 block">{geyserCount}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-cyan-600 font-bold uppercase block">RO Spares</span>
            <span className="text-xl font-black text-cyan-700 mt-0.5 block">{sparesCount}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-emerald-600 font-bold uppercase block">Banners</span>
            <span className="text-xl font-black text-emerald-700 mt-0.5 block">{banners.length}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-rose-600 font-bold uppercase block">Offers</span>
            <span className="text-xl font-black text-rose-700 mt-0.5 block">{offers.length}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] text-blue-600 font-bold uppercase block">Orders</span>
            <span className="text-xl font-black text-blue-700 mt-0.5 block">{orders.length}</span>
          </div>
        </div>

        {/* ================= PRODUCTS TAB ================= */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden space-y-4 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Products Management
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Add, update, or remove water purifiers, commercial plants, and spare parts.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setProductModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by name, model code, or subcategory..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <th className="p-3">Product</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price / Discount</th>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Offer Tag</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((p) => {
                    const price = p.discountPrice || p.price;
                    return (
                      <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <SafeImage
                              src={p.images?.[0]}
                              alt={p.name}
                              category={p.category}
                              subcategory={p.subcategory}
                              brand={p.brand}
                              className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 shrink-0"
                            />
                            <div className="min-w-0 max-w-xs">
                              <h4 className="font-bold text-slate-900 truncate">{p.name}</h4>
                              <p className="text-[11px] text-slate-400 font-mono">
                                Code: {p.productCode || 'ROP'} • {p.capacity || 'Standard'}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-3 font-semibold text-slate-700">
                          <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 text-[11px]">
                            {p.category}
                          </span>
                        </td>

                        <td className="p-3">
                          <span className="font-extrabold text-slate-900 text-sm block">
                            ₹{price.toLocaleString('en-IN')}
                          </span>
                          {p.price > price && (
                            <span className="text-[10px] text-slate-400 line-through">
                              ₹{p.price.toLocaleString('en-IN')}
                            </span>
                          )}
                        </td>

                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              p.stock > 0
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {p.stock > 0 ? `${p.stock} in stock` : 'Out of Stock'}
                          </span>
                        </td>

                        <td className="p-3 text-[11px] text-amber-700 font-medium max-w-xs truncate">
                          {p.offer || '—'}
                        </td>

                        <td className="p-3 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <Link
                              to={`/product/${p.slug}`}
                              target="_blank"
                              className="p-1.5 text-slate-400 hover:text-sky-600 rounded-lg hover:bg-slate-100"
                              title="View on Store"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => {
                                setSelectedProduct(p);
                                setProductModalOpen(true);
                              }}
                              className="p-1.5 text-slate-400 hover:text-sky-600 rounded-lg hover:bg-slate-100"
                              title="Edit Product"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOpenDelete('product', p)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100"
                              title="Delete Product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= BANNERS TAB ================= */}
        {activeTab === 'banners' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Home Page Promotional Banners
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage the promotional carousel immediately following the Navbar. Live updates reflect on Home page.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedBanner(null);
                  setBannerModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add Banner</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banners.map((b) => (
                <div
                  key={b.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                >
                  <div className="relative aspect-video w-full bg-slate-900">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px]">
                      {b.badge || 'Offer'}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white font-mono text-[10px]">
                      Order: {b.order}
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{b.title}</h4>
                      <p className="text-xs text-sky-700 font-semibold">{b.subtitle}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{b.offerText}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          b.active !== false
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {b.active !== false ? 'Active' : 'Disabled'}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setSelectedBanner(b);
                            setBannerModalOpen(true);
                          }}
                          className="p-1.5 text-slate-500 hover:text-sky-600 rounded-lg hover:bg-slate-200"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenDelete('banner', b)}
                          className="p-1.5 text-slate-500 hover:text-rose-600 rounded-lg hover:bg-slate-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= OFFERS TAB ================= */}
        {activeTab === 'offers' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Offers & Festive Gifts
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage festival deals, electronic gas chulha gifts, and discount promos.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedOffer(null);
                  setOfferModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Offer</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {offers.map((o) => (
                <div
                  key={o.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-sky-700 uppercase bg-sky-100 px-2 py-0.5 rounded">
                        {o.category}
                      </span>
                      {o.discount && (
                        <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                          {o.discount}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{o.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{o.description}</p>
                    {o.validTill && (
                      <p className="text-[11px] text-amber-700 font-semibold">
                        Validity: {o.validTill}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-700">
                      Code: {o.code || 'None'}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          setSelectedOffer(o);
                          setOfferModalOpen(true);
                        }}
                        className="p-1.5 text-slate-400 hover:text-sky-600 rounded-lg hover:bg-slate-200"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenDelete('offer', o)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= CATEGORIES TAB ================= */}
        {activeTab === 'categories' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Categories Management
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Organize store departments: Domestic RO, Commercial Plants, Geyser, RO Parts, etc.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setCategoryModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-32 object-cover rounded-xl border border-slate-200"
                    />
                    <h3 className="font-bold text-slate-900 text-sm">{c.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{c.description}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Slug: /{c.slug}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          setSelectedCategory(c);
                          setCategoryModalOpen(true);
                        }}
                        className="p-1.5 text-slate-400 hover:text-sky-600 rounded-lg hover:bg-slate-200"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenDelete('category', c)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ORDERS / ENQUIRIES TAB ================= */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                Customer Enquiries & Orders ({orders.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Tracks leads and orders generated by customers through the "Buy Now" & WhatsApp system.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <th className="p-3">Customer & Contact</th>
                    <th className="p-3">Product / Items</th>
                    <th className="p-3">Total Amount</th>
                    <th className="p-3">Delivery Address</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Connect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{ord.customerName}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-slate-500 text-[11px]">
                          <Phone className="w-3 h-3 text-sky-600" />
                          <a href={`tel:${ord.mobile}`} className="hover:underline">
                            {ord.mobile}
                          </a>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {new Date(ord.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </td>

                      <td className="p-3 max-w-xs">
                        <div className="font-semibold text-slate-800 truncate">
                          {ord.productName}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Qty: {ord.quantity || 1}
                        </div>
                        {ord.message && (
                          <div className="text-[10px] text-slate-400 italic line-clamp-1 mt-0.5">
                            "{ord.message}"
                          </div>
                        )}
                      </td>

                      <td className="p-3 font-extrabold text-slate-900 text-sm">
                        ₹{(ord.total || 0).toLocaleString('en-IN')}
                      </td>

                      <td className="p-3 text-slate-600 max-w-xs">
                        <p className="line-clamp-2">{ord.address}, {ord.city} - {ord.pincode}</p>
                      </td>

                      <td className="p-3">
                        <select
                          value={ord.status}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                          className={`px-2 py-1 rounded-lg text-xs font-bold border ${
                            ord.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : ord.status === 'Confirmed'
                              ? 'bg-sky-50 text-sky-800 border-sky-300'
                              : ord.status === 'Contacted'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : ord.status === 'Cancelled'
                              ? 'bg-rose-50 text-rose-800 border-rose-300'
                              : 'bg-blue-50 text-blue-800 border-blue-300'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>

                      <td className="p-3 text-right">
                        <a
                          href={`https://wa.me/91${ord.whatsapp || ord.mobile}?text=${encodeURIComponent(
                            `Hello ${ord.customerName}, this is RO POINT regarding your order for ${ord.productName}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                          <span>Chat</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= BACKUP & RESET TAB ================= */}
        {activeTab === 'backup' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-6 max-w-3xl">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                Database Backup & Storage Tools
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Save your changes across sessions, export your entire catalog as JSON to load on another computer, or reset to the fresh demo dataset anytime.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                Frontend Persistence Notice:
              </span>
              <p className="leading-relaxed">
                This store runs on an optimized client-side persistence layer (HTML5 LocalStorage with instant cross-component reactivity). All your product additions, edits, and deletions persist on this browser. Use the JSON Export button to keep a safe backup or migrate data to another computer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Export JSON */}
              <button
                onClick={exportDatabase}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 text-left transition-all space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  ↓
                </div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-sky-700">
                  Export Database JSON
                </h4>
                <p className="text-xs text-slate-500">
                  Download full backup of products, banners, offers & orders.
                </p>
              </button>

              {/* Import JSON */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 text-left transition-all space-y-2 group relative cursor-pointer">
                <input
                  type="file"
                  accept=".json"
                  ref={fileInputRef}
                  onChange={handleImportFile}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full text-left space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    ↑
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700">
                    Import Database JSON
                  </h4>
                  <p className="text-xs text-slate-500">
                    Upload a previously exported backup file to restore catalog.
                  </p>
                </button>
              </div>

              {/* Reset to Default */}
              <button
                onClick={() => {
                  if (window.confirm('Reset all catalog data back to initial seed products & banners?')) {
                    resetToDefaultData();
                  }
                }}
                className="p-5 rounded-2xl border border-rose-200 bg-rose-50/50 hover:bg-rose-50 text-left transition-all space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <RotateCcw className="w-5 h-5 text-rose-600" />
                </div>
                <h4 className="font-bold text-rose-900 text-sm">
                  Reset to Default Data
                </h4>
                <p className="text-xs text-rose-700">
                  Reloads original sample purifiers, 25-10000 LPH plants & Navratri banner.
                </p>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Admin Modals */}
      <AdminProductModal
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        product={selectedProduct}
      />

      <AdminBannerModal
        isOpen={bannerModalOpen}
        onClose={() => setBannerModalOpen(false)}
        banner={selectedBanner}
      />

      <AdminOfferModal
        isOpen={offerModalOpen}
        onClose={() => setOfferModalOpen(false)}
        offer={selectedOffer}
      />

      <AdminCategoryModal
        isOpen={categoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        category={selectedCategory}
      />

      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={deleteTarget ? `Delete ${deleteTarget.type}` : 'Confirm Deletion'}
        message={
          deleteTarget
            ? `Are you sure you want to delete "${deleteTarget.item.name || deleteTarget.item.title}"? This cannot be undone.`
            : ''
        }
      />
    </div>
  );
}
