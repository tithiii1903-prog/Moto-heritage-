import React, { useState } from 'react';
import { Search, ShoppingCart, User, X, Menu } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenAccount,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const tabs: NavigationTab[] = ['EXPLORE', 'WORKSHOP', 'COMMUNITY', 'ARCHIVE'];

  return (
    <nav
      id="top-navbar"
      className="bg-[#FDFCFB]/95 backdrop-blur-md w-full border-b border-[#1A1A1A] sticky top-0 z-50 transition-all duration-200"
    >
      <div className="flex justify-between items-end px-6 md:px-12 py-5 w-full max-w-[1400px] mx-auto">
        {/* Brand Logo & Editorial Eyebrow */}
        <button
          id="brand-logo-btn"
          onClick={() => {
            setActiveTab('EXPLORE');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col text-left cursor-pointer group"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A]/60 transition-opacity group-hover:text-[#1A1A1A]">
            Foundry Archive • Issue 042
          </span>
          <h1 className="font-serif italic text-2xl sm:text-3xl md:text-4xl tracking-tighter text-[#1A1A1A] leading-none mt-1">
            Moto Heritage
          </h1>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 pb-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                id={`nav-link-${tab.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[11px] uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-b border-[#1A1A1A] pb-1 text-[#1A1A1A] font-semibold'
                    : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6 pb-1">
          {/* Search Bar */}
          <div className="relative hidden sm:block w-44 md:w-52">
            <input
              id="desktop-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalogue..."
              className="w-full bg-transparent border-0 border-b border-[#1A1A1A]/30 focus:border-[#1A1A1A] focus:ring-0 text-[#1A1A1A] placeholder-[#1A1A1A]/40 text-xs py-1 pr-7 transition-colors duration-200 outline-none font-sans"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-1"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Search className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 pointer-events-none" />
            )}
          </div>

          {/* Mobile Search Toggle */}
          <button
            id="mobile-search-toggle"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="sm:hidden text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors p-1"
            aria-label="Toggle search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Shopping Cart Button */}
          <button
            id="cart-button"
            onClick={onOpenCart}
            className="relative text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-200 p-1.5 cursor-pointer active:scale-95"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span
                id="cart-badge-count"
                className="absolute -top-1 -right-1 bg-[#1A1A1A] text-[#FDFCFB] text-[9px] font-bold font-sans w-4 h-4 rounded-full flex items-center justify-center shadow-xs"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Button */}
          <button
            id="account-button"
            onClick={onOpenAccount}
            className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-200 p-1.5 cursor-pointer active:scale-95"
            aria-label="User Account"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors p-1.5"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown */}
      {mobileSearchOpen && (
        <div className="sm:hidden px-6 pb-4 border-b border-[#1A1A1A]/20 bg-[#F5F3EF]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalogue monographs..."
              autoFocus
              className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 rounded-none px-3 py-2 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:border-[#1A1A1A] outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1A1A1A]/60"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1A1A1A] bg-[#F5F3EF] px-6 py-4 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-[11px] uppercase tracking-widest py-2 px-2 transition-colors ${
                activeTab === tab
                  ? 'border-b border-[#1A1A1A] text-[#1A1A1A] font-bold'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
