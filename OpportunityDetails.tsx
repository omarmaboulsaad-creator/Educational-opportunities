import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Building2, MapPin, Calendar, Tag, 
  ExternalLink, CheckCircle2, Bookmark, Share2, FileText, Gift, ClipboardList, Clock, GraduationCap
} from 'lucide-react';
import { Language, Opportunity } from '../types';

interface OpportunityDetailsProps {
  opportunity: Opportunity;
  onBack: () => void;
  language: Language;
  translations: {
    backBtn: string;
    organization: string;
    category: string;
    location: string;
    funding: string;
    deadline: string;
    description: string;
    eligibility: string;
    benefits: string;
    requirements: string;
    importantDates: string;
    applyNow: string;
    officialNotice: string;
    field: string;
    level: string;
    share: string;
    bookmark: string;
    bookmarked: string;
    copiedLink: string;
  };
  labels: Record<string, string>;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
}

export const OpportunityDetails: React.FC<OpportunityDetailsProps> = ({
  opportunity,
  onBack,
  language,
  translations,
  labels,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const isRtl = language === 'ar';
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;
  const [copied, setCopied] = useState(false);

  const categoryLabel = labels[opportunity.category] || opportunity.category;
  const fieldLabel = labels[opportunity.field] || opportunity.field;
  const levelLabel = labels[opportunity.level] || opportunity.level;
  const locationLabel = labels[opportunity.location] || opportunity.location;
  const fundingLabel = labels[opportunity.funding] || opportunity.funding;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Navigation & Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-subtle pb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-subtle hover:bg-page text-main font-semibold text-sm transition-all shadow-xs"
        >
          <BackArrow className="w-4 h-4" />
          <span>{translations.backBtn}</span>
        </button>

        <div className="flex items-center gap-3">
          {onToggleBookmark && (
            <button
              type="button"
              onClick={() => onToggleBookmark(opportunity.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
                isBookmarked
                  ? 'bg-primary-light border-primary-subtle text-primary-dark'
                  : 'bg-card border-subtle text-main hover:bg-page'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary-main text-primary-main' : ''}`} />
              <span>{isBookmarked ? translations.bookmarked : translations.bookmark}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleShare}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-subtle hover:bg-page text-main font-semibold text-sm transition-all"
          >
            <Share2 className="w-4 h-4 text-muted" />
            <span>{translations.share}</span>
            {copied && (
              <span className="absolute -bottom-10 start-1/2 -translate-x-1/2 px-3 py-1 bg-main text-page text-xs font-medium rounded-md shadow-lg whitespace-nowrap z-20">
                {translations.copiedLink}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="bg-card rounded-3xl border border-subtle p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary-light text-primary-dark border border-primary-subtle flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            {categoryLabel}
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
            {fundingLabel}
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-page text-muted border border-subtle">
            {fieldLabel}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-main tracking-tight leading-tight">
          {opportunity.title}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-subtle text-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" /> {translations.organization}
            </span>
            <p className="font-bold text-main truncate">{opportunity.organization}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {translations.location}
            </span>
            <p className="font-bold text-main">{locationLabel}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> {translations.level}
            </span>
            <p className="font-bold text-main">{levelLabel}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {translations.deadline}
            </span>
            <p className="font-bold text-primary-main">{opportunity.deadline}</p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Description, Eligibility, Benefits */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Description */}
          <section className="bg-card rounded-2xl border border-subtle p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold text-main flex items-center gap-2 border-b border-subtle pb-3">
              <FileText className="w-5 h-5 text-primary-main" />
              <span>{translations.description}</span>
            </h2>
            <p className="text-main leading-relaxed whitespace-pre-line text-base sm:text-lg">
              {opportunity.fullDescription}
            </p>
          </section>

          {/* Eligibility */}
          <section className="bg-card rounded-2xl border border-subtle p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold text-main flex items-center gap-2 border-b border-subtle pb-3">
              <CheckCircle2 className="w-5 h-5 text-primary-main" />
              <span>{translations.eligibility}</span>
            </h2>
            <ul className="space-y-3">
              {opportunity.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-main">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          <section className="bg-card rounded-2xl border border-subtle p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold text-main flex items-center gap-2 border-b border-subtle pb-3">
              <Gift className="w-5 h-5 text-primary-main" />
              <span>{translations.benefits}</span>
            </h2>
            <ul className="space-y-3">
              {opportunity.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-main">
                  <div className="w-2 h-2 rounded-full bg-primary-main mt-2.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Right Column: Requirements & Important Dates */}
        <div className="space-y-8">
          
          {/* Requirements */}
          <section className="bg-card rounded-2xl border border-subtle p-6 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-main flex items-center gap-2 border-b border-subtle pb-3">
              <ClipboardList className="w-5 h-5 text-primary-main" />
              <span>{translations.requirements}</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-main">
              {opportunity.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary-dark font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Important Dates */}
          <section className="bg-card rounded-2xl border border-subtle p-6 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-main flex items-center gap-2 border-b border-subtle pb-3">
              <Clock className="w-5 h-5 text-primary-main" />
              <span>{translations.importantDates}</span>
            </h2>
            <div className="space-y-4">
              {opportunity.importantDates.map((d, index) => (
                <div key={index} className="flex items-start justify-between gap-2 text-sm pb-2 border-b border-subtle last:border-0 last:pb-0">
                  <span className="text-muted font-medium">{d.label}</span>
                  <span className="font-bold text-main text-end">{d.date}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>

      {/* Sticky / Large Bottom Application Action Bar */}
      <div className="bg-card rounded-3xl border border-primary-subtle p-6 sm:p-8 shadow-xl text-center space-y-4">
        <h3 className="text-xl font-bold text-main">
          Ready to take the next step?
        </h3>
        <p className="text-muted text-sm max-w-xl mx-auto">
          {translations.officialNotice}
        </p>
        <div className="pt-2">
          <a
            href={opportunity.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary-main hover:bg-primary-main/90 text-white font-extrabold text-lg sm:text-xl rounded-2xl transition-all shadow-lg active:scale-95 w-full sm:w-auto"
          >
            <span>{translations.applyNow}</span>
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>

    </div>
  );
};
