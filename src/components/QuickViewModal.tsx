import React, { useState } from 'react';
import { X, ShieldCheck, Wrench, Check, Plus, Minus, Truck } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div
      id="quick-view-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
    >
      <div
        id="quick-view-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FDFCFB] w-full max-w-4xl border border-[#1A1A1A] flex flex-col md:flex-row my-auto max-h-[90vh] overflow-hidden"
      >
        {/* Left: Visual Column */}
        <div className="w-full md:w-1/2 bg-[#EAE8E4] relative min-h-[300px] md:min-h-[460px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#1A1A1A]/20">
          <img
            src={product.image}
            alt={product.altText}
            className="w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#1A1A1A] text-[#FDFCFB] font-mono text-[10px] uppercase tracking-widest px-3 py-1">
              ARCHIVE: {product.code}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FDFCFB] bg-[#1A1A1A]/90 p-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                {product.condition}
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#FDFCFB]/80">{product.yearRange}</span>
          </div>
        </div>

        {/* Right: Content Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[90vh]">
          <div>
            {/* Header / Close */}
            <div className="flex justify-between items-start mb-2">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                {product.category}
              </span>
              <button
                id="close-quickview-btn"
                onClick={onClose}
                className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-1 hover:bg-[#EAE8E4] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-2">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-[#1A1A1A]/15">
              <span className="font-serif italic text-2xl text-[#1A1A1A]">
                ${product.price}
              </span>
              <span className="text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest">
                USD • Insured Courier Dispatch
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed mb-6 font-sans">
              {product.description}
            </p>

            {/* Compatible Models */}
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 block mb-2 font-semibold">
                Verified Fitment:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.modelFit.map((m) => (
                  <span
                    key={m}
                    className="bg-[#EAE8E4] text-[#1A1A1A] text-[10px] uppercase tracking-wider px-3 py-1 border border-[#1A1A1A]/15"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs Table */}
            <div className="mb-6 bg-[#F5F3EF] p-4 border border-[#1A1A1A]/15">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A] font-bold">
                  Technical Specifications
                </span>
              </div>
              <dl className="grid grid-cols-1 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between py-1 border-b border-[#1A1A1A]/10 last:border-0"
                  >
                    <dt className="text-[#1A1A1A]/60">{key}</dt>
                    <dd className="text-[#1A1A1A] font-mono text-right font-medium">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#1A1A1A]/20 space-y-4">
            <div className="flex items-center gap-3">
              {/* Quantity Changer */}
              <div className="flex items-center border border-[#1A1A1A]/30 bg-[#F5F3EF] px-2 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono text-xs px-3 font-semibold text-[#1A1A1A]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                id="modal-add-to-cart-btn"
                onClick={handleAddToCart}
                className="flex-grow bg-[#1A1A1A] hover:bg-[#333333] text-[#FDFCFB] text-[11px] uppercase tracking-widest py-3 px-6 transition-all duration-200 flex items-center justify-center gap-2 border border-[#1A1A1A] cursor-pointer font-semibold"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    Requisition Confirmed
                  </>
                ) : (
                  <>
                    Requisition Component • ${(product.price * quantity).toFixed(0)}
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-[#D4AF37]" /> Ships in 24h
              </span>
              <span>•</span>
              <span>Authenticity Certified</span>
              <span>•</span>
              <span>30-Day Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
