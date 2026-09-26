import React from 'react';
import ProductCard from './ProductCard.jsx';
import ProductListItem from './ProductListItem.jsx';
import { PackageOpen } from 'lucide-react';

export default function ProductGrid({
  products,
  title,
  subtitle,
  columns = 4,
  viewMode = 'grid'
}) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto my-8">
        <PackageOpen className="w-14 h-14 text-slate-300 mx-auto stroke-1 mb-3" />
        <h3 className="text-lg font-bold text-slate-800">No Products Found</h3>
        <p className="text-sm text-slate-500 mt-1">
          Try changing your filter settings or search query to find what you are looking for.
        </p>
      </div>
    );
  }

  const gridCols =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            {title && (
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-slate-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
            Showing {products.length} Products
          </span>
        </div>
      )}

      {viewMode === 'list' ? (
        <div className="space-y-4">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
