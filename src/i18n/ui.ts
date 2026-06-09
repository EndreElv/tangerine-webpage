// UI + home-page copy for every locale.
// English is the source of truth; Spanish and French follow the approved
// wording on tangerinecentral.org/es and /fr; Arabic is machine-translated
// and pending human review. Brand names (Tangerine®) stay in Latin script.
import type { Locale } from './index';

export interface UIStrings {
  nav: {
    home: string;
    products: string;
    resources: string;
    support: string;
    userStories: string;
    impact: string;
    faqs: string;
    getTangerine: string;
    help: string;
    contact: string;
    about: string;
    getStarted: string;
  };
  /** Display names for each product, per locale (some translate, some don't). */
  products: Record<'p-tangerine' | 'p-teach' | 'p-coach' | 'p-acuity', string>;
  footer: {
    tagline: string; // contains {n} for the country count
    rights: string;
    trademark: string;
  };
  langLabel: string;
  home: {
    heroTitleA: string; // first line
    heroTitleB: string; // second line (after the break)
    heroSub: string;
    heroBody: string;
    suiteEyebrow: string;
    suiteTitle: string;
    explore: string; // "Explore" — product name + arrow appended in template
    productPoints: Record<'p-tangerine' | 'p-teach' | 'p-coach', string[]>;
    features: { title: string; body: string }[];
    impactTitle: string;
    statLanguages: string;
    statCountries: string;
    statOrganizations: string;
    storiesEyebrow: string;
    storiesTitle: string;
    continueReading: string;
    stories: string[];
    communityTitle: string;
    ctaTitle: string;
    ctaSub: string;
  };
}

