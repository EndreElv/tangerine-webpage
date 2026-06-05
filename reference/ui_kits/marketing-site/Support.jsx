// Tangerine marketing site — Support pages (About, Contact, Help)
const { Button: SpButton, Card: SpCard, Input: SpInput, Badge: SpBadge } = window.TangerineDesignSystem_c907c9;
const { useState: useSpState } = React;

function AboutPage({ go }) {
  return (
    <main>
      <section className="mk-page-hero">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow">About</p>
          <h1>What is Tangerine Central?</h1>
          <p>Tangerine Central is a women-owned small business dedicated to advancing efficient, effective data collection and use in any setting — online or offline. Our mission is to ease the burden of data collection and deliver timely, actionable insights in even the most resource-constrained settings.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-principles">
          {window.TG_PRINCIPLES.map((p) => (
            <SpCard key={p.title} elevation="raised" accentTop className="mk-principle">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </SpCard>
          ))}
        </div>
        <p className="mk-section__lead" style={{ marginTop: 'var(--space-7)' }}>
          Our team combines expert leadership in learning assessment, digital platform development, AI and data science, program implementation, and capacity strengthening — grounded in decades of experience designing, deploying, and scaling Tangerine. We provide hands-on support with instrument design, deployment, and data analysis, plus training and capacity building so partners can use Tangerine effectively and independently.
        </p>
      </section>

      <section className="mk-section mk-section--soft">
        <div className="mk-story-feature">
          <div>
            <p className="tg-eyebrow">From paper to progress</p>
            <h2>The story of Tangerine</h2>
            <p>Tangerine was born out of first-hand experience collecting student data in low-resource and remote contexts. During a challenging early-grade reading assessment on an RTI International project, co-founders Carmen and Amber found themselves buried in paper forms, battling malfunctioning staplers, illegible copies, and missing data. The process was slow, outdated, and error-prone. They knew there had to be a better way.</p>
            <p>That moment sparked Tangerine: a digital solution to improve data quality, streamline fieldwork, and enable real-time monitoring — no more waiting weeks to discover surprises in the data. What started in 2011 as a tool for early reading assessments has grown into a versatile, offline-first platform used in 65+ countries.</p>
            <p>In 2025, Tangerine was brought under the management of Tangerine Central, led by Carmen and Amber — continuing to help governments and organizations unlock the power of data to improve lives.</p>
          </div>
          <blockquote className="mk-belief">
            <span className="tg-eyebrow">Our guiding belief</span>
            <p>Quality, timely data has the power to change lives for the better — and is essential to helping communities shape their own futures.</p>
          </blockquote>
        </div>
      </section>

      <section className="mk-section">
        <p className="tg-eyebrow" style={{ textAlign: 'center' }}>Our Team</p>
        <h2 className="mk-section__title">Get to know our team</h2>
        <div className="mk-team">
          {window.TG_TEAM.map((m) => (
            <SpCard key={m.name} elevation="raised" className="mk-member">
              <img className="mk-member__photo" src={m.photo} alt={m.name} />
              <h3>{m.name}</h3>
              <p className="mk-member__role">{m.role}</p>
              <p className="mk-member__bio">{m.bio}</p>
              <a className="mk-link" href={m.linkedin} target="_blank" rel="noopener">Connect on LinkedIn &rarr;</a>
            </SpCard>
          ))}
        </div>
      </section>

      <section className="mk-section mk-section--soft">
        <SpCard elevation="raised" accentTop className="mk-podcast">
          <div>
            <p className="tg-eyebrow">Podcast</p>
            <h2>Open-source tools in low-resource settings</h2>
            <p>Hear Dr.&nbsp;Carmen Strigel explain why open-source software like Tangerine and Loquat matters for education in low-resource settings.</p>
            <SpButton as="a" variant="secondary" href="https://bold.expert/ai-edtech-in-low-resource-settings/" target="_blank" rel="noopener">Listen to the podcast</SpButton>
          </div>
          <div className="mk-podcast__mark"><img src="../../assets/product-icons/tangerine.png" alt="" /></div>
        </SpCard>
      </section>

      <section className="mk-cta">
        <h2>Ready to try Tangerine?</h2>
        <SpButton variant="accent" size="lg" onClick={() => go('trial')}>Get Started</SpButton>
      </section>
    </main>
  );
}

const SOCIALS = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC8U-vN0_ezdCjGfT34sxBlQ' },
  { label: 'Twitter / X', href: 'http://twitter.com/TangerineTool' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tangerine-central' },
];

