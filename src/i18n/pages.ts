// Inline page copy (headings, intros, CTAs, form labels, button text) for
// every non-home page, in all four locales. Data-module content (products,
// FAQs, team, help, etc.) is translated separately in ./content/.
// EN is source of truth; ES/FR follow tangerinecentral.org wording where it
// exists; AR is machine-translated, pending review.
import type { Locale } from './index';

export interface PageStrings {
  meta: { aboutTitle: string; aboutDesc: string; contactTitle: string; contactDesc: string;
    faqsTitle: string; faqsDesc: string; getTitle: string; getDesc: string; impactTitle: string;
    impactDesc: string; storiesTitle: string; storiesDesc: string; helpTitle: string; helpDesc: string; };
  common: { home: string; products: string; backHome: string; getStarted: string; readyTitle: string; };
  about: {
    eyebrow: string; h1: string; intro: string; teamLead: string;
    storyEyebrow: string; storyTitle: string; story1: string; story2: string; story3: string;
    beliefEyebrow: string; beliefText: string;
    teamEyebrow: string; teamTitle: string; connectLinkedIn: string;
    podcastEyebrow: string; podcastTitle: string; podcastBody: string; podcastBtn: string;
  };
  contact: {
    eyebrow: string; h1: string; sub: string; formTitle: string;
    name: string; namePh: string; email: string; emailPh: string; org: string; orgPh: string;
    message: string; messagePh: string; send: string; doneTitle: string; doneBody: string;
    asideTitle: string; asideBody: string; getTangerine: string; followTitle: string;
  };
  faqs: { eyebrow: string; h1: string; sub: string; still: string; contactUs: string };
  get: {
    home: string; pricing: string; h1: string; intro1: string; intro2: string;
    mostPopular: string; note: string; includesTitle: string; subBenefits: string[]; includesFoot: string;
    trialEyebrow: string; trialTitle: string; trialBody: string; trialBenefits: string[];
    trialFormTitle: string; name: string; namePh: string; email: string; emailPh: string;
    org: string; orgPh: string; country: string; countryPh: string; updates: string; requestTrial: string;
    trialDoneTitle: string; trialDoneBody: string; backHome: string;
    selfhostBadge: string; selfhostTitle: string; selfhostBody: string; selfhostBtn: string;
    ctaTitle: string; startTrial: string;
  };
  impact: {
    eyebrow: string; h1: string; sub: string;
    statAssessments: string; statCountries: string; statOrganizations: string; statLanguages: string;
    splitTitle: string; split1: string; split2: string; readStories: string; trustedTitle: string;
  };
  stories: { eyebrow: string; h1: string; sub: string; continueReading: string; ctaTitle: string; ctaSub: string; getInTouch: string };
  help: { eyebrow: string; h1: string; sub: string; learnMore: string; ctaTitle: string; ctaSub: string; contactSupport: string };
  helpArticle: { eyebrow: string; home: string; help: string; allTopics: string; next: string; ctaTitle: string; ctaSub: string; contactSupport: string };
}

