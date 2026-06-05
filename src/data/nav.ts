// Central route map + nav/footer structure.
// The prototype faked routing with go('<key>'); we map those keys to real URLs.

export const ROUTES: Record<string, string> = {
  home: '/',
  trial: '/get-tangerine',
  'p-tangerine': '/tangerine',
  'p-teach': '/tangerine-teach',
  'p-coach': '/tangerine-coach',
  'p-acuity': '/tangerine-acuity',
  impact: '/impact',
  'user-stories': '/user-stories',
  faqs: '/faqs',
  about: '/about',
  contact: '/contact',
  help: '/help',
};

/** Resolve a prototype routing key (or `help/<slug>`) to a real URL path. */
export function href(to: string): string {
  if (to.startsWith('help/')) return `/help/${to.slice(5)}`;
  return ROUTES[to] ?? '/';
}

export interface NavItem {
  label: string;
  to?: string;
  menu?: { label: string; to: string }[];
}

export const NAV: NavItem[] = [
  { label: 'Home', to: 'home' },
  {
    label: 'Products',
    menu: [
      { label: 'Tangerine®', to: 'p-tangerine' },
      { label: 'Tangerine:Coach', to: 'p-coach' },
      { label: 'Tangerine:Teach', to: 'p-teach' },
      { label: 'Tangerine:Acuity', to: 'p-acuity' },
    ],
  },
  {
    label: 'Resources',
    menu: [
      { label: 'User Stories', to: 'user-stories' },
      { label: 'Impact', to: 'impact' },
      { label: 'FAQs', to: 'faqs' },
      { label: 'Get Tangerine', to: 'trial' },
    ],
  },
  {
    label: 'Support',
    menu: [
      { label: 'Help', to: 'help' },
      { label: 'Contact Us', to: 'contact' },
      { label: 'About', to: 'about' },
    ],
  },
];

export const FOOTER_COLS: { title: string; links: [string, string][] }[] = [
  {
    title: 'Products',
    links: [
      ['Tangerine', 'p-tangerine'],
      ['Tangerine:Teach', 'p-teach'],
      ['Tangerine:Coach', 'p-coach'],
      ['Tangerine:Acuity', 'p-acuity'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['User Stories', 'user-stories'],
      ['Impact', 'impact'],
      ['FAQs', 'faqs'],
      ['Get Tangerine', 'trial'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Help', 'help'],
      ['Contact Us', 'contact'],
      ['About', 'about'],
    ],
  },
];
