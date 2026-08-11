import React, { useState } from 'react';
import { GraduationCap, Menu, X, Bookmark, Bell } from 'lucide-react';
import { Language, PageType, ThemeAppearance, ThemeColor } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  appearance: ThemeAppearance;
  themeColor: ThemeColor;
  onChangeAppearance: (app: ThemeAppearance) => void;
  onChangeColor: (color: ThemeColor) => void;
  savedCount: number;
  notificationCount?: number;
  translations: {
    brand: string;
    home: string;
    explore: string;
    language: string;
    theme: string;
    appearance: string;
    mainColor: string;
    light: string;
    dark: string;
    blue: string;
    green: string;
    red: string;
    orange: string;
    savedCount: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onSelectLanguage,
  appearance,
  themeColor,
  onChangeAppearance,
  onChangeColor,
  savedCount,
  notificationCount = 0,
  translations
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur-md border-b border-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Name (Left) */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-start focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-main flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-lg font-bold tracking-tight text-main group-hover:text-primary-main transition-colors">
            {translations.brand}
          </span>
        </button>

        {/* Desktop Controls & Nav Links (Right) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-primary-light text-primary-dark font-semibold'
                  : 'text-muted hover:text-main hover:bg-page'
              }`}
            >
              {translations.home}
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'explore'
                  ? 'bg-primary-light text-primary-dark font-semibold'
                  : 'text-muted hover:text-main hover:bg-page'
              }`}
            >
              {translations.explore}
            </button>
            <button
              onClick={() => onNavigate('saved')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-main hover:bg-page"
              title="Saved courses"
            >
              <Bookmark className="w-4 h-4 text-primary-main" />
              <span className="text-xs bg-primary-light text-primary-dark font-bold px-1.5 py-0.5 rounded-full">{savedCount}</span>
            </button>
            <button
              type="button"
              className="relative p-2 rounded-lg text-muted hover:text-main hover:bg-page"
              title="Notifications"
              onClick={() => alert('Notifications: New courses, saved-course updates, and category recommendations are available.')}
            >
              <Bell className="w-4 h-4" />
              {notificationCount > 0 && <span className="absolute -top-0.5 -end-0.5 min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[10px] leading-4 text-center font-bold">{notificationCount}</span>}
            </button>
          </nav>

          <div className="h-5 w-px bg-subtle" />

          <div className="flex items-center gap-3">
            <LanguageSelector
              currentLanguage={language}
              onSelectLanguage={onSelectLanguage}
              label={translations.language}
            />
            <ThemeSelector
              appearance={appearance}
              color={themeColor}
              onChangeAppearance={onChangeAppearance}
              onChangeColor={onChangeColor}
              translations={{
                theme: translations.theme,
                appearance: translations.appearance,
                mainColor: translations.mainColor,
                light: translations.light,
                dark: translations.dark,
                blue: translations.blue,
                green: translations.green,
                red: translations.red,
                orange: translations.orange,
              }}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => onNavigate('saved')} className="relative p-2 rounded-lg text-muted hover:text-main hover:bg-page border border-subtle" title="Saved courses">
            <Bookmark className="w-5 h-5" />
            <span className="absolute -top-1 -end-1 min-w-4 h-4 px-1 rounded-full bg-primary-main text-white text-[9px] leading-4 text-center font-bold">{savedCount}</span>
          </button>
          <button onClick={() => alert('Notifications: New courses, saved-course updates, and category recommendations are available.')} className="relative p-2 rounded-lg text-muted hover:text-main hover:bg-page border border-subtle" title="Notifications">
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && <span className="absolute -top-1 -end-1 min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[9px] leading-4 text-center font-bold">{notificationCount}</span>}
          </button>
          <LanguageSelector
            currentLanguage={language}
            onSelectLanguage={onSelectLanguage}
            label={translations.language}
          />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-muted hover:text-main hover:bg-page border border-subtle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-subtle bg-card px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-start px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-primary-light text-primary-dark font-semibold'
                  : 'text-main hover:bg-page'
              }`}
            >
              {translations.home}
            </button>
            <button
              onClick={() => {
                onNavigate('explore');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-start px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                currentPage === 'explore'
                  ? 'bg-primary-light text-primary-dark font-semibold'
                  : 'text-main hover:bg-page'
              }`}
            >
              {translations.explore}
            </button>
          </div>

          <button onClick={() => { onNavigate('saved'); setMobileMenuOpen(false); }} className="w-full text-start px-4 py-3 rounded-xl text-base font-medium text-main hover:bg-page">
            <Bookmark className="inline w-4 h-4 me-2" /> Saved Courses ({savedCount})
          </button>

          <div className="pt-2 border-t border-subtle flex items-center justify-between">
            <span className="text-sm font-medium text-muted">{translations.theme}:</span>
            <ThemeSelector
              appearance={appearance}
              color={themeColor}
              onChangeAppearance={onChangeAppearance}
              onChangeColor={onChangeColor}
              translations={{
                theme: translations.theme,
                appearance: translations.appearance,
                mainColor: translations.mainColor,
                light: translations.light,
                dark: translations.dark,
                blue: translations.blue,
                green: translations.green,
                red: translations.red,
                orange: translations.orange,
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};
