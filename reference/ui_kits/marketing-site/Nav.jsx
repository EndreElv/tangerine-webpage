// Tangerine marketing site — top navigation
const { Button } = window.TangerineDesignSystem_c907c9;
const { useState } = React;

const NAV = [
  { label: 'Home', to: 'home' },
  { label: 'Products', menu: [
    { label: 'Tangerine®', to: 'p-tangerine' },
    { label: 'Tangerine:Coach', to: 'p-coach' },
    { label: 'Tangerine:Teach', to: 'p-teach' },
    { label: 'Tangerine:Acuity', to: 'p-acuity' },
  ] },
  { label: 'Resources', menu: [
    { label: 'User Stories', to: 'user-stories' }, { label: 'Impact', to: 'impact' },
    { label: 'FAQs', to: 'faqs' }, { label: 'Get Tangerine', to: 'trial' },
  ] },
  { label: 'Support', menu: [
    { label: 'Help', to: 'help' }, { label: 'Contact Us', to: 'contact' }, { label: 'About', to: 'about' },
  ] },
];

function Nav({ go }) {
  const [open, setOpen] = useState(null);
  return (
    <header className="mk-nav">
      <div className="mk-nav__inner">
        <a className="mk-nav__brand" onClick={() => go('home')}>
          <img src="../../assets/logos/tangerine-logo.png" alt="Tangerine" />
        </a>
        <nav className="mk-nav__links" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) => (
            <div key={item.label} className="mk-nav__item"
                 onMouseEnter={() => setOpen(item.menu ? item.label : null)}>
              <button className="mk-nav__link" onClick={() => item.to && go(item.to)}>
                {item.label}{item.menu && <span className="mk-nav__caret">▾</span>}
              </button>
              {item.menu && open === item.label && (
                <div className="mk-nav__menu">
                  {item.menu.map((m) => (
                    <button key={m.label} className="mk-nav__menu-link"
                            onClick={() => { m.to && go(m.to); setOpen(null); }}>
                      {m.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Button variant="primary" size="sm" onClick={() => go('trial')}>Get Started</Button>
      </div>
    </header>
  );
}

window.Nav = Nav;
