import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';
import { Language, Opportunity } from '../types';
import { OpportunityCard } from './OpportunityCard';

interface OpportunityGridProps {
  opportunities: Opportunity[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  onViewDetails: (id: string) => void;
  onClearSearch: () => void;
  language: Language;
  translations: {
    foundCount: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearSearchBtn: string;
    loadingText: string;
    errorText: string;
    tryAgain: string;
    viewDetails: string;
  };
  labels: Record<string, string>;
  bookmarkedIds?: string[];
  onToggleBookmark?: (id: string, e: React.MouseEvent) => void;
}

export const OpportunityGrid: React.FC<OpportunityGridProps> = ({
  opportunities,
  isLoading = false,
  isError = false,
  onRetry,
  onViewDetails,
  onClearSearch,
  language,
  translations,
  labels,
  bookmarkedIds = [],
  onToggleBookmark
}) => {
  // Skeleton Loading State
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-6 w-48 bg-subtle/50 rounded-md animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-2xl border border-subtle p-6 space-y-4 animate-pulse">
              <div className="flex justify-between items-center">
                <div className="h-5 w-24 bg-subtle/60 rounded-full" />
                <div className="h-5 w-20 bg-subtle/40 rounded-full" />
              </div>
              <div className="h-6 w-3/4 bg-subtle/70 rounded-md" />
              <div className="h-4 w-1/2 bg-subtle/50 rounded-md" />
              <div className="space-y-2 pt-2">
                <div className="h-3 w-full bg-subtle/40 rounded-md" />
                <div className="h-3 w-5/6 bg-subtle/40 rounded-md" />
              </div>
              <div className="pt-4 flex justify-between">
                <div className="h-4 w-28 bg-subtle/50 rounded-md" />
                <div className="h-8 w-24 bg-subtle/70 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="bg-card rounded-2xl border border-subtle p-12 text-center space-y-4 my-8">
        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
          <RefreshCw className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-main">{translations.errorText}</h3>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="px-6 py-2.5 rounded-xl bg-primary-main text-white font-semibold hover:bg-primary-main/90 transition-all"
          >
            {translations.tryAgain}
          </button>
        )}
      </div>
    );
  }

  // No Results State
  if (opportunities.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-subtle p-12 text-center space-y-5 my-4">
        <div className="w-16 h-16 rounded-2xl bg-primary-light text-primary-main flex items-center justify-center mx-auto">
          <SearchX className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-main">{translations.noResultsTitle}</h3>
          <p className="text-sm text-muted">{translations.noResultsDesc}</p>
        </div>
        <button
          type="button"
          onClick={onClearSearch}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-main hover:bg-primary-main/90 text-white font-semibold text-sm transition-all shadow-xs active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{translations.clearSearchBtn}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Found count banner */}
      <div className="flex items-center justify-between text-sm font-semibold text-muted pb-2 border-b border-subtle">
        <span>
          <strong className="text-main font-bold text-base">{opportunities.length}</strong>{' '}
          {translations.foundCount}
        </span>
      </div>

      {/* Grid of opportunity cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opp) => (
          <OpportunityCard
            key={opp.id}
            opportunity={opp}
            onViewDetails={onViewDetails}
            language={language}
            viewDetailsText={translations.viewDetails}
            labels={labels}
            isBookmarked={bookmarkedIds.includes(opp.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
};
