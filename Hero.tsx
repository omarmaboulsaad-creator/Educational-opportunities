import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  searchPlaceholder: string;
  searchBtnText: string;
  onSearchSubmit: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  searchPlaceholder,
  searchBtnText,
  onSearchSubmit
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(query.trim());
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-primary-light/40 via-card to-page border-b border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-primary-subtle text-primary-dark text-xs sm:text-sm font-medium shadow-xs">
          <Sparkles className="w-4 h-4 text-primary-main" />
          <span>Global Educational Directory & Directory Prototype</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-main tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Large Search Bar */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto pt-2">
          <div className="flex flex-col sm:flex-row gap-2.5 p-2 bg-card rounded-2xl shadow-xl border border-subtle hover:border-primary-subtle transition-all">
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-muted absolute start-4 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full ps-11 pe-4 py-3 bg-transparent text-main placeholder:text-muted text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-primary-main hover:bg-primary-main/90 text-white font-semibold text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>{searchBtnText}</span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};
