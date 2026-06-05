// Tangerine marketing site — generic product detail page (data-driven)
const { Button: PPButton, Card: PPCard, Badge: PPBadge } = window.TangerineDesignSystem_c907c9;

function FeatureBlock({ block, go }) {
  return (
    <div className={'mk-feature-row' + (block.reverse ? ' mk-feature-row--rev' : '')}>
      <div className="mk-feature-row__text">
        {block.eyebrow && <p className="tg-eyebrow">{block.eyebrow}</p>}
        <h2>{block.heading}</h2>
        {block.body.map((p, i) => <p key={i}>{p}</p>)}
        {block.cta && (
          <PPButton variant="primary" onClick={() => go(block.cta.to)}>{block.cta.label}</PPButton>
        )}
      </div>
      <figure className="mk-feature-row__media">
        <PPCard elevation="raised" padded={false}>
          <img src={block.image} alt={block.heading} />
        </PPCard>
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    </div>
  );
}

function WideBlock({ block }) {
  return (
    <div className="mk-wide-block">
      {block.eyebrow && <p className="tg-eyebrow" style={{ textAlign: 'center' }}>{block.eyebrow}</p>}
      <h2 className="mk-section__title">{block.heading}</h2>
      {block.body && block.body.map((p, i) => <p key={i} className="mk-section__lead">{p}</p>)}
      <PPCard elevation="raised" padded={false} className="mk-report">
        <img src={block.image} alt={block.heading} />
      </PPCard>
    </div>
  );
}

function ModulesBlock({ block }) {
  return (
    <div className="mk-modules">
      {block.cards.map((m) => (
        <PPCard key={m.title} elevation="raised" media={m.img} className="mk-module">
          <h3>{m.title}</h3>
          <p>{m.body}</p>
        </PPCard>
      ))}
    </div>
  );
}

function VideoBlock({ block }) {
  return (
    <div className="mk-video">
      <h2 className="mk-section__title">{block.heading}</h2>
      <div className="mk-video__frame">
        <iframe src={`https://www.youtube.com/embed/${block.id}`} title={block.heading}
                frameBorder="0" allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
  );
}

function ProductPage({ go, product }) {
  const p = product;
  return (
    <main>
      <div className="mk-breadcrumb">
        <button onClick={() => go('home')}>HOME</button> &gt; PRODUCTS &gt; <strong>{p.crumb}</strong>
      </div>

      <section className={'mk-prod-hero' + (p.logoTall ? ' mk-prod-hero--tall' : '')}>
        <img className="mk-prod-hero__logo" src={p.logo} alt={p.name} />
        <h1>{p.name}</h1>
        {p.badge && <div className="mk-prod-hero__badge"><PPBadge tone="accent" solid>{p.badge}</PPBadge></div>}
        {p.lead.map((t, i) => <p key={i}>{t}</p>)}
      </section>

      {p.blocks.map((block, i) => {
        const soft = i % 2 === 0;
        return (
          <section key={i} className={'mk-section' + (soft ? ' mk-section--soft' : '')}>
            {block.type === 'feature' && (block.wide
              ? <WideBlock block={block} />
              : <FeatureBlock block={block} go={go} />)}
            {block.type === 'modules' && <ModulesBlock block={block} />}
            {block.type === 'video' && <VideoBlock block={block} />}
          </section>
        );
      })}

      <section className="mk-cta">
        <h2>{p.cta.heading}</h2>
        <PPButton variant="accent" size="lg" onClick={() => go(p.cta.to)}>{p.cta.label}</PPButton>
      </section>
    </main>
  );
}
window.ProductPage = ProductPage;