function ContactPage({ go }) {
  const [sent, setSent] = useSpState(false);
  return (
    <main>
      <section className="mk-page-hero">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow">Contact Us</p>
          <h1>Let&rsquo;s talk</h1>
          <p>Questions about deployment, customization, or a free trial? Our team is here to help.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-contact">
          <SpCard elevation="raised" className="mk-contact__form">
            {sent ? (
              <div className="mk-trial__done">
                <div className="mk-trial__check">&#10003;</div>
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we&rsquo;ll be in touch soon.</p>
                <SpButton variant="secondary" onClick={() => go('home')}>Back to home</SpButton>
              </div>
            ) : (
              <React.Fragment>
                <h3>Send us a message</h3>
                <SpInput label="Full name" required placeholder="Amara Okafor" />
                <SpInput label="Work email" type="email" required placeholder="you@organization.org" />
                <SpInput label="Organization" placeholder="Your organization" />
                <label className="mk-textarea">
                  <span>How can we help?</span>
                  <textarea rows="4" placeholder={'Tell us about your program…'}></textarea>
                </label>
                <SpButton variant="primary" block onClick={() => setSent(true)}>Send message</SpButton>
              </React.Fragment>
            )}
          </SpCard>

          <aside className="mk-contact__aside">
            <h3>Other ways to reach us</h3>
            <p>Prefer a quick start? Request a trial directly.</p>
            <SpButton variant="accent" onClick={() => go('trial')}>Get Tangerine</SpButton>
            <div className="mk-contact__socials">
              <h4>Follow along</h4>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" className="mk-contact__social">{s.label} &rarr;</a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function HelpPage({ go }) {
  const entries = Object.entries(window.TG_HELP);
  return (
    <main>
      <section className="mk-page-hero">
        <div className="mk-page-hero__inner">
          <p className="tg-eyebrow">Help</p>
          <h1>How can we help?</h1>
          <p>Guides and answers for getting the most out of the Tangerine suite.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-help-grid">
          {entries.map(([slug, art]) => (
            <SpCard key={slug} interactive elevation="raised" className="mk-help" onClick={() => go('help/' + slug)}>
              <h3>{art.title}</h3>
              <p>{art.summary}</p>
              <span className="mk-link">Learn more &rarr;</span>
            </SpCard>
          ))}
        </div>
      </section>

      <section className="mk-cta">
        <h2>Can&rsquo;t find what you need?</h2>
        <p>Our team is happy to help with setup, customization, and rollout.</p>
        <SpButton variant="primary" size="lg" onClick={() => go('contact')}>Contact support</SpButton>
      </section>
    </main>
  );
}

function HelpArticlePage({ go, slug }) {
  const art = window.TG_HELP[slug];
  if (!art) { go('help'); return null; }
  const slugs = Object.keys(window.TG_HELP);
  const idx = slugs.indexOf(slug);
  const next = slugs[(idx + 1) % slugs.length];
  return (
    <main>
      <div className="mk-breadcrumb">
        <button onClick={() => go('home')}>HOME</button> &gt;{' '}
        <button onClick={() => go('help')}>HELP</button> &gt; <strong>{art.title.toUpperCase()}</strong>
      </div>

      <article className="mk-article">
        <p className="tg-eyebrow">Help</p>
        <h1>{art.title}</h1>
        <p className="mk-article__intro">{art.intro}</p>

        {art.sections.map((s, i) => (
          <section key={i} className="mk-article__sec">
            <h2>{s.h}</h2>
            {s.p && s.p.map((p, j) => <p key={j}>{p}</p>)}
            {s.steps && <ol className="mk-article__steps">{s.steps.map((t, j) => <li key={j}>{t}</li>)}</ol>}
            {s.list && <ul className="mk-article__list">{s.list.map((t, j) => <li key={j}>{t}</li>)}</ul>}
            {s.link && <SpButton as="a" variant="secondary" href={s.link.href} target="_blank" rel="noopener" iconRight={<span>&#8599;</span>}>{s.link.label}</SpButton>}
          </section>
        ))}

        <div className="mk-article__foot">
          <SpButton variant="ghost" onClick={() => go('help')} iconLeft={<span>&larr;</span>}>All help topics</SpButton>
          <SpButton variant="secondary" onClick={() => go('help/' + next)} iconRight={<span>&rarr;</span>}>Next: {window.TG_HELP[next].title}</SpButton>
        </div>
      </article>

      <section className="mk-cta">
        <h2>Still stuck?</h2>
        <p>Our team is happy to help with setup, customization, and rollout.</p>
        <SpButton variant="primary" size="lg" onClick={() => go('contact')}>Contact support</SpButton>
      </section>
    </main>
  );
}

window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
window.HelpPage = HelpPage;
window.HelpArticlePage = HelpArticlePage;
