// Spanish content overrides. Brand names stay in Latin script; price values
// stay numeric (the content/fact gate verifies them). Pending human review.
import type { SiteContent } from './index.ts';

export const es: Partial<SiteContent> = {
  products: {
    'p-tangerine': {
      key: 'p-tangerine', crumb: 'TANGERINE', name: 'Tangerine®',
      logo: '/assets/logos/tangerine-logo.png', logoTall: true,
      lead: [
        'Tangerine es una plataforma de software de código abierto diseñada para apoyar la recopilación de datos en entornos con recursos limitados, especialmente en educación. Funciona sin conexión, lo que la hace ideal para zonas con acceso limitado o nulo a internet. Creada originalmente para evaluar las habilidades tempranas de lectura y matemáticas, Tangerine permite a educadores, investigadores y personal de programas recopilar datos con tabletas o smartphones, y sincronizarlos cuando hay conectividad.',
        'Tangerine es altamente personalizable: los usuarios pueden diseñar sus propias encuestas, evaluaciones y flujos de trabajo para adaptarse a las necesidades locales. Admite reproducción de audio, lógica de salto y validación de datos en tiempo real, lo que ayuda a garantizar una recopilación de datos precisa y eficiente.',
      ],
      blocks: [
        { type: 'feature', eyebrow: 'Alfabetización y aritmética fundamentales',
          heading: 'Encuestas y evaluaciones, diseñadas para el terreno',
          body: ['Tangerine es la herramienta principal de recopilación de datos de la suite, creada específicamente para encuestas y evaluaciones a gran escala en educación. La funcionalidad sin conexión garantiza una captura de datos fiable, mientras que la sincronización segura permite un análisis centralizado para ayudar a las partes interesadas a supervisar los resultados de aprendizaje e informar las decisiones de política.'],
          image: '/assets/imagery/task-report.png', wide: true },
        { type: 'modules', cards: [
          { img: '/assets/imagery/reading.jpg', title: 'Lectura', body: 'Módulos de subprueba usados en evaluaciones de alfabetización fundamental: reconocimiento de letras, fluidez de lectura oral y comprensión lectora.' },
          { img: '/assets/imagery/math.jpg', title: 'Matemáticas', body: 'Módulos para la aritmética fundamental: identificación de números, discriminación, operaciones básicas y problemas verbales.' },
          { img: '/assets/imagery/school-surveys.jpg', title: 'Encuestas escolares', body: 'Administre digitalmente entrevistas y cuestionarios para estudiantes, padres, docentes y directivos, además de inventarios del entorno.' },
        ] },
      ],
      cta: { heading: '¡Contáctenos para comenzar hoy su prueba gratuita!', label: 'Comenzar', to: 'trial' },
    },
    'p-teach': {
      key: 'p-teach', crumb: 'TANGERINE:TEACH', name: 'Tangerine:Teach',
      logo: '/assets/product-logos/teach-logo.png',
      lead: [
        'Tangerine:Teach equipa a docentes y personal de apoyo con herramientas para supervisar la asistencia, el comportamiento y el progreso de aprendizaje de los estudiantes, directamente en el aula.',
      ],
      blocks: [
        { type: 'feature', heading: 'Información en tiempo real para promover el éxito estudiantil',
          body: [
            'Tableros sencillos y codificados por colores destacan a los estudiantes que caen por debajo de los umbrales esperados en indicadores clave, facilitando la detección temprana de signos de desinterés o dificultad académica. Este sistema de alerta temprana permite intervenciones oportunas que pueden ayudar a prevenir la deserción y favorecer la retención.',
            'Además de la información del aula, Tangerine:Teach admite la generación automática de reportes y la mensajería con cuidadores, fortaleciendo la comunicación entre la escuela y el hogar.',
          ],
          image: '/assets/imagery/teach-1.png',
          caption: 'Tendencias en indicadores de alerta temprana para la prevención de la deserción. Los reportes pueden enviarse a los cuidadores por mensaje de texto o WhatsApp.' },
        { type: 'feature', reverse: true, heading: 'Evaluación sin conexión para una instrucción focalizada',
          body: [
            'Tangerine:Teach almacena los datos de los estudiantes directamente en cada dispositivo, eliminando la necesidad de conexión a internet. Admite evaluaciones rápidas basadas en el currículo que ayudan a los educadores a identificar si los estudiantes han dominado habilidades clave, para luego agruparlos automáticamente por desempeño y recomendar estrategias de instrucción focalizadas.',
            'En contextos donde los educadores pueden enfrentar presión o escrutinio según los resultados, la propiedad local de los datos aporta una capa adicional de protección y autonomía.',
          ],
          image: '/assets/imagery/teach-2.png',
          caption: 'La Tabla de Agrupación muestra la distribución por percentiles del desempeño estudiantil, sin conexión a internet.',
          cta: { label: 'Comenzar', to: 'trial' } },
        { type: 'video', id: '96AtJMvMSHM', heading: 'Evaluación formativa de calidad al alcance de su mano' },
      ],
      cta: { heading: 'Dé a los educadores una herramienta en la que puedan confiar.', label: 'Comenzar', to: 'trial' },
    },
    'p-coach': {
      key: 'p-coach', crumb: 'TANGERINE:COACH', name: 'Tangerine:Coach',
      logo: '/assets/product-logos/coach-logo.png',
      lead: [
        'Tangerine:Coach equipa a acompañantes pedagógicos, tutores y personal de apoyo escolar con herramientas flexibles para apoyar a los docentes con mayor eficacia.',
      ],
      blocks: [
        { type: 'feature', heading: 'Impulsando el desarrollo profesional',
          body: [
            'Mediante formularios personalizables y guiados por lógica, Tangerine:Coach captura y analiza datos de observaciones de aula, minievaluaciones e inventarios. La plataforma genera reportes de acompañamiento sin conexión que ofrecen información práctica, ayudando a guiar conversaciones significativas y basadas en datos con los docentes.',
          ],
          image: '/assets/imagery/coach-math.png' },
        { type: 'feature', reverse: true, heading: 'Apoyo a la medida',
          body: [
            'Tangerine:Coach está diseñado para adaptarse a las necesidades únicas de cada proyecto. Nuestro equipo de Tangerine Central colabora con usted para personalizar la plataforma, asegurando que se alinee con sus objetivos, flujos de trabajo y contexto local. Desde la configuración inicial hasta el apoyo continuo, estamos aquí para ayudarle a aprovecharla al máximo.',
          ],
          image: '/assets/imagery/coach-map.png',
          cta: { label: 'Contáctenos', to: 'contact' } },
        { type: 'video', id: '62VY-NXGm2U', heading: 'Apoyando la excelencia en el aula para los educadores' },
      ],
      cta: { heading: 'Adaptemos Tangerine:Coach a su programa.', label: 'Contáctenos', to: 'contact' },
    },
    'p-acuity': {
      key: 'p-acuity', crumb: 'TANGERINE:ACUITY', name: 'Tangerine:Agudeza',
      logo: '/assets/product-logos/acuity-logo.png',
      badge: 'Disponible globalmente a principios de 2026',
      lead: [
        'Detección de la visión optimizada para entornos con recursos limitados: examine a personas de cualquier edad, desde niños de preprimaria hasta adultos, en solo 2 a 3 minutos por persona.',
      ],
      blocks: [
        { type: 'feature', heading: 'Haciendo posible la educación para todos',
          body: [
            'Los estudiantes con discapacidades no diagnosticadas —especialmente problemas de visión— corren mayor riesgo de quedarse atrás. Tangerine:Agudeza ofrece una herramienta de detección sencilla y con capacidad sin conexión, optimizada para dispositivos Android y entornos de bajo ancho de banda, brindando a los educadores información oportuna y práctica para apoyar a los estudiantes que podrían tener dificultades por una pérdida de visión no detectada.',
          ],
          image: '/assets/imagery/acuity-screening.jpg' },
        { type: 'feature', reverse: true, heading: 'Ampliamente aplicable',
          body: [
            'Diseñada para usarse en todos los grupos de edad y sectores, desde programas de primera infancia hasta educación de adultos, y en entornos como escuelas, centros de salud y consultas pediátricas. Con una formación mínima y bajos costos de implementación, las detecciones toman solo de 2 a 3 minutos por persona y funcionan sin problemas en entornos de bajo ancho de banda.',
            'Tangerine:Agudeza estará disponible a nivel mundial a principios de 2026, tras los ajustes finales.',
          ],
          image: '/assets/imagery/acuity-mockup.jpg',
          cta: { label: 'Contáctenos', to: 'contact' } },
        { type: 'video', id: 'WuKDOd1FsVY', heading: 'Ayudando a TODOS los estudiantes a alcanzar su potencial' },
      ],
      cta: { heading: 'Descubra cómo Tangerine:Agudeza puede apoyar su trabajo.', label: 'Contáctenos', to: 'contact' },
    },
  } as SiteContent['products'],

  principles: [
    { title: 'Soberanía y seguridad de los datos', body: 'Los programas poseen y controlan sus datos, protegidos tanto en el servidor como en el dispositivo.' },
    { title: 'Adaptabilidad y simplicidad', body: 'Instrumentos y flujos de trabajo altamente configurables que se mantienen sencillos de usar en el terreno.' },
    { title: 'Desarrollo impulsado por la comunidad', body: 'De código abierto y moldeado por una comunidad global de usuarios y colaboradores.' },
  ],

  stories: [
    { tag: '/school-to-school', org: 'School-to-School International',
      title: 'Llegaron las tabletas, se acabó el papel: adoptando la recopilación electrónica de datos',
      body: 'Cómo una organización global de investigación trasladó las evaluaciones de campo del papel a Tangerine, reduciendo los tiempos y mejorando la calidad de los datos.' },
    { tag: '/central-square-foundation', org: 'Central Square Foundation',
      title: 'Evaluación liderada por el sistema a gran escala en la India',
      body: 'Implementación de Tangerine para apoyar la evaluación del aprendizaje a gran escala, liderada por el sistema, en varios estados de la India.' },
  ],

  pricing: [
    { name: 'Gratis', price: 'Gratis', period: '', results: '2000 resultados almacenados en el servidor', support: 'Soporte limitado por correo', features: ['Usuarios / revisores ilimitados'], cta: 'Iniciar prueba gratuita' },
    { name: 'Miembro', price: '$3,500', period: 'por año', results: '10 000 resultados almacenados en el servidor', support: 'Soporte por correo en 2 días', features: ['Usuarios / revisores ilimitados', 'Sitio dedicado'], cta: 'Comenzar' },
    { name: 'Premium', price: '$5,000', period: 'por año', featured: true, results: '25 000 resultados almacenados en el servidor', support: 'Soporte por correo en 1 día', features: ['Usuarios / revisores ilimitados', 'Sitio dedicado'], cta: 'Comenzar' },
    { name: 'Pro', price: '$6,000', period: 'por año', results: 'Resultados ilimitados almacenados en el servidor', support: 'Soporte por correo en 1 día', features: ['Usuarios / revisores ilimitados', 'Sitio dedicado'], cta: 'Comenzar' },
    { name: 'Personalizado', price: 'Personalizado', period: 'precio', results: 'Resultados ilimitados almacenados en el servidor', support: 'Soporte por correo en 1 día', features: ['Usuarios / revisores ilimitados', 'Sitio dedicado', 'Tangerine:Teach', 'Tangerine:Coach'], cta: 'Contáctenos' },
  ],

  team: [
    { photo: '/assets/team/carmen.png', name: 'Carmen Strigel', role: 'Cofundadora y directora ejecutiva',
      bio: 'Defensora de toda la vida de la toma de decisiones basada en datos y de una educación accesible, Carmen creó la plataforma Tangerine para apoyar la recopilación de datos sin conexión y el monitoreo en tiempo real en entornos con recursos limitados. Como directora ejecutiva, orienta las operaciones, la estrategia y la innovación, y también se desempeña como directora sénior del Centro de Análisis Avanzado y Visualización de RTI International.',
      linkedin: 'https://www.linkedin.com/in/carmen-strigel-830ba913/' },
    { photo: '/assets/team/amber.png', name: 'Amber Gove', role: 'Cofundadora y directora de impacto',
      bio: 'Con dos décadas de experiencia en investigación y políticas educativas en más de 20 países, Amber codesarrolló la reconocida Evaluación de Lectura de Grados Iniciales (EGRA) y la plataforma de código abierto Tangerine. Como directora de impacto, lidera la estrategia para ampliar el alcance y profundizar el impacto, tendiendo puentes entre la investigación, las políticas y la práctica.',
      linkedin: 'https://www.linkedin.com/in/amber-gove/' },
    { photo: '/assets/team/lachezar.png', name: 'Lachezar Hristov', role: 'Director de implementación',
      bio: 'Tecnólogo y líder de producto con más de 15 años de experiencia en educación, salud y agricultura, Lachko ha dirigido el diseño, la implementación y el soporte del ecosistema de Tangerine en más de 50 proyectos. Orienta la configuración, las pruebas y el despliegue a nivel mundial y continúa como asesor técnico sénior en RTI.',
      linkedin: 'https://www.linkedin.com/in/lachko-hristov/' },
    { photo: '/assets/team/anthony.png', name: 'Anthony Udeh', role: 'Asesor de IA',
      bio: 'Especialista en EdTech y TIC para el desarrollo con una década impulsando el aprendizaje digital y la evaluación habilitada por IA en África y Asia. Tony apoya la implementación de la plataforma, la integración de sistemas y la capacidad de los socios para escalar soluciones de aprendizaje basadas en datos.',
      linkedin: 'https://www.linkedin.com/in/anthony-udeh-28ab95113/' },
    { photo: '/assets/team/jovina.png', name: 'Jovina Tibenda', role: 'Directora de país para Tanzania',
      bio: 'Jovina aporta amplia experiencia en el fortalecimiento de sistemas educativos, el aprendizaje digital y la implementación de programas en contextos descentralizados. Se desempeña como directora de país para Tanzania, además de apoyar la implementación regional y el desarrollo de capacidades locales.',
      linkedin: 'https://www.linkedin.com/in/jovina-tibenda-794b03272/' },
    { photo: '/assets/team/alastair.png', name: 'Alastair Rodd', role: 'Asesor sénior',
      bio: 'Asesor educativo sénior con experiencia en el fortalecimiento de sistemas, el aprendizaje fundamental y la implementación de programas a gran escala en África y Asia. Alastair brinda liderazgo técnico sénior para escalar el uso de datos y mejorar los resultados de aprendizaje.',
      linkedin: 'https://www.linkedin.com/in/alastair-rodd/' },
  ],

  faqs: [
    { cat: 'Compatibilidad y requisitos técnicos', items: [
      { q: '¿Cuáles son los requisitos mínimos de las tabletas Android para ejecutar Tangerine?', a: 'Para la recopilación de datos genérica: una pantalla táctil; Android 8.0 o superior (la captura de escáner, imagen, video y sonido requiere Android 9.0 o superior); un navegador compatible con HTML5 con Android System WebView; Wi-Fi (b/g/n); 64 GB de almacenamiento; 4 GB de RAM; un procesador multinúcleo de 1,6 GHz o más (mínimo doble núcleo); más de 7 horas de batería sin internet; y la capacidad de instalar APK de terceros.' },
      { q: '¿Puedo usar Tangerine desde un navegador web en una computadora?', a: 'Sí. Tangerine funciona desde un APK en Android, y desde Chrome o Edge en modo sin conexión cuando se instala como aplicación web progresiva (PWA).' },
      { q: '¿Cómo funciona la plataforma en línea y sin conexión?', a: 'En línea, los formularios pueden usarse como enlaces directos, sin necesidad de instalar una aplicación y accesibles desde cualquier dispositivo. Sin conexión se usa un APK o PWA instalado. Tangerine está optimizado para los modos APK y navegador/PWA.' },
      { q: '¿Cuánto tarda en sincronizarse la información recopilada una vez que hay conexión?', a: 'Depende de la velocidad de conexión, la cantidad de registros pendientes y el tamaño del formulario. Por ejemplo, 10 evaluaciones EGRA (~350 000 en total) se sincronizan en unos 5 segundos con una conexión 4G estable.' },
    ] },
    { cat: 'Gestión de pruebas e ítems', items: [
      { q: '¿Puedo establecer tiempos de respuesta mínimos o máximos por ítem o sesión?', a: 'Actualmente puede establecer temporizadores con los ítems de cuadrícula y EF Touch. Para los demás, un código personalizado puede habilitar temporizadores por ítem o por sección.' },
      { q: '¿Pueden personalizarse estos tiempos por grupo o estudiante?', a: 'En los ítems de cuadrícula y EF Touch, los tiempos no pueden cambiarse por grupo mediante código, pero puede crear ítems separados por grupo y activarlos o desactivarlos con lógica condicional (de salto). También pueden crearse temporizadores personalizados que varíen según el grupo o el estudiante.' },
    ] },
    { cat: 'Procesamiento y entrega de datos', items: [
      { q: '¿Cómo se trata la falta de respuesta? ¿Puede parametrizarse?', a: 'Sí. Una configuración de «Sin respuesta» se define a nivel de la plataforma y se aplica a cada grupo (no por grupo). Para los ítems obligatorios, puede añadir una opción de «Sin respuesta» cuyo valor es accesible desde la interfaz del formulario.' },
      { q: '¿Cuál es la estructura de los archivos exportados?', a: 'Resultados (filas): cada registro es una evaluación individual o un conjunto de subtareas (en Tangerine:Teach). Datos de ítems (columnas): una o más columnas por ítem indican si se seleccionó una respuesta y su valor numérico.' },
      { q: '¿Qué información se incluye en las exportaciones?', a: 'De forma predeterminada, el valor de la respuesta más la fecha y hora de inicio y fin de toda la evaluación; cada sección también registra su hora de inicio, por lo que puede derivarse el tiempo por página. Pueden añadirse otros parámetros con código personalizado. En Teach se incluyen el porcentaje por grupo de ítems, la puntuación total y los puntos por sección.' },
    ] },
    { cat: 'Gestión de acceso', items: [
      { q: '¿Cómo se generan y entregan las credenciales de los estudiantes?', a: 'Tangerine, Tangerine:Teach y Tangerine:Coach están configurados para encuestados, docentes y acompañantes. Las evaluaciones autoadministradas y dirigidas por el estudiante permiten que los estudiantes o administradores ingresen un ID de estudiante único, o que el sistema genere uno.' },
      { q: '¿Puedo cargar masivamente datos de estudiantes para las pruebas?', a: 'Sí. Según el uso, los datos pueden poblar listas desplegables (región, escuela, aula) o, en Teach, servir como fuente para los grupos de clase, docentes y escuelas.' },
      { q: '¿Qué roles de usuario están disponibles?', a: 'Los roles se basan en permisos/acciones más que en la administración escolar. De forma predeterminada hay dos: Administrador (todas las acciones en su grupo) y Miembro (descargar resultados en CSV). Pueden añadirse nuevos roles con permisos específicos por grupo.' },
    ] },
    { cat: 'Seguridad de la información', items: [
      { q: '¿Cómo se garantizan la seguridad y la confidencialidad?', a: 'Todo acceso a los datos está protegido con contraseña tanto en el servidor como en el dispositivo; solo los usuarios autenticados y autorizados pueden acceder a los datos. En el servidor, cada usuario es creado por un administrador autorizado. En los dispositivos, cada usuario define sus propios datos de acceso para proteger la información almacenada localmente.' },
      { q: '¿Dónde se almacenan los datos?', a: 'Todas las opciones están disponibles. Nuestro servicio usa la nube de AWS, y podemos ofrecer alternativas según las necesidades del cliente: otros proveedores de nube o almacenamiento local.' },
    ] },
    { cat: 'Análisis, reportes y retroalimentación', items: [
      { q: '¿Puede la plataforma crear reportes por estudiante, curso o escuela?', a: 'Sí: los reportes pueden crearse a partir de los datos compilados en sistemas de terceros como Power BI. No hay un panel dentro de la plataforma, pero podría desarrollarse (la infraestructura existe).' },
      { q: '¿Qué análisis o visualizaciones ofrecen?', a: 'Tangerine es una plataforma de recopilación de datos; los reportes y paneles normalmente se realizan fuera de la plataforma en Power BI o herramientas similares.' },
      { q: '¿Pueden exportarse los resultados a Excel, PDF o CSV?', a: 'La exportación se ofrece en formato CSV o mediante conexión directa a la base de datos.' },
      { q: '¿Hay retroalimentación en tiempo real para estudiantes y docentes?', a: 'Puede programarse según se necesite; en Teach, a través de la interfaz a nivel de subtarea.' },
      { q: '¿Qué contiene el reporte del docente?', a: 'En Teach, los docentes ven reportes del aula por tarea o materia que muestran a los estudiantes y su logro en rangos porcentuales, además del desempeño total por estudiante. Teach también muestra reportes de asistencia, evaluación continua y comportamiento.' },
      { q: '¿Se puede hacer seguimiento del aprendizaje a lo largo de varias evaluaciones?', a: 'Sí: al identificar de forma coherente a los estudiantes en aplicaciones sucesivas, puede comparar resultados a lo largo del tiempo. Esto requiere identificadores de estudiante coherentes y una estructura de datos adecuada; los reportes longitudinales se generan fuera de la plataforma (Excel, Power BI, etc.).' },
    ] },
    { cat: 'Accesibilidad', items: [
      { q: '¿Existen opciones de accesibilidad para estudiantes con discapacidad?', a: 'La plataforma admite videos que muestran las preguntas en lengua de señas, el registro de respuestas mediante video en lengua de señas, grabaciones de audio para leer en voz alta preguntas y respuestas, y la grabación de respuestas en audio. Las evaluaciones se preparan según las necesidades de cada estudiante; no existe una conversión automática de una evaluación genérica en una inclusiva.' },
      { q: '¿Pueden adaptarse las evaluaciones a necesidades de accesibilidad?', a: 'Sí: las evaluaciones inclusivas se crean adaptando la evaluación a las necesidades del estudiante.' },
    ] },
    { cat: 'Integración', items: [
      { q: '¿Puede Tangerine integrarse con un EMIS (sistema de información para la gestión educativa)?', a: 'Sí. La integración de datos con un EMIS es un esfuerzo aparte en el que los expertos de la organización o del departamento de educación desempeñan un papel central y rector.' },
      { q: '¿Existen API para facilitar la integración?', a: 'Sí: las API gestionan los datos sin procesar, y proporcionamos herramientas para transformar o convertir los datos a MySQL, donde el SQL estándar funciona junto con sus herramientas ETL existentes.' },
    ] },
    { cat: 'Experiencia de usuario y soporte', items: [
      { q: '¿Se requiere formación para usar la interfaz?', a: 'Depende del nivel técnico del usuario. Recomendamos una sesión de una hora o una hoja de referencia paso a paso; las aplicaciones pueden incluir instrucciones multimedia que cubran lo básico.' },
      { q: '¿La plataforma proporciona mensajes de error y alertas?', a: 'Sí: hay mensajes de error y algunas alertas para guiar a los usuarios ante fallos técnicos o un uso incorrecto.' },
      { q: '¿Hay soporte técnico disponible?', a: 'Sí, durante el horario laboral CET (hora de Europa Central).' },
      { q: '¿Pueden personalizarse la interfaz y la funcionalidad?', a: 'Tangerine es altamente configurable: el contenido y algunas funcionalidades, incluida la ramificación adaptativa, la integración con estándares curriculares y el soporte multilingüe. Algunas personalizaciones específicas pueden requerir desarrollo adicional.' },
    ] },
  ],

  help: {
    'getting-started': {
      title: 'Primeros pasos',
      summary: 'Configure su primer grupo, diseñe una evaluación y recopile sus primeros registros en una tableta.',
      intro: '¿Nuevo en Tangerine? Esta guía le lleva desde un espacio de trabajo vacío hasta sus primeros registros sincronizados. Todo el flujo funciona sin conexión; solo necesita conexión para sincronizar.',
      sections: [
        { h: 'De cero a su primer registro', steps: [
          'Obtenga acceso: inicie una prueba gratuita o inicie sesión en su instancia alojada de Tangerine.',
          'Cree un grupo. Los grupos organizan sus instrumentos, usuarios y resultados para un proyecto, región o estudio.',
          'Cree o importe una evaluación (consulte «Creación de instrumentos») o comience desde una plantilla.',
          'Instale Tangerine en su dispositivo: el APK de Android o la PWA del navegador con Chrome o Edge para usarlo sin conexión.',
          'Recopile datos en el terreno. Todo se almacena en el dispositivo, por lo que no se requiere conexión.',
          'Sincronice al reconectarse. Los registros se cargan en su servidor seguro para un análisis centralizado.',
        ] },
        { h: 'Lo que necesitará', list: [
          'Una tableta o smartphone Android (Android 8.0 o superior; 9.0 o superior para captura de imagen, video, audio y escáner).',
          'Una instancia de Tangerine: alojada por Tangerine Central o autoalojada.',
          'Aproximadamente una hora de orientación, o una hoja de referencia de una página, para los nuevos recopiladores de datos.',
        ] },
      ],
    },
    'syncing-offline': {
      title: 'Sincronización y modo sin conexión',
      summary: 'Cómo funciona el almacenamiento sin conexión y cómo se sincronizan los datos con servidores seguros al reconectarse.',
      intro: 'Tangerine prioriza el trabajo sin conexión: los datos se capturan y almacenan directamente en cada dispositivo y luego se sincronizan cuando hay conexión disponible. Esto es lo que lo hace fiable en entornos remotos y de bajo ancho de banda.',
      sections: [
        { h: 'Dos formas de funcionar', list: [
          'APK (aplicación de Android): se instala desde un archivo APK; el modo recomendado para la recopilación de campo.',
          'PWA del navegador: se instala desde Chrome o Edge y se ejecuta sin conexión. Tangerine está optimizado para ambos.',
          'Formularios en línea: se usan como enlaces directos sin instalación, accesibles desde cualquier dispositivo.',
        ] },
        { h: 'Cómo funciona la sincronización', p: [
          'Mientras está sin conexión, cada registro se guarda de forma segura en el dispositivo. Cuando vuelve la conectividad, los registros pendientes se cargan automáticamente en su servidor.',
          'La velocidad de sincronización depende de la calidad de la conexión, la cantidad de registros pendientes y el tamaño del formulario. Como referencia, 10 evaluaciones EGRA (~350 000 en total) se sincronizan en unos 5 segundos con una conexión 4G estable.',
        ] },
      ],
    },
    'building-instruments': {
      title: 'Creación de instrumentos',
      summary: 'Lógica de salto, reproducción de audio, ítems cronometrados y validación en tiempo real para encuestas personalizadas.',
      intro: 'Tangerine es altamente personalizable: diseñe evaluaciones, encuestas, entrevistas y formularios de observación que se ajusten a su contexto local.',
      sections: [
        { h: 'Lo que puede crear', list: [
          'Ítems cronometrados y sin cronometrar, incluidos los tipos de ítem de cuadrícula y EF Touch con temporizadores integrados.',
          'Lógica de salto y ramificación condicional para adaptar el flujo a cada encuestado.',
          'Reproducción de audio para leer las indicaciones en voz alta, además de captura de imagen, video y audio (Android 9.0 o superior).',
          'Validación en tiempo real para detectar errores a medida que se ingresan los datos.',
          'Instrumentos multilingües: Tangerine se ha utilizado en más de 100 idiomas.',
        ] },
        { h: 'Accesibilidad', p: [
          'Las evaluaciones inclusivas se crean adaptando un instrumento a las necesidades del estudiante; por ejemplo, indicaciones en video en lengua de señas, respuestas en video en lengua de señas, narración en audio y respuestas en audio. No existe una conversión automática de una evaluación genérica en una inclusiva.',
        ] },
      ],
    },
    'reports-export': {
      title: 'Reportes y exportación',
      summary: 'Lea paneles, agrupe a los estudiantes por desempeño y exporte datos para su análisis.',
      intro: 'Tangerine es una plataforma de recopilación de datos; los reportes y paneles enriquecidos normalmente se crean fuera de la plataforma a partir de sus datos exportados.',
      sections: [
        { h: 'Exportar sus datos', list: [
          'Exporte en formato CSV o conéctese directamente a la base de datos.',
          'Los resultados son filas: cada registro es una evaluación individual o un conjunto de subtareas (en Teach).',
          'Los datos de los ítems están en columnas, indicando si se seleccionó una respuesta y su valor numérico.',
          'De forma predeterminada, cada exportación incluye el valor de la respuesta y la fecha y hora de inicio y fin; las horas de inicio por sección permiten derivar el tiempo dedicado por página.',
        ] },
        { h: 'Paneles y seguimiento longitudinal', p: [
          'Cree paneles y visualizaciones en herramientas como Power BI. En Tangerine:Teach, los docentes también ven reportes del aula dentro de la aplicación por tarea o materia, con el logro en rangos porcentuales y totales por estudiante.',
          'Haga seguimiento del aprendizaje a lo largo del tiempo manteniendo identificadores de estudiante coherentes entre aplicaciones sucesivas, y luego genere reportes longitudinales fuera de la plataforma (Excel, Power BI u otras herramientas de análisis).',
        ] },
      ],
    },
    'data-privacy': {
      title: 'Datos y privacidad',
      summary: 'Propiedad local de los datos, roles de cuenta y protección de los datos de su programa.',
      intro: 'Tangerine se basa en la soberanía de los datos: los programas poseen y controlan sus datos, con protección tanto en el servidor como en el dispositivo.',
      sections: [
        { h: 'Seguridad', list: [
          'Todo acceso a los datos está protegido con contraseña tanto en el servidor como en el dispositivo; solo entran los usuarios autenticados y autorizados.',
          'En el servidor, cada usuario es creado por un administrador autorizado.',
          'En los dispositivos, cada usuario define sus propios datos de acceso para proteger la información almacenada localmente.',
        ] },
        { h: 'Almacenamiento y roles', p: [
          'Todas las opciones de almacenamiento están disponibles: nuestro servicio usa la nube de AWS, y podemos ofrecer otros proveedores de nube o almacenamiento local para ajustarse a sus requisitos.',
          'Los roles se basan en permisos: de forma predeterminada, Administrador (todas las acciones dentro de su grupo) y Miembro (descargar resultados en CSV). Pueden añadirse nuevos roles con permisos específicos por grupo.',
        ] },
      ],
    },
    'community': {
      title: 'Comunidad',
      summary: 'Tangerine es de código abierto: conéctese con colaboradores y la comunidad en general.',
      intro: 'El software principal es gratuito y abierto para todos, disponible bajo la Licencia Pública General de GNU. Una comunidad global moldea su evolución.',
      sections: [
        { h: 'Participe', list: [
          'Acceda al código fuente y la documentación en GitHub.',
          'Si modifica el código, comparta sus cambios con la comunidad (GNU GPL).',
          'Los suscriptores se unen a una comunidad global de pares de usuarios de Tangerine.',
          'Contribuya y use una biblioteca de instrumentos compartida (próximamente).',
        ] },
        { h: 'Código fuente', p: [
          'La naturaleza abierta de Tangerine le permite alojar la plataforma en su propio servidor y adaptar su código a sus necesidades. Explore los repositorios para comenzar.',
        ], link: { label: 'Tangerine en GitHub', href: 'https://github.com/Tangerine-Community/' } },
      ],
    },
  },
};
