import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';
import { Language, PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  language: Language;
  translations: {
    brand: string;
    tagline: string;
    rights: string;
    quickLinks: string;
    home: string;
    explore: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  translations
}) => {
  return (
    <footer className="bg-card border-t border-subtle pt-12 pb-8 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-main flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-main">{translations.brand}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {translations.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-main uppercase tracking-wider">{translations.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-primary-main transition-colors"
                >
                  {translations.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-primary-main transition-colors"
                >
                  {translations.explore}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Prototype Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-main uppercase tracking-wider">About Prototype</h4>
            <p className="text-sm text-muted leading-relaxed">
              Designed as a clean, functional platform prototype supporting English, Arabic (RTL), Turkish, and German with full theme customization.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} {translations.brand}. {translations.rights}</p>
          <p className="flex items-center gap-1">
            <span>Built with care for global learners</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
