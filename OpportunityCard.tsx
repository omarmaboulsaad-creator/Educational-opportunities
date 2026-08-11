import React from 'react';
import { Calendar, MapPin, Building2, Tag, ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';
import { Language, Opportunity } from '../types';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onViewDetails: (id: string) => void;
  language: Language;
  viewDetailsText: string;
  labels: Record<string, string>;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string, e: React.MouseEvent) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  onViewDetails,
  language,
  viewDetailsText,
  labels,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categoryLabel = labels[opportunity.category] || opportunity.category;
  const locationLabel = labels[opportunity.location] || opportunity.location;
  const fundingLabel = labels[opportunity.funding] || opportunity.funding;

  return (
    <div className="group bg-card rounded-2xl border border-subtle hover:border-primary-subtle shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden relative">
      
      <div className="p-5 sm:p-6 space-y-4">
        {/* Top Badges & Bookmark */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary-dark border border-primary-subtle">
              <Tag className="w-3 h-3" />
              {categoryLabel}
            </span>

            {/* Funding badge */}
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
              opportunity.funding === 'Fully Funded' || opportunity.funding === 'Free'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
            }`}>
              {fundingLabel}
            </span>
          </div>

          {onToggleBookmark && (
            <button
              type="button"
              onClick={(e) => onToggleBookmark(opportunity.id, e)}
              className="p-1.5 rounded-lg text-muted hover:text-primary-main hover:bg-page transition-colors"
              title="Save Opportunity"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary-main text-primary-main' : ''}`} />
            </button>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-main group-hover:text-primary-main transition-colors line-clamp-2 leading-snug">
          {opportunity.title}
        </h3>

        {/* Organization */}
        <div className="flex items-center gap-2 text-sm text-muted font-medium">
          <Building2 className="w-4 h-4 flex-shrink-0 text-muted" />
          <span className="truncate">{opportunity.organization}</span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-muted line-clamp-3 leading-relaxed">
          {opportunity.shortDescription}
        </p>
      </div>

      {/* Footer Info & Action */}
      <div className="px-5 sm:px-6 py-4 bg-page/50 border-t border-subtle flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-4 text-muted">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{locationLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{opportunity.deadline}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(opportunity.id)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary-main hover:bg-primary-main/90 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs active:scale-95"
        >
          <span>{viewDetailsText}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
