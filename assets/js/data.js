const PROJECTS = {
  salesflow: {
    slug: 'salesflow',
    title: 'SalesFlow',
    subtitle: 'نظام إدارة المبيعات والتوزيع',
    category: 'systems',
    categoryLabel: 'نظام متكامل',
    summary: 'نظام لإدارة المبيعات والمخزون والفواتير والعملاء والموردين والمندوبين والتوزيع والتقارير ضمن منظومة موحدة.',
    features: ['إدارة المبيعات', 'إدارة المخزون', 'الفواتير', 'العملاء والموردون', 'المندوبون والتوزيع', 'التقارير'],
    accent: 'blue'
  },
  dawaai: {
    slug: 'dawaai',
    title: 'Dawaai',
    subtitle: 'منظومة دوائي',
    category: 'apps',
    categoryLabel: 'منظومة مترابطة',
    summary: 'منظومة للبحث عن الأدوية تضم 3 أجزاء مترابطة: تطبيق المستخدم، تطبيق الصيدلية، ولوحة تحكم ويب لإدارة البيانات والخدمات.',
    features: ['تطبيق المستخدم', 'تطبيق الصيدلية', 'لوحة تحكم ويب', 'إدارة البيانات', 'إدارة الخدمات', 'البحث عن الأدوية'],
    accent: 'teal'
  },
  restaurant: {
    slug: 'restaurant',
    title: 'نظام إدارة المطاعم',
    subtitle: 'Restaurant Management',
    category: 'systems',
    categoryLabel: 'نظام إدارة',
    summary: 'نظام لإدارة المبيعات والطلبات والفواتير والطاولات والجلسات والخزائن والطباعة والتقارير.',
    features: ['المبيعات', 'الطلبات', 'الفواتير', 'الطاولات والجلسات', 'الخزائن', 'الطباعة والتقارير'],
    accent: 'orange'
  },
  ecommerce: {
    slug: 'ecommerce',
    title: 'منصة تجارة إلكترونية',
    subtitle: 'E-Commerce Platform',
    category: 'web',
    categoryLabel: 'منصة ويب',
    summary: 'منصة لإدارة وعرض المنتجات والتصنيفات والطلبات والمستخدمين والعمليات الأساسية للتجارة الإلكترونية.',
    features: ['المنتجات', 'التصنيفات', 'الطلبات', 'المستخدمون', 'عرض المنتجات', 'عمليات التجارة الإلكترونية'],
    accent: 'purple'
  },
  jalsat: {
    slug: 'jalsat',
    title: 'Jalsat',
    subtitle: 'تطبيق جلسات',
    category: 'apps',
    categoryLabel: 'تطبيق',
    summary: 'تطبيق لإدارة جلسات المقاهي والكافيهات والطاولات ومدة الجلسة والخدمات المرتبطة بها.',
    features: ['إدارة الجلسات', 'المقاهي والكافيهات', 'الطاولات', 'مدة الجلسة', 'الخدمات المرتبطة'],
    accent: 'amber'
  },
  licensing: {
    slug: 'licensing',
    title: 'إدارة تراخيص الأنظمة',
    subtitle: 'Licensing System',
    category: 'systems',
    categoryLabel: 'نظام',
    summary: 'حل لإدارة التراخيص والاشتراكات والتفعيل وتواريخ الانتهاء ومتابعة صلاحية الاستخدام.',
    features: ['التراخيص', 'الاشتراكات', 'التفعيل', 'تواريخ الانتهاء', 'متابعة صلاحية الاستخدام'],
    accent: 'indigo'
  },
  hotel: {
    slug: 'hotel',
    title: 'نظام إدارة فنادق',
    subtitle: 'Hotel Management',
    category: 'systems',
    categoryLabel: 'نظام إدارة',
    summary: 'نظام لإدارة الحجوزات والغرف والعملاء والخدمات الفندقية والعمليات اليومية.',
    features: ['الحجوزات', 'الغرف', 'العملاء', 'الخدمات الفندقية', 'العمليات اليومية'],
    accent: 'cyan'
  },
  services: {
    slug: 'services',
    title: 'الخدمات المهنية والمنزلية',
    subtitle: 'Professional & Home Services',
    category: 'apps',
    categoryLabel: 'تطبيق خدمات',
    summary: 'يربط المستخدمين بمقدمي خدمات مثل الأطباء والممرضين والسباكين والكهربائيين وغيرهم.',
    features: ['ربط المستخدم بمقدم الخدمة', 'خدمات طبية', 'خدمات منزلية', 'مقدمو خدمات متعددون'],
    accent: 'green'
  },
  school: {
    slug: 'school',
    title: 'تسجيل الطلبة لمدرسة',
    subtitle: 'Student Registration',
    category: 'web',
    categoryLabel: 'حل ويب',
    summary: 'حل ويب لتسجيل بيانات الطلبة وتنظيم طلبات التسجيل وإدارتها إلكترونيًا.',
    features: ['تسجيل بيانات الطلبة', 'طلبات التسجيل', 'تنظيم الطلبات', 'الإدارة الإلكترونية'],
    accent: 'sky'
  },
  prayer: {
    slug: 'prayer',
    title: 'مواقيت الصلاة والقبلة',
    subtitle: 'Prayer & Qibla',
    category: 'apps',
    categoryLabel: 'تطبيق',
    summary: 'يوفر مواقيت الصلاة واتجاه القبلة والأذكار والتسبيح ضمن واجهة موحدة وسهلة.',
    features: ['مواقيت الصلاة', 'اتجاه القبلة', 'الأذكار', 'التسبيح', 'واجهة موحدة'],
    accent: 'emerald'
  },
  tradeops: {
    slug: 'tradeops',
    title: 'TradeOps',
    subtitle: 'منصة إدارة المناقصات والتوريد',
    category: 'systems',
    categoryLabel: 'منصة متكاملة',
    summary: 'منصة لإدارة المناقصات والعقود والضمانات وطلبات الاعتماد والشحنات والتقارير ضمن منظومة موحدة.',
    features: ['المناقصات', 'العقود', 'الضمانات', 'طلبات الاعتماد', 'الشحنات', 'التقارير'],
    accent: 'navy'
  }
};
