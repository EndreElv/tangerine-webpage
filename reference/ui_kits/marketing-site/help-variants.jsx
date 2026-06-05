// Help-article design explorations — three takes on the "Syncing & offline" article.
// All use the same Tangerine tokens (Baloo 2 / Mulish, tangerine + gold, radii, shadows).
const ART = () => window.TG_HELP['syncing-offline'];
const TOPICS = () => Object.entries(window.TG_HELP);

/* =====================================================================
   A · CURRENT — the live article style (mk-article classes)
   ===================================================================== */
function HelpVariantCurrent() {
  const art = ART();
  return (
    <div style={{ background: 'var(--surface-card)', minHeight: '100%' }}>
      <div className="mk-breadcrumb">HOME &gt; HELP &gt; <strong>{art.title.toUpperCase()}</strong></div>
      <article className="mk-article" style={{ paddingTop: 'var(--space-5)' }}>
        <p className="tg-eyebrow">Help</p>
        <h1>{art.title}</h1>
        <p className="mk-article__intro">{art.intro}</p>
        {art.sections.map((s, i) => (
          <section key={i} className="mk-article__sec">
            <h2>{s.h}</h2>
            {s.p && s.p.map((p, j) => <p key={j}>{p}</p>)}
            {s.list && <ul className="mk-article__list">{s.list.map((t, j) => <li key={j}>{t}</li>)}</ul>}
          </section>
        ))}
        <div className="mk-article__foot">
          <span className="mk-link">&larr; All help topics</span>
          <span className="mk-link">Next: Building instruments &rarr;</span>
        </div>
      </article>
    </div>
  );
}

/* =====================================================================
   B · PROFESSIONAL — docs layout: sticky topic sidebar + "on this page"
   ===================================================================== */
const proCss = {
  page: { display: 'grid', gridTemplateColumns: '232px 1fr', minHeight: '100%', background: 'var(--surface-card)', fontFamily: 'var(--font-sans)' },
  side: { borderRight: '1px solid var(--border-subtle)', padding: 'var(--space-6) var(--space-4)', background: 'var(--neutral-50)' },
  sideLabel: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--text-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: 'var(--space-3)' },
  navItem: { display: 'block', padding: '8px 12px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-body)', marginBottom: 2, borderLeft: '2px solid transparent' },
  navActive: { background: 'var(--tangerine-50)', color: 'var(--tangerine-700)', borderLeft: '2px solid var(--tangerine-500)' },
  main: { padding: 'var(--space-7) var(--space-8)', maxWidth: 760 },
  crumb: { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '.04em', marginBottom: 'var(--space-4)' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--text-strong)', margin: '0 0 12px', letterSpacing: '-0.01em' },
  meta: { display: 'flex', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', paddingBottom: 'var(--space-5)', marginBottom: 'var(--space-5)', borderBottom: '1px solid var(--border-subtle)' },
  intro: { fontSize: 'var(--text-lg)', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 'var(--space-6)' },
  sec: { marginBottom: 'var(--space-6)', scrollMarginTop: 20 },
  h2: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--text-strong)', margin: '0 0 var(--space-3)', paddingLeft: 14, borderLeft: '3px solid var(--tangerine-500)' },
  p: { color: 'var(--text-body)', lineHeight: 1.65, margin: '0 0 12px' },
  ul: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 },
  li: { position: 'relative', padding: '10px 0 10px 26px', borderBottom: '1px solid var(--neutral-100)', color: 'var(--text-body)', lineHeight: 1.5, fontSize: 'var(--text-sm)' },
  foot: { display: 'flex', gap: 12, marginTop: 'var(--space-7)' },
  footCard: { flex: 1, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 16px', cursor: 'pointer' },
  footLabel: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '.06em' },
  footTitle: { fontWeight: 700, color: 'var(--tangerine-600)', fontSize: 'var(--text-sm)', marginTop: 2 },
};
function HelpVariantPro() {
  const art = ART();
  return (
    <div style={proCss.page}>
      <aside style={proCss.side}>
        <div style={proCss.sideLabel}>Help topics</div>
        <nav>
          {TOPICS().map(([slug, a]) => (
            <span key={slug} style={{ ...proCss.navItem, ...(slug === 'syncing-offline' ? proCss.navActive : {}) }}>{a.title}</span>
          ))}
        </nav>
      </aside>
      <main style={proCss.main}>
        <div style={proCss.crumb}>Help / {art.title}</div>
        <h1 style={proCss.h1}>{art.title}</h1>
        <div style={proCss.meta}><span>UPDATED JUN 2026</span><span>3 MIN READ</span><span>OFFLINE-FIRST</span></div>
        <p style={proCss.intro}>{art.intro}</p>
        {art.sections.map((s, i) => (
          <section key={i} style={proCss.sec}>
            <h2 style={proCss.h2}>{s.h}</h2>
            {s.p && s.p.map((p, j) => <p key={j} style={proCss.p}>{p}</p>)}
            {s.list && <ul style={proCss.ul}>{s.list.map((t, j) => (
              <li key={j} style={proCss.li}><span style={{ position: 'absolute', left: 0, color: 'var(--tangerine-500)', fontWeight: 700 }}>&#8250;</span>{t}</li>
            ))}</ul>}
          </section>
        ))}
        <div style={proCss.foot}>
          <div style={proCss.footCard}><div style={proCss.footLabel}>&larr; Previous</div><div style={proCss.footTitle}>Getting started</div></div>
          <div style={{ ...proCss.footCard, textAlign: 'right' }}><div style={proCss.footLabel}>Next &rarr;</div><div style={proCss.footTitle}>Building instruments</div></div>
        </div>
      </main>
    </div>
  );
}

