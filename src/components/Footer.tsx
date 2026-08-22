import React from 'react';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer
      id="site-footer"
      className="bg-[#FDFCFB] w-full border-t border-[#1A1A1A]/15 mt-auto"
    >
      <div className="w-full px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 max-w-[1400px] mx-auto">
        {/* Brand Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-2xl text-[#1A1A1A] tracking-wider uppercase mb-4 md:mb-0 hover:opacity-80 transition-opacity text-left cursor-pointer"
        >
          MOTO HERITAGE
        </button>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <button
            id="footer-link-tos"
            onClick={() => onOpenLegal('TERMS')}
            className="text-[10px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all duration-300 uppercase tracking-widest cursor-pointer hover:underline"
          >
            TERMS OF SERVICE
          </button>
          <button
            id="footer-link-privacy"
            onClick={() => onOpenLegal('PRIVACY')}
            className="text-[10px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all duration-300 uppercase tracking-widest cursor-pointer hover:underline"
          >
            PRIVACY POLICY
          </button>
          <button
            id="footer-link-shipping"
            onClick={() => onOpenLegal('SHIPPING')}
            className="text-[10px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all duration-300 uppercase tracking-widest cursor-pointer hover:underline"
          >
            SHIPPING &amp; RETURNS
          </button>
          <button
            id="footer-link-contact"
            onClick={() => onOpenLegal('CONTACT')}
            className="text-[10px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all duration-300 uppercase tracking-widest cursor-pointer hover:underline"
          >
            CONTACT
          </button>
        </div>

        {/* Copyright Notice */}
        <div className="text-[10px] text-[#1A1A1A]/40 uppercase mt-4 md:mt-0 text-center md:text-right tracking-widest font-sans">
          © 2024 MOTO HERITAGE INDUSTRIAL CORP.
        </div>
      </div>
    </footer>
  );
};
