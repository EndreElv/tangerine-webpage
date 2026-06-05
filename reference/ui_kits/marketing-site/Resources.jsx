// Tangerine marketing site — Resources pages (Impact, User Stories, FAQs)
const { Button: RsButton, Card: RsCard, Stat: RsStat, Badge: RsBadge } = window.TangerineDesignSystem_c907c9;
const { useState: useRsState } = React;

const PARTNERS_ALL = ['sesame','save-the-children','world-vision','air','irc','worldreader','concern','ipa'];

function ImpactPage({ go }) {
  return (
    <main>
      <section className="mk-page-hero mk-page-hero--brand">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow" style={{ color: 'var(--gold-300)' }}>Impact</p>
          <h1>Tangerine&rsquo;s local and global impact</h1>
          <p>Tangerine has modernized reading and mathematics assessments in resource-constrained settings around the world.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-impact-grid">
          <RsStat value="5M+" label="assessments & surveys conducted" gradient size="lg" />
          <RsStat value="65+" label="countries" gradient size="lg" />
          <RsStat value="80+" label="organizations & researchers" gradient size="lg" />
          <RsStat value="100+" label="languages" gradient size="lg" />
        </div>
      </section>

      <section className="mk-section mk-section--soft">
        <div className="mk-split">
          <img src="../../assets/illustrations/global.png" alt="" className="mk-split__art" />
          <div>
            <h2>Modernizing assessment where it&rsquo;s needed most</h2>
            <p>Over a decade of proven performance, millions of successful assessments, and deployment across 65+ countries have established Tangerine as a trusted standard for reliable, versatile data collection — and it is open-source.</p>
            <p>Beyond academics, Tangerine facilitates non-cognitive assessments, inclusive education, and social-emotional learning. We&rsquo;re not just assessing knowledge; we&rsquo;re nurturing holistic development.</p>
            <RsButton variant="secondary" onClick={() => go('user-stories')}>Read user stories</RsButton>
          </div>
        </div>
      </section>

      <section className="mk-section">
        <h2 className="mk-section__title">Trusted by a global community</h2>
        <div className="mk-partners">
          {PARTNERS_ALL.map((p) => (
            <div key={p} className="mk-partners__item"><img src={`../../assets/partners/${p}.png`} alt={p} /></div>
          ))}
        </div>
      </section>
    </main>
  );
}

function UserStoriesPage({ go }) {
  return (
    <main>
      <section className="mk-page-hero">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow">User Stories</p>
          <h1>From the field</h1>
          <p>How organizations around the world put Tangerine to work.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-stories">
          {window.TG_STORIES.map((s) => (
            <RsCard key={s.tag} interactive elevation="raised" className="mk-story">
              <RsBadge tone="brand">{s.org}</RsBadge>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="mk-story__tag">{s.tag}</span>
              <span className="mk-link">Continue Reading &rarr;</span>
            </RsCard>
          ))}
        </div>
      </section>

      <section className="mk-cta">
        <h2>Have a Tangerine story to share?</h2>
        <p>We&rsquo;d love to hear how you&rsquo;re using Tangerine in your program.</p>
        <RsButton variant="primary" size="lg" onClick={() => go('contact')}>Get in touch</RsButton>
      </section>
    </main>
  );
}

function FaqRow({ item, open, onToggle }) {
  return (
    <div className={'mk-faq' + (open ? ' mk-faq--open' : '')}>
      <button className="mk-faq__q" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="mk-faq__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mk-faq__a">{item.a}</div>}
    </div>
  );
}

function FaqsPage({ go }) {
  const [open, setOpen] = useRsState('0-0');
  return (
    <main>
      <section className="mk-page-hero">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow">FAQs</p>
          <h1>Frequently asked questions</h1>
          <p>Everything from device requirements to data, security, and support.</p>
        </div>
      </section>

      <section className="mk-section mk-section--narrow">
        {window.TG_FAQS.map((group, gi) => (
          <div key={gi} className="mk-faq-group">
            <h2 className="mk-faq-group__title">{group.cat}</h2>
            <div className="mk-faqs">
              {group.items.map((item, ii) => {
                const id = gi + '-' + ii;
                return <FaqRow key={id} item={item} open={open === id} onToggle={() => setOpen(open === id ? '' : id)} />;
              })}
            </div>
          </div>
        ))}
        <div className="mk-faqs__foot">
          <p>Still have questions?</p>
          <RsButton variant="secondary" onClick={() => go('contact')}>Contact us</RsButton>
        </div>
      </section>
    </main>
  );
}

window.ImpactPage = ImpactPage;
window.UserStoriesPage = UserStoriesPage;
window.FaqsPage = FaqsPage;
