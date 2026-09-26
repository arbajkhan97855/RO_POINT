import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { products } = useApp();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.productCode && p.productCode.toLowerCase().includes(q)) ||
        (p.capacity && p.capacity.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    });
  }, [products, query]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Products
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Search Results for "{query}"
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Found {results.length} products matching your query.
          </p>
        </div>

        <ProductGrid products={results} />
      </div>
    </div>
  );
}