export const PAGES: Record<Locale, PageStrings> = {
  en: {
    meta: {
      aboutTitle: 'About — Tangerine Central', aboutDesc: 'Tangerine Central is a women-owned small business dedicated to advancing efficient, effective data collection and use in any setting — online or offline.',
      contactTitle: 'Contact — Tangerine', contactDesc: 'Questions about deployment, customization, or a free trial? Our team is here to help.',
      faqsTitle: 'FAQs — Tangerine', faqsDesc: 'Everything from device requirements to data, security, and support.',
      getTitle: 'Get Tangerine — Pricing', getDesc: 'Tangerine is open-source and free to self-host. A paid subscription provides a ready-to-use, hosted and maintained instance.',
      impactTitle: 'Impact — Tangerine', impactDesc: 'Tangerine has modernized reading and mathematics assessments in resource-constrained settings around the world.',
      storiesTitle: 'User Stories — Tangerine', storiesDesc: 'How organizations around the world put Tangerine to work.',
      helpTitle: 'Help — Tangerine', helpDesc: 'Guides and answers for getting the most out of the Tangerine suite.',
    },
    common: { home: 'HOME', products: 'PRODUCTS', backHome: 'Back to home', getStarted: 'Get Started', readyTitle: 'Ready to try Tangerine?' },
    about: {
      eyebrow: 'About', h1: 'What is Tangerine Central?',
      intro: 'Tangerine Central is a women-owned small business dedicated to advancing efficient, effective data collection and use in any setting — online or offline. Our mission is to ease the burden of data collection and deliver timely, actionable insights in even the most resource-constrained settings.',
      teamLead: 'Our team combines expert leadership in learning assessment, digital platform development, AI and data science, program implementation, and capacity strengthening — grounded in decades of experience designing, deploying, and scaling Tangerine. We provide hands-on support with instrument design, deployment, and data analysis, plus training and capacity building so partners can use Tangerine effectively and independently.',
      storyEyebrow: 'From paper to progress', storyTitle: 'The story of Tangerine',
      story1: 'Tangerine was born out of first-hand experience collecting student data in low-resource and remote contexts. During a challenging early-grade reading assessment on an RTI International project, co-founders Carmen and Amber found themselves buried in paper forms, battling malfunctioning staplers, illegible copies, and missing data. The process was slow, outdated, and error-prone. They knew there had to be a better way.',
      story2: 'That moment sparked Tangerine: a digital solution to improve data quality, streamline fieldwork, and enable real-time monitoring — no more waiting weeks to discover surprises in the data. What started in 2011 as a tool for early reading assessments has grown into a versatile, offline-first platform used in {n} countries.',
      story3: 'In 2025, Tangerine was brought under the management of Tangerine Central, led by Carmen and Amber — continuing to help governments and organizations unlock the power of data to improve lives.',
      beliefEyebrow: 'Our guiding belief',
      beliefText: 'Quality, timely data has the power to change lives for the better — and is essential to helping communities shape their own futures.',
      teamEyebrow: 'Our Team', teamTitle: 'Get to know our team', connectLinkedIn: 'Connect on LinkedIn',
      podcastEyebrow: 'Podcast', podcastTitle: 'Open-source tools in low-resource settings',
      podcastBody: 'Hear Dr. Carmen Strigel explain why open-source software like Tangerine and Loquat matters for education in low-resource settings.',
      podcastBtn: 'Listen to the podcast',
    },
    contact: {
      eyebrow: 'Contact Us', h1: 'Let’s talk', sub: 'Questions about deployment, customization, or a free trial? Our team is here to help.',
      formTitle: 'Send us a message', name: 'Full name', namePh: 'Amara Okafor', email: 'Work email', emailPh: 'you@organization.org',
      org: 'Organization', orgPh: 'Your organization', message: 'How can we help?', messagePh: 'Tell us about your program…',
      send: 'Send message', doneTitle: 'Message sent', doneBody: 'Thanks for reaching out — we’ll be in touch soon.',
      asideTitle: 'Other ways to reach us', asideBody: 'Prefer a quick start? Request a trial directly.', getTangerine: 'Get Tangerine', followTitle: 'Follow along',
    },
    faqs: { eyebrow: 'FAQs', h1: 'Frequently asked questions', sub: 'Everything from device requirements to data, security, and support.', still: 'Still have questions?', contactUs: 'Contact us' },
    get: {
      home: 'HOME', pricing: 'PRICING', h1: 'Tangerine subscription pricing',
      intro1: 'Tangerine is open-source software — anyone can download the source code and run it on their own server, for free. This is ideal for organizations with the technical capacity to manage their own hosting and support.',
      intro2: 'A paid subscription to Tangerine Central provides a ready-to-use, hosted and maintained version: your own secure “instance” where you can build assessments, collect and access data, and manage users — without worrying about setup, updates, security, or server maintenance.',
      mostPopular: 'Most popular', note: 'Subscription fees are per year and per organization. Prices are subject to change.',
      includesTitle: 'Every subscription includes',
      subBenefits: ['Technical support and troubleshooting', 'Training resources, including Moodle-based courses', 'Participation in a global peer community of Tangerine users', 'Contribution to and use of a shared instrument library (coming soon)'],
      includesFoot: 'This model supports sustainability and collaboration, while keeping the core software free and open to all.',
      trialEyebrow: 'Free trial', trialTitle: 'Want to try before you buy?',
      trialBody: 'Tell us a little about your program and we’ll set you up with a free trial of the Tangerine suite — assessments, classroom tracking, and coaching, online or off.',
      trialBenefits: ['Open-source & offline-first', 'Deploy on tablets or smartphones', 'Sync to secure servers when connected'],
      trialFormTitle: 'Request your free trial', name: 'Full name', namePh: 'Amara Okafor', email: 'Work email', emailPh: 'you@organization.org',
      org: 'Organization', orgPh: 'e.g. School-to-School International', country: 'Country', countryPh: 'Where will you deploy?',
      updates: 'Send me product updates and field stories.', requestTrial: 'Request trial',
      trialDoneTitle: 'Thanks — you’re on the list!', trialDoneBody: 'Our team will reach out with your trial details shortly.', backHome: 'Back to home',
      selfhostBadge: 'Open source', selfhostTitle: 'Host Tangerine yourself',
      selfhostBody: 'Tangerine’s open nature lets you host the platform on your own server and adapt its code to your needs. We only ask that if you make changes, you share modified code with the community. Tangerine is available under the GNU General Public License.',
      selfhostBtn: 'Source code & docs on GitHub', ctaTitle: 'Ready to get started with Tangerine?', startTrial: 'Start free trial',
    },
    impact: {
      eyebrow: 'Impact', h1: 'Tangerine’s local and global impact', sub: 'Tangerine has modernized reading and mathematics assessments in resource-constrained settings around the world.',
      statAssessments: 'assessments & surveys conducted', statCountries: 'countries', statOrganizations: 'organizations & researchers', statLanguages: 'languages',
      splitTitle: 'Modernizing assessment where it’s needed most',
      split1: 'Over a decade of proven performance, millions of successful assessments, and deployment across {n} countries have established Tangerine as a trusted standard for reliable, versatile data collection — and it is open-source.',
      split2: 'Beyond academics, Tangerine facilitates non-cognitive assessments, inclusive education, and social-emotional learning. We’re not just assessing knowledge; we’re nurturing holistic development.',
      readStories: 'Read user stories', trustedTitle: 'Trusted by a global community',
    },
    stories: { eyebrow: 'User Stories', h1: 'From the field', sub: 'How organizations around the world put Tangerine to work.', continueReading: 'Continue Reading', ctaTitle: 'Have a Tangerine story to share?', ctaSub: 'We’d love to hear how you’re using Tangerine in your program.', getInTouch: 'Get in touch' },
    help: { eyebrow: 'Help', h1: 'How can we help?', sub: 'Guides and answers for getting the most out of the Tangerine suite.', learnMore: 'Learn more', ctaTitle: 'Can’t find what you need?', ctaSub: 'Our team is happy to help with setup, customization, and rollout.', contactSupport: 'Contact support' },
    helpArticle: { eyebrow: 'Help', home: 'HOME', help: 'HELP', allTopics: 'All help topics', next: 'Next:', ctaTitle: 'Still stuck?', ctaSub: 'Our team is happy to help with setup, customization, and rollout.', contactSupport: 'Contact support' },
  },

  es: {
    meta: {
      aboutTitle: 'Acerca de — Tangerine Central', aboutDesc: 'Tangerine Central es una pequeña empresa dirigida por mujeres, dedicada a impulsar la recopilación y el uso de datos de forma eficiente y eficaz en cualquier entorno, en línea o sin conexión.',
      contactTitle: 'Contacto — Tangerine', contactDesc: '¿Preguntas sobre implementación, personalización o una prueba gratuita? Nuestro equipo está aquí para ayudarle.',
      faqsTitle: 'Preguntas frecuentes — Tangerine', faqsDesc: 'Desde los requisitos de los dispositivos hasta los datos, la seguridad y el soporte.',
      getTitle: 'Obtener Tangerine — Precios', getDesc: 'Tangerine es de código abierto y gratuito para autoalojar. Una suscripción de pago ofrece una instancia lista para usar, alojada y mantenida.',
      impactTitle: 'Impacto — Tangerine', impactDesc: 'Tangerine ha modernizado las evaluaciones de lectura y matemáticas en entornos con recursos limitados de todo el mundo.',
      storiesTitle: 'Historias de usuarios — Tangerine', storiesDesc: 'Cómo organizaciones de todo el mundo ponen Tangerine a trabajar.',
      helpTitle: 'Ayuda — Tangerine', helpDesc: 'Guías y respuestas para aprovechar al máximo la suite Tangerine.',
    },
    common: { home: 'INICIO', products: 'PRODUCTOS', backHome: 'Volver al inicio', getStarted: 'Comenzar', readyTitle: '¿Listo para probar Tangerine?' },
    about: {
      eyebrow: 'Acerca de', h1: '¿Qué es Tangerine Central?',
      intro: 'Tangerine Central es una pequeña empresa dirigida por mujeres, dedicada a impulsar la recopilación y el uso de datos de forma eficiente y eficaz en cualquier entorno, en línea o sin conexión. Nuestra misión es aliviar la carga de la recopilación de datos y ofrecer información oportuna y práctica incluso en los entornos con más limitaciones de recursos.',
      teamLead: 'Nuestro equipo combina un liderazgo experto en evaluación del aprendizaje, desarrollo de plataformas digitales, IA y ciencia de datos, implementación de programas y fortalecimiento de capacidades, respaldado por décadas de experiencia en el diseño, la implementación y la expansión de Tangerine. Ofrecemos apoyo práctico en el diseño de instrumentos, la implementación y el análisis de datos, además de formación y desarrollo de capacidades para que los socios puedan usar Tangerine de forma eficaz e independiente.',
      storyEyebrow: 'Del papel al progreso', storyTitle: 'La historia de Tangerine',
      story1: 'Tangerine nació de la experiencia directa de recopilar datos de estudiantes en contextos remotos y con recursos limitados. Durante una difícil evaluación de lectura de los primeros grados en un proyecto de RTI International, las cofundadoras Carmen y Amber se vieron sepultadas en formularios de papel, lidiando con grapadoras averiadas, copias ilegibles y datos faltantes. El proceso era lento, anticuado y propenso a errores. Sabían que tenía que haber una forma mejor.',
      story2: 'Ese momento dio origen a Tangerine: una solución digital para mejorar la calidad de los datos, agilizar el trabajo de campo y permitir el seguimiento en tiempo real, sin tener que esperar semanas para descubrir sorpresas en los datos. Lo que comenzó en 2011 como una herramienta para evaluaciones de lectura inicial se ha convertido en una plataforma versátil y sin conexión utilizada en {n} países.',
      story3: 'En 2025, Tangerine pasó a estar gestionada por Tangerine Central, dirigida por Carmen y Amber, que siguen ayudando a gobiernos y organizaciones a aprovechar el poder de los datos para mejorar vidas.',
      beliefEyebrow: 'Nuestra convicción rectora',
      beliefText: 'Los datos de calidad y oportunos tienen el poder de cambiar vidas para mejor, y son esenciales para ayudar a las comunidades a forjar su propio futuro.',
      teamEyebrow: 'Nuestro equipo', teamTitle: 'Conozca a nuestro equipo', connectLinkedIn: 'Conectar en LinkedIn',
      podcastEyebrow: 'Pódcast', podcastTitle: 'Herramientas de código abierto en entornos con recursos limitados',
      podcastBody: 'Escuche a la Dra. Carmen Strigel explicar por qué el software de código abierto como Tangerine y Loquat es importante para la educación en entornos con recursos limitados.',
      podcastBtn: 'Escuchar el pódcast',
    },
    contact: {
      eyebrow: 'Contacte con nosotros', h1: 'Hablemos', sub: '¿Preguntas sobre implementación, personalización o una prueba gratuita? Nuestro equipo está aquí para ayudarle.',
      formTitle: 'Envíenos un mensaje', name: 'Nombre completo', namePh: 'Amara Okafor', email: 'Correo de trabajo', emailPh: 'usted@organizacion.org',
      org: 'Organización', orgPh: 'Su organización', message: '¿Cómo podemos ayudarle?', messagePh: 'Cuéntenos sobre su programa…',
      send: 'Enviar mensaje', doneTitle: 'Mensaje enviado', doneBody: 'Gracias por escribirnos; nos pondremos en contacto pronto.',
      asideTitle: 'Otras formas de contactarnos', asideBody: '¿Prefiere empezar rápido? Solicite una prueba directamente.', getTangerine: 'Obtener Tangerine', followTitle: 'Síganos',
    },
    faqs: { eyebrow: 'Preguntas frecuentes', h1: 'Preguntas frecuentes', sub: 'Desde los requisitos de los dispositivos hasta los datos, la seguridad y el soporte.', still: '¿Aún tiene preguntas?', contactUs: 'Contáctenos' },
    get: {
      home: 'INICIO', pricing: 'PRECIOS', h1: 'Precios de suscripción de Tangerine',
      intro1: 'Tangerine es software de código abierto: cualquiera puede descargar el código fuente y ejecutarlo en su propio servidor, de forma gratuita. Esto es ideal para organizaciones con la capacidad técnica de gestionar su propio alojamiento y soporte.',
      intro2: 'Una suscripción de pago a Tangerine Central ofrece una versión lista para usar, alojada y mantenida: su propia «instancia» segura donde puede crear evaluaciones, recopilar y acceder a los datos, y gestionar usuarios, sin preocuparse por la configuración, las actualizaciones, la seguridad o el mantenimiento del servidor.',
      mostPopular: 'Más popular', note: 'Las tarifas de suscripción son por año y por organización. Los precios están sujetos a cambios.',
      includesTitle: 'Cada suscripción incluye',
      subBenefits: ['Soporte técnico y resolución de problemas', 'Recursos de formación, incluidos cursos basados en Moodle', 'Participación en una comunidad global de usuarios de Tangerine', 'Contribución y uso de una biblioteca de instrumentos compartida (próximamente)'],
      includesFoot: 'Este modelo respalda la sostenibilidad y la colaboración, manteniendo el software principal gratuito y abierto para todos.',
      trialEyebrow: 'Prueba gratuita', trialTitle: '¿Quiere probar antes de comprar?',
      trialBody: 'Cuéntenos un poco sobre su programa y le prepararemos una prueba gratuita de la suite Tangerine: evaluaciones, seguimiento en el aula y acompañamiento docente, en línea o sin conexión.',
      trialBenefits: ['De código abierto y sin conexión', 'Despliegue en tabletas o smartphones', 'Sincronice con servidores seguros al conectarse'],
      trialFormTitle: 'Solicite su prueba gratuita', name: 'Nombre completo', namePh: 'Amara Okafor', email: 'Correo de trabajo', emailPh: 'usted@organizacion.org',
      org: 'Organización', orgPh: 'p. ej., School-to-School International', country: 'País', countryPh: '¿Dónde lo implementará?',
      updates: 'Envíenme novedades del producto e historias de campo.', requestTrial: 'Solicitar prueba',
      trialDoneTitle: '¡Gracias, ya está en la lista!', trialDoneBody: 'Nuestro equipo se pondrá en contacto con los detalles de su prueba en breve.', backHome: 'Volver al inicio',
      selfhostBadge: 'Código abierto', selfhostTitle: 'Aloje Tangerine usted mismo',
      selfhostBody: 'La naturaleza abierta de Tangerine le permite alojar la plataforma en su propio servidor y adaptar su código a sus necesidades. Solo le pedimos que, si realiza cambios, comparta el código modificado con la comunidad. Tangerine está disponible bajo la Licencia Pública General de GNU.',
      selfhostBtn: 'Código fuente y documentación en GitHub', ctaTitle: '¿Listo para empezar con Tangerine?', startTrial: 'Iniciar prueba gratuita',
    },
    impact: {
      eyebrow: 'Impacto', h1: 'El impacto local y mundial de Tangerine', sub: 'Tangerine ha modernizado las evaluaciones de lectura y matemáticas en entornos con recursos limitados de todo el mundo.',
      statAssessments: 'evaluaciones y encuestas realizadas', statCountries: 'países', statOrganizations: 'organizaciones e investigadores', statLanguages: 'idiomas',
      splitTitle: 'Modernizando la evaluación donde más se necesita',
      split1: 'Más de una década de rendimiento comprobado, millones de evaluaciones exitosas y su implementación en {n} países han consolidado a Tangerine como un estándar de confianza para la recopilación de datos fiable y versátil, y es de código abierto.',
      split2: 'Más allá de lo académico, Tangerine facilita evaluaciones no cognitivas, educación inclusiva y aprendizaje socioemocional. No solo evaluamos conocimientos; fomentamos el desarrollo integral.',
      readStories: 'Leer historias de usuarios', trustedTitle: 'La confianza de una comunidad global',
    },
    stories: { eyebrow: 'Historias de usuarios', h1: 'Desde el terreno', sub: 'Cómo organizaciones de todo el mundo ponen Tangerine a trabajar.', continueReading: 'Seguir leyendo', ctaTitle: '¿Tiene una historia de Tangerine para compartir?', ctaSub: 'Nos encantaría saber cómo usa Tangerine en su programa.', getInTouch: 'Póngase en contacto' },
    help: { eyebrow: 'Ayuda', h1: '¿Cómo podemos ayudarle?', sub: 'Guías y respuestas para aprovechar al máximo la suite Tangerine.', learnMore: 'Más información', ctaTitle: '¿No encuentra lo que necesita?', ctaSub: 'Nuestro equipo estará encantado de ayudarle con la configuración, la personalización y la implementación.', contactSupport: 'Contactar con soporte' },
    helpArticle: { eyebrow: 'Ayuda', home: 'INICIO', help: 'AYUDA', allTopics: 'Todos los temas de ayuda', next: 'Siguiente:', ctaTitle: '¿Sigue atascado?', ctaSub: 'Nuestro equipo estará encantado de ayudarle con la configuración, la personalización y la implementación.', contactSupport: 'Contactar con soporte' },
  },

  fr: {
    meta: {
      aboutTitle: 'À propos — Tangerine Central', aboutDesc: 'Tangerine Central est une petite entreprise dirigée par des femmes, dédiée à une collecte et une utilisation des données efficaces dans tout contexte, en ligne ou hors ligne.',
      contactTitle: 'Contact — Tangerine', contactDesc: 'Des questions sur le déploiement, la personnalisation ou un essai gratuit ? Notre équipe est là pour vous aider.',
      faqsTitle: 'Foire aux questions — Tangerine', faqsDesc: 'Des exigences matérielles aux données, à la sécurité et à l’assistance.',
      getTitle: 'Obtenir Tangerine — Tarifs', getDesc: 'Tangerine est open source et gratuit à auto-héberger. Un abonnement payant fournit une instance prête à l’emploi, hébergée et maintenue.',
      impactTitle: 'Impact — Tangerine', impactDesc: 'Tangerine a modernisé les évaluations de lecture et de mathématiques dans les environnements aux ressources limitées du monde entier.',
      storiesTitle: 'Témoignages d’utilisateurs — Tangerine', storiesDesc: 'Comment des organisations du monde entier utilisent Tangerine.',
      helpTitle: 'Aide — Tangerine', helpDesc: 'Guides et réponses pour tirer le meilleur parti de la suite Tangerine.',
    },
    common: { home: 'ACCUEIL', products: 'PRODUITS', backHome: 'Retour à l’accueil', getStarted: 'Commencer', readyTitle: 'Prêt à essayer Tangerine ?' },
    about: {
      eyebrow: 'À propos', h1: 'Qu’est-ce que Tangerine Central ?',
      intro: 'Tangerine Central est une petite entreprise dirigée par des femmes, dédiée à une collecte et une utilisation des données efficaces dans tout contexte, en ligne ou hors ligne. Notre mission est d’alléger le fardeau de la collecte de données et de fournir des informations exploitables et opportunes, même dans les contextes les plus contraints en ressources.',
      teamLead: 'Notre équipe associe une expertise de premier plan en évaluation des apprentissages, développement de plateformes numériques, IA et science des données, mise en œuvre de programmes et renforcement des capacités, fondée sur des décennies d’expérience dans la conception, le déploiement et la mise à l’échelle de Tangerine. Nous offrons un accompagnement concret pour la conception d’instruments, le déploiement et l’analyse des données, ainsi que de la formation et du renforcement des capacités pour que nos partenaires utilisent Tangerine de manière efficace et autonome.',
      storyEyebrow: 'Du papier au progrès', storyTitle: 'L’histoire de Tangerine',
      story1: 'Tangerine est né d’une expérience directe de collecte de données auprès des élèves dans des contextes éloignés et à faibles ressources. Lors d’une évaluation de lecture des premières années particulièrement difficile dans le cadre d’un projet de RTI International, les cofondatrices Carmen et Amber se sont retrouvées submergées par les formulaires papier, aux prises avec des agrafeuses défaillantes, des copies illisibles et des données manquantes. Le processus était lent, dépassé et source d’erreurs. Elles savaient qu’il devait exister une meilleure solution.',
      story2: 'Ce moment a donné naissance à Tangerine : une solution numérique pour améliorer la qualité des données, simplifier le travail de terrain et permettre un suivi en temps réel — fini les semaines d’attente avant de découvrir des surprises dans les données. Ce qui a commencé en 2011 comme un outil d’évaluation de la lecture précoce est devenu une plateforme polyvalente et hors ligne utilisée dans {n} pays.',
      story3: 'En 2025, Tangerine est passé sous la gestion de Tangerine Central, dirigée par Carmen et Amber, qui continuent d’aider les gouvernements et les organisations à exploiter la puissance des données pour améliorer des vies.',
      beliefEyebrow: 'Notre conviction directrice',
      beliefText: 'Des données de qualité et opportunes ont le pouvoir de changer des vies pour le mieux — et sont essentielles pour aider les communautés à façonner leur propre avenir.',
      teamEyebrow: 'Notre équipe', teamTitle: 'Faites connaissance avec notre équipe', connectLinkedIn: 'Se connecter sur LinkedIn',
      podcastEyebrow: 'Podcast', podcastTitle: 'Les outils open source dans les contextes à faibles ressources',
      podcastBody: 'Écoutez la Dre Carmen Strigel expliquer pourquoi les logiciels open source comme Tangerine et Loquat sont importants pour l’éducation dans les contextes à faibles ressources.',
      podcastBtn: 'Écouter le podcast',
    },
    contact: {
      eyebrow: 'Contactez-nous', h1: 'Discutons', sub: 'Des questions sur le déploiement, la personnalisation ou un essai gratuit ? Notre équipe est là pour vous aider.',
      formTitle: 'Envoyez-nous un message', name: 'Nom complet', namePh: 'Amara Okafor', email: 'E-mail professionnel', emailPh: 'vous@organisation.org',
      org: 'Organisation', orgPh: 'Votre organisation', message: 'Comment pouvons-nous vous aider ?', messagePh: 'Parlez-nous de votre programme…',
      send: 'Envoyer le message', doneTitle: 'Message envoyé', doneBody: 'Merci de nous avoir contactés — nous reviendrons vers vous bientôt.',
      asideTitle: 'Autres moyens de nous joindre', asideBody: 'Vous préférez démarrer rapidement ? Demandez un essai directement.', getTangerine: 'Obtenir Tangerine', followTitle: 'Suivez-nous',
    },
    faqs: { eyebrow: 'Foire aux questions', h1: 'Foire aux questions', sub: 'Des exigences matérielles aux données, à la sécurité et à l’assistance.', still: 'Vous avez encore des questions ?', contactUs: 'Contactez-nous' },
    get: {
      home: 'ACCUEIL', pricing: 'TARIFS', h1: 'Tarifs d’abonnement Tangerine',
      intro1: 'Tangerine est un logiciel open source : chacun peut télécharger le code source et l’exécuter sur son propre serveur, gratuitement. C’est idéal pour les organisations disposant des capacités techniques pour gérer leur propre hébergement et leur assistance.',
      intro2: 'Un abonnement payant à Tangerine Central fournit une version prête à l’emploi, hébergée et maintenue : votre propre « instance » sécurisée où vous pouvez créer des évaluations, collecter et consulter des données, et gérer les utilisateurs — sans vous soucier de l’installation, des mises à jour, de la sécurité ou de la maintenance du serveur.',
      mostPopular: 'Le plus populaire', note: 'Les frais d’abonnement sont annuels et par organisation. Les prix sont susceptibles de changer.',
      includesTitle: 'Chaque abonnement comprend',
      subBenefits: ['Assistance technique et dépannage', 'Ressources de formation, y compris des cours sur Moodle', 'Participation à une communauté mondiale d’utilisateurs de Tangerine', 'Contribution et accès à une bibliothèque d’instruments partagée (bientôt disponible)'],
      includesFoot: 'Ce modèle soutient la durabilité et la collaboration, tout en gardant le logiciel principal gratuit et ouvert à tous.',
      trialEyebrow: 'Essai gratuit', trialTitle: 'Envie d’essayer avant d’acheter ?',
      trialBody: 'Parlez-nous un peu de votre programme et nous vous préparerons un essai gratuit de la suite Tangerine — évaluations, suivi en classe et accompagnement, en ligne ou hors ligne.',
      trialBenefits: ['Open source et hors ligne', 'Déployez sur tablettes ou smartphones', 'Synchronisez vers des serveurs sécurisés une fois connecté'],
      trialFormTitle: 'Demandez votre essai gratuit', name: 'Nom complet', namePh: 'Amara Okafor', email: 'E-mail professionnel', emailPh: 'vous@organisation.org',
      org: 'Organisation', orgPh: 'p. ex. School-to-School International', country: 'Pays', countryPh: 'Où allez-vous déployer ?',
      updates: 'Envoyez-moi les nouveautés du produit et des témoignages de terrain.', requestTrial: 'Demander un essai',
      trialDoneTitle: 'Merci — vous êtes inscrit !', trialDoneBody: 'Notre équipe vous contactera prochainement avec les détails de votre essai.', backHome: 'Retour à l’accueil',
      selfhostBadge: 'Open source', selfhostTitle: 'Hébergez Tangerine vous-même',
      selfhostBody: 'La nature ouverte de Tangerine vous permet d’héberger la plateforme sur votre propre serveur et d’adapter son code à vos besoins. Nous demandons seulement que, si vous apportez des modifications, vous partagiez le code modifié avec la communauté. Tangerine est disponible sous la Licence publique générale GNU.',
      selfhostBtn: 'Code source et documentation sur GitHub', ctaTitle: 'Prêt à démarrer avec Tangerine ?', startTrial: 'Démarrer l’essai gratuit',
    },
    impact: {
      eyebrow: 'Impact', h1: 'L’impact local et mondial de Tangerine', sub: 'Tangerine a modernisé les évaluations de lecture et de mathématiques dans les environnements aux ressources limitées du monde entier.',
      statAssessments: 'évaluations et enquêtes menées', statCountries: 'pays', statOrganizations: 'organisations et chercheurs', statLanguages: 'langues',
      splitTitle: 'Moderniser l’évaluation là où le besoin est le plus grand',
      split1: 'Plus d’une décennie de performances éprouvées, des millions d’évaluations réussies et un déploiement dans {n} pays ont fait de Tangerine une référence de confiance pour une collecte de données fiable et polyvalente — et open source.',
      split2: 'Au-delà du scolaire, Tangerine facilite les évaluations non cognitives, l’éducation inclusive et l’apprentissage socio-émotionnel. Nous n’évaluons pas seulement les connaissances ; nous favorisons un développement global.',
      readStories: 'Lire les témoignages', trustedTitle: 'La confiance d’une communauté mondiale',
    },
    stories: { eyebrow: 'Témoignages d’utilisateurs', h1: 'Sur le terrain', sub: 'Comment des organisations du monde entier utilisent Tangerine.', continueReading: 'Lire la suite', ctaTitle: 'Une histoire Tangerine à partager ?', ctaSub: 'Nous aimerions savoir comment vous utilisez Tangerine dans votre programme.', getInTouch: 'Nous contacter' },
    help: { eyebrow: 'Aide', h1: 'Comment pouvons-nous vous aider ?', sub: 'Guides et réponses pour tirer le meilleur parti de la suite Tangerine.', learnMore: 'En savoir plus', ctaTitle: 'Vous ne trouvez pas ce qu’il vous faut ?', ctaSub: 'Notre équipe se fera un plaisir de vous aider pour l’installation, la personnalisation et le déploiement.', contactSupport: 'Contacter l’assistance' },
    helpArticle: { eyebrow: 'Aide', home: 'ACCUEIL', help: 'AIDE', allTopics: 'Tous les sujets d’aide', next: 'Suivant :', ctaTitle: 'Toujours bloqué ?', ctaSub: 'Notre équipe se fera un plaisir de vous aider pour l’installation, la personnalisation et le déploiement.', contactSupport: 'Contacter l’assistance' },
  },

  ar: {
    meta: {
      aboutTitle: 'من نحن — Tangerine Central', aboutDesc: 'Tangerine Central شركة صغيرة تملكها نساء، مكرّسة لتطوير جمع البيانات واستخدامها بكفاءة وفعالية في أي بيئة، سواء عبر الإنترنت أو دون اتصال.',
      contactTitle: 'اتصل بنا — Tangerine', contactDesc: 'أسئلة حول النشر أو التخصيص أو نسخة تجريبية مجانية؟ فريقنا هنا لمساعدتك.',
      faqsTitle: 'الأسئلة الشائعة — Tangerine', faqsDesc: 'من متطلبات الأجهزة إلى البيانات والأمان والدعم.',
      getTitle: 'احصل على Tangerine — الأسعار', getDesc: 'Tangerine مفتوح المصدر ومجاني للاستضافة الذاتية. يوفر الاشتراك المدفوع نسخة جاهزة للاستخدام ومستضافة ومُدارة.',
      impactTitle: 'الأثر — Tangerine', impactDesc: 'حدّث Tangerine تقييمات القراءة والرياضيات في البيئات محدودة الموارد حول العالم.',
      storiesTitle: 'قصص المستخدمين — Tangerine', storiesDesc: 'كيف تستخدم المنظمات حول العالم Tangerine.',
      helpTitle: 'المساعدة — Tangerine', helpDesc: 'أدلة وإجابات للاستفادة القصوى من مجموعة Tangerine.',
    },
    common: { home: 'الرئيسية', products: 'المنتجات', backHome: 'العودة إلى الرئيسية', getStarted: 'ابدأ الآن', readyTitle: 'هل أنت مستعد لتجربة Tangerine؟' },
    about: {
      eyebrow: 'من نحن', h1: 'ما هي Tangerine Central؟',
      intro: 'Tangerine Central شركة صغيرة تملكها نساء، مكرّسة لتطوير جمع البيانات واستخدامها بكفاءة وفعالية في أي بيئة، سواء عبر الإنترنت أو دون اتصال. مهمتنا هي تخفيف عبء جمع البيانات وتقديم رؤى عملية وفي الوقت المناسب حتى في أكثر البيئات محدوديةً في الموارد.',
      teamLead: 'يجمع فريقنا قيادة خبيرة في تقييم التعلّم، وتطوير المنصات الرقمية، والذكاء الاصطناعي وعلوم البيانات، وتنفيذ البرامج، وتعزيز القدرات — مستندًا إلى عقود من الخبرة في تصميم Tangerine ونشره وتوسيع نطاقه. نقدّم دعمًا عمليًا في تصميم الأدوات والنشر وتحليل البيانات، إضافةً إلى التدريب وبناء القدرات حتى يتمكن الشركاء من استخدام Tangerine بفعالية واستقلالية.',
      storyEyebrow: 'من الورق إلى التقدّم', storyTitle: 'قصة Tangerine',
      story1: 'وُلد Tangerine من تجربة مباشرة في جمع بيانات الطلاب في سياقات نائية ومحدودة الموارد. خلال تقييم صعب للقراءة في الصفوف المبكرة ضمن مشروع لمعهد RTI International، وجدت المؤسِّستان كارمن وأمبر نفسيهما غارقتين في النماذج الورقية، تصارعان دبّاسات معطّلة ونسخًا غير مقروءة وبيانات مفقودة. كانت العملية بطيئة وقديمة وعرضة للأخطاء. وأدركتا أنه لا بدّ من طريقة أفضل.',
      story2: 'أطلقت تلك اللحظة شرارة Tangerine: حلٌّ رقمي لتحسين جودة البيانات وتبسيط العمل الميداني وإتاحة المتابعة في الوقت الفعلي — دون انتظار أسابيع لاكتشاف مفاجآت في البيانات. ما بدأ عام 2011 أداةً لتقييم القراءة المبكرة أصبح منصة متعددة الاستخدامات تعمل دون اتصال وتُستخدم في {n} دولة.',
      story3: 'في عام 2025، انتقلت إدارة Tangerine إلى Tangerine Central بقيادة كارمن وأمبر — لتواصل مساعدة الحكومات والمنظمات على إطلاق قوة البيانات لتحسين الحياة.',
      beliefEyebrow: 'قناعتنا الموجِّهة',
      beliefText: 'للبيانات الجيدة والمتاحة في الوقت المناسب القدرة على تغيير الحياة نحو الأفضل — وهي أساسية لمساعدة المجتمعات على صياغة مستقبلها.',
      teamEyebrow: 'فريقنا', teamTitle: 'تعرّف على فريقنا', connectLinkedIn: 'تواصل عبر LinkedIn',
      podcastEyebrow: 'بودكاست', podcastTitle: 'أدوات مفتوحة المصدر في البيئات محدودة الموارد',
      podcastBody: 'استمع إلى الدكتورة كارمن سترايغل وهي تشرح لماذا تهمّ البرمجيات مفتوحة المصدر مثل Tangerine وLoquat للتعليم في البيئات محدودة الموارد.',
      podcastBtn: 'استمع إلى البودكاست',
    },
    contact: {
      eyebrow: 'اتصل بنا', h1: 'لنتحدّث', sub: 'أسئلة حول النشر أو التخصيص أو نسخة تجريبية مجانية؟ فريقنا هنا لمساعدتك.',
      formTitle: 'أرسل لنا رسالة', name: 'الاسم الكامل', namePh: 'أمارا أوكافور', email: 'البريد المهني', emailPh: 'you@organization.org',
      org: 'المنظمة', orgPh: 'منظمتك', message: 'كيف يمكننا مساعدتك؟', messagePh: 'أخبرنا عن برنامجك…',
      send: 'إرسال الرسالة', doneTitle: 'تم إرسال الرسالة', doneBody: 'شكرًا لتواصلك — سنرد عليك قريبًا.',
      asideTitle: 'طرق أخرى للتواصل معنا', asideBody: 'تفضّل بداية سريعة؟ اطلب نسخة تجريبية مباشرة.', getTangerine: 'احصل على Tangerine', followTitle: 'تابعنا',
    },
    faqs: { eyebrow: 'الأسئلة الشائعة', h1: 'الأسئلة الشائعة', sub: 'من متطلبات الأجهزة إلى البيانات والأمان والدعم.', still: 'لا تزال لديك أسئلة؟', contactUs: 'اتصل بنا' },
    get: {
      home: 'الرئيسية', pricing: 'الأسعار', h1: 'أسعار اشتراك Tangerine',
      intro1: 'Tangerine برمجية مفتوحة المصدر — يمكن لأي شخص تنزيل الشيفرة المصدرية وتشغيلها على خادمه الخاص مجانًا. هذا مثالي للمنظمات التي تملك القدرة التقنية لإدارة استضافتها ودعمها.',
      intro2: 'يوفّر الاشتراك المدفوع في Tangerine Central نسخة جاهزة للاستخدام ومستضافة ومُدارة: «نسخة» آمنة خاصة بك يمكنك فيها إنشاء التقييمات وجمع البيانات والوصول إليها وإدارة المستخدمين — دون القلق بشأن الإعداد أو التحديثات أو الأمان أو صيانة الخادم.',
      mostPopular: 'الأكثر شيوعًا', note: 'رسوم الاشتراك سنوية ولكل منظمة. الأسعار قابلة للتغيير.',
      includesTitle: 'يشمل كل اشتراك',
      subBenefits: ['الدعم الفني وحل المشكلات', 'موارد تدريبية، بما في ذلك دورات قائمة على Moodle', 'المشاركة في مجتمع عالمي من مستخدمي Tangerine', 'المساهمة في مكتبة أدوات مشتركة واستخدامها (قريبًا)'],
      includesFoot: 'يدعم هذا النموذج الاستدامة والتعاون مع إبقاء البرمجية الأساسية مجانية ومتاحة للجميع.',
      trialEyebrow: 'نسخة تجريبية مجانية', trialTitle: 'هل تريد التجربة قبل الشراء؟',
      trialBody: 'أخبرنا قليلًا عن برنامجك وسنجهّز لك نسخة تجريبية مجانية من مجموعة Tangerine — التقييمات والمتابعة الصفية والإرشاد، عبر الإنترنت أو دون اتصال.',
      trialBenefits: ['مفتوح المصدر ويعمل دون اتصال', 'انشر على الأجهزة اللوحية أو الهواتف الذكية', 'زامِن مع خوادم آمنة عند الاتصال'],
      trialFormTitle: 'اطلب نسختك التجريبية المجانية', name: 'الاسم الكامل', namePh: 'أمارا أوكافور', email: 'البريد المهني', emailPh: 'you@organization.org',
      org: 'المنظمة', orgPh: 'مثل School-to-School International', country: 'الدولة', countryPh: 'أين ستقوم بالنشر؟',
      updates: 'أرسل لي تحديثات المنتج وقصص الميدان.', requestTrial: 'اطلب النسخة التجريبية',
      trialDoneTitle: 'شكرًا — أنت الآن على القائمة!', trialDoneBody: 'سيتواصل معك فريقنا قريبًا بتفاصيل نسختك التجريبية.', backHome: 'العودة إلى الرئيسية',
      selfhostBadge: 'مفتوح المصدر', selfhostTitle: 'استضف Tangerine بنفسك',
      selfhostBody: 'تتيح لك طبيعة Tangerine المفتوحة استضافة المنصة على خادمك الخاص وتكييف شيفرتها وفق احتياجاتك. كل ما نطلبه هو أن تشارك الشيفرة المعدّلة مع المجتمع إذا أجريت تغييرات. Tangerine متاح بموجب رخصة جنو العمومية العامة.',
      selfhostBtn: 'الشيفرة المصدرية والوثائق على GitHub', ctaTitle: 'هل أنت مستعد للبدء مع Tangerine؟', startTrial: 'ابدأ النسخة التجريبية المجانية',
    },
    impact: {
      eyebrow: 'الأثر', h1: 'أثر Tangerine محليًا وعالميًا', sub: 'حدّث Tangerine تقييمات القراءة والرياضيات في البيئات محدودة الموارد حول العالم.',
      statAssessments: 'تقييمًا ودراسةً استقصائية أُجريت', statCountries: 'دولة', statOrganizations: 'منظمة وباحثًا', statLanguages: 'لغة',
      splitTitle: 'تحديث التقييم حيث تشتدّ الحاجة إليه',
      split1: 'أكثر من عقد من الأداء المثبت، وملايين التقييمات الناجحة، والنشر في {n} دولة، رسّخت Tangerine معيارًا موثوقًا لجمع بيانات موثوق ومتعدد الاستخدامات — وهو مفتوح المصدر.',
      split2: 'إلى ما هو أبعد من الأكاديميات، يسهّل Tangerine التقييمات غير المعرفية والتعليم الشامل والتعلّم الاجتماعي والعاطفي. نحن لا نقيّم المعرفة فحسب؛ بل نرعى التنمية الشاملة.',
      readStories: 'اقرأ قصص المستخدمين', trustedTitle: 'موضع ثقة مجتمع عالمي',
    },
    stories: { eyebrow: 'قصص المستخدمين', h1: 'من الميدان', sub: 'كيف تستخدم المنظمات حول العالم Tangerine.', continueReading: 'متابعة القراءة', ctaTitle: 'هل لديك قصة Tangerine لمشاركتها؟', ctaSub: 'يسعدنا أن نعرف كيف تستخدم Tangerine في برنامجك.', getInTouch: 'تواصل معنا' },
    help: { eyebrow: 'المساعدة', h1: 'كيف يمكننا مساعدتك؟', sub: 'أدلة وإجابات للاستفادة القصوى من مجموعة Tangerine.', learnMore: 'اعرف المزيد', ctaTitle: 'لم تجد ما تحتاجه؟', ctaSub: 'يسعد فريقنا مساعدتك في الإعداد والتخصيص والنشر.', contactSupport: 'تواصل مع الدعم' },
    helpArticle: { eyebrow: 'المساعدة', home: 'الرئيسية', help: 'المساعدة', allTopics: 'جميع مواضيع المساعدة', next: 'التالي:', ctaTitle: 'ما زلت عالقًا؟', ctaSub: 'يسعد فريقنا مساعدتك في الإعداد والتخصيص والنشر.', contactSupport: 'تواصل مع الدعم' },
  },
};
