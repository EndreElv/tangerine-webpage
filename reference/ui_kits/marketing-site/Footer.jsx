// Tangerine marketing site — footer
function Footer({ go }) {
  const col = (title, links) => (
    <div className="mk-foot__col">
      <h4>{title}</h4>
      {links.map(([l, to]) => (
        <button key={l} className="mk-foot__link" onClick={() => to && go(to)}>{l}</button>
      ))}
    </div>
  );
  return (
    <footer className="mk-foot">
      <div className="mk-foot__inner">
        <div className="mk-foot__brand">
          <img src="../../assets/logos/tangerine-logo.png" alt="Tangerine" />
          <p>Open-source, offline-first data collection for education — deployed in 65+ countries.</p>
        </div>
        {col('Products', [['Tangerine', 'p-tangerine'], ['Tangerine:Teach', 'p-teach'], ['Tangerine:Coach', 'p-coach'], ['Tangerine:Acuity', 'p-acuity']])}
        {col('Resources', [['User Stories', 'user-stories'], ['Impact', 'impact'], ['FAQs', 'faqs'], ['Get Tangerine', 'trial']])}
        {col('Support', [['Help', 'help'], ['Contact Us', 'contact'], ['About', 'about']])}
      </div>
      <div className="mk-foot__bar">
        <span>©2025 Tangerine Central, LLC. All Rights Reserved.</span>
        <span>The Tangerine Logo is a registered trademark of Research Triangle Institute.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
