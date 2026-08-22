import React, { useState } from 'react';
import { Plus, Check, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <article
      id={`product-card-${product.id}`}
      className="group bg-[#FDFCFB] border border-[#1A1A1A]/15 overflow-hidden relative flex flex-col h-[470px] hover:border-[#1A1A1A] transition-all duration-300"
    >
      {/* Image Area */}
      <div
        className="h-[58%] w-full relative overflow-hidden bg-[#EAE8E4] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')` }}
          role="img"
          aria-label={product.altText}
        />

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-[#1A1A1A]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-[#FDFCFB] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold px-5 py-2.5 hover:bg-[#1A1A1A] hover:text-[#FDFCFB] transition-colors duration-200 border border-[#1A1A1A] cursor-pointer flex items-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            Examine Plate
          </button>
        </div>

        {/* Condition Tag */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="bg-[#FDFCFB] text-[#1A1A1A] text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 border border-[#1A1A1A]/20">
            {product.condition}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between z-10 relative bg-[#FDFCFB]">
        <div>
          <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1.5 block">
            {product.category}
          </span>

          <div className="flex justify-between items-start mb-2 gap-2">
            <h3
              onClick={() => onQuickView(product)}
              className="font-serif text-xl sm:text-2xl text-[#1A1A1A] leading-tight line-clamp-2 pr-2 group-hover:underline transition-all cursor-pointer"
            >
              {product.name}
            </h3>
            <span className="font-serif italic text-lg text-[#1A1A1A] whitespace-nowrap">
              ${product.price}
            </span>
          </div>

          <p className="text-xs text-[#1A1A1A]/60 line-clamp-1 font-sans">
            Fitment: {product.modelFit.join(', ')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 pt-3 border-t border-[#1A1A1A]/15 flex justify-between items-center">
          <span className="font-mono text-[11px] text-[#1A1A1A]/50 tracking-wider">
            {product.code}
          </span>

          <button
            id={`add-cart-btn-${product.id}`}
            onClick={handleAdd}
            className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95 py-1 px-1"
          >
            <span className="text-[10px] uppercase tracking-widest font-semibold">
              {isAdded ? 'Requisitioned' : 'Requisition'}
            </span>
            {isAdded ? (
              <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
