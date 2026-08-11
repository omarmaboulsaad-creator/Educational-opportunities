import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  nav: {
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
  hero: {
    title: string;
    description: string;
    searchPlaceholder: string;
    searchBtn: string;
    browseCategories: string;
  };
  categories: {
    title: string;
    subtitle: string;
    Courses: string;
    Scholarships: string;
    Internships: string;
    Fellowships: string;
    Grants: string;
    Competitions: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetails: string;
  };
  explore: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterTitle: string;
    filterCategory: string;
    filterField: string;
    filterLevel: string;
    filterLocation: string;
    filterFunding: string;
    applyFilters: string;
    clearFilters: string;
    all: string;
    foundCount: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearSearchBtn: string;
    loadingText: string;
    errorText: string;
    tryAgain: string;
    showFilters: string;
    hideFilters: string;
  };
  details: {
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
  labels: {
    Courses: string;
    Scholarships: string;
    Internships: string;
    Fellowships: string;
    Grants: string;
    Competitions: string;
    Online: string;
    Germany: string;
    'United Kingdom': string;
    'United States': string;
    Turkey: string;
    Canada: string;
    Free: string;
    'Fully Funded': string;
    'Partially Funded': string;
    Paid: string;
    Beginner: string;
    Undergraduate: string;
    'Master\'s': string;
    PhD: string;
    'Computer Science': string;
    Business: string;
    Engineering: string;
    Medicine: string;
    Languages: string;
    Design: string;
    'Data Science': string;
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
    about: string;
  };
}> = {
  en: {
    nav: {
      brand: 'Educational Opportunities',
      home: 'Home',
      explore: 'Explore',
      language: 'Language',
      theme: 'Theme',
      appearance: 'Appearance',
      mainColor: 'Main Color',
      light: 'Light',
      dark: 'Dark',
      blue: 'Blue',
      green: 'Green',
      red: 'Red',
      orange: 'Orange',
      savedCount: 'Saved'
    },
    hero: {
      title: 'Find Your Next Educational Opportunity',
      description: 'Discover courses from leading universities and learning platforms in one place.',
      searchPlaceholder: 'Search for courses, scholarships, skills...',
      searchBtn: 'Search',
      browseCategories: 'Browse by Category'
    },
    categories: {
      title: 'Explore Categories',
      subtitle: 'Browse 500 curated courses across AI, Embedded Systems, Math, Science, English, Cybersecurity, and more.',
      Courses: 'Courses',
      Scholarships: 'Scholarships',
      Internships: 'Internships',
      Fellowships: 'Fellowships',
      Grants: 'Grants',
      Competitions: 'Competitions'
    },
    featured: {
      title: 'Featured Opportunities',
      subtitle: 'Handpicked top-tier opportunities open for applications now',
      viewAll: 'Explore All Opportunities',
      viewDetails: 'View Details'
    },
    explore: {
      title: 'Explore Courses',
      subtitle: 'Filter and search through global academic and professional opportunities',
      searchPlaceholder: 'Search by title, organization, topic, country...',
      filterTitle: 'Filter Courses',
      filterCategory: 'Category',
      filterField: 'Field',
      filterLevel: 'Level',
      filterLocation: 'Location',
      filterFunding: 'Funding',
      applyFilters: 'Apply Filters',
      clearFilters: 'Clear Filters',
      all: 'All',
      foundCount: 'courses found',
      noResultsTitle: 'No courses found',
      noResultsDesc: 'Try adjusting your search terms or clearing selected filters.',
      clearSearchBtn: 'Clear Search',
      loadingText: 'Loading opportunities...',
      errorText: 'Something went wrong while loading opportunities.',
      tryAgain: 'Try Again',
      showFilters: 'Show Filters',
      hideFilters: 'Hide Filters'
    },
    details: {
      backBtn: 'Back to Opportunities',
      organization: 'Organization',
      category: 'Category',
      location: 'Location',
      funding: 'Funding',
      deadline: 'Deadline',
      description: 'Description',
      eligibility: 'Eligibility',
      benefits: 'Benefits',
      requirements: 'Requirements',
      importantDates: 'Important Dates',
      applyNow: 'Apply Now',
      officialNotice: 'Opens official opportunity application page in a new window',
      field: 'Field of Study',
      level: 'Academic Level',
      share: 'Share',
      bookmark: 'Save Opportunity',
      bookmarked: 'Saved',
      copiedLink: 'Link copied to clipboard!'
    },
    labels: {
      Courses: 'Course',
      Scholarships: 'Scholarship',
      Internships: 'Internship',
      Fellowships: 'Fellowship',
      Grants: 'Grant',
      Competitions: 'Competition',
      Online: 'Online',
      Germany: 'Germany',
      'United Kingdom': 'United Kingdom',
      'United States': 'United States',
      Turkey: 'Turkey',
      Canada: 'Canada',
      Free: 'Free',
      'Fully Funded': 'Fully Funded',
      'Partially Funded': 'Partially Funded',
      Paid: 'Paid',
      Beginner: 'Beginner',
      Undergraduate: 'Undergraduate',
      'Master\'s': 'Master\'s',
      PhD: 'PhD',
      'Computer Science': 'Computer Science',
      Business: 'Business',
      Engineering: 'Engineering',
      Medicine: 'Medicine',
      Languages: 'Languages',
      Design: 'Design',
      'Data Science': 'Data Science'
    },
    footer: {
      tagline: 'Empowering students and researchers worldwide to discover global educational pathways.',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      about: 'A simple prototype platform for discovering global academic opportunities.'
    }
  },
  ar: {
    nav: {
      brand: 'الفرص التعليمية',
      home: 'الرئيسية',
      explore: 'استكشف',
      language: 'اللغة',
      theme: 'المظهر',
      appearance: 'النمط',
      mainColor: 'اللون الرئيسي',
      light: 'فاتح',
      dark: 'داكن',
      blue: 'أزرق',
      green: 'أخضر',
      red: 'أحمر',
      orange: 'برتقالي',
      savedCount: 'المحفوظات'
    },
    hero: {
      title: 'اعثر على فرصتك التعليمية القادمة',
      description: 'اكتشف الدورات التعليمية من جامعات ومنصات تعليمية عالمية في مكان واحد.',
      searchPlaceholder: 'ابحث عن دورات، منح دراسية، مهارات...',
      searchBtn: 'بحث',
      browseCategories: 'تصفح حسب الفئة'
    },
    categories: {
      title: 'استكشف الفئات',
      subtitle: 'تصفح 200 دورة مختارة في الذكاء الاصطناعي والـEmbedded والرياضيات والعلوم والإنجليزية والأمن السيبراني وغيرها.',
      Courses: 'دورات',
      Scholarships: 'منح دراسية',
      Internships: 'تدريب عملي',
      Fellowships: 'زمالات',
      Grants: 'منح تمويلية',
      Competitions: 'مسابقات'
    },
    featured: {
      title: 'فرص مميزة',
      subtitle: 'فرص ممتازة مختارة بعناية ومتاحة للتقديم الآن',
      viewAll: 'استكشف جميع الفرص',
      viewDetails: 'عرض التفاصيل'
    },
    explore: {
      title: 'استكشف الدورات',
      subtitle: 'تصفح وتصفية الدورات الأكاديمية والمهنية العالمية',
      searchPlaceholder: 'ابحث حسب العنوان، المؤسسة، الموضوع، الدولة...',
      filterTitle: 'تصفية الدورات',
      filterCategory: 'الفئة',
      filterField: 'المجال',
      filterLevel: 'المستوى',
      filterLocation: 'الموقع',
      filterFunding: 'التمويل',
      applyFilters: 'تطبيق التصفية',
      clearFilters: 'إلغاء التصفية',
      all: 'الكل',
      foundCount: 'دورة تعليمية تم العثور عليها',
      noResultsTitle: 'لم يتم العثور على فرص',
      noResultsDesc: 'جرب تعديل مصطلحات البحث أو إلغاء التصفية المحددة.',
      clearSearchBtn: 'إلغاء البحث',
      loadingText: 'جاري تحميل الفرص...',
      errorText: 'حدث خطأ أثناء تحميل الفرص.',
      tryAgain: 'حاول مرة أخرى',
      showFilters: 'إظهار الفلاتر',
      hideFilters: 'إخفاء الفلاتر'
    },
    details: {
      backBtn: 'العودة إلى الفرص',
      organization: 'المؤسسة',
      category: 'الفئة',
      location: 'الموقع',
      funding: 'التمويل',
      deadline: 'الموعد النهائي',
      description: 'الوصف',
      eligibility: 'شروط الأهلية',
      benefits: 'المزايا والفوائد',
      requirements: 'المستندات المطلوبة',
      importantDates: 'تواريخ هامة',
      applyNow: 'قدّم الآن',
      officialNotice: 'يفتح صفحة التقديم الرسمية للفرصة في نافذة جديدة',
      field: 'المجال الدراسي',
      level: 'المستوى الأكاديمي',
      share: 'مشاركة',
      bookmark: 'حفظ الفرصة',
      bookmarked: 'محفوظة',
      copiedLink: 'تم نسخ الرابط إلى الحافظة!'
    },
    labels: {
      Courses: 'دورة',
      Scholarships: 'منحة دراسية',
      Internships: 'تدريب عملي',
      Fellowships: 'زمالة',
      Grants: 'منحة تمويلية',
      Competitions: 'مسابقة',
      Online: 'عبر الإنترنت',
      Germany: 'ألمانيا',
      'United Kingdom': 'المملكة المتحدة',
      'United States': 'الولايات المتحدة',
      Turkey: 'تركيا',
      Canada: 'كندا',
      Free: 'مجاني',
      'Fully Funded': 'ممول بالكامل',
      'Partially Funded': 'ممول جزئياً',
      Paid: 'مدفوع الأجر',
      Beginner: 'مبتدئ',
      Undergraduate: 'بكالوريوس',
      'Master\'s': 'ماجستير',
      PhD: 'دكتوراه',
      'Computer Science': 'علوم الحاسوب',
      Business: 'إدارة الأعمال',
      Engineering: 'الهندسة',
      Medicine: 'الطب',
      Languages: 'اللغات',
      Design: 'التصميم',
      'Data Science': 'علم البيانات'
    },
    footer: {
      tagline: 'تمكين الطلاب والباحثين حول العالم من اكتشاف المسارات التعليمية العالمية.',
      rights: 'جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
      about: 'منصة نموذجية بسيطة لاكتشاف الفرص الأكاديمية العالمية.'
    }
  },
  tr: {
    nav: {
      brand: 'Eğitim Fırsatları',
      home: 'Ana Sayfa',
      explore: 'Keşfet',
      language: 'Dil',
      theme: 'Tema',
      appearance: 'Görünüm',
      mainColor: 'Ana Renk',
      light: 'Açık',
      dark: 'Koyu',
      blue: 'Mavi',
      green: 'Yeşil',
      red: 'Kırmızı',
      orange: 'Turuncu',
      savedCount: 'Kaydedilenler'
    },
    hero: {
      title: 'Sonraki Eğitim Fırsatınızı Bulun',
      description: 'Kursları, bursları, stajları ve diğer fırsatları tek bir yerde keşfedin.',
      searchPlaceholder: 'Kurs, burs, beceri ara...',
      searchBtn: 'Ara',
      browseCategories: 'Kategoriye Göre Göz At'
    },
    categories: {
      title: 'Kategorileri Keşfedin',
      subtitle: 'Akademik ve profesyonel hedeflerinize uygun seçkin programlar',
      Courses: 'Kurslar',
      Scholarships: 'Burslar',
      Internships: 'Stajlar',
      Fellowships: 'Burs/Araştırma Programları',
      Grants: 'Hibe Destekleri',
      Competitions: 'Yarışmalar'
    },
    featured: {
      title: 'Öne Çıkan Fırsatlar',
      subtitle: 'Şu an başvuruya açık özenle seçilmiş en iyi fırsatlar',
      viewAll: 'Tüm Fırsatları Keşfet',
      viewDetails: 'Detayları Gör'
    },
    explore: {
      title: 'Fırsatları Keşfet',
      subtitle: 'Küresel akademik ve profesyonel fırsatları filtreleyin ve arayın',
      searchPlaceholder: 'Başlık, kurum, konu, ülke ile ara...',
      filterTitle: 'Fırsatları Filtrele',
      filterCategory: 'Kategori',
      filterField: 'Alan',
      filterLevel: 'Seviye',
      filterLocation: 'Konum',
      filterFunding: 'Finansman',
      applyFilters: 'Filtreleri Uygula',
      clearFilters: 'Filtreleri Temizle',
      all: 'Tümü',
      foundCount: 'fırsat bulundu',
      noResultsTitle: 'Fırsat bulunamadı',
      noResultsDesc: 'Arama terimlerinizi değiştirmeyi veya filtreleri temizlemeyi deneyin.',
      clearSearchBtn: 'Aramayı Temizle',
      loadingText: 'Fırsatlar yükleniyor...',
      errorText: 'Fırsatlar yüklenirken bir sorun oluştu.',
      tryAgain: 'Tekrar Dene',
      showFilters: 'Filtreleri Göster',
      hideFilters: 'Filtreleri Gizle'
    },
    details: {
      backBtn: 'Fırsatlara Geri Dön',
      organization: 'Kurum',
      category: 'Kategori',
      location: 'Konum',
      funding: 'Finansman',
      deadline: 'Son Başvuru Tarihi',
      description: 'Açıklama',
      eligibility: 'Uygunluk Şartları',
      benefits: 'Avantajlar ve İmkânlar',
      requirements: 'Gerekli Belgeler',
      importantDates: 'Önemli Tarihler',
      applyNow: 'Şimdi Başvur',
      officialNotice: 'Resmi fırsat başvuru sayfasını yeni pencerede açar',
      field: 'Çalışma Alanı',
      level: 'Akademik Seviye',
      share: 'Paylaş',
      bookmark: 'Fırsatı Kaydet',
      bookmarked: 'Kaydedildi',
      copiedLink: 'Bağlantı panoya kopyalandı!'
    },
    labels: {
      Courses: 'Kurs',
      Scholarships: 'Burs',
      Internships: 'Staj',
      Fellowships: 'Araştırma Bursu',
      Grants: 'Hibe',
      Competitions: 'Yarışma',
      Online: 'Çevrim içi',
      Germany: 'Almanya',
      'United Kingdom': 'Birleşik Krallık',
      'United States': 'Amerika Birleşik Devletleri',
      Turkey: 'Türkiye',
      Canada: 'Kanada',
      Free: 'Ücretsiz',
      'Fully Funded': 'Tam Burslu',
      'Partially Funded': 'Yarı Burslu',
      Paid: 'Maaşlı',
      Beginner: 'Başlangıç',
      Undergraduate: 'Lisans',
      'Master\'s': 'Yüksek Lisans',
      PhD: 'Doktora',
      'Computer Science': 'Bilgisayar Bilimleri',
      Business: 'İşletme',
      Engineering: 'Mühendislik',
      Medicine: 'Tıp',
      Languages: 'Diller',
      Design: 'Tasarım',
      'Data Science': 'Veri Bilimi'
    },
    footer: {
      tagline: 'Dünya çapındaki öğrencilerin ve araştırmacıların küresel eğitim yollarını keşfetmelerini sağlar.',
      rights: 'Tüm hakları saklıdır.',
      quickLinks: 'Hızlı Bağlantılar',
      about: 'Küresel akademik fırsatları keşfetmek için tasarlanmış basit bir prototip platform.'
    }
  },
  de: {
    nav: {
      brand: 'Bildungschancen',
      home: 'Startseite',
      explore: 'Entdecken',
      language: 'Sprache',
      theme: 'Design',
      appearance: 'Erscheinungsbild',
      mainColor: 'Hauptfarbe',
      light: 'Hell',
      dark: 'Dunkel',
      blue: 'Blau',
      green: 'Grün',
      red: 'Rot',
      orange: 'Orange',
      savedCount: 'Gespeichert'
    },
    hero: {
      title: 'Finden Sie Ihre nächste Bildungschance',
      description: 'Entdecken Sie Kurse, Stipendien, Praktika und weitere Möglichkeiten an einem Ort.',
      searchPlaceholder: 'Suchen Sie nach Kursen, Stipendien, Fähigkeiten...',
      searchBtn: 'Suchen',
      browseCategories: 'Nach Kategorie durchsuchen'
    },
    categories: {
      title: 'Kategorien entdecken',
      subtitle: 'Durchsuchen Sie ausgewählte Programme für Ihre akademischen und beruflichen Ziele',
      Courses: 'Kurse',
      Scholarships: 'Stipendien',
      Internships: 'Praktika',
      Fellowships: 'Fellowships',
      Grants: 'Förderungen',
      Competitions: 'Wettbewerbe'
    },
    featured: {
      title: 'Hervorgehobene Chancen',
      subtitle: 'Handverlesene Top-Angebote, die derzeit offen für Bewerbungen sind',
      viewAll: 'Alle Angebote entdecken',
      viewDetails: 'Details anzeigen'
    },
    explore: {
      title: 'Chancen entdecken',
      subtitle: 'Filtern und durchsuchen Sie globale akademische und berufliche Möglichkeiten',
      searchPlaceholder: 'Suche nach Titel, Organisation, Thema, Land...',
      filterTitle: 'Angebote filtern',
      filterCategory: 'Kategorie',
      filterField: 'Fachbereich',
      filterLevel: 'Niveau',
      filterLocation: 'Standort',
      filterFunding: 'Finanzierung',
      applyFilters: 'Filter anwenden',
      clearFilters: 'Filter zurücksetzen',
      all: 'Alle',
      foundCount: 'Möglichkeiten gefunden',
      noResultsTitle: 'Keine Angebote gefunden',
      noResultsDesc: 'Versuchen Sie, Ihre Suchbegriffe anzupassen oder ausgewählte Filter zurückzusetzen.',
      clearSearchBtn: 'Suche zurücksetzen',
      loadingText: 'Angebote werden geladen...',
      errorText: 'Beim Laden der Angebote ist ein Fehler aufgetreten.',
      tryAgain: 'Erneut versuchen',
      showFilters: 'Filter anzeigen',
      hideFilters: 'Filter ausblenden'
    },
    details: {
      backBtn: 'Zurück zu den Angeboten',
      organization: 'Organisation',
      category: 'Kategorie',
      location: 'Standort',
      funding: 'Finanzierung',
      deadline: 'Bewerbungsfrist',
      description: 'Beschreibung',
      eligibility: 'Teilnahmevoraussetzungen',
      benefits: 'Vorteile & Leistungen',
      requirements: 'Erforderliche Unterlagen',
      importantDates: 'Wichtige Termine',
      applyNow: 'Jetzt bewerben',
      officialNotice: 'Öffnet die offizielle Bewerbungsseite in einem neuen Fenster',
      field: 'Fachbereich',
      level: 'Akademisches Niveau',
      share: 'Teilen',
      bookmark: 'Angebot speichern',
      bookmarked: 'Gespeichert',
      copiedLink: 'Link in Zwischenablage kopiert!'
    },
    labels: {
      Courses: 'Kurs',
      Scholarships: 'Stipendium',
      Internships: 'Praktikum',
      Fellowships: 'Fellowship',
      Grants: 'Förderung',
      Competitions: 'Wettbewerb',
      Online: 'Online',
      Germany: 'Deutschland',
      'United Kingdom': 'Vereinigtes Königreich',
      'United States': 'Vereinigte Staaten',
      Turkey: 'Türkei',
      Canada: 'Kanada',
      Free: 'Kostenlos',
      'Fully Funded': 'Vollfinanziert',
      'Partially Funded': 'Teilfinanziert',
      Paid: 'Vergütet',
      Beginner: 'Anfänger',
      Undergraduate: 'Bachelor',
      'Master\'s': 'Master',
      PhD: 'Promotion',
      'Computer Science': 'Informatik',
      Business: 'Wirtschaftswissenschaften',
      Engineering: 'Ingenieurwissenschaften',
      Medicine: 'Medizin',
      Languages: 'Sprachen',
      Design: 'Design',
      'Data Science': 'Data Science'
    },
    footer: {
      tagline: 'Unterstützt Studierende und Forschende weltweit beim Entdecken globaler Bildungswege.',
      rights: 'Alle Rechte vorbehalten.',
      quickLinks: 'Schnelllinks',
      about: 'Ein einfacher Prototyp zum Entdecken globaler akademischer Möglichkeiten.'
    }
  }
};
