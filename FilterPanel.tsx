import React, { useState } from 'react';
import { Filter, RotateCcw, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { CategoryType, FieldType, FilterState, FundingType, LevelType, LocationType } from '../types';

interface FilterPanelProps {
  filters: FilterState;
  onApplyFilters: (newFilters: FilterState) => void;
  onClearFilters: () => void;
  translations: {
    filterTitle: string;
    filterCategory: string;
    filterField: string;
    filterLevel: string;
    filterLocation: string;
    filterFunding: string;
    applyFilters: string;
    clearFilters: string;
    all: string;
    showFilters: string;
    hideFilters: string;
  };
  labels: Record<string, string>;
}

const CATEGORIES: (CategoryType | 'All')[] = ['All', 'Courses'];

const FIELDS: (FieldType | 'All')[] = [
  'All',
  'AI',
  'Embedded Systems',
  'Mathematics',
  'Science',
  'English',
  'Cybersecurity',
  'Programming',
  'Data Science',
  'Web Development',
  'Cloud & DevOps'
];

const LEVELS: (LevelType | 'All')[] = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Undergraduate',
  'Master\'s',
  'PhD'
];

const LOCATIONS: (LocationType | 'All')[] = ['All', 'Online'];

const FUNDING_OPTIONS: (FundingType | 'All')[] = [
  'All',
  'Free',
  'Varies',
  'Paid',
  'Fully Funded',
  'Partially Funded'
];

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onApplyFilters,
  onClearFilters,
  translations,
  labels
}) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Sync if external filters change (e.g. clear search or category click from hero)
  React.useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const activeCount = [
    localFilters.category !== 'All',
    localFilters.field !== 'All',
    localFilters.level !== 'All',
    localFilters.location !== 'All',
    localFilters.funding !== 'All',
  ].filter(Boolean).length;

  const handleApply = () => {
    onApplyFilters(localFilters);
  };

  const handleClear = () => {
    onClearFilters();
  };

  return (
    <div className="bg-card rounded-2xl border border-subtle p-5 shadow-xs space-y-6">
      
      {/* Header & Mobile Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary-main" />
          <h2 className="font-bold text-lg text-main">{translations.filterTitle}</h2>
          {activeCount > 0 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary-main text-white">
              {activeCount}
            </span>
          )}
        </div>

        {/* Mobile Toggle button */}
        <button
          type="button"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="lg:hidden flex items-center gap-1 text-sm font-semibold text-primary-main hover:underline"
        >
          <span>{isMobileExpanded ? translations.hideFilters : translations.showFilters}</span>
          {isMobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Filter Content (Always visible on lg, toggled on mobile) */}
      <div className={`space-y-5 ${isMobileExpanded ? 'block' : 'hidden lg:block'}`}>
        
        {/* Category Filter */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider">
            {translations.filterCategory}
          </label>
          <select
            value={localFilters.category}
            onChange={(e) => setLocalFilters({ ...localFilters, category: e.target.value as CategoryType | 'All' })}
            className="w-full px-3 py-2 bg-page border border-subtle rounded-xl text-sm text-main focus:outline-none focus:ring-2 focus:ring-primary-main"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? translations.all : (labels[cat] || cat)}
              </option>
            ))}
          </select>
        </div>

        {/* Field Filter */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider">
            {translations.filterField}
          </label>
          <select
            value={localFilters.field}
            onChange={(e) => setLocalFilters({ ...localFilters, field: e.target.value as FieldType | 'All' })}
            className="w-full px-3 py-2 bg-page border border-subtle rounded-xl text-sm text-main focus:outline-none focus:ring-2 focus:ring-primary-main"
          >
            {FIELDS.map((f) => (
              <option key={f} value={f}>
                {f === 'All' ? translations.all : (labels[f] || f)}
              </option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider">
            {translations.filterLevel}
          </label>
          <select
            value={localFilters.level}
            onChange={(e) => setLocalFilters({ ...localFilters, level: e.target.value as LevelType | 'All' })}
            className="w-full px-3 py-2 bg-page border border-subtle rounded-xl text-sm text-main focus:outline-none focus:ring-2 focus:ring-primary-main"
          >
            {LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl === 'All' ? translations.all : (labels[lvl] || lvl)}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider">
            {translations.filterLocation}
          </label>
          <select
            value={localFilters.location}
            onChange={(e) => setLocalFilters({ ...localFilters, location: e.target.value as LocationType | 'All' })}
            className="w-full px-3 py-2 bg-page border border-subtle rounded-xl text-sm text-main focus:outline-none focus:ring-2 focus:ring-primary-main"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'All' ? translations.all : (labels[loc] || loc)}
              </option>
            ))}
          </select>
        </div>

        {/* Funding Filter */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider">
            {translations.filterFunding}
          </label>
          <select
            value={localFilters.funding}
            onChange={(e) => setLocalFilters({ ...localFilters, funding: e.target.value as FundingType | 'All' })}
            className="w-full px-3 py-2 bg-page border border-subtle rounded-xl text-sm text-main focus:outline-none focus:ring-2 focus:ring-primary-main"
          >
            {FUNDING_OPTIONS.map((fnd) => (
              <option key={fnd} value={fnd}>
                {fnd === 'All' ? translations.all : (labels[fnd] || fnd)}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons: Apply Filters & Clear Filters */}
        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleApply}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-main hover:bg-primary-main/90 text-white font-semibold text-sm transition-all shadow-xs active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>{translations.applyFilters}</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-subtle bg-page hover:bg-card text-muted hover:text-main font-medium text-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{translations.clearFilters}</span>
          </button>
        </div>

      </div>

    </div>
  );
};