export const UI: Record<Locale, UIStrings> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      resources: 'Resources',
      support: 'Support',
      userStories: 'User Stories',
      impact: 'Impact',
      faqs: 'FAQs',
      getTangerine: 'Get Tangerine',
      help: 'Help',
      contact: 'Contact Us',
      about: 'About',
      getStarted: 'Get Started',
    },
    products: {
      'p-tangerine': 'Tangerine®',
      'p-teach': 'Tangerine:Teach',
      'p-coach': 'Tangerine:Coach',
      'p-acuity': 'Tangerine:Acuity',
    },
    footer: {
      tagline:
        'Open-source, offline-first data collection for education — deployed in {n} countries.',
      rights: '©2025 Tangerine Central, LLC. All Rights Reserved.',
      trademark: 'The Tangerine Logo is a registered trademark of Research Triangle Institute.',
    },
    langLabel: 'Language',
    home: {
      heroTitleA: 'Actionable insights,',
      heroTitleB: 'anywhere.',
      heroSub: 'Supporting education and innovation.',
      heroBody:
        'Tangerine® is transforming how education systems collect data, assess learning, and support teachers — especially in resource-constrained environments. Open-source and offline-first.',
      suiteEyebrow: 'The Suite',
      suiteTitle: 'Tangerine® Product Suite',
      explore: 'Explore',
      productPoints: {
        'p-tangerine': [
          'Large-scale assessments and surveys by trained data-collection teams',
          'Automatically syncs results to secure servers for centralized analysis',
          'Monitor learning outcomes, identify trends, and inform policy',
        ],
        'p-teach': [
          'Track student attendance, behavior, and learning progress',
          'Groups students and recommends targeted interventions',
          'Embedded feedback and reporting tools for educators',
        ],
        'p-coach': [
          'Conduct classroom observations and give teacher feedback',
          'Instant results and suggested feedback for real-time coaching',
          'Monitor instructional quality across schools or regions',
        ],
      },
      features: [
        {
          title: 'Global Impact',
          body: 'Over 5 million assessments and surveys conducted across 65 countries, supported by 80 organizations and researchers.',
        },
        {
          title: 'Timely Data',
          body: 'Say goodbye to weeks of waiting. Results are available immediately upon upload for timely, accurate insights.',
        },
        {
          title: 'Versatile Capabilities',
          body: 'Beyond academics — non-cognitive assessments, inclusive education, and social-emotional learning.',
        },
      ],
      impactTitle: 'Tangerine’s local and global impact',
      statLanguages: 'languages',
      statCountries: 'countries worldwide',
      statOrganizations: 'organizations',
      storiesEyebrow: 'User Stories',
      storiesTitle: 'From the field',
      continueReading: 'Continue Reading',
      stories: [
        'Tablets Are In, Paper Is Out: School-to-School International Embracing Electronic Data Collection',
        'System-Led Assessment at Scale in India',
      ],
      communityTitle: 'Tangerine® Community',
      ctaTitle: 'Ready to try Tangerine?',
      ctaSub: 'Start a free trial today.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      resources: 'Recursos',
      support: 'Soporte',
      userStories: 'Historias de usuarios',
      impact: 'Impacto',
      faqs: 'Preguntas frecuentes',
      getTangerine: 'Obtener Tangerine',
      help: 'Ayuda',
      contact: 'Contacte con nosotros',
      about: 'Acerca de',
      getStarted: 'Comenzar',
    },
    products: {
      'p-tangerine': 'Tangerine®',
      'p-teach': 'Tangerine:Teach',
      'p-coach': 'Tangerine:Coach',
      'p-acuity': 'Tangerine:Agudeza',
    },
    footer: {
      tagline:
        'Recopilación de datos de código abierto y sin conexión para la educación, implementada en {n} países.',
      rights: '©2025 Tangerine Central, LLC. Todos los derechos reservados.',
      trademark: 'El logotipo Tangerine es una marca registrada de Research Triangle Institute.',
    },
    langLabel: 'Idioma',
    home: {
      heroTitleA: 'Información práctica',
      heroTitleB: 'en cualquier lugar.',
      heroSub: 'Apoyo a la educación y la innovación.',
      heroBody:
        'Tangerine® está transformando la forma en que los sistemas educativos recopilan datos, evalúan el aprendizaje y apoyan a los profesores, especialmente en entornos con recursos limitados. De código abierto y sin conexión.',
      suiteEyebrow: 'La Suite',
      suiteTitle: 'Suite de productos Tangerine®',
      explore: 'Explorar',
      productPoints: {
        'p-tangerine': [
          'Evaluaciones y encuestas a gran escala realizadas por equipos capacitados de recopilación de datos',
          'Sincroniza automáticamente los resultados con servidores seguros para un análisis centralizado',
          'Supervise los resultados del aprendizaje, identifique tendencias e informe las políticas',
        ],
        'p-teach': [
          'Realice un seguimiento de la asistencia, el comportamiento y el progreso del aprendizaje de los alumnos',
          'Agrupa a los alumnos y recomienda intervenciones específicas',
          'Herramientas integradas de retroalimentación e informes para educadores',
        ],
        'p-coach': [
          'Realice observaciones en el aula y ofrezca retroalimentación a los docentes',
          'Resultados instantáneos y sugerencias para una tutoría en tiempo real',
          'Supervise la calidad de la enseñanza en escuelas o regiones',
        ],
      },
      features: [
        {
          title: 'Impacto mundial',
          body: 'Más de 5 millones de evaluaciones y encuestas realizadas en 65 países, con el apoyo de 80 organizaciones e investigadores.',
        },
        {
          title: 'Datos puntuales',
          body: 'Diga adiós a las semanas de espera. Los resultados están disponibles inmediatamente tras la carga, para obtener información precisa y oportuna.',
        },
        {
          title: 'Capacidades versátiles',
          body: 'Más allá de lo académico: evaluaciones no cognitivas, educación inclusiva y aprendizaje socioemocional.',
        },
      ],
      impactTitle: 'El impacto local y mundial de Tangerine',
      statLanguages: 'idiomas',
      statCountries: 'países de todo el mundo',
      statOrganizations: 'organizaciones',
      storiesEyebrow: 'Historias de usuarios',
      storiesTitle: 'Desde el terreno',
      continueReading: 'Seguir leyendo',
      stories: [
        'Llegaron las tabletas, se acabó el papel: School-to-School International adopta la recopilación electrónica de datos',
        'Evaluación liderada por el sistema a gran escala en la India',
      ],
      communityTitle: 'Comunidad Tangerine®',
      ctaTitle: '¿Listo para probar Tangerine?',
      ctaSub: 'Comience hoy su prueba gratuita.',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      resources: 'Ressources',
      support: 'Assistance',
      userStories: 'Témoignages d’utilisateurs',
      impact: 'Impact',
      faqs: 'Foire aux questions',
      getTangerine: 'Obtenir Tangerine',
      help: 'Aide',
      contact: 'Contactez-nous',
      about: 'À propos',
      getStarted: 'Commencer',
    },
    products: {
      'p-tangerine': 'Tangerine®',
      'p-teach': 'Tangerine: Enseigner',
      'p-coach': 'Tangerine: Coach',
      'p-acuity': 'Tangerine: Acuité',
    },
    footer: {
      tagline:
        'Collecte de données open source et hors ligne pour l’éducation, déployée dans {n} pays.',
      rights: '©2025 Tangerine Central, LLC. Tous droits réservés.',
      trademark: 'Le logo Tangerine est une marque déposée de Research Triangle Institute.',
    },
    langLabel: 'Langue',
    home: {
      heroTitleA: 'Des informations exploitables,',
      heroTitleB: 'où que vous soyez.',
      heroSub: 'Soutenir l’éducation et l’innovation.',
      heroBody:
        'Tangerine® transforme la manière dont les systèmes éducatifs collectent des données, évaluent l’apprentissage et soutiennent les enseignants, particulièrement dans les environnements aux ressources limitées. Open source et hors ligne.',
      suiteEyebrow: 'La suite',
      suiteTitle: 'Suite de produits Tangerine®',
      explore: 'Découvrir',
      productPoints: {
        'p-tangerine': [
          'Évaluations et enquêtes à grande échelle menées par des équipes de collecte formées',
          'Synchronise automatiquement les résultats vers des serveurs sécurisés pour une analyse centralisée',
          'Suivez les résultats d’apprentissage, identifiez les tendances et éclairez les politiques',
        ],
        'p-teach': [
          'Suivez l’assiduité, le comportement et les progrès des élèves',
          'Regroupe les élèves et recommande des interventions ciblées',
          'Outils intégrés de retour d’information et de rapports pour les enseignants',
        ],
        'p-coach': [
          'Réalisez des observations en classe et donnez un retour aux enseignants',
          'Résultats instantanés et suggestions pour un accompagnement en temps réel',
          'Suivez la qualité de l’enseignement dans les écoles ou les régions',
        ],
      },
      features: [
        {
          title: 'Impact mondial',
          body: 'Plus de 5 millions d’évaluations et d’enquêtes menées dans 65 pays, avec le soutien de 80 organisations et chercheurs.',
        },
        {
          title: 'Données opportunes',
          body: 'Fini les semaines d’attente. Les résultats sont disponibles immédiatement après le téléversement, pour des informations précises et opportunes.',
        },
        {
          title: 'Capacités polyvalentes',
          body: 'Au-delà du scolaire : évaluations non cognitives, éducation inclusive et apprentissage socio-émotionnel.',
        },
      ],
      impactTitle: 'L’impact local et mondial de Tangerine',
      statLanguages: 'langues',
      statCountries: 'pays dans le monde',
      statOrganizations: 'organisations',
      storiesEyebrow: 'Témoignages d’utilisateurs',
      storiesTitle: 'Sur le terrain',
      continueReading: 'Lire la suite',
      stories: [
        'Les tablettes arrivent, le papier disparaît : School-to-School International adopte la collecte de données électronique',
        'Une évaluation pilotée par le système à grande échelle en Inde',
      ],
      communityTitle: 'Communauté Tangerine®',
      ctaTitle: 'Prêt à essayer Tangerine ?',
      ctaSub: 'Commencez votre essai gratuit dès aujourd’hui.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      resources: 'الموارد',
      support: 'الدعم',
      userStories: 'قصص المستخدمين',
      impact: 'الأثر',
      faqs: 'الأسئلة الشائعة',
      getTangerine: 'احصل على Tangerine',
      help: 'المساعدة',
      contact: 'اتصل بنا',
      about: 'من نحن',
      getStarted: 'ابدأ الآن',
    },
    products: {
      'p-tangerine': 'Tangerine®',
      'p-teach': 'Tangerine:Teach',
      'p-coach': 'Tangerine:Coach',
      'p-acuity': 'Tangerine:Acuity',
    },
    footer: {
      tagline:
        'جمع بيانات مفتوح المصدر يعمل دون اتصال للتعليم — منتشر في {n} دولة.',
      rights: '©2025 Tangerine Central, LLC. جميع الحقوق محفوظة.',
      trademark: 'شعار Tangerine علامة تجارية مسجلة لمعهد Research Triangle Institute.',
    },
    langLabel: 'اللغة',
    home: {
      heroTitleA: 'رؤى قابلة للتنفيذ،',
      heroTitleB: 'في أي مكان.',
      heroSub: 'دعم التعليم والابتكار.',
      heroBody:
        'يعمل Tangerine® على تحويل الطريقة التي تجمع بها الأنظمة التعليمية البيانات وتقيّم التعلّم وتدعم المعلمين — لا سيما في البيئات محدودة الموارد. مفتوح المصدر ويعمل دون اتصال.',
      suiteEyebrow: 'المجموعة',
      suiteTitle: 'مجموعة منتجات Tangerine®',
      explore: 'استكشف',
      productPoints: {
        'p-tangerine': [
          'تقييمات ودراسات استقصائية واسعة النطاق تنفذها فرق مدرّبة على جمع البيانات',
          'يزامن النتائج تلقائيًا مع خوادم آمنة لإجراء تحليل مركزي',
          'تابع نتائج التعلّم، وحدّد الاتجاهات، ووجّه السياسات',
        ],
        'p-teach': [
          'تتبّع حضور الطلاب وسلوكهم وتقدّمهم في التعلّم',
          'يجمّع الطلاب ويوصي بتدخلات مستهدفة',
          'أدوات مدمجة للملاحظات وإعداد التقارير للمعلمين',
        ],
        'p-coach': [
          'أجرِ ملاحظات صفية وقدّم ملاحظات للمعلمين',
          'نتائج فورية واقتراحات للإرشاد في الوقت الفعلي',
          'راقب جودة التدريس عبر المدارس أو المناطق',
        ],
      },
      features: [
        {
          title: 'الأثر العالمي',
          body: 'أُجريَ أكثر من 5 ملايين تقييم ودراسة استقصائية في 65 دولة، بدعم من 80 منظمة وباحثًا.',
        },
        {
          title: 'بيانات في الوقت المناسب',
          body: 'ودّع أسابيع الانتظار. تتوفر النتائج فور رفعها للحصول على رؤى دقيقة وفي الوقت المناسب.',
        },
        {
          title: 'قدرات متعددة الاستخدامات',
          body: 'إلى ما هو أبعد من الأكاديميات — تقييمات غير معرفية، وتعليم شامل، وتعلّم اجتماعي وعاطفي.',
        },
      ],
      impactTitle: 'أثر Tangerine محليًا وعالميًا',
      statLanguages: 'لغة',
      statCountries: 'دولة حول العالم',
      statOrganizations: 'منظمة',
      storiesEyebrow: 'قصص المستخدمين',
      storiesTitle: 'من الميدان',
      continueReading: 'متابعة القراءة',
      stories: [
        'الأجهزة اللوحية تحلّ والورق يرحل: منظمة School-to-School International تتبنى جمع البيانات إلكترونيًا',
        'تقييم بقيادة النظام على نطاق واسع في الهند',
      ],
      communityTitle: 'مجتمع Tangerine®',
      ctaTitle: 'هل أنت مستعد لتجربة Tangerine؟',
      ctaSub: 'ابدأ نسختك التجريبية المجانية اليوم.',
    },
  },
};
