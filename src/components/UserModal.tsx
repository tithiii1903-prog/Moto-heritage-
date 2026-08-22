import React, { useState } from 'react';
import { X, User, Package, ShieldCheck, Heart, LogIn } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'orders' | 'salvage-club'>('profile');
  const [email, setEmail] = useState('tithiii1903@gmail.com');
  const [garageName, setGarageName] = useState('High Desert Speed & Customs');

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FDFCFB] w-full max-w-lg p-6 sm:p-8 border border-[#1A1A1A] shadow-2xl overflow-hidden"
      >
        <div className="flex justify-between items-center pb-4 border-b border-[#1A1A1A] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5F3EF] border border-[#1A1A1A]/30 flex items-center justify-center text-[#1A1A1A]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block">
                Foundry Membership
              </span>
              <h2 className="font-serif text-2xl text-[#1A1A1A]">
                Collector Account
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-1.5 hover:bg-[#EAE8E4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#1A1A1A]/20 mb-6 gap-6 text-[10px] uppercase tracking-widest">
          <button
            onClick={() => setActiveSubTab('profile')}
            className={`pb-2 transition-colors cursor-pointer ${
              activeSubTab === 'profile'
                ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-bold'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            Garage Profile
          </button>
          <button
            onClick={() => setActiveSubTab('orders')}
            className={`pb-2 transition-colors cursor-pointer ${
              activeSubTab === 'orders'
                ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-bold'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            Requisitions
          </button>
          <button
            onClick={() => setActiveSubTab('salvage-club')}
            className={`pb-2 transition-colors cursor-pointer ${
              activeSubTab === 'salvage-club'
                ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-bold'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            Society Tier
          </button>
        </div>

        {activeSubTab === 'profile' && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                Registered Builder Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-1">
                Workshop / Garage Moniker
              </label>
              <input
                type="text"
                value={garageName}
                onChange={(e) => setGarageName(e.target.value)}
                className="w-full bg-[#FDFCFB] border border-[#1A1A1A]/30 px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A] rounded-none"
              />
            </div>
            <div className="bg-[#F5F3EF] p-4 text-xs space-y-1.5 border border-[#1A1A1A]/15 font-sans">
              <div className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-[10px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified Provenance Pass
              </div>
              <p className="text-xs text-[#1A1A1A]/70">
                Your account is eligible for priority reservation on rare barnfind engine block releases and NOS parts drops.
              </p>
            </div>
          </div>
        )}

        {activeSubTab === 'orders' && (
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <div className="bg-[#F5F3EF] p-3.5 border border-[#1A1A1A]/15 flex justify-between items-center text-xs">
              <div>
                <p className="font-serif text-base text-[#1A1A1A]">
                  Mikuni VM36 + Solid Copper Kit
                </p>
                <p className="text-[#1A1A1A]/50 font-mono text-[10px]">
                  #MH-782104 • Delivered August 2026
                </p>
              </div>
              <span className="font-serif italic font-medium text-[#1A1A1A] text-sm">$330.00</span>
            </div>
            <div className="bg-[#F5F3EF] p-3.5 border border-[#1A1A1A]/15 flex justify-between items-center text-xs">
              <div>
                <p className="font-serif text-base text-[#1A1A1A]">
                  Finned Aluminum Rocker Boxes
                </p>
                <p className="text-[#1A1A1A]/50 font-mono text-[10px]">
                  #MH-619082 • Delivered June 2026
                </p>
              </div>
              <span className="font-serif italic font-medium text-[#1A1A1A] text-sm">$450.00</span>
            </div>
          </div>
        )}

        {activeSubTab === 'salvage-club' && (
          <div className="space-y-3 text-xs text-[#1A1A1A]/70 font-sans">
            <p className="leading-relaxed">
              As a Foundry Society tier member, you enjoy early-access notifications 48 hours prior to public catalogue releases, free blueprint access, and direct machining shop consultations.
            </p>
            <div className="bg-[#EAE8E4] p-3 border border-[#1A1A1A]/20 text-center font-mono text-xs text-[#1A1A1A]">
              Active Tier: MASTER PATINA (Level 3)
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#1A1A1A]/20 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase tracking-widest px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#333] transition-colors cursor-pointer font-semibold"
          >
            Save &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
