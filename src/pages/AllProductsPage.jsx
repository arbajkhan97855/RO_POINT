import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Search,
  LayoutGrid,
  List
} from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function AllProductsPage() {
  const { products, categories } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL or Local Filter states
  const categoryParam = searchParams.get('category') || 'All';
  const brandParam = searchParams.get('brand') || 'all';
  const sortParam = searchParams.get('sort') || 'popular';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState(brandParam);
  const [offersOnly, setOffersOnly] = useState(false);
  const [sortBy, setSortBy] = useState(sortParam);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Sync category & brand if URL param changes
  React.useEffect(() => {
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, selectedCategory]);

  React.useEffect(() => {
    if (brandParam && brandParam !== selectedBrand) {
      setSelectedBrand(brandParam);
    }
  }, [brandParam, selectedBrand]);

  // Extract distinct brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.brand).filter(Boolean)));
    return ['all', ...list];
  }, [products]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All' || p.category === selectedCategory;

        // Brand filter
        const matchesBrand =
          selectedBrand === 'all' || p.brand === selectedBrand;

        // Offers filter
        const matchesOffers = offersOnly ? Boolean(p.offer) : true;

        // Price filter
        const price = p.discountPrice || p.price;
        let matchesPrice = true;
        if (selectedPriceRange === 'under2k') matchesPrice = price < 2000;
        else if (selectedPriceRange === '2k-10k')
          matchesPrice = price >= 2000 && price <= 10000;
        else if (selectedPriceRange === '10k-30k')
          matchesPrice = price > 10000 && price <= 30000;
        else if (selectedPriceRange === 'above30k') matchesPrice = price > 30000;

        return matchesCategory && matchesBrand && matchesOffers && matchesPrice;
      })
      .sort((a, b) => {
        const priceA = a.discountPrice || a.price;
        const priceB = b.discountPrice || b.price;

        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;
        if (sortBy === 'discount')
          return (b.discountPercentage || 0) - (a.discountPercentage || 0);
        if (sortBy === 'newest')
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        if (sortBy === 'name-az') return a.name.localeCompare(b.name);
        // Default popular / rating
        return (b.rating || 0) - (a.rating || 0);
      });
  }, [
    products,
    selectedCategory,
    selectedBrand,
    selectedPriceRange,
    offersOnly,
    sortBy
  ]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedPriceRange('all');
    setSelectedBrand('all');
    setOffersOnly(false);
    setSortBy('popular');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedPriceRange !== 'all' ||
    selectedBrand !== 'all' ||
    offersOnly;

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-md">
            RO POINT Official Catalog
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            All Water Purifiers, Plants & Genuine Spare Parts
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Browse our complete inventory. Kent, Aquaguard, Livpure, Aqua Tejas & RO POINT custom heavy borewell machines.
          </p>
        </div>

        {/* Toolbar Bar: Filter Toggle, View Switch & Sorting (Amazon / Flipkart Style) */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-sm font-bold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-sky-600" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>

            <span className="text-sm text-slate-600 font-semibold hidden sm:inline">
              Showing <strong className="text-slate-900 text-base">{filteredProducts.length}</strong> items
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700 font-bold ml-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Amazon Style Grid / List View Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-sky-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View (Cards)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-sky-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="List View (Amazon Style Rows)"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500 font-bold shrink-0">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-sky-500"
              >
                <option value="popular">Popular / Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Biggest Discount %</option>
                <option value="newest">Newest Arrivals</option>
                <option value="name-az">Product Name: A - Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Desktop Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" /> Filter Catalog
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:underline font-bold"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Product Categories
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    selectedCategory === 'All'
                      ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-xs text-slate-400">({products.length})</span>
                </button>

                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.name).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        selectedCategory === cat.name
                          ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="text-xs text-slate-400">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Price Range
              </h4>
              <div className="space-y-1.5 text-sm">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under2k', label: 'Under ₹2,000 (Spares)' },
                  { id: '2k-10k', label: '₹2,000 - ₹10,000 (Geyser & Budget RO)' },
                  { id: '10k-30k', label: '₹10,000 - ₹30,000 (Domestic RO & Plants)' },
                  { id: 'above30k', label: 'Above ₹30,000 (Industrial RO Plants)' }
                ].map((range) => (
                  <label key={range.id} className="flex items-center gap-2.5 p-1 text-slate-700 cursor-pointer hover:text-sky-600 font-medium">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPriceRange === range.id}
                      onChange={() => setSelectedPriceRange(range.id)}
                      className="w-4 h-4 text-sky-600 focus:ring-sky-500"
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            {brands.length > 2 && (
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Brand Selection
                </h4>
                <div className="space-y-1.5 text-sm">
                  {brands.map((b) => {
                    const label = b === 'all' ? 'All Brands' : b;
                    return (
                      <label key={b} className="flex items-center gap-2.5 p-1 text-slate-700 cursor-pointer hover:text-sky-600 font-medium">
                        <input
                          type="radio"
                          name="brandOption"
                          checked={selectedBrand === b}
                          onChange={() => setSelectedBrand(b)}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="font-semibold">{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

          {/* Products Content Area */}
          <main className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              columns={3}
              viewMode={viewMode}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
