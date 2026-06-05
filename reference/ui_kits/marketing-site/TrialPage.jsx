// Tangerine marketing site — Get Tangerine / Pricing page
const { Button: TPButton, Card: TPCard, Input: TPInput, Checkbox: TPCheckbox, Badge: TPBadge } = window.TangerineDesignSystem_c907c9;
const { useState: useTPState, useRef: useTPRef } = React;

const SUB_BENEFITS = [
  'Technical support and troubleshooting',
  'Training resources, including Moodle-based courses',
  'Participation in a global peer community of Tangerine users',
  'Contribution to and use of a shared instrument library (coming soon)',
];

function PricingTier({ tier, onChoose }) {
  return (
    <div className={'mk-tier' + (tier.featured ? ' mk-tier--featured' : '')}>
      {tier.featured && <div className="mk-tier__flag">Most popular</div>}
      <h3 className="mk-tier__name">{tier.name}</h3>
      <div className="mk-tier__price">{tier.price}</div>
      <div className="mk-tier__period">{tier.period || ' '}</div>
      <ul className="mk-tier__list">
        <li>{tier.results}</li>
        <li>{tier.support}</li>
        {tier.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <TPButton variant={tier.featured ? 'primary' : 'secondary'} block onClick={() => onChoose(tier)}>{tier.cta}</TPButton>
    </div>
  );
}

function TrialPage({ go }) {
  const [sent, setSent] = useTPState(false);
  const formRef = useTPRef(null);
  const toForm = (tier) => {
    if (tier && tier.cta === 'Contact us') { go('contact'); return; }
    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <main>
      <div className="mk-breadcrumb"><button onClick={() => go('home')}>HOME</button> &gt; <strong>PRICING</strong></div>

      <section className="mk-prod-hero">
        <h1>Tangerine subscription pricing</h1>
        <p>Tangerine is open-source software — anyone can download the source code and run it on their own server, for free. This is ideal for organizations with the technical capacity to manage their own hosting and support.</p>
        <p>A paid subscription to Tangerine Central provides a ready-to-use, hosted and maintained version: your own secure “instance” where you can build assessments, collect and access data, and manage users — without worrying about setup, updates, security, or server maintenance.</p>
      </section>

      <section className="mk-section">
        <div className="mk-pricing">
          {window.TG_PRICING.map((t) => <PricingTier key={t.name} tier={t} onChoose={toForm} />)}
        </div>
        <p className="mk-pricing__note">Subscription fees are per year and per organization. Prices are subject to change.</p>

        <div className="mk-benefits">
          <h3>Every subscription includes</h3>
          <ul>
            {SUB_BENEFITS.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <p>This model supports sustainability and collaboration, while keeping the core software free and open to all.</p>
        </div>
      </section>

      {/* Free trial */}
      <section className="mk-section mk-section--soft" ref={formRef}>
        <div className="mk-trial__grid">
          <div className="mk-trial__copy">
            <p className="tg-eyebrow">Free trial</p>
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>Want to try before you buy?</h2>
            <p>Tell us a little about your program and we&rsquo;ll set you up with a free trial of the Tangerine suite — assessments, classroom tracking, and coaching, online or off.</p>
            <ul className="mk-trial__benefits">
              <li>Open-source &amp; offline-first</li>
              <li>Deploy on tablets or smartphones</li>
              <li>Sync to secure servers when connected</li>
            </ul>
          </div>
          <TPCard elevation="raised" className="mk-trial__form">
            {sent ? (
              <div className="mk-trial__done">
                <div className="mk-trial__check">&#10003;</div>
                <h3>Thanks — you&rsquo;re on the list!</h3>
                <p>Our team will reach out with your trial details shortly.</p>
                <TPButton variant="secondary" onClick={() => go('home')}>Back to home</TPButton>
              </div>
            ) : (
              <React.Fragment>
                <h3>Request your free trial</h3>
                <TPInput label="Full name" required placeholder="Amara Okafor" />
                <TPInput label="Work email" type="email" required placeholder="you@organization.org" />
                <TPInput label="Organization" placeholder="e.g. School-to-School International" />
                <TPInput label="Country" placeholder="Where will you deploy?" />
                <TPCheckbox label="Send me product updates and field stories." defaultChecked />
                <TPButton variant="primary" block onClick={() => setSent(true)}>Request trial</TPButton>
              </React.Fragment>
            )}
          </TPCard>
        </div>
      </section>

      {/* Host yourself */}
      <section className="mk-section">
        <TPCard elevation="raised" accentTop className="mk-selfhost">
          <div>
            <TPBadge tone="brand">Open source</TPBadge>
            <h2>Host Tangerine yourself</h2>
            <p>Tangerine&rsquo;s open nature lets you host the platform on your own server and adapt its code to your needs. We only ask that if you make changes, you share modified code with the community. Tangerine is available under the GNU General Public License.</p>
            <TPButton as="a" variant="secondary" href="https://github.com/Tangerine-Community/" target="_blank" rel="noopener" iconRight={<span>&#8599;</span>}>Source code &amp; docs on GitHub</TPButton>
          </div>
          <div className="mk-selfhost__mark"><img src="../../assets/product-icons/tangerine.png" alt="" /></div>
        </TPCard>
      </section>

      <section className="mk-cta">
        <h2>Ready to get started with Tangerine?</h2>
        <TPButton variant="accent" size="lg" onClick={() => toForm(null)}>Start free trial</TPButton>
      </section>
    </main>
  );
}
window.TrialPage = TrialPage;