/* =====================================================================
   C · FUN — editorial: gradient hero, chunky cards, illustration, chips
   ===================================================================== */
const funCss = {
  page: { background: 'var(--surface-page)', minHeight: '100%', fontFamily: 'var(--font-sans)', paddingBottom: 'var(--space-8)' },
  hero: { background: 'var(--gradient-brand-diag)', padding: 'var(--space-8) var(--space-7) var(--space-9)', color: '#fff', position: 'relative', overflow: 'hidden' },
  heroArt: { position: 'absolute', right: -10, bottom: -20, width: 200, height: 200, opacity: 0.9 },
  eyebrow: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--text-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-200)' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', margin: '8px 0 12px', lineHeight: 1, maxWidth: '14ch', color: '#fff' },
  heroSub: { fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,.92)', maxWidth: '46ch', lineHeight: 1.5 },
  chips: { display: 'flex', gap: 8, marginTop: 'var(--space-5)', flexWrap: 'wrap' },
  chip: { background: 'rgba(255,255,255,.18)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: 'var(--text-sm)', fontWeight: 700, backdropFilter: 'blur(4px)' },
  body: { maxWidth: 760, margin: '0 auto', padding: '0 var(--space-6)', marginTop: '-40px', position: 'relative' },
  card: { background: 'var(--surface-card)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-lg)', marginBottom: 'var(--space-5)' },
  cardH: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 var(--space-4)', display: 'flex', alignItems: 'center', gap: 12 },
  badgeNum: { width: 40, height: 40, borderRadius: '50%', background: 'var(--gradient-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, flex: 'none', boxShadow: 'var(--shadow-brand)' },
  p: { color: 'var(--text-body)', lineHeight: 1.65, margin: '0 0 12px', fontSize: 'var(--text-md)' },
  pills: { display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 },
  pill: { display: 'flex', alignItems: 'flex-start', gap: 12, background: 'var(--tangerine-50)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', color: 'var(--neutral-800)', fontSize: 'var(--text-sm)', lineHeight: 1.5, fontWeight: 500 },
  pillCheck: { flex: 'none', width: 22, height: 22, borderRadius: '50%', background: 'var(--tangerine-500)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 },
  tip: { display: 'flex', gap: 16, alignItems: 'center', background: 'var(--gold-50)', border: '2px dashed var(--gold-300)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', marginBottom: 'var(--space-5)' },
  tipArt: { width: 64, height: 64, flex: 'none' },
  nav: { display: 'flex', gap: 12, marginTop: 'var(--space-6)' },
  navBtn: { flex: 1, borderRadius: 'var(--radius-xl)', padding: '16px 20px', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', border: '2px solid var(--tangerine-100)' },
  navLabel: { fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--gold-600)' },
  navTitle: { fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--tangerine-700)', fontSize: 'var(--text-lg)', marginTop: 2 },
};
function HelpVariantFun() {
  const art = ART();
  return (
    <div style={funCss.page}>
      <header style={funCss.hero}>
        <img src="../../assets/illustrations/cloud.png" alt="" style={funCss.heroArt} />
        <div style={funCss.eyebrow}>Help &middot; Guides</div>
        <h1 style={funCss.h1}>{art.title}</h1>
        <p style={funCss.heroSub}>{art.summary}</p>
        <div style={funCss.chips}>
          <span style={funCss.chip}>Offline-first</span>
          <span style={funCss.chip}>Android &amp; PWA</span>
          <span style={funCss.chip}>Auto-sync</span>
        </div>
      </header>
      <div style={funCss.body}>
        <div style={funCss.tip}>
          <img src="../../assets/illustrations/brain.png" alt="" style={funCss.tipArt} />
          <p style={{ margin: 0, color: 'var(--neutral-800)', lineHeight: 1.55 }}>{art.intro}</p>
        </div>
        {art.sections.map((s, i) => (
          <div key={i} style={funCss.card}>
            <h2 style={funCss.cardH}><span style={funCss.badgeNum}>{i + 1}</span>{s.h}</h2>
            {s.p && s.p.map((p, j) => <p key={j} style={funCss.p}>{p}</p>)}
            {s.list && <div style={funCss.pills}>{s.list.map((t, j) => (
              <div key={j} style={funCss.pill}><span style={funCss.pillCheck}>&#10003;</span><span>{t}</span></div>
            ))}</div>}
          </div>
        ))}
        <div style={funCss.nav}>
          <div style={funCss.navBtn}><div style={funCss.navLabel}>&larr; Previous</div><div style={funCss.navTitle}>Getting started</div></div>
          <div style={{ ...funCss.navBtn, textAlign: 'right' }}><div style={funCss.navLabel}>Up next &rarr;</div><div style={funCss.navTitle}>Building instruments</div></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HelpVariantCurrent, HelpVariantPro, HelpVariantFun });
