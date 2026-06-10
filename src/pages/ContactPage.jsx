import NavHeader from '../components/NavHeader'

const infos = [
  ['Téléphone', '06 26 67 72 70'],
  ['Email', 'contact@codepa-paysagiste.fr'],
  ['Zone d’intervention', 'À préciser'],
]

const proofs = [
  'Prise de rendez-vous rapide',
  'Réponse simple',
  'Contact direct',
]

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" ctaLabel="Prendre rendez-vous" ctaTo="/contact" />

      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">CONTACT</p>
          <h1 className="hero-title">Prendre contact<br />doit être simple et <em>immédiat.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Un appel, un message, un rendez-vous. Le site doit retirer les obstacles et faciliter le premier échange.
          </p>
          <div className="list-rows" style={{ marginTop: 28 }}>
            {infos.map(([label, value]) => (
              <div className="row-item" key={label}>
                <div className="icon-dot">◌</div>
                <div>
                  <strong>{label}</strong>
                  <span className="muted">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="home-final-cta-actions" style={{ marginTop: 28 }}>
            <a className="primary-btn" href="tel:0626677270">Appeler maintenant <span>→</span></a>
            <a className="secondary-btn" href="mailto:contact@codepa-paysagiste.fr">Envoyer un email</a>
          </div>
        </div>

        <div className="page-grid">
          <div className="glass-card padded">
            <div className="proof-grid proof-grid-compact">
              {proofs.map((item) => (
                <article className="proof-item proof-item-compact" key={item}>
                  <strong>{item}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
