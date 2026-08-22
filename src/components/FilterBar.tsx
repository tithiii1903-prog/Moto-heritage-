import React from 'react';
import { ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalCount: number;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

const MODELS = ['ALL MODELS', 'PANHEAD', 'SHOVELHEAD', 'CAFE RACER'];

const CATEGORIES = [
  'Categories',
  'Carburetion',
  'Saddles',
  'Plumbing',
  'Engine Top-End',
  'Controls',
  'Exhaust',
  'Accessories'
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedModel,
  setSelectedModel,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  totalCount,
  onResetFilters,
  hasActiveFilters,
}) => {
  return (
    <section
      id="filter-bar-section"
      className="sticky top-[73px] md:top-[85px] z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#1A1A1A] py-4 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 transition-all"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
        {/* Model Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A]/50 mr-2 hidden sm:inline-block">
            Fitment:
          </span>
          {MODELS.map((model) => {
            const isSelected =
              (model === 'ALL MODELS' && selectedModel === '') ||
              selectedModel.toUpperCase() === model;
            return (
              <button
                key={model}
                id={`filter-model-${model.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedModel(model === 'ALL MODELS' ? '' : model)}
                className={`text-[10px] uppercase tracking-[0.25em] px-4 py-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-[#FDFCFB] border border-[#1A1A1A] font-semibold'
                    : 'bg-[#EAE8E4] text-[#1A1A1A] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40'
                }`}
              >
                {model}
              </button>
            );
          })}
        </div>

        {/* Category & Sort Selectors */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2.5">
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A]/50 hidden sm:inline-block">
              Category:
            </span>

            {/* Category Dropdown */}
            <div className="relative">
              <select
                id="filter-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-[#FDFCFB] border border-[#1A1A1A]/30 text-[#1A1A1A] text-[10px] uppercase tracking-widest px-3.5 py-2 pr-8 rounded-none w-36 sm:w-44 focus:border-[#1A1A1A] focus:ring-0 outline-none cursor-pointer hover:border-[#1A1A1A] transition-colors"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat === 'Categories' ? '' : cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/60 pointer-events-none" />
            </div>
          </div>

          {/* Sort Selector */}
          <div className="relative hidden md:block">
            <select
              id="sort-by-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#FDFCFB] border border-[#1A1A1A]/30 text-[#1A1A1A] text-[10px] uppercase tracking-widest px-3 py-2 pr-7 rounded-none w-36 focus:border-[#1A1A1A] focus:ring-0 outline-none cursor-pointer hover:border-[#1A1A1A] transition-colors"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Index: A to Z</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/60 pointer-events-none" />
          </div>

          {/* Reset Filters CTA if active */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] px-2 py-1 transition-colors cursor-pointer border-b border-[#1A1A1A]/40"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          {/* Item count tag */}
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-sans">
            ({totalCount} items)
          </span>
        </div>
      </div>
    </section>
  );
};
