import React, { useState, useRef, useEffect } from 'react';
import { Palette, Sun, Moon, Check, ChevronDown } from 'lucide-react';
import { ThemeAppearance, ThemeColor } from '../types';

interface ThemeSelectorProps {
  appearance: ThemeAppearance;
  color: ThemeColor;
  onChangeAppearance: (app: ThemeAppearance) => void;
  onChangeColor: (color: ThemeColor) => void;
  translations: {
    theme: string;
    appearance: string;
    mainColor: string;
    light: string;
    dark: string;
    blue: string;
    green: string;
    red: string;
    orange: string;
  };
}

const COLORS: { id: ThemeColor; nameKey: 'blue' | 'green' | 'red' | 'orange'; hex: string }[] = [
  { id: 'blue', nameKey: 'blue', hex: '#2563eb' },
  { id: 'green', nameKey: 'green', hex: '#16a34a' },
  { id: 'red', nameKey: 'red', hex: '#dc2626' },
  { id: 'orange', nameKey: 'orange', hex: '#ea580c' },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  appearance,
  color,
  onChangeAppearance,
  onChangeColor,
  translations
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        aria-label={translations.theme}
      >
        {appearance === 'light' ? (
          <Sun className="w-4 h-4 text-amber-500" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-400" />
        )}
        <Palette className="w-4 h-4 text-muted hidden sm:inline" />
        <span className="hidden md:inline me-1">{translations.theme}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute end-0 mt-2 w-64 rounded-xl shadow-lg bg-card border border-subtle z-50 p-3 space-y-4 transition-all animate-in fade-in duration-150">
          {/* Appearance options */}
          <div>
            <label className="block text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
              {translations.appearance}
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-page p-1 rounded-lg border border-subtle">
              <button
                type="button"
                onClick={() => onChangeAppearance('light')}
                className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  appearance === 'light'
                    ? 'bg-card text-main shadow-sm border border-subtle font-semibold'
                    : 'text-muted hover:text-main'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                {translations.light}
              </button>
              <button
                type="button"
                onClick={() => onChangeAppearance('dark')}
                className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  appearance === 'dark'
                    ? 'bg-card text-main shadow-sm border border-subtle font-semibold'
                    : 'text-muted hover:text-main'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                {translations.dark}
              </button>
            </div>
          </div>

          {/* Main Color options */}
          <div>
            <label className="block text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
              {translations.mainColor}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {COLORS.map((c) => {
                const isSelected = color === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onChangeColor(c.id)}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all text-start ${
                      isSelected
                        ? 'border-primary-main bg-primary-light text-primary-dark font-semibold'
                        : 'border-subtle bg-card text-main hover:bg-page'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-xs border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="flex-1 truncate">{translations[c.nameKey]}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-primary-main flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
