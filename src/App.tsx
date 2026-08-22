/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WorkshopView } from './components/WorkshopView';
import { CommunityView } from './components/CommunityView';
import { ArchiveView } from './components/ArchiveView';
import { Footer } from './components/Footer';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { UserModal } from './components/UserModal';
import { INITIAL_PRODUCTS, EXTENDED_PRODUCTS } from './data/products';
import { Product, CartItem, NavigationTab } from './types';
import { RotateCcw } from 'lucide-react';
export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('EXPLORE');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  // Filters and Search
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  // Cart State with Local Storage support
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('moto_heritage_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('moto_heritage_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart state', e);
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleLoadMore = () => {
    setDisplayedProducts((prev) => [...prev, ...EXTENDED_PRODUCTS]);
    setHasLoadedMore(true);
  };

  const handleResetFilters = () => {
    setSelectedModel('');
    setSelectedCategory('');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(
    selectedModel || selectedCategory || searchQuery || sortBy !== 'featured'
  );

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let list = [...displayedProducts];

    // Model Filter
    if (selectedModel) {
      const normalizedModel = selectedModel.toLowerCase();
      list = list.filter((p) =>
        p.modelFit.some((m) => m.toLowerCase().includes(normalizedModel))
      );
    }

    // Category Filter
    if (selectedCategory && selectedCategory !== 'Categories') {
      list = list.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [displayedProducts, selectedModel, selectedCategory, searchQuery, sortBy]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#FDFCFB] text-[#1A1A1A] font-sans min-h-screen flex flex-col selection:bg-[#1A1A1A] selection:text-[#FDFCFB]">
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 flex flex-col gap-12 md:gap-16">
        {activeTab === 'EXPLORE' && (
          <>
            {/* Hero Section */}
            <Hero
              onShopClick={() => {
                const filterElem = document.getElementById('filter-bar-section');
                if (filterElem) {
                  filterElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* Filter Bar (Sticky) */}
            <FilterBar
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalCount={filteredProducts.length}
              onResetFilters={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
            />

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <section
                id="product-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onAddToCart={(p) => handleAddToCart(p, 1)}
                  />
                ))}
              </section>
            ) : (
              <div
                id="no-products-found"
                className="bg-[#F5F3EF] p-12 text-center border border-[#1A1A1A]/20 my-8 max-w-md mx-auto"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-2">
                  Archive Query
                </span>
                <p className="font-serif text-2xl text-[#1A1A1A] mb-2">
                  No matching vintage parts found
                </p>
                <p className="text-xs text-[#1A1A1A]/60 mb-6 font-sans">
                  Try adjusting your filter criteria or search keyword.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-6 py-2.5 hover:bg-[#333] border border-[#1A1A1A] transition-colors inline-flex items-center gap-2 cursor-pointer font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Load More Inventory Button */}
            {!hasLoadedMore && (
              <div className="flex justify-center mt-6 md:mt-12">
                <button
                  id="load-more-inventory-btn"
                  onClick={handleLoadMore}
                  className="border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCFB] text-[10px] sm:text-xs uppercase tracking-widest px-10 md:px-12 py-3.5 md:py-4 transition-all duration-300 bg-[#FDFCFB] cursor-pointer font-semibold"
                >
                  Load Complete Archive Catalog
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === 'WORKSHOP' && <WorkshopView />}
        {activeTab === 'COMMUNITY' && <CommunityView />}
        {activeTab === 'ARCHIVE' && <ArchiveView />}
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Modals & Slide-overs */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <UserModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
