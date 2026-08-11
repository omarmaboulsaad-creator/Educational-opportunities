import React from 'react';
import { Sparkles, Cpu, Calculator, FlaskConical, Languages, ShieldCheck, Code2, BarChart3, Globe, Cloud, ArrowRight, ArrowLeft } from 'lucide-react';
import { FieldType, Language } from '../types';

interface CategoryCardsProps {
  title: string;
  subtitle: string;
  language: Language;
  onSelectField: (field: FieldType) => void;
}

const FIELDS_CONFIG: { type: FieldType; icon: React.FC<{ className?: string }>; colorClass: string }[] = [
  { type: 'AI', icon: Sparkles, colorClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400' },
  { type: 'Embedded Systems', icon: Cpu, colorClass: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400' },
  { type: 'Mathematics', icon: Calculator, colorClass: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400' },
  { type: 'Science', icon: FlaskConical, colorClass: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400' },
  { type: 'English', icon: Languages, colorClass: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-400' },
  { type: 'Cybersecurity', icon: ShieldCheck, colorClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400' },
  { type: 'Programming', icon: Code2, colorClass: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-400' },
  { type: 'Data Science', icon: BarChart3, colorClass: 'text-orange-600 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-400' },
  { type: 'Web Development', icon: Globe, colorClass: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 dark:text-teal-400' },
  { type: 'Cloud & DevOps', icon: Cloud, colorClass: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-400' },
];

const FIELD_LABELS: Record<FieldType, { en: string; ar: string }> = {
  AI: { en: 'AI', ar: 'الذكاء الاصطناعي' },
  'Embedded Systems': { en: 'Embedded', ar: 'Embedded Systems' },
  Mathematics: { en: 'Math', ar: 'الرياضيات' },
  Science: { en: 'Science', ar: 'العلوم' },
  English: { en: 'English', ar: 'الإنجليزية' },
  Cybersecurity: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
  Programming: { en: 'Programming', ar: 'البرمجة' },
  'Data Science': { en: 'Data Science', ar: 'علم البيانات' },
  'Web Development': { en: 'Web Development', ar: 'تطوير الويب' },
  'Cloud & DevOps': { en: 'Cloud & DevOps', ar: 'السحابة وDevOps' },
};

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  title,
  subtitle,
  language,
  onSelectField
}) => {
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-main tracking-tight">{title}</h2>
        <p className="text-muted text-sm sm:text-base">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {FIELDS_CONFIG.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.type}
              onClick={() => onSelectField(item.type)}
              className="group p-5 rounded-2xl bg-card border border-subtle hover:border-primary-subtle shadow-xs hover:shadow-md transition-all text-start flex flex-col justify-between space-y-4 focus:outline-none focus:ring-2 focus:ring-primary-main"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.colorClass} transition-transform group-hover:scale-110`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-main group-hover:text-primary-main transition-colors flex items-center justify-between">
                  <span>{FIELD_LABELS[item.type][language === 'ar' ? 'ar' : 'en']}</span>
                  <ArrowIcon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-main" />
                </h3>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
