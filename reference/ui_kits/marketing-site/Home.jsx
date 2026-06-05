// Tangerine marketing site — Home page
const { Button: MKButton, Card: MKCard, Stat: MKStat } = window.TangerineDesignSystem_c907c9;

const PRODUCTS = [
  { icon: '../../assets/product-icons/tangerine.png', name: 'Tangerine®', to: 'p-tangerine',
    points: ['Large-scale assessments and surveys by trained data-collection teams',
             'Automatically syncs results to secure servers for centralized analysis',
             'Monitor learning outcomes, identify trends, and inform policy'] },
  { icon: '../../assets/product-icons/teach.png', name: 'Tangerine:Teach', to: 'p-teach',
    points: ['Track student attendance, behavior, and learning progress',
             'Groups students and recommends targeted interventions',
             'Embedded feedback and reporting tools for educators'] },
  { icon: '../../assets/product-icons/coach.png', name: 'Tangerine:Coach', to: 'p-coach',
    points: ['Conduct classroom observations and give teacher feedback',
             'Instant results and suggested feedback for real-time coaching',
             'Monitor instructional quality across schools or regions'] },
];

const FEATURES = [
  { img: '../../assets/illustrations/global.png', title: 'Global Impact',
    body: 'Over 5 million assessments and surveys conducted across 65 countries, supported by 80 organizations and researchers.' },
  { img: '../../assets/illustrations/cloud.png', title: 'Timely Data',
    body: 'Say goodbye to weeks of waiting. Results are available immediately upon upload for timely, accurate insights.' },
  { img: '../../assets/illustrations/brain.png', title: 'Versatile Capabilities',
    body: 'Beyond academics — non-cognitive assessments, inclusive education, and social-emotional learning.' },
];

const PARTNERS = ['sesame','save-the-children','world-vision','air','irc','worldreader','concern','ipa'];

const STORIES = [
  { tag: '/school-to-school', title: 'Tablets Are In, Paper Is Out: School-to-School International Embracing Electronic Data Collection' },
  { tag: '/central-square-foundation', title: 'System-Led Assessment at Scale in India' },
];

function Home({ go }) {
  return (
    <main>
      {/* Hero */}
      <section className="mk-hero">
        <img className="mk-hero__bg" src="../../assets/imagery/hero-overlay.png" alt="" />
        <div className="mk-hero__scrim" />
        <div className="mk-hero__content">
          <h1>Actionable insights,<br/>anywhere.</h1>
          <p className="mk-hero__sub">Supporting education and innovation.</p>
          <p className="mk-hero__body">
            Tangerine® is transforming how education systems collect data, assess learning, and support
            teachers — especially in resource-constrained environments. Open-source and offline-first.
          </p>
          <MKButton variant="primary" size="lg" onClick={() => go('trial')}>Get Tangerine</MKButton>
        </div>
      </section>

      {/* Product suite */}
      <section className="mk-section">
        <p className="tg-eyebrow" style={{textAlign:'center'}}>The Suite</p>
        <h2 className="mk-section__title">Tangerine® Product Suite</h2>
        <div className="mk-suite">
          {PRODUCTS.map((p) => (
            <MKCard key={p.name} elevation="raised" accentTop className="mk-suite__card">
              <img className="mk-suite__icon" src={p.icon} alt="" />
              <h3>{p.name}</h3>
              <ul className="mk-suite__list">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <button className="mk-link" onClick={() => p.to && go(p.to)}>
                Explore {p.name} →
              </button>
            </MKCard>
          ))}
        </div>
      </section>

      {/* Feature trio */}
      <section className="mk-section mk-section--soft">
        <div className="mk-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="mk-feature">
              <img src={f.img} alt="" />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact stats */}
      <section className="mk-impact">
        <h2 className="mk-section__title" style={{color:'#fff'}}>Tangerine&rsquo;s local and global impact</h2>
        <div className="mk-impact__row">
          <MKStat value="100+" label="languages" size="lg" />
          <MKStat value="60+" label="countries worldwide" size="lg" />
          <MKStat value="80+" label="organizations" size="lg" />
        </div>
      </section>

      {/* User stories */}
      <section className="mk-section">
        <p className="tg-eyebrow" style={{textAlign:'center'}}>User Stories</p>
        <h2 className="mk-section__title">From the field</h2>
        <div className="mk-stories">
          {STORIES.map((s) => (
            <MKCard key={s.tag} interactive elevation="raised" className="mk-story" onClick={() => go('user-stories')}>
              <span className="mk-story__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <span className="mk-link">Continue Reading →</span>
            </MKCard>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="mk-section mk-section--soft">
        <h2 className="mk-section__title">Tangerine® Community</h2>
        <div className="mk-partners">
          {PARTNERS.map((p) => (
            <div key={p} className="mk-partners__item">
              <img src={`../../assets/partners/${p}.png`} alt={p} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mk-cta">
        <h2>Ready to try Tangerine?</h2>
        <p>Start a free trial today.</p>
        <MKButton variant="accent" size="lg" onClick={() => go('trial')}>Get Started</MKButton>
      </section>
    </main>
  );
}
window.Home = Home;
