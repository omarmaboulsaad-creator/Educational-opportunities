import React, { useState, useEffect, useMemo } from 'react';
import { 
  CategoryType, 
  FieldType,
  FilterState, 
  Language, 
  Opportunity, 
  PageType, 
  ThemeAppearance, 
  ThemeColor 
} from './types';
import { SAMPLE_OPPORTUNITIES } from './data/opportunities';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { OpportunityCard } from './components/OpportunityCard';
import { FilterPanel } from './components/FilterPanel';
import { OpportunityGrid } from './components/OpportunityGrid';
import { OpportunityDetails } from './components/OpportunityDetails';
import { Footer } from './components/Footer';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  category: 'All',
  field: 'All',
  level: 'All',
  location: 'All',
  funding: 'All',
};

export default function App() {
  // Navigation & Page state
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string | null>(null);

  // Filter & Search state
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  // Language state (default: English)
  const [language, setLanguage] = useState<Language>('en');

  // Theme state
  const [appearance, setAppearance] = useState<ThemeAppearance>('light');
  const [themeColor, setThemeColor] = useState<ThemeColor>('green');

  // Bookmarks / Saved opportunities
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('edu_bookmarked_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Loading & Error states simulation
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Set document direction and attributes on language / theme change
  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appearance);
    document.documentElement.setAttribute('data-color', themeColor);
  }, [appearance, themeColor]);

  // Save bookmarked IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('edu_bookmarked_ids', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save bookmarks:', e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Translations dictionary for current language
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Search & Filter Logic
  const filteredOpportunities = useMemo(() => {
    return SAMPLE_OPPORTUNITIES.filter((opp) => {
      // 1. Search Query filter
      // Topic searches (e.g. "Python", "STM32", "IELTS") use the course
      // title, field and explicit tags so unrelated courses are not returned
      // just because the topic is mentioned in a long description.
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        const topicKeywords = [
          'python', 'c++', 'java', 'javascript', 'typescript', 'react',
          'node.js', 'sql', 'arduino', 'stm32', 'raspberry pi', 'esp32',
          'microcontroller', 'embedded c', 'matlab', 'calculus', 'algebra',
          'statistics', 'probability', 'physics', 'chemistry', 'biology',
          'ielts', 'toefl', 'english grammar', 'ethical hacking',
          'penetration testing', 'cryptography', 'aws', 'azure', 'docker',
          'kubernetes', 'machine learning', 'deep learning', 'nlp',
          'computer vision', 'data analysis', 'html', 'css', 'linux', 'git'
        ];

        const isTopicSearch = topicKeywords.some((keyword) => keyword === query || keyword.includes(query));

        const searchableTopicText = [
          opp.title,
          opp.field,
          ...(opp.tags || [])
        ].join(' ').toLowerCase();

        const searchableGeneralText = [
          opp.title,
          opp.organization,
          opp.category,
          opp.field,
          opp.location,
          ...(opp.tags || [])
        ].join(' ').toLowerCase();

        const matched = isTopicSearch
          ? searchableTopicText.includes(query)
          : searchableGeneralText.includes(query);

        if (!matched) {
          return false;
        }
      }

      // 2. Category filter
      if (filters.category !== 'All' && opp.category !== filters.category) {
        return false;
      }

      // 3. Field filter
      if (filters.field !== 'All' && opp.field !== filters.field) {
        return false;
      }

      // 4. Level filter
      if (filters.level !== 'All' && opp.level !== filters.level) {
        return false;
      }

      // 5. Location filter
      if (filters.location !== 'All' && opp.location !== filters.location) {
        return false;
      }

      // 6. Funding filter
      if (filters.funding !== 'All' && opp.funding !== filters.funding) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Featured Courses (around 6)
  const featuredOpportunities = useMemo(() => {
    return SAMPLE_OPPORTUNITIES.filter(o => o.featured).slice(0, 6);
  }, []);

  // Currently selected opportunity object for details page
  const selectedOpportunity = useMemo(() => {
    return SAMPLE_OPPORTUNITIES.find(o => o.id === selectedOpportunityId) || null;
  }, [selectedOpportunityId]);

  const savedOpportunities = useMemo(() => {
    return SAMPLE_OPPORTUNITIES.filter(o => bookmarkedIds.includes(o.id));
  }, [bookmarkedIds]);

  const notificationCount = 3;

  // Handlers
  const handleHeroSearch = (query: string) => {
    setIsLoading(true);
    setFilters(prev => ({ ...prev, searchQuery: query }));
    setCurrentPage('explore');
    setTimeout(() => setIsLoading(false), 250);
  };

  const handleCategorySelect = (category: CategoryType) => {
    setIsLoading(true);
    setFilters(prev => ({ ...prev, category }));
    setCurrentPage('explore');
    setTimeout(() => setIsLoading(false), 250);
  };

  const handleFieldSelect = (field: FieldType) => {
    setIsLoading(true);
    setFilters(prev => ({ ...prev, field, category: 'Courses' }));
    setCurrentPage('explore');
    setTimeout(() => setIsLoading(false), 250);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setIsLoading(true);
    setFilters(newFilters);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleClearFilters = () => {
    setIsLoading(true);
    setFilters(INITIAL_FILTERS);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleViewDetails = (id: string) => {
    setSelectedOpportunityId(id);
    setCurrentPage('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOpportunities = () => {
    setCurrentPage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-page text-main flex flex-col font-sans transition-colors selection:bg-primary-light selection:text-primary-dark">
      
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
        onSelectLanguage={setLanguage}
        appearance={appearance}
        themeColor={themeColor}
        onChangeAppearance={setAppearance}
        onChangeColor={setThemeColor}
        savedCount={bookmarkedIds.length}
        notificationCount={notificationCount}
        translations={t.nav}
      />

      {/* Main Content Body based on Page State */}
      <main className="flex-1">
        
        {/* PAGE 1: HOME */}
        {currentPage === 'home' && (
          <div className="space-y-12">
            
            {/* Hero Section */}
            <Hero
              title={t.hero.title}
              description={t.hero.description}
              searchPlaceholder={t.hero.searchPlaceholder}
              searchBtnText={t.hero.searchBtn}
              onSearchSubmit={handleHeroSearch}
            />

            {/* Category Cards */}
            <CategoryCards
              title={t.categories.title}
              subtitle={t.categories.subtitle}
              language={language}
              onSelectField={handleFieldSelect}
            />

            {/* Featured Courses Section */}
            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-main tracking-tight">
                    {t.featured.title}
                  </h2>
                  <p className="text-muted text-sm sm:text-base mt-1">
                    {t.featured.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentPage('explore');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-main hover:text-primary-main/80 transition-colors group"
                >
                  <span>{t.featured.viewAll}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </div>

              {/* Grid of ~6 featured items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredOpportunities.map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onViewDetails={handleViewDetails}
                    language={language}
                    viewDetailsText={t.featured.viewDetails}
                    labels={t.labels}
                    isBookmarked={bookmarkedIds.includes(opp.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            </section>

          </div>
        )}

        {/* PAGE 2: EXPLORE */}
        {currentPage === 'explore' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
            
            {/* Header Title & Search Bar */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">
                {t.explore.title}
              </h1>
              <p className="text-muted text-base">
                {t.explore.subtitle}
              </p>

              {/* Search Bar at Top of Explore */}
              <div className="pt-2">
                <div className="relative flex items-center bg-card rounded-2xl border border-subtle focus-within:border-primary-main shadow-xs transition-all">
                  <Search className="w-5 h-5 text-muted absolute start-4 pointer-events-none" />
                  <input
                    type="text"
                    value={filters.searchQuery}
                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                    placeholder={t.explore.searchPlaceholder}
                    className="w-full ps-11 pe-4 py-3 bg-transparent text-main placeholder:text-muted text-base focus:outline-none"
                  />
                  {filters.searchQuery && (
                    <button
                      onClick={() => setFilters({ ...filters, searchQuery: '' })}
                      className="me-3 text-xs font-semibold px-2 py-1 bg-page text-muted hover:text-main rounded-md border border-subtle"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Layout Grid: Sidebar Filters (Left) + Opportunity Grid (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Filter Panel */}
              <div className="lg:col-span-1">
                <FilterPanel
                  filters={filters}
                  onApplyFilters={handleApplyFilters}
                  onClearFilters={handleClearFilters}
                  translations={{
                    filterTitle: t.explore.filterTitle,
                    filterCategory: t.explore.filterCategory,
                    filterField: t.explore.filterField,
                    filterLevel: t.explore.filterLevel,
                    filterLocation: t.explore.filterLocation,
                    filterFunding: t.explore.filterFunding,
                    applyFilters: t.explore.applyFilters,
                    clearFilters: t.explore.clearFilters,
                    all: t.explore.all,
                    showFilters: t.explore.showFilters,
                    hideFilters: t.explore.hideFilters,
                  }}
                  labels={t.labels}
                />
              </div>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                <OpportunityGrid
                  opportunities={filteredOpportunities}
                  isLoading={isLoading}
                  isError={isError}
                  onRetry={() => {
                    setIsError(false);
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 300);
                  }}
                  onViewDetails={handleViewDetails}
                  onClearSearch={handleClearFilters}
                  language={language}
                  translations={{
                    foundCount: t.explore.foundCount,
                    noResultsTitle: t.explore.noResultsTitle,
                    noResultsDesc: t.explore.noResultsDesc,
                    clearSearchBtn: t.explore.clearSearchBtn,
                    loadingText: t.explore.loadingText,
                    errorText: t.explore.errorText,
                    tryAgain: t.explore.tryAgain,
                    viewDetails: t.featured.viewDetails,
                  }}
                  labels={t.labels}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              </div>

            </div>

          </div>
        )}

        {/* PAGE 3: SAVED / FAVOURITES */}
        {currentPage === 'saved' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight">Saved Courses</h1>
              <p className="text-muted mt-2">Your favourite courses in one place.</p>
            </div>
            {savedOpportunities.length === 0 ? (
              <div className="rounded-2xl border border-subtle bg-card p-10 text-center">
                <h2 className="text-xl font-bold text-main">No saved courses yet</h2>
                <p className="text-muted mt-2">Use the bookmark icon on any course to save it here.</p>
                <button onClick={() => setCurrentPage('explore')} className="mt-5 px-5 py-2.5 rounded-xl bg-primary-main text-white font-semibold">Explore Courses</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedOpportunities.map((opp) => (
                  <OpportunityCard key={opp.id} opportunity={opp} onViewDetails={handleViewDetails} language={language} viewDetailsText={t.featured.viewDetails} labels={t.labels} isBookmarked={true} onToggleBookmark={toggleBookmark} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PAGE 3: OPPORTUNITY DETAILS */}
        {currentPage === 'details' && selectedOpportunity && (
          <OpportunityDetails
            opportunity={selectedOpportunity}
            onBack={handleBackToOpportunities}
            language={language}
            translations={t.details}
            labels={t.labels}
            isBookmarked={bookmarkedIds.includes(selectedOpportunity.id)}
            onToggleBookmark={(id) => toggleBookmark(id)}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
        translations={{
          brand: t.nav.brand,
          tagline: t.footer.tagline,
          rights: t.footer.rights,
          quickLinks: t.footer.quickLinks,
          home: t.nav.home,
          explore: t.nav.explore,
        }}
      />

    </div>
  );
}
