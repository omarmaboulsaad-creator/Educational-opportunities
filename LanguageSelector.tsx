import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  label: string;
}

const LANGUAGES: { code: Language; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
  label
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-start" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-subtle bg-card text-main hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary-main"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <Globe className="w-4 h-4 text-muted" />
        <span className="hidden sm:inline me-1">{selectedLang.nativeName}</span>
        <span className="sm:hidden">{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute end-0 mt-2 w-44 rounded-xl shadow-lg bg-card border border-subtle z-50 py-1 overflow-hidden transition-all animate-in fade-in duration-150">
          <div className="px-3 py-1.5 text-xs font-semibold text-muted border-b border-subtle">
            {label}
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                onSelectLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors text-start ${
                currentLanguage === lang.code
                  ? 'bg-primary-light font-semibold text-primary-dark'
                  : 'text-main hover:bg-primary-light/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </div>
              {currentLanguage === lang.code && (
                <Check className="w-4 h-4 text-primary-main" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
