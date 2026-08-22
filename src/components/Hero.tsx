import React from 'react';
import { HERO_IMAGE } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full h-[500px] sm:h-[560px] md:h-[600px] min-h-[420px] bg-[#EAE8E4] border border-[#1A1A1A]/15 overflow-hidden group"
    >
      {/* Background Photography */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:opacity-90 transition-all duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0 group-hover:scale-102"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
        role="img"
        aria-label="A custom vintage motorcycle engine being assembled in an authentic industrial workshop with warm atmospheric lighting."
      />

      {/* Editorial Watermark */}
      <div className="absolute top-6 right-8 hidden lg:block text-[#1A1A1A]/15 font-serif italic text-6xl select-none pointer-events-none">
        Vol. IV / Heritage
      </div>

      {/* Atmospheric Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB]/80 via-[#FDFCFB]/20 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 md:p-14 z-10 w-full max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-3 block">
          Featured Requisition • Monograph Series
        </span>

        <h1
          id="hero-title"
          className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#1A1A1A] leading-[0.92] tracking-tighter mb-4"
        >
          The Foundry Collection
        </h1>

        <p
          id="hero-description"
          className="text-xs sm:text-sm md:text-base text-[#1A1A1A]/80 mb-6 sm:mb-8 max-w-xl leading-relaxed font-sans"
        >
          Raw, unpolished, and built to outlast. Discover our latest curated selection
          of heavy-duty components salvaged and restored from the golden age of
          motorcycling.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <button
            id="hero-shop-cta"
            onClick={onShopClick}
            className="bg-[#1A1A1A] text-[#FDFCFB] text-[11px] uppercase tracking-widest font-semibold px-8 py-3.5 border border-[#1A1A1A] hover:bg-[#333333] active:scale-98 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            Explore Catalogue
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 hidden sm:inline-block">
            Issue 042 • Published 2024
          </span>
        </div>
      </div>
    </section>
  );
};
