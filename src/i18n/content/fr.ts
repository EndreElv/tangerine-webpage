// French content overrides. Brand names stay in Latin script; price values
// stay numeric (the content/fact gate verifies them). Pending human review.
import type { SiteContent } from './index.ts';

export const fr: Partial<SiteContent> = {
  products: {
    'p-tangerine': {
      key: 'p-tangerine', crumb: 'TANGERINE', name: 'Tangerine®',
      logo: '/assets/logos/tangerine-logo.png', logoTall: true,
      lead: [
        'Tangerine est une plateforme logicielle open source conçue pour faciliter la collecte de données dans les environnements à faibles ressources, en particulier dans l’éducation. Elle fonctionne hors ligne, ce qui la rend idéale pour les zones où l’accès à Internet est limité ou inexistant. Conçu à l’origine pour évaluer les compétences précoces en lecture et en mathématiques, Tangerine permet aux éducateurs, chercheurs et personnels de programme de collecter des données sur tablettes ou smartphones, puis de les synchroniser dès qu’une connexion est disponible.',
        'Tangerine est hautement personnalisable : les utilisateurs peuvent concevoir leurs propres enquêtes, évaluations et flux de travail pour répondre aux besoins locaux. Il prend en charge la lecture audio, la logique de saut et la validation des données en temps réel, contribuant à une collecte de données précise et efficace.',
      ],
      blocks: [
        { type: 'feature', eyebrow: 'Compétences fondamentales en lecture et en calcul',
          heading: 'Des enquêtes et évaluations, conçues pour le terrain',
          body: ['Tangerine est l’outil principal de collecte de données de la suite, spécialement conçu pour les enquêtes et évaluations à grande échelle dans l’éducation. Le fonctionnement hors ligne garantit une saisie fiable des données, tandis que la synchronisation sécurisée permet une analyse centralisée pour aider les parties prenantes à suivre les résultats d’apprentissage et à éclairer les décisions politiques.'],
          image: '/assets/imagery/task-report.png', wide: true },
        { type: 'modules', cards: [
          { img: '/assets/imagery/reading.jpg', title: 'Lecture', body: 'Modules de sous-tests utilisés dans les évaluations de la lecture fondamentale : reconnaissance des lettres, fluidité de lecture orale et compréhension écrite.' },
          { img: '/assets/imagery/math.jpg', title: 'Mathématiques', body: 'Modules pour le calcul fondamental : identification des nombres, discrimination, opérations de base et problèmes.' },
          { img: '/assets/imagery/school-surveys.jpg', title: 'Enquêtes scolaires', body: 'Administrez numériquement des entretiens et questionnaires pour les élèves, parents, enseignants et responsables, ainsi que des inventaires de l’environnement.' },
        ] },
      ],
      cta: { heading: 'Contactez-nous pour démarrer votre essai gratuit dès aujourd’hui !', label: 'Commencer', to: 'trial' },
    },
    'p-teach': {
      key: 'p-teach', crumb: 'TANGERINE:TEACH', name: 'Tangerine: Enseigner',
      logo: '/assets/product-logos/teach-logo.png',
      lead: [
        'Tangerine: Enseigner dote les enseignants et le personnel de soutien d’outils pour suivre l’assiduité, le comportement et les progrès d’apprentissage des élèves, directement en classe.',
      ],
      blocks: [
        { type: 'feature', heading: 'Des informations en temps réel pour favoriser la réussite des élèves',
          body: [
            'Des tableaux de bord simples et codés par couleur mettent en évidence les élèves qui passent sous les seuils attendus pour des indicateurs clés, facilitant le repérage précoce des signes de désengagement ou de difficulté scolaire. Ce système d’alerte précoce permet des interventions opportunes qui peuvent aider à prévenir le décrochage et à favoriser le maintien à l’école.',
            'Au-delà des informations en classe, Tangerine: Enseigner prend en charge la production automatique de rapports et la messagerie aux familles, renforçant la communication entre l’école et la maison.',
          ],
          image: '/assets/imagery/teach-1.png',
          caption: 'Tendances des indicateurs d’alerte précoce pour la prévention du décrochage. Les rapports peuvent être envoyés aux familles par SMS ou WhatsApp.' },
        { type: 'feature', reverse: true, heading: 'Une évaluation hors ligne pour un enseignement ciblé',
          body: [
            'Tangerine: Enseigner stocke les données des élèves directement sur chaque appareil, supprimant le besoin d’une connexion Internet. Il prend en charge des évaluations rapides fondées sur le curriculum qui aident les enseignants à déterminer si les élèves maîtrisent les compétences clés, puis regroupe automatiquement les élèves selon leur performance et recommande des stratégies pédagogiques ciblées.',
            'Dans les contextes où les enseignants peuvent subir une pression ou un examen lié aux résultats, la propriété locale des données apporte une couche supplémentaire de protection et d’autonomie.',
          ],
          image: '/assets/imagery/teach-2.png',
          caption: 'Le tableau de regroupement montre la distribution en percentiles de la performance des élèves — sans connexion Internet.',
          cta: { label: 'Commencer', to: 'trial' } },
        { type: 'video', id: '96AtJMvMSHM', heading: 'Une évaluation formative de qualité à portée de main' },
      ],
      cta: { heading: 'Offrez aux éducateurs un outil de confiance.', label: 'Commencer', to: 'trial' },
    },
    'p-coach': {
      key: 'p-coach', crumb: 'TANGERINE:COACH', name: 'Tangerine: Coach',
      logo: '/assets/product-logos/coach-logo.png',
      lead: [
        'Tangerine: Coach dote les accompagnateurs pédagogiques, tuteurs et personnels de soutien scolaire d’outils flexibles pour mieux appuyer les enseignants.',
      ],
      blocks: [
        { type: 'feature', heading: 'Valoriser le développement professionnel',
          body: [
            'À l’aide de formulaires personnalisables et pilotés par la logique, Tangerine: Coach recueille et analyse les données issues des observations de classe, des mini-évaluations et des inventaires. La plateforme génère des rapports d’accompagnement hors ligne offrant des informations exploitables — pour guider des échanges constructifs et fondés sur les données avec les enseignants.',
          ],
          image: '/assets/imagery/coach-math.png' },
        { type: 'feature', reverse: true, heading: 'Un accompagnement sur mesure',
          body: [
            'Tangerine: Coach est conçu pour s’adapter aux besoins uniques de chaque projet. Notre équipe de Tangerine Central collabore avec vous pour personnaliser la plateforme — en veillant à ce qu’elle corresponde à vos objectifs, à vos flux de travail et à votre contexte local. De la configuration initiale au soutien continu, nous sommes là pour vous aider à en tirer le meilleur parti.',
          ],
          image: '/assets/imagery/coach-map.png',
          cta: { label: 'Contactez-nous', to: 'contact' } },
        { type: 'video', id: '62VY-NXGm2U', heading: 'Soutenir l’excellence en classe pour les éducateurs' },
      ],
      cta: { heading: 'Adaptons Tangerine: Coach à votre programme.', label: 'Contactez-nous', to: 'contact' },
    },
    'p-acuity': {
      key: 'p-acuity', crumb: 'TANGERINE:ACUITY', name: 'Tangerine: Acuité',
      logo: '/assets/product-logos/acuity-logo.png',
      badge: 'Disponible dans le monde entier début 2026',
      lead: [
        'Un dépistage visuel optimisé pour les environnements à faibles ressources : dépistez des personnes de tout âge, des enfants du préprimaire aux adultes, en seulement 2 à 3 minutes par personne.',
      ],
      blocks: [
        { type: 'feature', heading: 'Rendre l’éducation possible pour tous',
          body: [
            'Les élèves présentant des handicaps non diagnostiqués — en particulier des troubles de la vision — risquent davantage de prendre du retard. Tangerine: Acuité propose un outil de dépistage simple et utilisable hors ligne, optimisé pour les appareils Android et les environnements à faible bande passante, offrant aux éducateurs des informations utiles et opportunes pour soutenir les élèves susceptibles d’être en difficulté en raison d’une perte de vision non détectée.',
          ],
          image: '/assets/imagery/acuity-screening.jpg' },
        { type: 'feature', reverse: true, heading: 'Largement applicable',
          body: [
            'Conçu pour tous les groupes d’âge et tous les secteurs — des programmes de petite enfance à l’éducation des adultes, et dans des contextes tels que les écoles, les centres de santé et les visites de suivi de l’enfant. Avec une formation minimale et de faibles coûts de mise en œuvre, les dépistages ne prennent que 2 à 3 minutes par personne et fonctionnent parfaitement dans les environnements à faible bande passante.',
            'Tangerine: Acuité sera disponible dans le monde entier début 2026, après les derniers ajustements.',
          ],
          image: '/assets/imagery/acuity-mockup.jpg',
          cta: { label: 'Contactez-nous', to: 'contact' } },
        { type: 'video', id: 'WuKDOd1FsVY', heading: 'Aider TOUS les élèves à réaliser leur potentiel' },
      ],
      cta: { heading: 'Découvrez comment Tangerine: Acuité peut soutenir votre travail.', label: 'Contactez-nous', to: 'contact' },
    },
  } as SiteContent['products'],

  principles: [
    { title: 'Souveraineté et sécurité des données', body: 'Les programmes possèdent et contrôlent leurs données, protégées à la fois sur le serveur et sur l’appareil.' },
    { title: 'Adaptabilité et simplicité', body: 'Des instruments et des flux de travail hautement configurables qui restent simples à utiliser sur le terrain.' },
    { title: 'Un développement porté par la communauté', body: 'Open source et façonné par une communauté mondiale d’utilisateurs et de contributeurs.' },
  ],

  stories: [
    { tag: '/school-to-school', org: 'School-to-School International',
      title: 'Les tablettes arrivent, le papier disparaît : adopter la collecte de données électronique',
      body: 'Comment une organisation de recherche internationale a fait passer ses évaluations de terrain du papier à Tangerine — réduisant les délais et améliorant la qualité des données.' },
    { tag: '/central-square-foundation', org: 'Central Square Foundation',
      title: 'Une évaluation pilotée par le système à grande échelle en Inde',
      body: 'Déploiement de Tangerine pour soutenir une évaluation des apprentissages à grande échelle, pilotée par le système, dans plusieurs États indiens.' },
  ],

  pricing: [
    { name: 'Gratuit', price: 'Gratuit', period: '', results: '2000 résultats stockés sur le serveur', support: 'Assistance limitée par e-mail', features: ['Utilisateurs / réviseurs illimités'], cta: 'Démarrer l’essai gratuit' },
    { name: 'Membre', price: '$3,500', period: 'par an', results: '10 000 résultats stockés sur le serveur', support: 'Assistance par e-mail sous 2 jours', features: ['Utilisateurs / réviseurs illimités', 'Site dédié'], cta: 'Commencer' },
    { name: 'Premium', price: '$5,000', period: 'par an', featured: true, results: '25 000 résultats stockés sur le serveur', support: 'Assistance par e-mail sous 1 jour', features: ['Utilisateurs / réviseurs illimités', 'Site dédié'], cta: 'Commencer' },
    { name: 'Pro', price: '$6,000', period: 'par an', results: 'Résultats illimités stockés sur le serveur', support: 'Assistance par e-mail sous 1 jour', features: ['Utilisateurs / réviseurs illimités', 'Site dédié'], cta: 'Commencer' },
    { name: 'Sur mesure', price: 'Sur mesure', period: 'tarif', results: 'Résultats illimités stockés sur le serveur', support: 'Assistance par e-mail sous 1 jour', features: ['Utilisateurs / réviseurs illimités', 'Site dédié', 'Tangerine:Teach', 'Tangerine:Coach'], cta: 'Contactez-nous' },
  ],

  team: [
    { photo: '/assets/team/carmen.png', name: 'Carmen Strigel', role: 'Cofondatrice et directrice générale',
      bio: 'Défenseure de longue date de la prise de décision fondée sur les données et d’une éducation accessible, Carmen a créé la plateforme Tangerine pour soutenir la collecte de données hors ligne et le suivi en temps réel dans les contextes à faibles ressources. En tant que directrice générale, elle guide les opérations, la stratégie et l’innovation, et occupe également le poste de directrice principale du Centre d’analyse avancée et de visualisation de RTI International.',
      linkedin: 'https://www.linkedin.com/in/carmen-strigel-830ba913/' },
    { photo: '/assets/team/amber.png', name: 'Amber Gove', role: 'Cofondatrice et directrice de l’impact',
      bio: 'Forte de deux décennies d’expérience en recherche et en politiques éducatives dans plus de 20 pays, Amber a codéveloppé l’Évaluation de la lecture des premières années (EGRA), mondialement reconnue, ainsi que la plateforme open source Tangerine. En tant que directrice de l’impact, elle pilote la stratégie pour élargir la portée et approfondir l’impact, en faisant le lien entre recherche, politiques et pratique.',
      linkedin: 'https://www.linkedin.com/in/amber-gove/' },
    { photo: '/assets/team/lachezar.png', name: 'Lachezar Hristov', role: 'Responsable de la mise en œuvre',
      bio: 'Technologue et responsable produit avec plus de 15 ans d’expérience dans l’éducation, la santé et l’agriculture, Lachko a dirigé la conception, le déploiement et le soutien de l’écosystème Tangerine sur plus de 50 projets. Il guide la configuration, les tests et le déploiement à l’échelle mondiale et reste conseiller technique principal chez RTI.',
      linkedin: 'https://www.linkedin.com/in/lachko-hristov/' },
    { photo: '/assets/team/anthony.png', name: 'Anthony Udeh', role: 'Conseiller en IA',
      bio: 'Spécialiste de l’EdTech et des TIC pour le développement, fort d’une décennie à faire progresser l’apprentissage numérique et l’évaluation assistée par l’IA en Afrique et en Asie. Tony soutient la mise en œuvre de la plateforme, l’intégration des systèmes et le renforcement des capacités des partenaires pour déployer à grande échelle des solutions d’apprentissage fondées sur les données.',
      linkedin: 'https://www.linkedin.com/in/anthony-udeh-28ab95113/' },
    { photo: '/assets/team/jovina.png', name: 'Jovina Tibenda', role: 'Directrice nationale pour la Tanzanie',
      bio: 'Jovina apporte une vaste expérience du renforcement des systèmes éducatifs, de l’apprentissage numérique et de la mise en œuvre de programmes dans des contextes décentralisés. Elle est directrice nationale pour la Tanzanie tout en soutenant la mise en œuvre régionale et le renforcement des capacités locales.',
      linkedin: 'https://www.linkedin.com/in/jovina-tibenda-794b03272/' },
    { photo: '/assets/team/alastair.png', name: 'Alastair Rodd', role: 'Conseiller principal',
      bio: 'Conseiller principal en éducation, expérimenté dans le renforcement des systèmes, l’apprentissage fondamental et la mise en œuvre de programmes à grande échelle en Afrique et en Asie. Alastair apporte un leadership technique de haut niveau pour déployer l’utilisation des données et améliorer les résultats d’apprentissage.',
      linkedin: 'https://www.linkedin.com/in/alastair-rodd/' },
  ],

  faqs: [
    { cat: 'Compatibilité et exigences techniques', items: [
      { q: 'Quelles sont les exigences minimales des tablettes Android pour exécuter Tangerine ?', a: 'Pour la collecte de données générique : un écran tactile ; Android 8.0 ou plus (la capture par scanner, image, vidéo et son nécessite Android 9.0 ou plus) ; un navigateur compatible HTML5 avec Android System WebView ; le Wi-Fi (b/g/n) ; 64 Go de stockage ; 4 Go de RAM ; un processeur multicœur de 1,6 GHz ou plus (double cœur minimum) ; plus de 7 heures d’autonomie sans Internet ; et la possibilité d’installer des APK tiers.' },
      { q: 'Puis-je utiliser Tangerine depuis un navigateur web sur un ordinateur ?', a: 'Oui. Tangerine fonctionne depuis un APK sous Android, et depuis Chrome ou Edge en mode hors ligne lorsqu’il est installé comme application web progressive (PWA).' },
      { q: 'Comment la plateforme fonctionne-t-elle en ligne et hors ligne ?', a: 'En ligne, les formulaires peuvent être utilisés comme liens directs — sans installation d’application, accessibles depuis n’importe quel appareil. Hors ligne, on utilise un APK ou une PWA installé. Tangerine est optimisé pour les modes APK et navigateur/PWA.' },
      { q: 'Combien de temps faut-il pour synchroniser les données collectées dès qu’une connexion est disponible ?', a: 'Cela dépend de la vitesse de connexion, du nombre d’enregistrements en attente et de la taille du formulaire. Par exemple, 10 évaluations EGRA (~350 000 au total) se synchronisent en environ 5 secondes sur une connexion 4G stable.' },
    ] },
    { cat: 'Gestion des tests et des items', items: [
      { q: 'Puis-je définir des temps de réponse minimaux ou maximaux par item ou par session ?', a: 'Actuellement, vous pouvez définir des minuteurs avec les items de type grille et EF Touch. Pour les autres, du code personnalisé peut activer des minuteurs par item ou par section.' },
      { q: 'Ces temps peuvent-ils être personnalisés par groupe ou par élève ?', a: 'Pour les items de type grille et EF Touch, les temps ne peuvent pas être modifiés par groupe via le code, mais vous pouvez créer des items distincts par groupe et les activer/désactiver avec une logique conditionnelle (de saut). Des minuteurs personnalisés peuvent aussi être conçus pour varier selon le groupe ou l’élève.' },
    ] },
    { cat: 'Traitement et livraison des données', items: [
      { q: 'Comment la non-réponse est-elle traitée ? Peut-elle être paramétrée ?', a: 'Oui. Un réglage « Sans réponse » est configuré au niveau de la plateforme et appliqué à chaque groupe (et non par groupe). Pour les items obligatoires, vous pouvez ajouter une option « Sans réponse » dont la valeur est accessible depuis l’interface du formulaire.' },
      { q: 'Quelle est la structure des fichiers exportés ?', a: 'Résultats (lignes) — chaque enregistrement est une évaluation unique ou un ensemble de sous-tâches (dans Tangerine:Teach). Données des items (colonnes) — une ou plusieurs colonnes par item indiquent si une réponse a été sélectionnée et sa valeur numérique.' },
      { q: 'Quelles informations figurent dans les exports ?', a: 'Par défaut, la valeur de la réponse ainsi que la date et l’heure de début/fin de l’évaluation entière ; chaque section enregistre aussi son heure de début, ce qui permet de déduire le temps par page. D’autres paramètres peuvent être ajoutés avec du code personnalisé. Dans Teach, le pourcentage par groupe d’items, le score total et les points par section sont inclus.' },
    ] },
    { cat: 'Gestion des accès', items: [
      { q: 'Comment les identifiants des élèves sont-ils générés et fournis ?', a: 'Tangerine, Tangerine:Teach et Tangerine:Coach sont configurés pour les répondants, les enseignants et les accompagnateurs. Les évaluations auto-administrées et dirigées par l’élève permettent aux élèves ou aux administrateurs de saisir un identifiant d’élève unique, ou de le faire générer par le système.' },
      { q: 'Puis-je importer en masse des données d’élèves pour les tests ?', a: 'Oui. Selon l’usage, les données peuvent alimenter des listes déroulantes (région, école, classe) ou, dans Teach, servir de source pour les groupes-classes, les enseignants et les écoles.' },
      { q: 'Quels rôles d’utilisateur sont disponibles ?', a: 'Les rôles reposent sur des autorisations/actions plutôt que sur l’administration scolaire. Par défaut, il en existe deux — Administrateur (toutes les actions dans son groupe) et Membre (téléchargement des résultats CSV). De nouveaux rôles avec des autorisations spécifiques peuvent être ajoutés par groupe.' },
    ] },
    { cat: 'Sécurité de l’information', items: [
      { q: 'Comment la sécurité et la confidentialité sont-elles garanties ?', a: 'Tout accès aux données est protégé par mot de passe sur le serveur comme sur l’appareil ; seuls les utilisateurs authentifiés et autorisés peuvent accéder aux données. Sur le serveur, chaque utilisateur est créé par un administrateur autorisé. Sur les appareils, chaque utilisateur définit ses propres informations d’accès pour protéger les données stockées localement.' },
      { q: 'Où les données sont-elles stockées ?', a: 'Toutes les options sont disponibles. Notre service utilise le cloud AWS, et nous pouvons proposer des alternatives selon les besoins du client — d’autres fournisseurs de cloud ou un stockage local.' },
    ] },
    { cat: 'Analyse, rapports et retours', items: [
      { q: 'La plateforme peut-elle créer des rapports par élève, cours ou école ?', a: 'Oui — des rapports peuvent être créés à partir des données compilées dans des systèmes tiers comme Power BI. Il n’existe pas de tableau de bord intégré à la plateforme, mais il pourrait être développé (l’infrastructure existe).' },
      { q: 'Quelles analyses ou visualisations proposez-vous ?', a: 'Tangerine est une plateforme de collecte de données ; les rapports et tableaux de bord sont normalement réalisés hors plateforme dans Power BI ou des outils similaires.' },
      { q: 'Les résultats peuvent-ils être exportés vers Excel, PDF ou CSV ?', a: 'L’export est proposé au format CSV, ou via une connexion directe à la base de données.' },
      { q: 'Existe-t-il un retour en temps réel pour les élèves et les enseignants ?', a: 'Il peut être programmé selon les besoins — dans Teach, via l’interface au niveau des sous-tâches.' },
      { q: 'Que contient le rapport de l’enseignant ?', a: 'Dans Teach, les enseignants voient des rapports de classe par tâche ou matière indiquant les élèves et la réussite par tranches de pourcentage, ainsi que la performance totale par élève. Teach affiche aussi des rapports d’assiduité, d’évaluation continue et de comportement.' },
      { q: 'Peut-on suivre l’apprentissage sur plusieurs évaluations ?', a: 'Oui — en identifiant les élèves de façon cohérente d’une administration à l’autre, vous pouvez comparer les résultats dans le temps. Cela nécessite des identifiants d’élèves cohérents et une structure de données adaptée ; les rapports longitudinaux sont générés hors plateforme (Excel, Power BI, etc.).' },
    ] },
    { cat: 'Accessibilité', items: [
      { q: 'Existe-t-il des options d’accessibilité pour les élèves en situation de handicap ?', a: 'La plateforme prend en charge des vidéos présentant les questions en langue des signes, l’enregistrement de réponses par vidéo en langue des signes, des enregistrements audio pour lire les questions et réponses à voix haute, et l’enregistrement de réponses audio. Les évaluations sont préparées selon les besoins de chaque élève ; il n’existe pas de conversion automatique d’une évaluation générique en une évaluation inclusive.' },
      { q: 'Les évaluations peuvent-elles être adaptées aux besoins d’accessibilité ?', a: 'Oui — les évaluations inclusives sont créées en adaptant l’évaluation aux besoins de l’élève.' },
    ] },
    { cat: 'Intégration', items: [
      { q: 'Tangerine peut-il s’intégrer à un SIGE (EMIS) ?', a: 'Oui. L’intégration des données à un SIGE est un effort distinct dans lequel les experts de l’organisation ou du ministère de l’éducation jouent un rôle central et directeur.' },
      { q: 'Existe-t-il des API pour faciliter l’intégration ?', a: 'Oui — des API gèrent les données brutes, et nous fournissons des outils pour transformer ou convertir les données vers MySQL, où le SQL standard fonctionne avec vos outils ETL existants.' },
    ] },
    { cat: 'Expérience utilisateur et assistance', items: [
      { q: 'Une formation est-elle nécessaire pour utiliser l’interface ?', a: 'Cela dépend du niveau technique de l’utilisateur. Nous recommandons une séance d’une heure ou une fiche de référence pas à pas ; les applications peuvent inclure des instructions multimédias couvrant les bases.' },
      { q: 'La plateforme fournit-elle des messages d’erreur et des alertes ?', a: 'Oui — il existe des messages d’erreur et quelques alertes pour guider les utilisateurs en cas de défaillance technique ou d’usage incorrect.' },
      { q: 'Une assistance technique est-elle disponible ?', a: 'Oui, pendant les heures ouvrées CET (heure d’Europe centrale).' },
      { q: 'L’interface et les fonctionnalités peuvent-elles être personnalisées ?', a: 'Tangerine est hautement configurable — le contenu et certaines fonctionnalités, notamment le branchement adaptatif, l’intégration aux standards du curriculum et la prise en charge multilingue. Certaines personnalisations spécifiques peuvent nécessiter un développement supplémentaire.' },
    ] },
  ],

  help: {
    'getting-started': {
      title: 'Premiers pas',
      summary: 'Configurez votre premier groupe, concevez une évaluation et collectez vos premiers enregistrements sur une tablette.',
      intro: 'Nouveau sur Tangerine ? Ce guide vous mène d’un espace de travail vide à vos premiers enregistrements synchronisés. Tout le flux fonctionne hors ligne — une connexion n’est nécessaire que pour la synchronisation.',
      sections: [
        { h: 'De zéro au premier enregistrement', steps: [
          'Obtenez un accès — démarrez un essai gratuit ou connectez-vous à votre instance Tangerine hébergée.',
          'Créez un groupe. Les groupes organisent vos instruments, utilisateurs et résultats pour un projet, une région ou une étude.',
          'Créez ou importez une évaluation (voir « Création d’instruments ») — ou partez d’un modèle.',
          'Installez Tangerine sur votre appareil : soit l’APK Android, soit la PWA du navigateur via Chrome ou Edge pour une utilisation hors ligne.',
          'Collectez des données sur le terrain. Tout est stocké sur l’appareil, aucune connexion n’est donc requise.',
          'Synchronisez à la reconnexion. Les enregistrements sont téléversés vers votre serveur sécurisé pour une analyse centralisée.',
        ] },
        { h: 'Ce dont vous aurez besoin', list: [
          'Une tablette ou un smartphone Android (Android 8.0 ou plus ; 9.0 ou plus pour la capture d’image, vidéo, audio et scanner).',
          'Une instance Tangerine — hébergée par Tangerine Central ou auto-hébergée.',
          'Environ une heure d’orientation, ou une fiche de référence d’une page, pour les nouveaux collecteurs de données.',
        ] },
      ],
    },
    'syncing-offline': {
      title: 'Synchronisation et hors ligne',
      summary: 'Comment fonctionne le stockage hors ligne et comment les données se synchronisent vers des serveurs sécurisés à la reconnexion.',
      intro: 'Tangerine privilégie le hors ligne : les données sont saisies et stockées directement sur chaque appareil, puis synchronisées dès qu’une connexion est disponible. C’est ce qui le rend fiable dans les contextes éloignés et à faible bande passante.',
      sections: [
        { h: 'Deux façons de fonctionner', list: [
          'APK (application Android) — installé depuis un fichier APK ; le mode recommandé pour la collecte sur le terrain.',
          'PWA de navigateur — installée depuis Chrome ou Edge et exécutée hors ligne. Tangerine est optimisé pour les deux.',
          'Formulaires en ligne — utilisés comme liens directs sans installation, accessibles depuis n’importe quel appareil.',
        ] },
        { h: 'Comment fonctionne la synchronisation', p: [
          'Hors ligne, chaque enregistrement est conservé en toute sécurité sur l’appareil. Au retour de la connexion, les enregistrements en attente sont téléversés automatiquement vers votre serveur.',
          'La vitesse de synchronisation dépend de la qualité de la connexion, du nombre d’enregistrements en attente et de la taille du formulaire. À titre de repère, 10 évaluations EGRA (~350 000 au total) se synchronisent en environ 5 secondes sur une connexion 4G stable.',
        ] },
      ],
    },
    'building-instruments': {
      title: 'Création d’instruments',
      summary: 'Logique de saut, lecture audio, items chronométrés et validation en temps réel pour des enquêtes personnalisées.',
      intro: 'Tangerine est hautement personnalisable — concevez des évaluations, enquêtes, entretiens et grilles d’observation adaptés à votre contexte local.',
      sections: [
        { h: 'Ce que vous pouvez créer', list: [
          'Items chronométrés et non chronométrés, y compris les types grille et EF Touch avec minuteurs intégrés.',
          'Logique de saut et branchement conditionnel pour adapter le déroulé à chaque répondant.',
          'Lecture audio pour énoncer les consignes à voix haute, plus capture d’image, vidéo et audio (Android 9.0 ou plus).',
          'Validation en temps réel pour repérer les erreurs au fur et à mesure de la saisie.',
          'Instruments multilingues — Tangerine a été utilisé dans plus de 100 langues.',
        ] },
        { h: 'Accessibilité', p: [
          'Les évaluations inclusives sont créées en adaptant un instrument aux besoins de l’élève — par exemple consignes en vidéo en langue des signes, réponses en vidéo en langue des signes, narration audio et réponses audio. Il n’existe pas de conversion automatique d’une évaluation générique en une évaluation inclusive.',
        ] },
      ],
    },
    'reports-export': {
      title: 'Rapports et export',
      summary: 'Lisez des tableaux de bord, regroupez les élèves par performance et exportez les données pour analyse.',
      intro: 'Tangerine est une plateforme de collecte de données ; les rapports et tableaux de bord riches sont généralement construits hors plateforme à partir de vos données exportées.',
      sections: [
        { h: 'Exporter vos données', list: [
          'Exportez au format CSV, ou connectez-vous directement à la base de données.',
          'Les résultats sont des lignes — chaque enregistrement est une évaluation unique ou un ensemble de sous-tâches (dans Teach).',
          'Les données des items sont en colonnes — indiquant si une réponse a été sélectionnée et sa valeur numérique.',
          'Par défaut, chaque export inclut la valeur de la réponse ainsi que la date et l’heure de début/fin ; les heures de début par section permettent de déduire le temps passé par page.',
        ] },
        { h: 'Tableaux de bord et suivi longitudinal', p: [
          'Construisez des tableaux de bord et des visualisations dans des outils comme Power BI. Dans Tangerine:Teach, les enseignants voient aussi des rapports de classe dans l’application, par tâche ou matière, avec la réussite par tranches de pourcentage et des totaux par élève.',
          'Suivez l’apprentissage dans le temps en gardant des identifiants d’élèves cohérents d’une administration à l’autre, puis générez des rapports longitudinaux hors plateforme (Excel, Power BI ou d’autres outils d’analyse).',
        ] },
      ],
    },
    'data-privacy': {
      title: 'Données et confidentialité',
      summary: 'Propriété locale des données, rôles de compte et protection des données de votre programme.',
      intro: 'Tangerine repose sur la souveraineté des données : les programmes possèdent et contrôlent leurs données, avec une protection à la fois sur le serveur et sur l’appareil.',
      sections: [
        { h: 'Sécurité', list: [
          'Tout accès aux données est protégé par mot de passe sur le serveur comme sur l’appareil ; seuls les utilisateurs authentifiés et autorisés y accèdent.',
          'Sur le serveur, chaque utilisateur est créé par un administrateur autorisé.',
          'Sur les appareils, chaque utilisateur définit ses propres informations d’accès pour protéger les données stockées localement.',
        ] },
        { h: 'Stockage et rôles', p: [
          'Toutes les options de stockage sont disponibles — notre service utilise le cloud AWS, et nous pouvons proposer d’autres fournisseurs de cloud ou un stockage local selon vos besoins.',
          'Les rôles reposent sur des autorisations : par défaut Administrateur (toutes les actions au sein de son groupe) et Membre (téléchargement des résultats CSV). De nouveaux rôles avec des autorisations spécifiques peuvent être ajoutés par groupe.',
        ] },
      ],
    },
    'community': {
      title: 'Communauté',
      summary: 'Tangerine est open source — connectez-vous avec les contributeurs et la communauté au sens large.',
      intro: 'Le logiciel principal est gratuit et ouvert à tous, disponible sous la Licence publique générale GNU. Une communauté mondiale façonne son évolution.',
      sections: [
        { h: 'Impliquez-vous', list: [
          'Accédez au code source et à la documentation sur GitHub.',
          'Si vous modifiez le code, partagez vos changements avec la communauté (GNU GPL).',
          'Les abonnés rejoignent une communauté mondiale de pairs utilisateurs de Tangerine.',
          'Contribuez à une bibliothèque d’instruments partagée et utilisez-la (bientôt disponible).',
        ] },
        { h: 'Code source', p: [
          'La nature ouverte de Tangerine vous permet d’héberger la plateforme sur votre propre serveur et d’adapter son code à vos besoins. Explorez les dépôts pour commencer.',
        ], link: { label: 'Tangerine sur GitHub', href: 'https://github.com/Tangerine-Community/' } },
      ],
    },
  },
};
