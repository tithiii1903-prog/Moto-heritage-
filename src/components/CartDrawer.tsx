import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const shipping = rawSubtotal > 200 || rawSubtotal === 0 ? 0 : 25;
  const total = rawSubtotal - discountAmount + shipping;
  const freeShippingThreshold = 200;
  const distanceToFree = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FOUNDRY10' || promoCode.trim().toUpperCase() === 'VINTAGE') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "FOUNDRY10" for 10% off.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      const generatedOrderId = `MH-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderComplete(generatedOrderId);
      onClearCart();
    }, 1200);
  };

  return (
    <div
      id="cart-drawer-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/75 backdrop-blur-xs flex justify-end transition-opacity duration-300"
    >
      <div
        id="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FDFCFB] h-full shadow-2xl flex flex-col justify-between border-l border-[#1A1A1A] animate-slide-left"
      >
        {/* Cart Header */}
        <div className="p-6 border-b border-[#1A1A1A] flex justify-between items-end bg-[#FDFCFB]">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A]/60 block mb-1">
              Issue Manifest
            </span>
            <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A1A1A] leading-none">
              Requisition Crate
            </h2>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-1.5 hover:bg-[#EAE8E4] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {cartItems.length > 0 && !orderComplete && (
          <div className="bg-[#F5F3EF] px-6 py-3 border-b border-[#1A1A1A]/15 text-xs">
            {distanceToFree > 0 ? (
              <p className="text-[#1A1A1A]/70 text-[11px]">
                Add <span className="font-semibold text-[#1A1A1A] font-mono">${distanceToFree.toFixed(0)}</span> more for Complimentary Insured Freight
              </p>
            ) : (
              <p className="text-[#1A1A1A] font-medium text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Complimentary Courier Freight Unlocked
              </p>
            )}
            <div className="w-full bg-[#EAE8E4] h-1 mt-2 overflow-hidden border border-[#1A1A1A]/10">
              <div
                className="bg-[#1A1A1A] h-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Order Completed Receipt View */}
        {orderComplete ? (
          <div className="p-8 flex-grow flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-[#EAE8E4] border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] mb-4">
              <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-1">
              Archive Monograph
            </span>
            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-2">
              Requisition Confirmed
            </h3>
            <p className="font-mono text-xs text-[#1A1A1A] mb-4 bg-[#F5F3EF] px-3 py-1 border border-[#1A1A1A]/20">
              MANIFEST: {orderComplete}
            </p>
            <p className="text-xs text-[#1A1A1A]/70 mb-8 leading-relaxed max-w-xs font-sans">
              Your vintage motorcycle components have been allocated from the foundry archives and will be packed in paraffin wax paper with provenance papers.
            </p>
            <button
              onClick={() => {
                setOrderComplete(null);
                onClose();
              }}
              className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-8 py-3.5 border border-[#1A1A1A] hover:bg-[#333] transition-colors"
            >
              Return to Catalogue
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          /* Empty State */
          <div className="p-8 flex-grow flex flex-col items-center justify-center text-center">
            <p className="font-serif text-2xl text-[#1A1A1A] mb-2">
              Crate is Empty
            </p>
            <p className="text-xs text-[#1A1A1A]/60 mb-6 max-w-xs font-sans">
              Examine our salvage monographs and select restored vintage components.
            </p>
            <button
              onClick={onClose}
              className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-6 py-3 border border-[#1A1A1A] hover:bg-[#333] transition-colors"
            >
              Browse Catalogue
            </button>
          </div>
        ) : (
          /* Cart Items List */
          <div className="flex-grow overflow-y-auto p-6 space-y-3.5">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-[#F5F3EF] p-3.5 flex gap-3.5 border border-[#1A1A1A]/15 relative group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-18 h-18 object-cover bg-[#EAE8E4] flex-shrink-0 grayscale-[10%]"
                />
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] block">
                      {item.product.category}
                    </span>
                    <h4 className="font-serif text-base text-[#1A1A1A] leading-tight pr-6">
                      {item.product.name}
                    </h4>
                    <p className="font-mono text-[10px] text-[#1A1A1A]/50 mt-0.5">
                      {item.product.code}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-[#1A1A1A]/20 bg-[#FDFCFB] px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-0.5"
                        aria-label="Decrease"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="font-mono text-[11px] px-2 text-[#1A1A1A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-0.5"
                        aria-label="Increase"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <span className="font-serif italic text-sm text-[#1A1A1A] font-medium">
                      ${(item.product.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="absolute top-2.5 right-2.5 text-[#1A1A1A]/40 hover:text-[#1A1A1A] p-1 transition-opacity"
                  title="Remove from crate"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Code (FOUNDRY10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs uppercase tracking-wider placeholder-[#1A1A1A]/40 focus:border-[#1A1A1A] outline-none rounded-none"
                />
                <button
                  type="submit"
                  className="bg-[#EAE8E4] hover:bg-[#1A1A1A] hover:text-[#FDFCFB] text-[#1A1A1A] text-[10px] uppercase tracking-widest px-4 py-2 border border-[#1A1A1A]/30 transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <p className="text-xs text-[#1A1A1A] mt-1.5 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" /> 10% Archive Privilege applied
                </p>
              )}
            </form>
          </div>
        )}

        {/* Cart Summary & Checkout Actions */}
        {!orderComplete && cartItems.length > 0 && (
          <div className="p-6 bg-[#F5F3EF] border-t border-[#1A1A1A] space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Salvage Subtotal</span>
                <span className="font-mono text-[#1A1A1A]">${rawSubtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#1A1A1A] font-medium">
                  <span>Archive Privilege (10%)</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Insured Freight</span>
                <span className="font-mono text-[#1A1A1A]">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#1A1A1A]/20 flex justify-between text-base font-semibold text-[#1A1A1A]">
                <span className="font-serif uppercase text-lg">Total</span>
                <span className="font-serif italic text-xl text-[#1A1A1A]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              id="proceed-checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#1A1A1A] hover:bg-[#333333] disabled:opacity-50 text-[#FDFCFB] text-[11px] uppercase tracking-widest py-3.5 transition-all duration-200 flex items-center justify-center gap-2 border border-[#1A1A1A] cursor-pointer font-semibold"
            >
              {isCheckingOut ? (
                <span>Securing Foundry Allocation...</span>
              ) : (
                <>
                  <span>Dispatch Requisition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
